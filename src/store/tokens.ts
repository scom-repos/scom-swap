import { BigNumber, Contracts, IWallet, Wallet } from '@ijstech/eth-wallet';
import { ITokenObject, TokenMapType } from '../global/index';
import { getChainId, getChainNativeToken, getDefaultChainId, getUserTokens } from './utils';

export type DefaultTokensByChainType = Record<number, ITokenObject[]>;

export type TokenBalancesType = Record<string, string>;

export class TokenStore {
  private _defaultTokensByChain: DefaultTokensByChainType;
  private _tokenBalances: TokenBalancesType;
  private _tokenMap: TokenMapType;
  private _projectToken?: ITokenObject;

  constructor(defaultTokensByChain: DefaultTokensByChainType) {
    this._defaultTokensByChain = defaultTokensByChain;
    const defaultChainId = getDefaultChainId();
    this._tokenMap = this._updateTokenMapData(defaultChainId);
  }

  public get tokenBalances() {
    return this._tokenBalances;
  }

  public get tokenMap() {
    return this._tokenMap;
  }

  public get projectToken() {
    return this._projectToken;
  }

  public getTokenList(chainId: number) {
    if (!chainId) return [];
    const tokenList = [...this._defaultTokensByChain[chainId]];
    const userCustomTokens = getUserTokens(chainId);
    if (userCustomTokens) {
      userCustomTokens.forEach(v => tokenList.push({...v, isNew: false, isCustom: true}));
    }
    return tokenList;
  }

  private async getERC20Balance(wallet: IWallet, token: string) {
    const erc20 = new Contracts.ERC20(wallet, token);
    const balance = await erc20.balanceOf(wallet.address);
    return balance;
  }

  public getTokenBalance(token: ITokenObject): string {
    let balance = '0';
    if (!token || !this._tokenBalances) return balance;
    if (token.address) {
      balance = this._tokenBalances[token.address.toLowerCase()];
    } else {
      balance = this._tokenBalances[token.symbol];
    }
    return balance;
  }
  
  public getProjectTokenBalance(): string {
    let balance = '0';
    if (this._projectToken && this._projectToken.address && this._tokenBalances) {
      balance = this._tokenBalances[this._projectToken.address.toLowerCase()];
    }
    return balance;
  }
  
  private async _updateAllTokenBalances(erc20TokenList: ITokenObject[], nativeToken: ITokenObject): Promise<TokenBalancesType> {
    let allTokenBalancesMap: TokenBalancesType = {};
    try {
      const wallet = Wallet.getClientInstance();
      const erc20 = new Contracts.ERC20(wallet);
      const data = wallet.encodeFunctionCall(erc20, 'balanceOf', [wallet.address]);
      const result = await wallet.multiCall(erc20TokenList.map((v: any) => {
        return {
          to: v.address,
          data
        }
      }))
      if (result) {
        for (let i = 0; i < erc20TokenList.length; i++) {
          const token = erc20TokenList[i];
          if (token.address) { 
            allTokenBalancesMap[token.address.toLowerCase()] = new BigNumber(result.results[i]).shiftedBy(-token.decimals).toFixed()
          }
        }
        let balance = (await Wallet.getClientInstance().balance).toFixed();
        allTokenBalancesMap[nativeToken.symbol] = balance;
      }
      else {
        let promises: Promise<void>[] = [];
        const tokenList = [...erc20TokenList, nativeToken];
        promises.push(...tokenList.map(async (token, index) => {
          try {
            if (token.address) {
              let balance = await this.getERC20Balance(wallet, token.address);
              allTokenBalancesMap[token.address.toLowerCase()] = new BigNumber(balance).shiftedBy(-token.decimals).toFixed();
            } else {
              let balance = await Wallet.getClientInstance().balance;
              allTokenBalancesMap[token.symbol] = balance.toFixed();
            }
          } catch (error) { }
        }));
        await Promise.all(promises);
      }
    } catch (error) { }
    return allTokenBalancesMap;
  }

  public async updateAllTokenBalances(): Promise<TokenBalancesType> {
    const wallet = Wallet.getClientInstance();
    let allTokenBalancesMap: TokenBalancesType = {};
    const tokenList = this.getTokenList(wallet.chainId);
    if (!wallet.chainId || !tokenList) return allTokenBalancesMap;
    const nativeToken: any = tokenList.find(v => !v.address);
    const erc20TokenList = tokenList.filter(v => !!v.address);
    allTokenBalancesMap = await this._updateAllTokenBalances(erc20TokenList, nativeToken);
    this._tokenBalances = allTokenBalancesMap;
    return this._tokenBalances;
  }

  public async updateTokenBalances(erc20TokenList: ITokenObject[]): Promise<TokenBalancesType> {
    const wallet = Wallet.getClientInstance();
    let tokenBalancesMap: TokenBalancesType = {};
    if (!wallet.chainId) return tokenBalancesMap;
    const nativeToken = getChainNativeToken(wallet.chainId);
    tokenBalancesMap = await this._updateAllTokenBalances(erc20TokenList, nativeToken);
    for (let tokenAddress of Object.keys(tokenBalancesMap)) {
      this._tokenBalances[tokenAddress] = tokenBalancesMap[tokenAddress];
    }
    return this._tokenBalances;
  }

  private _updateTokenMapData(chainId: number): TokenMapType {
    let allTokensMap: TokenMapType = {};
    if (this._defaultTokensByChain[chainId]) {
      let defaultTokenList = this._defaultTokensByChain[chainId].sort((a, b) => {
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
      let stakeToken = defaultTokenList.find(v => v.symbol == 'OSWAP');
      this._projectToken = stakeToken ? { ...stakeToken, address: stakeToken.address!.toLowerCase() } : undefined;
    }
    return allTokensMap;
  }

  public updateTokenMapData(): TokenMapType {
    let chainId = getChainId();
    let allTokensMap = this._updateTokenMapData(chainId);
    this._tokenMap = allTokensMap;
    return allTokensMap;
  }
}
