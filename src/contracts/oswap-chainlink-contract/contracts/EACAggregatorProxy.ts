import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./EACAggregatorProxy.json";
export interface IDeployParams {aggregator:string;accessController:string}
export class EACAggregatorProxy extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.aggregator,params.accessController], options);
    }
    parseAnswerUpdatedEvent(receipt: TransactionReceipt): EACAggregatorProxy.AnswerUpdatedEvent[]{
        return this.parseEvents(receipt, "AnswerUpdated").map(e=>this.decodeAnswerUpdatedEvent(e));
    }
    decodeAnswerUpdatedEvent(event: Event): EACAggregatorProxy.AnswerUpdatedEvent{
        let result = event.data;
        return {
            current: new BigNumber(result.current),
            roundId: new BigNumber(result.roundId),
            updatedAt: new BigNumber(result.updatedAt),
            _event: event
        };
    }
    parseNewRoundEvent(receipt: TransactionReceipt): EACAggregatorProxy.NewRoundEvent[]{
        return this.parseEvents(receipt, "NewRound").map(e=>this.decodeNewRoundEvent(e));
    }
    decodeNewRoundEvent(event: Event): EACAggregatorProxy.NewRoundEvent{
        let result = event.data;
        return {
            roundId: new BigNumber(result.roundId),
            startedBy: result.startedBy,
            startedAt: new BigNumber(result.startedAt),
            _event: event
        };
    }
    parseOwnershipTransferRequestedEvent(receipt: TransactionReceipt): EACAggregatorProxy.OwnershipTransferRequestedEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferRequested").map(e=>this.decodeOwnershipTransferRequestedEvent(e));
    }
    decodeOwnershipTransferRequestedEvent(event: Event): EACAggregatorProxy.OwnershipTransferRequestedEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): EACAggregatorProxy.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): EACAggregatorProxy.OwnershipTransferredEvent{
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
    accessController: {
        (options?: TransactionOptions): Promise<string>;
    }
    aggregator: {
        (options?: TransactionOptions): Promise<string>;
    }
    confirmAggregator: {
        (aggregator:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (aggregator:string, options?: TransactionOptions) => Promise<void>;
    }
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    description: {
        (options?: TransactionOptions): Promise<string>;
    }
    getAnswer: {
        (roundId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    getRoundData: {
        (roundId:number|BigNumber, options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>;
    }
    getTimestamp: {
        (roundId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    latestAnswer: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    latestRound: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    latestRoundData: {
        (options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>;
    }
    latestTimestamp: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    phaseAggregators: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    phaseId: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    proposeAggregator: {
        (aggregator:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (aggregator:string, options?: TransactionOptions) => Promise<void>;
    }
    proposedAggregator: {
        (options?: TransactionOptions): Promise<string>;
    }
    proposedGetRoundData: {
        (roundId:number|BigNumber, options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>;
    }
    proposedLatestRoundData: {
        (options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}>;
    }
    setController: {
        (accessController:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (accessController:string, options?: TransactionOptions) => Promise<void>;
    }
    transferOwnership: {
        (to:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to:string, options?: TransactionOptions) => Promise<void>;
    }
    version: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    private assign(){
        let accessController_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('accessController',[],options);
            return result;
        }
        this.accessController = accessController_call
        let aggregator_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('aggregator',[],options);
            return result;
        }
        this.aggregator = aggregator_call
        let decimals_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('decimals',[],options);
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let description_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('description',[],options);
            return result;
        }
        this.description = description_call
        let getAnswer_call = async (roundId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAnswer',[this.wallet.utils.toString(roundId)],options);
            return new BigNumber(result);
        }
        this.getAnswer = getAnswer_call
        let getRoundData_call = async (roundId:number|BigNumber, options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}> => {
            let result = await this.call('getRoundData',[this.wallet.utils.toString(roundId)],options);
            return {
                roundId: new BigNumber(result.roundId),
                answer: new BigNumber(result.answer),
                startedAt: new BigNumber(result.startedAt),
                updatedAt: new BigNumber(result.updatedAt),
                answeredInRound: new BigNumber(result.answeredInRound)
            };
        }
        this.getRoundData = getRoundData_call
        let getTimestamp_call = async (roundId:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getTimestamp',[this.wallet.utils.toString(roundId)],options);
            return new BigNumber(result);
        }
        this.getTimestamp = getTimestamp_call
        let latestAnswer_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('latestAnswer',[],options);
            return new BigNumber(result);
        }
        this.latestAnswer = latestAnswer_call
        let latestRound_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('latestRound',[],options);
            return new BigNumber(result);
        }
        this.latestRound = latestRound_call
        let latestRoundData_call = async (options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}> => {
            let result = await this.call('latestRoundData',[],options);
            return {
                roundId: new BigNumber(result.roundId),
                answer: new BigNumber(result.answer),
                startedAt: new BigNumber(result.startedAt),
                updatedAt: new BigNumber(result.updatedAt),
                answeredInRound: new BigNumber(result.answeredInRound)
            };
        }
        this.latestRoundData = latestRoundData_call
        let latestTimestamp_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('latestTimestamp',[],options);
            return new BigNumber(result);
        }
        this.latestTimestamp = latestTimestamp_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let phaseAggregators_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('phaseAggregators',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.phaseAggregators = phaseAggregators_call
        let phaseId_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('phaseId',[],options);
            return new BigNumber(result);
        }
        this.phaseId = phaseId_call
        let proposedAggregator_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('proposedAggregator',[],options);
            return result;
        }
        this.proposedAggregator = proposedAggregator_call
        let proposedGetRoundData_call = async (roundId:number|BigNumber, options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}> => {
            let result = await this.call('proposedGetRoundData',[this.wallet.utils.toString(roundId)],options);
            return {
                roundId: new BigNumber(result.roundId),
                answer: new BigNumber(result.answer),
                startedAt: new BigNumber(result.startedAt),
                updatedAt: new BigNumber(result.updatedAt),
                answeredInRound: new BigNumber(result.answeredInRound)
            };
        }
        this.proposedGetRoundData = proposedGetRoundData_call
        let proposedLatestRoundData_call = async (options?: TransactionOptions): Promise<{roundId:BigNumber,answer:BigNumber,startedAt:BigNumber,updatedAt:BigNumber,answeredInRound:BigNumber}> => {
            let result = await this.call('proposedLatestRoundData',[],options);
            return {
                roundId: new BigNumber(result.roundId),
                answer: new BigNumber(result.answer),
                startedAt: new BigNumber(result.startedAt),
                updatedAt: new BigNumber(result.updatedAt),
                answeredInRound: new BigNumber(result.answeredInRound)
            };
        }
        this.proposedLatestRoundData = proposedLatestRoundData_call
        let version_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('version',[],options);
            return new BigNumber(result);
        }
        this.version = version_call
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
        let confirmAggregator_send = async (aggregator:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('confirmAggregator',[aggregator],options);
            return result;
        }
        let confirmAggregator_call = async (aggregator:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('confirmAggregator',[aggregator],options);
            return;
        }
        this.confirmAggregator = Object.assign(confirmAggregator_send, {
            call:confirmAggregator_call
        });
        let proposeAggregator_send = async (aggregator:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('proposeAggregator',[aggregator],options);
            return result;
        }
        let proposeAggregator_call = async (aggregator:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('proposeAggregator',[aggregator],options);
            return;
        }
        this.proposeAggregator = Object.assign(proposeAggregator_send, {
            call:proposeAggregator_call
        });
        let setController_send = async (accessController:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setController',[accessController],options);
            return result;
        }
        let setController_call = async (accessController:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setController',[accessController],options);
            return;
        }
        this.setController = Object.assign(setController_send, {
            call:setController_call
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
export module EACAggregatorProxy{
    export interface AnswerUpdatedEvent {current:BigNumber,roundId:BigNumber,updatedAt:BigNumber,_event:Event}
    export interface NewRoundEvent {roundId:BigNumber,startedBy:string,startedAt:BigNumber,_event:Event}
    export interface OwnershipTransferRequestedEvent {from:string,to:string,_event:Event}
    export interface OwnershipTransferredEvent {from:string,to:string,_event:Event}
}