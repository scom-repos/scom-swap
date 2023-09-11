import { BigNumber } from "@ijstech/eth-wallet";
import { ITokenObject } from "@scom/scom-token-list";

export interface IBridgeVaultBond {
  vaultTrollRegistry: string;
  chainId: number;
  trollId: string;
  shareHolder: string;
  bond: string;
  shares: string;
  sharesPendingWithdrawal: string;
  sharesApprovedWithdrawal: string;
  version: string;
}

export interface IBridgeVault {
  chainId: number;
  address: string;
  asset: string;
  configStore: string;
  baseFee: string;
  protocolFee: string;
  transactionFee: string;
  imbalanceFee: string;
  lpAssetBalance: string;
  imbalance: string;
  vaultType: string;
  vaultGroup: string;
  version: string;
}

// Bridge Swap
export interface CreateBridgeVaultOrderParams {
  vaultAddress: string;
  targetChainId: number;
  tokenIn: ITokenObject;
  tokenOut: ITokenObject;
  amountIn: string;
  minAmountOut: string;
  sourceRouteInfo?: {
    amountOut: string;
    pairs: string[];
  };
}

export interface Order {
  peerChain: number | BigNumber;
  inAmount: number | BigNumber;
  outToken: string;
  minOutAmount: number | BigNumber;
  to: string;
  expire: number | BigNumber;
}

export interface SwapExactETHForTokensParams {
  pair: string[];
  vault: string;
  deadline: number | BigNumber;
  order: Order;
}

export interface SwapExactTokensForTokensParams {
  pair: string[];
  vault: string;
  amountIn: number | BigNumber;
  deadline: number | BigNumber;
  order: Order;
}

export interface GetAvailableRouteOptionsParams {
  fromChainId: number;
  toChainId: number;
  tokenIn: ITokenObject;
  tokenOut: ITokenObject;
  amountIn: number | BigNumber;
}

export interface IBridgeFees {
  baseFee: BigNumber | number;
  protocolFee: BigNumber | number;
  transactionFee: BigNumber | number;
  imbalanceFee: BigNumber | number;
  sourceRouteLiquidityFee?: BigNumber | number;
  targetRouteLiquidityFee?: BigNumber | number;
}

export interface ICrossChainRouteResult {
  contractAddress: string;
  vaultAddress: string;
  fromAmount: BigNumber;
  toAmount: BigNumber;
  fees: IBridgeFees;
  price: number;
  priceSwap: number;
  priceImpact: number;
  sourceRouteObj?: IRoutesResult | null;
  sourceVaultToken?: ITokenObject | null;
  targetRouteObj: IRoutesResult;
  targetVaultToken: ITokenObject;
  vaultTokenToTargetChain: string;
  vaultTokenFromSourceChain: BigNumber;
  isApproveButtonShown?: boolean;
  tardeFee: number;
}

export interface IRoutesResult {
  amountOut: BigNumber;
  bestRoutes: ITokenObject[];
  bestSmartRoute: IBestSmartRoute[];
  key: string;
  market: number[];
  pairs: string[];
  price: number;
  priceImpact: number;
  provider: string;
  queueType: number;
  tradeFee: string;
}

export interface IBestSmartRoute {
  caption: string;
  fromToken: ITokenObject;
  toToken: ITokenObject;
  pairAddress: string;
  provider: string;
}

export interface ICrossChainRouteFromAPI {
  vault: string;
  sourceRoute: IRoutesAPI;
  targetRoute: IRoutesAPI;
  fees: IBridgeFees;
}

export interface IRoutesAPI {
  amountOut: string;
  dexId: number;
  queueType?: number;
  isDirectRoute: boolean;
  route: IRouteAPI[];
  tokens: {
    address: string;
    decimals: number;
    name: string;
    symbol: string;
  }[];
  tradeFees: {
    fee: string;
    base: string;
  }[];
}

export interface IRouteAPI {
  address: string;
  dexId: number;
  reserves: {
    reserve0: string;
    reserve1: string;
  };
  boostReserves?: {
    // For Impossible Finance v3 Only
    boostReserveIn: string;
    boostReserveOut: string;
  };
  // For Queues
  queueType?: number;
  orderIds?: string[];
}

export interface NewOrderParams {
  vaultAddress: string,
  targetChainId: number,
  tokenIn: ITokenObject,
  tokenOut: ITokenObject,
  amountIn: string,
  minAmountOut: string,
  sourceRouteInfo?: {
    amountOut: string,
    pairs: string[]
  }
}

export interface TradeFee {
  fee: string
  base: string
}

export interface TradeFeeMap {
  [market: number]: TradeFee
}
