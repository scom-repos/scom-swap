import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_MainChainVotingExecutor.json";
export class OSWAP_MainChainVotingExecutor extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(votingManager:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([votingManager], options);
    }
    parseExecuteEvent(receipt: TransactionReceipt): OSWAP_MainChainVotingExecutor.ExecuteEvent[]{
        return this.parseEvents(receipt, "Execute").map(e=>this.decodeExecuteEvent(e));
    }
    decodeExecuteEvent(event: Event): OSWAP_MainChainVotingExecutor.ExecuteEvent{
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
    initAddress: {
        (chainRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (chainRegistry:string, options?: TransactionOptions) => Promise<void>;
    }
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
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
        let trollRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('trollRegistry',[],options);
            return result;
        }
        this.trollRegistry = trollRegistry_call
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
        let initAddress_send = async (chainRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('initAddress',[chainRegistry],options);
            return result;
        }
        let initAddress_call = async (chainRegistry:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('initAddress',[chainRegistry],options);
            return;
        }
        this.initAddress = Object.assign(initAddress_send, {
            call:initAddress_call
        });
    }
}
export module OSWAP_MainChainVotingExecutor{
    export interface ExecuteEvent {params:string[],_event:Event}
}