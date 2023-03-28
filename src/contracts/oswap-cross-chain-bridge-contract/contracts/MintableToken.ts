import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./MintableToken.json";
export interface IDeployParams {name:string;symbol:string}
export interface IAllowanceParams {owner:string;spender:string}
export interface IApproveParams {spender:string;amount:number|BigNumber}
export interface IBurnFromParams {account:string;amount:number|BigNumber}
export interface IDecreaseAllowanceParams {spender:string;subtractedValue:number|BigNumber}
export interface IIncreaseAllowanceParams {spender:string;addedValue:number|BigNumber}
export interface IMintParams {account:string;amount:number|BigNumber}
export interface ITransferParams {recipient:string;amount:number|BigNumber}
export interface ITransferFromParams {sender:string;recipient:string;amount:number|BigNumber}
export class MintableToken extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.name,params.symbol], options);
    }
    parseApprovalEvent(receipt: TransactionReceipt): MintableToken.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): MintableToken.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): MintableToken.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): MintableToken.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): MintableToken.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): MintableToken.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): MintableToken.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): MintableToken.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): MintableToken.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): MintableToken.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): MintableToken.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): MintableToken.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    }
    balanceOf: {
        (account:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    burn: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    burnFrom: {
        (params: IBurnFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IBurnFromParams, options?: TransactionOptions) => Promise<void>;
    }
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    mint: {
        (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IMintParams, options?: TransactionOptions) => Promise<boolean>;
    }
    name: {
        (options?: TransactionOptions): Promise<string>;
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
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let allowanceParams = (params: IAllowanceParams) => [params.owner,params.spender];
        let allowance_call = async (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params),options);
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let balanceOf_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[account],options);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let decimals_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('decimals',[],options);
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let isPermitted_call = async (param1:string, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('isPermitted',[param1],options);
            return result;
        }
        this.isPermitted = isPermitted_call
        let name_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('name',[],options);
            return result;
        }
        this.name = name_call
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
        let symbol_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('symbol',[],options);
            return result;
        }
        this.symbol = symbol_call
        let totalSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSupply',[],options);
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let approveParams = (params: IApproveParams) => [params.spender,this.wallet.utils.toString(params.amount)];
        let approve_send = async (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params),options);
            return result;
        }
        let approve_call = async (params: IApproveParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params),options);
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let burn_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('burn',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let burn_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('burn',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.burn = Object.assign(burn_send, {
            call:burn_call
        });
        let burnFromParams = (params: IBurnFromParams) => [params.account,this.wallet.utils.toString(params.amount)];
        let burnFrom_send = async (params: IBurnFromParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('burnFrom',burnFromParams(params),options);
            return result;
        }
        let burnFrom_call = async (params: IBurnFromParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('burnFrom',burnFromParams(params),options);
            return;
        }
        this.burnFrom = Object.assign(burnFrom_send, {
            call:burnFrom_call
        });
        let decreaseAllowanceParams = (params: IDecreaseAllowanceParams) => [params.spender,this.wallet.utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('decreaseAllowance',decreaseAllowanceParams(params),options);
            return result;
        }
        let decreaseAllowance_call = async (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('decreaseAllowance',decreaseAllowanceParams(params),options);
            return result;
        }
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call:decreaseAllowance_call
        });
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
        let increaseAllowanceParams = (params: IIncreaseAllowanceParams) => [params.spender,this.wallet.utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('increaseAllowance',increaseAllowanceParams(params),options);
            return result;
        }
        let increaseAllowance_call = async (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('increaseAllowance',increaseAllowanceParams(params),options);
            return result;
        }
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call:increaseAllowance_call
        });
        let mintParams = (params: IMintParams) => [params.account,this.wallet.utils.toString(params.amount)];
        let mint_send = async (params: IMintParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('mint',mintParams(params),options);
            return result;
        }
        let mint_call = async (params: IMintParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('mint',mintParams(params),options);
            return result;
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
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
        let transferParams = (params: ITransferParams) => [params.recipient,this.wallet.utils.toString(params.amount)];
        let transfer_send = async (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params),options);
            return result;
        }
        let transfer_call = async (params: ITransferParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params),options);
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.sender,params.recipient,this.wallet.utils.toString(params.amount)];
        let transferFrom_send = async (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params),options);
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams, options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params),options);
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
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
    }
}
export module MintableToken{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
}