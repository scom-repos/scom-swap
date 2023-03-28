import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_VotingContract.json";
export class OSWAP_VotingContract extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params:{executor:string,id:number|BigNumber,name:string,options:string[],quorum:number|BigNumber,threshold:number|BigNumber,voteEndTime:number|BigNumber,executeDelay:number|BigNumber,executeParam:string[]}, options?: TransactionOptions): Promise<string>{
        return this.__deploy([[params.executor,this.wallet.utils.toString(params.id),this.wallet.utils.stringToBytes32(params.name),this.wallet.utils.stringToBytes32(params.options),this.wallet.utils.toString(params.quorum),this.wallet.utils.toString(params.threshold),this.wallet.utils.toString(params.voteEndTime),this.wallet.utils.toString(params.executeDelay),this.wallet.utils.stringToBytes32(params.executeParam)]], options);
    }
    accountVoteOption: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    accountVoteWeight: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    allExecuteParam: {
        (options?: TransactionOptions): Promise<string[]>;
    }
    allOptions: {
        (options?: TransactionOptions): Promise<string[]>;
    }
    allOptionsWeight: {
        (options?: TransactionOptions): Promise<BigNumber[]>;
    }
    execute: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    executeDelay: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    executeParam: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    executeParamLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    executed: {
        (options?: TransactionOptions): Promise<boolean>;
    }
    executor: {
        (options?: TransactionOptions): Promise<string>;
    }
    getParams: {
        (options?: TransactionOptions): Promise<{executor_:string,id_:BigNumber,name_:string,options_:string[],voteStartTime_:BigNumber,voteEndTime_:BigNumber,executeDelay_:BigNumber,status_:boolean[],optionsWeight_:BigNumber[],quorum_:BigNumber[],executeParam_:string[]}>;
    }
    id: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    name: {
        (options?: TransactionOptions): Promise<string>;
    }
    options: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    optionsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    optionsWeight: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    quorum: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    threshold: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    totalVoteWeight: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    totalWeight: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    trollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    updateWeight: {
        (account:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (account:string, options?: TransactionOptions) => Promise<void>;
    }
    veto: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    vetoed: {
        (options?: TransactionOptions): Promise<boolean>;
    }
    vote: {
        (option:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (option:number|BigNumber, options?: TransactionOptions) => Promise<void>;
    }
    voteEndTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    voteStartTime: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    votingManager: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let accountVoteOption_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('accountVoteOption',[param1],options);
            return new BigNumber(result);
        }
        this.accountVoteOption = accountVoteOption_call
        let accountVoteWeight_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('accountVoteWeight',[param1],options);
            return new BigNumber(result);
        }
        this.accountVoteWeight = accountVoteWeight_call
        let allExecuteParam_call = async (options?: TransactionOptions): Promise<string[]> => {
            let result = await this.call('allExecuteParam',[],options);
            return result;
        }
        this.allExecuteParam = allExecuteParam_call
        let allOptions_call = async (options?: TransactionOptions): Promise<string[]> => {
            let result = await this.call('allOptions',[],options);
            return result;
        }
        this.allOptions = allOptions_call
        let allOptionsWeight_call = async (options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('allOptionsWeight',[],options);
            return result.map(e=>new BigNumber(e));
        }
        this.allOptionsWeight = allOptionsWeight_call
        let executeDelay_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('executeDelay',[],options);
            return new BigNumber(result);
        }
        this.executeDelay = executeDelay_call
        let executeParam_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('executeParam',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.executeParam = executeParam_call
        let executeParamLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('executeParamLength',[],options);
            return new BigNumber(result);
        }
        this.executeParamLength = executeParamLength_call
        let executed_call = async (options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('executed',[],options);
            return result;
        }
        this.executed = executed_call
        let executor_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('executor',[],options);
            return result;
        }
        this.executor = executor_call
        let getParams_call = async (options?: TransactionOptions): Promise<{executor_:string,id_:BigNumber,name_:string,options_:string[],voteStartTime_:BigNumber,voteEndTime_:BigNumber,executeDelay_:BigNumber,status_:boolean[],optionsWeight_:BigNumber[],quorum_:BigNumber[],executeParam_:string[]}> => {
            let result = await this.call('getParams',[],options);
            return {
                executor_: result.executor_,
                id_: new BigNumber(result.id_),
                name_: result.name_,
                options_: result.options_,
                voteStartTime_: new BigNumber(result.voteStartTime_),
                voteEndTime_: new BigNumber(result.voteEndTime_),
                executeDelay_: new BigNumber(result.executeDelay_),
                status_: result.status_,
                optionsWeight_: result.optionsWeight_.map(e=>new BigNumber(e)),
                quorum_: result.quorum_.map(e=>new BigNumber(e)),
                executeParam_: result.executeParam_
            };
        }
        this.getParams = getParams_call
        let id_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('id',[],options);
            return new BigNumber(result);
        }
        this.id = id_call
        let name_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('name',[],options);
            return result;
        }
        this.name = name_call
        let options_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('options',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.options = options_call
        let optionsLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('optionsLength',[],options);
            return new BigNumber(result);
        }
        this.optionsLength = optionsLength_call
        let optionsWeight_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('optionsWeight',[this.wallet.utils.toString(param1)],options);
            return new BigNumber(result);
        }
        this.optionsWeight = optionsWeight_call
        let quorum_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('quorum',[],options);
            return new BigNumber(result);
        }
        this.quorum = quorum_call
        let threshold_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('threshold',[],options);
            return new BigNumber(result);
        }
        this.threshold = threshold_call
        let totalVoteWeight_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalVoteWeight',[],options);
            return new BigNumber(result);
        }
        this.totalVoteWeight = totalVoteWeight_call
        let totalWeight_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalWeight',[],options);
            return new BigNumber(result);
        }
        this.totalWeight = totalWeight_call
        let trollRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('trollRegistry',[],options);
            return result;
        }
        this.trollRegistry = trollRegistry_call
        let vetoed_call = async (options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('vetoed',[],options);
            return result;
        }
        this.vetoed = vetoed_call
        let voteEndTime_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('voteEndTime',[],options);
            return new BigNumber(result);
        }
        this.voteEndTime = voteEndTime_call
        let voteStartTime_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('voteStartTime',[],options);
            return new BigNumber(result);
        }
        this.voteStartTime = voteStartTime_call
        let votingManager_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('votingManager',[],options);
            return result;
        }
        this.votingManager = votingManager_call
        let execute_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('execute',[],options);
            return result;
        }
        let execute_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('execute',[],options);
            return;
        }
        this.execute = Object.assign(execute_send, {
            call:execute_call
        });
        let updateWeight_send = async (account:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateWeight',[account],options);
            return result;
        }
        let updateWeight_call = async (account:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateWeight',[account],options);
            return;
        }
        this.updateWeight = Object.assign(updateWeight_send, {
            call:updateWeight_call
        });
        let veto_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('veto',[],options);
            return result;
        }
        let veto_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('veto',[],options);
            return;
        }
        this.veto = Object.assign(veto_send, {
            call:veto_call
        });
        let vote_send = async (option:number|BigNumber, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('vote',[this.wallet.utils.toString(option)],options);
            return result;
        }
        let vote_call = async (option:number|BigNumber, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('vote',[this.wallet.utils.toString(option)],options);
            return;
        }
        this.vote = Object.assign(vote_send, {
            call:vote_call
        });
    }
}