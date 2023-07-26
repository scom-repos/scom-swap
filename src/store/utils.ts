import { application } from '@ijstech/components';
import { INetwork, Wallet } from '@ijstech/eth-wallet';
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

export const state = {
  currentChainId: 0,
  isExpertMode: false,
  slippageTolerance: 0.5,
  transactionDeadline: 30,
  infuraId: "",
  networkMap: {} as { [key: number]: INetwork },
  dexInfoList: [] as IDexInfo[],
  providerList: [] as IProvider[],
  proxyAddresses: {} as ProxyAddresses,
  ipfsGatewayUrl: "",
  apiGatewayUrls: {} as Record<string, string>,
  embedderCommissionFee: "0",
  tokens: [],
  rpcWalletId: ""
}

export const setDataFromConfig = (options: any) => {
  if (options.infuraId) {
    setInfuraId(options.infuraId)
  }
  if (options.networks) {
    setNetworkList(options.networks, options.infuraId)
  }
  if (options.proxyAddresses) {
    setProxyAddresses(options.proxyAddresses)
  }
  if (options.ipfsGatewayUrl) {
    setIPFSGatewayUrl(options.ipfsGatewayUrl);
  }
  if (options.apiGatewayUrls) {
    setAPIGatewayUrls(options.apiGatewayUrls);
  }
  if (options.embedderCommissionFee) {
    setEmbedderCommissionFee(options.embedderCommissionFee);
  }
}

export const setProxyAddresses = (data: ProxyAddresses) => {
  state.proxyAddresses = data;
}

export const getProxyAddress = (chainId?: number) => {
  const _chainId = chainId || Wallet.getInstance().chainId;
  const proxyAddresses = state.proxyAddresses;
  if (proxyAddresses) {
    return proxyAddresses[_chainId];
  }
  return null;
}

export const setIPFSGatewayUrl = (url: string) => {
  state.ipfsGatewayUrl = url;
}

export const getIPFSGatewayUrl = () => {
  return state.ipfsGatewayUrl;
}

export const setAPIGatewayUrls = (urls: Record<string, string>) => {
  state.apiGatewayUrls = urls;
}

const setEmbedderCommissionFee = (fee: string) => {
  state.embedderCommissionFee = fee;
}

export const getEmbedderCommissionFee = () => {
  return state.embedderCommissionFee;
}

export const setCurrentChainId = (value: number) => {
  state.currentChainId = value;
}

export const getCurrentChainId = (): number => {
  return state.currentChainId;
}

export const isExpertMode = (): boolean => {
  return state.isExpertMode;
}

export function toggleExpertMode() {
  state.isExpertMode = !state.isExpertMode
}

export const getSlippageTolerance = (): any => {
  return state.slippageTolerance
};

export const setSlippageTolerance = (value: any) => {
  state.slippageTolerance = value
}

export const getTransactionDeadline = (): any => {
  return state.transactionDeadline;
}

export const setTransactionDeadline = (value: any) => {
  state.transactionDeadline = value
}

const setInfuraId = (infuraId: string) => {
  state.infuraId = infuraId;
}

export const getInfuraId = () => {
  return state.infuraId;
}

const setNetworkList = (networkList: INetwork[], infuraId?: string) => {
  const wallet = Wallet.getClientInstance();
  state.networkMap = {};
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
    state.networkMap[network.chainId] = {
      ...networkInfo,
      ...network
    };
    wallet.setNetworkInfo(state.networkMap[network.chainId]);
  }
}

export const getSupportedNetworks = () => {
  return Object.values(state.networkMap);
}

export const getNetworkInfo = (chainId: number) => {
  const networkMap = application.store["networkMap"];
  return networkMap[chainId];
}

export const setDexInfoList = (value: IDexInfo[]) => {
  state.dexInfoList = value;
}

export const getDexInfoList = () => {
  return state.dexInfoList || [];
}

export const setProviderList = (value: IProvider[]) => {
  state.providerList = value;
}

export const getProviderList = () => {
  return state.providerList || [];
}

export const getProviderByKey = (providerKey: string) => {
  const providers = state.providerList || [];
  return providers.find(item => item.key === providerKey) || null;
}

// wallet
export function isClientWalletConnected() {
  const wallet = Wallet.getClientInstance();
  return wallet.isConnected;
}

export function isRpcWalletConnected() {
  const wallet = getRpcWallet();
  return wallet?.isConnected;
}

export const hasMetaMask = function () {
  const wallet = Wallet.getClientInstance();
  return wallet?.clientSideProvider?.name === WalletPlugin.MetaMask;
}

export function getChainId() {
  const rpcWallet = getRpcWallet();
  return rpcWallet.chainId;
}

export const getChainNativeToken = (chainId: number): ITokenObject => {
  return ChainNativeTokenByChainId[chainId];
};

export function initRpcWallet(defaultChainId: number) {
  if (state.rpcWalletId) {
    return state.rpcWalletId;
  }
  const clientWallet = Wallet.getClientInstance();
  const networkList: INetwork[] = Object.values(application.store?.networkMap || []);
  const instanceId = clientWallet.initRpcWallet({
    networks: networkList,
    defaultChainId,
    infuraId: application.store?.infuraId,
    multicalls: application.store?.multicalls
  });
  state.rpcWalletId = instanceId;
  if (clientWallet.address) {
    const rpcWallet = Wallet.getRpcWalletInstance(instanceId);
    rpcWallet.address = clientWallet.address;
  }
  return instanceId;
}

export function getRpcWallet() {
  return state.rpcWalletId ? Wallet.getRpcWalletInstance(state.rpcWalletId) : null;
}

export function getClientWallet() {
  return Wallet.getClientInstance();
}