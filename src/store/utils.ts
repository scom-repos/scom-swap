import { application } from '@ijstech/components';
import { INetwork, Wallet, ERC20ApprovalModel, IERC20ApprovalEventOptions } from '@ijstech/eth-wallet';
import { ITokenObject, tokenStore } from '@scom/scom-token-list';
import { IProvider, ITokenConfig } from '../global/index';
import { ChainNativeTokenByChainId } from '@scom/scom-token-list';
import getNetworkList from '@scom/scom-network-list'
import { IDexDetail, IDexInfo } from '@scom/scom-dex-list';

export enum WalletPlugin {
  MetaMask = 'metamask',
  WalletConnect = 'walletconnect',
}

export type ProxyAddresses = { [key: number]: string };

export class State {
  isExpertMode: boolean = false;
  slippageTolerance: number = 0.5;
  swapTransactionDeadline: number = 30;
  bridgeTransactionDeadline: number = 120;
  infuraId: string = "";
  dexInfoList: IDexInfo[] = [];
  providerList: IProvider[] = [];
  proxyAddresses: ProxyAddresses = {};
  apiEndpoints: Record<string, string> = {};
  embedderCommissionFee: string;
  rpcWalletId: string = "";
  approvalModel: ERC20ApprovalModel;

  constructor(options: any) {
    this.initData(options);
  }

  initRpcWallet(defaultChainId: number) {
    if (this.rpcWalletId) {
      return this.rpcWalletId;
    }
    const clientWallet = Wallet.getClientInstance();
    const networkList: INetwork[] = Object.values(application.store?.networkMap || []);
    const instanceId = clientWallet.initRpcWallet({
      networks: networkList,
      defaultChainId,
      infuraId: application.store?.infuraId,
      multicalls: application.store?.multicalls
    });
    this.rpcWalletId = instanceId;
    if (clientWallet.address) {
      const rpcWallet = Wallet.getRpcWalletInstance(instanceId);
      rpcWallet.address = clientWallet.address;
    }
    return instanceId;
  }

  setProviderList(value: IProvider[]) {
    this.providerList = value;
  }

  setDexInfoList(value: IDexInfo[]) {
    this.dexInfoList = value;
  }

  getDexInfoList(options?: { key?: string, chainId?: number }) {
    if (!options) return this.dexInfoList;
    const { key, chainId } = options;
    let dexList = this.dexInfoList;
    if (key) {
      dexList = dexList.filter(v => v.dexCode === key);
    }
    if (chainId) {
      dexList = dexList.filter(v => v.details.some(d => d.chainId === chainId));
    }
    return dexList;
  }

  getDexDetail(key: string, chainId: number) {
    for (const dex of this.dexInfoList) {
      if (dex.dexCode === key) {
        const dexDetail: IDexDetail = dex.details.find(v => v.chainId === chainId);
        if (dexDetail) {
          return dexDetail;
        }
      }
    }
    return undefined;
  }

  getProxyAddress(chainId?: number) {
    const _chainId = chainId || Wallet.getInstance().chainId;
    const proxyAddresses = this.proxyAddresses;
    if (proxyAddresses) {
      return proxyAddresses[_chainId];
    }
    return null;
  }

  getProviderByKey(providerKey: string) {
    const providers = this.providerList || [];
    return providers.find(item => item.key === providerKey) || null;
  }

  getRpcWallet() {
    return this.rpcWalletId ? Wallet.getRpcWalletInstance(this.rpcWalletId) : null;
  }

  isRpcWalletConnected() {
    const wallet = this.getRpcWallet();
    return wallet?.isConnected;
  }

  getChainId() {
    const rpcWallet = this.getRpcWallet();
    return rpcWallet?.chainId;
  }

  toggleExpertMode() {
    this.isExpertMode = !this.isExpertMode
  }

  private initData(options: any) {
    if (options.infuraId) {
      this.infuraId = options.infuraId;
    }
    if (options.proxyAddresses) {
      this.proxyAddresses = options.proxyAddresses;
    }
    if (options.apiEndpoints) {
      this.setAPIEnpoints(options.apiEndpoints);
    }
  }

  setAPIEnpoints(apiEndpoints: Record<string, string>) {
    this.apiEndpoints = apiEndpoints;
  }

  getAPIEndpoint(key: string) {
    return this.apiEndpoints[key];
  }

  async setApprovalModelAction(options: IERC20ApprovalEventOptions) {
    const approvalOptions = {
      ...options,
      spenderAddress: ''
    };
    let wallet = this.getRpcWallet();
    this.approvalModel = new ERC20ApprovalModel(wallet, approvalOptions);
    let approvalModelAction = this.approvalModel.getAction();
    return approvalModelAction;
  }
}

export const getNetworkInfo = (chainId: number) => {
  const networkMap = application.store["networkMap"];
  return networkMap[chainId];
}

export const getTokenObjArr = (tokens: ITokenConfig[]) => {
  let tokenObjArr: ITokenObject[] = [];
  for (let token of tokens) {
    let tokenMap = tokenStore.getTokenMapByChainId(token.chainId);
    const tokenAddress = token.address?.startsWith('0x') ? token.address.toLowerCase() : ChainNativeTokenByChainId[token.chainId].symbol;
    const tokenObj = tokenMap[tokenAddress];
    if (tokenObj) {
      tokenObjArr.push({...tokenObj, chainId: token.chainId});
    }
  }
  return tokenObjArr;
}

// wallet
export function isClientWalletConnected() {
  const wallet = Wallet.getClientInstance();
  return wallet.isConnected;
}

export const getChainNativeToken = (chainId: number): ITokenObject => {
  return ChainNativeTokenByChainId[chainId];
};

export function getClientWallet() {
  return Wallet.getClientInstance();
}