import { BigNumber } from "@ijstech/eth-wallet";
import { BridgeVaultConstant, BridgeVaultGroupList, MockOracleMap } from "../store/index";
import { Control } from "@ijstech/components";

export function debounce(func: any, timeout = 500, target: Control){
  let timer: any; // NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(target, args); }, timeout);
  };
};

export const bridgeVaultConstantMap = BridgeVaultGroupList.reduce((acc, cur) => {
  if (cur.deprecated) return acc;
  if (acc[cur.name] == null) acc[cur.name] = {};
  Object.entries(cur.vaults).forEach(([chainId, v]) => {
    acc[cur.name][chainId] = v;
  })
  return acc;
}, {} as { [assetSymbol: string]: { [chainId: string]: BridgeVaultConstant } });
