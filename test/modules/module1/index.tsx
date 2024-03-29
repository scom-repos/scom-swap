import { Module, customModule, Container, VStack, Styles, application } from '@ijstech/components';
import { getMulticallInfoList } from '@scom/scom-multicall';
import { INetwork } from '@ijstech/eth-wallet';
import getNetworkList from '@scom/scom-network-list';
import ScomSwap from '@scom/scom-swap'

const Theme = Styles.Theme.currentTheme;
Theme.background.main = '#2c2626';
Theme.text.primary = '#d3c0c0 ';
Theme.input.background = '#272F39';
Theme.input.fontColor = '#ffffff4d';
@customModule
export default class Module1 extends Module {
  private swapEl: ScomSwap;
  private mainStack: VStack;
  private _providers: any[] = [];

  constructor(parent?: Container, options?: any) {
    super(parent, options);
    const multicalls = getMulticallInfoList();
    const networkMap = this.getNetworkMap(options.infuraId);
    application.store = {
      infuraId: options.infuraId,
      multicalls,
      networkMap
    }
    this._providers = [
      {
        caption: 'OpenSwap',
        image: 'libs/@scom/scom-swap/img/swap/openswap.png',
        key: 'OpenSwap',
        chainId: 43113,
        fromToken: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
        toToken: '0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e',
        routerAddress: '0xc9C6f026E489e0A8895F67906ef1627f1E56860d',
        factoryAddress: '0x9560fD7C36527001D3Fea2510D405F77cB6AD739',
        tradeFee: {
          fee: '200',
          base: '100000'
        }
      },
      {
        caption: 'OpenSwap1',
        image: 'libs/@scom/scom-swap/img/swap/openswap.png',
        key: 'OpenSwap',
        chainId: 97,
        fromToken: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
        toToken: '0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e',
        routerAddress: '0xc9C6f026E489e0A8895F67906ef1627f1E56860d',
        factoryAddress: '0x9560fD7C36527001D3Fea2510D405F77cB6AD739',
        tradeFee: {
          fee: '200',
          base: '100000'
        }
      }
    ]
  }

  private getNetworkMap = (infuraId?: string) => {
    const networkMap = {};
    const defaultNetworkList: INetwork[] = getNetworkList();
    const defaultNetworkMap: Record<number, INetwork> = defaultNetworkList.reduce((acc, cur) => {
      acc[cur.chainId] = cur;
      return acc;
    }, {});
    for (const chainId in defaultNetworkMap) {
      const networkInfo = defaultNetworkMap[chainId];
      const explorerUrl = networkInfo.blockExplorerUrls && networkInfo.blockExplorerUrls.length ? networkInfo.blockExplorerUrls[0] : "";
      if (infuraId && networkInfo.rpcUrls && networkInfo.rpcUrls.length > 0) {
        for (let i = 0; i < networkInfo.rpcUrls.length; i++) {
          networkInfo.rpcUrls[i] = networkInfo.rpcUrls[i].replace(/{INFURA_ID}/g, infuraId);
        }
      }
      networkMap[networkInfo.chainId] = {
        ...networkInfo,
        symbol: networkInfo.nativeCurrency?.symbol || "",
        explorerTxUrl: explorerUrl ? `${explorerUrl}${explorerUrl.endsWith("/") ? "" : "/"}tx/` : "",
        explorerAddressUrl: explorerUrl ? `${explorerUrl}${explorerUrl.endsWith("/") ? "" : "/"}address/` : ""
      }
    }
    return networkMap;
  }

  async init() {
    super.init();
    // this.swapEl = await ScomSwap.create({
    //     category: 'aggregator',
    //     providers: this._providers
    // });
    // this.mainStack.appendChild(this.swapEl);
  }

  render() {
    return (
      <i-panel>
        <i-hstack
          id='mainStack'
          margin={{ top: '1rem', left: '1rem' }}
          gap='2rem'
        >
          <i-scom-swap
            providers={[
              {
                "key": "OpenSwap",
                "chainId": 97
              },
              {
                "key": "OpenSwap",
                "chainId": 43113
              }
            ]}
            category="aggregator"
            tokens={[
              {
                // "name": "USDT",
                "address": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
                // "symbol": "USDT",
                // "decimals": 6,
                "chainId": 97
              },
              {
                // "name": "OpenSwap",
                "address": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
                // "symbol": "OSWAP",
                // "decimals": 18,
                "chainId": 97
              },
              {
                // "name": "Tether USD",
                "address": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
                // "symbol": "USDT.e",
                // "decimals": 6,
                "chainId": 43113
              },
              {
                // "name": "OpenSwap",
                "address": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
                // "symbol": "OSWAP",
                // "decimals": 18,
                "chainId": 43113
              }
            ]}
            defaultChainId={43113}
            networks={[
              {
                "chainId": 43113
              },
              {
                "chainId": 97
              }
            ]}
            wallets={[
              {
                "name": "metamask"
              }
            ]}
          ></i-scom-swap>
        </i-hstack>
      </i-panel>
    )
  }
}