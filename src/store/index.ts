import { ITokenObject } from '@scom/scom-token-list';
import { WETHByChainId } from '@scom/scom-token-list';

export const getWETH = (chainId: number): ITokenObject => {
  let wrappedToken = WETHByChainId[chainId];
  return wrappedToken;
}

export const getSupportedTokens = (tokens: ITokenObject[], chainId: number) => {
  return tokens.filter(token => token.chainId === chainId) || []
}

export * from './utils';
export * from './cross-chain';
