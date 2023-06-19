import { Module, customModule, Container, VStack, Styles } from '@ijstech/components';
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
        this._providers = [
            {
                caption: 'OpenSwap',
                image: 'libs/@scom/scom-swap/img/swap/openswap.png',
                key: 'OpenSwap',
                dexId: 1,
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
                dexId: 1,
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
                category='aggregator'
                providers={this._providers}
                tokens={[
                  {
                    name: 'Wrapped BNB',
                    address: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
                    symbol: 'WBNB',
                    decimals: 18,
                    isCommon: true,
                    isWETH: true,
                    chainId: 97
                  },
                  {
                    name: 'USDT',
                    address: '0x29386B60e0A9A1a30e1488ADA47256577ca2C385',
                    symbol: 'USDT',
                    decimals: 6,
                    isCommon: true,
                    chainId: 97
                  },
                  {
                    "name": "Wrapped AVAX",
                    "address": "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
                    "symbol": "WAVAX",
                    "decimals": 18,
                    "isCommon": true,
                    "isWETH": true,
                    chainId: 43113
                  },
                  {
                    "name": "Pangolin",
                    "address": "0x6d0A79756774c7cbac6Ce5c5e3b0f40b0ccCcB20",
                    "symbol": "PNG",
                    "decimals": 18,
                    chainId: 43113
                  },
                  {
                    "name": "OpenSwap",
                    "address": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
                    "symbol": "OSWAP",
                    "decimals": 18,
                    "isCommon": true,
                    chainId: 43113
                  }
                ]}
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
                defaultChainId={43113}
              ></i-scom-swap>
            </i-hstack>
          </i-panel>
        )
    }
}