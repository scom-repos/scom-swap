import { application } from '@ijstech/components';
import { Wallet, WalletPlugin } from '@ijstech/eth-wallet';
import { EventId, INetwork, ITokenObject } from '../global/index';
import Assets from '../assets';
import { DefaultTokens, getTokenIconPath, WETHByChainId } from './data/index';
import { TokenStore } from './tokens';
import { getChainId, getChainNativeToken, getCurrentChainId, getDefaultChainId, getNetworkInfo, getWalletOptions, isWalletConnected, setCurrentChainId } from './utils';

export {
  //token
  DefaultERC20Tokens,
  ChainNativeTokenByChainId,
  WETHByChainId,
  DefaultTokens,
  ToUSDPriceFeedAddressesMap,
  tokenPriceAMMReference,
  getTokenIconPath,
  getOpenSwapToken
} from './data/index'

export { TokenStore, TokenBalancesType, DefaultTokensByChainType } from './tokens';

export let tokenStore: TokenStore;

export const setTokenStore = () => {
  tokenStore = new TokenStore(DefaultTokens);
}

export const nullAddress = "0x0000000000000000000000000000000000000000";

export const getWETH = (chainId: number): ITokenObject => {
  let wrappedToken = WETHByChainId[chainId];
  return wrappedToken;
};

export const getTokenDecimals = (address: string) => {
  let chainId = getChainId();
  const WETHAddress = getWETH(chainId).address;
  const ChainNativeToken = getChainNativeToken(chainId);
  const tokenObject = (!address || address.toLowerCase() === WETHAddress.toLowerCase()) ? ChainNativeToken : tokenStore.tokenMap[address.toLowerCase()];
  return tokenObject ? tokenObject.decimals : 18;
}

export const getTokenIcon = (address: string) => {
  if (!address) return '';
  const tokenMap = tokenStore.tokenMap;
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
  const tokenMap = tokenStore.tokenMap;
  if (!address || !tokenMap) return '';
  let tokenObject = tokenMap[address.toLowerCase()];
  if (!tokenObject) tokenObject = tokenMap[address];
  return tokenObject ? tokenObject.symbol : '';
}

export const tokenName = (address: string) => {
  const tokenMap = tokenStore.tokenMap;
  if (!address || !tokenMap) return '';
  let tokenObject = tokenMap[address.toLowerCase()];
  if (!tokenObject) tokenObject = tokenMap[address];
  return tokenObject?.name || '';
}

export async function logoutWallet() {
  const wallet = Wallet.getClientInstance();
  await wallet.disconnect();
  localStorage.setItem('walletProvider', '');
  application.EventBus.dispatch(EventId.IsWalletDisconnected, false);
}

export async function connectWallet(walletPlugin: WalletPlugin, eventHandlers?: { [key: string]: Function }) {
  // let walletProvider = localStorage.getItem('walletProvider') || '';
  let wallet: any = Wallet.getClientInstance();
  let walletOptions = getWalletOptions();
  if (!wallet.chainId) {
    wallet.chainId = getDefaultChainId();
  }
  let providerOptions = walletOptions[walletPlugin];
  await wallet.connect(walletPlugin, {
    onAccountChanged: async (account: string) => {
      if (eventHandlers && eventHandlers.accountsChanged) {
        eventHandlers.accountsChanged(account);
      }
      const connected = !!account;
      if (connected) {
        localStorage.setItem('walletProvider', Wallet.getClientInstance().clientSideProvider?.walletPlugin || '');
        if (wallet.chainId !== getCurrentChainId()) {
          setCurrentChainId(wallet.chainId);
          application.EventBus.dispatch(EventId.chainChanged, wallet.chainId);
        }
        tokenStore.updateTokenMapData();
        await tokenStore.updateAllTokenBalances();
      }
      application.EventBus.dispatch(EventId.IsWalletConnected, connected);
    },
    onChainChanged: async (chainIdHex: string) => {
      const chainId = Number(chainIdHex);

      if (eventHandlers && eventHandlers.chainChanged) {
        eventHandlers.chainChanged(chainId);
      }

      setCurrentChainId(chainId);
      tokenStore.updateTokenMapData();
      await tokenStore.updateAllTokenBalances();
      application.EventBus.dispatch(EventId.chainChanged, chainId);
    }
  }, providerOptions)
  return wallet;
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

const EMBED_URL = "https://embed.scom.page/#/";
export const getEmbedLink = (dataUri: string, params?: { [key: string]: string }) => {
  let queries = new URLSearchParams(params).toString();
  let url = `${EMBED_URL}${dataUri}${queries ? "?" + queries : ""}`;
  return url;
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

export const SupportedNetworks: INetwork[] = [
  {
    name: "BSC Testnet",
    chainId: 97,
    img: "bsc"
  },
  {
    name: "Avalanche FUJI C-Chain",
    chainId: 43113,
    img: "avax"
  }
];

export const getNetworkName = (chainId: number) => {
  return SupportedNetworks.find(v => v.chainId === chainId)?.name || ""
}

export * from './utils';
export * from './data/index';
