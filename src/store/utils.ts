import { application } from '@ijstech/components';
import { INetwork, Wallet, ERC20ApprovalModel, IERC20ApprovalEventOptions } from '@ijstech/eth-wallet';
import { ITokenObject } from '@scom/scom-token-list';
import { IProvider } from '../global/index';
import { ChainNativeTokenByChainId } from '@scom/scom-token-list';
import getNetworkList from '@scom/scom-network-list'
import { IDexInfo } from '@scom/scom-dex-list';

export enum WalletPlugin {
  MetaMask = 'metamask',
  WalletConnect = 'walletconnect',
}

export type ProxyAddresses = { [key: number]: string };

export class State {
  isExpertMode: boolean = false;
  slippageTolerance: number = 0.5;
  transactionDeadline: number = 30;
  infuraId: string = "";
  networkMap: { [key: number]: INetwork } = {};
  dexInfoList: IDexInfo[] = [];
  providerList: IProvider[] = [];
  proxyAddresses: ProxyAddresses = {};
  ipfsGatewayUrl: string = "";
  apiGatewayUrls: Record<string, string> = {};
  embedderCommissionFee: string;
  rpcWalletId: string = "";
  approvalModel: ERC20ApprovalModel;

  constructor(options: any) {
    this.networkMap = getNetworkList();
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
    return rpcWallet.chainId;
  }

  toggleExpertMode() {
    this.isExpertMode = !this.isExpertMode
  }

  private initData(options: any) {
    if (options.infuraId) {
      this.infuraId = options.infuraId;
    }
    if (options.networks) {
      this.setNetworkList(options.networks, options.infuraId)
    }
    if (options.proxyAddresses) {
      this.proxyAddresses = options.proxyAddresses;
    }
    if (options.ipfsGatewayUrl) {
      this.ipfsGatewayUrl = options.ipfsGatewayUrl;
    }
    if (options.apiGatewayUrls) {
      this.apiGatewayUrls = options.apiGatewayUrls;
    }
  }

  private setNetworkList(networkList: INetwork[], infuraId?: string) {
    const wallet = Wallet.getClientInstance();
    this.networkMap = {};
    const defaultNetworkList = getNetworkList();
    const defaultNetworkMap = defaultNetworkList.reduce((acc, cur) => {
      acc[cur.chainId] = cur;
      return acc;
    }, {});
    for (let network of networkList) {
      const networkInfo = defaultNetworkMap[network.chainId];
      if (!networkInfo) continue;
      if (infuraId && network.rpcUrls && network.rpcUrls.length > 0) {
        for (let i = 0; i < network.rpcUrls.length; i++) {
          network.rpcUrls[i] = network.rpcUrls[i].replace(/{InfuraId}/g, infuraId);
        }
      }
      this.networkMap[network.chainId] = {
        ...networkInfo,
        ...network
      };
      wallet.setNetworkInfo(this.networkMap[network.chainId]);
    }
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

// wallet
export function isClientWalletConnected() {
  const wallet = Wallet.getClientInstance();
  return wallet.isConnected;
}

export const hasMetaMask = function () {
  const wallet = Wallet.getClientInstance();
  return wallet?.clientSideProvider?.name === WalletPlugin.MetaMask;
}

export const getChainNativeToken = (chainId: number): ITokenObject => {
  return ChainNativeTokenByChainId[chainId];
};

export function getClientWallet() {
  return Wallet.getClientInstance();
}