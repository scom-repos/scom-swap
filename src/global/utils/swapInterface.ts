import { IWalletPlugin } from "@scom/scom-wallet-modal";
import { ITokenObject } from "./common";

export type Category = 'fixed-pair' | 'aggregator';

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
  caption: string;
  image: string;
  key: string;
  dexId?: number;
}

export interface IProviderUI {
  caption: string;
  image: string;
  key: string;
  dexId?: number;
  chainId: string | number;
}

export interface ICommissionInfo {
  chainId: number;
  walletAddress: string;
  share: string;
}

export interface INetworkConfig {
  chainName?: string;
  chainId: number;
}

export interface ISwapConfigUI {
  category: Category;
  providers: IProviderUI[];
  commissions?: ICommissionInfo[];
  tokens?: ITokenObject[];
  defaultChainId: number;
  wallets: IWalletPlugin[];
  networks: INetworkConfig[];
  showHeader?: boolean;
}

export interface IEmbedData {
  category?: Category;
  providers?: IProviderUI[];
  commissions?: ICommissionInfo[];
}