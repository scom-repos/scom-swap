import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./Owned.json";
export class Owned extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): Owned.OwnershipTransferRequestedEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferRequested").map(e=>this.decodeOwnershipTransferRequestedEvent(e));
    }
    decodeOwnershipTransferRequestedEvent(event: Event): Owned.OwnershipTransferRequestedEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): Owned.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): Owned.OwnershipTransferredEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            _event: event
        };
    }
    acceptOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    transferOwnership: {
        (to:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to:string, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let acceptOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('acceptOwnership',[],options);
            return result;
        }
        let acceptOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('acceptOwnership',[],options);
            return;
        }
        this.acceptOwnership = Object.assign(acceptOwnership_send, {
            call:acceptOwnership_call
        });
        let transferOwnership_send = async (to:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[to],options);
            return result;
        }
        let transferOwnership_call = async (to:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[to],options);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
    }
}
export module Owned{
    export interface OwnershipTransferRequestedEvent {from:string,to:string,_event:Event}
    export interface OwnershipTransferredEvent {from:string,to:string,_event:Event}
}