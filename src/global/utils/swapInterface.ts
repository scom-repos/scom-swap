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
  contractInfo: { [chainId: string]: IContractInfo };
}

export interface IProviderUI {
  caption: string;
  image: string;
  key: string;
  dexId?: number;
  // Contract Info
  chainId: string | number;
  factoryAddress: string;
  routerAddress: string;
  fromToken?: string;
  toToken?: string;
  tradeFee: {
    fee: string;
    base: string;
  }
}

export interface ISwapConfigUI {
  category: Category;
  providers: IProviderUI[];
}