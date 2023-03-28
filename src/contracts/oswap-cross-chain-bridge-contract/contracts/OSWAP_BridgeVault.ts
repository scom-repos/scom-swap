import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_BridgeVault.json";
export interface IDeployParams {vaultRegistry:string;configStore:string;asset:string}
export interface IAllowanceParams {owner:string;spender:string}
export interface IApproveParams {spender:string;amount:number|BigNumber}
export interface IAssetPriceAgainstGovTokenParams {govTokenOracle:string;assetTokenOracle:string}
export interface ICancelOrderParams {signatures:string[];orderId:number|BigNumber;canceledByOrderOwner:boolean;protocolFee:number|BigNumber}
export interface IDecreaseAllowanceParams {spender:string;subtractedValue:number|BigNumber}
export interface IGetOrdersParams {start:number|BigNumber;length:number|BigNumber}
export interface IHashCancelOrderParamsParams {orderId:number|BigNumber;canceledByOrderOwner:boolean;protocolFee:number|BigNumber}
export interface IHashOrderParams {owner:string;sourceChainId:number|BigNumber;orderId:number|BigNumber}
export interface IHashSwapParamsParams {orderId:string;amendment:number|BigNumber;order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber};protocolFee:number|BigNumber;pair:string[]}
export interface IHashWithdrawParamsParams {owner:string;amount:number|BigNumber;nonce:number|BigNumber}
export interface IIncreaseAllowanceParams {spender:string;addedValue:number|BigNumber}
export interface INewOrderFromRouterParams {order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber};trader:string}
export interface IOrderAmendmentsParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IRebalancerWithdrawParams {signatures:string[];assetAmount:number|BigNumber;nonce:number|BigNumber}
export interface IRemoveLiquidityParams {provider:string;assetAmount:number|BigNumber}
export interface IRequestAmendOrderParams {orderId:number|BigNumber;order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}}
export interface IRequestCancelOrderParams {sourceChainId:number|BigNumber;orderId:number|BigNumber}
export interface ISwapParams {signatures:string[];owner:string;orderId:number|BigNumber;amendment:number|BigNumber;protocolFee:number|BigNumber;pair:string[];order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}}
export interface ITransferParams {recipient:string;amount:number|BigNumber}
export interface ITransferFromParams {sender:string;recipient:string;amount:number|BigNumber}
export interface IVoidOrderParams {signatures:string[];orderId:string}
export class OSWAP_BridgeVault extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.vaultRegistry,params.configStore,params.asset], options);
    }
    parseAddLiquidityEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.AddLiquidityEvent[]{
        return this.parseEvents(receipt, "AddLiquidity").map(e=>this.decodeAddLiquidityEvent(e));
    }
    decodeAddLiquidityEvent(event: Event): OSWAP_BridgeVault.AddLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            amount: new BigNumber(result.amount),
            mintAmount: new BigNumber(result.mintAmount),
            newBalance: new BigNumber(result.newBalance),
            newLpAssetBalance: new BigNumber(result.newLpAssetBalance),
            _event: event
        };
    }
    parseAmendOrderRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.AmendOrderRequestEvent[]{
        return this.parseEvents(receipt, "AmendOrderRequest").map(e=>this.decodeAmendOrderRequestEvent(e));
    }
    decodeAmendOrderRequestEvent(event: Event): OSWAP_BridgeVault.AmendOrderRequestEvent{
        let result = event.data;
        return {
            orderId: new BigNumber(result.orderId),
            amendment: new BigNumber(result.amendment),
            order: 
            {
                peerChain: new BigNumber(result.order.peerChain),
                inAmount: new BigNumber(result.order.inAmount),
                outToken: result.order.outToken,
                minOutAmount: new BigNumber(result.order.minOutAmount),
                to: result.order.to,
                expire: new BigNumber(result.order.expire)
            }
            ,
            _event: event
        };
    }
    parseApprovalEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): OSWAP_BridgeVault.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseNewOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.NewOrderEvent[]{
        return this.parseEvents(receipt, "NewOrder").map(e=>this.decodeNewOrderEvent(e));
    }
    decodeNewOrderEvent(event: Event): OSWAP_BridgeVault.NewOrderEvent{
        let result = event.data;
        return {
            orderId: new BigNumber(result.orderId),
            owner: result.owner,
            order: 
            {
                peerChain: new BigNumber(result.order.peerChain),
                inAmount: new BigNumber(result.order.inAmount),
                outToken: result.order.outToken,
                minOutAmount: new BigNumber(result.order.minOutAmount),
                to: result.order.to,
                expire: new BigNumber(result.order.expire)
            }
            ,
            newImbalance: new BigNumber(result.newImbalance),
            _event: event
        };
    }
    parseOrderCanceledEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.OrderCanceledEvent[]{
        return this.parseEvents(receipt, "OrderCanceled").map(e=>this.decodeOrderCanceledEvent(e));
    }
    decodeOrderCanceledEvent(event: Event): OSWAP_BridgeVault.OrderCanceledEvent{
        let result = event.data;
        return {
            orderId: new BigNumber(result.orderId),
            sender: result.sender,
            signers: result.signers.map(e=>new BigNumber(e)),
            canceledByOrderOwner: result.canceledByOrderOwner,
            newImbalance: new BigNumber(result.newImbalance),
            newProtocolFeeBalance: new BigNumber(result.newProtocolFeeBalance),
            _event: event
        };
    }
    parseRebalanceEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RebalanceEvent[]{
        return this.parseEvents(receipt, "Rebalance").map(e=>this.decodeRebalanceEvent(e));
    }
    decodeRebalanceEvent(event: Event): OSWAP_BridgeVault.RebalanceEvent{
        let result = event.data;
        return {
            rebalancer: result.rebalancer,
            amount: new BigNumber(result.amount),
            newImbalance: new BigNumber(result.newImbalance),
            _event: event
        };
    }
    parseRemoveLiquidityEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RemoveLiquidityEvent[]{
        return this.parseEvents(receipt, "RemoveLiquidity").map(e=>this.decodeRemoveLiquidityEvent(e));
    }
    decodeRemoveLiquidityEvent(event: Event): OSWAP_BridgeVault.RemoveLiquidityEvent{
        let result = event.data;
        return {
            provider: result.provider,
            amount: new BigNumber(result.amount),
            newPendingWithdrawal: new BigNumber(result.newPendingWithdrawal),
            _event: event
        };
    }
    parseRemoveLiquidityRequestEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RemoveLiquidityRequestEvent[]{
        return this.parseEvents(receipt, "RemoveLiquidityRequest").map(e=>this.decodeRemoveLiquidityRequestEvent(e));
    }
    decodeRemoveLiquidityRequestEvent(event: Event): OSWAP_BridgeVault.RemoveLiquidityRequestEvent{
        let result = event.data;
        return {
            provider: result.provider,
            amount: new BigNumber(result.amount),
            burnAmount: new BigNumber(result.burnAmount),
            newBalance: new BigNumber(result.newBalance),
            newLpAssetBalance: new BigNumber(result.newLpAssetBalance),
            newPendingWithdrawal: new BigNumber(result.newPendingWithdrawal),
            _event: event
        };
    }
    parseRequestCancelOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.RequestCancelOrderEvent[]{
        return this.parseEvents(receipt, "RequestCancelOrder").map(e=>this.decodeRequestCancelOrderEvent(e));
    }
    decodeRequestCancelOrderEvent(event: Event): OSWAP_BridgeVault.RequestCancelOrderEvent{
        let result = event.data;
        return {
            owner: result.owner,
            sourceChainId: new BigNumber(result.sourceChainId),
            orderId: new BigNumber(result.orderId),
            hashedOrderId: result.hashedOrderId,
            _event: event
        };
    }
    parseSwapEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.SwapEvent[]{
        return this.parseEvents(receipt, "Swap").map(e=>this.decodeSwapEvent(e));
    }
    decodeSwapEvent(event: Event): OSWAP_BridgeVault.SwapEvent{
        let result = event.data;
        return {
            orderId: new BigNumber(result.orderId),
            sender: result.sender,
            signers: result.signers.map(e=>new BigNumber(e)),
            owner: result.owner,
            amendment: new BigNumber(result.amendment),
            order: 
            {
                peerChain: new BigNumber(result.order.peerChain),
                inAmount: new BigNumber(result.order.inAmount),
                outToken: result.order.outToken,
                minOutAmount: new BigNumber(result.order.minOutAmount),
                to: result.order.to,
                expire: new BigNumber(result.order.expire)
            }
            ,
            outAmount: new BigNumber(result.outAmount),
            newImbalance: new BigNumber(result.newImbalance),
            newLpAssetBalance: new BigNumber(result.newLpAssetBalance),
            newProtocolFeeBalance: new BigNumber(result.newProtocolFeeBalance),
            _event: event
        };
    }
    parseSyncEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.SyncEvent[]{
        return this.parseEvents(receipt, "Sync").map(e=>this.decodeSyncEvent(e));
    }
    decodeSyncEvent(event: Event): OSWAP_BridgeVault.SyncEvent{
        let result = event.data;
        return {
            excess: new BigNumber(result.excess),
            newProtocolFeeBalance: new BigNumber(result.newProtocolFeeBalance),
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): OSWAP_BridgeVault.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseUpdateConfigStoreEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.UpdateConfigStoreEvent[]{
        return this.parseEvents(receipt, "UpdateConfigStore").map(e=>this.decodeUpdateConfigStoreEvent(e));
    }
    decodeUpdateConfigStoreEvent(event: Event): OSWAP_BridgeVault.UpdateConfigStoreEvent{
        let result = event.data;
        return {
            newConfigStore: result.newConfigStore,
            _event: event
        };
    }
    parseUpdateTrollRegistryEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.UpdateTrollRegistryEvent[]{
        return this.parseEvents(receipt, "UpdateTrollRegistry").map(e=>this.decodeUpdateTrollRegistryEvent(e));
    }
    decodeUpdateTrollRegistryEvent(event: Event): OSWAP_BridgeVault.UpdateTrollRegistryEvent{
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    parseVoidOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.VoidOrderEvent[]{
        return this.parseEvents(receipt, "VoidOrder").map(e=>this.decodeVoidOrderEvent(e));
    }
    decodeVoidOrderEvent(event: Event): OSWAP_BridgeVault.VoidOrderEvent{
        let result = event.data;
        return {
            orderId: result.orderId,
            sender: result.sender,
            signers: result.signers.map(e=>new BigNumber(e)),
            _event: event
        };
    }
    parseWithdrawUnexecutedOrderEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.WithdrawUnexecutedOrderEvent[]{
        return this.parseEvents(receipt, "WithdrawUnexecutedOrder").map(e=>this.decodeWithdrawUnexecutedOrderEvent(e));
    }
    decodeWithdrawUnexecutedOrderEvent(event: Event): OSWAP_BridgeVault.WithdrawUnexecutedOrderEvent{
        let result = event.data;
        return {
            owner: result.owner,
            orderId: new BigNumber(result.orderId),
            newImbalance: new BigNumber(result.newImbalance),
            _event: event
        };
    }
    parseWithdrawlTrollFeeEvent(receipt: TransactionReceipt): OSWAP_BridgeVault.WithdrawlTrollFeeEvent[]{
        return this.parseEvents(receipt, "WithdrawlTrollFee").map(e=>this.decodeWithdrawlTrollFeeEvent(e));
    }
    decodeWithdrawlTrollFeeEvent(event: Event): OSWAP_BridgeVault.WithdrawlTrollFeeEvent{
        let result = event.data;
        return {
            feeTo: result.feeTo,
            amount: new BigNumber(result.amount),
            newProtocolFeeBalance: new BigNumber(result.newProtocolFeeBalance),
            _event: event
        };
    }
    addLiquidity: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    }
    asset: {
        (options?: TransactionOptions): Promise<string>;
    }
    assetDecimalsScale: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    assetPriceAgainstGovToken: {
        (params: IAssetPriceAgainstGovTokenParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    balanceOf: {
        (account:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    cancelOrder: {
        (params: ICancelOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICancelOrderParams, options?: TransactionOptions) => Promise<void>;
    }
    configStore: {
        (options?: TransactionOptions): Promise<string>;
    }
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    getChainId: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    getOrders: {
        (params: IGetOrdersParams, options?: TransactionOptions): Promise<{peerChain:BigNumber,inAmount:BigNumber,outToken:string,minOutAmount:BigNumber,to:string,expire:BigNumber}[]>;
    }
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    }
    hashCancelOrderParams: {
        (params: IHashCancelOrderParamsParams, options?: TransactionOptions): Promise<string>;
    }
    hashOrder: {
        (params: IHashOrderParams, options?: TransactionOptions): Promise<string>;
    }
    hashSwapParams: {
        (params: IHashSwapParamsParams, options?: TransactionOptions): Promise<string>;
    }
    hashVoidOrderParams: {
        (orderId:string, options?: TransactionOptions): Promise<string>;
    }
    hashWithdrawParams: {
        (params: IHashWithdrawParamsParams, options?: TransactionOptions): Promise<string>;
    }
    imbalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams, options?: TransactionOptions) => Promise<boolean>;
    }
    initAddress: {
        (vaultRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (vaultRegistry:string, options?: TransactionOptions) => Promise<void>;
    }
    lastKnownBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    lpAssetBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    name: {
        (options?: TransactionOptions): Promise<string>;
    }
    newOrder: {
        (order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}, options?: TransactionOptions) => Promise<BigNumber>;
    }
    newOrderFromRouter: {
        (params: INewOrderFromRouterParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: INewOrderFromRouterParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    orderAmendments: {
        (params: IOrderAmendmentsParams, options?: TransactionOptions): Promise<{peerChain:BigNumber,inAmount:BigNumber,outToken:string,minOutAmount:BigNumber,to:string,expire:BigNumber}>;
    }
    orderAmendmentsLength: {
        (orderId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    orderOwner: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    orderRefunds: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    orderStatus: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    orders: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{peerChain:BigNumber,inAmount:BigNumber,outToken:string,minOutAmount:BigNumber,to:string,expire:BigNumber}>;
    }
    ordersLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    pendingWithdrawalAmount: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    pendingWithdrawalTimeout: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    protocolFeeBalance: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    rebalancerDeposit: {
        (assetAmount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (assetAmount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    rebalancerWithdraw: {
        (params: IRebalancerWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRebalancerWithdrawParams, options?: TransactionOptions) => Promise<void>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<void>;
    }
    removeLiquidityRequest: {
        (lpTokenAmount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (lpTokenAmount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    requestAmendOrder: {
        (params: IRequestAmendOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRequestAmendOrderParams, options?: TransactionOptions) => Promise<void>;
    }
    requestCancelOrder: {
        (params: IRequestCancelOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRequestCancelOrderParams, options?: TransactionOptions) => Promise<void>;
    }
    swap: {
        (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    swapOrderStatus: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    }
    sync: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    totalPendingWithdrawal: {
        (options?: TransactionOptions): Promise<BigNumber>;
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
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    updateConfigStore: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    updateTrollRegistry: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    vaultRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    voidOrder: {
        (params: IVoidOrderParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IVoidOrderParams, options?: TransactionOptions) => Promise<void>;
    }
    withdrawUnexecutedOrder: {
        (orderId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (orderId:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    withdrawlTrollFee: {
        (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    private assign(){
        let allowanceParams = (params: IAllowanceParams) => [params.owner,params.spender];
        let allowance_call = async (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params),options);
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let asset_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('asset',[],options);
            return result;
        }
        this.asset = asset_call
        let assetDecimalsScale_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('assetDecimalsScale',[],options);
            return new BigNumber(result);
        }
        this.assetDecimalsScale = assetDecimalsScale_call
        let assetPriceAgainstGovTokenParams = (params: IAssetPriceAgainstGovTokenParams) => [params.govTokenOracle,params.assetTokenOracle];
        let assetPriceAgainstGovToken_call = async (params: IAssetPriceAgainstGovTokenParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('assetPriceAgainstGovToken',assetPriceAgainstGovTokenParams(params),options);
            return new BigNumber(result);
        }
        this.assetPriceAgainstGovToken = assetPriceAgainstGovToken_call
        let balanceOf_call = async (account:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[account],options);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let configStore_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('configStore',[],options);
            return result;
        }
        this.configStore = configStore_call
        let decimals_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('decimals',[],options);
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let getChainId_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getChainId',[],options);
            return new BigNumber(result);
        }
        this.getChainId = getChainId_call
        let getOrdersParams = (params: IGetOrdersParams) => [this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getOrders_call = async (params: IGetOrdersParams, options?: TransactionOptions): Promise<{peerChain:BigNumber,inAmount:BigNumber,outToken:string,minOutAmount:BigNumber,to:string,expire:BigNumber}[]> => {
            let result = await this.call('getOrders',getOrdersParams(params),options);
            return (result.map(e=>(
                {
                    peerChain: new BigNumber(e.peerChain),
                    inAmount: new BigNumber(e.inAmount),
                    outToken: e.outToken,
                    minOutAmount: new BigNumber(e.minOutAmount),
                    to: e.to,
                    expire: new BigNumber(e.expire)
                }
            )));
        }
        this.getOrders = getOrders_call
        let govToken_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('govToken',[],options);
            return result;
        }
        this.govToken = govToken_call
        let hashCancelOrderParamsParams = (params: IHashCancelOrderParamsParams) => [this.wallet.utils.toString(params.orderId),params.canceledByOrderOwner,this.wallet.utils.toString(params.protocolFee)];
        let hashCancelOrderParams_call = async (params: IHashCancelOrderParamsParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashCancelOrderParams',hashCancelOrderParamsParams(params),options);
            return result;
        }
        this.hashCancelOrderParams = hashCancelOrderParams_call
        let hashOrderParams = (params: IHashOrderParams) => [params.owner,this.wallet.utils.toString(params.sourceChainId),this.wallet.utils.toString(params.orderId)];
        let hashOrder_call = async (params: IHashOrderParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashOrder',hashOrderParams(params),options);
            return result;
        }
        this.hashOrder = hashOrder_call
        let hashSwapParamsParams = (params: IHashSwapParamsParams) => [this.wallet.utils.stringToBytes32(params.orderId),this.wallet.utils.toString(params.amendment),[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)],this.wallet.utils.toString(params.protocolFee),params.pair];
        let hashSwapParams_call = async (params: IHashSwapParamsParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashSwapParams',hashSwapParamsParams(params),options);
            return result;
        }
        this.hashSwapParams = hashSwapParams_call
        let hashVoidOrderParams_call = async (orderId:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashVoidOrderParams',[this.wallet.utils.stringToBytes32(orderId)],options);
            return result;
        }
        this.hashVoidOrderParams = hashVoidOrderParams_call
        let hashWithdrawParamsParams = (params: IHashWithdrawParamsParams) => [params.owner,this.wallet.utils.toString(params.amount),this.wallet.utils.toString(params.nonce)];
        let hashWithdrawParams_call = async (params: IHashWithdrawParamsParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('hashWithdrawParams',hashWithdrawParamsParams(params),options);
            return result;
        }
        this.hashWithdrawParams = hashWithdrawParams_call
        let imbalance_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('imbalance',[],options);
            return new BigNumber(result);
        }
        this.imbalance = imbalance_call
        let lastKnownBalance_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('lastKnownBalance',[],options);
            return new BigNumber(result);
        }
        this.lastKnownBalance = lastKnownBalance_call
        let lpAssetBalance_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('lpAssetBalance',[],options);
            return new BigNumber(result);
        }
        this.lpAssetBalance = lpAssetBalance_call
        let name_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('name',[],options);
            return result;
        }
        this.name = name_call
        let orderAmendmentsParams = (params: IOrderAmendmentsParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let orderAmendments_call = async (params: IOrderAmendmentsParams, options?: TransactionOptions): Promise<{peerChain:BigNumber,inAmount:BigNumber,outToken:string,minOutAmount:BigNumber,to:string,expire:BigNumber}> => {
            let result = await this.call('orderAmendments',orderAmendmentsParams(params),options);
            return {
                peerChain: new BigNumber(result.peerChain),
                inAmount: new BigNumber(result.inAmount),
                outToken: result.outToken,
                minOutAmount: new BigNumber(result.minOutAmount),
                to: result.to,
                expire: new BigNumber(result.expire)
            };
        }
        this.orderAmendments = orderAmendments_call
        let orderAmendmentsLength_call = async (orderId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('orderAmendmentsLength',[this.wallet.utils.toString(orderId)],options);
            return new BigNumber(result);
        }
        this.orderAmendmentsLength = orderAmendmentsLength_call
        let orderOwner_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('orderOwner',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.orderOwner = orderOwner_call
        let orderRefunds_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('orderRefunds',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.orderRefunds = orderRefunds_call
        let orderStatus_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('orderStatus',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.orderStatus = orderStatus_call
        let orders_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{peerChain:BigNumber,inAmount:BigNumber,outToken:string,minOutAmount:BigNumber,to:string,expire:BigNumber}> => {
            let result = await this.call('orders',[this.wallet.utils.toString(param1)],options);
            return {
                peerChain: new BigNumber(result.peerChain),
                inAmount: new BigNumber(result.inAmount),
                outToken: result.outToken,
                minOutAmount: new BigNumber(result.minOutAmount),
                to: result.to,
                expire: new BigNumber(result.expire)
            };
        }
        this.orders = orders_call
        let ordersLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('ordersLength',[],options);
            return new BigNumber(result);
        }
        this.ordersLength = ordersLength_call
        let pendingWithdrawalAmount_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('pendingWithdrawalAmount',[param1],options);
            return new BigNumber(result);
        }
        this.pendingWithdrawalAmount = pendingWithdrawalAmount_call
        let pendingWithdrawalTimeout_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('pendingWithdrawalTimeout',[param1],options);
            return new BigNumber(result);
        }
        this.pendingWithdrawalTimeout = pendingWithdrawalTimeout_call
        let protocolFeeBalance_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('protocolFeeBalance',[],options);
            return new BigNumber(result);
        }
        this.protocolFeeBalance = protocolFeeBalance_call
        let swapOrderStatus_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('swapOrderStatus',[this.wallet.utils.stringToBytes32(param1)],options);
            return new BigNumber(result);
        }
        this.swapOrderStatus = swapOrderStatus_call
        let symbol_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('symbol',[],options);
            return result;
        }
        this.symbol = symbol_call
        let totalPendingWithdrawal_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalPendingWithdrawal',[],options);
            return new BigNumber(result);
        }
        this.totalPendingWithdrawal = totalPendingWithdrawal_call
        let totalSupply_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalSupply',[],options);
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let trollRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('trollRegistry',[],options);
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let vaultRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('vaultRegistry',[],options);
            return result;
        }
        this.vaultRegistry = vaultRegistry_call
        let addLiquidity_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let addLiquidity_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addLiquidity',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
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
        let cancelOrderParams = (params: ICancelOrderParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.orderId),params.canceledByOrderOwner,this.wallet.utils.toString(params.protocolFee)];
        let cancelOrder_send = async (params: ICancelOrderParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('cancelOrder',cancelOrderParams(params),options);
            return result;
        }
        let cancelOrder_call = async (params: ICancelOrderParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('cancelOrder',cancelOrderParams(params),options);
            return;
        }
        this.cancelOrder = Object.assign(cancelOrder_send, {
            call:cancelOrder_call
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
        let initAddress_send = async (vaultRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('initAddress',[vaultRegistry],options);
            return result;
        }
        let initAddress_call = async (vaultRegistry:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('initAddress',[vaultRegistry],options);
            return;
        }
        this.initAddress = Object.assign(initAddress_send, {
            call:initAddress_call
        });
        let newOrder_send = async (order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newOrder',[[this.wallet.utils.toString(order.peerChain),this.wallet.utils.toString(order.inAmount),order.outToken,this.wallet.utils.toString(order.minOutAmount),order.to,this.wallet.utils.toString(order.expire)]],options);
            return result;
        }
        let newOrder_call = async (order:{peerChain:number|BigNumber,inAmount:number|BigNumber,outToken:string,minOutAmount:number|BigNumber,to:string,expire:number|BigNumber}, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('newOrder',[[this.wallet.utils.toString(order.peerChain),this.wallet.utils.toString(order.inAmount),order.outToken,this.wallet.utils.toString(order.minOutAmount),order.to,this.wallet.utils.toString(order.expire)]],options);
            return new BigNumber(result);
        }
        this.newOrder = Object.assign(newOrder_send, {
            call:newOrder_call
        });
        let newOrderFromRouterParams = (params: INewOrderFromRouterParams) => [[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)],params.trader];
        let newOrderFromRouter_send = async (params: INewOrderFromRouterParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('newOrderFromRouter',newOrderFromRouterParams(params),options);
            return result;
        }
        let newOrderFromRouter_call = async (params: INewOrderFromRouterParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('newOrderFromRouter',newOrderFromRouterParams(params),options);
            return new BigNumber(result);
        }
        this.newOrderFromRouter = Object.assign(newOrderFromRouter_send, {
            call:newOrderFromRouter_call
        });
        let rebalancerDeposit_send = async (assetAmount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('rebalancerDeposit',[this.wallet.utils.toString(assetAmount)],options);
            return result;
        }
        let rebalancerDeposit_call = async (assetAmount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('rebalancerDeposit',[this.wallet.utils.toString(assetAmount)],options);
            return;
        }
        this.rebalancerDeposit = Object.assign(rebalancerDeposit_send, {
            call:rebalancerDeposit_call
        });
        let rebalancerWithdrawParams = (params: IRebalancerWithdrawParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.toString(params.assetAmount),this.wallet.utils.toString(params.nonce)];
        let rebalancerWithdraw_send = async (params: IRebalancerWithdrawParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('rebalancerWithdraw',rebalancerWithdrawParams(params),options);
            return result;
        }
        let rebalancerWithdraw_call = async (params: IRebalancerWithdrawParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('rebalancerWithdraw',rebalancerWithdrawParams(params),options);
            return;
        }
        this.rebalancerWithdraw = Object.assign(rebalancerWithdraw_send, {
            call:rebalancerWithdraw_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.provider,this.wallet.utils.toString(params.assetAmount)];
        let removeLiquidity_send = async (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidity',removeLiquidityParams(params),options);
            return result;
        }
        let removeLiquidity_call = async (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('removeLiquidity',removeLiquidityParams(params),options);
            return;
        }
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call:removeLiquidity_call
        });
        let removeLiquidityRequest_send = async (lpTokenAmount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityRequest',[this.wallet.utils.toString(lpTokenAmount)],options);
            return result;
        }
        let removeLiquidityRequest_call = async (lpTokenAmount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('removeLiquidityRequest',[this.wallet.utils.toString(lpTokenAmount)],options);
            return;
        }
        this.removeLiquidityRequest = Object.assign(removeLiquidityRequest_send, {
            call:removeLiquidityRequest_call
        });
        let requestAmendOrderParams = (params: IRequestAmendOrderParams) => [this.wallet.utils.toString(params.orderId),[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)]];
        let requestAmendOrder_send = async (params: IRequestAmendOrderParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('requestAmendOrder',requestAmendOrderParams(params),options);
            return result;
        }
        let requestAmendOrder_call = async (params: IRequestAmendOrderParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('requestAmendOrder',requestAmendOrderParams(params),options);
            return;
        }
        this.requestAmendOrder = Object.assign(requestAmendOrder_send, {
            call:requestAmendOrder_call
        });
        let requestCancelOrderParams = (params: IRequestCancelOrderParams) => [this.wallet.utils.toString(params.sourceChainId),this.wallet.utils.toString(params.orderId)];
        let requestCancelOrder_send = async (params: IRequestCancelOrderParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('requestCancelOrder',requestCancelOrderParams(params),options);
            return result;
        }
        let requestCancelOrder_call = async (params: IRequestCancelOrderParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('requestCancelOrder',requestCancelOrderParams(params),options);
            return;
        }
        this.requestCancelOrder = Object.assign(requestCancelOrder_send, {
            call:requestCancelOrder_call
        });
        let swapParams = (params: ISwapParams) => [this.wallet.utils.stringToBytes(params.signatures),params.owner,this.wallet.utils.toString(params.orderId),this.wallet.utils.toString(params.amendment),this.wallet.utils.toString(params.protocolFee),params.pair,[this.wallet.utils.toString(params.order.peerChain),this.wallet.utils.toString(params.order.inAmount),params.order.outToken,this.wallet.utils.toString(params.order.minOutAmount),params.order.to,this.wallet.utils.toString(params.order.expire)]];
        let swap_send = async (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swap',swapParams(params),options);
            return result;
        }
        let swap_call = async (params: ISwapParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('swap',swapParams(params),options);
            return new BigNumber(result);
        }
        this.swap = Object.assign(swap_send, {
            call:swap_call
        });
        let sync_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('sync',[],options);
            return result;
        }
        let sync_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('sync',[],options);
            return;
        }
        this.sync = Object.assign(sync_send, {
            call:sync_call
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
        let updateTrollRegistry_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateTrollRegistry',[],options);
            return result;
        }
        let updateTrollRegistry_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateTrollRegistry',[],options);
            return;
        }
        this.updateTrollRegistry = Object.assign(updateTrollRegistry_send, {
            call:updateTrollRegistry_call
        });
        let voidOrderParams = (params: IVoidOrderParams) => [this.wallet.utils.stringToBytes(params.signatures),this.wallet.utils.stringToBytes32(params.orderId)];
        let voidOrder_send = async (params: IVoidOrderParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('voidOrder',voidOrderParams(params),options);
            return result;
        }
        let voidOrder_call = async (params: IVoidOrderParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('voidOrder',voidOrderParams(params),options);
            return;
        }
        this.voidOrder = Object.assign(voidOrder_send, {
            call:voidOrder_call
        });
        let withdrawUnexecutedOrder_send = async (orderId:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdrawUnexecutedOrder',[this.wallet.utils.toString(orderId)],options);
            return result;
        }
        let withdrawUnexecutedOrder_call = async (orderId:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('withdrawUnexecutedOrder',[this.wallet.utils.toString(orderId)],options);
            return;
        }
        this.withdrawUnexecutedOrder = Object.assign(withdrawUnexecutedOrder_send, {
            call:withdrawUnexecutedOrder_call
        });
        let withdrawlTrollFee_send = async (amount:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('withdrawlTrollFee',[this.wallet.utils.toString(amount)],options);
            return result;
        }
        let withdrawlTrollFee_call = async (amount:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('withdrawlTrollFee',[this.wallet.utils.toString(amount)],options);
            return;
        }
        this.withdrawlTrollFee = Object.assign(withdrawlTrollFee_send, {
            call:withdrawlTrollFee_call
        });
    }
}
export module OSWAP_BridgeVault{
    export interface AddLiquidityEvent {provider:string,amount:BigNumber,mintAmount:BigNumber,newBalance:BigNumber,newLpAssetBalance:BigNumber,_event:Event}
    export interface AmendOrderRequestEvent {orderId:BigNumber,amendment:BigNumber,order:{peerChain:BigNumber,inAmount:BigNumber,outToken:string,minOutAmount:BigNumber,to:string,expire:BigNumber},_event:Event}
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface NewOrderEvent {orderId:BigNumber,owner:string,order:{peerChain:BigNumber,inAmount:BigNumber,outToken:string,minOutAmount:BigNumber,to:string,expire:BigNumber},newImbalance:BigNumber,_event:Event}
    export interface OrderCanceledEvent {orderId:BigNumber,sender:string,signers:BigNumber[],canceledByOrderOwner:boolean,newImbalance:BigNumber,newProtocolFeeBalance:BigNumber,_event:Event}
    export interface RebalanceEvent {rebalancer:string,amount:BigNumber,newImbalance:BigNumber,_event:Event}
    export interface RemoveLiquidityEvent {provider:string,amount:BigNumber,newPendingWithdrawal:BigNumber,_event:Event}
    export interface RemoveLiquidityRequestEvent {provider:string,amount:BigNumber,burnAmount:BigNumber,newBalance:BigNumber,newLpAssetBalance:BigNumber,newPendingWithdrawal:BigNumber,_event:Event}
    export interface RequestCancelOrderEvent {owner:string,sourceChainId:BigNumber,orderId:BigNumber,hashedOrderId:string,_event:Event}
    export interface SwapEvent {orderId:BigNumber,sender:string,signers:BigNumber[],owner:string,amendment:BigNumber,order:{peerChain:BigNumber,inAmount:BigNumber,outToken:string,minOutAmount:BigNumber,to:string,expire:BigNumber},outAmount:BigNumber,newImbalance:BigNumber,newLpAssetBalance:BigNumber,newProtocolFeeBalance:BigNumber,_event:Event}
    export interface SyncEvent {excess:BigNumber,newProtocolFeeBalance:BigNumber,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
    export interface UpdateConfigStoreEvent {newConfigStore:string,_event:Event}
    export interface UpdateTrollRegistryEvent {newTrollRegistry:string,_event:Event}
    export interface VoidOrderEvent {orderId:string,sender:string,signers:BigNumber[],_event:Event}
    export interface WithdrawUnexecutedOrderEvent {owner:string,orderId:BigNumber,newImbalance:BigNumber,_event:Event}
    export interface WithdrawlTrollFeeEvent {feeTo:string,amount:BigNumber,newProtocolFeeBalance:BigNumber,_event:Event}
}