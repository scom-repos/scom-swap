export const enum EventId {
  ConnectWallet = 'connectWallet',
  IsWalletConnected = 'isWalletConnected',
  IsWalletDisconnected = 'IsWalletDisconnected',
  Paid = 'Paid',
  chainChanged = 'chainChanged',
  SlippageToleranceChanged = 'SlippageToleranceChanged',
  ExpertModeChanged = 'ExpertModeChanged',
  ShowExpertModal = 'ShowExpertModal'
}

export * from './utils/index';
