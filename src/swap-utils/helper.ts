import { BigNumber } from "@ijstech/eth-wallet";
import { Control } from "@ijstech/components";

export function debounce(func: any, timeout = 500, target: Control){
  let timer: any; // NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(target, args); }, timeout);
  };
};