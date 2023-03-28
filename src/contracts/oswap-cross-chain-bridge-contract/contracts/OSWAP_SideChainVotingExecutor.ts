import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_SideChainVotingExecutor.json";
export interface IExecuteParams {signatures:string[];params:string[];nonce:number|BigNumber}
export interface IExecuteHashParams {params:string[];nonce:number|BigNumber}
export class OSWAP_SideChainVotingExecutor extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(trollRegistry:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([trollRegistry], options);
    }
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_SideChainVotingExecutor.ExecuteEvent[]{
        return this.parseEvents(receipt, "Execute").map(e=>this.decodeExecuteEvent(e));
    }
    decodeExecuteEvent(event: Event): OSWAP_SideChainVotingExecutor.ExecuteEvent{
        let result = event.data;
        return {
            params: result.params,
            _event: event
        };
    }
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    }
    execute: {
        (params: IExecuteParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IExecuteParams, options?: TransactionOptions) => Promise<void>;
    }
    executeHash: {
        (params: IExecuteHashParams, options?: TransactionOptions): Promise<string>;
    }
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    }
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let configStore_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('configStore',[],options);
            return result;
        }
        this.configStore = configStore_call
        let executeHashParams = (params: IExecuteHashParams) => [this.wallet.utils.stringToBytes32(params.params),this.wallet.utils.toString(params.nonce)];
        let executeHash_call = async (params: IExecuteHashParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('executeHash',executeHashParams(params),options);
            return result;
        }
        this.executeHash = executeHash_call
        let govToken_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('govToken',[],options);
            return result;
        }
        this.govToken = govToken_call
        let trollRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('trollRegistry',[],options);
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let executeParams = (params: IExecuteParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.stringToBytes32(params.params),this.wallet.utils.toString(params.nonce)];
        let execute_send = async (params: IExecuteParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('execute',executeParams(params),options);
            return result;
        }
        let execute_call = async (params: IExecuteParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('execute',executeParams(params),options);
            return;
        }
        this.execute = Object.assign(execute_send, {
            call:execute_call
        });
    }
}
export module OSWAP_SideChainVotingExecutor{
    export interface ExecuteEvent {params:string[],_event:Event}
}