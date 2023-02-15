import { BigNumber } from "@ijstech/eth-wallet";
import { initCrossChainWallet } from "@swap/crosschain-utils";
import { BridgeVaultConstant, BridgeVaultGroupList, MockOracleMap } from "@swap/store";
import { Contracts as SolidityContracts } from "@scom/oswap-chainlink-contract"
import { Control } from "@ijstech/components";

export function debounce(func: any, timeout = 500, target: Control){
  let timer: any; // NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(target, args); }, timeout);
  };
};

export const getOraclePriceMap = async (chainId: number) => {
  const oraclePriceMap: {[key: string]: BigNumber} = {};
  const wallet: any = initCrossChainWallet(chainId);
  await Promise.all(Object.entries(MockOracleMap[chainId]).map(async ([token, oracle]) => {
    let mockOracleContract = new SolidityContracts.AggregatorProxy(wallet, oracle)
    oraclePriceMap[token.toLowerCase()] = (await mockOracleContract.latestAnswer()).shiftedBy(-18) // token -> USD 
  }));
  return oraclePriceMap;
}

export const bridgeVaultConstantMap = BridgeVaultGroupList.reduce((acc, cur) => {
  if (cur.deprecated) return acc;
  if (acc[cur.name] == null) acc[cur.name] = {};
  Object.entries(cur.vaults).forEach(([chainId, v]) => {
    acc[cur.name][chainId] = v;
  })
  return acc;
}, {} as { [assetSymbol: string]: { [chainId: string]: BridgeVaultConstant } });
