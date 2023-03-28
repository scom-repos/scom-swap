import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_ConfigStoreTradeVault.json";
export interface IDeployParams {arbitrageFee:number|BigNumber;router:string}
export interface ISetConfigParams {name:string;value:string}
export interface ISetConfigAddressParams {name:string;value:string}
export class OSWAP_ConfigStoreTradeVault extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([this.wallet.utils.toString(params.arbitrageFee),params.router], options);
    }
    parseParamSet1Event(receipt: TransactionReceipt): OSWAP_ConfigStoreTradeVault.ParamSet1Event[]{
        return this.parseEvents(receipt, "ParamSet1").map(e=>this.decodeParamSet1Event(e));
    }
    decodeParamSet1Event(event: Event): OSWAP_ConfigStoreTradeVault.ParamSet1Event{
        let result = event.data;
        return {
            name: result.name,
            value1: result.value1,
            _event: event
        };
    }
    arbitrageFee: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    feeTo: {
        (options?: TransactionOptions): Promise<string>;
    }
    getTradeParam: {
        (options?: TransactionOptions): Promise<{param1:string,param2:BigNumber}>;
    }
    newConfigStore: {
        (options?: TransactionOptions): Promise<string>;
    }
    router: {
        (options?: TransactionOptions): Promise<string>;
    }
    setConfig: {
        (params: ISetConfigParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetConfigParams, options?: TransactionOptions) => Promise<void>;
    }
    setConfigAddress: {
        (params: ISetConfigAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISetConfigAddressParams, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let arbitrageFee_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('arbitrageFee',[],options);
            return new BigNumber(result);
        }
        this.arbitrageFee = arbitrageFee_call
        let feeTo_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('feeTo',[],options);
            return result;
        }
        this.feeTo = feeTo_call
        let getTradeParam_call = async (options?: TransactionOptions): Promise<{param1:string,param2:BigNumber}> => {
            let result = await this.call('getTradeParam',[],options);
            return {
                param1: result[0],
                param2: new BigNumber(result[1])
            };
        }
        this.getTradeParam = getTradeParam_call
        let newConfigStore_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newConfigStore',[],options);
            return result;
        }
        this.newConfigStore = newConfigStore_call
        let router_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('router',[],options);
            return result;
        }
        this.router = router_call
        let setConfigParams = (params: ISetConfigParams) => [this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.stringToBytes32(params.value)];
        let setConfig_send = async (params: ISetConfigParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setConfig',setConfigParams(params),options);
            return result;
        }
        let setConfig_call = async (params: ISetConfigParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setConfig',setConfigParams(params),options);
            return;
        }
        this.setConfig = Object.assign(setConfig_send, {
            call:setConfig_call
        });
        let setConfigAddressParams = (params: ISetConfigAddressParams) => [this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.stringToBytes32(params.value)];
        let setConfigAddress_send = async (params: ISetConfigAddressParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setConfigAddress',setConfigAddressParams(params),options);
            return result;
        }
        let setConfigAddress_call = async (params: ISetConfigAddressParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setConfigAddress',setConfigAddressParams(params),options);
            return;
        }
        this.setConfigAddress = Object.assign(setConfigAddress_send, {
            call:setConfigAddress_call
        });
    }
}
export module OSWAP_ConfigStoreTradeVault{
    export interface ParamSet1Event {name:string,value1:string,_event:Event}
}