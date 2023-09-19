import { FormatUtils } from "@ijstech/components";
import { BigNumber } from "@ijstech/eth-wallet";

export const formatNumber = (value: number | string | BigNumber, decimals?: number) => {
  // let val = value;
  // const minValue = '0.0000001';
  // if (typeof value === 'string') {
  //   val = new BigNumber(value).toNumber();
  // } else if (typeof value === 'object') {
  //   val = value.toNumber();
  // }
  // if (val != 0 && new BigNumber(val).lt(minValue)) {
  //   return `<${minValue}`;
  // }
  if (typeof value === 'object') {
    value = value.toString();
  }
  return FormatUtils.formatNumberWithSeparators(value, decimals || 4);
};

export const isInvalidInput = (val: any) => {
  const value = new BigNumber(val);
  if (value.lt(0)) return true;
  return (val || '').toString().substring(0, 2) === '00' || val === '-';
};

// export const limitDecimals = (value: any, decimals: number) => {
//   let val = value;
//   if (typeof value !== 'string') {
//     val = val.toString();
//   }
//   let chart;
//   if (val.includes('.')) {
//     chart = '.';
//   } else if (val.includes(',')) {
//     chart = ',';
//   } else {
//     return value;
//   }
//   const parts = val.split(chart);
//   let decimalsPart = parts[1];
//   if (decimalsPart && decimalsPart.length > decimals) {
//     parts[1] = decimalsPart.substr(0, decimals);
//   }
//   return parts.join(chart);
// }

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
