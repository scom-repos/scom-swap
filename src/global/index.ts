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

export enum ApprovalStatus {
  TO_BE_APPROVED,
  APPROVING,
  NONE,
}

export const SwapTypes = [
  'fixed-pair',
  'fixed-protocal',
  'aggregator',
  'cross-chain-swap'
];

export const DEAULT_SWAP_TYPE = 'fixed-pair';

export * from './utils/index';
