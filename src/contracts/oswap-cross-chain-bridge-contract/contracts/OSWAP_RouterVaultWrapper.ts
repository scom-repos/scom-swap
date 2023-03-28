import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_RouterVaultWrapper.json";
export interface ISwapETHForExactTokensParams {pair:string[];vault:string;deadline:number|BigNumber;order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}}
export interface ISwapExactETHForTokensParams {pair:string[];vault:string;deadline:number|BigNumber;order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}}
export interface ISwapExactTokensForTokensParams {pair:string[];vault:string;amountIn:number|BigNumber;deadline:number|BigNumber;order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}}
export interface ISwapTokensForExactTokensParams {pair:string[];vault:string;amountIn:number|BigNumber;deadline:number|BigNumber;order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}}
export class OSWAP_RouterVaultWrapper extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_RouterVaultWrapper.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): OSWAP_RouterVaultWrapper.SwapEvent{
        let result = event.data;
        return {
            vault: result.vault,
            orderId: new BigNumber(result.orderId),
            sender: result.sender,
            inToken: result.inToken,
            inAmount: new BigNumber(result.inAmount),
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_RouterVaultWrapper.UpdateConfigStoreEvent[]{
        return this.parseEvents(receipt, "UpdateConfigStore").map(e=>this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_RouterVaultWrapper.UpdateConfigStoreEvent{
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    }
    initAddress: {
        (configStore:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (configStore:string, options?: TransactionOptions) => Promise<void>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    swapETHForExactTokens: {
        (params: ISwapETHForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapETHForExactTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
    }
    swapExactETHForTokens: {
        (params: ISwapExactETHForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactETHForTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber>;
    }
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    updateConfigStore: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let configStore_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('configStore',[],options);
            return result;
        }
        this.configStore = configStore_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let initAddress_send = async (configStore:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('initAddress',[configStore],options);
            return result;
        }
        let initAddress_call = async (configStore:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('initAddress',[configStore],options);
            return;
        }
        this.initAddress = Object.assign(initAddress_send, {
            call:initAddress_call
        });
        let swapETHForExactTokensParams = (params: ISwapETHForExactTokensParams) => [params.pair,params.vault,this.wallet.utils.toString(params.deadline),[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)]];
        let swapETHForExactTokens_send = async (params: ISwapETHForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapETHForExactTokens',swapETHForExactTokensParams(params),options);
            return result;
        }
        let swapETHForExactTokens_call = async (params: ISwapETHForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('swapETHForExactTokens',swapETHForExactTokensParams(params),options);
            return new BigNumber(result);
        }
        this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
            call:swapETHForExactTokens_call
        });
        let swapExactETHForTokensParams = (params: ISwapExactETHForTokensParams) => [params.pair,params.vault,this.wallet.utils.toString(params.deadline),[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)]];
        let swapExactETHForTokens_send = async (params: ISwapExactETHForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactETHForTokens',swapExactETHForTokensParams(params),options);
            return result;
        }
        let swapExactETHForTokens_call = async (params: ISwapExactETHForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('swapExactETHForTokens',swapExactETHForTokensParams(params),options);
            return new BigNumber(result);
        }
        this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
            call:swapExactETHForTokens_call
        });
        let swapExactTokensForTokensParams = (params: ISwapExactTokensForTokensParams) => [params.pair,params.vault,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.deadline),[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)]];
        let swapExactTokensForTokens_send = async (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokens',swapExactTokensForTokensParams(params),options);
            return result;
        }
        let swapExactTokensForTokens_call = async (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('swapExactTokensForTokens',swapExactTokensForTokensParams(params),options);
            return new BigNumber(result);
        }
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call:swapExactTokensForTokens_call
        });
        let swapTokensForExactTokensParams = (params: ISwapTokensForExactTokensParams) => [params.pair,params.vault,this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.deadline),[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)]];
        let swapTokensForExactTokens_send = async (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactTokens',swapTokensForExactTokensParams(params),options);
            return result;
        }
        let swapTokensForExactTokens_call = async (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('swapTokensForExactTokens',swapTokensForExactTokensParams(params),options);
            return new BigNumber(result);
        }
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call:swapTokensForExactTokens_call
        });
        let updateConfigStore_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateConfigStore',[],options);
            return result;
        }
        let updateConfigStore_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateConfigStore',[],options);
            return;
        }
        this.updateConfigStore = Object.assign(updateConfigStore_send, {
            call:updateConfigStore_call
        });
    }
}
export module OSWAP_RouterVaultWrapper{
    export interface SwapEvent {vault:string,orderId:BigNumber,sender:string,inToken:string,inAmount:BigNumber,_event:Event}
    export interface UpdateConfigStoreEvent {newConfigStore:string,_event:Event}
}