import { Module, customModule, Container, VStack } from '@ijstech/components';
import ScomSwap from '@scom/scom-swap'
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
                image: 'img/swap/openswap.png',
                key: 'OpenSwap',
                dexId: 1,
                chainId: 43113,
                fromToken: "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
                toToken: "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
                routerAddress: '0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C',
                tradeFee: {
                    fee: '0.4',
                    base: '1'
                }
            }
        ]
    }

    async init() {
        super.init();
        this.swapEl = await ScomSwap.create({
            category: "fixed-pair",
            providers: this._providers
        });
        this.mainStack.appendChild(this.swapEl);
    }

    render() {
        return <i-panel>
            <i-hstack id="mainStack" margin={{top: '1rem', left: '1rem'}} gap="2rem">
                <i-scom-swap
                    category="fixed-pair"
                    providers={this._providers}
                ></i-scom-swap>
            </i-hstack>
        </i-panel>
    }
}