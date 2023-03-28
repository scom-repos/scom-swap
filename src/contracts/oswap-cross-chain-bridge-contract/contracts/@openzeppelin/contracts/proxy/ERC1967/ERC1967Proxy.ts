import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./ERC1967Proxy.json";
export interface IDeployParams {logic:string;data:string}
export class ERC1967Proxy extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: number|BigNumber|TransactionOptions): Promise<string>{
        return this.__deploy([params.logic,this.wallet.utils.stringToBytes(params.data)], options);
    }
    parseAdminChangedEvent(receipt: TransactionReceipt): ERC1967Proxy.AdminChangedEvent[]{
        return this.parseEvents(receipt, "AdminChanged").map(e=>this.decodeAdminChangedEvent(e));
    }
    decodeAdminChangedEvent(event: Event): ERC1967Proxy.AdminChangedEvent{
        let result = event.data;
        return {
            previousAdmin: result.previousAdmin,
            newAdmin: result.newAdmin,
            _event: event
        };
    }
    parseBeaconUpgradedEvent(receipt: TransactionReceipt): ERC1967Proxy.BeaconUpgradedEvent[]{
        return this.parseEvents(receipt, "BeaconUpgraded").map(e=>this.decodeBeaconUpgradedEvent(e));
    }
    decodeBeaconUpgradedEvent(event: Event): ERC1967Proxy.BeaconUpgradedEvent{
        let result = event.data;
        return {
            beacon: result.beacon,
            _event: event
        };
    }
    parseUpgradedEvent(receipt: TransactionReceipt): ERC1967Proxy.UpgradedEvent[]{
        return this.parseEvents(receipt, "Upgraded").map(e=>this.decodeUpgradedEvent(e));
    }
    decodeUpgradedEvent(event: Event): ERC1967Proxy.UpgradedEvent{
        let result = event.data;
        return {
            implementation: result.implementation,
            _event: event
        };
    }
    private assign(){
    }
}
export module ERC1967Proxy{
    export interface AdminChangedEvent {previousAdmin:string,newAdmin:string,_event:Event}
    export interface BeaconUpgradedEvent {beacon:string,_event:Event}
    export interface UpgradedEvent {implementation:string,_event:Event}
}