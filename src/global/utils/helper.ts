import { FormatUtils } from "@ijstech/components";
import { BigNumber } from "@ijstech/eth-wallet";

export const formatNumber = (value: number | string | BigNumber, decimalFigures?: number) => {
  if (typeof value === 'object') {
    value = value.toString();
  }
  const minValue = '0.0000001';
  return FormatUtils.formatNumber(value, {decimalFigures: decimalFigures || 4, minValue});
};

export const isInvalidInput = (val: any) => {
  const value = new BigNumber(val);
  if (value.lt(0)) return true;
  return (val || '').toString().substring(0, 2) === '00' || val === '-';
};

export async function getAPI(url: string, paramsObj?: any): Promise<any> {
  let queries = '';
  if (paramsObj) {
    try {
      queries = new URLSearchParams(paramsObj).toString();
    } catch (err) {
      console.log('err', err)
    }
  }
  let fullURL = url + (queries ? `?${queries}` : '');
  const response = await fetch(fullURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  });
  return response.json();
}
