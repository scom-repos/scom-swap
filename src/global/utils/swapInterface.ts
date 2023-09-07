import { IWalletPlugin } from "@scom/scom-wallet-modal";
import { ITokenObject } from '@scom/scom-token-list';

export type Category = 'fixed-pair' | 'fixed-protocal' | 'aggregator' | 'cross-chain-swap';

export interface ISwapConfig {
  category: Category;
  providers: IProvider[];
}

export interface IContractInfo {
  factoryAddress: string;
  routerAddress: string;
  tradeFee: {
    fee: string;
    base: string;
  },
  fromToken?: string;
  toToken?: string;
}

export interface IProvider {
  key: string;
}

export interface IProviderUI {
  key: string;
  chainId: number;
}

export interface ICommissionInfo {
  chainId: number;
  walletAddress: string;
}

export interface INetworkConfig {
  chainName?: string;
  chainId: number;
}

export interface ISwapConfigUI {
  campaignId?: number;
  category: Category;
  providers: IProviderUI[];
  commissions?: ICommissionInfo[];
  tokens?: ITokenObject[];
  defaultChainId: number;
  wallets: IWalletPlugin[];
  networks: INetworkConfig[];
  showHeader?: boolean;
  logo?: string;
  title?: string;
}
