import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_ChainRegistry.json";
export interface IAddChainParams {chainId:number|BigNumber;status:number|BigNumber;govToken:string;configStore:string;contractNames:string[];address:string[]}
export interface IGetChainParams {chainId:number|BigNumber;contractnames:string[]}
export interface IInitParams {chainId:(number|BigNumber)[];status:(number|BigNumber)[];govToken:string[];configStore:string[];mainChainContractNames:string[];mainChainContractAddress:string[];contractNames:string[];address:string[][];tokenNames:string[];vault:{token:string,vaultRegistry:string,bridgeVault:string}[][]}
export interface INewVaultParams {name:string;chainId:(number|BigNumber)[];vault:{token:string,vaultRegistry:string,bridgeVault:string}[]}
export interface ISideChainContractAddressParams {param1:number|BigNumber;param2:string}
export interface IUpdateAddressParams {chainId:number|BigNumber;contractName:string;address:string}
export interface IUpdateAddressesParams {chainId:number|BigNumber;contractNames:string[];addresses:string[]}
export interface IUpdateConfigStoreParams {chainId:number|BigNumber;address:string}
export interface IUpdateMainChainAddressParams {contractName:string;address:string}
export interface IUpdateStatusParams {chainId:number|BigNumber;status:number|BigNumber}
export interface IUpdateVaultParams {index:number|BigNumber;chainId:number|BigNumber;vault:{token:string,vaultRegistry:string,bridgeVault:string}}
export interface IVaultsParams {param1:number|BigNumber;param2:number|BigNumber}
export class OSWAP_ChainRegistry extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(votingExecutorManager:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([votingExecutorManager], options);
    }
    parseNewChainEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.NewChainEvent[]{
        return this.parseEvents(receipt, "NewChain").map(e=>this.decodeNewChainEvent(e));
    }
    decodeNewChainEvent(event: Event): OSWAP_ChainRegistry.NewChainEvent{
        let result = event.data;
        return {
            chainId: new BigNumber(result.chainId),
            status: new BigNumber(result.status),
            govToken: result.govToken,
            _event: event
        };
    }
    parseUpdateAddressEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateAddressEvent[]{
        return this.parseEvents(receipt, "UpdateAddress").map(e=>this.decodeUpdateAddressEvent(e));
    }
    decodeUpdateAddressEvent(event: Event): OSWAP_ChainRegistry.UpdateAddressEvent{
        let result = event.data;
        return {
            chainId: new BigNumber(result.chainId),
            contractName: result.contractName,
            _address: result._address,
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateConfigStoreEvent[]{
        return this.parseEvents(receipt, "UpdateConfigStore").map(e=>this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_ChainRegistry.UpdateConfigStoreEvent{
        let result = event.data;
        return {
            chainId: new BigNumber(result.chainId),
            _address: result._address,
            _event: event
        };
    }
    parseUpdateMainChainAddressEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateMainChainAddressEvent[]{
        return this.parseEvents(receipt, "UpdateMainChainAddress").map(e=>this.decodeUpdateMainChainAddressEvent(e));
    }
    decodeUpdateMainChainAddressEvent(event: Event): OSWAP_ChainRegistry.UpdateMainChainAddressEvent{
        let result = event.data;
        return {
            contractName: result.contractName,
            _address: result._address,
            _event: event
        };
    }
    parseUpdateStatusEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateStatusEvent[]{
        return this.parseEvents(receipt, "UpdateStatus").map(e=>this.decodeUpdateStatusEvent(e));
    }
    decodeUpdateStatusEvent(event: Event): OSWAP_ChainRegistry.UpdateStatusEvent{
        let result = event.data;
        return {
            chainId: new BigNumber(result.chainId),
            status: new BigNumber(result.status),
            _event: event
        };
    }
    parseUpdateVaultEvent(receipt: TransactionReceipt): OSWAP_ChainRegistry.UpdateVaultEvent[]{
        return this.parseEvents(receipt, "UpdateVault").map(e=>this.decodeUpdateVaultEvent(e));
    }
    decodeUpdateVaultEvent(event: Event): OSWAP_ChainRegistry.UpdateVaultEvent{
        let result = event.data;
        return {
            index: new BigNumber(result.index),
            chainId: new BigNumber(result.chainId),
            vault: 
            {
                token: result.vault.token,
                vaultRegistry: result.vault.vaultRegistry,
                bridgeVault: result.vault.bridgeVault
            }
            ,
            _event: event
        };
    }
    addChain: {
        (params: IAddChainParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddChainParams, options?: TransactionOptions) => Promise<void>;
    }
    allChains: {
        (options?: TransactionOptions): Promise<BigNumber[]>;
    }
    chains: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    chainsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    configStore: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    getChain: {
        (params: IGetChainParams, options?: TransactionOptions): Promise<{_status:BigNumber,_govToken:string,_configStore:string,_contracts:string[],_vaults:{token:string,vaultRegistry:string,bridgeVault:string}[]}>;
    }
    govToken: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    init: {
        (params: IInitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitParams, options?: TransactionOptions) => Promise<void>;
    }
    mainChainContractAddress: {
        (param1:string, options?: TransactionOptions): Promise<string>;
    }
    newVault: {
        (params: INewVaultParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewVaultParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    sideChainContractAddress: {
        (params: ISideChainContractAddressParams, options?: TransactionOptions): Promise<string>;
    }
    status: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    tokenNames: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    tokenNamesLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    updateAddress: {
        (params: IUpdateAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateAddressParams, options?: TransactionOptions) => Promise<void>;
    }
    updateAddresses: {
        (params: IUpdateAddressesParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateAddressesParams, options?: TransactionOptions) => Promise<void>;
    }
    updateConfigStore: {
        (params: IUpdateConfigStoreParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateConfigStoreParams, options?: TransactionOptions) => Promise<void>;
    }
    updateMainChainAddress: {
        (params: IUpdateMainChainAddressParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateMainChainAddressParams, options?: TransactionOptions) => Promise<void>;
    }
    updateStatus: {
        (params: IUpdateStatusParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateStatusParams, options?: TransactionOptions) => Promise<void>;
    }
    updateVault: {
        (params: IUpdateVaultParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateVaultParams, options?: TransactionOptions) => Promise<void>;
    }
    vaults: {
        (params: IVaultsParams, options?: TransactionOptions): Promise<{token:string,vaultRegistry:string,bridgeVault:string}>;
    }
    vaultsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    votingExecutorManager: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let allChains_call = async (options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('allChains',[],options);
            return result.map(e=>new BigNumber(e));
        }
        this.allChains = allChains_call
        let chains_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('chains',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.chains = chains_call
        let chainsLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('chainsLength',[],options);
            return new BigNumber(result);
        }
        this.chainsLength = chainsLength_call
        let configStore_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('configStore',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.configStore = configStore_call
        let getChainParams = (params: IGetChainParams) => [this.wallet.utils.toString(params.chainId),this.wallet.utils.stringToBytes32(params.contractnames)];
        let getChain_call = async (params: IGetChainParams, options?: TransactionOptions): Promise<{_status:BigNumber,_govToken:string,_configStore:string,_contracts:string[],_vaults:{token:string,vaultRegistry:string,bridgeVault:string}[]}> => {
            let result = await this.call('getChain',getChainParams(params),options);
            return {
                _status: new BigNumber(result._status),
                _govToken: result._govToken,
                _configStore: result._configStore,
                _contracts: result._contracts,
                _vaults: result._vaults.map(e=>(
                    {
                        token: e.token,
                        vaultRegistry: e.vaultRegistry,
                        bridgeVault: e.bridgeVault
                    }
                ))
            };
        }
        this.getChain = getChain_call
        let govToken_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('govToken',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.govToken = govToken_call
        let mainChainContractAddress_call = async (param1:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('mainChainContractAddress',[this.wallet.utils.stringToBytes32(param1)],options);
            return result;
        }
        this.mainChainContractAddress = mainChainContractAddress_call
        let sideChainContractAddressParams = (params: ISideChainContractAddressParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.stringToBytes32(params.param2)];
        let sideChainContractAddress_call = async (params: ISideChainContractAddressParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('sideChainContractAddress',sideChainContractAddressParams(params),options);
            return result;
        }
        this.sideChainContractAddress = sideChainContractAddress_call
        let status_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('status',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.status = status_call
        let tokenNames_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('tokenNames',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.tokenNames = tokenNames_call
        let tokenNamesLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('tokenNamesLength',[],options);
            return new BigNumber(result);
        }
        this.tokenNamesLength = tokenNamesLength_call
        let vaultsParams = (params: IVaultsParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let vaults_call = async (params: IVaultsParams, options?: TransactionOptions): Promise<{token:string,vaultRegistry:string,bridgeVault:string}> => {
            let result = await this.call('vaults',vaultsParams(params),options);
            return {
                token: result.token,
                vaultRegistry: result.vaultRegistry,
                bridgeVault: result.bridgeVault
            };
        }
        this.vaults = vaults_call
        let vaultsLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('vaultsLength',[],options);
            return new BigNumber(result);
        }
        this.vaultsLength = vaultsLength_call
        let votingExecutorManager_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('votingExecutorManager',[],options);
            return result;
        }
        this.votingExecutorManager = votingExecutorManager_call
        let addChainParams = (params: IAddChainParams) => [this.wallet.utils.toString(params.chainId),this.wallet.utils.toString(params.status),params.govToken,params.configStore,this.wallet.utils.stringToBytes32(params.contractNames),params.address];
        let addChain_send = async (params: IAddChainParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addChain',addChainParams(params),options);
            return result;
        }
        let addChain_call = async (params: IAddChainParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addChain',addChainParams(params),options);
            return;
        }
        this.addChain = Object.assign(addChain_send, {
            call:addChain_call
        });
        let initParams = (params: IInitParams) => [this.wallet.utils.toString(params.chainId),this.wallet.utils.toString(params.status),params.govToken,params.configStore,this.wallet.utils.stringToBytes32(params.mainChainContractNames),params.mainChainContractAddress,this.wallet.utils.stringToBytes32(params.contractNames),params.address,this.wallet.utils.stringToBytes32(params.tokenNames),params.vault.map(a0=>a0.map(e=>([e.token,e.vaultRegistry,e.bridgeVault])))];
        let init_send = async (params: IInitParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('init',initParams(params),options);
            return result;
        }
        let init_call = async (params: IInitParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('init',initParams(params),options);
            return;
        }
        this.init = Object.assign(init_send, {
            call:init_call
        });
        let newVaultParams = (params: INewVaultParams) => [this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.toString(params.chainId),params.vault.map(e=>([e.token,e.vaultRegistry,e.bridgeVault]))];
        let newVault_send = async (params: INewVaultParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newVault',newVaultParams(params),options);
            return result;
        }
        let newVault_call = async (params: INewVaultParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('newVault',newVaultParams(params),options);
            return new BigNumber(result);
        }
        this.newVault = Object.assign(newVault_send, {
            call:newVault_call
        });
        let updateAddressParams = (params: IUpdateAddressParams) => [this.wallet.utils.toString(params.chainId),this.wallet.utils.stringToBytes32(params.contractName),params.address];
        let updateAddress_send = async (params: IUpdateAddressParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateAddress',updateAddressParams(params),options);
            return result;
        }
        let updateAddress_call = async (params: IUpdateAddressParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateAddress',updateAddressParams(params),options);
            return;
        }
        this.updateAddress = Object.assign(updateAddress_send, {
            call:updateAddress_call
        });
        let updateAddressesParams = (params: IUpdateAddressesParams) => [this.wallet.utils.toString(params.chainId),this.wallet.utils.stringToBytes32(params.contractNames),params.addresses];
        let updateAddresses_send = async (params: IUpdateAddressesParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateAddresses',updateAddressesParams(params),options);
            return result;
        }
        let updateAddresses_call = async (params: IUpdateAddressesParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateAddresses',updateAddressesParams(params),options);
            return;
        }
        this.updateAddresses = Object.assign(updateAddresses_send, {
            call:updateAddresses_call
        });
        let updateConfigStoreParams = (params: IUpdateConfigStoreParams) => [this.wallet.utils.toString(params.chainId),params.address];
        let updateConfigStore_send = async (params: IUpdateConfigStoreParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateConfigStore',updateConfigStoreParams(params),options);
            return result;
        }
        let updateConfigStore_call = async (params: IUpdateConfigStoreParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateConfigStore',updateConfigStoreParams(params),options);
            return;
        }
        this.updateConfigStore = Object.assign(updateConfigStore_send, {
            call:updateConfigStore_call
        });
        let updateMainChainAddressParams = (params: IUpdateMainChainAddressParams) => [this.wallet.utils.stringToBytes32(params.contractName),params.address];
        let updateMainChainAddress_send = async (params: IUpdateMainChainAddressParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateMainChainAddress',updateMainChainAddressParams(params),options);
            return result;
        }
        let updateMainChainAddress_call = async (params: IUpdateMainChainAddressParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateMainChainAddress',updateMainChainAddressParams(params),options);
            return;
        }
        this.updateMainChainAddress = Object.assign(updateMainChainAddress_send, {
            call:updateMainChainAddress_call
        });
        let updateStatusParams = (params: IUpdateStatusParams) => [this.wallet.utils.toString(params.chainId),this.wallet.utils.toString(params.status)];
        let updateStatus_send = async (params: IUpdateStatusParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateStatus',updateStatusParams(params),options);
            return result;
        }
        let updateStatus_call = async (params: IUpdateStatusParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateStatus',updateStatusParams(params),options);
            return;
        }
        this.updateStatus = Object.assign(updateStatus_send, {
            call:updateStatus_call
        });
        let updateVaultParams = (params: IUpdateVaultParams) => [this.wallet.utils.toString(params.index),this.wallet.utils.toString(params.chainId),[params.vault.token,params.vault.vaultRegistry,params.vault.bridgeVault]];
        let updateVault_send = async (params: IUpdateVaultParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateVault',updateVaultParams(params),options);
            return result;
        }
        let updateVault_call = async (params: IUpdateVaultParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateVault',updateVaultParams(params),options);
            return;
        }
        this.updateVault = Object.assign(updateVault_send, {
            call:updateVault_call
        });
    }
}
export module OSWAP_ChainRegistry{
    export interface NewChainEvent {chainId:BigNumber,status:BigNumber,govToken:string,_event:Event}
    export interface UpdateAddressEvent {chainId:BigNumber,contractName:string,_address:string,_event:Event}
    export interface UpdateConfigStoreEvent {chainId:BigNumber,_address:string,_event:Event}
    export interface UpdateMainChainAddressEvent {contractName:string,_address:string,_event:Event}
    export interface UpdateStatusEvent {chainId:BigNumber,status:BigNumber,_event:Event}
    export interface UpdateVaultEvent {index:BigNumber,chainId:BigNumber,vault:{token:string,vaultRegistry:string,bridgeVault:string},_event:Event}
}