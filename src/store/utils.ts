import { application } from '@ijstech/components';
import { Wallet, WalletPlugin } from '@ijstech/eth-wallet';
import { EventId, INetwork, IProvider, ITokenObject, SITE_ENV, TokenMapType } from '../global/index';
import { ChainNativeTokenByChainId, CoreContractAddressesByChainId } from './data/index';

export {
  ChainNativeTokenByChainId,
  CoreContractAddressesByChainId
} from './data/index';

const TOKENS = "oswap_user_tokens_";

export type ProxyAddresses = { [key: number]: string };

export const state = {
  siteEnv: SITE_ENV.TESTNET,
  currentChainId: 0,
  isExpertMode: false,
  slippageTolerance: 0.5,
  transactionDeadline: 30,
  userTokens: {} as { [key: string]: ITokenObject[] },
  infuraId: "",
  networkMap: {} as { [key: number]: INetwork },
  providerList: [] as IProvider[],
  proxyAddresses: {} as ProxyAddresses,
  ipfsGatewayUrl: "",
  apiGatewayUrls: {} as Record<string, string>,
  embedderCommissionFee: "0"
}

export const setDataFromSCConfig = (options: any) => {
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

export type APIGatewayKey = 'otcQueue';
export const getAPIGatewayUrl = (key: APIGatewayKey) => {
  return state.apiGatewayUrls[key];
}

export const setSiteEnv = (value: string) => {
  if (Object.values(SITE_ENV).includes(value as SITE_ENV)) {
    state.siteEnv = value as SITE_ENV;
  } else {
    state.siteEnv = SITE_ENV.TESTNET;
  }
}

export const getSiteEnv = (): SITE_ENV => {
  return state.siteEnv;
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

export const getDefaultChainId = () => {
  switch (getSiteEnv()) {
    case SITE_ENV.TESTNET:
      return 97
    case SITE_ENV.DEV:
    case SITE_ENV.MAINNET:
    default:
      return 56
  }
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
  for (let network of networkList) {
    if (infuraId && network.rpc) {
      network.rpc = network.rpc.replace(/{InfuraId}/g, infuraId);
    }
    state.networkMap[network.chainId] = network;

    if (network.rpc) {
      const networkInfo = wallet.getNetworkInfo(network.chainId);
      wallet.setNetworkInfo({
        ...networkInfo,
        rpcUrls: [network.rpc]
      });
    }
  }
}

export const getNetworkInfo = (chainId: number) => {
  return state.networkMap[chainId];
}

export const getFilteredNetworks = (filter: (value: INetwork, index: number, array: INetwork[]) => boolean) => {
  let networkFullList = Object.values(state.networkMap);
  return networkFullList.filter(filter);
}

export const getUserTokens: (chainId: number) => any[] | null = (chainId: number) => {
  let tokens = localStorage[TOKENS + chainId];
  if (tokens) {
    tokens = JSON.parse(tokens);
  } else {
    tokens = [];
  }
  const userTokens = state.userTokens[chainId];
  if (userTokens && userTokens.length) {
    tokens = tokens.concat(userTokens);
  }
  return tokens.length ? tokens : null;
}

export const addUserTokens = (token: ITokenObject) => {
  const chainId = getChainId();
  let tokens = localStorage[TOKENS + chainId];
  let i = -1;
  if (tokens) {
    tokens = JSON.parse(tokens);
    i = tokens.findIndex((item: ITokenObject) => item.address == token.address);
  } else {
    tokens = [];
  }
  if (i == -1) {
    tokens.push(token);
  }
  localStorage[TOKENS + chainId] = JSON.stringify(tokens);
}

interface NetworkConditions {
  isDisabled?: boolean,
  isTestnet?: boolean,
  isCrossChainSupported?: boolean,
  isMainChain?: boolean
}

function matchFilter<O extends { [keys: string]: any }>(list: O[], filter: Partial<O>): O[] {
  let filters = Object.keys(filter);
  return list.filter(item => filters.every(f => {
    switch (typeof filter[f]) {
      case 'boolean':
        if (filter[f] === false) {
          return item[f] === undefined || item[f] === null;
        }
      // also case for filter[f] === true 
      case 'string':
      case 'number':
        return filter[f] === item[f];
      case 'object': // have not implemented yet
      default:
        console.log(`matchFilter do not support ${typeof filter[f]} yet!`)
        return false;
    }
  }));
}

export const getMatchNetworks = (conditions: NetworkConditions): INetwork[] => {
  let networkFullList = Object.values(state.networkMap);
  let out = matchFilter(networkFullList, conditions);
  return out;
}

export const getSiteSupportedNetworks = () => {
  let networkFullList = Object.values(state.networkMap);
  let list = networkFullList.filter(network => !getNetworkInfo(network.chainId).isDisabled);
  const siteEnv = getSiteEnv();
  if (siteEnv === SITE_ENV.TESTNET) {
    return list.filter((network) => network.isTestnet);
  }
  if (siteEnv === SITE_ENV.DEV) {
    return list;
  }
  return list.filter((network) => !network.isTestnet);
}

export const getNetworkExplorerName = (chainId: number) => {
  if (getNetworkInfo(chainId)) {
    return getNetworkInfo(chainId).explorerName;
  }
  return 'Unknown';
}

export const getTokensDataList = async (tokenMapData: TokenMapType, tokenBalances: any): Promise<any[]> => {
  let dataList: any[] = [];
  for (let i = 0; i < Object.keys(tokenMapData).length; i++) {
    let tokenAddress = Object.keys(tokenMapData)[i];
    let tokenObject = tokenMapData[tokenAddress];
    if (tokenBalances) {
      dataList.push({
        ...tokenObject,
        status: false,
        value: tokenBalances[tokenAddress] ? tokenBalances[tokenAddress] : 0,
      });
    } else {
      dataList.push({
        ...tokenObject,
        status: null,
      })
    }
  }
  return dataList;
}

export const setUserTokens = (token: ITokenObject, chainId: number) => {
  if (!state.userTokens[chainId]) {
    state.userTokens[chainId] = [token];
  } else {
    state.userTokens[chainId].push(token);
  }
}

export const hasUserToken = (address: string, chainId: number) => {
  return state.userTokens[chainId]?.some((token: ITokenObject) => token.address?.toLocaleLowerCase() === address?.toLocaleLowerCase());
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

export const viewOnExplorerByTxHash = (chainId: number, txHash: string) => {
  let network = getNetworkInfo(chainId);
  if (network && network.explorerTxUrl) {
    let url = `${network.explorerTxUrl}${txHash}`;
    window.open(url);
  }
}

export const viewOnExplorerByAddress = (chainId: number, address: string) => {
  let network = getNetworkInfo(chainId);
  if (network && network.explorerAddressUrl) {
    let url = `${network.explorerAddressUrl}${address}`;
    window.open(url);
  }
}

// wallet
export function getWalletProvider() {
  return localStorage.getItem('walletProvider') || '';
}

export function isWalletConnected() {
  const wallet = Wallet.getClientInstance();
  return wallet.isConnected;
}

export async function switchNetwork(chainId: number) {
  if (!isWalletConnected()) {
    setCurrentChainId(chainId);
    Wallet.getClientInstance().chainId = chainId;
    application.EventBus.dispatch(EventId.chainChanged, chainId);
    return;
  }
  const wallet = Wallet.getClientInstance();
  if (wallet?.clientSideProvider?.walletPlugin === WalletPlugin.MetaMask) {
    await wallet.switchNetwork(chainId);
  }
}

export const hasWallet = function () {
  let hasWallet = false;
  for (let wallet of walletList) {
    if (Wallet.isInstalled(wallet.name)) {
      hasWallet = true;
      break;
    }
  }
  return hasWallet;
}

export const hasMetaMask = function () {
  return Wallet.isInstalled(WalletPlugin.MetaMask);
}

export const truncateAddress = (address: string) => {
  if (address === undefined || address === null) return '';
  return address.substr(0, 6) + '...' + address.substr(-4);
}

export const walletList = [
  {
    name: WalletPlugin.MetaMask,
    displayName: 'MetaMask',
    iconFile: 'metamask.png'
  },
  {
    name: WalletPlugin.BitKeepWallet,
    displayName: 'BitKeep Wallet',
    iconFile: 'BitKeep.png'
  },
  {
    name: WalletPlugin.ONTOWallet,
    displayName: 'ONTO Wallet',
    iconFile: 'ONTOWallet.jpg'
  },
  {
    name: WalletPlugin.Coin98,
    displayName: 'Coin98 Wallet',
    iconFile: 'Coin98.svg'
  },
  {
    name: WalletPlugin.TrustWallet,
    displayName: 'Trust Wallet',
    iconFile: 'trustwallet.svg'
  },
  {
    name: WalletPlugin.BinanceChainWallet,
    displayName: 'Binance Chain Wallet',
    iconFile: 'binance-chain-wallet.svg'
  },
  {
    name: WalletPlugin.WalletConnect,
    displayName: 'WalletConnect',
    iconFile: 'walletconnect.svg'
  }
]

export const getWalletOptions = (): { [key in WalletPlugin]?: any } => {
  let networkList = getSiteSupportedNetworks();
  const rpcs: { [chainId: number]: string } = {}
  for (const network of networkList) {
    let rpc = network.rpc
    if (rpc) rpcs[network.chainId] = rpc;
  }
  let walletOptionsMap: any = {};
  for (let walletItem of walletList) {
    if (walletItem.name == WalletPlugin.WalletConnect) {
      walletOptionsMap[walletItem.name] = {
        infuraId: getInfuraId(),
        bridge: "https://bridge.walletconnect.org",
        rpc: rpcs,
        callWithDefaultProvider: true
      }
    }
    walletOptionsMap[walletItem.name] = {
      infuraId: getInfuraId(),
      rpc: rpcs,
      callWithDefaultProvider: true
    }
  }
  return walletOptionsMap;
}

export const getBridgeVaultVersion = (chainId: number): string => {
  let network = getNetworkInfo(chainId);
  const isTestnet = !network.isDisabled && network.isCrossChainSupported && network.isTestnet;
  // Testnet
  if (isTestnet) return '0.1.9';
  // Mainnet
  return '1.1.1';
}

// export function getAvailableMarkets() {
//   let chainId = getChainId();
//   let markets = availableMarketsByChainId[chainId];
//   return markets;
// }

export function getChainId() {
  return isWalletConnected() ? Wallet.getInstance().chainId : getDefaultChainId();
  // return Wallet.getInstance().chainId;
}

export function getAddresses(chainId: number) {
  return CoreContractAddressesByChainId[chainId];
};

export const getChainNativeToken = (chainId: number): ITokenObject => {
  return ChainNativeTokenByChainId[chainId];
};

export const getGovToken = (chainId: number): ITokenObject => {
  let govToken;
  let Address = getAddresses(chainId);
  if (chainId == 43113 || chainId == 43114) {
    govToken = { address: Address["GOV_TOKEN"], decimals: 18, symbol: "veOSWAP", name: 'Vote-escrowed OSWAP' };
  } else {
    govToken = { address: Address["GOV_TOKEN"], decimals: 18, symbol: "OSWAP", name: 'OpenSwap' };
  }
  return govToken;
}
