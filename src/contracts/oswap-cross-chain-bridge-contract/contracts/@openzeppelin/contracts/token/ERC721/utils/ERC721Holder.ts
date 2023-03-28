import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./ERC721Holder.json";
export interface IOnERC721ReceivedParams {param1:string;param2:string;param3:number|BigNumber;param4:string}
export class ERC721Holder extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(options?: number|BigNumber|TransactionOptions): Promise<string>{
        return this.__deploy([], options);
    }
    onERC721Received: {
        (params: IOnERC721ReceivedParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IOnERC721ReceivedParams, options?: TransactionOptions) => Promise<string>;
    }
    private assign(){
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
    }
}