import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./OSWAP_MainChainTrollRegistry.json";
export interface IDeployParams {govToken:string;superTrollNft:string[];generalTrollNft:string[]}
export interface IAddStakesGeneralTrollParams {nft:string;tokenId:number|BigNumber;amount:number|BigNumber}
export interface IAddStakesSuperTrollParams {nft:string;tokenId:number|BigNumber;amount:number|BigNumber}
export interface IAddTrollParams {troll:string;isSuperTroll:boolean;signature:string}
export interface IBackerStakingParams {backer:string;start:number|BigNumber;length:number|BigNumber}
export interface IGetTrollByNftParams {nft:string;tokenId:number|BigNumber}
export interface IGetTrollsParams {start:number|BigNumber;length:number|BigNumber}
export interface IOnERC721ReceivedParams {param1:string;param2:string;param3:number|BigNumber;param4:string}
export interface IOwnerTrollsParams {param1:string;param2:number|BigNumber}
export interface IStakeGeneralTrollParams {trollProfileIndex:number|BigNumber;nft:string;tokenId:number|BigNumber}
export interface IStakeSuperTrollParams {trollProfileIndex:number|BigNumber;nft:string;tokenId:number|BigNumber}
export interface IStakeToParams {param1:string;param2:number|BigNumber}
export interface IStakeToInvParams {param1:string;param2:number|BigNumber}
export interface IStakedByParams {param1:number|BigNumber;param2:number|BigNumber}
export interface IStakedByInvParams {param1:string;param2:number|BigNumber}
export interface IUnstakeGeneralTrollParams {nft:string;tokenId:number|BigNumber}
export interface IUnstakeSuperTrollParams {nft:string;tokenId:number|BigNumber}
export interface IUpdateNftParams {nft:string;trolltype:number|BigNumber}
export interface IUpdateTrollParams {trollProfileIndex:number|BigNumber;newTroll:string;signature:string}
export class OSWAP_MainChainTrollRegistry extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.govToken,params.superTrollNft,params.generalTrollNft], options);
    }
    parseAddTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AddTrollEvent[]{
        return this.parseEvents(receipt, "AddTroll").map(e=>this.decodeAddTrollEvent(e));
    }
    decodeAddTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.AddTrollEvent{
        let result = event.data;
        return {
            owner: result.owner,
            troll: result.troll,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            isSuperTroll: result.isSuperTroll,
            _event: event
        };
    }
    parseAuthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.AuthorizeEvent[]{
        return this.parseEvents(receipt, "Authorize").map(e=>this.decodeAuthorizeEvent(e));
    }
    decodeAuthorizeEvent(event: Event): OSWAP_MainChainTrollRegistry.AuthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseBlockNftTokenIdEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.BlockNftTokenIdEvent[]{
        return this.parseEvents(receipt, "BlockNftTokenId").map(e=>this.decodeBlockNftTokenIdEvent(e));
    }
    decodeBlockNftTokenIdEvent(event: Event): OSWAP_MainChainTrollRegistry.BlockNftTokenIdEvent{
        let result = event.data;
        return {
            nft: result.nft,
            tokenId: new BigNumber(result.tokenId),
            blocked: result.blocked,
            _event: event
        };
    }
    parseDeauthorizeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.DeauthorizeEvent[]{
        return this.parseEvents(receipt, "Deauthorize").map(e=>this.decodeDeauthorizeEvent(e));
    }
    decodeDeauthorizeEvent(event: Event): OSWAP_MainChainTrollRegistry.DeauthorizeEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseResumeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.ResumeEvent[]{
        return this.parseEvents(receipt, "Resume").map(e=>this.decodeResumeEvent(e));
    }
    decodeResumeEvent(event: Event): OSWAP_MainChainTrollRegistry.ResumeEvent{
        let result = event.data;
        return {
            _event: event
        };
    }
    parseShutdownEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.ShutdownEvent[]{
        return this.parseEvents(receipt, "Shutdown").map(e=>this.decodeShutdownEvent(e));
    }
    decodeShutdownEvent(event: Event): OSWAP_MainChainTrollRegistry.ShutdownEvent{
        let result = event.data;
        return {
            account: result.account,
            _event: event
        };
    }
    parseStakeGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StakeGeneralTrollEvent[]{
        return this.parseEvents(receipt, "StakeGeneralTroll").map(e=>this.decodeStakeGeneralTrollEvent(e));
    }
    decodeStakeGeneralTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.StakeGeneralTrollEvent{
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            nft: result.nft,
            tokenId: new BigNumber(result.tokenId),
            stakesChange: new BigNumber(result.stakesChange),
            stakesBalance: new BigNumber(result.stakesBalance),
            _event: event
        };
    }
    parseStakeSuperTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StakeSuperTrollEvent[]{
        return this.parseEvents(receipt, "StakeSuperTroll").map(e=>this.decodeStakeSuperTrollEvent(e));
    }
    decodeStakeSuperTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.StakeSuperTrollEvent{
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            nft: result.nft,
            tokenId: new BigNumber(result.tokenId),
            stakesChange: new BigNumber(result.stakesChange),
            stakesBalance: new BigNumber(result.stakesBalance),
            _event: event
        };
    }
    parseStartOwnershipTransferEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.StartOwnershipTransferEvent[]{
        return this.parseEvents(receipt, "StartOwnershipTransfer").map(e=>this.decodeStartOwnershipTransferEvent(e));
    }
    decodeStartOwnershipTransferEvent(event: Event): OSWAP_MainChainTrollRegistry.StartOwnershipTransferEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseTransferOwnershipEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.TransferOwnershipEvent[]{
        return this.parseEvents(receipt, "TransferOwnership").map(e=>this.decodeTransferOwnershipEvent(e));
    }
    decodeTransferOwnershipEvent(event: Event): OSWAP_MainChainTrollRegistry.TransferOwnershipEvent{
        let result = event.data;
        return {
            user: result.user,
            _event: event
        };
    }
    parseUnstakeGeneralTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UnstakeGeneralTrollEvent[]{
        return this.parseEvents(receipt, "UnstakeGeneralTroll").map(e=>this.decodeUnstakeGeneralTrollEvent(e));
    }
    decodeUnstakeGeneralTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.UnstakeGeneralTrollEvent{
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            nft: result.nft,
            tokenId: new BigNumber(result.tokenId),
            stakesChange: new BigNumber(result.stakesChange),
            stakesBalance: new BigNumber(result.stakesBalance),
            _event: event
        };
    }
    parseUnstakeSuperTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UnstakeSuperTrollEvent[]{
        return this.parseEvents(receipt, "UnstakeSuperTroll").map(e=>this.decodeUnstakeSuperTrollEvent(e));
    }
    decodeUnstakeSuperTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.UnstakeSuperTrollEvent{
        let result = event.data;
        return {
            backer: result.backer,
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            nft: result.nft,
            tokenId: new BigNumber(result.tokenId),
            stakesChange: new BigNumber(result.stakesChange),
            stakesBalance: new BigNumber(result.stakesBalance),
            _event: event
        };
    }
    parseUpdateNFTEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateNFTEvent[]{
        return this.parseEvents(receipt, "UpdateNFT").map(e=>this.decodeUpdateNFTEvent(e));
    }
    decodeUpdateNFTEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateNFTEvent{
        let result = event.data;
        return {
            nft: result.nft,
            trollType: new BigNumber(result.trollType),
            _event: event
        };
    }
    parseUpdateTrollEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateTrollEvent[]{
        return this.parseEvents(receipt, "UpdateTroll").map(e=>this.decodeUpdateTrollEvent(e));
    }
    decodeUpdateTrollEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateTrollEvent{
        let result = event.data;
        return {
            trollProfileIndex: new BigNumber(result.trollProfileIndex),
            oldTroll: result.oldTroll,
            newTroll: result.newTroll,
            _event: event
        };
    }
    parseUpdateVotingManagerEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpdateVotingManagerEvent[]{
        return this.parseEvents(receipt, "UpdateVotingManager").map(e=>this.decodeUpdateVotingManagerEvent(e));
    }
    decodeUpdateVotingManagerEvent(event: Event): OSWAP_MainChainTrollRegistry.UpdateVotingManagerEvent{
        let result = event.data;
        return {
            newVotingManager: result.newVotingManager,
            _event: event
        };
    }
    parseUpgradeEvent(receipt: TransactionReceipt): OSWAP_MainChainTrollRegistry.UpgradeEvent[]{
        return this.parseEvents(receipt, "Upgrade").map(e=>this.decodeUpgradeEvent(e));
    }
    decodeUpgradeEvent(event: Event): OSWAP_MainChainTrollRegistry.UpgradeEvent{
        let result = event.data;
        return {
            newTrollRegistry: result.newTrollRegistry,
            _event: event
        };
    }
    addStakesGeneralTroll: {
        (params: IAddStakesGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddStakesGeneralTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    addStakesSuperTroll: {
        (params: IAddStakesSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddStakesSuperTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    addTroll: {
        (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    backerStaking: {
        (params: IBackerStakingParams, options?: TransactionOptions): Promise<{nft:string,tokenId:BigNumber,trollProfileIndex:BigNumber,timestamp:BigNumber}[]>;
    }
    deny: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    getStakeTo: {
        (backer:string, options?: TransactionOptions): Promise<{nft:string,tokenId:BigNumber,trollProfileIndex:BigNumber,timestamp:BigNumber}[]>;
    }
    getStakedBy: {
        (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<{nft:string,tokenId:BigNumber}[]>;
    }
    getStakes: {
        (troll:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    getStakesByTrollProfile: {
        (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    getTrollByNft: {
        (params: IGetTrollByNftParams, options?: TransactionOptions): Promise<string>;
    }
    getTrollProperties: {
        (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<{troll:{owner:string,troll:string,trollType:BigNumber,nftCount:BigNumber},nfts:{nft:string,tokenId:BigNumber}[],backers:string[]}>;
    }
    getTrollPropertiesByAddress: {
        (trollAddress:string, options?: TransactionOptions): Promise<{troll:{owner:string,troll:string,trollType:BigNumber,nftCount:BigNumber},nfts:{nft:string,tokenId:BigNumber}[],backers:string[]}>;
    }
    getTrolls: {
        (params: IGetTrollsParams, options?: TransactionOptions): Promise<{owner:string,troll:string,trollType:BigNumber,nftCount:BigNumber}[]>;
    }
    govToken: {
        (options?: TransactionOptions): Promise<string>;
    }
    initAddress: {
        (votingManager:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (votingManager:string, options?: TransactionOptions) => Promise<void>;
    }
    isPermitted: {
        (param1:string, options?: TransactionOptions): Promise<boolean>;
    }
    newOwner: {
        (options?: TransactionOptions): Promise<string>;
    }
    newTrollRegistry: {
        (options?: TransactionOptions): Promise<string>;
    }
    nftType: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    onERC721Received: {
        (params: IOnERC721ReceivedParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IOnERC721ReceivedParams, options?: TransactionOptions) => Promise<string>;
    }
    owner: {
        (options?: TransactionOptions): Promise<string>;
    }
    ownerTrolls: {
        (params: IOwnerTrollsParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    ownerTrollsLength: {
        (owner:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    paused: {
        (options?: TransactionOptions): Promise<boolean>;
    }
    permit: {
        (user:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (user:string, options?: TransactionOptions) => Promise<void>;
    }
    resume: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    shutdownByAdmin: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    shutdownByVoting: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    stakeGeneralTroll: {
        (params: IStakeGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStakeGeneralTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    stakeOf: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    stakeSuperTroll: {
        (params: IStakeSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IStakeSuperTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    stakeTo: {
        (params: IStakeToParams, options?: TransactionOptions): Promise<{nft:string,tokenId:BigNumber,trollProfileIndex:BigNumber,timestamp:BigNumber}>;
    }
    stakeToInv: {
        (params: IStakeToInvParams, options?: TransactionOptions): Promise<{backer:string,index:BigNumber}>;
    }
    stakeToLength: {
        (backer:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    stakedBy: {
        (params: IStakedByParams, options?: TransactionOptions): Promise<{nft:string,tokenId:BigNumber}>;
    }
    stakedByInv: {
        (params: IStakedByInvParams, options?: TransactionOptions): Promise<{trollProfileIndex:BigNumber,index:BigNumber}>;
    }
    stakedByLength: {
        (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<BigNumber>;
    }
    takeOwnership: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    totalStake: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    transferOwnership: {
        (newOwner:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (newOwner:string, options?: TransactionOptions) => Promise<void>;
    }
    trollNft: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    trollNftInv: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    trollNftLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    trollProfileInv: {
        (param1:string, options?: TransactionOptions): Promise<BigNumber>;
    }
    trollProfiles: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<{owner:string,troll:string,trollType:BigNumber,nftCount:BigNumber}>;
    }
    trollProfilesLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    unstakeGeneralTroll: {
        (params: IUnstakeGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeGeneralTrollParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    unstakeSuperTroll: {
        (params: IUnstakeSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUnstakeSuperTrollParams, options?: TransactionOptions) => Promise<BigNumber>;
    }
    updateNft: {
        (params: IUpdateNftParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateNftParams, options?: TransactionOptions) => Promise<void>;
    }
    updateTroll: {
        (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IUpdateTrollParams, options?: TransactionOptions) => Promise<void>;
    }
    updateVotingManager: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    }
    upgrade: {
        (trollRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollRegistry:string, options?: TransactionOptions) => Promise<void>;
    }
    upgradeByAdmin: {
        (trollRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (trollRegistry:string, options?: TransactionOptions) => Promise<void>;
    }
    votingManager: {
        (options?: TransactionOptions): Promise<string>;
    }
    private assign(){
        let backerStakingParams = (params: IBackerStakingParams) => [params.backer,this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let backerStaking_call = async (params: IBackerStakingParams, options?: TransactionOptions): Promise<{nft:string,tokenId:BigNumber,trollProfileIndex:BigNumber,timestamp:BigNumber}[]> => {
            let result = await this.call('backerStaking',backerStakingParams(params),options);
            return (result.map(e=>(
                {
                    nft: e.nft,
                    tokenId: new BigNumber(e.tokenId),
                    trollProfileIndex: new BigNumber(e.trollProfileIndex),
                    timestamp: new BigNumber(e.timestamp)
                }
            )));
        }
        this.backerStaking = backerStaking_call
        let getStakeTo_call = async (backer:string, options?: TransactionOptions): Promise<{nft:string,tokenId:BigNumber,trollProfileIndex:BigNumber,timestamp:BigNumber}[]> => {
            let result = await this.call('getStakeTo',[backer],options);
            return (result.map(e=>(
                {
                    nft: e.nft,
                    tokenId: new BigNumber(e.tokenId),
                    trollProfileIndex: new BigNumber(e.trollProfileIndex),
                    timestamp: new BigNumber(e.timestamp)
                }
            )));
        }
        this.getStakeTo = getStakeTo_call
        let getStakedBy_call = async (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<{nft:string,tokenId:BigNumber}[]> => {
            let result = await this.call('getStakedBy',[this.wallet.utils.toString(trollProfileIndex)],options);
            return (result.map(e=>(
                {
                    nft: e.nft,
                    tokenId: new BigNumber(e.tokenId)
                }
            )));
        }
        this.getStakedBy = getStakedBy_call
        let getStakes_call = async (troll:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getStakes',[troll],options);
            return new BigNumber(result);
        }
        this.getStakes = getStakes_call
        let getStakesByTrollProfile_call = async (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getStakesByTrollProfile',[this.wallet.utils.toString(trollProfileIndex)],options);
            return new BigNumber(result);
        }
        this.getStakesByTrollProfile = getStakesByTrollProfile_call
        let getTrollByNftParams = (params: IGetTrollByNftParams) => [params.nft,this.wallet.utils.toString(params.tokenId)];
        let getTrollByNft_call = async (params: IGetTrollByNftParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getTrollByNft',getTrollByNftParams(params),options);
            return result;
        }
        this.getTrollByNft = getTrollByNft_call
        let getTrollProperties_call = async (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<{troll:{owner:string,troll:string,trollType:BigNumber,nftCount:BigNumber},nfts:{nft:string,tokenId:BigNumber}[],backers:string[]}> => {
            let result = await this.call('getTrollProperties',[this.wallet.utils.toString(trollProfileIndex)],options);
            return {
                troll: 
                {
                    owner: result.troll.owner,
                    troll: result.troll.troll,
                    trollType: new BigNumber(result.troll.trollType),
                    nftCount: new BigNumber(result.troll.nftCount)
                }
                ,
                nfts: result.nfts.map(e=>(
                    {
                        nft: e.nft,
                        tokenId: new BigNumber(e.tokenId)
                    }
                )),
                backers: result.backers
            };
        }
        this.getTrollProperties = getTrollProperties_call
        let getTrollPropertiesByAddress_call = async (trollAddress:string, options?: TransactionOptions): Promise<{troll:{owner:string,troll:string,trollType:BigNumber,nftCount:BigNumber},nfts:{nft:string,tokenId:BigNumber}[],backers:string[]}> => {
            let result = await this.call('getTrollPropertiesByAddress',[trollAddress],options);
            return {
                troll: 
                {
                    owner: result.troll.owner,
                    troll: result.troll.troll,
                    trollType: new BigNumber(result.troll.trollType),
                    nftCount: new BigNumber(result.troll.nftCount)
                }
                ,
                nfts: result.nfts.map(e=>(
                    {
                        nft: e.nft,
                        tokenId: new BigNumber(e.tokenId)
                    }
                )),
                backers: result.backers
            };
        }
        this.getTrollPropertiesByAddress = getTrollPropertiesByAddress_call
        let getTrollsParams = (params: IGetTrollsParams) => [this.wallet.utils.toString(params.start),this.wallet.utils.toString(params.length)];
        let getTrolls_call = async (params: IGetTrollsParams, options?: TransactionOptions): Promise<{owner:string,troll:string,trollType:BigNumber,nftCount:BigNumber}[]> => {
            let result = await this.call('getTrolls',getTrollsParams(params),options);
            return (result.map(e=>(
                {
                    owner: e.owner,
                    troll: e.troll,
                    trollType: new BigNumber(e.trollType),
                    nftCount: new BigNumber(e.nftCount)
                }
            )));
        }
        this.getTrolls = getTrolls_call
        let govToken_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('govToken',[],options);
            return result;
        }
        this.govToken = govToken_call
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
        let newTrollRegistry_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('newTrollRegistry',[],options);
            return result;
        }
        this.newTrollRegistry = newTrollRegistry_call
        let nftType_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('nftType',[param1],options);
            return new BigNumber(result);
        }
        this.nftType = nftType_call
        let owner_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('owner',[],options);
            return result;
        }
        this.owner = owner_call
        let ownerTrollsParams = (params: IOwnerTrollsParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let ownerTrolls_call = async (params: IOwnerTrollsParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('ownerTrolls',ownerTrollsParams(params),options);
            return new BigNumber(result);
        }
        this.ownerTrolls = ownerTrolls_call
        let ownerTrollsLength_call = async (owner:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('ownerTrollsLength',[owner],options);
            return new BigNumber(result);
        }
        this.ownerTrollsLength = ownerTrollsLength_call
        let paused_call = async (options?: TransactionOptions): Promise<boolean> => {
            let result = await this.call('paused',[],options);
            return result;
        }
        this.paused = paused_call
        let stakeOf_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stakeOf',[param1],options);
            return new BigNumber(result);
        }
        this.stakeOf = stakeOf_call
        let stakeToParams = (params: IStakeToParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let stakeTo_call = async (params: IStakeToParams, options?: TransactionOptions): Promise<{nft:string,tokenId:BigNumber,trollProfileIndex:BigNumber,timestamp:BigNumber}> => {
            let result = await this.call('stakeTo',stakeToParams(params),options);
            return {
                nft: result.nft,
                tokenId: new BigNumber(result.tokenId),
                trollProfileIndex: new BigNumber(result.trollProfileIndex),
                timestamp: new BigNumber(result.timestamp)
            };
        }
        this.stakeTo = stakeTo_call
        let stakeToInvParams = (params: IStakeToInvParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let stakeToInv_call = async (params: IStakeToInvParams, options?: TransactionOptions): Promise<{backer:string,index:BigNumber}> => {
            let result = await this.call('stakeToInv',stakeToInvParams(params),options);
            return {
                backer: result.backer,
                index: new BigNumber(result.index)
            };
        }
        this.stakeToInv = stakeToInv_call
        let stakeToLength_call = async (backer:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stakeToLength',[backer],options);
            return new BigNumber(result);
        }
        this.stakeToLength = stakeToLength_call
        let stakedByParams = (params: IStakedByParams) => [this.wallet.utils.toString(params.param1),this.wallet.utils.toString(params.param2)];
        let stakedBy_call = async (params: IStakedByParams, options?: TransactionOptions): Promise<{nft:string,tokenId:BigNumber}> => {
            let result = await this.call('stakedBy',stakedByParams(params),options);
            return {
                nft: result.nft,
                tokenId: new BigNumber(result.tokenId)
            };
        }
        this.stakedBy = stakedBy_call
        let stakedByInvParams = (params: IStakedByInvParams) => [params.param1,this.wallet.utils.toString(params.param2)];
        let stakedByInv_call = async (params: IStakedByInvParams, options?: TransactionOptions): Promise<{trollProfileIndex:BigNumber,index:BigNumber}> => {
            let result = await this.call('stakedByInv',stakedByInvParams(params),options);
            return {
                trollProfileIndex: new BigNumber(result.trollProfileIndex),
                index: new BigNumber(result.index)
            };
        }
        this.stakedByInv = stakedByInv_call
        let stakedByLength_call = async (trollProfileIndex:number|BigNumber, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('stakedByLength',[this.wallet.utils.toString(trollProfileIndex)],options);
            return new BigNumber(result);
        }
        this.stakedByLength = stakedByLength_call
        let totalStake_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('totalStake',[],options);
            return new BigNumber(result);
        }
        this.totalStake = totalStake_call
        let trollNft_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('trollNft',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.trollNft = trollNft_call
        let trollNftInv_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('trollNftInv',[param1],options);
            return new BigNumber(result);
        }
        this.trollNftInv = trollNftInv_call
        let trollNftLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('trollNftLength',[],options);
            return new BigNumber(result);
        }
        this.trollNftLength = trollNftLength_call
        let trollProfileInv_call = async (param1:string, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('trollProfileInv',[param1],options);
            return new BigNumber(result);
        }
        this.trollProfileInv = trollProfileInv_call
        let trollProfiles_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<{owner:string,troll:string,trollType:BigNumber,nftCount:BigNumber}> => {
            let result = await this.call('trollProfiles',[this.wallet.utils.toString(param1)],options);
            return {
                owner: result.owner,
                troll: result.troll,
                trollType: new BigNumber(result.trollType),
                nftCount: new BigNumber(result.nftCount)
            };
        }
        this.trollProfiles = trollProfiles_call
        let trollProfilesLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('trollProfilesLength',[],options);
            return new BigNumber(result);
        }
        this.trollProfilesLength = trollProfilesLength_call
        let votingManager_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('votingManager',[],options);
            return result;
        }
        this.votingManager = votingManager_call
        let addStakesGeneralTrollParams = (params: IAddStakesGeneralTrollParams) => [params.nft,this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.amount)];
        let addStakesGeneralTroll_send = async (params: IAddStakesGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addStakesGeneralTroll',addStakesGeneralTrollParams(params),options);
            return result;
        }
        let addStakesGeneralTroll_call = async (params: IAddStakesGeneralTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addStakesGeneralTroll',addStakesGeneralTrollParams(params),options);
            return;
        }
        this.addStakesGeneralTroll = Object.assign(addStakesGeneralTroll_send, {
            call:addStakesGeneralTroll_call
        });
        let addStakesSuperTrollParams = (params: IAddStakesSuperTrollParams) => [params.nft,this.wallet.utils.toString(params.tokenId),this.wallet.utils.toString(params.amount)];
        let addStakesSuperTroll_send = async (params: IAddStakesSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addStakesSuperTroll',addStakesSuperTrollParams(params),options);
            return result;
        }
        let addStakesSuperTroll_call = async (params: IAddStakesSuperTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addStakesSuperTroll',addStakesSuperTrollParams(params),options);
            return;
        }
        this.addStakesSuperTroll = Object.assign(addStakesSuperTroll_send, {
            call:addStakesSuperTroll_call
        });
        let addTrollParams = (params: IAddTrollParams) => [params.troll,params.isSuperTroll,this.wallet.utils.stringToBytes(params.signature)];
        let addTroll_send = async (params: IAddTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addTroll',addTrollParams(params),options);
            return result;
        }
        let addTroll_call = async (params: IAddTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('addTroll',addTrollParams(params),options);
            return;
        }
        this.addTroll = Object.assign(addTroll_send, {
            call:addTroll_call
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
        let initAddress_send = async (votingManager:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('initAddress',[votingManager],options);
            return result;
        }
        let initAddress_call = async (votingManager:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('initAddress',[votingManager],options);
            return;
        }
        this.initAddress = Object.assign(initAddress_send, {
            call:initAddress_call
        });
        let onERC721ReceivedParams = (params: IOnERC721ReceivedParams) => [params.param1,params.param2,this.wallet.utils.toString(params.param3),this.wallet.utils.stringToBytes(params.param4)];
        let onERC721Received_send = async (params: IOnERC721ReceivedParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('onERC721Received',onERC721ReceivedParams(params),options);
            return result;
        }
        let onERC721Received_call = async (params: IOnERC721ReceivedParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('onERC721Received',onERC721ReceivedParams(params),options);
            return result;
        }
        this.onERC721Received = Object.assign(onERC721Received_send, {
            call:onERC721Received_call
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
        let resume_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('resume',[],options);
            return result;
        }
        let resume_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('resume',[],options);
            return;
        }
        this.resume = Object.assign(resume_send, {
            call:resume_call
        });
        let shutdownByAdmin_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('shutdownByAdmin',[],options);
            return result;
        }
        let shutdownByAdmin_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('shutdownByAdmin',[],options);
            return;
        }
        this.shutdownByAdmin = Object.assign(shutdownByAdmin_send, {
            call:shutdownByAdmin_call
        });
        let shutdownByVoting_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('shutdownByVoting',[],options);
            return result;
        }
        let shutdownByVoting_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('shutdownByVoting',[],options);
            return;
        }
        this.shutdownByVoting = Object.assign(shutdownByVoting_send, {
            call:shutdownByVoting_call
        });
        let stakeGeneralTrollParams = (params: IStakeGeneralTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.nft,this.wallet.utils.toString(params.tokenId)];
        let stakeGeneralTroll_send = async (params: IStakeGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('stakeGeneralTroll',stakeGeneralTrollParams(params),options);
            return result;
        }
        let stakeGeneralTroll_call = async (params: IStakeGeneralTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('stakeGeneralTroll',stakeGeneralTrollParams(params),options);
            return;
        }
        this.stakeGeneralTroll = Object.assign(stakeGeneralTroll_send, {
            call:stakeGeneralTroll_call
        });
        let stakeSuperTrollParams = (params: IStakeSuperTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.nft,this.wallet.utils.toString(params.tokenId)];
        let stakeSuperTroll_send = async (params: IStakeSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('stakeSuperTroll',stakeSuperTrollParams(params),options);
            return result;
        }
        let stakeSuperTroll_call = async (params: IStakeSuperTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('stakeSuperTroll',stakeSuperTrollParams(params),options);
            return;
        }
        this.stakeSuperTroll = Object.assign(stakeSuperTroll_send, {
            call:stakeSuperTroll_call
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
        let unstakeGeneralTrollParams = (params: IUnstakeGeneralTrollParams) => [params.nft,this.wallet.utils.toString(params.tokenId)];
        let unstakeGeneralTroll_send = async (params: IUnstakeGeneralTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unstakeGeneralTroll',unstakeGeneralTrollParams(params),options);
            return result;
        }
        let unstakeGeneralTroll_call = async (params: IUnstakeGeneralTrollParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('unstakeGeneralTroll',unstakeGeneralTrollParams(params),options);
            return new BigNumber(result);
        }
        this.unstakeGeneralTroll = Object.assign(unstakeGeneralTroll_send, {
            call:unstakeGeneralTroll_call
        });
        let unstakeSuperTrollParams = (params: IUnstakeSuperTrollParams) => [params.nft,this.wallet.utils.toString(params.tokenId)];
        let unstakeSuperTroll_send = async (params: IUnstakeSuperTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('unstakeSuperTroll',unstakeSuperTrollParams(params),options);
            return result;
        }
        let unstakeSuperTroll_call = async (params: IUnstakeSuperTrollParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('unstakeSuperTroll',unstakeSuperTrollParams(params),options);
            return new BigNumber(result);
        }
        this.unstakeSuperTroll = Object.assign(unstakeSuperTroll_send, {
            call:unstakeSuperTroll_call
        });
        let updateNftParams = (params: IUpdateNftParams) => [params.nft,this.wallet.utils.toString(params.trolltype)];
        let updateNft_send = async (params: IUpdateNftParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateNft',updateNftParams(params),options);
            return result;
        }
        let updateNft_call = async (params: IUpdateNftParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateNft',updateNftParams(params),options);
            return;
        }
        this.updateNft = Object.assign(updateNft_send, {
            call:updateNft_call
        });
        let updateTrollParams = (params: IUpdateTrollParams) => [this.wallet.utils.toString(params.trollProfileIndex),params.newTroll,this.wallet.utils.stringToBytes(params.signature)];
        let updateTroll_send = async (params: IUpdateTrollParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateTroll',updateTrollParams(params),options);
            return result;
        }
        let updateTroll_call = async (params: IUpdateTrollParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateTroll',updateTrollParams(params),options);
            return;
        }
        this.updateTroll = Object.assign(updateTroll_send, {
            call:updateTroll_call
        });
        let updateVotingManager_send = async (options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('updateVotingManager',[],options);
            return result;
        }
        let updateVotingManager_call = async (options?: TransactionOptions): Promise<void> => {
            let result = await this.call('updateVotingManager',[],options);
            return;
        }
        this.updateVotingManager = Object.assign(updateVotingManager_send, {
            call:updateVotingManager_call
        });
        let upgrade_send = async (trollRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('upgrade',[trollRegistry],options);
            return result;
        }
        let upgrade_call = async (trollRegistry:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('upgrade',[trollRegistry],options);
            return;
        }
        this.upgrade = Object.assign(upgrade_send, {
            call:upgrade_call
        });
        let upgradeByAdmin_send = async (trollRegistry:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('upgradeByAdmin',[trollRegistry],options);
            return result;
        }
        let upgradeByAdmin_call = async (trollRegistry:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('upgradeByAdmin',[trollRegistry],options);
            return;
        }
        this.upgradeByAdmin = Object.assign(upgradeByAdmin_send, {
            call:upgradeByAdmin_call
        });
    }
}
export module OSWAP_MainChainTrollRegistry{
    export interface AddTrollEvent {owner:string,troll:string,trollProfileIndex:BigNumber,isSuperTroll:boolean,_event:Event}
    export interface AuthorizeEvent {user:string,_event:Event}
    export interface BlockNftTokenIdEvent {nft:string,tokenId:BigNumber,blocked:boolean,_event:Event}
    export interface DeauthorizeEvent {user:string,_event:Event}
    export interface ResumeEvent {_event:Event}
    export interface ShutdownEvent {account:string,_event:Event}
    export interface StakeGeneralTrollEvent {backer:string,trollProfileIndex:BigNumber,nft:string,tokenId:BigNumber,stakesChange:BigNumber,stakesBalance:BigNumber,_event:Event}
    export interface StakeSuperTrollEvent {backer:string,trollProfileIndex:BigNumber,nft:string,tokenId:BigNumber,stakesChange:BigNumber,stakesBalance:BigNumber,_event:Event}
    export interface StartOwnershipTransferEvent {user:string,_event:Event}
    export interface TransferOwnershipEvent {user:string,_event:Event}
    export interface UnstakeGeneralTrollEvent {backer:string,trollProfileIndex:BigNumber,nft:string,tokenId:BigNumber,stakesChange:BigNumber,stakesBalance:BigNumber,_event:Event}
    export interface UnstakeSuperTrollEvent {backer:string,trollProfileIndex:BigNumber,nft:string,tokenId:BigNumber,stakesChange:BigNumber,stakesBalance:BigNumber,_event:Event}
    export interface UpdateNFTEvent {nft:string,trollType:BigNumber,_event:Event}
    export interface UpdateTrollEvent {trollProfileIndex:BigNumber,oldTroll:string,newTroll:string,_event:Event}
    export interface UpdateVotingManagerEvent {newVotingManager:string,_event:Event}
    export interface UpgradeEvent {newTrollRegistry:string,_event:Event}
}