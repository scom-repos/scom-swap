export interface INetwork {
  chainId: number;
  name: string;
  img: string;
  rpc?: string;
  isDisabled?: boolean;
  isMainChain?: boolean;
  explorerName?: string;
  explorerTxUrl?: string;
  explorerAddressUrl?: string;
  isTestnet?: boolean;
};

export const ABIKeys = {
  Factory: 'OAXDEX_Factory',
  Pair: 'OAXDEX_Pair',
  //New
  OracleFactory: 'OSWAP_OracleFactory',
  OraclePair: 'OSWAP_OraclePair',
  OracleLiquidityProvider: 'OSWAP_OracleLiquidityProvider',
  HybridRouterRegistry: 'OSWAP_HybridRouterRegistry',
  HybridRouter: 'OSWAP_HybridRouter2',
  RangeFactory: 'OSWAP_RangeFactory',
  RangePair: 'OSWAP_RangePair',
  RangeLiquidityProvider: 'OSWAP_RangeLiquidityProvider',
  OracleAdaptor: 'OSWAP_OracleAdaptor',
  RestrictedFactory: 'OSWAP_RestrictedFactory',
  RestrictedPair: 'OSWAP_RestrictedPair',
  RestrictedLiquidityProvider: 'OSWAP_RestrictedLiquidityProvider',
  ConfigStore: 'OSWAP_ConfigStore',
  PeggedOracleFactory: 'OSWAP_PeggedOracleFactory',
  PeggedOraclePair: 'OSWAP_PeggedOraclePair',
  PeggedOracleLiquidityProvider: 'OSWAP_PeggedOracleLiquidityProvider',


  //Old
  // OracleFactory: 'OAXDEX_OracleFactory',
  //RangeFactory: 'OAXDEX_RangeFactory',
  //RestrictedFactory: 'OAXDEX_RestrictedFactory',
  //OraclePair: 'OAXDEX_OraclePair',
  //RangePair: 'OAXDEX_RangePair',
  //RestrictedPair: 'OAXDEX_RestrictedPair',
  // OracleLiquidityProvider: 'OAXDEX_OracleLiquidityProvider',
  //RangeLiquidityProvider: 'OAXDEX_RangeLiquidityProvider',
  //RestrictedLiquidityProvider: 'OAXDEX_RestrictedLiquidityProvider',
  //ConfigStore: 'OAXDEX_ConfigStore',
  //OracleAdaptor: 'OAXDEX_OracleAdaptor',
  // HybridRouterRegistry: 'OAXDEX_HybridRouterRegistry',
  // HybridRouter: 'OAXDEX_HybridRouter2'
};

export const enum EventId {
  ConnectWallet = 'connectWallet',
  IsWalletConnected = 'isWalletConnected',
  IsWalletDisconnected = 'IsWalletDisconnected',
  Paid = 'Paid',
  chainChanged = 'chainChanged',
  EmitButtonStatus = 'emitButtonStatus',
  EmitInput = 'emitInput',
  EmitNewToken = 'emitNewToken',
  SlippageToleranceChanged = 'SlippageToleranceChanged',
  ExpertModeChanged = 'ExpertModeChanged',
  ShowTransactionModal = 'ShowTransactionModal',
  ShowExpertModal = 'ShowExpertModal'
}

export enum QueueType {
  PRIORITY_QUEUE,
  RANGE_QUEUE,
  GROUP_QUEUE,
  PEGGED_QUEUE
}

export * from './utils/index';
