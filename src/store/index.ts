import { Erc20, Wallet, WalletPlugin } from '@ijstech/eth-wallet';
import { application } from '@ijstech/components';
import {
  EventId,
  ITokenObject,
  SITE_ENV,
  TokenMapType,
  getERC20Amount,
  INetwork,
} from '@swap/global';

import Assets from '@swap/assets';
import { Contracts } from '@openswap/sdk';
import {
  DefaultTokens,
  CoreContractAddressesByChainId,
  ChainNativeTokenByChainId,
  WETHByChainId,
  availableMarketsByChainId,
  getTokenIconPath,
} from './data/index';

export const fallBackUrl = Assets.fullPath('img/tokens/token-placeholder.svg');
export const nullAddress = "0x0000000000000000000000000000000000000000";

const TOKENS = "oswap_user_tokens_";

export const getUserTokens:(chainId: number) => any[] | null = (chainId: number) => {
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

export function getAddresses(chainId: number) {
  return CoreContractAddressesByChainId[chainId];
};

export const getChainNativeToken = (chainId: number): ITokenObject => {
  return ChainNativeTokenByChainId[chainId];
};

export const getWETH = (chainId: number): ITokenObject => {
  let wrappedToken = WETHByChainId[chainId];
  return wrappedToken;
};

export function getChainId() {
  return Wallet.getInstance().chainId;
}

export function getWallet() {
  const network = getNetworkInfo(state.currentChainId || getDefaultChainId());
  return isWalletConnected() ? Wallet.getInstance() : new Wallet(network.rpc);
}

export function getWalletProvider() {
  return localStorage.getItem('walletProvider') || '';
}

export function getErc20(address: string) {
  const wallet = getWallet();
  return new Erc20(wallet, address);
}

export function getAvailableMarkets() {
  let chainId = getChainId();
  let markets = availableMarketsByChainId[chainId];
  return markets;
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

export const getTokenList = (chainId: number) => {
  const tokenList = [...DefaultTokens[chainId]];
  const userCustomTokens = getUserTokens(chainId);
  if (userCustomTokens) {
    userCustomTokens.forEach(v => tokenList.push({...v, isNew: false, isCustom: true}));
  }
  return tokenList;
}

export interface TokenBalancesType { [token: string]: string }
export async function updateAllTokenBalances(): Promise<TokenBalancesType> {
  const wallet: any = getWallet();
  let allTokenBalancesMap: TokenBalancesType = {};
  if (!wallet.chainId || !DefaultTokens[wallet.chainId]) return allTokenBalancesMap;
  const tokenList = getTokenList(wallet.chainId);
  let promises: Promise<void>[] = []
  promises.push(...tokenList.map(async (token, index) => {
      try {
        if (token.address) {
          let balance = (await getERC20Amount(wallet, token.address, token.decimals)).toFixed()
          allTokenBalancesMap[token.address.toLowerCase()] = balance;
        } else {
          let balance = (await getWallet().balance).toFixed();
          allTokenBalancesMap[token.symbol] = balance;
        }
      } catch (error) {}
  }));
  
  await Promise.all(promises);
  state.tokenBalances = allTokenBalancesMap;
  return allTokenBalancesMap;
}


export const getTokenBalances = (): TokenBalancesType => {
  return state.tokenBalances;
}
export const getTokenBalance = (token: ITokenObject): string => {
  let balance = '0';
  if (!token) return balance;
  if (token.address) {
    balance = state.tokenBalances[token.address.toLowerCase()];
  } else {
    balance = state.tokenBalances[token.symbol];
  }
  return balance;
}
export const setTokenBalances = async (value?: TokenBalancesType) => {
  state.tokenBalances = value ? value : await updateAllTokenBalances();
}

export const state = {
  siteEnv: SITE_ENV.TESTNET,
  currentChainId: 0,
  isExpertMode: false,
  slippageTolerance: 0.5,
  transactionDeadline: 30,
  tokenBalances: {} as TokenBalancesType,
  tokenMap: {} as TokenMapType,
  trollActionsMapStatus: {} as {[key: string]: boolean},
  minPrice: null as any,
  maxPrice: null as any,
  priorityQueueActionsStatus: {} as {[key: string]: boolean},
  rangeQueueActionsStatus: {} as {[key: string]: boolean},
  groupQueueActionsStatus: {} as {[key: string]: boolean},
  groupQueueOfferStatus: {} as {[key: string]: {value: boolean, text: string}},
  userTokens: {} as {[key: string]: ITokenObject[]},
  infuraId: "",
  networkMap: {} as { [key: number]: INetwork }
}

export const setDataFromSCConfig = (Networks: any, InfuraId: string) => {
  if (InfuraId) {
    setInfuraId(InfuraId)
  }			
  if (Networks) {
    setNetworkList(Networks, InfuraId)
  }
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
  state.networkMap = {};
  for (let network of networkList) {
    if (infuraId && network.rpc) {
      network.rpc = network.rpc.replace(/{InfuraId}/g, infuraId);
    }
    state.networkMap[network.chainId] = network;
  }
}

export const getNetworkInfo = (chainId: number) => {
  return state.networkMap[chainId];
}

export const getFilteredNetworks = (filter:(value: INetwork, index: number, array: INetwork[])=>boolean) => {
  let networkFullList = Object.values(state.networkMap);
  return networkFullList.filter(filter);
}

interface NetworkConditions {
  isDisabled?:boolean,
  isTestnet?:boolean,
  isCrossChainSupported?:boolean,
  isMainChain?:boolean
}

function matchFilter<O extends {[keys:string]:any}>(list:O[], filter:Partial<O>):O[] {
  let filters = Object.keys(filter); 
  return list.filter(item=>filters.every(f=>{
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

export const getMatchNetworks = (conditions:NetworkConditions):INetwork[] => {
  let networkFullList = Object.values(state.networkMap);
  let out = matchFilter(networkFullList,conditions);
  return out;
}

export const getSiteSupportedNetworks = ()  => {
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

export const getNetworkImg = (chainId: number) => {
  try {
    const network = getNetworkInfo(chainId);
    if (network) {
      return Assets.fullPath(network.img);
    }
  } catch { }
  return Assets.fullPath('img/tokens/token-placeholder.svg');
}

export const projectNativeToken = (): ITokenObject & { address: string } | null => {
  let chainId = getChainId();
  if (chainId == null || chainId == undefined) return null;
  let stakeToken = DefaultTokens[chainId].find(v => v.symbol == 'OSWAP')
  return stakeToken ? { ...stakeToken, address: stakeToken.address!.toLowerCase() } : null;
}

export const projectNativeTokenSymbol = () => {
  const token = projectNativeToken();
  return token ? token.symbol : ''
};

export const getTokenObject = async (address: string, showBalance?: boolean) => {
  const ERC20Contract = new Contracts.ERC20(Wallet.getInstance() as any, address);
  const symbol = await ERC20Contract.symbol();
  const name = await ERC20Contract.name();
  const decimals = (await ERC20Contract.decimals()).toFixed();
  let balance;
  if (showBalance && getWallet().isConnected) {
    balance =  (await (ERC20Contract.balanceOf(getWallet().account.address))).shiftedBy(-decimals).toFixed();
  }
  return {
    address: address.toLowerCase(),
    decimals: +decimals,
    name,
    symbol,
    balance
  }
}

const getTokenMapData = (): TokenMapType => {
  let allTokensMap: TokenMapType = {};
  let chainId = getChainId();
  if (DefaultTokens[chainId]) {
    let defaultTokenList = DefaultTokens[chainId].sort((a, b) => {
      if (a.symbol.toLowerCase() < b.symbol.toLowerCase()) { return -1; }
      if (a.symbol.toLowerCase() > b.symbol.toLowerCase()) { return 1; }
      return 0;
    })
    for (let i = 0; i < defaultTokenList.length; i++) {
      let defaultTokenItem = defaultTokenList[i];
      if (defaultTokenItem.address)
        allTokensMap[defaultTokenItem.address.toLowerCase()] = defaultTokenItem;
      else
        allTokensMap[defaultTokenItem.symbol] = defaultTokenItem;
    }
    const userCustomTokens = getUserTokens(chainId);
    if (userCustomTokens) {
      userCustomTokens.forEach(v => allTokensMap[v.address] = {...v, isCustom: true});
    }
  }
  return allTokensMap;
}
let tokenMapChainId = 0;
export const setTokenMap = () => {
  state.tokenMap = getTokenMapData()
}
export const getTokenMap = () => {
  let chainId = getChainId();
  if (tokenMapChainId != chainId) {
    state.tokenMap = getTokenMapData()
    tokenMapChainId = chainId;
  }
  return state.tokenMap
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

export const getTokenDecimals = (address: string) => {
  let chainId = getChainId();
  const Address = getAddresses(chainId);
  const ChainNativeToken = getChainNativeToken(chainId);
  const tokenObject = (!address || address.toLowerCase() === Address['WETH9'].toLowerCase()) ?
  ChainNativeToken :
    getTokenMap()[address];
  return tokenObject ? tokenObject.decimals : 18;
}

export const getTokenIcon = (address: string) => {
  if (!address) return '';
  const tokenMap = getTokenMap();
  let ChainNativeToken;
  let tokenObject;
  if (isWalletConnected()){
    ChainNativeToken = getChainNativeToken(getChainId());
    tokenObject = address == ChainNativeToken.symbol ? ChainNativeToken : tokenMap[address.toLowerCase()];
  } else {
    tokenObject = tokenMap[address.toLowerCase()];
  }
  return Assets.fullPath(getTokenIconPath(tokenObject, getChainId()));
}

export const tokenSymbol = (address: string) => {
  if (!address) return '';
  const tokenMap = getTokenMap();
  let tokenObject = tokenMap[address.toLowerCase()];
  if (!tokenObject) {
    tokenObject = tokenMap[address];
  }
  return tokenObject ? tokenObject.symbol : '';
}

export const setTrollActionsMapStatus = (actionKey: string, status: boolean) => {
  state.trollActionsMapStatus[actionKey] = status;
}

export const getTrollActionsMapStatus = (actionKey: string) => {
  return state.trollActionsMapStatus[actionKey] || false;
}

export const setMinPrice = (value: number) => {
  state.minPrice = value;
}

export const getMinPrice = (): number => {
  return state.minPrice;
}

export const setMaxPrice = (value: number) => {
  state.maxPrice = value;
}

export const getMaxPrice = (): number => {
  return state.maxPrice;
}

export const setPriorityQueueActionsStatus = (key: string, value: boolean, keyTab: string) => {
  state.priorityQueueActionsStatus[key] = value;
  application.EventBus.dispatch(EventId.EmitButtonStatus, {name: 'Priority Queue', keyTab, key, value});
}

export const getPriorityQueueActionsStatus = (key: string) => {
  return state.priorityQueueActionsStatus[key] || false;
}

export const setRangeQueueActionsStatus = (key: string, value: boolean, keyTab: string) => {
  state.rangeQueueActionsStatus[key] = value;
  application.EventBus.dispatch(EventId.EmitButtonStatus, {name: 'Range Queue', keyTab, key, value});
}

export const getRangeQueueActionsStatus = (key: string) => {
  return state.rangeQueueActionsStatus[key] || false;
}

export const setGroupQueueActionsStatus = (key: string, value: boolean, keyTab: string) => {
  state.groupQueueActionsStatus[key] = value;
  application.EventBus.dispatch(EventId.EmitButtonStatus, {name: 'Group Queue', keyTab, key, value});
}

export const getGroupQueueActionsStatus = (key: string) => {
  return state.groupQueueActionsStatus[key] || false;
}

export const setGroupQueueOfferStatus = (key: string, value: boolean, text: string) => {
  state.groupQueueOfferStatus[key] = { value, text };
  application.EventBus.dispatch(EventId.EmitButtonStatus, {name: 'Group Queue Offer', key, value, text});
}

export const getGroupQueueOfferStatus = (key: string) => {
  return state.groupQueueOfferStatus[key] || { value : false, text: 'Swap' };
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

// Wallet
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
  return {
    [WalletPlugin.WalletConnect]: {
      infuraId: getInfuraId(),
      bridge: "https://bridge.walletconnect.org",
      rpc: rpcs
    }
  }
}

export function isWalletConnected() {
  const wallet = Wallet.getInstance();
  return wallet.isConnected;
}

export async function connectWallet(walletPlugin: WalletPlugin, eventHandlers?: { [key: string]: Function }) {
  let wallet = Wallet.getInstance();
  const walletOptions = getWalletOptions();
  let providerOptions = walletOptions[walletPlugin];
  if (!wallet.chainId) {
    wallet.chainId = getDefaultChainId();
  }
  await wallet.connect(walletPlugin, {
    onAccountChanged: async (account: string) => {
      if (eventHandlers && eventHandlers.accountsChanged) {
        eventHandlers.accountsChanged(account);
      }
      const connected = !!account;
      if (connected) {
        localStorage.setItem('walletProvider', Wallet.getInstance()?.clientSideProvider?.walletPlugin || '');
        if (wallet.chainId !== getCurrentChainId()) {
          setCurrentChainId(wallet.chainId);
          application.EventBus.dispatch(EventId.chainChanged, wallet.chainId);
        }
        await updateAllTokenBalances();
      }
      application.EventBus.dispatch(EventId.IsWalletConnected, connected);
    },
    onChainChanged: async (chainIdHex: string) => {
      //console.log('onChainChanged', chainIdHex);
      const chainId = Number(chainIdHex);

      if (eventHandlers && eventHandlers.chainChanged) {
        eventHandlers.chainChanged(chainId);
      }
      setCurrentChainId(chainId);
      await updateAllTokenBalances();
      application.EventBus.dispatch(EventId.chainChanged, chainId);
    }
  }, providerOptions)
  return wallet;
}

export async function switchNetwork(chainId: number) {
  if (!isWalletConnected()) {
    setCurrentChainId(chainId);
    Wallet.getInstance().chainId = chainId;
    application.EventBus.dispatch(EventId.chainChanged, chainId);
    return;
  }
  const wallet = Wallet.getInstance();
  if (wallet?.clientSideProvider?.walletPlugin === WalletPlugin.MetaMask) {
    await wallet.switchNetwork(chainId);
  }
}

export async function logoutWallet() {
  const wallet = Wallet.getInstance();
  await wallet.disconnect();
  localStorage.setItem('walletProvider', '');
  application.EventBus.dispatch(EventId.IsWalletDisconnected, false);
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

export const baseUrl = 'https://openswap.xyz/#';
export const getTokenUrl = `${baseUrl}/swap`;
export const isThemeApplied = false;
export const isMultiple = false;
export const maxWidth = '690px';
export const maxHeight = '321px';

// mover from cross-chain
export const getBridgeVaultVersion = (chainId :number):string => {
  let network = getNetworkInfo(chainId);
  const isTestnet = !network.isDisabled && network.isCrossChainSupported && network.isTestnet;
  // Testnet
  if (isTestnet) return '0.1.5';
  // Mainnet
  return '1.1.1';
}

export * from './data/index';
