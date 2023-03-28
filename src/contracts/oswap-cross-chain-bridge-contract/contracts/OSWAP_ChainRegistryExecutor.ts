import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_ChainRegistryExecutor.json";
export interface IDeployParams {votingManager:string;chainRegistry:string}
export class OSWAP_ChainRegistryExecutor extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.votingManager,params.chainRegistry], options);
    }
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_ChainRegistryExecutor.ExecuteEvent[]{
        return this.parseEvents(receipt, "Execute").map(e=>this.decodeExecuteEvent(e));
    }
    decodeExecuteEvent(event: Event): OSWAP_ChainRegistryExecutor.ExecuteEvent{
        let result = event.data;
        return {
            params: result.params,
            _event: event
        };
    }
    chainRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    execute: {
        (params:string[], options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params:string[], options?: TransactionOptions) => Promise<void>;
    }
    votingManager: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let chainRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('chainRegistry',[],options);
            return result;
        }
        this.chainRegistry = chainRegistry_call
        let votingManager_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('votingManager',[],options);
            return result;
        }
        this.votingManager = votingManager_call
        let execute_send = async (params:string[], options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('execute',[this.wallet.utils.stringToBytes32(params)],options);
            return result;
        }
        let execute_call = async (params:string[], options?: TransactionOptions): Promise<void> => {
            let result = await this.call('execute',[this.wallet.utils.stringToBytes32(params)],options);
            return;
        }
        this.execute = Object.assign(execute_send, {
            call:execute_call
        });
    }
}
export module OSWAP_ChainRegistryExecutor{
    export interface ExecuteEvent {params:string[],_event:Event}
}