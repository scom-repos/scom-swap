import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_ContractProxy.json";
export interface IDeployParams {logic:string;votingManager:string;data:string}
export interface IUpgradeToParams {oldImplementation:string;newImplementation:string;finalize:boolean}
export interface IUpgradeToAndCallParams {oldImplementation:string;newImplementation:string;data:string;finalize:boolean}
export class OSWAP_ContractProxy extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: number|BigNumber|TransactionOptions): Promise<string>{
        return this.__deploy([params.logic,params.votingManager,this.wallet.utils.stringToBytes(params.data)], options);
    }
    parseAdminChangedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.AdminChangedEvent[]{
        return this.parseEvents(receipt, "AdminChanged").map(e=>this.decodeAdminChangedEvent(e));
    }
    decodeAdminChangedEvent(event: Event): OSWAP_ContractProxy.AdminChangedEvent{
        let result = event.data;
        return {
            previousAdmin: result.previousAdmin,
            newAdmin: result.newAdmin,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): OSWAP_ContractProxy.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBeaconUpgradedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.BeaconUpgradedEvent[]{
        return this.parseEvents(receipt, "BeaconUpgraded").map(e=>this.decodeBeaconUpgradedEvent(e));
    }
    decodeBeaconUpgradedEvent(event: Event): OSWAP_ContractProxy.BeaconUpgradedEvent{
        let result = event.data;
        return {
            beacon: result.beacon,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): OSWAP_ContractProxy.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_ContractProxy.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): OSWAP_ContractProxy.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUpgradedEvent(receipt: TransactionReceipt): OSWAP_ContractProxy.UpgradedEvent[]{
        return this.parseEvents(receipt, "Upgraded").map(e=>this.decodeUpgradedEvent(e));
    }
    decodeUpgradedEvent(event: Event): OSWAP_ContractProxy.UpgradedEvent{
        let result = event.data;
        return {
            implementation: result.implementation,
            _event: event
        };
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    implementation: {
        (options?: TransactionOptions): Promise<string>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    upgradeTo: {
        (params: IUpgradeToParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpgradeToParams, options?: TransactionOptions) => Promise<void>;
    }
    upgradeToAndCall: {
        (params: IUpgradeToAndCallParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpgradeToAndCallParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
    }
    private assign(){
        let implementation_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('implementation',[],options);
            return result;
        }
        this.implementation = implementation_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let newOwner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newOwner',[],options);
            return result;
        }
        this.newOwner = newOwner_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let deny_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('deny',[user],options);
            return result;
        }
        let deny_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('deny',[user],options);
            return;
        }
        this.deny = Object.assign(deny_send, {
            call:deny_call
        });
        let permit_send = async (user:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('permit',[user],options);
            return result;
        }
        let permit_call = async (user:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('permit',[user],options);
            return;
        }
        this.permit = Object.assign(permit_send, {
            call:permit_call
        });
        let takeOwnership_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('takeOwnership',[],options);
            return result;
        }
        let takeOwnership_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('takeOwnership',[],options);
            return;
        }
        this.takeOwnership = Object.assign(takeOwnership_send, {
            call:takeOwnership_call
        });
        let transferOwnership_send = async (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner],options);
            return result;
        }
        let transferOwnership_call = async (newOwner:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner],options);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let upgradeToParams = (params: IUpgradeToParams) => [params.oldImplementation,params.newImplementation,params.finalize];
        let upgradeTo_send = async (params: IUpgradeToParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeTo',upgradeToParams(params),options);
            return result;
        }
        let upgradeTo_call = async (params: IUpgradeToParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('upgradeTo',upgradeToParams(params),options);
            return;
        }
        this.upgradeTo = Object.assign(upgradeTo_send, {
            call:upgradeTo_call
        });
        let upgradeToAndCallParams = (params: IUpgradeToAndCallParams) => [params.oldImplementation,params.newImplementation,this.wallet.utils.stringToBytes(params.data),params.finalize];
        let upgradeToAndCall_send = async (params: IUpgradeToAndCallParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeToAndCall',upgradeToAndCallParams(params),options);
            return result;
        }
        let upgradeToAndCall_call = async (params: IUpgradeToAndCallParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('upgradeToAndCall',upgradeToAndCallParams(params),options);
            return;
        }
        this.upgradeToAndCall = Object.assign(upgradeToAndCall_send, {
            call:upgradeToAndCall_call
        });
    }
}
export module OSWAP_ContractProxy{
    export interface AdminChangedEvent {previousAdmin:string,newAdmin:string,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface BeaconUpgradedEvent {beacon:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UpgradedEvent {implementation:string,_event:Event}
}