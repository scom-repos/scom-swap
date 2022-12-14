define("@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "_logic", "type": "address" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "stateMutability": "payable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "AdminChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "beacon", "type": "address" }], "name": "BeaconUpgraded", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "implementation", "type": "address" }], "name": "Upgraded", "type": "event" },
            { "stateMutability": "payable", "type": "fallback" },
            { "stateMutability": "payable", "type": "receive" }
        ],
        "bytecode": "60806040526040516107bb3803806107bb833981016040819052610022916102dc565b61002e82826000610035565b505061043b565b61003e8361006b565b60008251118061004b5750805b156100665761006483836100ab60201b6100291760201c565b505b505050565b610074816100d7565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606100d08383604051806060016040528060278152602001610794602791396101a9565b9392505050565b6100ea8161022260201b6100551760201c565b6101515760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101887f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b61023160201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060600080856001600160a01b0316856040516101c691906103aa565b600060405180830381855af49150503d8060008114610201576040519150601f19603f3d011682016040523d82523d6000602084013e610206565b606091505b50909250905061021886838387610234565b9695505050505050565b6001600160a01b03163b151590565b90565b606083156102a0578251610299576001600160a01b0385163b6102995760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610148565b50816102aa565b6102aa83836102b2565b949350505050565b8151156102c25781518083602001fd5b8060405162461bcd60e51b815260040161014891906103c6565b600080604083850312156102ef57600080fd5b82516001600160a01b038116811461030657600080fd5b60208401519092506001600160401b038082111561032357600080fd5b818501915085601f83011261033757600080fd5b81518181111561034957610349610425565b604051601f8201601f19908116603f0116810190838211818310171561037157610371610425565b8160405282815288602084870101111561038a57600080fd5b61039b8360208301602088016103f9565b80955050505050509250929050565b600082516103bc8184602087016103f9565b9190910192915050565b60208152600082518060208401526103e58160408501602087016103f9565b601f01601f19169190910160400192915050565b60005b838110156104145781810151838201526020016103fc565b838111156100645750506000910152565b634e487b7160e01b600052604160045260246000fd5b61034a8061044a6000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b6100b9565b565b606061004e83836040518060600160405280602781526020016102ee602791396100dd565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b905090565b3660008037600080366000845af43d6000803e8080156100d8573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516101079190610250565b600060405180830381855af49150503d8060008114610142576040519150601f19603f3d011682016040523d82523d6000602084013e610147565b606091505b509150915061015886838387610162565b9695505050505050565b606083156101fa5782516101f35773ffffffffffffffffffffffffffffffffffffffff85163b6101f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b5081610204565b610204838361020c565b949350505050565b81511561021c5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ea919061026c565b600082516102628184602087016102bd565b9190910192915050565b602081526000825180602084015261028b8160408501602087016102bd565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60005b838110156102d85781810151838201526020016102c0565b838111156102e7576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212205aefd5398e65f59e6b0034d60bbcf9825f1db46a257866a15b3e0f22b52eb7b864736f6c63430008060033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.json.ts"], function (require, exports, eth_contract_1, ERC1967Proxy_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERC1967Proxy = void 0;
    class ERC1967Proxy extends eth_contract_1.Contract {
        constructor(wallet, address) {
            super(wallet, address, ERC1967Proxy_json_1.default.abi, ERC1967Proxy_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, _value) {
            return this.__deploy([params.logic, this.wallet.utils.stringToBytes(params.data)], { value: _value });
        }
        parseAdminChangedEvent(receipt) {
            return this.parseEvents(receipt, "AdminChanged").map(e => this.decodeAdminChangedEvent(e));
        }
        decodeAdminChangedEvent(event) {
            let result = event.data;
            return {
                previousAdmin: result.previousAdmin,
                newAdmin: result.newAdmin,
                _event: event
            };
        }
        parseBeaconUpgradedEvent(receipt) {
            return this.parseEvents(receipt, "BeaconUpgraded").map(e => this.decodeBeaconUpgradedEvent(e));
        }
        decodeBeaconUpgradedEvent(event) {
            let result = event.data;
            return {
                beacon: result.beacon,
                _event: event
            };
        }
        parseUpgradedEvent(receipt) {
            return this.parseEvents(receipt, "Upgraded").map(e => this.decodeUpgradedEvent(e));
        }
        decodeUpgradedEvent(event) {
            let result = event.data;
            return {
                implementation: result.implementation,
                _event: event
            };
        }
        assign() {
        }
    }
    exports.ERC1967Proxy = ERC1967Proxy;
});
define("@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162000db838038062000db88339810160408190526200003491620001c5565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b50505062000282565b82805462000076906200022f565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200012057600080fd5b81516001600160401b03808211156200013d576200013d6200026c565b604051601f8301601f19908116603f011681019082821181831017156200016857620001686200026c565b816040528381526020925086838588010111156200018557600080fd5b600091505b83821015620001a957858201830151818301840152908201906200018a565b83821115620001bb5760008385830101525b9695505050505050565b60008060408385031215620001d957600080fd5b82516001600160401b0380821115620001f157600080fd5b620001ff868387016200010e565b935060208501519150808211156200021657600080fd5b5062000225858286016200010e565b9150509250929050565b600181811c908216806200024457607f821691505b602082108114156200026657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b610b2680620002926000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610194578063a9059cbb146101a7578063dd62ed3e146101ba57600080fd5b8063395093511461014357806370a082311461015657806395d89b411461018c57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610121578063313ce5671461013457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d6610200565b6040516100e391906109ea565b60405180910390f35b6100ff6100fa3660046109c0565b610292565b60405190151581526020016100e3565b6002545b6040519081526020016100e3565b6100ff61012f366004610984565b6102aa565b604051601281526020016100e3565b6100ff6101513660046109c0565b6102ce565b61011361016436600461092f565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100d661031a565b6100ff6101a23660046109c0565b610329565b6100ff6101b53660046109c0565b6103ff565b6101136101c8366004610951565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020f90610a9c565b80601f016020809104026020016040519081016040528092919081815260200182805461023b90610a9c565b80156102885780601f1061025d57610100808354040283529160200191610288565b820191906000526020600020905b81548152906001019060200180831161026b57829003601f168201915b5050505050905090565b6000336102a081858561040d565b5060019392505050565b6000336102b88582856105c0565b6102c3858585610697565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906102a09082908690610315908790610a5d565b61040d565b60606004805461020f90610a9c565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156103f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6102c3828686840361040d565b6000336102a0818585610697565b73ffffffffffffffffffffffffffffffffffffffff83166104af576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff8216610552576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106915781811015610684576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103e9565b610691848484840361040d565b50505050565b73ffffffffffffffffffffffffffffffffffffffff831661073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff82166107dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610893576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103e9565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3610691565b803573ffffffffffffffffffffffffffffffffffffffff8116811461092a57600080fd5b919050565b60006020828403121561094157600080fd5b61094a82610906565b9392505050565b6000806040838503121561096457600080fd5b61096d83610906565b915061097b60208401610906565b90509250929050565b60008060006060848603121561099957600080fd5b6109a284610906565b92506109b060208501610906565b9150604084013590509250925092565b600080604083850312156109d357600080fd5b6109dc83610906565b946020939093013593505050565b600060208083528351808285015260005b81811015610a17578581018301518582016040015282016109fb565b81811115610a29576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115610a97577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b600181811c90821680610ab057607f821691505b60208210811415610aea577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220dd24410ffb20e182a3875304e577309739b8f4ed1d015688a7da4be203d2d89564736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.json.ts"], function (require, exports, eth_contract_2, ERC20_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERC20 = void 0;
    class ERC20 extends eth_contract_2.Contract {
        constructor(wallet, address) {
            super(wallet, address, ERC20_json_1.default.abi, ERC20_json_1.default.bytecode);
            this.assign();
        }
        deploy(params) {
            return this.__deploy([params.name, params.symbol]);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_2.BigNumber(result.value),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_2.BigNumber(result.value),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params) => {
                let result = await this.call('allowance', allowanceParams(params));
                return new eth_contract_2.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account) => {
                let result = await this.call('balanceOf', [account]);
                return new eth_contract_2.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let decimals_call = async () => {
                let result = await this.call('decimals');
                return new eth_contract_2.BigNumber(result);
            };
            this.decimals = decimals_call;
            let name_call = async () => {
                let result = await this.call('name');
                return result;
            };
            this.name = name_call;
            let symbol_call = async () => {
                let result = await this.call('symbol');
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async () => {
                let result = await this.call('totalSupply');
                return new eth_contract_2.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params) => {
                let result = await this.send('approve', approveParams(params));
                return result;
            };
            let approve_call = async (params) => {
                let result = await this.call('approve', approveParams(params));
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params));
                return result;
            };
            let decreaseAllowance_call = async (params) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params));
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params));
                return result;
            };
            let increaseAllowance_call = async (params) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params));
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let transferParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params) => {
                let result = await this.send('transfer', transferParams(params));
                return result;
            };
            let transfer_call = async (params) => {
                let result = await this.call('transfer', transferParams(params));
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params) => {
                let result = await this.send('transferFrom', transferFromParams(params));
                return result;
            };
            let transferFrom_call = async (params) => {
                let result = await this.call('transferFrom', transferFromParams(params));
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
        }
    }
    exports.ERC20 = ERC20;
});
define("@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b50610224806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61006761003e3660046100c5565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff811681146100c057600080fd5b919050565b600080600080608085870312156100db57600080fd5b6100e48561009c565b93506100f26020860161009c565b925060408501359150606085013567ffffffffffffffff8082111561011657600080fd5b818701915087601f83011261012a57600080fd5b81358181111561013c5761013c6101bf565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715610182576101826101bf565b816040528281528a602084870101111561019b57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212206f76cd758484a4121f2d9717996249407297838070017483f07a0f360b11f8ee64736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.json.ts"], function (require, exports, eth_contract_3, ERC721Holder_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ERC721Holder = void 0;
    class ERC721Holder extends eth_contract_3.Contract {
        constructor(wallet, address) {
            super(wallet, address, ERC721Holder_json_1.default.abi, ERC721Holder_json_1.default.bytecode);
            this.assign();
        }
        deploy() {
            return this.__deploy();
        }
        assign() {
            let onERC721ReceivedParams = (params) => [params.param1, params.param2, this.wallet.utils.toString(params.param3), this.wallet.utils.stringToBytes(params.param4)];
            let onERC721Received_send = async (params) => {
                let result = await this.send('onERC721Received', onERC721ReceivedParams(params));
                return result;
            };
            let onERC721Received_call = async (params) => {
                let result = await this.call('onERC721Received', onERC721ReceivedParams(params));
                return result;
            };
            this.onERC721Received = Object.assign(onERC721Received_send, {
                call: onERC721Received_call
            });
        }
    }
    exports.ERC721Holder = ERC721Holder;
});
define("@openswap/cross-chain-bridge-sdk/contracts/Authorization.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/Authorization.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916331790556104e4806100326000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639c52a7f11161005b5780639c52a7f114610109578063a2f55ae51461011c578063d4ee1d901461012f578063f2fde38b1461014f57600080fd5b80633fd8cc4e1461008257806360536172146100ba5780638da5cb5b146100c4575b600080fd5b6100a5610090366004610471565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100c2610162565b005b6000546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100b1565b6100c2610117366004610471565b610290565b6100c261012a366004610471565b610337565b6001546100e49073ffffffffffffffffffffffffffffffffffffffff1681565b6100c261015d366004610471565b6103da565b60015473ffffffffffffffffffffffffffffffffffffffff16331461020d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e0000000000000000000000000000000000000000000000606482015260840160405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b457600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461035b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161032c565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103fe57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161032c565b60006020828403121561048357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146104a757600080fd5b939250505056fea2646970667358221220995ef8031770c07c0e2a8ad74f75604cff84325f4963b0dd8b9f87b9e539c49a64736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/Authorization.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/Authorization.json.ts"], function (require, exports, eth_contract_4, Authorization_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Authorization = void 0;
    class Authorization extends eth_contract_4.Contract {
        constructor(wallet, address) {
            super(wallet, address, Authorization_json_1.default.abi, Authorization_json_1.default.bytecode);
            this.assign();
        }
        deploy() {
            return this.__deploy();
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        assign() {
            let isPermitted_call = async (param1) => {
                let result = await this.call('isPermitted', [param1]);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let newOwner_call = async () => {
                let result = await this.call('newOwner');
                return result;
            };
            this.newOwner = newOwner_call;
            let owner_call = async () => {
                let result = await this.call('owner');
                return result;
            };
            this.owner = owner_call;
            let deny_send = async (user) => {
                let result = await this.send('deny', [user]);
                return result;
            };
            let deny_call = async (user) => {
                let result = await this.call('deny', [user]);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let permit_send = async (user) => {
                let result = await this.send('permit', [user]);
                return result;
            };
            let permit_call = async (user) => {
                let result = await this.call('permit', [user]);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let takeOwnership_send = async () => {
                let result = await this.send('takeOwnership');
                return result;
            };
            let takeOwnership_call = async () => {
                let result = await this.call('takeOwnership');
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner) => {
                let result = await this.send('transferOwnership', [newOwner]);
                return result;
            };
            let transferOwnership_call = async (newOwner) => {
                let result = await this.call('transferOwnership', [newOwner]);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
        }
    }
    exports.Authorization = Authorization;
});
define("@openswap/cross-chain-bridge-sdk/contracts/MOCK_TrollRegistry.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/MOCK_TrollRegistry.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IERC20", "name": "_govToken", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "troll", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "isSuperTroll", "type": "bool" }], "name": "AddTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "DelistTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "lockedBy", "type": "address" }], "name": "LockGeneralTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "lockedBy", "type": "address" }], "name": "LockSuperTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "value", "type": "bytes32" }], "name": "ParamSet", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "value1", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "value2", "type": "bytes32" }], "name": "ParamSet2", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "RemoveTroll", "type": "event" },
            { "anonymous": false, "inputs": [], "name": "Resume", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newVotingExecutor", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "isActive", "type": "bool" }], "name": "SetVotingExecutor", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }], "name": "Shutdown", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "UnlockGeneralTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "unlock", "type": "bool" }, { "indexed": false, "internalType": "address", "name": "bridgeVault", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "penalty", "type": "uint256" }], "name": "UnlockSuperTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract OSWAP_ConfigStore", "name": "newConfigStore", "type": "address" }], "name": "UpdateConfigStore", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "oldTroll", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newTroll", "type": "address" }], "name": "UpdateTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newTrollRegistry", "type": "address" }], "name": "Upgrade", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract OSWAP_VotingManager", "name": "newVotingManager", "type": "address" }], "name": "UpgradeVotingManager", "type": "event" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "bool", "name": "_isSuperTroll", "type": "bool" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "addTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "configStore", "outputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "generalTrollCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "govToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "_configStore", "type": "address" }], "name": "initAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "bool", "name": "returnFalseIfBlocked", "type": "bool" }], "name": "isGeneralTroll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "bool", "name": "returnFalseIfBlocked", "type": "bool" }], "name": "isGeneralTrollByIndex", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "bool", "name": "returnFalseIfBlocked", "type": "bool" }], "name": "isSuperTroll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "bool", "name": "returnFalseIfBlocked", "type": "bool" }], "name": "isSuperTrollByIndex", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isVotingExecutor", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "lockGeneralTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "lockSuperTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newTrollRegistry", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newVotingManager", "outputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "removeTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "resume", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_votingExecutor", "type": "address" }, { "internalType": "bool", "name": "_bool", "type": "bool" }], "name": "setVotingExecutor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "shutdownByAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "shutdownByVoting", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "superTrollCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "trollProfileInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "trollProfiles", "outputs": [{ "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "enum MOCK_TrollRegistry.TrollType", "name": "trollType", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "trollRegistry", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "unlockGeneralTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "bool", "name": "unlock", "type": "bool" }, { "internalType": "address[]", "name": "vaultRegistry", "type": "address[]" }, { "internalType": "uint256[]", "name": "penalty", "type": "uint256[]" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "unlockSuperTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "updateConfigStore", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "address", "name": "newTroll", "type": "address" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "updateTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_trollRegistry", "type": "address" }], "name": "upgradeTrollRegistry", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_trollRegistry", "type": "address" }], "name": "upgradeTrollRegistryByAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "_votingManager", "type": "address" }], "name": "upgradeVotingManager", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "_votingManager", "type": "address" }], "name": "upgradeVotingManagerByAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "usedNonce", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "votingExecutor", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "votingExecutorInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "votingExecutorLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60c06040523060601b60a0523480156200001857600080fd5b5060405162002b2638038062002b268339810160408190526200003b91620002b5565b600080546001600160a01b0319163390811782556001600160601b0319606084901b1660805280825260026020526040909120805460ff191660019081179091556200008891906200008f565b50620002fd565b6001600160a01b038216620000eb5760405162461bcd60e51b815260206004820152601760248201527f4f535741503a20496e76616c6964206578656375746f7200000000000000000060448201526064015b60405180910390fd5b600a5415806200013f57506001600160a01b0382166000818152600b6020526040902054600a80549091908110620001275762000127620002e7565b6000918252602090912001546001600160a01b031614155b15620001a757600a80546001600160a01b0384166000818152600b60205260408120839055600183018455929092527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180546001600160a01b031916909117905562000218565b6001600160a01b0382166000908152600b6020526040902054620002185760405162461bcd60e51b815260206004820152602160248201527f4f535741503a2063616e6e6f74207265736574206d61696e206578656375746f6044820152603960f91b6064820152608401620000e2565b6001600160a01b0382166000908152600c60205260409020805460ff19168215151790557f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb706606083901b6001600160601b031916826200027a5760006200027d565b60015b604080516d3b37ba34b733a2bc32b1baba37b960911b8152602081019390935260ff9091169082015260600160405180910390a15050565b600060208284031215620002c857600080fd5b81516001600160a01b0381168114620002e057600080fd5b9392505050565b634e487b7160e01b600052603260045260246000fd5b60805160601c60a05160601c6127fd6200032960003960006103960152600061032401526127fd6000f3fe608060405234801561001057600080fd5b50600436106102e85760003560e01c80638da5cb5b11610191578063bba588ca116100e3578063d81fa48711610097578063f2fde38b11610071578063f2fde38b146106a4578063f6f04d7f146106b7578063f7b1bf7e146106d757600080fd5b8063d81fa48714610473578063e19888df14610630578063ef9414fc1461064357600080fd5b8063c10ebe4b116100c8578063c10ebe4b146105ea578063c20ecd1f146105fd578063d4ee1d901461061057600080fd5b8063bba588ca146105b7578063bc69b032146105d757600080fd5b80639723fb6d11610145578063a2f55ae51161011f578063a2f55ae514610579578063a3818b3b1461058c578063b8624127146105af57600080fd5b80639723fb6d1461051e5780639c52a7f1146105415780639d69dc4e1461055457600080fd5b8063919270501161017657806391927050146104ef5780639527afb41461050257806396e9c5601461050b57600080fd5b80638da5cb5b146104bc5780638f409ae9146104dc57600080fd5b80635a8124651161024a57806364efe63f116101fe57806378a1a9fa116101d857806378a1a9fa1461049957806382ad7119146104a1578063842c4835146104b457600080fd5b806364efe63f1461037e57806372ecb9d014610473578063788ddbcb1461048657600080fd5b8063605361721161022f578063605361721461045057806364305328146104585780636468fca11461046b57600080fd5b80635a812465146104325780635c975abb1461044557600080fd5b806330167bec116102a15780633fd8cc4e116102865780633fd8cc4e146103e6578063414016d814610409578063568621751461041257600080fd5b806330167bec146103915780633820a526146103b857600080fd5b806305268cff116102d257806305268cff1461031f57806309a34aa41461036b578063290b7e781461037e57600080fd5b80622e6074146102ed578063046f7da214610315575b600080fd5b6103006102fb366004612626565b6106ea565b60405190151581526020015b60405180910390f35b61031d610784565b005b6103467f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161030c565b6103006103793660046123cc565b61086c565b61031d61038c3660046123af565b6108a4565b6103467f000000000000000000000000000000000000000000000000000000000000000081565b6103d86103c63660046123af565b60056020526000908152604090205481565b60405190815260200161030c565b6103006103f43660046123af565b60026020526000908152604090205460ff1681565b6103d860065481565b600d546103469073ffffffffffffffffffffffffffffffffffffffff1681565b61031d6104403660046123af565b6108d4565b60035460ff16610300565b61031d610a46565b61031d61046636600461260d565b610b70565b61031d610d17565b61031d6104813660046123af565b610e7b565b61031d6104943660046123cc565b610ea8565b600a546103d8565b6103006104af3660046123cc565b610eda565b61031d610f0a565b6000546103469073ffffffffffffffffffffffffffffffffffffffff1681565b61031d6104ea36600461259f565b6110af565b6103466104fd36600461260d565b6112b4565b6103d860075481565b61031d610519366004612401565b6112eb565b61030061052c36600461260d565b60086020526000908152604090205460ff1681565b61031d61054f3660046123af565b6115ec565b60035461034690610100900473ffffffffffffffffffffffffffffffffffffffff1681565b61031d6105873660046123af565b61168c565b61030061059a3660046123af565b600c6020526000908152604090205460ff1681565b61031d61172f565b6009546103469073ffffffffffffffffffffffffffffffffffffffff1681565b6103006105e5366004612626565b611753565b61031d6105f836600461259f565b6117a2565b61031d61060b366004612479565b6118dc565b6001546103469073ffffffffffffffffffffffffffffffffffffffff1681565b61031d61063e3660046124e0565b611a28565b61069661065136600461260d565b60046020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900460ff1682565b60405161030c929190612649565b61031d6106b23660046123af565b611d21565b6103d86106c53660046123af565b600b6020526000908152604090205481565b61031d6106e536600461260d565b611db8565b6000600160008481526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561072b5761072b612747565b148061077d575060035b60008481526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561077257610772612747565b14801561077d575081155b9392505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107a857600080fd5b60035460ff16610819576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e4f54205041555345442100000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556040517f490d6d11e278f168be9be39e46297f72ea877136d5bccad9cf4993e63a29568f90600090a1565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604081205461089c8184611753565b949350505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108c857600080fd5b6108d181611f57565b50565b60005473ffffffffffffffffffffffffffffffffffffffff1633146108f857600080fd5b73ffffffffffffffffffffffffffffffffffffffff8116610975576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e756c6c206164647265737300000000000000000000000000000000000000006044820152606401610810565b600354610100900473ffffffffffffffffffffffffffffffffffffffff16156109fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f616c7265616479207365740000000000000000000000000000000000000000006044820152606401610810565b6003805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610aed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610810565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60008181526004602052604090206002815474010000000000000000000000000000000000000000900460ff166004811115610bae57610bae612747565b14610c15576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f7420612067656e6572616c2074726f6c6c000000000000000000000000006044820152606401610810565b610c20336000610eda565b80610c3a57503360009081526002602052604090205460ff165b610ca0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742066726f6d2073757065722074726f6c6c0000000000000000000000006044820152606401610810565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167404000000000000000000000000000000000000000017815560405133815282907f7f685450453775986a82112c4cad63fd255a97ece09a2fca2bbca02c420fb748906020015b60405180910390a25050565b3360009081526002602052604090205460ff16610db6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610810565b60035460ff1615610e23576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610810565b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560405133907f28b4c24cb1012c094cd2f59f98e89d791973295f8fda6eaa118022d6d318960a90600090a2565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e9f57600080fd5b6108d181611fca565b60005473ffffffffffffffffffffffffffffffffffffffff163314610ecc57600080fd5b610ed6828261203d565b5050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604081205461089c81846106ea565b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ef0609516040518163ffffffff1660e01b815260040160206040518083038186803b158015610f7457600080fd5b505afa158015610f88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fac91906125f0565b905073ffffffffffffffffffffffffffffffffffffffff811661102b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f72650000000000000000000000006044820152606401610810565b600380547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff8481168202929092179283905560405192041681527f6fa6ee9ec7808d2a9699505042862d79597c4068938b960a4a18d584a2aa3eea906020015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146110d357600080fd5b600082815260046020526040812090815474010000000000000000000000000000000000000000900460ff16600481111561111057611110612747565b1415611178576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420612076616c69642074726f6c6c0000000000000000000000000000006044820152606401610810565b60405183907f3146e37097e6cad53dc6803fe565afb42bd0fa6d1c8f2770885428ba293f672290600090a2805473ffffffffffffffffffffffffffffffffffffffff16600090815260056020908152604080832083905585835260049182905290912080547fffffffffffffffffffffff00000000000000000000000000000000000000000016908190556001917401000000000000000000000000000000000000000090910460ff169081111561123257611232612747565b14156112525760068054906000611248836126aa565b91905055506112ad565b600160008481526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561129157611291612747565b14156112ad57600780549060006112a7836126aa565b91905055505b5050505050565b600a81815481106112c457600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60005473ffffffffffffffffffffffffffffffffffffffff16331461130f57600080fd5b600084815260046020819052604082205474010000000000000000000000000000000000000000900460ff169081111561134b5761134b612747565b146113b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f616c7265616479206164646564000000000000000000000000000000000000006044820152606401610810565b60405180604001604052808473ffffffffffffffffffffffffffffffffffffffff168152602001836113e55760026113e8565b60015b60048111156113f9576113f9612747565b90526000858152600460208181526040909220835181547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff9092169182178355938501519193919284927fffffffffffffffffffffff0000000000000000000000000000000000000000001690911790740100000000000000000000000000000000000000009084908111156114a8576114a8612747565b0217905550505073ffffffffffffffffffffffffffffffffffffffff83166000908152600560205260409020849055600160008581526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561151657611516612747565b1415611536576006805490600061152c836126df565b9190505550611591565b600160008581526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561157557611575612747565b1415611591576007805490600061158b836126df565b91905055505b838373ffffffffffffffffffffffffffffffffffffffff167f8c9d891ac7160986ec470eacfe13fdd4e04741d07abc6e880cd9cdb4d1e019cb846040516115dc911515815260200190565b60405180910390a3505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461161057600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491016110a4565b60005473ffffffffffffffffffffffffffffffffffffffff1633146116b057600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016110a4565b60005473ffffffffffffffffffffffffffffffffffffffff163314610db657600080fd5b6000600260008481526004602081905260409091205474010000000000000000000000000000000000000000900460ff169081111561179457611794612747565b148061077d57506004610735565b60005473ffffffffffffffffffffffffffffffffffffffff1633146117c657600080fd5b600082815260046020819052604090912090815474010000000000000000000000000000000000000000900460ff16600481111561180657611806612747565b1461186d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420696e206c6f636b6564207374617475730000000000000000000000006044820152606401610810565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167402000000000000000000000000000000000000000017815560405183907f5190d96f5b35d80be130fe8fdbbe793dcb5b7df2507981d58b0787851c64186c90600090a25050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461190057600080fd5b60008381526004602052604090205473ffffffffffffffffffffffffffffffffffffffff168061198c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f7420657869737473000000000000000000000000000000000000000000006044820152606401610810565b73ffffffffffffffffffffffffffffffffffffffff81811660008181526005602081815260408084208490558984526004825280842080547fffffffffffffffffffffffff000000000000000000000000000000000000000016968a1696871790558584529190528082208890555187917fa809954178f86ac2228f0b080243af1f1e8fa8931fde712147cc69b266967cc191a4505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611a4c57600080fd5b60008781526004602052604090206003815474010000000000000000000000000000000000000000900460ff166004811115611a8a57611a8a612747565b14611af1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420696e206c6f636b6564207374617475730000000000000000000000006044820152606401610810565b84838114611b5b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6c656e677468206e6f74206d61746368000000000000000000000000000000006044820152606401610810565b8715611b9f5781547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001782555b60005b81811015611d1357878782818110611bbc57611bbc612776565b9050602002016020810190611bd191906123af565b73ffffffffffffffffffffffffffffffffffffffff1663b5155a1b8b888885818110611bff57611bff612776565b905060200201356040518363ffffffff1660e01b8152600401611c2c929190918252602082015260400190565b600060405180830381600087803b158015611c4657600080fd5b505af1158015611c5a573d6000803e3d6000fd5b50505050897fdc296d8aadc3ba5ba13b757df60241d09dc546e017a11ca07f0b71fccc55d66f8a8a8a85818110611c9357611c93612776565b9050602002016020810190611ca891906123af565b898986818110611cba57611cba612776565b90506020020135604051611cf993929190921515835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b60405180910390a280611d0b816126df565b915050611ba2565b505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611d4557600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016110a4565b60008181526004602052604090206001815474010000000000000000000000000000000000000000900460ff166004811115611df657611df6612747565b14611e5d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420612073757065722074726f6c6c0000000000000000000000000000006044820152606401610810565b611e68336000610eda565b80611e8257503360009081526002602052604090205460ff165b611ee8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742066726f6d2073757065722074726f6c6c0000000000000000000000006044820152606401610810565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167403000000000000000000000000000000000000000017815560405133815282907fbb4243cf85be5a0fe6bee455e2c678ca74c8796416a6880ba7f98963ad83848990602001610d0b565b600d80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f951c9bd637098cf919144d7f3755ae837b05fd4ccf465318c9e4298f8e3718c5906020016110a4565b600980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d906020016110a4565b73ffffffffffffffffffffffffffffffffffffffff82166120ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4f535741503a20496e76616c6964206578656375746f720000000000000000006044820152606401610810565b600a541580612124575073ffffffffffffffffffffffffffffffffffffffff82166000818152600b6020526040902054600a805490919081106120ff576120ff612776565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b156121af57600a805473ffffffffffffffffffffffffffffffffffffffff84166000818152600b60205260408120839055600183018455929092527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055612261565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600b6020526040902054612261576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4f535741503a2063616e6e6f74207265736574206d61696e206578656375746f60448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610810565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600c6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168215151790557f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb706606083901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001682612304576000612307565b60015b604080517f766f74696e674578656375746f720000000000000000000000000000000000008152602081019390935260ff9091169082015260600160405180910390a15050565b60008083601f84011261236057600080fd5b50813567ffffffffffffffff81111561237857600080fd5b6020830191508360208260051b850101111561239357600080fd5b9250929050565b803580151581146123aa57600080fd5b919050565b6000602082840312156123c157600080fd5b813561077d816127a5565b600080604083850312156123df57600080fd5b82356123ea816127a5565b91506123f86020840161239a565b90509250929050565b60008060008060008060a0878903121561241a57600080fd5b863567ffffffffffffffff81111561243157600080fd5b61243d89828a0161234e565b909750955050602087013593506040870135612458816127a5565b92506124666060880161239a565b9150608087013590509295509295509295565b60008060008060006080868803121561249157600080fd5b853567ffffffffffffffff8111156124a857600080fd5b6124b48882890161234e565b9096509450506020860135925060408601356124cf816127a5565b949793965091946060013592915050565b600080600080600080600080600060c08a8c0312156124fe57600080fd5b893567ffffffffffffffff8082111561251657600080fd5b6125228d838e0161234e565b909b50995060208c0135985089915061253d60408d0161239a565b975060608c013591508082111561255357600080fd5b61255f8d838e0161234e565b909750955060808c013591508082111561257857600080fd5b506125858c828d0161234e565b9a9d999c50979a9699959894979660a00135949350505050565b600080600080606085870312156125b557600080fd5b843567ffffffffffffffff8111156125cc57600080fd5b6125d88782880161234e565b90989097506020870135966040013595509350505050565b60006020828403121561260257600080fd5b815161077d816127a5565b60006020828403121561261f57600080fd5b5035919050565b6000806040838503121561263957600080fd5b823591506123f86020840161239a565b73ffffffffffffffffffffffffffffffffffffffff83168152604081016005831061269d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8260208301529392505050565b6000816126b9576126b9612718565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561271157612711612718565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff811681146108d157600080fdfea2646970667358221220784f7b7e16141a4211498764f90cf7eb370b47a05a958308533e71e60a457e2064736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/MOCK_TrollRegistry.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/MOCK_TrollRegistry.json.ts"], function (require, exports, eth_contract_5, MOCK_TrollRegistry_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MOCK_TrollRegistry = void 0;
    class MOCK_TrollRegistry extends eth_contract_5.Contract {
        constructor(wallet, address) {
            super(wallet, address, MOCK_TrollRegistry_json_1.default.abi, MOCK_TrollRegistry_json_1.default.bytecode);
            this.assign();
        }
        deploy(govToken) {
            return this.__deploy([govToken]);
        }
        parseAddTrollEvent(receipt) {
            return this.parseEvents(receipt, "AddTroll").map(e => this.decodeAddTrollEvent(e));
        }
        decodeAddTrollEvent(event) {
            let result = event.data;
            return {
                troll: result.troll,
                trollProfileIndex: new eth_contract_5.BigNumber(result.trollProfileIndex),
                isSuperTroll: result.isSuperTroll,
                _event: event
            };
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDelistTrollEvent(receipt) {
            return this.parseEvents(receipt, "DelistTroll").map(e => this.decodeDelistTrollEvent(e));
        }
        decodeDelistTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_5.BigNumber(result.trollProfileIndex),
                _event: event
            };
        }
        parseLockGeneralTrollEvent(receipt) {
            return this.parseEvents(receipt, "LockGeneralTroll").map(e => this.decodeLockGeneralTrollEvent(e));
        }
        decodeLockGeneralTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_5.BigNumber(result.trollProfileIndex),
                lockedBy: result.lockedBy,
                _event: event
            };
        }
        parseLockSuperTrollEvent(receipt) {
            return this.parseEvents(receipt, "LockSuperTroll").map(e => this.decodeLockSuperTrollEvent(e));
        }
        decodeLockSuperTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_5.BigNumber(result.trollProfileIndex),
                lockedBy: result.lockedBy,
                _event: event
            };
        }
        parseParamSetEvent(receipt) {
            return this.parseEvents(receipt, "ParamSet").map(e => this.decodeParamSetEvent(e));
        }
        decodeParamSetEvent(event) {
            let result = event.data;
            return {
                name: result.name,
                value: result.value,
                _event: event
            };
        }
        parseParamSet2Event(receipt) {
            return this.parseEvents(receipt, "ParamSet2").map(e => this.decodeParamSet2Event(e));
        }
        decodeParamSet2Event(event) {
            let result = event.data;
            return {
                name: result.name,
                value1: result.value1,
                value2: result.value2,
                _event: event
            };
        }
        parseRemoveTrollEvent(receipt) {
            return this.parseEvents(receipt, "RemoveTroll").map(e => this.decodeRemoveTrollEvent(e));
        }
        decodeRemoveTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_5.BigNumber(result.trollProfileIndex),
                _event: event
            };
        }
        parseResumeEvent(receipt) {
            return this.parseEvents(receipt, "Resume").map(e => this.decodeResumeEvent(e));
        }
        decodeResumeEvent(event) {
            let result = event.data;
            return {
                _event: event
            };
        }
        parseSetVotingExecutorEvent(receipt) {
            return this.parseEvents(receipt, "SetVotingExecutor").map(e => this.decodeSetVotingExecutorEvent(e));
        }
        decodeSetVotingExecutorEvent(event) {
            let result = event.data;
            return {
                newVotingExecutor: result.newVotingExecutor,
                isActive: result.isActive,
                _event: event
            };
        }
        parseShutdownEvent(receipt) {
            return this.parseEvents(receipt, "Shutdown").map(e => this.decodeShutdownEvent(e));
        }
        decodeShutdownEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseUnlockGeneralTrollEvent(receipt) {
            return this.parseEvents(receipt, "UnlockGeneralTroll").map(e => this.decodeUnlockGeneralTrollEvent(e));
        }
        decodeUnlockGeneralTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_5.BigNumber(result.trollProfileIndex),
                _event: event
            };
        }
        parseUnlockSuperTrollEvent(receipt) {
            return this.parseEvents(receipt, "UnlockSuperTroll").map(e => this.decodeUnlockSuperTrollEvent(e));
        }
        decodeUnlockSuperTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_5.BigNumber(result.trollProfileIndex),
                unlock: result.unlock,
                bridgeVault: result.bridgeVault,
                penalty: new eth_contract_5.BigNumber(result.penalty),
                _event: event
            };
        }
        parseUpdateConfigStoreEvent(receipt) {
            return this.parseEvents(receipt, "UpdateConfigStore").map(e => this.decodeUpdateConfigStoreEvent(e));
        }
        decodeUpdateConfigStoreEvent(event) {
            let result = event.data;
            return {
                newConfigStore: result.newConfigStore,
                _event: event
            };
        }
        parseUpdateTrollEvent(receipt) {
            return this.parseEvents(receipt, "UpdateTroll").map(e => this.decodeUpdateTrollEvent(e));
        }
        decodeUpdateTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_5.BigNumber(result.trollProfileIndex),
                oldTroll: result.oldTroll,
                newTroll: result.newTroll,
                _event: event
            };
        }
        parseUpgradeEvent(receipt) {
            return this.parseEvents(receipt, "Upgrade").map(e => this.decodeUpgradeEvent(e));
        }
        decodeUpgradeEvent(event) {
            let result = event.data;
            return {
                newTrollRegistry: result.newTrollRegistry,
                _event: event
            };
        }
        parseUpgradeVotingManagerEvent(receipt) {
            return this.parseEvents(receipt, "UpgradeVotingManager").map(e => this.decodeUpgradeVotingManagerEvent(e));
        }
        decodeUpgradeVotingManagerEvent(event) {
            let result = event.data;
            return {
                newVotingManager: result.newVotingManager,
                _event: event
            };
        }
        assign() {
            let configStore_call = async () => {
                let result = await this.call('configStore');
                return result;
            };
            this.configStore = configStore_call;
            let generalTrollCount_call = async () => {
                let result = await this.call('generalTrollCount');
                return new eth_contract_5.BigNumber(result);
            };
            this.generalTrollCount = generalTrollCount_call;
            let govToken_call = async () => {
                let result = await this.call('govToken');
                return result;
            };
            this.govToken = govToken_call;
            let isGeneralTrollParams = (params) => [params.troll, params.returnFalseIfBlocked];
            let isGeneralTroll_call = async (params) => {
                let result = await this.call('isGeneralTroll', isGeneralTrollParams(params));
                return result;
            };
            this.isGeneralTroll = isGeneralTroll_call;
            let isGeneralTrollByIndexParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.returnFalseIfBlocked];
            let isGeneralTrollByIndex_call = async (params) => {
                let result = await this.call('isGeneralTrollByIndex', isGeneralTrollByIndexParams(params));
                return result;
            };
            this.isGeneralTrollByIndex = isGeneralTrollByIndex_call;
            let isPermitted_call = async (param1) => {
                let result = await this.call('isPermitted', [param1]);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let isSuperTrollParams = (params) => [params.troll, params.returnFalseIfBlocked];
            let isSuperTroll_call = async (params) => {
                let result = await this.call('isSuperTroll', isSuperTrollParams(params));
                return result;
            };
            this.isSuperTroll = isSuperTroll_call;
            let isSuperTrollByIndexParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.returnFalseIfBlocked];
            let isSuperTrollByIndex_call = async (params) => {
                let result = await this.call('isSuperTrollByIndex', isSuperTrollByIndexParams(params));
                return result;
            };
            this.isSuperTrollByIndex = isSuperTrollByIndex_call;
            let isVotingExecutor_call = async (param1) => {
                let result = await this.call('isVotingExecutor', [param1]);
                return result;
            };
            this.isVotingExecutor = isVotingExecutor_call;
            let newOwner_call = async () => {
                let result = await this.call('newOwner');
                return result;
            };
            this.newOwner = newOwner_call;
            let newTrollRegistry_call = async () => {
                let result = await this.call('newTrollRegistry');
                return result;
            };
            this.newTrollRegistry = newTrollRegistry_call;
            let newVotingManager_call = async () => {
                let result = await this.call('newVotingManager');
                return result;
            };
            this.newVotingManager = newVotingManager_call;
            let owner_call = async () => {
                let result = await this.call('owner');
                return result;
            };
            this.owner = owner_call;
            let paused_call = async () => {
                let result = await this.call('paused');
                return result;
            };
            this.paused = paused_call;
            let superTrollCount_call = async () => {
                let result = await this.call('superTrollCount');
                return new eth_contract_5.BigNumber(result);
            };
            this.superTrollCount = superTrollCount_call;
            let trollProfileInv_call = async (param1) => {
                let result = await this.call('trollProfileInv', [param1]);
                return new eth_contract_5.BigNumber(result);
            };
            this.trollProfileInv = trollProfileInv_call;
            let trollProfiles_call = async (param1) => {
                let result = await this.call('trollProfiles', [this.wallet.utils.toString(param1)]);
                return {
                    troll: result.troll,
                    trollType: new eth_contract_5.BigNumber(result.trollType)
                };
            };
            this.trollProfiles = trollProfiles_call;
            let trollRegistry_call = async () => {
                let result = await this.call('trollRegistry');
                return result;
            };
            this.trollRegistry = trollRegistry_call;
            let usedNonce_call = async (param1) => {
                let result = await this.call('usedNonce', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.usedNonce = usedNonce_call;
            let votingExecutor_call = async (param1) => {
                let result = await this.call('votingExecutor', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.votingExecutor = votingExecutor_call;
            let votingExecutorInv_call = async (param1) => {
                let result = await this.call('votingExecutorInv', [param1]);
                return new eth_contract_5.BigNumber(result);
            };
            this.votingExecutorInv = votingExecutorInv_call;
            let votingExecutorLength_call = async () => {
                let result = await this.call('votingExecutorLength');
                return new eth_contract_5.BigNumber(result);
            };
            this.votingExecutorLength = votingExecutorLength_call;
            let addTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), params.troll, params.isSuperTroll, this.wallet.utils.toString(params.nonce)];
            let addTroll_send = async (params) => {
                let result = await this.send('addTroll', addTrollParams(params));
                return result;
            };
            let addTroll_call = async (params) => {
                let result = await this.call('addTroll', addTrollParams(params));
                return;
            };
            this.addTroll = Object.assign(addTroll_send, {
                call: addTroll_call
            });
            let deny_send = async (user) => {
                let result = await this.send('deny', [user]);
                return result;
            };
            let deny_call = async (user) => {
                let result = await this.call('deny', [user]);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let initAddress_send = async (configStore) => {
                let result = await this.send('initAddress', [configStore]);
                return result;
            };
            let initAddress_call = async (configStore) => {
                let result = await this.call('initAddress', [configStore]);
                return;
            };
            this.initAddress = Object.assign(initAddress_send, {
                call: initAddress_call
            });
            let lockGeneralTroll_send = async (trollProfileIndex) => {
                let result = await this.send('lockGeneralTroll', [this.wallet.utils.toString(trollProfileIndex)]);
                return result;
            };
            let lockGeneralTroll_call = async (trollProfileIndex) => {
                let result = await this.call('lockGeneralTroll', [this.wallet.utils.toString(trollProfileIndex)]);
                return;
            };
            this.lockGeneralTroll = Object.assign(lockGeneralTroll_send, {
                call: lockGeneralTroll_call
            });
            let lockSuperTroll_send = async (trollProfileIndex) => {
                let result = await this.send('lockSuperTroll', [this.wallet.utils.toString(trollProfileIndex)]);
                return result;
            };
            let lockSuperTroll_call = async (trollProfileIndex) => {
                let result = await this.call('lockSuperTroll', [this.wallet.utils.toString(trollProfileIndex)]);
                return;
            };
            this.lockSuperTroll = Object.assign(lockSuperTroll_send, {
                call: lockSuperTroll_call
            });
            let permit_send = async (user) => {
                let result = await this.send('permit', [user]);
                return result;
            };
            let permit_call = async (user) => {
                let result = await this.call('permit', [user]);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let removeTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.nonce)];
            let removeTroll_send = async (params) => {
                let result = await this.send('removeTroll', removeTrollParams(params));
                return result;
            };
            let removeTroll_call = async (params) => {
                let result = await this.call('removeTroll', removeTrollParams(params));
                return;
            };
            this.removeTroll = Object.assign(removeTroll_send, {
                call: removeTroll_call
            });
            let resume_send = async () => {
                let result = await this.send('resume');
                return result;
            };
            let resume_call = async () => {
                let result = await this.call('resume');
                return;
            };
            this.resume = Object.assign(resume_send, {
                call: resume_call
            });
            let setVotingExecutorParams = (params) => [params.votingExecutor, params.bool];
            let setVotingExecutor_send = async (params) => {
                let result = await this.send('setVotingExecutor', setVotingExecutorParams(params));
                return result;
            };
            let setVotingExecutor_call = async (params) => {
                let result = await this.call('setVotingExecutor', setVotingExecutorParams(params));
                return;
            };
            this.setVotingExecutor = Object.assign(setVotingExecutor_send, {
                call: setVotingExecutor_call
            });
            let shutdownByAdmin_send = async () => {
                let result = await this.send('shutdownByAdmin');
                return result;
            };
            let shutdownByAdmin_call = async () => {
                let result = await this.call('shutdownByAdmin');
                return;
            };
            this.shutdownByAdmin = Object.assign(shutdownByAdmin_send, {
                call: shutdownByAdmin_call
            });
            let shutdownByVoting_send = async () => {
                let result = await this.send('shutdownByVoting');
                return result;
            };
            let shutdownByVoting_call = async () => {
                let result = await this.call('shutdownByVoting');
                return;
            };
            this.shutdownByVoting = Object.assign(shutdownByVoting_send, {
                call: shutdownByVoting_call
            });
            let takeOwnership_send = async () => {
                let result = await this.send('takeOwnership');
                return result;
            };
            let takeOwnership_call = async () => {
                let result = await this.call('takeOwnership');
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner) => {
                let result = await this.send('transferOwnership', [newOwner]);
                return result;
            };
            let transferOwnership_call = async (newOwner) => {
                let result = await this.call('transferOwnership', [newOwner]);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let unlockGeneralTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.nonce)];
            let unlockGeneralTroll_send = async (params) => {
                let result = await this.send('unlockGeneralTroll', unlockGeneralTrollParams(params));
                return result;
            };
            let unlockGeneralTroll_call = async (params) => {
                let result = await this.call('unlockGeneralTroll', unlockGeneralTrollParams(params));
                return;
            };
            this.unlockGeneralTroll = Object.assign(unlockGeneralTroll_send, {
                call: unlockGeneralTroll_call
            });
            let unlockSuperTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), params.unlock, params.vaultRegistry, this.wallet.utils.toString(params.penalty), this.wallet.utils.toString(params.nonce)];
            let unlockSuperTroll_send = async (params) => {
                let result = await this.send('unlockSuperTroll', unlockSuperTrollParams(params));
                return result;
            };
            let unlockSuperTroll_call = async (params) => {
                let result = await this.call('unlockSuperTroll', unlockSuperTrollParams(params));
                return;
            };
            this.unlockSuperTroll = Object.assign(unlockSuperTroll_send, {
                call: unlockSuperTroll_call
            });
            let updateConfigStore_send = async () => {
                let result = await this.send('updateConfigStore');
                return result;
            };
            let updateConfigStore_call = async () => {
                let result = await this.call('updateConfigStore');
                return;
            };
            this.updateConfigStore = Object.assign(updateConfigStore_send, {
                call: updateConfigStore_call
            });
            let updateTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), params.newTroll, this.wallet.utils.toString(params.nonce)];
            let updateTroll_send = async (params) => {
                let result = await this.send('updateTroll', updateTrollParams(params));
                return result;
            };
            let updateTroll_call = async (params) => {
                let result = await this.call('updateTroll', updateTrollParams(params));
                return;
            };
            this.updateTroll = Object.assign(updateTroll_send, {
                call: updateTroll_call
            });
            let upgradeTrollRegistry_send = async (trollRegistry) => {
                let result = await this.send('upgradeTrollRegistry', [trollRegistry]);
                return result;
            };
            let upgradeTrollRegistry_call = async (trollRegistry) => {
                let result = await this.call('upgradeTrollRegistry', [trollRegistry]);
                return;
            };
            this.upgradeTrollRegistry = Object.assign(upgradeTrollRegistry_send, {
                call: upgradeTrollRegistry_call
            });
            let upgradeTrollRegistryByAdmin_send = async (trollRegistry) => {
                let result = await this.send('upgradeTrollRegistryByAdmin', [trollRegistry]);
                return result;
            };
            let upgradeTrollRegistryByAdmin_call = async (trollRegistry) => {
                let result = await this.call('upgradeTrollRegistryByAdmin', [trollRegistry]);
                return;
            };
            this.upgradeTrollRegistryByAdmin = Object.assign(upgradeTrollRegistryByAdmin_send, {
                call: upgradeTrollRegistryByAdmin_call
            });
            let upgradeVotingManager_send = async (votingManager) => {
                let result = await this.send('upgradeVotingManager', [votingManager]);
                return result;
            };
            let upgradeVotingManager_call = async (votingManager) => {
                let result = await this.call('upgradeVotingManager', [votingManager]);
                return;
            };
            this.upgradeVotingManager = Object.assign(upgradeVotingManager_send, {
                call: upgradeVotingManager_call
            });
            let upgradeVotingManagerByAdmin_send = async (votingManager) => {
                let result = await this.send('upgradeVotingManagerByAdmin', [votingManager]);
                return result;
            };
            let upgradeVotingManagerByAdmin_call = async (votingManager) => {
                let result = await this.call('upgradeVotingManagerByAdmin', [votingManager]);
                return;
            };
            this.upgradeVotingManagerByAdmin = Object.assign(upgradeVotingManagerByAdmin_send, {
                call: upgradeVotingManagerByAdmin_call
            });
        }
    }
    exports.MOCK_TrollRegistry = MOCK_TrollRegistry;
});
define("@openswap/cross-chain-bridge-sdk/contracts/MintableToken.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/MintableToken.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "string", "name": "name_", "type": "string" }, { "internalType": "string", "name": "symbol_", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burn", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "burnFrom", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b5060405162001654380380620016548339810160408190526200003491620001f8565b600080546001600160a01b031916331790558151829082906200005f9060069060208501906200009b565b508051620000759060079060208401906200009b565b5050336000908152600260205260409020805460ff1916600117905550620002b5915050565b828054620000a99062000262565b90600052602060002090601f016020900481019282620000cd576000855562000118565b82601f10620000e857805160ff191683800117855562000118565b8280016001018555821562000118579182015b8281111562000118578251825591602001919060010190620000fb565b50620001269291506200012a565b5090565b5b808211156200012657600081556001016200012b565b600082601f8301126200015357600080fd5b81516001600160401b03808211156200017057620001706200029f565b604051601f8301601f19908116603f011681019082821181831017156200019b576200019b6200029f565b81604052838152602092508683858801011115620001b857600080fd5b600091505b83821015620001dc5785820183015181830184015290820190620001bd565b83821115620001ee5760008385830101525b9695505050505050565b600080604083850312156200020c57600080fd5b82516001600160401b03808211156200022457600080fd5b620002328683870162000141565b935060208501519150808211156200024957600080fd5b50620002588582860162000141565b9150509250929050565b600181811c908216806200027757607f821691505b602082108114156200029957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b61138f80620002c56000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806370a08231116100d8578063a2f55ae51161008c578063d4ee1d9011610066578063d4ee1d9014610339578063dd62ed3e14610359578063f2fde38b1461039f57600080fd5b8063a2f55ae514610300578063a457c2d714610313578063a9059cbb1461032657600080fd5b80638da5cb5b116100bd5780638da5cb5b146102a057806395d89b41146102e55780639c52a7f1146102ed57600080fd5b806370a082311461025757806379cc67901461028d57600080fd5b8063395093511161012f57806340c10f191161011457806340c10f191461022757806342966c681461023a578063605361721461024f57600080fd5b806339509351146101f15780633fd8cc4e1461020457600080fd5b806318160ddd1161016057806318160ddd146101bd57806323b872dd146101cf578063313ce567146101e257600080fd5b806306fdde031461017c578063095ea7b31461019a575b600080fd5b6101846103b2565b6040516101919190611253565b60405180910390f35b6101ad6101a8366004611210565b610444565b6040519015158152602001610191565b6005545b604051908152602001610191565b6101ad6101dd3660046111d4565b61045c565b60405160128152602001610191565b6101ad6101ff366004611210565b610480565b6101ad61021236600461117f565b60026020526000908152604090205460ff1681565b6101ad610235366004611210565b6104cc565b61024d61024836600461123a565b610583565b005b61024d610590565b6101c161026536600461117f565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b61024d61029b366004611210565b6106ba565b6000546102c09073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610191565b6101846106d3565b61024d6102fb36600461117f565b6106e2565b61024d61030e36600461117f565b610789565b6101ad610321366004611210565b61082c565b6101ad610334366004611210565b6108fd565b6001546102c09073ffffffffffffffffffffffffffffffffffffffff1681565b6101c16103673660046111a1565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260046020908152604080832093909416825291909152205490565b61024d6103ad36600461117f565b61090b565b6060600680546103c190611305565b80601f01602080910402602001604051908101604052809291908181526020018280546103ed90611305565b801561043a5780601f1061040f5761010080835404028352916020019161043a565b820191906000526020600020905b81548152906001019060200180831161041d57829003601f168201915b5050505050905090565b6000336104528185856109a2565b5060019392505050565b60003361046a858285610b56565b610475858585610c2d565b506001949350505050565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919061045290829086906104c79087906112c6565b6109a2565b3360009081526002602052604081205460ff16610570576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61057a8383610ea3565b50600192915050565b61058d3382610f98565b50565b60015473ffffffffffffffffffffffffffffffffffffffff163314610637576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610567565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b6106c5823383610b56565b6106cf8282610f98565b5050565b6060600780546103c190611305565b60005473ffffffffffffffffffffffffffffffffffffffff16331461070657600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107ad57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161077e565b33600081815260046020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156108f0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610567565b61047582868684036109a2565b600033610452818585610c2d565b60005473ffffffffffffffffffffffffffffffffffffffff16331461092f57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161077e565b73ffffffffffffffffffffffffffffffffffffffff8316610a44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610567565b73ffffffffffffffffffffffffffffffffffffffff8216610ae7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610567565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526004602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600460209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c275781811015610c1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610567565b610c2784848484036109a2565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cd0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610567565b73ffffffffffffffffffffffffffffffffffffffff8216610d73576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610567565b73ffffffffffffffffffffffffffffffffffffffff831660009081526003602052604090205481811015610e29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610567565b73ffffffffffffffffffffffffffffffffffffffff80851660008181526003602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610e969086815260200190565b60405180910390a3610c27565b73ffffffffffffffffffffffffffffffffffffffff8216610f20576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610567565b8060056000828254610f3291906112c6565b909155505073ffffffffffffffffffffffffffffffffffffffff82166000818152600360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff821661103b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610567565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260036020526040902054818110156110f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610567565b73ffffffffffffffffffffffffffffffffffffffff831660008181526003602090815260408083208686039055600580548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610b49565b803573ffffffffffffffffffffffffffffffffffffffff8116811461117a57600080fd5b919050565b60006020828403121561119157600080fd5b61119a82611156565b9392505050565b600080604083850312156111b457600080fd5b6111bd83611156565b91506111cb60208401611156565b90509250929050565b6000806000606084860312156111e957600080fd5b6111f284611156565b925061120060208501611156565b9150604084013590509250925092565b6000806040838503121561122357600080fd5b61122c83611156565b946020939093013593505050565b60006020828403121561124c57600080fd5b5035919050565b600060208083528351808285015260005b8181101561128057858101830151858201604001528201611264565b81811115611292576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b60008219821115611300577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b600181811c9082168061131957607f821691505b60208210811415611353577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea264697066735822122001ec28f8800b125a6d3fcc9d87a6116d800494abd2c438b68acde43553817e5d64736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/MintableToken.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/MintableToken.json.ts"], function (require, exports, eth_contract_6, MintableToken_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MintableToken = void 0;
    class MintableToken extends eth_contract_6.Contract {
        constructor(wallet, address) {
            super(wallet, address, MintableToken_json_1.default.abi, MintableToken_json_1.default.bytecode);
            this.assign();
        }
        deploy(params) {
            return this.__deploy([params.name, params.symbol]);
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_6.BigNumber(result.value),
                _event: event
            };
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_6.BigNumber(result.value),
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params) => {
                let result = await this.call('allowance', allowanceParams(params));
                return new eth_contract_6.BigNumber(result);
            };
            this.allowance = allowance_call;
            let balanceOf_call = async (account) => {
                let result = await this.call('balanceOf', [account]);
                return new eth_contract_6.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let decimals_call = async () => {
                let result = await this.call('decimals');
                return new eth_contract_6.BigNumber(result);
            };
            this.decimals = decimals_call;
            let isPermitted_call = async (param1) => {
                let result = await this.call('isPermitted', [param1]);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let name_call = async () => {
                let result = await this.call('name');
                return result;
            };
            this.name = name_call;
            let newOwner_call = async () => {
                let result = await this.call('newOwner');
                return result;
            };
            this.newOwner = newOwner_call;
            let owner_call = async () => {
                let result = await this.call('owner');
                return result;
            };
            this.owner = owner_call;
            let symbol_call = async () => {
                let result = await this.call('symbol');
                return result;
            };
            this.symbol = symbol_call;
            let totalSupply_call = async () => {
                let result = await this.call('totalSupply');
                return new eth_contract_6.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params) => {
                let result = await this.send('approve', approveParams(params));
                return result;
            };
            let approve_call = async (params) => {
                let result = await this.call('approve', approveParams(params));
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let burn_send = async (amount) => {
                let result = await this.send('burn', [this.wallet.utils.toString(amount)]);
                return result;
            };
            let burn_call = async (amount) => {
                let result = await this.call('burn', [this.wallet.utils.toString(amount)]);
                return;
            };
            this.burn = Object.assign(burn_send, {
                call: burn_call
            });
            let burnFromParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let burnFrom_send = async (params) => {
                let result = await this.send('burnFrom', burnFromParams(params));
                return result;
            };
            let burnFrom_call = async (params) => {
                let result = await this.call('burnFrom', burnFromParams(params));
                return;
            };
            this.burnFrom = Object.assign(burnFrom_send, {
                call: burnFrom_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params));
                return result;
            };
            let decreaseAllowance_call = async (params) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params));
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let deny_send = async (user) => {
                let result = await this.send('deny', [user]);
                return result;
            };
            let deny_call = async (user) => {
                let result = await this.call('deny', [user]);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params));
                return result;
            };
            let increaseAllowance_call = async (params) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params));
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let mintParams = (params) => [params.account, this.wallet.utils.toString(params.amount)];
            let mint_send = async (params) => {
                let result = await this.send('mint', mintParams(params));
                return result;
            };
            let mint_call = async (params) => {
                let result = await this.call('mint', mintParams(params));
                return result;
            };
            this.mint = Object.assign(mint_send, {
                call: mint_call
            });
            let permit_send = async (user) => {
                let result = await this.send('permit', [user]);
                return result;
            };
            let permit_call = async (user) => {
                let result = await this.call('permit', [user]);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let takeOwnership_send = async () => {
                let result = await this.send('takeOwnership');
                return result;
            };
            let takeOwnership_call = async () => {
                let result = await this.call('takeOwnership');
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params) => {
                let result = await this.send('transfer', transferParams(params));
                return result;
            };
            let transfer_call = async (params) => {
                let result = await this.call('transfer', transferParams(params));
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params) => {
                let result = await this.send('transferFrom', transferFromParams(params));
                return result;
            };
            let transferFrom_call = async (params) => {
                let result = await this.call('transferFrom', transferFromParams(params));
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
            let transferOwnership_send = async (newOwner) => {
                let result = await this.send('transferOwnership', [newOwner]);
                return result;
            };
            let transferOwnership_call = async (newOwner) => {
                let result = await this.call('transferOwnership', [newOwner]);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
        }
    }
    exports.MintableToken = MintableToken;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVault.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVault.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IOSWAP_BridgeVaultTrollRegistry", "name": "_vaultRegistry", "type": "address" }, { "internalType": "contract IOSWAP_ConfigStore", "name": "_configStore", "type": "address" }, { "internalType": "contract IERC20", "name": "_asset", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "provider", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "mintAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newLpAssetBalance", "type": "uint256" }], "name": "AddLiquidity", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "amendment", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "indexed": false, "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }], "name": "AmendOrderRequest", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "indexed": false, "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }, { "indexed": false, "internalType": "int256", "name": "newImbalance", "type": "int256" }], "name": "NewOrder", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "signers", "type": "uint256[]" }, { "indexed": false, "internalType": "bool", "name": "canceledByOrderOwner", "type": "bool" }, { "indexed": false, "internalType": "int256", "name": "newImbalance", "type": "int256" }, { "indexed": false, "internalType": "uint256", "name": "newProtocolFeeBalance", "type": "uint256" }], "name": "OrderCanceled", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "rebalancer", "type": "address" }, { "indexed": false, "internalType": "int256", "name": "amount", "type": "int256" }, { "indexed": false, "internalType": "int256", "name": "newImbalance", "type": "int256" }], "name": "Rebalance", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "provider", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newPendingWithdrawal", "type": "uint256" }], "name": "RemoveLiquidity", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "provider", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "burnAmount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newLpAssetBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newPendingWithdrawal", "type": "uint256" }], "name": "RemoveLiquidityRequest", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "sourceChainId", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "indexed": false, "internalType": "bytes32", "name": "hashedOrderId", "type": "bytes32" }], "name": "RequestCancelOrder", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "signers", "type": "uint256[]" }, { "indexed": false, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amendment", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "indexed": false, "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }, { "indexed": false, "internalType": "uint256", "name": "outAmount", "type": "uint256" }, { "indexed": false, "internalType": "int256", "name": "newImbalance", "type": "int256" }, { "indexed": false, "internalType": "uint256", "name": "newLpAssetBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newProtocolFeeBalance", "type": "uint256" }], "name": "Swap", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "excess", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newProtocolFeeBalance", "type": "uint256" }], "name": "Sync", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract IOSWAP_ConfigStore", "name": "newConfigStore", "type": "address" }], "name": "UpdateConfigStore", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract IOSWAP_SideChainTrollRegistry", "name": "newTrollRegistry", "type": "address" }], "name": "UpdateTrollRegistry", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "orderId", "type": "bytes32" }, { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "signers", "type": "uint256[]" }], "name": "VoidOrder", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "indexed": false, "internalType": "int256", "name": "newImbalance", "type": "int256" }], "name": "WithdrawUnexecutedOrder", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "feeTo", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newProtocolFeeBalance", "type": "uint256" }], "name": "WithdrawlTrollFee", "type": "event" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "addLiquidity", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "asset", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "assetDecimalsScale", "outputs": [{ "internalType": "int8", "name": "", "type": "int8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "govTokenOracle", "type": "address" }, { "internalType": "address", "name": "assetTokenOracle", "type": "address" }], "name": "assetPriceAgainstGovToken", "outputs": [{ "internalType": "uint256", "name": "price", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "internalType": "bool", "name": "canceledByOrderOwner", "type": "bool" }, { "internalType": "uint256", "name": "protocolFee", "type": "uint256" }], "name": "cancelOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "configStore", "outputs": [{ "internalType": "contract IOSWAP_ConfigStore", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "getChainId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getOrders", "outputs": [{ "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "internalType": "struct IOSWAP_BridgeVault.Order[]", "name": "list", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "govToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "internalType": "bool", "name": "canceledByOrderOwner", "type": "bool" }, { "internalType": "uint256", "name": "protocolFee", "type": "uint256" }], "name": "hashCancelOrderParams", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "uint256", "name": "sourceChainId", "type": "uint256" }, { "internalType": "uint256", "name": "orderId", "type": "uint256" }], "name": "hashOrder", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "orderId", "type": "bytes32" }, { "internalType": "uint256", "name": "amendment", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }, { "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "internalType": "address[]", "name": "pair", "type": "address[]" }], "name": "hashSwapParams", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "orderId", "type": "bytes32" }], "name": "hashVoidOrderParams", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "hashWithdrawParams", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "imbalance", "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IOSWAP_BridgeVaultTrollRegistry", "name": "_vaultRegistry", "type": "address" }], "name": "initAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "lastKnownBalance", "outputs": [{ "internalType": "uint256", "name": "balance", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "lpAssetBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }], "name": "newOrder", "outputs": [{ "internalType": "uint256", "name": "orderId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }, { "internalType": "address", "name": "trader", "type": "address" }], "name": "newOrderFromRouter", "outputs": [{ "internalType": "uint256", "name": "orderId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "orderAmendments", "outputs": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "orderId", "type": "uint256" }], "name": "orderAmendmentsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "orderOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "orderRefunds", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "orderStatus", "outputs": [{ "internalType": "enum IOSWAP_BridgeVault.OrderStatus", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "orders", "outputs": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "ordersLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pendingWithdrawalAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "pendingWithdrawalTimeout", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "protocolFeeBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "assetAmount", "type": "uint256" }], "name": "rebalancerDeposit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "assetAmount", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "rebalancerWithdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "provider", "type": "address" }, { "internalType": "uint256", "name": "assetAmount", "type": "uint256" }], "name": "removeLiquidity", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "lpTokenAmount", "type": "uint256" }], "name": "removeLiquidityRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }], "name": "requestAmendOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "sourceChainId", "type": "uint256" }, { "internalType": "uint256", "name": "orderId", "type": "uint256" }], "name": "requestCancelOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "address", "name": "_owner", "type": "address" }, { "internalType": "uint256", "name": "_orderId", "type": "uint256" }, { "internalType": "uint256", "name": "amendment", "type": "uint256" }, { "internalType": "uint256", "name": "protocolFee", "type": "uint256" }, { "internalType": "address[]", "name": "pair", "type": "address[]" }, { "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }], "name": "swap", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "swapOrderStatus", "outputs": [{ "internalType": "enum IOSWAP_BridgeVault.OrderStatus", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "sync", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "totalPendingWithdrawal", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "trollRegistry", "outputs": [{ "internalType": "contract IOSWAP_SideChainTrollRegistry", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "updateConfigStore", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "updateTrollRegistry", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "vaultRegistry", "outputs": [{ "internalType": "contract IOSWAP_BridgeVaultTrollRegistry", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "bytes32", "name": "orderId", "type": "bytes32" }], "name": "voidOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "orderId", "type": "uint256" }], "name": "withdrawUnexecutedOrder", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdrawlTrollFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60e06040523480156200001157600080fd5b50604051620078ee380380620078ee83398101604081905262000034916200043f565b604080518082018252601281527113d4d5d05408109c9a5919d94815985d5b1d60721b60208083019182528351808501909452600b84526a13d4d5d0540b559055531560aa1b908401528151919291620000919160039162000372565b508051620000a790600490602084019062000372565b50506001600555506001600160a01b038316620000d657600680546001600160a01b0319163317905562000187565b600980546001600160a01b0319166001600160a01b03851690811790915560408051630c059efb60e21b815290516330167bec91600480820192602092909190829003018186803b1580156200012b57600080fd5b505afa15801562000140573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000166919062000418565b600780546001600160a01b0319166001600160a01b03929092169190911790555b6000826001600160a01b03166305268cff6040518163ffffffff1660e01b815260040160206040518083038186803b158015620001c357600080fd5b505afa158015620001d8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001fe919062000418565b9050806001600160a01b03166080816001600160a01b031660601b815250506000816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200025957600080fd5b505afa1580156200026e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000294919062000493565b9050826001600160a01b031660a0816001600160a01b031660601b815250506000836001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015620002ef57600080fd5b505afa15801562000304573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200032a919062000493565b9050620003388282620004b8565b600090810b900b60f81b60c0525050600880546001600160a01b0319166001600160a01b039490941693909317909255506200056b915050565b8280546200038090620004ff565b90600052602060002090601f016020900481019282620003a45760008555620003ef565b82601f10620003bf57805160ff1916838001178555620003ef565b82800160010185558215620003ef579182015b82811115620003ef578251825591602001919060010190620003d2565b50620003fd92915062000401565b5090565b5b80821115620003fd576000815560010162000402565b6000602082840312156200042b57600080fd5b8151620004388162000552565b9392505050565b6000806000606084860312156200045557600080fd5b8351620004628162000552565b6020850151909350620004758162000552565b6040850151909250620004888162000552565b809150509250925092565b600060208284031215620004a657600080fd5b815160ff811681146200043857600080fd5b600081810b83820b8281128015607f19830184121615620004dd57620004dd6200053c565b81607f018313811615620004f557620004f56200053c565b5090039392505050565b600181811c908216806200051457607f821691505b602082108114156200053657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b03811681146200056857600080fd5b50565b60805160601c60a05160601c60c05160f81c6172be620006306000396000818161063c01528181610d0801528181610d3301528181610d5f0152610da2015260008181610542015281816115db0152818161184a015281816119560152818161203b015281816123a6015281816125100152818161266501528181612caa015281816138e301528181613d130152818161405701528181614613015281816148e501528181614fd90152818161508401526150dc0152600061039801526172be6000f3fe608060405234801561001057600080fd5b506004361061038e5760003560e01c8063923b6a7d116101de578063be8acd3f1161010f578063d41e9720116100ad578063e0ca2df01161007c578063e0ca2df014610972578063ec78cdfc14610985578063ffa1dfcb1461098d578063fff6cae9146109a057600080fd5b8063d41e9720146108f0578063d6cf0b7c146108f9578063dd62ed3e1461090c578063deaf30b21461095257600080fd5b8063c4c7f1d0116100e9578063c4c7f1d014610897578063cdd7b38a146108aa578063cfd7091d146108ca578063d06f3fb5146108dd57600080fd5b8063be8acd3f14610859578063bff4945014610861578063c14c723e1461088457600080fd5b8063a39d82221161017c578063a9059cbb11610156578063a9059cbb1461080d578063aa1cb1ac14610820578063af1cae5d14610833578063b64d1e521461084657600080fd5b8063a39d8222146107c7578063a457c2d7146107e7578063a85c38ef146107fa57600080fd5b80639c0dc751116101b85780639c0dc751146107615780639d69dc4e146107815780639dfd49ce146107a1578063a201ccf6146107b457600080fd5b8063923b6a7d1461073e578063944e86441461075157806395d89b411461075957600080fd5b806339509351116102c35780635fa56e3111610261578063842c483511610230578063842c4835146106a757806386dad91e146106af5780638f1926df146106c25780638f72fc771461071e57600080fd5b80635fa56e311461061157806366acc1b91461062457806367a9257d1461063757806370a082311461067157600080fd5b806349e5cabe1161029d57806349e5cabe146105cd57806351c6590a146105e05780635a812465146105f55780635cae6c7a1461060857600080fd5b80633950935114610564578063404de3611461057757806346bdc108146105ad57600080fd5b8063231053ac1161033057806330167bec1161030a57806330167bec14610508578063313ce567146105285780633408e4701461053757806338d52e0f1461053d57600080fd5b8063231053ac1461047457806323879dcd1461048757806323b872dd146104f557600080fd5b80630a22d68c1161036c5780630a22d68c1461041c57806318160ddd146104335780631d2d85961461043b57806320f1fd3b1461046b57600080fd5b806305268cff1461039357806306fdde03146103e4578063095ea7b3146103f9575b600080fd5b6103ba7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6103ec6109a8565b6040516103db9190616aa7565b61040c610407366004616040565b610a3a565b60405190151581526020016103db565b610425600d5481565b6040519081526020016103db565b600254610425565b61045e610449366004616341565b60156020526000908152604090205460ff1681565b6040516103db9190616a66565b610425600a5481565b61042561048236600461635a565b610a54565b610425610495366004616341565b6000466040805160208101929092527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b169082015260548101839052607401604051602081830303815290604052805190602001209050919050565b61040c610503366004615fff565b610acc565b6007546103ba9073ffffffffffffffffffffffffffffffffffffffff1681565b604051601281526020016103db565b46610425565b6103ba7f000000000000000000000000000000000000000000000000000000000000000081565b61040c610572366004616040565b610af0565b6103ba610585366004616341565b60126020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6104256105bb366004616341565b60009081526011602052604090205490565b6104256105db366004615f79565b610b3c565b6105f36105ee366004616341565b610ddd565b005b6105f3610603366004615f3f565b611037565b610425600b5481565b61042561061f36600461606c565b611272565b6105f3610632366004616341565b6112ec565b61065e7f000000000000000000000000000000000000000000000000000000000000000081565b60405160009190910b81526020016103db565b61042561067f366004615f3f565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6105f3611666565b6105f36106bd3660046162d3565b611802565b6106d56106d0366004616567565b6119fd565b60408051968752602087019590955273ffffffffffffffffffffffffffffffffffffffff93841694860194909452606085019190915216608083015260a082015260c0016103db565b61073161072c366004616567565b611a6c565b6040516103db9190616916565b61042561074c36600461616d565b611c5d565b6105f36128ab565b6103ec612a40565b61042561076f366004616341565b60146020526000908152604090205481565b6008546103ba9073ffffffffffffffffffffffffffffffffffffffff1681565b6105f36107af366004616341565b612a4f565b6105f36107c2366004616040565b612af0565b6104256107d5366004615f3f565b600f6020526000908152604090205481565b61040c6107f5366004616040565b612d3a565b6106d5610808366004616341565b612e0b565b61040c61081b366004616040565b612e6b565b6105f361082e366004616220565b612e79565b610425610841366004616488565b613017565b6105f361085436600461653a565b61320b565b601054610425565b61045e61086f366004616341565b60136020526000908152604090205460ff1681565b6105f3610892366004616341565b61373f565b6105f36108a5366004616341565b613a19565b6009546103ba9073ffffffffffffffffffffffffffffffffffffffff1681565b6104256108d836600461606c565b613d89565b6104256108eb36600461645b565b613de1565b610425600c5481565b6105f3610907366004616567565b61416d565b61042561091a366004615f79565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b610425610960366004615f3f565b600e6020526000908152604090205481565b6105f361098036600461626c565b6143a5565b610425614817565b61042561099b366004616513565b614853565b6105f36148ad565b6060600380546109b790616fd5565b80601f01602080910402602001604051908101604052809291908181526020018280546109e390616fd5565b8015610a305780601f10610a0557610100808354040283529160200191610a30565b820191906000526020600020905b815481529060010190602001808311610a1357829003601f168201915b5050505050905090565b600033610a488185856149d1565b60019150505b92915050565b6000463088886020890135610a6f60608b0160408c01615f3f565b8a606001358a8a8a8e6080016020810190610a8a9190615f3f565b8f60a00135604051602001610aaa9c9b9a99989796959493929190616728565b6040516020818303038152906040528051906020012090509695505050505050565b600033610ada858285614b84565b610ae5858585614c55565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190610a489082908690610b37908790616d64565b6149d1565b600080610bc58473ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b8857600080fd5b505afa158015610b9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc09190616442565b614ec4565b905080610c33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f676f76546f6b656e20686173207072696365206f66203000000000000000000060448201526064015b60405180910390fd5b6000610c7e8473ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b8857600080fd5b905080610ce7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f617373657420686173207072696365206f6620300000000000000000000000006044820152606401610c2a565b80610cfa83670de0b6b3a7640000616ee1565b610d049190616d7c565b92507f000000000000000000000000000000000000000000000000000000000000000060000b15610dd55760007f000000000000000000000000000000000000000000000000000000000000000060000b13610d9d57610d837f0000000000000000000000000000000000000000000000000000000000000000617095565b610d8e90600a616e18565b610d989084616d7c565b610dd2565b610dc87f0000000000000000000000000000000000000000000000000000000000000000600a616e18565b610dd29084616ee1565b92505b505092915050565b610de5614f34565b60075473ffffffffffffffffffffffffffffffffffffffff161580610ea75750600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b158015610e6d57600080fd5b505afa158015610e81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea59190616324565b155b610f0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c2a565b80610f74576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f616d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610c2a565b610f7e3382614fa8565b90506000600b54600014610fab57600b54600254610f9c9084616ee1565b610fa69190616d7c565b610fad565b815b905081600b6000828254610fc19190616d64565b90915550610fd190503382615175565b336000818152602081815260409182902054600b54835187815292830186905282840191909152606082015290517fd92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e502396099181900360800190a2506110346001600555565b50565b60065473ffffffffffffffffffffffffffffffffffffffff16331461105b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff81166110d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e756c6c206164647265737300000000000000000000000000000000000000006044820152606401610c2a565b60095473ffffffffffffffffffffffffffffffffffffffff1615611158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f616c726561647920696e697400000000000000000000000000000000000000006044820152606401610c2a565b600980547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316908117909155604080517f30167bec00000000000000000000000000000000000000000000000000000000815290516330167bec91600480820192602092909190829003018186803b1580156111ea57600080fd5b505afa1580156111fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112229190615f5c565b6007805473ffffffffffffffffffffffffffffffffffffffff929092167fffffffffffffffffffffffff000000000000000000000000000000000000000092831617905560068054909116905550565b6000466040805160208101929092527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216928401929092529086901b166054820152606881018490526088810183905260a8015b6040516020818303038152906040528051906020012090509392505050565b6112f4614f34565b60075473ffffffffffffffffffffffffffffffffffffffff1615806113b65750600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561137c57600080fd5b505afa158015611390573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b49190616324565b155b61141c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c2a565b600d54811115611488576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f616d6f756e742065786365656465642066656520746f74616c000000000000006044820152606401610c2a565b80600d600082825461149a9190616f92565b9091555050600854604080517f017e7e58000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163017e7e58916004808301926020929190829003018186803b15801561150a57600080fd5b505afa15801561151e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115429190615f5c565b905073ffffffffffffffffffffffffffffffffffffffff81166115c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f7a65726f206164647265737300000000000000000000000000000000000000006044820152606401610c2a565b61160273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168284615268565b600d546040805173ffffffffffffffffffffffffffffffffffffffff841681526020810185905280820192909252517f3295b018afec1388a9f05500a461d455fdcf5e033bc08f0bd5e76327f938c1c49181900360600190a1506110346001600555565b600854604080517fef060951000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163ef060951916004808301926020929190829003018186803b1580156116d157600080fd5b505afa1580156116e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117099190615f5c565b905073ffffffffffffffffffffffffffffffffffffffff8116611788576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f72650000000000000000000000006044820152606401610c2a565b600880547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f6fa6ee9ec7808d2a9699505042862d79597c4068938b960a4a18d584a2aa3eea906020015b60405180910390a150565b61180a614f34565b6008546040517fb023c86500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166004830152600092839283929091169063b023c8659060240160606040518083038186803b15801561189c57600080fd5b505afa1580156118b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d49190615fb2565b92509250925060006118e68383610b3c565b905061191a88886118f8878a8a611272565b8461190b8b670de0b6b3a7640000616ee1565b6119159190616d7c565b615341565b50506119258661553a565b600a60008282546119369190616f1e565b9091555061197d905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168588615268565b7f8b61a5a3126da6f67e9f92df5065f5c37f8e618dccd2e2033933cf593e747a33846119a88861553a565b6119b19061705c565b600a546040805173ffffffffffffffffffffffffffffffffffffffff909416845260208401929092529082015260600160405180910390a1505050506119f76001600555565b50505050565b60116020528160005260406000208181548110611a1957600080fd5b600091825260209091206006909102018054600182015460028301546003840154600485015460059095015493965091945073ffffffffffffffffffffffffffffffffffffffff90811693919291169086565b606060006010805480602002602001604051908101604052809291908181526020016000905b82821015611b155760008481526020908190206040805160c081018252600686029092018054835260018082015484860152600282015473ffffffffffffffffffffffffffffffffffffffff9081169385019390935260038201546060850152600482015490921660808401526005015460a08301529083529092019101611a92565b5050505090508051841015611c56578051611b308486616d64565b1115611b4657838151611b439190616f92565b92505b8267ffffffffffffffff811115611b5f57611b5f617161565b604051908082528060200260200182016040528015611bf557816020015b611be26040518060c001604052806000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600081525090565b815260200190600190039081611b7d5790505b50915060005b83811015610dd55781611c0e8683616d64565b81518110611c1e57611c1e617132565b6020026020010151838281518110611c3857611c38617132565b60200260200101819052508080611c4e90617023565b915050611bfb565b5092915050565b6000611c67614f34565b60075473ffffffffffffffffffffffffffffffffffffffff161580611d295750600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b158015611cef57600080fd5b505afa158015611d03573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d279190616324565b155b611d8f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c2a565b6000611d9d8984358a613d89565b6020840135925090506000808281526015602052604090205460ff166006811115611dca57611dca617103565b14611e56576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4272696467655661756c743a204f7264657220616c72656164792070726f636560448201527f73736564000000000000000000000000000000000000000000000000000000006064820152608401610c2a565b6007546040517f82ad71190000000000000000000000000000000000000000000000000000000081523360048201526001602482015273ffffffffffffffffffffffffffffffffffffffff909116906382ad71199060440160206040518083038186803b158015611ec657600080fd5b505afa158015611eda573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611efe9190616324565b611f64576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420612073757065722074726f6c6c0000000000000000000000000000006044820152606401610c2a565b81611f6d614817565b1015611ffb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4272696467655661756c743a20696e73756666696369656e742062616c616e6360448201527f65000000000000000000000000000000000000000000000000000000000000006064820152608401610c2a565b6008546040517f0fa0c7f800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301526000928392839283928392839283928392911690630fa0c7f89060240160c06040518083038186803b15801561209657600080fd5b505afa1580156120aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ce91906163cf565b939c50919850965094509250905073ffffffffffffffffffffffffffffffffffffffff811615612200576040517f128df17200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82169063128df1729061214a908e90600401616af8565b60206040518083038186803b15801561216257600080fd5b505afa158015612176573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061219a9190616324565b612200576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f7377617020706f6c696379206e6f74206d6574000000000000000000000000006044820152606401610c2a565b670de0b6b3a7640000612213838c616ee1565b61221d9190616d7c565b91508d61222a8484616d64565b6122349190616d64565b9550858a1161229f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f496e70757420616d6f756e7420746f6f20736d616c6c000000000000000000006044820152606401610c2a565b6122a88a61553a565b600a60008282546122b99190616f1e565b9250508190555081600b60008282546122d29190616d64565b909155506122e290508e84616d64565b600d60008282546122f39190616d64565b9091555061230390508585610b3c565b965061230f868b616f92565b9950505050505050600061233f8e8e61232c878e8b8f8f8f610a54565b8561190b8a670de0b6b3a7640000616ee1565b50600085815260156020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660021790559050866124f65761238e6060870160408801615f3f565b73ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614612442576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c696420746f6b656e000000000000000000000000000000000000006044820152606401610c2a565b85606001358510156124b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f494e53554646494349454e545f4f55545055545f414d4f554e540000000000006044820152606401610c2a565b6124f16124c360a0880160808901615f3f565b866124d460608a0160408b01615f3f565b73ffffffffffffffffffffffffffffffffffffffff169190615268565b61282d565b61253773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001684876155c6565b6060600061254a88830160408a01615f3f565b73ffffffffffffffffffffffffffffffffffffffff16141561263d5773ffffffffffffffffffffffffffffffffffffffff8416638af139378760608a01358c8c61259a60a08e0160808f01615f3f565b8d60a001356040518763ffffffff1660e01b81526004016125c096959493929190616bff565b600060405180830381600087803b1580156125da57600080fd5b505af11580156125ee573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261263491908101906160a1565b91506128029050565b60608473ffffffffffffffffffffffffffffffffffffffff166365d9e64b888a606001358d8d7f00000000000000000000000000000000000000000000000000000000000000008e60800160208101906126979190615f3f565b8f60a001356040518863ffffffff1660e01b81526004016126be9796959493929190616b72565b600060405180830381600087803b1580156126d857600080fd5b505af11580156126ec573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261273291908101906160a1565b925090506127466060890160408a01615f3f565b73ffffffffffffffffffffffffffffffffffffffff16816001835161276b9190616f92565b8151811061277b5761277b617132565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614612800576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4272696467655661756c743a20546f6b656e206f7574206e6f74206d617463686044820152606401610c2a565b505b80600182516128119190616f92565b8151811061282157612821617132565b60200260200101519550505b3373ffffffffffffffffffffffffffffffffffffffff168b7f405af4ab62e51efb58262d5be0d6a4ea764d026247b0a3f5a1daaf7caa8d591c838f8e8b8b600a54600b54600d546040516128889897969594939291906169c8565b60405180910390a35050505061289e6001600555565b9998505050505050505050565b600754604080517fbba588ca000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163bba588ca916004808301926020929190829003018186803b15801561291657600080fd5b505afa15801561292a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061294e9190615f5c565b905073ffffffffffffffffffffffffffffffffffffffff81166129cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f72650000000000000000000000006044820152606401610c2a565b600780547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f2e622d86c9281f3be677f792b9721012fb471d4892cc764f6acd70b50d390701906020016117f7565b6060600480546109b790616fd5565b612a57614f34565b612a613382614fa8565b9050612a6c8161553a565b600a6000828254612a7d9190616cf0565b909155507f8b61a5a3126da6f67e9f92df5065f5c37f8e618dccd2e2033933cf593e747a33905033612aae8361553a565b600a546040805173ffffffffffffffffffffffffffffffffffffffff909416845260208401929092529082015260600160405180910390a16110346001600555565b612af8614f34565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600f6020526040902054421015612b87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4272696467655661756c743a20706c65617365207761697400000000000000006044820152606401610c2a565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600e6020526040902054811115612c3c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f4272696467655661756c743a20776974686472617720616d6f756e742065786360448201527f65656465642072657175657374656420616d6f756e74000000000000000000006064820152608401610c2a565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600e602052604081208054839290612c71908490616f92565b9250508190555080600c6000828254612c8a9190616f92565b90915550612cd1905073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168383615268565b8173ffffffffffffffffffffffffffffffffffffffff167f0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e882600c54604051612d24929190918252602082015260400190565b60405180910390a2612d366001600555565b5050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015612dfe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610c2a565b610ae582868684036149d1565b60108181548110612e1b57600080fd5b6000918252602090912060069091020180546001820154600283015460038401546004850154600590950154939550919373ffffffffffffffffffffffffffffffffffffffff9182169391169086565b600033610a48818585614c55565b60008181526015602052604081205460ff166006811115612e9c57612e9c617103565b14612f28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4272696467655661756c743a204f7264657220616c72656164792070726f636560448201527f73736564000000000000000000000000000000000000000000000000000000006064820152608401610c2a565b6000612f9a8484612f93856000466040805160208101929092527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b169082015260548101839052607401604051602081830303815290604052805190602001209050919050565b6000615341565b506000838152601560205260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600517905551909150339083907fc37546735236339b0acece7af06f4648a849e174d46dea23bc3291f3dce0a965906130099085906169b5565b60405180910390a350505050565b6000613021614f34565b60075473ffffffffffffffffffffffffffffffffffffffff1615806130e35750600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156130a957600080fd5b505afa1580156130bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906130e19190616324565b155b613149576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c2a565b60008260200151116131dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f696e70757420616d6f756e74206d75737420626520677265617465722074686160448201527f6e207a65726f00000000000000000000000000000000000000000000000000006064820152608401610c2a565b6131eb338360200151614fa8565b60208301526131fa82336156d3565b90506132066001600555565b919050565b613213614f34565b60075473ffffffffffffffffffffffffffffffffffffffff1615806132d55750600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561329b57600080fd5b505afa1580156132af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906132d39190616324565b155b61333b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c2a565b60008281526012602052604090205473ffffffffffffffffffffffffffffffffffffffff1633146133c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4272696467655661756c743a206e6f742066726f6d206f776e657200000000006044820152606401610c2a565b600160008381526013602052604090205460ff1660068111156133ed576133ed617103565b148061341b5750600660008381526013602052604090205460ff16600681111561341957613419617103565b145b613481576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4272696467655661756c743a206e6f7420612070656e64696e67206f726465726044820152606401610c2a565b6010828154811061349457613494617132565b600091825260209091206006909102015481351461350e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c69642070656572436861696e0000000000000000000000000000006044820152606401610c2a565b6010828154811061352157613521617132565b90600052602060002090600602016001015481602001351461359f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c696420696e20616d6f756e740000000000000000000000000000006044820152606401610c2a565b60008281526011602052604090205461368057600082815260116020526040902060108054849081106135d4576135d4617132565b600091825260208083208454600180820187559585529190932060069283029093018054929091029092019081558183015492810192909255600280820154908301805473ffffffffffffffffffffffffffffffffffffffff9283167fffffffffffffffffffffffff0000000000000000000000000000000000000000918216179091556003808401549085015560048084015490850180549190931691161790556005908101549101555b60008281526011602090815260408220805460018101825590835291208291600602016136ad8282617190565b5050600082815260136020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600617905560119091529020546136fd90600190616f92565b827f2fb8fa589a57bc1f8d0c370def5008695ee72187df82f07b26914dac852c5c9f8360405161372d9190616af8565b60405180910390a3612d366001600555565b613747614f34565b600061375260025490565b600b5461375f9084616ee1565b6137699190616d7c565b905080600b5410156137d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f7420656e6f7567682066756e6400000000000000000000000000000000006044820152606401610c2a565b80600b60008282546137e99190616f92565b909155506137f99050338361592f565b600854604080517fb86a1855000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163b86a1855916004808301926020929190829003018186803b15801561386457600080fd5b505afa158015613878573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061389c9190616442565b9050801580156138c457506000600a546138b7600b5461553a565b6138c19190616cf0565b12155b156139535761390a73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163384615268565b600c5460405133917f0fbf06c058b90cb038a618f8c2acbf6145f8b3570fd1fa56abb8f0f3f05b36e89161394691868252602082015260400190565b60405180910390a26139ad565b336000908152600e602052604081208054849290613972908490616d64565b9091555061398290508142616d64565b336000908152600f6020526040812091909155600c80548492906139a7908490616d64565b90915550505b336000818152602081815260409182902054600b54600c548451888152938401899052838501929092526060830152608082015290517f129df1612e41e026fe9fcc6eb01bb19fa4d96c11a8597fdd777f9798d21053389181900360a00190a250506110346001600555565b613a21614f34565b60075473ffffffffffffffffffffffffffffffffffffffff161580613ae35750600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b158015613aa957600080fd5b505afa158015613abd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ae19190616324565b155b613b49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c2a565b60008181526012602052604090205473ffffffffffffffffffffffffffffffffffffffff163314613bd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4272696467655661756c743a206e6f742066726f6d206f776e657200000000006044820152606401610c2a565b600460008281526013602052604090205460ff166006811115613bfb57613bfb617103565b14613c88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4272696467655661756c743a2063616e63656c6c6174696f6e206e6f7420617060448201527f70726f76656400000000000000000000000000000000000000000000000000006064820152608401610c2a565b600081815260136020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660051790556014909152902054613cd39061553a565b600a6000828254613ce49190616f1e565b9091555050600081815260146020526040902054613d3b9073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016903390615268565b600a5460405133917f1a2d5de6fd207698efd8e378391657cb785c739e50cd0404749fac0eedaf3a4b91613d7791858252602082015260400190565b60405180910390a26110346001600555565b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606085811b8216602084015246603484015230901b166054820152606881018390526088810182905260009060a8016112cd565b60075460009073ffffffffffffffffffffffffffffffffffffffff161580613ea65750600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b158015613e6c57600080fd5b505afa158015613e80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613ea49190616324565b155b613f0c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c2a565b6008546040517f3d54c44700000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff90911690633d54c4479060240160206040518083038186803b158015613f7557600080fd5b505afa158015613f89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613fad9190616324565b614013576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4e6f742066726f6d20617070726f7665642061646472657373000000000000006044820152606401610c2a565b61401b614817565b614029906020850135616d64565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b1580156140ae57600080fd5b505afa1580156140c2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906140e69190616442565b101561414e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f696e73756666696369656e7420616d6f756e74000000000000000000000000006044820152606401610c2a565b61416661416036859003850185616488565b836156d3565b9392505050565b60075473ffffffffffffffffffffffffffffffffffffffff16158061422f5750600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b1580156141f557600080fd5b505afa158015614209573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061422d9190616324565b155b614295576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c2a565b60006142a2338484613d89565b90506000808281526015602052604090205460ff1660068111156142c8576142c8617103565b1461432f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4272696467655661756c743a206e6f7420612070656e64696e67206f726465726044820152606401610c2a565b60008181526015602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600317905590518281528391859133917fa065d03beae5e82c80ed9f4455ae991084cfd41fa890fd5285f298f04665a7e4910160405180910390a4505050565b60075473ffffffffffffffffffffffffffffffffffffffff1615806144675750600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561442d57600080fd5b505afa158015614441573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906144659190616324565b155b6144cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c2a565b6000601084815481106144e2576144e2617132565b600091825260209091206006909102019050600160008581526013602052604090205460ff16600681111561451957614519617103565b14806145475750600660008581526013602052604090205460ff16600681111561454557614545617103565b145b6145d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4272696467655661756c743a2063616e63656c206e6f7420726571756573746560448201527f64000000000000000000000000000000000000000000000000000000000000006064820152608401610c2a565b6008546040517f0fa0c7f800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301526000928392839290911690630fa0c7f89060240160c06040518083038186803b15801561466557600080fd5b505afa158015614679573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061469d91906163cf565b50945094509450505060006146b28484610b3c565b905060006146df8b8b6146c68c8c8c614853565b858a60010154670de0b6b3a764000061190b9190616ee1565b509050600060108a815481106146f7576146f7617132565b9060005260206000209060060201600101549050600089156147645761471d8986616d64565b90506147298183616f92565b91506147348161553a565b600a60008282546147459190616f1e565b9250508190555080600d600082825461475e9190616d64565b90915550505b60008b8152601460209081526040808320859055601390915290208054600491907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660018302179055503373ffffffffffffffffffffffffffffffffffffffff168b7facf66daa017de96293704c3984049e12467a31382df2706bb4ecb2024f1d4a87858d600a54600d546040516148009493929190616a37565b60405180910390a350505050505050505050505050565b600061484e600a54614844600d54600c54600b546148359190616d64565b61483f9190616d64565b61553a565b610bc09190616cf0565b905090565b6000466040805160208101929092527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b16908201526054810185905283151560f81b6074820152607581018390526095016112cd565b60006148b7614817565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b15801561493c57600080fd5b505afa158015614950573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906149749190616442565b61497e9190616f92565b905080600d60008282546149929190616d64565b9091555050600d546040805183815260208101929092527fcf2aa50876cdfbb541206f89af0ee78d44a2abf8d328e37fa4917f982149848a91016117f7565b73ffffffffffffffffffffffffffffffffffffffff8316614a73576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610c2a565b73ffffffffffffffffffffffffffffffffffffffff8216614b16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610c2a565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146119f75781811015614c48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610c2a565b6119f784848484036149d1565b73ffffffffffffffffffffffffffffffffffffffff8316614cf8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610c2a565b73ffffffffffffffffffffffffffffffffffffffff8216614d9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610c2a565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015614e51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610c2a565b73ffffffffffffffffffffffffffffffffffffffff848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36119f7565b600080821215614f30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f76616c7565203c203000000000000000000000000000000000000000000000006044820152606401610c2a565b5090565b60026005541415614fa1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c2a565b6002600555565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b15801561503057600080fd5b505afa158015615044573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906150689190616442565b90506150ac73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016843085615af3565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b15801561513357600080fd5b505afa158015615147573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061516b9190616442565b6141669190616f92565b73ffffffffffffffffffffffffffffffffffffffff82166151f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610c2a565b80600260008282546152049190616d64565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261533c9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152615b51565b505050565b6009546040517f30fed779000000000000000000000000000000000000000000000000000000008152606091600091829173ffffffffffffffffffffffffffffffffffffffff16906330fed779906153a39033908b908b908b90600401616816565b600060405180830381600087803b1580156153bd57600080fd5b505af11580156153d1573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526154179190810190616589565b94509250905083821015806154ca5750600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663414016d86040518163ffffffff1660e01b815260040160206040518083038186803b15801561548f57600080fd5b505afa1580156154a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906154c79190616442565b81145b615530576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4272696467655661756c743a206e6f7420656e6f756768207374616b657300006044820152606401610c2a565b5094509492505050565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821115614f30576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f76616c7565203e20696e743235362e6d617800000000000000000000000000006044820152606401610c2a565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e9060440160206040518083038186803b15801561563857600080fd5b505afa15801561564c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906156709190616442565b61567a9190616d64565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506119f79085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016152ba565b601080546001808201835560009283528451600683027f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae672810191909155602080870180517f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6738401556040808901517f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6748501805473ffffffffffffffffffffffffffffffffffffffff9283167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560608b01517f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae67587015560808b01517f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6768701805491909316911617905560a08901517f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae677909401939093558486526013909152932080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055905161586d9061553a565b600a600082825461587e9190616cf0565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16817fb6f9148b30582b9f81ec18599e521211dbab4e2e050a05e1ba838a23a46abb2885600a546040516158d0929190616b06565b60405180910390a3600081815260126020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9390931692909217909155919050565b73ffffffffffffffffffffffffffffffffffffffff82166159d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610c2a565b73ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604090205481811015615a88576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610c2a565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526119f79085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016152ba565b6000615bb3826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16615c5d9092919063ffffffff16565b80519091501561533c5780806020019051810190615bd19190616324565b61533c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610c2a565b6060615c6c8484600085615c74565b949350505050565b606082471015615d06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610c2a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051615d2f919061670c565b60006040518083038185875af1925050503d8060008114615d6c576040519150601f19603f3d011682016040523d82523d6000602084013e615d71565b606091505b5091509150615d8287838387615d8d565b979650505050505050565b60608315615e20578251615e195773ffffffffffffffffffffffffffffffffffffffff85163b615e19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c2a565b5081615c6c565b615c6c8383815115615e355781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2a9190616aa7565b60008083601f840112615e7b57600080fd5b50813567ffffffffffffffff811115615e9357600080fd5b6020830191508360208260051b8501011115615eae57600080fd5b9250929050565b600082601f830112615ec657600080fd5b81516020615edb615ed683616ccc565b616c7d565b80838252828201915082860187848660051b8901011115615efb57600080fd5b60005b85811015615f1a57815184529284019290840190600101615efe565b5090979650505050505050565b600060c08284031215615f3957600080fd5b50919050565b600060208284031215615f5157600080fd5b813561416681617258565b600060208284031215615f6e57600080fd5b815161416681617258565b60008060408385031215615f8c57600080fd5b8235615f9781617258565b91506020830135615fa781617258565b809150509250929050565b600080600060608486031215615fc757600080fd5b8351615fd281617258565b6020850151909350615fe381617258565b6040850151909250615ff481617258565b809150509250925092565b60008060006060848603121561601457600080fd5b833561601f81617258565b9250602084013561602f81617258565b929592945050506040919091013590565b6000806040838503121561605357600080fd5b823561605e81617258565b946020939093013593505050565b60008060006060848603121561608157600080fd5b833561608c81617258565b95602085013595506040909401359392505050565b600080604083850312156160b457600080fd5b825167ffffffffffffffff808211156160cc57600080fd5b818501915085601f8301126160e057600080fd5b815160206160f0615ed683616ccc565b8083825282820191508286018a848660051b890101111561611057600080fd5b600096505b8487101561613c57805161612881617258565b835260019690960195918301918301616115565b509188015191965090935050508082111561615657600080fd5b5061616385828601615eb5565b9150509250929050565b60008060008060008060008060006101808a8c03121561618c57600080fd5b893567ffffffffffffffff808211156161a457600080fd5b6161b08d838e01615e69565b909b50995060208c013591506161c582617258565b90975060408b0135965060608b0135955060808b0135945060a08b013590808211156161f057600080fd5b506161fd8c828d01615e69565b909450925061621190508b60c08c01615f27565b90509295985092959850929598565b60008060006040848603121561623557600080fd5b833567ffffffffffffffff81111561624c57600080fd5b61625886828701615e69565b909790965060209590950135949350505050565b60008060008060006080868803121561628457600080fd5b853567ffffffffffffffff81111561629b57600080fd5b6162a788828901615e69565b9096509450506020860135925060408601356162c28161727a565b949793965091946060013592915050565b600080600080606085870312156162e957600080fd5b843567ffffffffffffffff81111561630057600080fd5b61630c87828801615e69565b90989097506020870135966040013595509350505050565b60006020828403121561633657600080fd5b81516141668161727a565b60006020828403121561635357600080fd5b5035919050565b600080600080600080610140878903121561637457600080fd5b863595506020870135945061638c8860408901615f27565b9350610100870135925061012087013567ffffffffffffffff8111156163b157600080fd5b6163bd89828a01615e69565b979a9699509497509295939492505050565b60008060008060008060c087890312156163e857600080fd5b86516163f381617258565b602088015190965061640481617258565b604088015190955061641581617258565b606088015190945061642681617258565b809350506080870151915060a087015190509295509295509295565b60006020828403121561645457600080fd5b5051919050565b60008060e0838503121561646e57600080fd5b6164788484615f27565b915060c0830135615fa781617258565b600060c0828403121561649a57600080fd5b60405160c0810181811067ffffffffffffffff821117156164bd576164bd617161565b8060405250823581526020830135602082015260408301356164de81617258565b60408201526060838101359082015260808301356164fb81617258565b608082015260a0928301359281019290925250919050565b60008060006060848603121561652857600080fd5b83359250602084013561602f8161727a565b60008060e0838503121561654d57600080fd5b8235915061655e8460208501615f27565b90509250929050565b6000806040838503121561657a57600080fd5b50508035926020909101359150565b60008060006060848603121561659e57600080fd5b8351925060208401519150604084015167ffffffffffffffff8111156165c357600080fd5b6165cf86828701615eb5565b9150509250925092565b8183526000602080850194508260005b858110156166245781356165fc81617258565b73ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016165e9565b509495945050505050565b600081518084526020808501945080840160005b8381101561662457815187529582019590820190600101616643565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b803582526020810135602083015260408101356166c481617258565b73ffffffffffffffffffffffffffffffffffffffff808216604085015260608301356060850152608083013591506166fb82617258565b16608083015260a090810135910152565b6000825161671e818460208701616fa9565b9190910192915050565b8c8152600060207fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808f60601b16828501528d60348501528c60548501528b6074850152808b60601b166094850152508860a88401528760c884015260e883018760005b888110156167c757813561679f81617258565b73ffffffffffffffffffffffffffffffffffffffff168352918301919083019060010161678c565b50506167f7818760601b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169052565b84601482015260348101925050509d9c50505050505050505050505050565b60006060820173ffffffffffffffffffffffffffffffffffffffff8716835260206060818501528186835260808501905060808760051b86010192508760005b88811015616900577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8087860301835281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18b36030181126168b757600080fd5b8a01803567ffffffffffffffff8111156168d057600080fd5b8036038c13156168df57600080fd5b6168ec878288850161665f565b965050509183019190830190600101616856565b5050505060409290920192909252949350505050565b6020808252825182820181905260009190848201906040850190845b818110156169a9576169968385518051825260208101516020830152604081015173ffffffffffffffffffffffffffffffffffffffff808216604085015260608301516060850152806080840151166080850152505060a081015160a08301525050565b9284019260c09290920191600101616932565b50909695505050505050565b602081526000614166602083018461662f565b60006101a08083526169dc8184018c61662f565b91505073ffffffffffffffffffffffffffffffffffffffff89166020830152876040830152616a0e60608301886166a8565b856101208301528461014083015283610160830152826101808301529998505050505050505050565b608081526000616a4a608083018761662f565b9415156020830152506040810192909252606090910152919050565b6020810160078310616aa1577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b91905290565b6020815260008251806020840152616ac6816040850160208701616fa9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60c08101610a4e82846166a8565b60e08101616b6582858051825260208101516020830152604081015173ffffffffffffffffffffffffffffffffffffffff808216604085015260608301516060850152806080840151166080850152505060a081015160a08301525050565b8260c08301529392505050565b87815286602082015260e060408201526000616b9260e0830187896165d9565b73ffffffffffffffffffffffffffffffffffffffff958616606084015293909416608082015260a081019190915280820360c090910152600481527f3078303000000000000000000000000000000000000000000000000000000000602082015260400195945050505050565b86815285602082015260c060408201526000616c1f60c0830186886165d9565b73ffffffffffffffffffffffffffffffffffffffff8516606084015283608084015282810360a084015261289e81600481527f3078303000000000000000000000000000000000000000000000000000000000602082015260400190565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715616cc457616cc4617161565b604052919050565b600067ffffffffffffffff821115616ce657616ce6617161565b5060051b60200190565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03841381151615616d2a57616d2a6170d4565b827f8000000000000000000000000000000000000000000000000000000000000000038412811615616d5e57616d5e6170d4565b50500190565b60008219821115616d7757616d776170d4565b500190565b600082616db2577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b600181815b80851115616e1057817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115616df657616df66170d4565b80851615616e0357918102915b93841c9390800290616dbc565b509250929050565b600061416660ff841683600082616e3157506001610a4e565b81616e3e57506000610a4e565b8160018114616e545760028114616e5e57616e7a565b6001915050610a4e565b60ff841115616e6f57616e6f6170d4565b50506001821b610a4e565b5060208310610133831016604e8410600b8410161715616e9d575081810a610a4e565b616ea78383616db7565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115616ed957616ed96170d4565b029392505050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615616f1957616f196170d4565b500290565b6000808312837f800000000000000000000000000000000000000000000000000000000000000001831281151615616f5857616f586170d4565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615616f8c57616f8c6170d4565b50500390565b600082821015616fa457616fa46170d4565b500390565b60005b83811015616fc4578181015183820152602001616fac565b838111156119f75750506000910152565b600181811c90821680616fe957607f821691505b60208210811415615f39577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415617055576170556170d4565b5060010190565b60007f800000000000000000000000000000000000000000000000000000000000000082141561708e5761708e6170d4565b5060000390565b60008160000b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808114156170cb576170cb6170d4565b60000392915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b813581556020820135600182015560408201356171ac81617258565b6002820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790555060608201356003820155608082013561720781617258565b6004820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790555060a082013560058201555050565b73ffffffffffffffffffffffffffffffffffffffff8116811461103457600080fd5b801515811461103457600080fdfea26469706673582212200654eb72453ee3ab6bd6f392975fb8eb32ab778ff25dbac02c679c8922f744a864736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVault.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVault.json.ts"], function (require, exports, eth_contract_7, OSWAP_BridgeVault_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_BridgeVault = void 0;
    class OSWAP_BridgeVault extends eth_contract_7.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_BridgeVault_json_1.default.abi, OSWAP_BridgeVault_json_1.default.bytecode);
            this.assign();
        }
        deploy(params) {
            return this.__deploy([params.vaultRegistry, params.configStore, params.asset]);
        }
        parseAddLiquidityEvent(receipt) {
            return this.parseEvents(receipt, "AddLiquidity").map(e => this.decodeAddLiquidityEvent(e));
        }
        decodeAddLiquidityEvent(event) {
            let result = event.data;
            return {
                provider: result.provider,
                amount: new eth_contract_7.BigNumber(result.amount),
                mintAmount: new eth_contract_7.BigNumber(result.mintAmount),
                newBalance: new eth_contract_7.BigNumber(result.newBalance),
                newLpAssetBalance: new eth_contract_7.BigNumber(result.newLpAssetBalance),
                _event: event
            };
        }
        parseAmendOrderRequestEvent(receipt) {
            return this.parseEvents(receipt, "AmendOrderRequest").map(e => this.decodeAmendOrderRequestEvent(e));
        }
        decodeAmendOrderRequestEvent(event) {
            let result = event.data;
            return {
                orderId: new eth_contract_7.BigNumber(result.orderId),
                amendment: new eth_contract_7.BigNumber(result.amendment),
                order: {
                    peerChain: new eth_contract_7.BigNumber(result.order.peerChain),
                    inAmount: new eth_contract_7.BigNumber(result.order.inAmount),
                    outToken: result.order.outToken,
                    minOutAmount: new eth_contract_7.BigNumber(result.order.minOutAmount),
                    to: result.order.to,
                    expire: new eth_contract_7.BigNumber(result.order.expire)
                },
                _event: event
            };
        }
        parseApprovalEvent(receipt) {
            return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
        }
        decodeApprovalEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                spender: result.spender,
                value: new eth_contract_7.BigNumber(result.value),
                _event: event
            };
        }
        parseNewOrderEvent(receipt) {
            return this.parseEvents(receipt, "NewOrder").map(e => this.decodeNewOrderEvent(e));
        }
        decodeNewOrderEvent(event) {
            let result = event.data;
            return {
                orderId: new eth_contract_7.BigNumber(result.orderId),
                owner: result.owner,
                order: {
                    peerChain: new eth_contract_7.BigNumber(result.order.peerChain),
                    inAmount: new eth_contract_7.BigNumber(result.order.inAmount),
                    outToken: result.order.outToken,
                    minOutAmount: new eth_contract_7.BigNumber(result.order.minOutAmount),
                    to: result.order.to,
                    expire: new eth_contract_7.BigNumber(result.order.expire)
                },
                newImbalance: new eth_contract_7.BigNumber(result.newImbalance),
                _event: event
            };
        }
        parseOrderCanceledEvent(receipt) {
            return this.parseEvents(receipt, "OrderCanceled").map(e => this.decodeOrderCanceledEvent(e));
        }
        decodeOrderCanceledEvent(event) {
            let result = event.data;
            return {
                orderId: new eth_contract_7.BigNumber(result.orderId),
                sender: result.sender,
                signers: result.signers.map(e => new eth_contract_7.BigNumber(e)),
                canceledByOrderOwner: result.canceledByOrderOwner,
                newImbalance: new eth_contract_7.BigNumber(result.newImbalance),
                newProtocolFeeBalance: new eth_contract_7.BigNumber(result.newProtocolFeeBalance),
                _event: event
            };
        }
        parseRebalanceEvent(receipt) {
            return this.parseEvents(receipt, "Rebalance").map(e => this.decodeRebalanceEvent(e));
        }
        decodeRebalanceEvent(event) {
            let result = event.data;
            return {
                rebalancer: result.rebalancer,
                amount: new eth_contract_7.BigNumber(result.amount),
                newImbalance: new eth_contract_7.BigNumber(result.newImbalance),
                _event: event
            };
        }
        parseRemoveLiquidityEvent(receipt) {
            return this.parseEvents(receipt, "RemoveLiquidity").map(e => this.decodeRemoveLiquidityEvent(e));
        }
        decodeRemoveLiquidityEvent(event) {
            let result = event.data;
            return {
                provider: result.provider,
                amount: new eth_contract_7.BigNumber(result.amount),
                newPendingWithdrawal: new eth_contract_7.BigNumber(result.newPendingWithdrawal),
                _event: event
            };
        }
        parseRemoveLiquidityRequestEvent(receipt) {
            return this.parseEvents(receipt, "RemoveLiquidityRequest").map(e => this.decodeRemoveLiquidityRequestEvent(e));
        }
        decodeRemoveLiquidityRequestEvent(event) {
            let result = event.data;
            return {
                provider: result.provider,
                amount: new eth_contract_7.BigNumber(result.amount),
                burnAmount: new eth_contract_7.BigNumber(result.burnAmount),
                newBalance: new eth_contract_7.BigNumber(result.newBalance),
                newLpAssetBalance: new eth_contract_7.BigNumber(result.newLpAssetBalance),
                newPendingWithdrawal: new eth_contract_7.BigNumber(result.newPendingWithdrawal),
                _event: event
            };
        }
        parseRequestCancelOrderEvent(receipt) {
            return this.parseEvents(receipt, "RequestCancelOrder").map(e => this.decodeRequestCancelOrderEvent(e));
        }
        decodeRequestCancelOrderEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                sourceChainId: new eth_contract_7.BigNumber(result.sourceChainId),
                orderId: new eth_contract_7.BigNumber(result.orderId),
                hashedOrderId: result.hashedOrderId,
                _event: event
            };
        }
        parseSwapEvent(receipt) {
            return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
        }
        decodeSwapEvent(event) {
            let result = event.data;
            return {
                orderId: new eth_contract_7.BigNumber(result.orderId),
                sender: result.sender,
                signers: result.signers.map(e => new eth_contract_7.BigNumber(e)),
                owner: result.owner,
                amendment: new eth_contract_7.BigNumber(result.amendment),
                order: {
                    peerChain: new eth_contract_7.BigNumber(result.order.peerChain),
                    inAmount: new eth_contract_7.BigNumber(result.order.inAmount),
                    outToken: result.order.outToken,
                    minOutAmount: new eth_contract_7.BigNumber(result.order.minOutAmount),
                    to: result.order.to,
                    expire: new eth_contract_7.BigNumber(result.order.expire)
                },
                outAmount: new eth_contract_7.BigNumber(result.outAmount),
                newImbalance: new eth_contract_7.BigNumber(result.newImbalance),
                newLpAssetBalance: new eth_contract_7.BigNumber(result.newLpAssetBalance),
                newProtocolFeeBalance: new eth_contract_7.BigNumber(result.newProtocolFeeBalance),
                _event: event
            };
        }
        parseSyncEvent(receipt) {
            return this.parseEvents(receipt, "Sync").map(e => this.decodeSyncEvent(e));
        }
        decodeSyncEvent(event) {
            let result = event.data;
            return {
                excess: new eth_contract_7.BigNumber(result.excess),
                newProtocolFeeBalance: new eth_contract_7.BigNumber(result.newProtocolFeeBalance),
                _event: event
            };
        }
        parseTransferEvent(receipt) {
            return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
        }
        decodeTransferEvent(event) {
            let result = event.data;
            return {
                from: result.from,
                to: result.to,
                value: new eth_contract_7.BigNumber(result.value),
                _event: event
            };
        }
        parseUpdateConfigStoreEvent(receipt) {
            return this.parseEvents(receipt, "UpdateConfigStore").map(e => this.decodeUpdateConfigStoreEvent(e));
        }
        decodeUpdateConfigStoreEvent(event) {
            let result = event.data;
            return {
                newConfigStore: result.newConfigStore,
                _event: event
            };
        }
        parseUpdateTrollRegistryEvent(receipt) {
            return this.parseEvents(receipt, "UpdateTrollRegistry").map(e => this.decodeUpdateTrollRegistryEvent(e));
        }
        decodeUpdateTrollRegistryEvent(event) {
            let result = event.data;
            return {
                newTrollRegistry: result.newTrollRegistry,
                _event: event
            };
        }
        parseVoidOrderEvent(receipt) {
            return this.parseEvents(receipt, "VoidOrder").map(e => this.decodeVoidOrderEvent(e));
        }
        decodeVoidOrderEvent(event) {
            let result = event.data;
            return {
                orderId: result.orderId,
                sender: result.sender,
                signers: result.signers.map(e => new eth_contract_7.BigNumber(e)),
                _event: event
            };
        }
        parseWithdrawUnexecutedOrderEvent(receipt) {
            return this.parseEvents(receipt, "WithdrawUnexecutedOrder").map(e => this.decodeWithdrawUnexecutedOrderEvent(e));
        }
        decodeWithdrawUnexecutedOrderEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                orderId: new eth_contract_7.BigNumber(result.orderId),
                newImbalance: new eth_contract_7.BigNumber(result.newImbalance),
                _event: event
            };
        }
        parseWithdrawlTrollFeeEvent(receipt) {
            return this.parseEvents(receipt, "WithdrawlTrollFee").map(e => this.decodeWithdrawlTrollFeeEvent(e));
        }
        decodeWithdrawlTrollFeeEvent(event) {
            let result = event.data;
            return {
                feeTo: result.feeTo,
                amount: new eth_contract_7.BigNumber(result.amount),
                newProtocolFeeBalance: new eth_contract_7.BigNumber(result.newProtocolFeeBalance),
                _event: event
            };
        }
        assign() {
            let allowanceParams = (params) => [params.owner, params.spender];
            let allowance_call = async (params) => {
                let result = await this.call('allowance', allowanceParams(params));
                return new eth_contract_7.BigNumber(result);
            };
            this.allowance = allowance_call;
            let asset_call = async () => {
                let result = await this.call('asset');
                return result;
            };
            this.asset = asset_call;
            let assetDecimalsScale_call = async () => {
                let result = await this.call('assetDecimalsScale');
                return new eth_contract_7.BigNumber(result);
            };
            this.assetDecimalsScale = assetDecimalsScale_call;
            let assetPriceAgainstGovTokenParams = (params) => [params.govTokenOracle, params.assetTokenOracle];
            let assetPriceAgainstGovToken_call = async (params) => {
                let result = await this.call('assetPriceAgainstGovToken', assetPriceAgainstGovTokenParams(params));
                return new eth_contract_7.BigNumber(result);
            };
            this.assetPriceAgainstGovToken = assetPriceAgainstGovToken_call;
            let balanceOf_call = async (account) => {
                let result = await this.call('balanceOf', [account]);
                return new eth_contract_7.BigNumber(result);
            };
            this.balanceOf = balanceOf_call;
            let configStore_call = async () => {
                let result = await this.call('configStore');
                return result;
            };
            this.configStore = configStore_call;
            let decimals_call = async () => {
                let result = await this.call('decimals');
                return new eth_contract_7.BigNumber(result);
            };
            this.decimals = decimals_call;
            let getChainId_call = async () => {
                let result = await this.call('getChainId');
                return new eth_contract_7.BigNumber(result);
            };
            this.getChainId = getChainId_call;
            let getOrdersParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
            let getOrders_call = async (params) => {
                let result = await this.call('getOrders', getOrdersParams(params));
                return (result.map(e => ({
                    peerChain: new eth_contract_7.BigNumber(e.peerChain),
                    inAmount: new eth_contract_7.BigNumber(e.inAmount),
                    outToken: e.outToken,
                    minOutAmount: new eth_contract_7.BigNumber(e.minOutAmount),
                    to: e.to,
                    expire: new eth_contract_7.BigNumber(e.expire)
                })));
            };
            this.getOrders = getOrders_call;
            let govToken_call = async () => {
                let result = await this.call('govToken');
                return result;
            };
            this.govToken = govToken_call;
            let hashCancelOrderParamsParams = (params) => [this.wallet.utils.toString(params.orderId), params.canceledByOrderOwner, this.wallet.utils.toString(params.protocolFee)];
            let hashCancelOrderParams_call = async (params) => {
                let result = await this.call('hashCancelOrderParams', hashCancelOrderParamsParams(params));
                return result;
            };
            this.hashCancelOrderParams = hashCancelOrderParams_call;
            let hashOrderParams = (params) => [params.owner, this.wallet.utils.toString(params.sourceChainId), this.wallet.utils.toString(params.orderId)];
            let hashOrder_call = async (params) => {
                let result = await this.call('hashOrder', hashOrderParams(params));
                return result;
            };
            this.hashOrder = hashOrder_call;
            let hashSwapParamsParams = (params) => [this.wallet.utils.stringToBytes32(params.orderId), this.wallet.utils.toString(params.amendment), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)], this.wallet.utils.toString(params.protocolFee), params.pair];
            let hashSwapParams_call = async (params) => {
                let result = await this.call('hashSwapParams', hashSwapParamsParams(params));
                return result;
            };
            this.hashSwapParams = hashSwapParams_call;
            let hashVoidOrderParams_call = async (orderId) => {
                let result = await this.call('hashVoidOrderParams', [this.wallet.utils.stringToBytes32(orderId)]);
                return result;
            };
            this.hashVoidOrderParams = hashVoidOrderParams_call;
            let hashWithdrawParamsParams = (params) => [params.owner, this.wallet.utils.toString(params.amount), this.wallet.utils.toString(params.nonce)];
            let hashWithdrawParams_call = async (params) => {
                let result = await this.call('hashWithdrawParams', hashWithdrawParamsParams(params));
                return result;
            };
            this.hashWithdrawParams = hashWithdrawParams_call;
            let imbalance_call = async () => {
                let result = await this.call('imbalance');
                return new eth_contract_7.BigNumber(result);
            };
            this.imbalance = imbalance_call;
            let lastKnownBalance_call = async () => {
                let result = await this.call('lastKnownBalance');
                return new eth_contract_7.BigNumber(result);
            };
            this.lastKnownBalance = lastKnownBalance_call;
            let lpAssetBalance_call = async () => {
                let result = await this.call('lpAssetBalance');
                return new eth_contract_7.BigNumber(result);
            };
            this.lpAssetBalance = lpAssetBalance_call;
            let name_call = async () => {
                let result = await this.call('name');
                return result;
            };
            this.name = name_call;
            let orderAmendmentsParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let orderAmendments_call = async (params) => {
                let result = await this.call('orderAmendments', orderAmendmentsParams(params));
                return {
                    peerChain: new eth_contract_7.BigNumber(result.peerChain),
                    inAmount: new eth_contract_7.BigNumber(result.inAmount),
                    outToken: result.outToken,
                    minOutAmount: new eth_contract_7.BigNumber(result.minOutAmount),
                    to: result.to,
                    expire: new eth_contract_7.BigNumber(result.expire)
                };
            };
            this.orderAmendments = orderAmendments_call;
            let orderAmendmentsLength_call = async (orderId) => {
                let result = await this.call('orderAmendmentsLength', [this.wallet.utils.toString(orderId)]);
                return new eth_contract_7.BigNumber(result);
            };
            this.orderAmendmentsLength = orderAmendmentsLength_call;
            let orderOwner_call = async (param1) => {
                let result = await this.call('orderOwner', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.orderOwner = orderOwner_call;
            let orderRefunds_call = async (param1) => {
                let result = await this.call('orderRefunds', [this.wallet.utils.toString(param1)]);
                return new eth_contract_7.BigNumber(result);
            };
            this.orderRefunds = orderRefunds_call;
            let orderStatus_call = async (param1) => {
                let result = await this.call('orderStatus', [this.wallet.utils.toString(param1)]);
                return new eth_contract_7.BigNumber(result);
            };
            this.orderStatus = orderStatus_call;
            let orders_call = async (param1) => {
                let result = await this.call('orders', [this.wallet.utils.toString(param1)]);
                return {
                    peerChain: new eth_contract_7.BigNumber(result.peerChain),
                    inAmount: new eth_contract_7.BigNumber(result.inAmount),
                    outToken: result.outToken,
                    minOutAmount: new eth_contract_7.BigNumber(result.minOutAmount),
                    to: result.to,
                    expire: new eth_contract_7.BigNumber(result.expire)
                };
            };
            this.orders = orders_call;
            let ordersLength_call = async () => {
                let result = await this.call('ordersLength');
                return new eth_contract_7.BigNumber(result);
            };
            this.ordersLength = ordersLength_call;
            let pendingWithdrawalAmount_call = async (param1) => {
                let result = await this.call('pendingWithdrawalAmount', [param1]);
                return new eth_contract_7.BigNumber(result);
            };
            this.pendingWithdrawalAmount = pendingWithdrawalAmount_call;
            let pendingWithdrawalTimeout_call = async (param1) => {
                let result = await this.call('pendingWithdrawalTimeout', [param1]);
                return new eth_contract_7.BigNumber(result);
            };
            this.pendingWithdrawalTimeout = pendingWithdrawalTimeout_call;
            let protocolFeeBalance_call = async () => {
                let result = await this.call('protocolFeeBalance');
                return new eth_contract_7.BigNumber(result);
            };
            this.protocolFeeBalance = protocolFeeBalance_call;
            let swapOrderStatus_call = async (param1) => {
                let result = await this.call('swapOrderStatus', [this.wallet.utils.stringToBytes32(param1)]);
                return new eth_contract_7.BigNumber(result);
            };
            this.swapOrderStatus = swapOrderStatus_call;
            let symbol_call = async () => {
                let result = await this.call('symbol');
                return result;
            };
            this.symbol = symbol_call;
            let totalPendingWithdrawal_call = async () => {
                let result = await this.call('totalPendingWithdrawal');
                return new eth_contract_7.BigNumber(result);
            };
            this.totalPendingWithdrawal = totalPendingWithdrawal_call;
            let totalSupply_call = async () => {
                let result = await this.call('totalSupply');
                return new eth_contract_7.BigNumber(result);
            };
            this.totalSupply = totalSupply_call;
            let trollRegistry_call = async () => {
                let result = await this.call('trollRegistry');
                return result;
            };
            this.trollRegistry = trollRegistry_call;
            let vaultRegistry_call = async () => {
                let result = await this.call('vaultRegistry');
                return result;
            };
            this.vaultRegistry = vaultRegistry_call;
            let addLiquidity_send = async (amount) => {
                let result = await this.send('addLiquidity', [this.wallet.utils.toString(amount)]);
                return result;
            };
            let addLiquidity_call = async (amount) => {
                let result = await this.call('addLiquidity', [this.wallet.utils.toString(amount)]);
                return;
            };
            this.addLiquidity = Object.assign(addLiquidity_send, {
                call: addLiquidity_call
            });
            let approveParams = (params) => [params.spender, this.wallet.utils.toString(params.amount)];
            let approve_send = async (params) => {
                let result = await this.send('approve', approveParams(params));
                return result;
            };
            let approve_call = async (params) => {
                let result = await this.call('approve', approveParams(params));
                return result;
            };
            this.approve = Object.assign(approve_send, {
                call: approve_call
            });
            let cancelOrderParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.orderId), params.canceledByOrderOwner, this.wallet.utils.toString(params.protocolFee)];
            let cancelOrder_send = async (params) => {
                let result = await this.send('cancelOrder', cancelOrderParams(params));
                return result;
            };
            let cancelOrder_call = async (params) => {
                let result = await this.call('cancelOrder', cancelOrderParams(params));
                return;
            };
            this.cancelOrder = Object.assign(cancelOrder_send, {
                call: cancelOrder_call
            });
            let decreaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.subtractedValue)];
            let decreaseAllowance_send = async (params) => {
                let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params));
                return result;
            };
            let decreaseAllowance_call = async (params) => {
                let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params));
                return result;
            };
            this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
                call: decreaseAllowance_call
            });
            let increaseAllowanceParams = (params) => [params.spender, this.wallet.utils.toString(params.addedValue)];
            let increaseAllowance_send = async (params) => {
                let result = await this.send('increaseAllowance', increaseAllowanceParams(params));
                return result;
            };
            let increaseAllowance_call = async (params) => {
                let result = await this.call('increaseAllowance', increaseAllowanceParams(params));
                return result;
            };
            this.increaseAllowance = Object.assign(increaseAllowance_send, {
                call: increaseAllowance_call
            });
            let initAddress_send = async (vaultRegistry) => {
                let result = await this.send('initAddress', [vaultRegistry]);
                return result;
            };
            let initAddress_call = async (vaultRegistry) => {
                let result = await this.call('initAddress', [vaultRegistry]);
                return;
            };
            this.initAddress = Object.assign(initAddress_send, {
                call: initAddress_call
            });
            let newOrder_send = async (order) => {
                let result = await this.send('newOrder', [[this.wallet.utils.toString(order.peerChain), this.wallet.utils.toString(order.inAmount), order.outToken, this.wallet.utils.toString(order.minOutAmount), order.to, this.wallet.utils.toString(order.expire)]]);
                return result;
            };
            let newOrder_call = async (order) => {
                let result = await this.call('newOrder', [[this.wallet.utils.toString(order.peerChain), this.wallet.utils.toString(order.inAmount), order.outToken, this.wallet.utils.toString(order.minOutAmount), order.to, this.wallet.utils.toString(order.expire)]]);
                return new eth_contract_7.BigNumber(result);
            };
            this.newOrder = Object.assign(newOrder_send, {
                call: newOrder_call
            });
            let newOrderFromRouterParams = (params) => [[this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)], params.trader];
            let newOrderFromRouter_send = async (params) => {
                let result = await this.send('newOrderFromRouter', newOrderFromRouterParams(params));
                return result;
            };
            let newOrderFromRouter_call = async (params) => {
                let result = await this.call('newOrderFromRouter', newOrderFromRouterParams(params));
                return new eth_contract_7.BigNumber(result);
            };
            this.newOrderFromRouter = Object.assign(newOrderFromRouter_send, {
                call: newOrderFromRouter_call
            });
            let rebalancerDeposit_send = async (assetAmount) => {
                let result = await this.send('rebalancerDeposit', [this.wallet.utils.toString(assetAmount)]);
                return result;
            };
            let rebalancerDeposit_call = async (assetAmount) => {
                let result = await this.call('rebalancerDeposit', [this.wallet.utils.toString(assetAmount)]);
                return;
            };
            this.rebalancerDeposit = Object.assign(rebalancerDeposit_send, {
                call: rebalancerDeposit_call
            });
            let rebalancerWithdrawParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.assetAmount), this.wallet.utils.toString(params.nonce)];
            let rebalancerWithdraw_send = async (params) => {
                let result = await this.send('rebalancerWithdraw', rebalancerWithdrawParams(params));
                return result;
            };
            let rebalancerWithdraw_call = async (params) => {
                let result = await this.call('rebalancerWithdraw', rebalancerWithdrawParams(params));
                return;
            };
            this.rebalancerWithdraw = Object.assign(rebalancerWithdraw_send, {
                call: rebalancerWithdraw_call
            });
            let removeLiquidityParams = (params) => [params.provider, this.wallet.utils.toString(params.assetAmount)];
            let removeLiquidity_send = async (params) => {
                let result = await this.send('removeLiquidity', removeLiquidityParams(params));
                return result;
            };
            let removeLiquidity_call = async (params) => {
                let result = await this.call('removeLiquidity', removeLiquidityParams(params));
                return;
            };
            this.removeLiquidity = Object.assign(removeLiquidity_send, {
                call: removeLiquidity_call
            });
            let removeLiquidityRequest_send = async (lpTokenAmount) => {
                let result = await this.send('removeLiquidityRequest', [this.wallet.utils.toString(lpTokenAmount)]);
                return result;
            };
            let removeLiquidityRequest_call = async (lpTokenAmount) => {
                let result = await this.call('removeLiquidityRequest', [this.wallet.utils.toString(lpTokenAmount)]);
                return;
            };
            this.removeLiquidityRequest = Object.assign(removeLiquidityRequest_send, {
                call: removeLiquidityRequest_call
            });
            let requestAmendOrderParams = (params) => [this.wallet.utils.toString(params.orderId), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
            let requestAmendOrder_send = async (params) => {
                let result = await this.send('requestAmendOrder', requestAmendOrderParams(params));
                return result;
            };
            let requestAmendOrder_call = async (params) => {
                let result = await this.call('requestAmendOrder', requestAmendOrderParams(params));
                return;
            };
            this.requestAmendOrder = Object.assign(requestAmendOrder_send, {
                call: requestAmendOrder_call
            });
            let requestCancelOrderParams = (params) => [this.wallet.utils.toString(params.sourceChainId), this.wallet.utils.toString(params.orderId)];
            let requestCancelOrder_send = async (params) => {
                let result = await this.send('requestCancelOrder', requestCancelOrderParams(params));
                return result;
            };
            let requestCancelOrder_call = async (params) => {
                let result = await this.call('requestCancelOrder', requestCancelOrderParams(params));
                return;
            };
            this.requestCancelOrder = Object.assign(requestCancelOrder_send, {
                call: requestCancelOrder_call
            });
            let swapParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), params.owner, this.wallet.utils.toString(params.orderId), this.wallet.utils.toString(params.amendment), this.wallet.utils.toString(params.protocolFee), params.pair, [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
            let swap_send = async (params) => {
                let result = await this.send('swap', swapParams(params));
                return result;
            };
            let swap_call = async (params) => {
                let result = await this.call('swap', swapParams(params));
                return new eth_contract_7.BigNumber(result);
            };
            this.swap = Object.assign(swap_send, {
                call: swap_call
            });
            let sync_send = async () => {
                let result = await this.send('sync');
                return result;
            };
            let sync_call = async () => {
                let result = await this.call('sync');
                return;
            };
            this.sync = Object.assign(sync_send, {
                call: sync_call
            });
            let transferParams = (params) => [params.to, this.wallet.utils.toString(params.amount)];
            let transfer_send = async (params) => {
                let result = await this.send('transfer', transferParams(params));
                return result;
            };
            let transfer_call = async (params) => {
                let result = await this.call('transfer', transferParams(params));
                return result;
            };
            this.transfer = Object.assign(transfer_send, {
                call: transfer_call
            });
            let transferFromParams = (params) => [params.from, params.to, this.wallet.utils.toString(params.amount)];
            let transferFrom_send = async (params) => {
                let result = await this.send('transferFrom', transferFromParams(params));
                return result;
            };
            let transferFrom_call = async (params) => {
                let result = await this.call('transferFrom', transferFromParams(params));
                return result;
            };
            this.transferFrom = Object.assign(transferFrom_send, {
                call: transferFrom_call
            });
            let updateConfigStore_send = async () => {
                let result = await this.send('updateConfigStore');
                return result;
            };
            let updateConfigStore_call = async () => {
                let result = await this.call('updateConfigStore');
                return;
            };
            this.updateConfigStore = Object.assign(updateConfigStore_send, {
                call: updateConfigStore_call
            });
            let updateTrollRegistry_send = async () => {
                let result = await this.send('updateTrollRegistry');
                return result;
            };
            let updateTrollRegistry_call = async () => {
                let result = await this.call('updateTrollRegistry');
                return;
            };
            this.updateTrollRegistry = Object.assign(updateTrollRegistry_send, {
                call: updateTrollRegistry_call
            });
            let voidOrderParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.stringToBytes32(params.orderId)];
            let voidOrder_send = async (params) => {
                let result = await this.send('voidOrder', voidOrderParams(params));
                return result;
            };
            let voidOrder_call = async (params) => {
                let result = await this.call('voidOrder', voidOrderParams(params));
                return;
            };
            this.voidOrder = Object.assign(voidOrder_send, {
                call: voidOrder_call
            });
            let withdrawUnexecutedOrder_send = async (orderId) => {
                let result = await this.send('withdrawUnexecutedOrder', [this.wallet.utils.toString(orderId)]);
                return result;
            };
            let withdrawUnexecutedOrder_call = async (orderId) => {
                let result = await this.call('withdrawUnexecutedOrder', [this.wallet.utils.toString(orderId)]);
                return;
            };
            this.withdrawUnexecutedOrder = Object.assign(withdrawUnexecutedOrder_send, {
                call: withdrawUnexecutedOrder_call
            });
            let withdrawlTrollFee_send = async (amount) => {
                let result = await this.send('withdrawlTrollFee', [this.wallet.utils.toString(amount)]);
                return result;
            };
            let withdrawlTrollFee_call = async (amount) => {
                let result = await this.call('withdrawlTrollFee', [this.wallet.utils.toString(amount)]);
                return;
            };
            this.withdrawlTrollFee = Object.assign(withdrawlTrollFee_send, {
                call: withdrawlTrollFee_call
            });
        }
    }
    exports.OSWAP_BridgeVault = OSWAP_BridgeVault;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVaultTrollRegistry.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVaultTrollRegistry.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract OSWAP_SideChainTrollRegistry", "name": "_trollRegistry", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "Penalty", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "backer", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "shares", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "backerBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "trollBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalShares", "type": "uint256" }], "name": "Stake", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "backer", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "shares", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "approvalDecrement", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "trollBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "totalShares", "type": "uint256" }], "name": "Unstake", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "backer", "type": "address" }, { "indexed": true, "internalType": "address", "name": "msgSender", "type": "address" }, { "indexed": false, "internalType": "uint256[]", "name": "signers", "type": "uint256[]" }, { "indexed": false, "internalType": "uint256", "name": "shares", "type": "uint256" }], "name": "UnstakeApproval", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "backer", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "shares", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "backerBalance", "type": "uint256" }], "name": "UnstakeRequest", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract OSWAP_ConfigStore", "name": "newConfigStore", "type": "address" }], "name": "UpdateConfigStore", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract OSWAP_SideChainTrollRegistry", "name": "newTrollRegistry", "type": "address" }], "name": "UpdateTrollRegistry", "type": "event" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "backerStakes", "outputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "shares", "type": "uint256" }, { "internalType": "uint256", "name": "pendingWithdrawal", "type": "uint256" }, { "internalType": "uint256", "name": "approvedWithdrawal", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "bridgeVault", "outputs": [{ "internalType": "contract IOSWAP_BridgeVault", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "configStore", "outputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "getBackers", "outputs": [{ "internalType": "address[]", "name": "backers", "type": "address[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "govToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "backer", "type": "address" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "shares", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "hashUnstakeRequest", "outputs": [{ "internalType": "bytes32", "name": "hash", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract IOSWAP_BridgeVault", "name": "_bridgeVault", "type": "address" }], "name": "initAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lastTrollTxCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "backer", "type": "address" }], "name": "maxWithdrawal", "outputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "penalizeSuperTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "stake", "outputs": [{ "internalType": "uint256", "name": "shares", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakedBy", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "address", "name": "", "type": "address" }], "name": "stakedByInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "stakedByLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "transactionsCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "trollRegistry", "outputs": [{ "internalType": "contract OSWAP_SideChainTrollRegistry", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "trollStakesBalances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "trollStakesTotalShares", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "backer", "type": "address" }, { "internalType": "uint256", "name": "shares", "type": "uint256" }], "name": "unstake", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "address", "name": "backer", "type": "address" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "shares", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "unstakeApprove", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "shares", "type": "uint256" }], "name": "unstakeRequest", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "updateConfigStore", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "updateTrollRegistry", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "usedNonce", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "msgSender", "type": "address" }, { "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "bytes32", "name": "paramsHash", "type": "bytes32" }], "name": "verifyStakedValue", "outputs": [{ "internalType": "uint256", "name": "superTrollCount", "type": "uint256" }, { "internalType": "uint256", "name": "totalStake", "type": "uint256" }, { "internalType": "uint256[]", "name": "signers", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b506040516200373f3803806200373f83398101604081905262000034916200018f565b6001600055600380546001600160a01b0319166001600160a01b03831690811790915560408051634eb4ee2760e11b81529051639d69dc4e91600480820192602092909190829003018186803b1580156200008e57600080fd5b505afa158015620000a3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c991906200018f565b600260006101000a8154816001600160a01b0302191690836001600160a01b03160217905550806001600160a01b03166305268cff6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200012957600080fd5b505afa1580156200013e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016491906200018f565b60601b6001600160601b0319166080525060018054336001600160a01b0319909116179055620001cf565b600060208284031215620001a257600080fd5b8151620001af81620001b6565b9392505050565b6001600160a01b0381168114620001cc57600080fd5b50565b60805160601c6135356200020a600039600081816101ad01528181610b7101528181610c1c01528181610c740152611b9601526135356000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c8063842c4835116100ee578063ac03e9f011610097578063c2a672e011610071578063c2a672e0146104ba578063c9168b72146104cd578063e62d51cb146104ed578063fd99a7461461050d57600080fd5b8063ac03e9f014610400578063b5155a1b14610420578063becbab1f1461043357600080fd5b80639682e6c8116100c85780639682e6c8146103785780639886f99a146103cd5780639d69dc4e146103e057600080fd5b8063842c4835146103485780638658dae214610350578063944e86441461037057600080fd5b806336ec587b116101505780637b0472f01161012a5780637b0472f0146102ef5780637b77404414610302578063810129081461031557600080fd5b806336ec587b1461029c5780635a812465146102b15780635e1b7083146102c457600080fd5b806330167bec1161018157806330167bec1461023a5780633043ef751461025a57806330fed7791461027a57600080fd5b806305268cff146101a857806325ba4f8b146101f957806327afd02814610227575b600080fd5b6101cf7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61021961020736600461308e565b60086020526000908152604090205481565b6040519081526020016101f0565b610219610235366004612eb9565b610516565b6003546101cf9073ffffffffffffffffffffffffffffffffffffffff1681565b61021961026836600461308e565b60009081526006602052604090205490565b61028d610288366004612efa565b610578565b6040516101f093929190613259565b6102af6102aa366004612ffb565b610622565b005b6102af6102bf366004612eb9565b61081d565b6102196102d23660046130c0565b600760209081526000928352604080842090915290825290205481565b6102196102fd3660046130e5565b610908565b6101cf6103103660046130e5565b611168565b61033861032336600461308e565b600c6020526000908152604090205460ff1681565b60405190151581526020016101f0565b6102af6111ad565b61021961035e36600461308e565b60096020526000908152604090205481565b6102af611349565b6103ad610386366004612eb9565b60056020526000908152604090208054600182015460028301546003909301549192909184565b6040805194855260208501939093529183015260608201526080016101f0565b6102af6103db36600461308e565b6114de565b6002546101cf9073ffffffffffffffffffffffffffffffffffffffff1681565b6004546101cf9073ffffffffffffffffffffffffffffffffffffffff1681565b6102af61042e3660046130e5565b6116eb565b610219610441366004612fc0565b604080514660208083019190915230606090811b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000009081168486015297901b90961660548201526068810194909452608884019290925260a8808401919091528151808403909101815260c89092019052805191012090565b6102af6104c8366004612f94565b611925565b6104e06104db36600461308e565b611c51565b6040516101f0919061318c565b6102196104fb366004612eb9565b600b6020526000908152604090205481565b610219600a5481565b73ffffffffffffffffffffffffffffffffffffffff811660009081526005602090815260408083208054808552600984528285205460089094529184205460018201549193916105669190613339565b61057091906132fe565b949350505050565b600454600090819060609073ffffffffffffffffffffffffffffffffffffffff163314610606576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f7420617574686f72697a656400000000000000000000000000000000000060448201526064015b60405180910390fd5b61061287878787611cca565b9250925092509450945094915050565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600560205260409020805484146106b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f696e76616c69642074726f6c6c50726f66696c65496e6465780000000000000060448201526064016105fd565b806002015483111561071f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c69642073686172657320616d6f756e74000000000000000000000060448201526064016105fd565b60408051466020808301919091527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b82168486015289901b166054830152606882018790526088820186905260a88083018690528351808403909101815260c890920190925280519101206000906107a29033908a908a90611cca565b92505050838260030160008282546107ba91906132e6565b9091555050604051339073ffffffffffffffffffffffffffffffffffffffff8816907f444d4debec68e4ad79ae18986a68000cafdda9e97e6a878376dfcbd2425af4aa9061080b90859089906131e6565b60405180910390a35050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461084157600080fd5b60045473ffffffffffffffffffffffffffffffffffffffff16156108c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6164647265737320616c7265616479207365740000000000000000000000000060448201526064016105fd565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000610912612486565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561097a57600080fd5b505afa15801561098e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b2919061306c565b15610a19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f504155534544210000000000000000000000000000000000000000000000000060448201526064016105fd565b6003546040517fef9414fc0000000000000000000000000000000000000000000000000000000081526004810185905260009173ffffffffffffffffffffffffffffffffffffffff169063ef9414fc90602401604080518083038186803b158015610a8357600080fd5b505afa158015610a97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abb9190612f56565b915060019050816004811115610ad357610ad3613421565b14610b3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f7420612053757065722054726f6c6c00000000000000000000000000000060448201526064016105fd565b8215610d11576040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b158015610bc857600080fd5b505afa158015610bdc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0091906130a7565b9050610c4473ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163330876124fa565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015281907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a082319060240160206040518083038186803b158015610ccb57600080fd5b505afa158015610cdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0391906130a7565b610d0d9190613376565b9350505b336000908152600560205260409020600181015415610f745780548514610f6f576002810154158015610d4657506003810154155b610dac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f796f7520686176652070656e64696e67207769746864726177616c000000000060448201526064016105fd565b805460008181526009602090815260408083205460089092528220546001850154610dd79190613339565b610de191906132fe565b905080600860008481526020019081526020016000206000828254610e069190613376565b9091555050600183015460008381526009602052604081208054909190610e2e908490613376565b90915550610e3e905081876132e6565b9550610e49826125dc565b60018301546040805191825260006020830152839133917fa6fc50e4af67f0cbdbede0b1a0756dfe52feb4b21c90092faca84a593295e124910160405180910390a360018301546000838152600860209081526040808320546009909252808320549051869433947fb470d40c136d4e4dd05c105682afd4ddae069ed03a4000f90dda3fa791a8e7c194610efa94898552602085019390935260408401919091526060830152608082015260a00190565b60405180910390a350506000858152600660208181526040808420805460078452828620338088529085529286208190559383526001808501825590855291842090920180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169092179091558683558201555b610fd6565b848155600085815260066020818152604080842080546007845282862033808852908552928620819055938352600184018155845292200180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690911790555b60008581526008602052604090205480156110155760008681526009602052604090205481906110069087613339565b61101091906132fe565b611017565b845b935060008411611083576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f616d6f756e7420746f6f20736d616c6c0000000000000000000000000000000060448201526064016105fd565b600086815260096020526040812080548692906110a19084906132e6565b9091555050600086815260086020526040812080548792906110c49084906132e6565b92505081905550838260010160008282546110df91906132e6565b9091555050600182015460008781526008602090815260408083205460098352928190205481518a8152928301899052828201949094526060820192909252608081019290925251879133917f2f7d5e2f3bc7e053f23dbf8061040964cd3b5cd1999f5821bd7e443b4b7776969181900360a00190a35050506111626001600055565b92915050565b6006602052816000526040600020818154811061118457600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff169150829050565b600254604080517fef060951000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163ef060951916004808301926020929190829003018186803b15801561121857600080fd5b505afa15801561122c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112509190612edd565b905073ffffffffffffffffffffffffffffffffffffffff81166112cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f726500000000000000000000000060448201526064016105fd565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f6fa6ee9ec7808d2a9699505042862d79597c4068938b960a4a18d584a2aa3eea906020015b60405180910390a150565b600354604080517fbba588ca000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163bba588ca916004808301926020929190829003018186803b1580156113b457600080fd5b505afa1580156113c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ec9190612edd565b905073ffffffffffffffffffffffffffffffffffffffff811661146b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f726500000000000000000000000060448201526064016105fd565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f2e622d86c9281f3be677f792b9721012fb471d4892cc764f6acd70b50d3907019060200161133e565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561154657600080fd5b505afa15801561155a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061157e919061306c565b156115e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f504155534544210000000000000000000000000000000000000000000000000060448201526064016105fd565b33600090815260056020526040902080548061165d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e6f742061206261636b6572000000000000000000000000000000000000000060448201526064016105fd565b828260010160008282546116719190613376565b925050819055508282600201600082825461168c91906132e6565b909155505060018201546116a3576116a3816125dc565b6001820154604080518581526020810192909252829133917fa6fc50e4af67f0cbdbede0b1a0756dfe52feb4b21c90092faca84a593295e124910160405180910390a3505050565b60035473ffffffffffffffffffffffffffffffffffffffff16331461176c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f742066726f6d20726567697374727900000000000000000000000000000060448201526064016105fd565b6000828152600860205260409020548111156117e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f70656e616c747920657863656564732074726f6c6c2062616c616e636500000060448201526064016105fd565b60008281526008602052604081208054839290611802908490613376565b90915550506000828152600860205260409020546118e75760008281526008602090815260408083208390556009825280832083905560069091528120805490915b818110156118cc5760008382815481106118605761186061347f565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff16808352600582526040808420848155600181018590556002810185905560030184905589845260078352808420918452915281205550806118c4816133b9565b915050611844565b5060008481526006602052604081206118e491612e42565b50505b817f28c619c49605c492d23419d5ffca91159426d25afdf8eec9d22f690c4350a3c58260405161191991815260200190565b60405180910390a25050565b61192d612486565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635c975abb6040518163ffffffff1660e01b815260040160206040518083038186803b15801561199557600080fd5b505afa1580156119a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119cd919061306c565b15611a34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f504155534544210000000000000000000000000000000000000000000000000060448201526064016105fd565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005602052604090206003810154821115611ac7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f616d6f756e7420657863656564656420617070726f76616c000000000000000060448201526064016105fd565b8054600382018054849190600090611ae0908490613376565b9250508190555082826002016000828254611afb9190613376565b90915550506000818152600960209081526040808320546008909252822054611b249086613339565b611b2e91906132fe565b905083600960008481526020019081526020016000206000828254611b539190613376565b909155505060008281526008602052604081208054839290611b76908490613376565b90915550611bbd905073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001686836127c4565b600082815260086020908152604080832054600983529281902054815185815292830188905290820187905260608201929092526080810191909152829073ffffffffffffffffffffffffffffffffffffffff8716907fb470d40c136d4e4dd05c105682afd4ddae069ed03a4000f90dda3fa791a8e7c19060a00160405180910390a3505050611c4d6001600055565b5050565b600081815260066020908152604091829020805483518184028101840190945280845260609392830182828015611cbe57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311611c93575b50505050509050919050565b6000818152600c6020526040812054819060609060ff1615611d48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f6e636520757365640000000000000000000000000000000000000000000060448201526064016105fd565b6000848152600c6020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055858067ffffffffffffffff811115611d9957611d996134ae565b604051908082528060200260200182016040528015611dc2578160200160208202803683370190505b5092506000805b828110156121bf576000611e8c8b8b84818110611de857611de861347f565b9050602002810190611dfa9190613281565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018e9052605c019150611e689050565b6040516020818303038152906040528051906020012061281f90919063ffffffff16565b905073ffffffffffffffffffffffffffffffffffffffff8116611f0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e657200000000000000000000000000000000000060448201526064016105fd565b6003546040517f3820a52600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526000921690633820a5269060240160206040518083038186803b158015611f7757600080fd5b505afa158015611f8b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611faf91906130a7565b9050600081118015611fec57508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16115b156121ac57808784815181106120045761200461347f565b60209081029190910101526003546040517f82ad711900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260016024830152909116906382ad71199060440160206040518083038186803b15801561208157600080fd5b505afa158015612095573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120b9919061306c565b156120d057886120c8816133b9565b99505061218d565b6003546040517f09a34aa400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260016024830152909116906309a34aa49060440160206040518083038186803b15801561214257600080fd5b505afa158015612156573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061217a919061306c565b1561218d5785612189816133b9565b9650505b6000818152600860205260409020546121a690896132e6565b97508193505b5050806121b8906133b9565b9050611dc9565b5050506000806000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ee53f4cb6040518163ffffffff1660e01b815260040160606040518083038186803b15801561222f57600080fd5b505afa158015612243573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122679190613107565b925092509250828410156122fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f4f535741505f4272696467655661756c743a204d696e696e756d2067656e657260448201527f616c2074726f6c6c20636f756e74206e6f74206d65740000000000000000000060648201526084016105fd565b8187101561238d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f4f535741505f4272696467655661756c743a204d696e696e756d20737570657260448201527f2074726f6c6c20636f756e74206e6f74206d657400000000000000000000000060648201526084016105fd565b6000600a6000815461239e906133b9565b918290555073ffffffffffffffffffffffffffffffffffffffff8d166000908152600b602052604090205490915081906123d99084906132e6565b10806123e55750818111155b61244b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f746f6f20736f6f6e00000000000000000000000000000000000000000000000060448201526064016105fd565b73ffffffffffffffffffffffffffffffffffffffff909b166000908152600b602052604090209a909a55509398929750909550909350505050565b600260005414156124f3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105fd565b6002600055565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526125d69085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612843565b50505050565b6000818152600760209081526040808320338452825280832054848452600690925282205490919061261090600190613376565b905080821461272e5760008381526006602052604090208054829081106126395761263961347f565b600091825260208083209091015485835260069091526040909120805473ffffffffffffffffffffffffffffffffffffffff909216918490811061267f5761267f61347f565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff94909416939093179092558481526007825260408082206006909352812080548593929190849081106126fb576126fb61347f565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff1683528201929092526040019020555b600083815260066020526040902080548061274b5761274b613450565b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055909201909255938152600784526040808220338352909452928320929092555050565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261281a9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401612554565b505050565b600080600061282e858561294f565b9150915061283b81612995565b509392505050565b60006128a5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16612b4f9092919063ffffffff16565b80519091501561281a57808060200190518101906128c3919061306c565b61281a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105fd565b6000808251604114156129865760208301516040840151606085015160001a61297a87828585612b5e565b9450945050505061298e565b506000905060025b9250929050565b60008160048111156129a9576129a9613421565b14156129b25750565b60018160048111156129c6576129c6613421565b1415612a2e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105fd565b6002816004811115612a4257612a42613421565b1415612aaa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105fd565b6003816004811115612abe57612abe613421565b1415612b4c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f756500000000000000000000000000000000000000000000000000000000000060648201526084016105fd565b50565b60606105708484600085612c4d565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115612b955750600090506003612c44565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612be9573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116612c3d57600060019250925050612c44565b9150600090505b94509492505050565b606082471015612cdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105fd565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612d089190613170565b60006040518083038185875af1925050503d8060008114612d45576040519150601f19603f3d011682016040523d82523d6000602084013e612d4a565b606091505b5091509150612d5b87838387612d66565b979650505050505050565b60608315612df9578251612df25773ffffffffffffffffffffffffffffffffffffffff85163b612df2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105fd565b5081610570565b6105708383815115612e0e5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105fd9190613208565b5080546000825590600052602060002090810190612b4c91905b80821115612e705760008155600101612e5c565b5090565b60008083601f840112612e8657600080fd5b50813567ffffffffffffffff811115612e9e57600080fd5b6020830191508360208260051b850101111561298e57600080fd5b600060208284031215612ecb57600080fd5b8135612ed6816134dd565b9392505050565b600060208284031215612eef57600080fd5b8151612ed6816134dd565b60008060008060608587031215612f1057600080fd5b8435612f1b816134dd565b9350602085013567ffffffffffffffff811115612f3757600080fd5b612f4387828801612e74565b9598909750949560400135949350505050565b60008060408385031215612f6957600080fd5b8251612f74816134dd565b602084015190925060058110612f8957600080fd5b809150509250929050565b60008060408385031215612fa757600080fd5b8235612fb2816134dd565b946020939093013593505050565b60008060008060808587031215612fd657600080fd5b8435612fe1816134dd565b966020860135965060408601359560600135945092505050565b60008060008060008060a0878903121561301457600080fd5b863567ffffffffffffffff81111561302b57600080fd5b61303789828a01612e74565b909750955050602087013561304b816134dd565b95989497509495604081013595506060810135946080909101359350915050565b60006020828403121561307e57600080fd5b81518015158114612ed657600080fd5b6000602082840312156130a057600080fd5b5035919050565b6000602082840312156130b957600080fd5b5051919050565b600080604083850312156130d357600080fd5b823591506020830135612f89816134dd565b600080604083850312156130f857600080fd5b50508035926020909101359150565b60008060006060848603121561311c57600080fd5b8351925060208401519150604084015190509250925092565b600081518084526020808501945080840160005b8381101561316557815187529582019590820190600101613149565b509495945050505050565b6000825161318281846020870161338d565b9190910192915050565b6020808252825182820181905260009190848201906040850190845b818110156131da57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016131a8565b50909695505050505050565b6040815260006131f96040830185613135565b90508260208301529392505050565b602081526000825180602084015261322781604085016020870161338d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b8381528260208201526060604082015260006132786060830184613135565b95945050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126132b657600080fd5b83018035915067ffffffffffffffff8211156132d157600080fd5b60200191503681900382131561298e57600080fd5b600082198211156132f9576132f96133f2565b500190565b600082613334577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615613371576133716133f2565b500290565b600082821015613388576133886133f2565b500390565b60005b838110156133a8578181015183820152602001613390565b838111156125d65750506000910152565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156133eb576133eb6133f2565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114612b4c57600080fdfea2646970667358221220e9ce8dd4ead40d331b199d24ebdbef8b10f7c5b121927a25d7d1c1ff3fb31f1064736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVaultTrollRegistry.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVaultTrollRegistry.json.ts"], function (require, exports, eth_contract_8, OSWAP_BridgeVaultTrollRegistry_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_BridgeVaultTrollRegistry = void 0;
    class OSWAP_BridgeVaultTrollRegistry extends eth_contract_8.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_BridgeVaultTrollRegistry_json_1.default.abi, OSWAP_BridgeVaultTrollRegistry_json_1.default.bytecode);
            this.assign();
        }
        deploy(trollRegistry) {
            return this.__deploy([trollRegistry]);
        }
        parsePenaltyEvent(receipt) {
            return this.parseEvents(receipt, "Penalty").map(e => this.decodePenaltyEvent(e));
        }
        decodePenaltyEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_8.BigNumber(result.trollProfileIndex),
                amount: new eth_contract_8.BigNumber(result.amount),
                _event: event
            };
        }
        parseStakeEvent(receipt) {
            return this.parseEvents(receipt, "Stake").map(e => this.decodeStakeEvent(e));
        }
        decodeStakeEvent(event) {
            let result = event.data;
            return {
                backer: result.backer,
                trollProfileIndex: new eth_contract_8.BigNumber(result.trollProfileIndex),
                amount: new eth_contract_8.BigNumber(result.amount),
                shares: new eth_contract_8.BigNumber(result.shares),
                backerBalance: new eth_contract_8.BigNumber(result.backerBalance),
                trollBalance: new eth_contract_8.BigNumber(result.trollBalance),
                totalShares: new eth_contract_8.BigNumber(result.totalShares),
                _event: event
            };
        }
        parseUnstakeEvent(receipt) {
            return this.parseEvents(receipt, "Unstake").map(e => this.decodeUnstakeEvent(e));
        }
        decodeUnstakeEvent(event) {
            let result = event.data;
            return {
                backer: result.backer,
                trollProfileIndex: new eth_contract_8.BigNumber(result.trollProfileIndex),
                amount: new eth_contract_8.BigNumber(result.amount),
                shares: new eth_contract_8.BigNumber(result.shares),
                approvalDecrement: new eth_contract_8.BigNumber(result.approvalDecrement),
                trollBalance: new eth_contract_8.BigNumber(result.trollBalance),
                totalShares: new eth_contract_8.BigNumber(result.totalShares),
                _event: event
            };
        }
        parseUnstakeApprovalEvent(receipt) {
            return this.parseEvents(receipt, "UnstakeApproval").map(e => this.decodeUnstakeApprovalEvent(e));
        }
        decodeUnstakeApprovalEvent(event) {
            let result = event.data;
            return {
                backer: result.backer,
                msgSender: result.msgSender,
                signers: result.signers.map(e => new eth_contract_8.BigNumber(e)),
                shares: new eth_contract_8.BigNumber(result.shares),
                _event: event
            };
        }
        parseUnstakeRequestEvent(receipt) {
            return this.parseEvents(receipt, "UnstakeRequest").map(e => this.decodeUnstakeRequestEvent(e));
        }
        decodeUnstakeRequestEvent(event) {
            let result = event.data;
            return {
                backer: result.backer,
                trollProfileIndex: new eth_contract_8.BigNumber(result.trollProfileIndex),
                shares: new eth_contract_8.BigNumber(result.shares),
                backerBalance: new eth_contract_8.BigNumber(result.backerBalance),
                _event: event
            };
        }
        parseUpdateConfigStoreEvent(receipt) {
            return this.parseEvents(receipt, "UpdateConfigStore").map(e => this.decodeUpdateConfigStoreEvent(e));
        }
        decodeUpdateConfigStoreEvent(event) {
            let result = event.data;
            return {
                newConfigStore: result.newConfigStore,
                _event: event
            };
        }
        parseUpdateTrollRegistryEvent(receipt) {
            return this.parseEvents(receipt, "UpdateTrollRegistry").map(e => this.decodeUpdateTrollRegistryEvent(e));
        }
        decodeUpdateTrollRegistryEvent(event) {
            let result = event.data;
            return {
                newTrollRegistry: result.newTrollRegistry,
                _event: event
            };
        }
        assign() {
            let backerStakes_call = async (param1) => {
                let result = await this.call('backerStakes', [param1]);
                return {
                    trollProfileIndex: new eth_contract_8.BigNumber(result.trollProfileIndex),
                    shares: new eth_contract_8.BigNumber(result.shares),
                    pendingWithdrawal: new eth_contract_8.BigNumber(result.pendingWithdrawal),
                    approvedWithdrawal: new eth_contract_8.BigNumber(result.approvedWithdrawal)
                };
            };
            this.backerStakes = backerStakes_call;
            let bridgeVault_call = async () => {
                let result = await this.call('bridgeVault');
                return result;
            };
            this.bridgeVault = bridgeVault_call;
            let configStore_call = async () => {
                let result = await this.call('configStore');
                return result;
            };
            this.configStore = configStore_call;
            let getBackers_call = async (trollProfileIndex) => {
                let result = await this.call('getBackers', [this.wallet.utils.toString(trollProfileIndex)]);
                return result;
            };
            this.getBackers = getBackers_call;
            let govToken_call = async () => {
                let result = await this.call('govToken');
                return result;
            };
            this.govToken = govToken_call;
            let hashUnstakeRequestParams = (params) => [params.backer, this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.shares), this.wallet.utils.toString(params.nonce)];
            let hashUnstakeRequest_call = async (params) => {
                let result = await this.call('hashUnstakeRequest', hashUnstakeRequestParams(params));
                return result;
            };
            this.hashUnstakeRequest = hashUnstakeRequest_call;
            let lastTrollTxCount_call = async (param1) => {
                let result = await this.call('lastTrollTxCount', [param1]);
                return new eth_contract_8.BigNumber(result);
            };
            this.lastTrollTxCount = lastTrollTxCount_call;
            let maxWithdrawal_call = async (backer) => {
                let result = await this.call('maxWithdrawal', [backer]);
                return new eth_contract_8.BigNumber(result);
            };
            this.maxWithdrawal = maxWithdrawal_call;
            let stakedByParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let stakedBy_call = async (params) => {
                let result = await this.call('stakedBy', stakedByParams(params));
                return result;
            };
            this.stakedBy = stakedBy_call;
            let stakedByInvParams = (params) => [this.wallet.utils.toString(params.param1), params.param2];
            let stakedByInv_call = async (params) => {
                let result = await this.call('stakedByInv', stakedByInvParams(params));
                return new eth_contract_8.BigNumber(result);
            };
            this.stakedByInv = stakedByInv_call;
            let stakedByLength_call = async (trollProfileIndex) => {
                let result = await this.call('stakedByLength', [this.wallet.utils.toString(trollProfileIndex)]);
                return new eth_contract_8.BigNumber(result);
            };
            this.stakedByLength = stakedByLength_call;
            let transactionsCount_call = async () => {
                let result = await this.call('transactionsCount');
                return new eth_contract_8.BigNumber(result);
            };
            this.transactionsCount = transactionsCount_call;
            let trollRegistry_call = async () => {
                let result = await this.call('trollRegistry');
                return result;
            };
            this.trollRegistry = trollRegistry_call;
            let trollStakesBalances_call = async (param1) => {
                let result = await this.call('trollStakesBalances', [this.wallet.utils.toString(param1)]);
                return new eth_contract_8.BigNumber(result);
            };
            this.trollStakesBalances = trollStakesBalances_call;
            let trollStakesTotalShares_call = async (param1) => {
                let result = await this.call('trollStakesTotalShares', [this.wallet.utils.toString(param1)]);
                return new eth_contract_8.BigNumber(result);
            };
            this.trollStakesTotalShares = trollStakesTotalShares_call;
            let usedNonce_call = async (param1) => {
                let result = await this.call('usedNonce', [this.wallet.utils.stringToBytes32(param1)]);
                return result;
            };
            this.usedNonce = usedNonce_call;
            let initAddress_send = async (bridgeVault) => {
                let result = await this.send('initAddress', [bridgeVault]);
                return result;
            };
            let initAddress_call = async (bridgeVault) => {
                let result = await this.call('initAddress', [bridgeVault]);
                return;
            };
            this.initAddress = Object.assign(initAddress_send, {
                call: initAddress_call
            });
            let penalizeSuperTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.amount)];
            let penalizeSuperTroll_send = async (params) => {
                let result = await this.send('penalizeSuperTroll', penalizeSuperTrollParams(params));
                return result;
            };
            let penalizeSuperTroll_call = async (params) => {
                let result = await this.call('penalizeSuperTroll', penalizeSuperTrollParams(params));
                return;
            };
            this.penalizeSuperTroll = Object.assign(penalizeSuperTroll_send, {
                call: penalizeSuperTroll_call
            });
            let stakeParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.amount)];
            let stake_send = async (params) => {
                let result = await this.send('stake', stakeParams(params));
                return result;
            };
            let stake_call = async (params) => {
                let result = await this.call('stake', stakeParams(params));
                return new eth_contract_8.BigNumber(result);
            };
            this.stake = Object.assign(stake_send, {
                call: stake_call
            });
            let unstakeParams = (params) => [params.backer, this.wallet.utils.toString(params.shares)];
            let unstake_send = async (params) => {
                let result = await this.send('unstake', unstakeParams(params));
                return result;
            };
            let unstake_call = async (params) => {
                let result = await this.call('unstake', unstakeParams(params));
                return;
            };
            this.unstake = Object.assign(unstake_send, {
                call: unstake_call
            });
            let unstakeApproveParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), params.backer, this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.shares), this.wallet.utils.toString(params.nonce)];
            let unstakeApprove_send = async (params) => {
                let result = await this.send('unstakeApprove', unstakeApproveParams(params));
                return result;
            };
            let unstakeApprove_call = async (params) => {
                let result = await this.call('unstakeApprove', unstakeApproveParams(params));
                return;
            };
            this.unstakeApprove = Object.assign(unstakeApprove_send, {
                call: unstakeApprove_call
            });
            let unstakeRequest_send = async (shares) => {
                let result = await this.send('unstakeRequest', [this.wallet.utils.toString(shares)]);
                return result;
            };
            let unstakeRequest_call = async (shares) => {
                let result = await this.call('unstakeRequest', [this.wallet.utils.toString(shares)]);
                return;
            };
            this.unstakeRequest = Object.assign(unstakeRequest_send, {
                call: unstakeRequest_call
            });
            let updateConfigStore_send = async () => {
                let result = await this.send('updateConfigStore');
                return result;
            };
            let updateConfigStore_call = async () => {
                let result = await this.call('updateConfigStore');
                return;
            };
            this.updateConfigStore = Object.assign(updateConfigStore_send, {
                call: updateConfigStore_call
            });
            let updateTrollRegistry_send = async () => {
                let result = await this.send('updateTrollRegistry');
                return result;
            };
            let updateTrollRegistry_call = async () => {
                let result = await this.call('updateTrollRegistry');
                return;
            };
            this.updateTrollRegistry = Object.assign(updateTrollRegistry_send, {
                call: updateTrollRegistry_call
            });
            let verifyStakedValueParams = (params) => [params.msgSender, this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.stringToBytes32(params.paramsHash)];
            let verifyStakedValue_send = async (params) => {
                let result = await this.send('verifyStakedValue', verifyStakedValueParams(params));
                return result;
            };
            let verifyStakedValue_call = async (params) => {
                let result = await this.call('verifyStakedValue', verifyStakedValueParams(params));
                return {
                    superTrollCount: new eth_contract_8.BigNumber(result.superTrollCount),
                    totalStake: new eth_contract_8.BigNumber(result.totalStake),
                    signers: result.signers.map(e => new eth_contract_8.BigNumber(e))
                };
            };
            this.verifyStakedValue = Object.assign(verifyStakedValue_send, {
                call: verifyStakedValue_call
            });
        }
    }
    exports.OSWAP_BridgeVaultTrollRegistry = OSWAP_BridgeVaultTrollRegistry;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistry.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistry.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IOSWAP_VotingExecutorManager", "name": "_votingExecutorManager", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "indexed": false, "internalType": "enum OSWAP_ChainRegistry.Status", "name": "status", "type": "uint8" }, { "indexed": false, "internalType": "contract IERC20", "name": "govToken", "type": "address" }], "name": "NewChain", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "indexed": true, "internalType": "bytes32", "name": "contractName", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "_address", "type": "address" }], "name": "UpdateAddress", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "indexed": false, "internalType": "contract OSWAP_ConfigStore", "name": "_address", "type": "address" }], "name": "UpdateConfigStore", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "contractName", "type": "bytes32" }, { "indexed": false, "internalType": "address", "name": "_address", "type": "address" }], "name": "UpdateMainChainAddress", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "indexed": false, "internalType": "enum OSWAP_ChainRegistry.Status", "name": "status", "type": "uint8" }], "name": "UpdateStatus", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "index", "type": "uint256" }, { "indexed": true, "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "vaultRegistry", "type": "address" }, { "internalType": "address", "name": "bridgeVault", "type": "address" }], "indexed": false, "internalType": "struct OSWAP_ChainRegistry.Vault", "name": "vault", "type": "tuple" }], "name": "UpdateVault", "type": "event" },
            { "inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "internalType": "enum OSWAP_ChainRegistry.Status", "name": "_status", "type": "uint8" }, { "internalType": "contract IERC20", "name": "_govToken", "type": "address" }, { "internalType": "contract OSWAP_ConfigStore", "name": "_configStore", "type": "address" }, { "internalType": "bytes32[]", "name": "contractNames", "type": "bytes32[]" }, { "internalType": "address[]", "name": "_address", "type": "address[]" }], "name": "addChain", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "allChains", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "chains", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "chainsLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "configStore", "outputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "internalType": "bytes32[]", "name": "contractnames", "type": "bytes32[]" }], "name": "getChain", "outputs": [{ "internalType": "enum OSWAP_ChainRegistry.Status", "name": "_status", "type": "uint8" }, { "internalType": "contract IERC20", "name": "_govToken", "type": "address" }, { "internalType": "contract OSWAP_ConfigStore", "name": "_configStore", "type": "address" }, { "internalType": "address[]", "name": "_contracts", "type": "address[]" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "vaultRegistry", "type": "address" }, { "internalType": "address", "name": "bridgeVault", "type": "address" }], "internalType": "struct OSWAP_ChainRegistry.Vault[]", "name": "_vaults", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "govToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256[]", "name": "chainId", "type": "uint256[]" }, { "internalType": "enum OSWAP_ChainRegistry.Status[]", "name": "_status", "type": "uint8[]" }, { "internalType": "contract IERC20[]", "name": "_govToken", "type": "address[]" }, { "internalType": "contract OSWAP_ConfigStore[]", "name": "_configStore", "type": "address[]" }, { "internalType": "bytes32[]", "name": "mainChainContractNames", "type": "bytes32[]" }, { "internalType": "address[]", "name": "_mainChainContractAddress", "type": "address[]" }, { "internalType": "bytes32[]", "name": "contractNames", "type": "bytes32[]" }, { "internalType": "address[][]", "name": "_address", "type": "address[][]" }, { "internalType": "bytes32[]", "name": "_tokenNames", "type": "bytes32[]" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "vaultRegistry", "type": "address" }, { "internalType": "address", "name": "bridgeVault", "type": "address" }], "internalType": "struct OSWAP_ChainRegistry.Vault[][]", "name": "vault", "type": "tuple[][]" }], "name": "init", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "mainChainContractAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "internalType": "uint256[]", "name": "chainId", "type": "uint256[]" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "vaultRegistry", "type": "address" }, { "internalType": "address", "name": "bridgeVault", "type": "address" }], "internalType": "struct OSWAP_ChainRegistry.Vault[]", "name": "vault", "type": "tuple[]" }], "name": "newVault", "outputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "sideChainContractAddress", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "status", "outputs": [{ "internalType": "enum OSWAP_ChainRegistry.Status", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "tokenNames", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "tokenNamesLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "internalType": "bytes32", "name": "contractName", "type": "bytes32" }, { "internalType": "address", "name": "_address", "type": "address" }], "name": "updateAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "internalType": "bytes32[]", "name": "contractNames", "type": "bytes32[]" }, { "internalType": "address[]", "name": "_addresses", "type": "address[]" }], "name": "updateAddresses", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "internalType": "contract OSWAP_ConfigStore", "name": "_address", "type": "address" }], "name": "updateConfigStore", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "contractName", "type": "bytes32" }, { "internalType": "address", "name": "_address", "type": "address" }], "name": "updateMainChainAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "internalType": "enum OSWAP_ChainRegistry.Status", "name": "_status", "type": "uint8" }], "name": "updateStatus", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }, { "internalType": "uint256", "name": "chainId", "type": "uint256" }, { "components": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "vaultRegistry", "type": "address" }, { "internalType": "address", "name": "bridgeVault", "type": "address" }], "internalType": "struct OSWAP_ChainRegistry.Vault", "name": "vault", "type": "tuple" }], "name": "updateVault", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "vaults", "outputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "vaultRegistry", "type": "address" }, { "internalType": "address", "name": "bridgeVault", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "vaultsLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "votingExecutorManager", "outputs": [{ "internalType": "contract IOSWAP_VotingExecutorManager", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60806040523480156200001157600080fd5b50604051620030a1380380620030a1833981016040819052620000349162000063565b600180546001600160a01b039092166001600160a01b0319928316179055600080549091163317905562000095565b6000602082840312156200007657600080fd5b81516001600160a01b03811681146200008e57600080fd5b9392505050565b612ffc80620000a56000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c80637f3f94b1116100e3578063bc91a18e1161008c578063cc06597511610066578063cc0659751461040f578063df360c3414610417578063fc85a2871461045857600080fd5b8063bc91a18e146103a6578063c2b504ec146103dc578063c7e7dec6146103fc57600080fd5b8063b4f807e3116100bd578063b4f807e314610339578063b833424e1461036f578063bc0201ec1461038257600080fd5b80637f3f94b11461031457806382af54c9146103295780639ffa446a1461033157600080fd5b806342d21ef711610145578063550325b51161011f578063550325b5146102a457806366a82a51146102b757806372f423321461030157600080fd5b806342d21ef71461020657806342f064c9146102365780634e763cd01461029157600080fd5b80632a391db4116101765780632a391db4146101ba578063310495ab146101cd5780633a1b3d31146101f357600080fd5b8063010b0cc91461019257806310261785146101a7575b600080fd5b6101a56101a0366004612973565b61046b565b005b6101a56101b53660046127a6565b610585565b6101a56101c8366004612b79565b610979565b6101e06101db36600461295a565b610a96565b6040519081526020015b60405180910390f35b6101a5610201366004612b4d565b610ab7565b61022961021436600461295a565b60036020526000908152604090205460ff1681565b6040516101ea9190612cd0565b61026c61024436600461295a565b60076020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101ea565b6101a561029f366004612c1b565b610d6a565b6101e06102b236600461295a565b611040565b6102ca6102c5366004612af2565b611050565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815292841660208401529216918101919091526060016101ea565b6101a561030f366004612973565b6110a5565b61031c6112b9565b6040516101ea9190612c8c565b6009546101e0565b6002546101e0565b61026c61034736600461295a565b60066020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6101e061037d3660046129a3565b611311565b610395610390366004612a10565b61142c565b6040516101ea959493929190612d15565b61026c6103b436600461295a565b60046020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60015461026c9073ffffffffffffffffffffffffffffffffffffffff1681565b6101a561040a366004612b14565b6116a3565b6008546101e0565b61026c610425366004612af2565b600560209081526000928352604080842090915290825290205473ffffffffffffffffffffffffffffffffffffffff1681565b6101a5610466366004612a8f565b6118c1565b6001546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b1580156104d457600080fd5b505afa1580156104e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050c9190612931565b610577576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e670000000000000000000060448201526064015b60405180910390fd5b6105818282611bff565b5050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105a957600080fd5b60025415610613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f616c726561647920696e69740000000000000000000000000000000000000000604482015260640161056e565b895161067b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c6964206c656e677468000000000000000000000000000000000000604482015260640161056e565b88518a5114801561068d575087518a51145b801561069a575086518a51145b80156106a7575082518a51145b61070d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6172726179206c656e677468206e6f74206d6174636865640000000000000000604482015260640161056e565b8451865114610778576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6172726179206c656e677468206e6f74206d6174636865640000000000000000604482015260640161056e565b60005b86518110156107d2576107c087828151811061079957610799612f43565b60200260200101518783815181106107b3576107b3612f43565b6020026020010151611bff565b806107ca81612eb4565b91505061077b565b5060005b8a5181101561087c5761086a8b82815181106107f4576107f4612f43565b60200260200101518b838151811061080e5761080e612f43565b60200260200101518b848151811061082857610828612f43565b60200260200101518b858151811061084257610842612f43565b60200260200101518989878151811061085d5761085d612f43565b6020026020010151611c81565b8061087481612eb4565b9150506107d6565b5080518251146108e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6172726179206c656e677468206e6f74206d6174636865640000000000000000604482015260640161056e565b60005b82518110156109445761093183828151811061090957610909612f43565b60200260200101518c84848151811061092457610924612f43565b60200260200101516120c4565b508061093c81612eb4565b9150506108eb565b5050600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055505050505050505050565b6001546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b1580156109e257600080fd5b505afa1580156109f6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1a9190612931565b610a80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e6700000000000000000000604482015260640161056e565b610a8e868686868686611c81565b505050505050565b60088181548110610aa657600080fd5b600091825260209091200154905081565b6001546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b158015610b2057600080fd5b505afa158015610b34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b589190612931565b610bbe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e6700000000000000000000604482015260640161056e565b60008281526003602052604081205460ff166002811115610be157610be1612f14565b1415610c49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636861696e206e6f742065786973747300000000000000000000000000000000604482015260640161056e565b6001816002811115610c5d57610c5d612f14565b1480610c7a57506002816002811115610c7857610c78612f14565b145b610ce0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420737461747573000000000000000000000000000000000000604482015260640161056e565b600082815260036020526040902080548291907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115610d2957610d29612f14565b0217905550817f1ec5c05690dbdf3fe6eeaa13c3026d2706bba8ff773391bf70f15b407fb1658882604051610d5e9190612cd0565b60405180910390a25050565b6001546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b158015610dd357600080fd5b505afa158015610de7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0b9190612931565b610e71576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e6700000000000000000000604482015260640161056e565b6009548310610edc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f696e76616c696420696e64657800000000000000000000000000000000000000604482015260640161056e565b60008281526003602052604081205460ff166002811115610eff57610eff612f14565b1415610f67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636861696e206e6f742065786973747300000000000000000000000000000000604482015260640161056e565b8060098481548110610f7b57610f7b612f43565b6000918252602080832086845290910181526040918290208351815473ffffffffffffffffffffffffffffffffffffffff9182167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161783559285015160018301805491831691851691909117905593830151600290910180549190941691161790915551829084907f7ac7a6967f79b47c6da19bb1985e530ea9a085881a96e16869ab84d1b8ca378f90611033908590612e04565b60405180910390a3505050565b60028181548110610aa657600080fd5b6009828154811061106057600080fd5b600091825260208083209091019052908152604090208054600182015460029092015473ffffffffffffffffffffffffffffffffffffffff9182169350918116911683565b6001546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b15801561110e57600080fd5b505afa158015611122573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111469190612931565b6111ac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e6700000000000000000000604482015260640161056e565b60008281526003602052604081205460ff1660028111156111cf576111cf612f14565b1415611237576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636861696e206e6f742065786973747300000000000000000000000000000000604482015260640161056e565b60008281526007602090815260409182902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8516908117909155915191825283917f40dd2b3c90b1eb7ec1e0f4266fac1a526a7d2d664c4718a4b7da0473fbdbc3359101610d5e565b6060600280548060200260200160405190810160405280929190818152602001828054801561130757602002820191906000526020600020905b8154815260200190600101908083116112f3575b5050505050905090565b6001546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015260009173ffffffffffffffffffffffffffffffffffffffff169063a3818b3b9060240160206040518083038186803b15801561137b57600080fd5b505afa15801561138f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b39190612931565b611419576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e6700000000000000000000604482015260640161056e565b6114248484846120c4565b949350505050565b6000838152600360209081526040808320546006835281842054600790935292205460ff9092169173ffffffffffffffffffffffffffffffffffffffff9182169116606080858067ffffffffffffffff81111561148b5761148b612f72565b6040519080825280602002602001820160405280156114b4578160200160208202803683370190505b50925060005b818110156115625760008a8152600560205260408120908a8a848181106114e3576114e3612f43565b90506020020135815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684828151811061152b5761152b612f43565b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101909101528061155a81612eb4565b9150506114ba565b50506009548067ffffffffffffffff81111561158057611580612f72565b6040519080825280602002602001820160405280156115e957816020015b60408051606081018252600080825260208083018290529282015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90920191018161159e5790505b50915060005b81811015611696576009818154811061160a5761160a612f43565b600091825260208083208d845290910181526040918290208251606081018452815473ffffffffffffffffffffffffffffffffffffffff9081168252600183015481169382019390935260029091015490911691810191909152835184908390811061167857611678612f43565b6020026020010181905250808061168e90612eb4565b9150506115ef565b5050939792965093509350565b6001546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b15801561170c57600080fd5b505afa158015611720573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117449190612931565b6117aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e6700000000000000000000604482015260640161056e565b60008381526003602052604081205460ff1660028111156117cd576117cd612f14565b1415611835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636861696e206e6f742065786973747300000000000000000000000000000000604482015260640161056e565b600083815260056020908152604080832085845282529182902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091559151918252839185917fb7e76be9c912c58d23e471f89ba672854363e3c92e3bd9cfce0abbbb5a1a884b9101611033565b6001546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b15801561192a57600080fd5b505afa15801561193e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119629190612931565b6119c8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e6700000000000000000000604482015260640161056e565b60008381526003602052604081205460ff1660028111156119eb576119eb612f14565b1415611a53576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636861696e206e6f742065786973747300000000000000000000000000000000604482015260640161056e565b815181518114611abf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6172726179206c656e677468206e6f74206d6174636865640000000000000000604482015260640161056e565b60005b81811015611bf857828181518110611adc57611adc612f43565b6020026020010151600560008781526020019081526020016000206000868481518110611b0b57611b0b612f43565b6020026020010151815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838181518110611b7157611b71612f43565b6020026020010151857fb7e76be9c912c58d23e471f89ba672854363e3c92e3bd9cfce0abbbb5a1a884b858481518110611bad57611bad612f43565b6020026020010151604051611bde919073ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b60405180910390a380611bf081612eb4565b915050611ac2565b5050505050565b60008281526004602090815260409182902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8516908117909155915191825283917fe2de36ee958c6ed4c2511ad593c8cb18ad4695becc19a3c89dc73b62101648219101610d5e565b60008681526003602052604081205460ff166002811115611ca457611ca4612f14565b14611d0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f636861696e20616c726561647920657869737473000000000000000000000000604482015260640161056e565b6000856002811115611d1f57611d1f612f14565b11611d86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f696e76616c696420737461747573000000000000000000000000000000000000604482015260640161056e565b8051825114611df1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6172726179206c656e677468206e6f74206d6174636865640000000000000000604482015260640161056e565b60028054600181810183557f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace90910188905560008881526003602052604090208054889391927fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909116918490811115611e6d57611e6d612f14565b02179055506000868152600660205260409081902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff87161790555186907f625cff83fc78cbdcd27df677554d8a62577d4bde3393e3de2c49fc15cbea338c90611ef29088908890612ce4565b60405180910390a260008681526007602090815260409182902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8716908117909155915191825287917f40dd2b3c90b1eb7ec1e0f4266fac1a526a7d2d664c4718a4b7da0473fbdbc335910160405180910390a2815160005b818110156120ba57828181518110611f9e57611f9e612f43565b6020026020010151600560008a81526020019081526020016000206000868481518110611fcd57611fcd612f43565b6020026020010151815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083818151811061203357612033612f43565b6020026020010151887fb7e76be9c912c58d23e471f89ba672854363e3c92e3bd9cfce0abbbb5a1a884b85848151811061206f5761206f612f43565b60200260200101516040516120a0919073ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b60405180910390a3806120b281612eb4565b915050611f84565b5050505050505050565b81518151600091908114612134576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6172726179206c656e677468206e6f74206d6174636865640000000000000000604482015260640161056e565b600980546008805460018181019092557ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee3018890558254018255600091825292505b818110156123825760006003600087848151811061219657612196612f43565b60209081029190910181015182528101919091526040016000205460ff1660028111156121c5576121c5612f14565b141561222d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f636861696e206e6f742065786973747300000000000000000000000000000000604482015260640161056e565b83818151811061223f5761223f612f43565b60200260200101516009848154811061225a5761225a612f43565b90600052602060002001600087848151811061227857612278612f43565b60209081029190910181015182528181019290925260409081016000208351815473ffffffffffffffffffffffffffffffffffffffff9182167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617835593850151600183018054918316918616919091179055939091015160029091018054919093169116179055845185908290811061231757612317612f43565b6020026020010151837f7ac7a6967f79b47c6da19bb1985e530ea9a085881a96e16869ab84d1b8ca378f86848151811061235357612353612f43565b60200260200101516040516123689190612e04565b60405180910390a38061237a81612eb4565b915050612176565b50509392505050565b600082601f83011261239c57600080fd5b813560206123b16123ac83612e90565b612e41565b80838252828201915082860187848660051b89010111156123d157600080fd5b60005b858110156123f95781356123e781612fa1565b845292840192908401906001016123d4565b5090979650505050505050565b600082601f83011261241757600080fd5b813560206124276123ac83612e90565b80838252828201915082860187848660051b890101111561244757600080fd5b6000805b8681101561248a57823567ffffffffffffffff811115612469578283fd5b6124778b88838d010161238b565b865250938501939185019160010161244b565b509198975050505050505050565b600082601f8301126124a957600080fd5b813560206124b96123ac83612e90565b80838252828201915082860187848660051b89010111156124d957600080fd5b6000805b8681101561248a57823567ffffffffffffffff8111156124fb578283fd5b6125098b88838d01016126b5565b86525093850193918501916001016124dd565b600082601f83011261252d57600080fd5b8135602061253d6123ac83612e90565b80838252828201915082860187848660051b890101111561255d57600080fd5b60005b858110156123f957813584529284019290840190600101612560565b600082601f83011261258d57600080fd5b8135602061259d6123ac83612e90565b80838252828201915082860187848660051b89010111156125bd57600080fd5b60005b858110156123f95781356125d381612fa1565b845292840192908401906001016125c0565b600082601f8301126125f657600080fd5b813560206126066123ac83612e90565b80838252828201915082860187848660051b890101111561262657600080fd5b60005b858110156123f957813561263c81612fa1565b84529284019290840190600101612629565b600082601f83011261265f57600080fd5b8135602061266f6123ac83612e90565b80838252828201915082860187848660051b890101111561268f57600080fd5b60005b858110156123f9576126a38261271c565b84529284019290840190600101612692565b600082601f8301126126c657600080fd5b813560206126d66123ac83612e90565b828152818101908583016060808602880185018910156126f557600080fd5b60005b8681101561248a5761270a8a84612730565b855293850193918101916001016126f8565b80356003811061272b57600080fd5b919050565b60006060828403121561274257600080fd5b6040516060810181811067ffffffffffffffff8211171561276557612765612f72565b604052905080823561277681612fa1565b8152602083013561278681612fa1565b6020820152604083013561279981612fa1565b6040919091015292915050565b6000806000806000806000806000806101408b8d0312156127c657600080fd5b8a3567ffffffffffffffff808211156127de57600080fd5b6127ea8e838f0161251c565b9b5060208d013591508082111561280057600080fd5b61280c8e838f0161264e565b9a5060408d013591508082111561282257600080fd5b61282e8e838f0161257c565b995060608d013591508082111561284457600080fd5b6128508e838f016125e5565b985060808d013591508082111561286657600080fd5b6128728e838f0161251c565b975060a08d013591508082111561288857600080fd5b6128948e838f0161238b565b965060c08d01359150808211156128aa57600080fd5b6128b68e838f0161251c565b955060e08d01359150808211156128cc57600080fd5b6128d88e838f01612406565b94506101008d01359150808211156128ef57600080fd5b6128fb8e838f0161251c565b93506101208d013591508082111561291257600080fd5b5061291f8d828e01612498565b9150509295989b9194979a5092959850565b60006020828403121561294357600080fd5b8151801515811461295357600080fd5b9392505050565b60006020828403121561296c57600080fd5b5035919050565b6000806040838503121561298657600080fd5b82359150602083013561299881612fa1565b809150509250929050565b6000806000606084860312156129b857600080fd5b83359250602084013567ffffffffffffffff808211156129d757600080fd5b6129e38783880161251c565b935060408601359150808211156129f957600080fd5b50612a06868287016126b5565b9150509250925092565b600080600060408486031215612a2557600080fd5b83359250602084013567ffffffffffffffff80821115612a4457600080fd5b818601915086601f830112612a5857600080fd5b813581811115612a6757600080fd5b8760208260051b8501011115612a7c57600080fd5b6020830194508093505050509250925092565b600080600060608486031215612aa457600080fd5b83359250602084013567ffffffffffffffff80821115612ac357600080fd5b612acf8783880161251c565b93506040860135915080821115612ae557600080fd5b50612a068682870161238b565b60008060408385031215612b0557600080fd5b50508035926020909101359150565b600080600060608486031215612b2957600080fd5b83359250602084013591506040840135612b4281612fa1565b809150509250925092565b60008060408385031215612b6057600080fd5b82359150612b706020840161271c565b90509250929050565b60008060008060008060c08789031215612b9257600080fd5b86359550612ba26020880161271c565b94506040870135612bb281612fa1565b93506060870135612bc281612fa1565b9250608087013567ffffffffffffffff80821115612bdf57600080fd5b612beb8a838b0161251c565b935060a0890135915080821115612c0157600080fd5b50612c0e89828a0161238b565b9150509295509295509295565b600080600060a08486031215612c3057600080fd5b8335925060208401359150612c488560408601612730565b90509250925092565b60038110612c88577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b6020808252825182820181905260009190848201906040850190845b81811015612cc457835183529284019291840191600101612ca8565b50909695505050505050565b60208101612cde8284612c51565b92915050565b60408101612cf28285612c51565b73ffffffffffffffffffffffffffffffffffffffff831660208301529392505050565b600060a08201612d258389612c51565b602073ffffffffffffffffffffffffffffffffffffffff808916828601528088166040860152606060a08187015283885180865260c088019150848a01955060005b81811015612d85578651851683529585019591850191600101612d67565b5050868103608088015287518082529084019450915082870160005b83811015612df357612de3868351805173ffffffffffffffffffffffffffffffffffffffff908116835260208083015182169084015260409182015116910152565b9482019490840190600101612da1565b50939b9a5050505050505050505050565b60608101612cde8284805173ffffffffffffffffffffffffffffffffffffffff908116835260208083015182169084015260409182015116910152565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715612e8857612e88612f72565b604052919050565b600067ffffffffffffffff821115612eaa57612eaa612f72565b5060051b60200190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612f0d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114612fc357600080fd5b5056fea26469706673582212203ba0ecebd0a29651630a3633fa00cbaf7f21384fd3604d8230a419f8338dad8664736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistry.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistry.json.ts"], function (require, exports, eth_contract_9, OSWAP_ChainRegistry_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_ChainRegistry = void 0;
    class OSWAP_ChainRegistry extends eth_contract_9.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_ChainRegistry_json_1.default.abi, OSWAP_ChainRegistry_json_1.default.bytecode);
            this.assign();
        }
        deploy(votingExecutorManager) {
            return this.__deploy([votingExecutorManager]);
        }
        parseNewChainEvent(receipt) {
            return this.parseEvents(receipt, "NewChain").map(e => this.decodeNewChainEvent(e));
        }
        decodeNewChainEvent(event) {
            let result = event.data;
            return {
                chainId: new eth_contract_9.BigNumber(result.chainId),
                status: new eth_contract_9.BigNumber(result.status),
                govToken: result.govToken,
                _event: event
            };
        }
        parseUpdateAddressEvent(receipt) {
            return this.parseEvents(receipt, "UpdateAddress").map(e => this.decodeUpdateAddressEvent(e));
        }
        decodeUpdateAddressEvent(event) {
            let result = event.data;
            return {
                chainId: new eth_contract_9.BigNumber(result.chainId),
                contractName: result.contractName,
                _address: result._address,
                _event: event
            };
        }
        parseUpdateConfigStoreEvent(receipt) {
            return this.parseEvents(receipt, "UpdateConfigStore").map(e => this.decodeUpdateConfigStoreEvent(e));
        }
        decodeUpdateConfigStoreEvent(event) {
            let result = event.data;
            return {
                chainId: new eth_contract_9.BigNumber(result.chainId),
                _address: result._address,
                _event: event
            };
        }
        parseUpdateMainChainAddressEvent(receipt) {
            return this.parseEvents(receipt, "UpdateMainChainAddress").map(e => this.decodeUpdateMainChainAddressEvent(e));
        }
        decodeUpdateMainChainAddressEvent(event) {
            let result = event.data;
            return {
                contractName: result.contractName,
                _address: result._address,
                _event: event
            };
        }
        parseUpdateStatusEvent(receipt) {
            return this.parseEvents(receipt, "UpdateStatus").map(e => this.decodeUpdateStatusEvent(e));
        }
        decodeUpdateStatusEvent(event) {
            let result = event.data;
            return {
                chainId: new eth_contract_9.BigNumber(result.chainId),
                status: new eth_contract_9.BigNumber(result.status),
                _event: event
            };
        }
        parseUpdateVaultEvent(receipt) {
            return this.parseEvents(receipt, "UpdateVault").map(e => this.decodeUpdateVaultEvent(e));
        }
        decodeUpdateVaultEvent(event) {
            let result = event.data;
            return {
                index: new eth_contract_9.BigNumber(result.index),
                chainId: new eth_contract_9.BigNumber(result.chainId),
                vault: {
                    token: result.vault.token,
                    vaultRegistry: result.vault.vaultRegistry,
                    bridgeVault: result.vault.bridgeVault
                },
                _event: event
            };
        }
        assign() {
            let allChains_call = async () => {
                let result = await this.call('allChains');
                return result.map(e => new eth_contract_9.BigNumber(e));
            };
            this.allChains = allChains_call;
            let chains_call = async (param1) => {
                let result = await this.call('chains', [this.wallet.utils.toString(param1)]);
                return new eth_contract_9.BigNumber(result);
            };
            this.chains = chains_call;
            let chainsLength_call = async () => {
                let result = await this.call('chainsLength');
                return new eth_contract_9.BigNumber(result);
            };
            this.chainsLength = chainsLength_call;
            let configStore_call = async (param1) => {
                let result = await this.call('configStore', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.configStore = configStore_call;
            let getChainParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.stringToBytes32(params.contractnames)];
            let getChain_call = async (params) => {
                let result = await this.call('getChain', getChainParams(params));
                return {
                    _status: new eth_contract_9.BigNumber(result._status),
                    _govToken: result._govToken,
                    _configStore: result._configStore,
                    _contracts: result._contracts,
                    _vaults: result._vaults.map(e => ({
                        token: e.token,
                        vaultRegistry: e.vaultRegistry,
                        bridgeVault: e.bridgeVault
                    }))
                };
            };
            this.getChain = getChain_call;
            let govToken_call = async (param1) => {
                let result = await this.call('govToken', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.govToken = govToken_call;
            let mainChainContractAddress_call = async (param1) => {
                let result = await this.call('mainChainContractAddress', [this.wallet.utils.stringToBytes32(param1)]);
                return result;
            };
            this.mainChainContractAddress = mainChainContractAddress_call;
            let sideChainContractAddressParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.stringToBytes32(params.param2)];
            let sideChainContractAddress_call = async (params) => {
                let result = await this.call('sideChainContractAddress', sideChainContractAddressParams(params));
                return result;
            };
            this.sideChainContractAddress = sideChainContractAddress_call;
            let status_call = async (param1) => {
                let result = await this.call('status', [this.wallet.utils.toString(param1)]);
                return new eth_contract_9.BigNumber(result);
            };
            this.status = status_call;
            let tokenNames_call = async (param1) => {
                let result = await this.call('tokenNames', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.tokenNames = tokenNames_call;
            let tokenNamesLength_call = async () => {
                let result = await this.call('tokenNamesLength');
                return new eth_contract_9.BigNumber(result);
            };
            this.tokenNamesLength = tokenNamesLength_call;
            let vaultsParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let vaults_call = async (params) => {
                let result = await this.call('vaults', vaultsParams(params));
                return {
                    token: result.token,
                    vaultRegistry: result.vaultRegistry,
                    bridgeVault: result.bridgeVault
                };
            };
            this.vaults = vaults_call;
            let vaultsLength_call = async () => {
                let result = await this.call('vaultsLength');
                return new eth_contract_9.BigNumber(result);
            };
            this.vaultsLength = vaultsLength_call;
            let votingExecutorManager_call = async () => {
                let result = await this.call('votingExecutorManager');
                return result;
            };
            this.votingExecutorManager = votingExecutorManager_call;
            let addChainParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.toString(params.status), params.govToken, params.configStore, this.wallet.utils.stringToBytes32(params.contractNames), params.address];
            let addChain_send = async (params) => {
                let result = await this.send('addChain', addChainParams(params));
                return result;
            };
            let addChain_call = async (params) => {
                let result = await this.call('addChain', addChainParams(params));
                return;
            };
            this.addChain = Object.assign(addChain_send, {
                call: addChain_call
            });
            let initParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.toString(params.status), params.govToken, params.configStore, this.wallet.utils.stringToBytes32(params.mainChainContractNames), params.mainChainContractAddress, this.wallet.utils.stringToBytes32(params.contractNames), params.address, this.wallet.utils.stringToBytes32(params.tokenNames), params.vault.map(a0 => a0.map(e => ([e.token, e.vaultRegistry, e.bridgeVault])))];
            let init_send = async (params) => {
                let result = await this.send('init', initParams(params));
                return result;
            };
            let init_call = async (params) => {
                let result = await this.call('init', initParams(params));
                return;
            };
            this.init = Object.assign(init_send, {
                call: init_call
            });
            let newVaultParams = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.toString(params.chainId), params.vault.map(e => ([e.token, e.vaultRegistry, e.bridgeVault]))];
            let newVault_send = async (params) => {
                let result = await this.send('newVault', newVaultParams(params));
                return result;
            };
            let newVault_call = async (params) => {
                let result = await this.call('newVault', newVaultParams(params));
                return new eth_contract_9.BigNumber(result);
            };
            this.newVault = Object.assign(newVault_send, {
                call: newVault_call
            });
            let updateAddressParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.stringToBytes32(params.contractName), params.address];
            let updateAddress_send = async (params) => {
                let result = await this.send('updateAddress', updateAddressParams(params));
                return result;
            };
            let updateAddress_call = async (params) => {
                let result = await this.call('updateAddress', updateAddressParams(params));
                return;
            };
            this.updateAddress = Object.assign(updateAddress_send, {
                call: updateAddress_call
            });
            let updateAddressesParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.stringToBytes32(params.contractNames), params.addresses];
            let updateAddresses_send = async (params) => {
                let result = await this.send('updateAddresses', updateAddressesParams(params));
                return result;
            };
            let updateAddresses_call = async (params) => {
                let result = await this.call('updateAddresses', updateAddressesParams(params));
                return;
            };
            this.updateAddresses = Object.assign(updateAddresses_send, {
                call: updateAddresses_call
            });
            let updateConfigStoreParams = (params) => [this.wallet.utils.toString(params.chainId), params.address];
            let updateConfigStore_send = async (params) => {
                let result = await this.send('updateConfigStore', updateConfigStoreParams(params));
                return result;
            };
            let updateConfigStore_call = async (params) => {
                let result = await this.call('updateConfigStore', updateConfigStoreParams(params));
                return;
            };
            this.updateConfigStore = Object.assign(updateConfigStore_send, {
                call: updateConfigStore_call
            });
            let updateMainChainAddressParams = (params) => [this.wallet.utils.stringToBytes32(params.contractName), params.address];
            let updateMainChainAddress_send = async (params) => {
                let result = await this.send('updateMainChainAddress', updateMainChainAddressParams(params));
                return result;
            };
            let updateMainChainAddress_call = async (params) => {
                let result = await this.call('updateMainChainAddress', updateMainChainAddressParams(params));
                return;
            };
            this.updateMainChainAddress = Object.assign(updateMainChainAddress_send, {
                call: updateMainChainAddress_call
            });
            let updateStatusParams = (params) => [this.wallet.utils.toString(params.chainId), this.wallet.utils.toString(params.status)];
            let updateStatus_send = async (params) => {
                let result = await this.send('updateStatus', updateStatusParams(params));
                return result;
            };
            let updateStatus_call = async (params) => {
                let result = await this.call('updateStatus', updateStatusParams(params));
                return;
            };
            this.updateStatus = Object.assign(updateStatus_send, {
                call: updateStatus_call
            });
            let updateVaultParams = (params) => [this.wallet.utils.toString(params.index), this.wallet.utils.toString(params.chainId), [params.vault.token, params.vault.vaultRegistry, params.vault.bridgeVault]];
            let updateVault_send = async (params) => {
                let result = await this.send('updateVault', updateVaultParams(params));
                return result;
            };
            let updateVault_call = async (params) => {
                let result = await this.call('updateVault', updateVaultParams(params));
                return;
            };
            this.updateVault = Object.assign(updateVault_send, {
                call: updateVault_call
            });
        }
    }
    exports.OSWAP_ChainRegistry = OSWAP_ChainRegistry;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistryExecutor.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistryExecutor.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "_votingManager", "type": "address" }, { "internalType": "contract OSWAP_ChainRegistry", "name": "_chainRegistry", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32[]", "name": "params", "type": "bytes32[]" }], "name": "Execute", "type": "event" },
            { "inputs": [], "name": "chainRegistry", "outputs": [{ "internalType": "contract OSWAP_ChainRegistry", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32[]", "name": "params", "type": "bytes32[]" }], "name": "execute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "votingManager", "outputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60c06040523480156200001157600080fd5b506040516200203238038062002032833981016040819052620000349162000053565b6001600160601b0319606092831b8116608052911b1660a052620000ab565b600080604083850312156200006757600080fd5b8251620000748162000092565b6020840151909250620000878162000092565b809150509250929050565b6001600160a01b0381168114620000a857600080fd5b50565b60805160601c60a05160601c611f09620001296000396000818160b0015281816105e60152818161085601528181610a1601528181610b8301528181610d5a01528181610fd0015281816110e80152818161123001528181611450015281816115e501526117ba015260008181606001526101000152611f096000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80638af7c64914610046578063da1bcdf01461005b578063fd5e394a146100ab575b600080fd5b610059610054366004611987565b6100d2565b005b6100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100827f000000000000000000000000000000000000000000000000000000000000000081565b6040517fb15866e60000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b15866e69060240160206040518083038186803b15801561015757600080fd5b505afa15801561016b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018f91906119fc565b610220576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4f535741505f566f74696e674578656375746f723a204e6f742066726f6d207660448201527f6f74696e6700000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b80610287576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c696420706172616d73206c656e67746800000000000000000000006044820152606401610217565b7fb98f16f9e16a613740729e6e1b35730f7ca1456ba20bff88685e53e1881bec9082826040516102b8929190611b4f565b60405180910390a16000828260008181106102d5576102d5611e75565b905060200201359050807f73696465436861696e436f6e666967000000000000000000000000000000000014156103205761031b6103168360018187611d2a565b6112fc565b505050565b807f6e65775661756c7400000000000000000000000000000000000000000000000014156106b6576006821080159061036d57506004610361600284611d84565b61036b9190611dd4565b155b6103d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f696e76616c696420706172616d73206c656e67746800000000000000000000006044820152606401610217565b600060046103e2600285611d84565b6103ec9190611d70565b905060008167ffffffffffffffff81111561040957610409611ea4565b604051908082528060200260200182016040528015610432578160200160208202803683370190505b509050816020026084602083013760008267ffffffffffffffff81111561045b5761045b611ea4565b6040519080825280602002602001820160405280156104c457816020015b60408051606081018252600080825260208083018290529282015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019101816104795790505b50905060006104d4846002611d58565b905060005b848110156105e3576040518060600160405280898985806104f990611d9b565b965081811061050a5761050a611e75565b9050602002013560601c73ffffffffffffffffffffffffffffffffffffffff1681526020018989858061053c90611d9b565b965081811061054d5761054d611e75565b9050602002013560601c73ffffffffffffffffffffffffffffffffffffffff1681526020018989858061057f90611d9b565b965081811061059057610590611e75565b9050602002013560601c73ffffffffffffffffffffffffffffffffffffffff168152508382815181106105c5576105c5611e75565b602002602001018190525080806105db90611d9b565b9150506104d9565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b833424e8888600181811061063357610633611e75565b9050602002013585856040518463ffffffff1660e01b815260040161065a93929190611b6b565b602060405180830381600087803b15801561067457600080fd5b505af1158015610688573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ac9190611a5b565b5050505050505050565b807f616464436861696e00000000000000000000000000000000000000000000000014156109825760058210801590610703575060026106f7600584611d84565b6107019190611dd4565b155b610769576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f696e76616c696420706172616d73206c656e67746800000000000000000000006044820152606401610217565b60006002610778600585611d84565b6107829190611d70565b90506000610791826005611d58565b905060008267ffffffffffffffff8111156107ae576107ae611ea4565b6040519080825280602002602001820160405280156107d7578160200160208202803683370190505b50905060005b838110156108535786866107f18386611d58565b81811061080057610800611e75565b9050602002013560601c82828151811061081c5761081c611e75565b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101909101528061084b81611d9b565b9150506107dd565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16632a391db4878760018181106108a3576108a3611e75565b9050602002013560001c888860028181106108c0576108c0611e75565b9050602002013560001c60028111156108db576108db611e46565b898960038181106108ee576108ee611e75565b9050602002013560601c8a8a600481811061090b5761090b611e75565b602002919091013560601c90506109258860058d8f611d2a565b886040518863ffffffff1660e01b81526004016109489796959493929190611c73565b600060405180830381600087803b15801561096257600080fd5b505af1158015610976573d6000803e3d6000fd5b50505050505050505050565b807f75706461746553746174757300000000000000000000000000000000000000001415610aef5760038214610a14576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f696e76616c696420706172616d73206c656e67746800000000000000000000006044820152606401610217565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16633a1b3d3184846001818110610a6357610a63611e75565b9050602002013560001c85856002818110610a8057610a80611e75565b9050602002013560001c6002811115610a9b57610a9b611e46565b6040518363ffffffff1660e01b8152600401610ab8929190611c5f565b600060405180830381600087803b158015610ad257600080fd5b505af1158015610ae6573d6000803e3d6000fd5b50505050505050565b807f7570646174655661756c740000000000000000000000000000000000000000001415610cc65760068214610b81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f696e76616c696420706172616d73206c656e67746800000000000000000000006044820152606401610217565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634e763cd084846001818110610bd057610bd0611e75565b9050602002013560001c85856002818110610bed57610bed611e75565b9050602002013560001c604051806060016040528088886003818110610c1557610c15611e75565b9050602002013560601c73ffffffffffffffffffffffffffffffffffffffff16815260200188886004818110610c4d57610c4d611e75565b9050602002013560601c73ffffffffffffffffffffffffffffffffffffffff16815260200188886005818110610c8557610c85611e75565b9050602002013560601c73ffffffffffffffffffffffffffffffffffffffff168152506040518463ffffffff1660e01b8152600401610ab893929190611ce0565b807f75706461746541646472657373000000000000000000000000000000000000001415610e325760048214610d58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f696e76616c696420706172616d73206c656e67746800000000000000000000006044820152606401610217565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663c7e7dec684846001818110610da757610da7611e75565b9050602002013560001c85856002818110610dc457610dc4611e75565b9050602002013586866003818110610dde57610dde611e75565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815260048101959095526024850193909352506020909102013560601c6044820152606401610ab8565b807f757064617465416464726573736573000000000000000000000000000000000014156110545760048210801590610e7e57506002610e728184611d84565b610e7c9190611dd4565b155b610ee4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f696e76616c696420706172616d73206c656e67746800000000000000000000006044820152606401610217565b60006002610ef28185611d84565b610efc9190611d70565b90506000610f0b826002611d58565b905060008267ffffffffffffffff811115610f2857610f28611ea4565b604051908082528060200260200182016040528015610f51578160200160208202803683370190505b50905060005b83811015610fcd578686610f6b8386611d58565b818110610f7a57610f7a611e75565b9050602002013560601c828281518110610f9657610f96611e75565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610fc581611d9b565b915050610f57565b507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663fc85a2878787600181811061101d5761101d611e75565b602002919091013590506110348560028a8c611d2a565b856040518563ffffffff1660e01b81526004016109489493929190611c28565b807f7570646174654d61696e436861696e4164647265737300000000000000000000141561119c57600382146110e6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f696e76616c696420706172616d73206c656e67746800000000000000000000006044820152606401610217565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663010b0cc98484600181811061113557611135611e75565b905060200201358585600281811061114f5761114f611e75565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e087901b1681526004810194909452602002919091013560601c602483015250604401610ab8565b807f757064617465436f6e66696753746f7265000000000000000000000000000000141561129a576003821461122e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f696e76616c696420706172616d73206c656e67746800000000000000000000006044820152606401610217565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166372f423328484600181811061127d5761127d611e75565b9050602002013560001c8585600281811061114f5761114f611e75565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c696420706172616d657465727300000000000000000000000000006044820152606401610217565b60028111611366576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c696420706172616d657465727300000000000000000000000000006044820152606401610217565b60008282600081811061137b5761137b611e75565b90506020020135905060008383600181811061139957611399611e75565b6113ad926020909102013590506002611d58565b90506113ba816001611d58565b83111561129a5760008484838181106113d5576113d5611e75565b905060200201359050600085858460016113ef9190611d58565b8181106113fe576113fe611e75565b9050602002013590508260026114149190611d58565b85141561174a57837f736574436f6e666967000000000000000000000000000000000000000000000014156115b05760025b83811015610ae6577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166342f064c988888481811061149c5761149c611e75565b9050602002013560001c6040518263ffffffff1660e01b81526004016114c491815260200190565b60206040518083038186803b1580156114dc57600080fd5b505afa1580156114f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115149190611a25565b6040517fd1fd27b3000000000000000000000000000000000000000000000000000000008152600481018590526024810184905273ffffffffffffffffffffffffffffffffffffffff919091169063d1fd27b390604401600060405180830381600087803b15801561158557600080fd5b505af1158015611599573d6000803e3d6000fd5b5050505080806115a890611d9b565b915050611446565b837f736574436f6e666967416464726573730000000000000000000000000000000014156117455760025b83811015610ae6577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166342f064c988888481811061163157611631611e75565b9050602002013560001c6040518263ffffffff1660e01b815260040161165991815260200190565b60206040518083038186803b15801561167157600080fd5b505afa158015611685573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116a99190611a25565b6040517f9db57e1f000000000000000000000000000000000000000000000000000000008152600481018590526024810184905273ffffffffffffffffffffffffffffffffffffffff9190911690639db57e1f90604401600060405180830381600087803b15801561171a57600080fd5b505af115801561172e573d6000803e3d6000fd5b50505050808061173d90611d9b565b9150506115db565b611923565b60008686611759866002611d58565b81811061176857611768611e75565b90506020020135905083600361177e9190611d58565b86141561192157847f736574436f6e666967320000000000000000000000000000000000000000000014156119215760025b848110156106ac577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166342f064c989898481811061180657611806611e75565b9050602002013560001c6040518263ffffffff1660e01b815260040161182e91815260200190565b60206040518083038186803b15801561184657600080fd5b505afa15801561185a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187e9190611a25565b6040517fdf9321a500000000000000000000000000000000000000000000000000000000815260048101869052602481018590526044810184905273ffffffffffffffffffffffffffffffffffffffff919091169063df9321a590606401600060405180830381600087803b1580156118f657600080fd5b505af115801561190a573d6000803e3d6000fd5b50505050808061191990611d9b565b9150506117b0565b505b50506040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c696420706172616d657465727300000000000000000000000000006044820152606401610217565b6000806020838503121561199a57600080fd5b823567ffffffffffffffff808211156119b257600080fd5b818501915085601f8301126119c657600080fd5b8135818111156119d557600080fd5b8660208260051b85010111156119ea57600080fd5b60209290920196919550909350505050565b600060208284031215611a0e57600080fd5b81518015158114611a1e57600080fd5b9392505050565b600060208284031215611a3757600080fd5b815173ffffffffffffffffffffffffffffffffffffffff81168114611a1e57600080fd5b600060208284031215611a6d57600080fd5b5051919050565b600081518084526020808501945080840160005b83811015611aba57815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101611a88565b509495945050505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115611af757600080fd5b8260051b8083602087013760009401602001938452509192915050565b60038110611b4b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b602081526000611b63602083018486611ac5565b949350505050565b6000606080830186845260208281860152818751808452608087019150828901935060005b81811015611bac57845183529383019391830191600101611b90565b50508581036040870152865180825290820192508187019060005b81811015611c1957611c09858451805173ffffffffffffffffffffffffffffffffffffffff908116835260208083015182169084015260409182015116910152565b9385019391830191600101611bc7565b50929998505050505050505050565b848152606060208201526000611c42606083018587611ac5565b8281036040840152611c548185611a74565b979650505050505050565b82815260408101611a1e6020830184611b14565b878152611c836020820188611b14565b600073ffffffffffffffffffffffffffffffffffffffff808816604084015280871660608401525060c06080830152611cc060c083018587611ac5565b82810360a0840152611cd28185611a74565b9a9950505050505050505050565b8381526020810183905260a08101611b636040830184805173ffffffffffffffffffffffffffffffffffffffff908116835260208083015182169084015260409182015116910152565b60008085851115611d3a57600080fd5b83861115611d4757600080fd5b5050600583901b0193919092039150565b60008219821115611d6b57611d6b611de8565b500190565b600082611d7f57611d7f611e17565b500490565b600082821015611d9657611d96611de8565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611dcd57611dcd611de8565b5060010190565b600082611de357611de3611e17565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea2646970667358221220767aa54b382e61f212d52a0e49f64dc9c2ed5ae461daf9be89eecf39049ee19e64736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistryExecutor.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistryExecutor.json.ts"], function (require, exports, eth_contract_10, OSWAP_ChainRegistryExecutor_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_ChainRegistryExecutor = void 0;
    class OSWAP_ChainRegistryExecutor extends eth_contract_10.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_ChainRegistryExecutor_json_1.default.abi, OSWAP_ChainRegistryExecutor_json_1.default.bytecode);
            this.assign();
        }
        deploy(params) {
            return this.__deploy([params.votingManager, params.chainRegistry]);
        }
        parseExecuteEvent(receipt) {
            return this.parseEvents(receipt, "Execute").map(e => this.decodeExecuteEvent(e));
        }
        decodeExecuteEvent(event) {
            let result = event.data;
            return {
                params: result.params,
                _event: event
            };
        }
        assign() {
            let chainRegistry_call = async () => {
                let result = await this.call('chainRegistry');
                return result;
            };
            this.chainRegistry = chainRegistry_call;
            let votingManager_call = async () => {
                let result = await this.call('votingManager');
                return result;
            };
            this.votingManager = votingManager_call;
            let execute_send = async (params) => {
                let result = await this.send('execute', [this.wallet.utils.stringToBytes32(params)]);
                return result;
            };
            let execute_call = async (params) => {
                let result = await this.call('execute', [this.wallet.utils.stringToBytes32(params)]);
                return;
            };
            this.execute = Object.assign(execute_send, {
                call: execute_call
            });
        }
    }
    exports.OSWAP_ChainRegistryExecutor = OSWAP_ChainRegistryExecutor;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStore.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStore.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "components": [{ "internalType": "contract IERC20", "name": "govToken", "type": "address" }, { "internalType": "contract IOSWAP_SwapPolicy", "name": "swapPolicy", "type": "address" }, { "internalType": "uint256", "name": "lpWithdrawlDelay", "type": "uint256" }, { "internalType": "uint256", "name": "transactionsGap", "type": "uint256" }, { "internalType": "uint256", "name": "superTrollMinCount", "type": "uint256" }, { "internalType": "uint256", "name": "generalTrollMinCount", "type": "uint256" }, { "internalType": "uint256", "name": "transactionFee", "type": "uint256" }, { "internalType": "address", "name": "router", "type": "address" }, { "internalType": "address", "name": "rebalancer", "type": "address" }, { "internalType": "address", "name": "feeTo", "type": "address" }, { "internalType": "address", "name": "wrapper", "type": "address" }, { "internalType": "contract IERC20[]", "name": "asset", "type": "address[]" }, { "internalType": "uint256[]", "name": "baseFee", "type": "uint256[]" }], "internalType": "struct OSWAP_ConfigStore.Params", "name": "params", "type": "tuple" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "value1", "type": "bytes32" }], "name": "ParamSet1", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "value1", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "value2", "type": "bytes32" }], "name": "ParamSet2", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract IOSWAP_VotingExecutorManager", "name": "newVotingExecutorManager", "type": "address" }], "name": "UpdateVotingExecutorManager", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract OSWAP_ConfigStore", "name": "newConfigStore", "type": "address" }], "name": "Upgrade", "type": "event" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "name": "baseFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "feeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "generalTrollMinCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "asset", "type": "address" }], "name": "getBridgeParams", "outputs": [{ "internalType": "contract IOSWAP_SwapPolicy", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "asset", "type": "address" }], "name": "getRebalanceParams", "outputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "getSignatureVerificationParams", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "govToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract IOSWAP_VotingExecutorManager", "name": "_votingExecutorManager", "type": "address" }], "name": "initAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isApprovedProxy", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "lpWithdrawlDelay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newConfigStore", "outputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "name": "priceOracle", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "rebalancer", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "router", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "internalType": "bytes32", "name": "_value", "type": "bytes32" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "internalType": "bytes32", "name": "value1", "type": "bytes32" }, { "internalType": "bytes32", "name": "value2", "type": "bytes32" }], "name": "setConfig2", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "internalType": "bytes32", "name": "_value", "type": "bytes32" }], "name": "setConfigAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "asset", "type": "address" }, { "internalType": "address", "name": "oracle", "type": "address" }], "name": "setOracle", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract IOSWAP_SwapPolicy", "name": "_swapPolicy", "type": "address" }], "name": "setSwapPolicy", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "superTrollMinCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "swapPolicy", "outputs": [{ "internalType": "contract IOSWAP_SwapPolicy", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "transactionFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "transactionsGap", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "updateVotingExecutorManager", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "_configStore", "type": "address" }], "name": "upgrade", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "votingExecutorManager", "outputs": [{ "internalType": "contract IOSWAP_VotingExecutorManager", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b5060405162001e8538038062001e858339810160408190526200003491620002e3565b60008054336001600160a01b0319918216179091558151606090811b6001600160601b031916608090815260208401516004805485166001600160a01b03928316179055604085015160085591840151600955830151600a5560a0830151600b5560c0830151600c5560e0830151600d80548416918316919091179055610100830151600e80548416918316919091179055610120830151600f80549093169116179055610180810151516101608201515114620000f157600080fd5b60005b81610160015151811015620001855781610180015181815181106200011d576200011d620004db565b6020026020010151600660008461016001518481518110620001435762000143620004db565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208190555080806200017c90620004b1565b915050620000f4565b506101408101516001600160a01b031615620001c4576101408101516001600160a01b03166000908152600760205260409020805460ff191660011790555b50336000908152600260205260409020805460ff1916600117905562000520565b8051620001f28162000507565b919050565b600082601f8301126200020957600080fd5b81516020620002226200021c836200048b565b62000458565b80838252828201915082860187848660051b89010111156200024357600080fd5b60005b858110156200026f5781516200025c8162000507565b8452928401929084019060010162000246565b5090979650505050505050565b600082601f8301126200028e57600080fd5b81516020620002a16200021c836200048b565b80838252828201915082860187848660051b8901011115620002c257600080fd5b60005b858110156200026f57815184529284019290840190600101620002c5565b600060208284031215620002f657600080fd5b81516001600160401b03808211156200030e57600080fd5b908301906101a082860312156200032457600080fd5b6200032e6200042c565b6200033983620001e5565b81526200034960208401620001e5565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200038e60e08401620001e5565b60e0820152610100620003a3818501620001e5565b90820152610120620003b7848201620001e5565b90820152610140620003cb848201620001e5565b908201526101608381015183811115620003e457600080fd5b620003f288828701620001f7565b82840152505061018080840151838111156200040d57600080fd5b6200041b888287016200027c565b918301919091525095945050505050565b6040516101a081016001600160401b0381118282101715620004525762000452620004f1565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620004835762000483620004f1565b604052919050565b60006001600160401b03821115620004a757620004a7620004f1565b5060051b60200190565b6000600019821415620004d457634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200051d57600080fd5b50565b60805160601c6119386200054d6000396000818161027f015281816102e1015261054001526119386000f3fe608060405234801561001057600080fd5b506004361061020b5760003560e01c80639a7777931161012a578063cdd7e0c4116100bd578063e5c149a91161008c578063ef06095111610071578063ef06095114610662578063f2fde38b14610682578063f887ea401461069557600080fd5b8063e5c149a914610635578063ee53f4cb1461063e57600080fd5b8063cdd7e0c4146105e6578063d1fd27b3146105ef578063d4ee1d9014610602578063df9321a51461062257600080fd5b8063a2f55ae5116100f9578063a2f55ae514610505578063b023c86514610518578063b86a1855146105bd578063c2b504ec146105c657600080fd5b80639a777793146104c35780639c52a7f1146104d65780639db57e1f146104e95780639ed3edf0146104fc57600080fd5b80633d54c447116101a25780636053617211610171578063605361721461048a578063626e6b6c1461049257806381c0dc6d1461049b5780638da5cb5b146104a357600080fd5b80633d54c4471461040e5780633fd8cc4e146104415780635a812465146104645780635c38eb3a1461047757600080fd5b80630fa0c7f8116101de5780630fa0c7f8146102b6578063123b9a0b1461038a57806325aa9c54146103b85780632951f1b2146103d857600080fd5b8063017e7e581461021057806301d22ccd1461025a57806305268cff1461027a5780630900f010146102a1575b600080fd5b600f546102309073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b600e546102309073ffffffffffffffffffffffffffffffffffffffff1681565b6102307f000000000000000000000000000000000000000000000000000000000000000081565b6102b46102af3660046117f7565b6106b5565b005b61033b6102c43660046117f7565b600454600d5473ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116600090815260056020908152604080832054968416835280832054600690925290912054600c5494831696938316958316949190921692565b6040805173ffffffffffffffffffffffffffffffffffffffff978816815295871660208701529386169385019390935293166060830152608082019290925260a081019190915260c001610251565b6103aa6103983660046117f7565b60066020526000908152604090205481565b604051908152602001610251565b6004546102309073ffffffffffffffffffffffffffffffffffffffff1681565b6102306103e63660046117f7565b60056020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b61043161041c3660046117f7565b60076020526000908152604090205460ff1681565b6040519015158152602001610251565b61043161044f3660046117f7565b60026020526000908152604090205460ff1681565b6102b46104723660046117f7565b61083b565b6102b461048536600461188b565b6109a3565b6102b4610b22565b6103aa600b5481565b6102b4610c4c565b6000546102309073ffffffffffffffffffffffffffffffffffffffff1681565b6102b46104d13660046117f7565b610de1565b6102b46104e43660046117f7565b610f3e565b6102b46104f736600461183d565b610fde565b6103aa600c5481565b6102b46105133660046117f7565b6112d2565b6105866105263660046117f7565b600e5473ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000081166000908152600560205260408082205494831682529020549181169392811692911690565b6040805173ffffffffffffffffffffffffffffffffffffffff94851681529284166020840152921691810191909152606001610251565b6103aa60085481565b6003546102309073ffffffffffffffffffffffffffffffffffffffff1681565b6103aa60095481565b6102b46105fd36600461183d565b611375565b6001546102309073ffffffffffffffffffffffffffffffffffffffff1681565b6102b461063036600461185f565b611577565b6103aa600a5481565b600b54600a5460095460408051938452602084019290925290820152606001610251565b6010546102309073ffffffffffffffffffffffffffffffffffffffff1681565b6102b46106903660046117f7565b611760565b600d546102309073ffffffffffffffffffffffffffffffffffffffff1681565b6003546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b15801561071e57600080fd5b505afa158015610732573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610756919061181b565b6107c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e670000000000000000000060448201526064015b60405180910390fd5b601080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d906020015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461085f57600080fd5b73ffffffffffffffffffffffffffffffffffffffff81166108dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e756c6c2061646472657373000000000000000000000000000000000000000060448201526064016107b8565b60035473ffffffffffffffffffffffffffffffffffffffff161561095c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f616c726561647920696e6974000000000000000000000000000000000000000060448201526064016107b8565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3360009081526002602052604090205460ff16610a42576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016107b8565b73ffffffffffffffffffffffffffffffffffffffff82811660009081526005602090815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169385169390931790925580517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606086811b8216835285901b16928101929092527f6f7261636c650000000000000000000000000000000000000000000000000000917f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb706910160405180910390a25050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610bc9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016107b8565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b600354604080517fc53bc047000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163c53bc047916004808301926020929190829003018186803b158015610cb757600080fd5b505afa158015610ccb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cef91906118c4565b905073ffffffffffffffffffffffffffffffffffffffff8116610d6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f726500000000000000000000000060448201526064016107b8565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527fe74e49c9957a38058d1fefcf5aa66950c8ba0c968b7ee84424852312e657d69090602001610830565b3360009081526002602052604090205460ff16610e80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084016107b8565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055604051606082901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001681527f73776170506f6c69637900000000000000000000000000000000000000000000907f88606c7ce4ded506e934ff550061fa2f46fabe388e2e70153ce425794d1c804a9060200160405180910390a250565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f6257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101610830565b6003546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b15801561104757600080fd5b505afa15801561105b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107f919061181b565b6110e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e670000000000000000000060448201526064016107b8565b606081901c7f726f75746572000000000000000000000000000000000000000000000000000083141561115757600d80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055611293565b827f726562616c616e6365720000000000000000000000000000000000000000000014156111c457600e80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055611293565b827f666565546f000000000000000000000000000000000000000000000000000000141561123157600f80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055611293565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420636f6e66696700000000000000000000000000000000000060448201526064016107b8565b827f88606c7ce4ded506e934ff550061fa2f46fabe388e2e70153ce425794d1c804a836040516112c591815260200190565b60405180910390a2505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146112f657600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101610830565b6003546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b1580156113de57600080fd5b505afa1580156113f2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611416919061181b565b61147c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e670000000000000000000060448201526064016107b8565b807f7472616e73616374696f6e7347617000000000000000000000000000000000008314156114af576009819055611293565b827f7472616e73616374696f6e46656500000000000000000000000000000000000014156114e157600c819055611293565b827f737570657254726f6c6c4d696e436f756e740000000000000000000000000000141561151357600a819055611293565b827f67656e6572616c54726f6c6c4d696e436f756e74000000000000000000000000141561154557600b819055611293565b827f6c7057697468647261776c44656c6179000000000000000000000000000000001415611231576008819055611293565b6003546040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff9091169063a3818b3b9060240160206040518083038186803b1580156115e057600080fd5b505afa1580156115f4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611618919061181b565b61167e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e670000000000000000000060448201526064016107b8565b827f626173654665650000000000000000000000000000000000000000000000000014156116c157606082901c6000908152600660205260409020819055611728565b827f6973417070726f76656450726f78790000000000000000000000000000000000141561123157606082901c600090815260076020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183141790555b604080518381526020810183905284917f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb70691016112c5565b60005473ffffffffffffffffffffffffffffffffffffffff16331461178457600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001610830565b60006020828403121561180957600080fd5b8135611814816118dd565b9392505050565b60006020828403121561182d57600080fd5b8151801515811461181457600080fd5b6000806040838503121561185057600080fd5b50508035926020909101359150565b60008060006060848603121561187457600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561189e57600080fd5b82356118a9816118dd565b915060208301356118b9816118dd565b809150509250929050565b6000602082840312156118d657600080fd5b8151611814815b73ffffffffffffffffffffffffffffffffffffffff811681146118ff57600080fd5b5056fea26469706673582212204cdd90d001d5d876ce37ce940bf8b2ea33fa51fa5f915cbd71536a2bb3baae1e64736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStore.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStore.json.ts"], function (require, exports, eth_contract_11, OSWAP_ConfigStore_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_ConfigStore = void 0;
    class OSWAP_ConfigStore extends eth_contract_11.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_ConfigStore_json_1.default.abi, OSWAP_ConfigStore_json_1.default.bytecode);
            this.assign();
        }
        deploy(params) {
            return this.__deploy([[params.govToken, params.swapPolicy, this.wallet.utils.toString(params.lpWithdrawlDelay), this.wallet.utils.toString(params.transactionsGap), this.wallet.utils.toString(params.superTrollMinCount), this.wallet.utils.toString(params.generalTrollMinCount), this.wallet.utils.toString(params.transactionFee), params.router, params.rebalancer, params.feeTo, params.wrapper, params.asset, this.wallet.utils.toString(params.baseFee)]]);
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseParamSet1Event(receipt) {
            return this.parseEvents(receipt, "ParamSet1").map(e => this.decodeParamSet1Event(e));
        }
        decodeParamSet1Event(event) {
            let result = event.data;
            return {
                name: result.name,
                value1: result.value1,
                _event: event
            };
        }
        parseParamSet2Event(receipt) {
            return this.parseEvents(receipt, "ParamSet2").map(e => this.decodeParamSet2Event(e));
        }
        decodeParamSet2Event(event) {
            let result = event.data;
            return {
                name: result.name,
                value1: result.value1,
                value2: result.value2,
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseUpdateVotingExecutorManagerEvent(receipt) {
            return this.parseEvents(receipt, "UpdateVotingExecutorManager").map(e => this.decodeUpdateVotingExecutorManagerEvent(e));
        }
        decodeUpdateVotingExecutorManagerEvent(event) {
            let result = event.data;
            return {
                newVotingExecutorManager: result.newVotingExecutorManager,
                _event: event
            };
        }
        parseUpgradeEvent(receipt) {
            return this.parseEvents(receipt, "Upgrade").map(e => this.decodeUpgradeEvent(e));
        }
        decodeUpgradeEvent(event) {
            let result = event.data;
            return {
                newConfigStore: result.newConfigStore,
                _event: event
            };
        }
        assign() {
            let baseFee_call = async (param1) => {
                let result = await this.call('baseFee', [param1]);
                return new eth_contract_11.BigNumber(result);
            };
            this.baseFee = baseFee_call;
            let feeTo_call = async () => {
                let result = await this.call('feeTo');
                return result;
            };
            this.feeTo = feeTo_call;
            let generalTrollMinCount_call = async () => {
                let result = await this.call('generalTrollMinCount');
                return new eth_contract_11.BigNumber(result);
            };
            this.generalTrollMinCount = generalTrollMinCount_call;
            let getBridgeParams_call = async (asset) => {
                let result = await this.call('getBridgeParams', [asset]);
                return {
                    param1: result[0],
                    param2: result[1],
                    param3: result[2],
                    param4: result[3],
                    param5: new eth_contract_11.BigNumber(result[4]),
                    param6: new eth_contract_11.BigNumber(result[5])
                };
            };
            this.getBridgeParams = getBridgeParams_call;
            let getRebalanceParams_call = async (asset) => {
                let result = await this.call('getRebalanceParams', [asset]);
                return {
                    param1: result[0],
                    param2: result[1],
                    param3: result[2]
                };
            };
            this.getRebalanceParams = getRebalanceParams_call;
            let getSignatureVerificationParams_call = async () => {
                let result = await this.call('getSignatureVerificationParams');
                return {
                    param1: new eth_contract_11.BigNumber(result[0]),
                    param2: new eth_contract_11.BigNumber(result[1]),
                    param3: new eth_contract_11.BigNumber(result[2])
                };
            };
            this.getSignatureVerificationParams = getSignatureVerificationParams_call;
            let govToken_call = async () => {
                let result = await this.call('govToken');
                return result;
            };
            this.govToken = govToken_call;
            let isApprovedProxy_call = async (param1) => {
                let result = await this.call('isApprovedProxy', [param1]);
                return result;
            };
            this.isApprovedProxy = isApprovedProxy_call;
            let isPermitted_call = async (param1) => {
                let result = await this.call('isPermitted', [param1]);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let lpWithdrawlDelay_call = async () => {
                let result = await this.call('lpWithdrawlDelay');
                return new eth_contract_11.BigNumber(result);
            };
            this.lpWithdrawlDelay = lpWithdrawlDelay_call;
            let newConfigStore_call = async () => {
                let result = await this.call('newConfigStore');
                return result;
            };
            this.newConfigStore = newConfigStore_call;
            let newOwner_call = async () => {
                let result = await this.call('newOwner');
                return result;
            };
            this.newOwner = newOwner_call;
            let owner_call = async () => {
                let result = await this.call('owner');
                return result;
            };
            this.owner = owner_call;
            let priceOracle_call = async (param1) => {
                let result = await this.call('priceOracle', [param1]);
                return result;
            };
            this.priceOracle = priceOracle_call;
            let rebalancer_call = async () => {
                let result = await this.call('rebalancer');
                return result;
            };
            this.rebalancer = rebalancer_call;
            let router_call = async () => {
                let result = await this.call('router');
                return result;
            };
            this.router = router_call;
            let superTrollMinCount_call = async () => {
                let result = await this.call('superTrollMinCount');
                return new eth_contract_11.BigNumber(result);
            };
            this.superTrollMinCount = superTrollMinCount_call;
            let swapPolicy_call = async () => {
                let result = await this.call('swapPolicy');
                return result;
            };
            this.swapPolicy = swapPolicy_call;
            let transactionFee_call = async () => {
                let result = await this.call('transactionFee');
                return new eth_contract_11.BigNumber(result);
            };
            this.transactionFee = transactionFee_call;
            let transactionsGap_call = async () => {
                let result = await this.call('transactionsGap');
                return new eth_contract_11.BigNumber(result);
            };
            this.transactionsGap = transactionsGap_call;
            let votingExecutorManager_call = async () => {
                let result = await this.call('votingExecutorManager');
                return result;
            };
            this.votingExecutorManager = votingExecutorManager_call;
            let deny_send = async (user) => {
                let result = await this.send('deny', [user]);
                return result;
            };
            let deny_call = async (user) => {
                let result = await this.call('deny', [user]);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let initAddress_send = async (votingExecutorManager) => {
                let result = await this.send('initAddress', [votingExecutorManager]);
                return result;
            };
            let initAddress_call = async (votingExecutorManager) => {
                let result = await this.call('initAddress', [votingExecutorManager]);
                return;
            };
            this.initAddress = Object.assign(initAddress_send, {
                call: initAddress_call
            });
            let permit_send = async (user) => {
                let result = await this.send('permit', [user]);
                return result;
            };
            let permit_call = async (user) => {
                let result = await this.call('permit', [user]);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let setConfigParams = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.value)];
            let setConfig_send = async (params) => {
                let result = await this.send('setConfig', setConfigParams(params));
                return result;
            };
            let setConfig_call = async (params) => {
                let result = await this.call('setConfig', setConfigParams(params));
                return;
            };
            this.setConfig = Object.assign(setConfig_send, {
                call: setConfig_call
            });
            let setConfig2Params = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.value1), this.wallet.utils.stringToBytes32(params.value2)];
            let setConfig2_send = async (params) => {
                let result = await this.send('setConfig2', setConfig2Params(params));
                return result;
            };
            let setConfig2_call = async (params) => {
                let result = await this.call('setConfig2', setConfig2Params(params));
                return;
            };
            this.setConfig2 = Object.assign(setConfig2_send, {
                call: setConfig2_call
            });
            let setConfigAddressParams = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.value)];
            let setConfigAddress_send = async (params) => {
                let result = await this.send('setConfigAddress', setConfigAddressParams(params));
                return result;
            };
            let setConfigAddress_call = async (params) => {
                let result = await this.call('setConfigAddress', setConfigAddressParams(params));
                return;
            };
            this.setConfigAddress = Object.assign(setConfigAddress_send, {
                call: setConfigAddress_call
            });
            let setOracleParams = (params) => [params.asset, params.oracle];
            let setOracle_send = async (params) => {
                let result = await this.send('setOracle', setOracleParams(params));
                return result;
            };
            let setOracle_call = async (params) => {
                let result = await this.call('setOracle', setOracleParams(params));
                return;
            };
            this.setOracle = Object.assign(setOracle_send, {
                call: setOracle_call
            });
            let setSwapPolicy_send = async (swapPolicy) => {
                let result = await this.send('setSwapPolicy', [swapPolicy]);
                return result;
            };
            let setSwapPolicy_call = async (swapPolicy) => {
                let result = await this.call('setSwapPolicy', [swapPolicy]);
                return;
            };
            this.setSwapPolicy = Object.assign(setSwapPolicy_send, {
                call: setSwapPolicy_call
            });
            let takeOwnership_send = async () => {
                let result = await this.send('takeOwnership');
                return result;
            };
            let takeOwnership_call = async () => {
                let result = await this.call('takeOwnership');
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner) => {
                let result = await this.send('transferOwnership', [newOwner]);
                return result;
            };
            let transferOwnership_call = async (newOwner) => {
                let result = await this.call('transferOwnership', [newOwner]);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let updateVotingExecutorManager_send = async () => {
                let result = await this.send('updateVotingExecutorManager');
                return result;
            };
            let updateVotingExecutorManager_call = async () => {
                let result = await this.call('updateVotingExecutorManager');
                return;
            };
            this.updateVotingExecutorManager = Object.assign(updateVotingExecutorManager_send, {
                call: updateVotingExecutorManager_call
            });
            let upgrade_send = async (configStore) => {
                let result = await this.send('upgrade', [configStore]);
                return result;
            };
            let upgrade_call = async (configStore) => {
                let result = await this.call('upgrade', [configStore]);
                return;
            };
            this.upgrade = Object.assign(upgrade_send, {
                call: upgrade_call
            });
        }
    }
    exports.OSWAP_ConfigStore = OSWAP_ConfigStore;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStoreTradeVault.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStoreTradeVault.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "uint256", "name": "_arbitrageFee", "type": "uint256" }, { "internalType": "address", "name": "_router", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "value1", "type": "bytes32" }], "name": "ParamSet1", "type": "event" },
            { "inputs": [], "name": "arbitrageFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "feeTo", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "getTradeParam", "outputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newConfigStore", "outputs": [{ "internalType": "contract OSWAP_ConfigStoreTradeVault", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "router", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "internalType": "bytes32", "name": "_value", "type": "bytes32" }], "name": "setConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "internalType": "bytes32", "name": "_value", "type": "bytes32" }], "name": "setConfigAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
        ],
        "bytecode": "608060405234801561001057600080fd5b5060405161045938038061045983398101604081905261002f91610063565b600191909155600080546001600160a01b039092166001600160a01b031992831617905560038054909116301790556100a0565b6000806040838503121561007657600080fd5b825160208401519092506001600160a01b038116811461009557600080fd5b809150509250929050565b6103aa806100af6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639db57e1f1161005b5780639db57e1f14610133578063d1fd27b314610148578063ef0609511461015b578063f887ea401461017b57600080fd5b8063017e7e58146100825780633a310c3d146100cc5780639b0e64531461011c575b600080fd5b6002546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100f060005460015473ffffffffffffffffffffffffffffffffffffffff90911691565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526020830191909152016100c3565b61012560015481565b6040519081526020016100c3565b610146610141366004610352565b61019b565b005b610146610156366004610352565b61031f565b6003546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b6000546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b606081901c7f726f75746572000000000000000000000000000000000000000000000000000083141561020d57600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790556102e0565b827f6e6577436f6e66696753746f7265000000000000000000000000000000000000141561027a57600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161790556102e0565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420636f6e666967000000000000000000000000000000000000604482015260640160405180910390fd5b827f88606c7ce4ded506e934ff550061fa2f46fabe388e2e70153ce425794d1c804a8360405161031291815260200190565b60405180910390a2505050565b807f617262697472616765466565000000000000000000000000000000000000000083141561027a5760018190556102e0565b6000806040838503121561036557600080fd5b5050803592602090910135915056fea26469706673582212207b2b41bf17a50001172cf68c1d1e94c2dcc415c2f6e0a5cc4422e28c030465ee64736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStoreTradeVault.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStoreTradeVault.json.ts"], function (require, exports, eth_contract_12, OSWAP_ConfigStoreTradeVault_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_ConfigStoreTradeVault = void 0;
    class OSWAP_ConfigStoreTradeVault extends eth_contract_12.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_ConfigStoreTradeVault_json_1.default.abi, OSWAP_ConfigStoreTradeVault_json_1.default.bytecode);
            this.assign();
        }
        deploy(params) {
            return this.__deploy([this.wallet.utils.toString(params.arbitrageFee), params.router]);
        }
        parseParamSet1Event(receipt) {
            return this.parseEvents(receipt, "ParamSet1").map(e => this.decodeParamSet1Event(e));
        }
        decodeParamSet1Event(event) {
            let result = event.data;
            return {
                name: result.name,
                value1: result.value1,
                _event: event
            };
        }
        assign() {
            let arbitrageFee_call = async () => {
                let result = await this.call('arbitrageFee');
                return new eth_contract_12.BigNumber(result);
            };
            this.arbitrageFee = arbitrageFee_call;
            let feeTo_call = async () => {
                let result = await this.call('feeTo');
                return result;
            };
            this.feeTo = feeTo_call;
            let getTradeParam_call = async () => {
                let result = await this.call('getTradeParam');
                return {
                    param1: result[0],
                    param2: new eth_contract_12.BigNumber(result[1])
                };
            };
            this.getTradeParam = getTradeParam_call;
            let newConfigStore_call = async () => {
                let result = await this.call('newConfigStore');
                return result;
            };
            this.newConfigStore = newConfigStore_call;
            let router_call = async () => {
                let result = await this.call('router');
                return result;
            };
            this.router = router_call;
            let setConfigParams = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.value)];
            let setConfig_send = async (params) => {
                let result = await this.send('setConfig', setConfigParams(params));
                return result;
            };
            let setConfig_call = async (params) => {
                let result = await this.call('setConfig', setConfigParams(params));
                return;
            };
            this.setConfig = Object.assign(setConfig_send, {
                call: setConfig_call
            });
            let setConfigAddressParams = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.value)];
            let setConfigAddress_send = async (params) => {
                let result = await this.send('setConfigAddress', setConfigAddressParams(params));
                return result;
            };
            let setConfigAddress_call = async (params) => {
                let result = await this.call('setConfigAddress', setConfigAddressParams(params));
                return;
            };
            this.setConfigAddress = Object.assign(setConfigAddress_send, {
                call: setConfigAddress_call
            });
        }
    }
    exports.OSWAP_ConfigStoreTradeVault = OSWAP_ConfigStoreTradeVault;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ContractProxy.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ContractProxy.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "address", "name": "_logic", "type": "address" }, { "internalType": "address", "name": "votingManager", "type": "address" }, { "internalType": "bytes", "name": "_data", "type": "bytes" }], "stateMutability": "payable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "previousAdmin", "type": "address" }, { "indexed": false, "internalType": "address", "name": "newAdmin", "type": "address" }], "name": "AdminChanged", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "beacon", "type": "address" }], "name": "BeaconUpgraded", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "implementation", "type": "address" }], "name": "Upgraded", "type": "event" },
            { "stateMutability": "payable", "type": "fallback" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "implementation", "outputs": [{ "internalType": "address", "name": "implementation_", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "oldImplementation", "type": "address" }, { "internalType": "address", "name": "newImplementation", "type": "address" }, { "internalType": "bool", "name": "finalize", "type": "bool" }], "name": "upgradeTo", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "oldImplementation", "type": "address" }, { "internalType": "address", "name": "newImplementation", "type": "address" }, { "internalType": "bytes", "name": "data", "type": "bytes" }, { "internalType": "bool", "name": "finalize", "type": "bool" }], "name": "upgradeToAndCall", "outputs": [], "stateMutability": "payable", "type": "function" },
            { "stateMutability": "payable", "type": "receive" }
        ],
        "bytecode": "608060405260405162001836380380620018368339810160408190526200002691620004d4565b600080546001600160a01b03191633178155839082906200004b9083908390620000c9565b506200007b905060017fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610462000607565b600080516020620017ef833981519152146200009b576200009b6200065c565b620000a68262000106565b5050336000908152600260205260409020805460ff191660011790555062000688565b620000d48362000161565b600082511180620000e25750805b156200010157620000ff8383620001a360201b62000b2f1760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f62000131620001d2565b604080516001600160a01b03928316815291841660208301520160405180910390a16200015e816200020b565b50565b6200016c81620002c0565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620001cb83836040518060600160405280602781526020016200180f6027913962000374565b9392505050565b6000620001fc600080516020620017ef83398151915260001b620003f360201b62000b5b1760201c565b546001600160a01b0316919050565b6001600160a01b038116620002765760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b806200029f600080516020620017ef83398151915260001b620003f360201b62000b5b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b620002d681620003f660201b62000b5e1760201c565b6200033a5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016200026d565b806200029f7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620003f360201b62000b5b1760201c565b6060600080856001600160a01b031685604051620003939190620005b4565b600060405180830381855af49150503d8060008114620003d0576040519150601f19603f3d011682016040523d82523d6000602084013e620003d5565b606091505b509092509050620003e98683838762000405565b9695505050505050565b90565b6001600160a01b03163b151590565b60608315620004765782516200046e576001600160a01b0385163b6200046e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016200026d565b508162000482565b6200048283836200048a565b949350505050565b8151156200049b5781518083602001fd5b8060405162461bcd60e51b81526004016200026d9190620005d2565b80516001600160a01b0381168114620004cf57600080fd5b919050565b600080600060608486031215620004ea57600080fd5b620004f584620004b7565b92506200050560208501620004b7565b60408501519092506001600160401b03808211156200052357600080fd5b818601915086601f8301126200053857600080fd5b8151818111156200054d576200054d62000672565b604051601f8201601f19908116603f0116810190838211818310171562000578576200057862000672565b816040528281528960208487010111156200059257600080fd5b620005a58360208301602088016200062d565b80955050505050509250925092565b60008251620005c88184602087016200062d565b9190910192915050565b6020815260008251806020840152620005f38160408501602087016200062d565b601f01601f19169190910160400192915050565b6000828210156200062857634e487b7160e01b600052601160045260246000fd5b500390565b60005b838110156200064a57818101518382015260200162000630565b83811115620000ff5750506000910152565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b61115780620006986000396000f3fe6080604052600436106100b55760003560e01c80639c52a7f111610069578063c24bcb701161004e578063c24bcb70146101ed578063d4ee1d9014610200578063f2fde38b1461022d576100c4565b80639c52a7f1146101ad578063a2f55ae5146101cd576100c4565b8063605361721161009a578063605361721461014b578063653c3ee4146101605780638da5cb5b14610180576100c4565b80633fd8cc4e146100cc5780635c60da1b14610111576100c4565b366100c4576100c261024d565b005b6100c261024d565b3480156100d857600080fd5b506100fc6100e7366004610f28565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561011d57600080fd5b5061012661025f565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610108565b34801561015757600080fd5b506100c261026e565b34801561016c57600080fd5b506100c261017b366004610f43565b61039d565b34801561018c57600080fd5b506000546101269073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101b957600080fd5b506100c26101c8366004610f28565b610661565b3480156101d957600080fd5b506100c26101e8366004610f28565b610708565b6100c26101fb366004610f8a565b6107ab565b34801561020c57600080fd5b506001546101269073ffffffffffffffffffffffffffffffffffffffff1681565b34801561023957600080fd5b506100c2610248366004610f28565b610a98565b61025d610258610b7a565b610b84565b565b6000610269610b7a565b905090565b60015473ffffffffffffffffffffffffffffffffffffffff16331461031a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b816103a6610bad565b6040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff919091169063a3818b3b9060240160206040518083038186803b15801561040d57600080fd5b505afa158015610421573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104459190611033565b8061045f57503360009081526002602052604090205460ff165b6104c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f6e6f7420617574680000000000000000000000000000000000000000000000006044820152606401610311565b7f8bb564a0863bb1e13757a10aadba40bc2510c2e7f716e75214c9c013269256d75460ff1615610551576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f66696e616c697a656400000000000000000000000000000000000000000000006044820152606401610311565b610559610b7a565b73ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146105ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f696e76616c696420636f6e7472616374000000000000000000000000000000006044820152606401610311565b6040805160008082526020820190925261060991859190610bed565b811561065b577f8bb564a0863bb1e13757a10aadba40bc2510c2e7f716e75214c9c013269256d780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168315151790555b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461068557600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461072c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016106fd565b836107b4610bad565b6040517fa3818b3b00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff919091169063a3818b3b9060240160206040518083038186803b15801561081b57600080fd5b505afa15801561082f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108539190611033565b8061086d57503360009081526002602052604090205460ff165b6108d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f6e6f7420617574680000000000000000000000000000000000000000000000006044820152606401610311565b7f8bb564a0863bb1e13757a10aadba40bc2510c2e7f716e75214c9c013269256d75460ff161561095f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f66696e616c697a656400000000000000000000000000000000000000000000006044820152606401610311565b610967610b7a565b73ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146109fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f696e76616c696420636f6e7472616374000000000000000000000000000000006044820152606401610311565b610a3e8585858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525060019250610bed915050565b8115610a90577f8bb564a0863bb1e13757a10aadba40bc2510c2e7f716e75214c9c013269256d780547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168315151790555b505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610abc57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016106fd565b6060610b5483836040518060600160405280602781526020016110fb60279139610c12565b9392505050565b90565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b6000610269610c97565b3660008037600080366000845af43d6000803e808015610ba3573d6000f35b3d6000fd5b505050565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b5473ffffffffffffffffffffffffffffffffffffffff16919050565b610bf683610cbf565b600082511180610c035750805b15610ba85761065b8383610b2f565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051610c3c9190611050565b600060405180830381855af49150503d8060008114610c77576040519150601f19603f3d011682016040523d82523d6000602084013e610c7c565b606091505b5091509150610c8d86838387610d0c565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc610bd1565b610cc881610db1565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60608315610d9f578251610d985773ffffffffffffffffffffffffffffffffffffffff85163b610d98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610311565b5081610da9565b610da98383610ebb565b949350505050565b73ffffffffffffffffffffffffffffffffffffffff81163b610e55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610311565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b815115610ecb5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610311919061106c565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f2357600080fd5b919050565b600060208284031215610f3a57600080fd5b610b5482610eff565b600080600060608486031215610f5857600080fd5b610f6184610eff565b9250610f6f60208501610eff565b91506040840135610f7f816110e9565b809150509250925092565b600080600080600060808688031215610fa257600080fd5b610fab86610eff565b9450610fb960208701610eff565b9350604086013567ffffffffffffffff80821115610fd657600080fd5b818801915088601f830112610fea57600080fd5b813581811115610ff957600080fd5b89602082850101111561100b57600080fd5b6020830195508094505050506060860135611025816110e9565b809150509295509295909350565b60006020828403121561104557600080fd5b8151610b54816110e9565b600082516110628184602087016110bd565b9190910192915050565b602081526000825180602084015261108b8160408501602087016110bd565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60005b838110156110d85781810151838201526020016110c0565b8381111561065b5750506000910152565b80151581146110f757600080fd5b5056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220383789a6e45c9a47dac09eac404c683f3cb1dad906b8e3ae1f596a621e77192964736f6c63430008060033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ContractProxy.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ContractProxy.json.ts"], function (require, exports, eth_contract_13, OSWAP_ContractProxy_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_ContractProxy = void 0;
    class OSWAP_ContractProxy extends eth_contract_13.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_ContractProxy_json_1.default.abi, OSWAP_ContractProxy_json_1.default.bytecode);
            this.assign();
        }
        deploy(params, _value) {
            return this.__deploy([params.logic, params.votingManager, this.wallet.utils.stringToBytes(params.data)], { value: _value });
        }
        parseAdminChangedEvent(receipt) {
            return this.parseEvents(receipt, "AdminChanged").map(e => this.decodeAdminChangedEvent(e));
        }
        decodeAdminChangedEvent(event) {
            let result = event.data;
            return {
                previousAdmin: result.previousAdmin,
                newAdmin: result.newAdmin,
                _event: event
            };
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseBeaconUpgradedEvent(receipt) {
            return this.parseEvents(receipt, "BeaconUpgraded").map(e => this.decodeBeaconUpgradedEvent(e));
        }
        decodeBeaconUpgradedEvent(event) {
            let result = event.data;
            return {
                beacon: result.beacon,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseUpgradedEvent(receipt) {
            return this.parseEvents(receipt, "Upgraded").map(e => this.decodeUpgradedEvent(e));
        }
        decodeUpgradedEvent(event) {
            let result = event.data;
            return {
                implementation: result.implementation,
                _event: event
            };
        }
        assign() {
            let implementation_call = async () => {
                let result = await this.call('implementation');
                return result;
            };
            this.implementation = implementation_call;
            let isPermitted_call = async (param1) => {
                let result = await this.call('isPermitted', [param1]);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let newOwner_call = async () => {
                let result = await this.call('newOwner');
                return result;
            };
            this.newOwner = newOwner_call;
            let owner_call = async () => {
                let result = await this.call('owner');
                return result;
            };
            this.owner = owner_call;
            let deny_send = async (user) => {
                let result = await this.send('deny', [user]);
                return result;
            };
            let deny_call = async (user) => {
                let result = await this.call('deny', [user]);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let permit_send = async (user) => {
                let result = await this.send('permit', [user]);
                return result;
            };
            let permit_call = async (user) => {
                let result = await this.call('permit', [user]);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let takeOwnership_send = async () => {
                let result = await this.send('takeOwnership');
                return result;
            };
            let takeOwnership_call = async () => {
                let result = await this.call('takeOwnership');
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner) => {
                let result = await this.send('transferOwnership', [newOwner]);
                return result;
            };
            let transferOwnership_call = async (newOwner) => {
                let result = await this.call('transferOwnership', [newOwner]);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let upgradeToParams = (params) => [params.oldImplementation, params.newImplementation, params.finalize];
            let upgradeTo_send = async (params) => {
                let result = await this.send('upgradeTo', upgradeToParams(params));
                return result;
            };
            let upgradeTo_call = async (params) => {
                let result = await this.call('upgradeTo', upgradeToParams(params));
                return;
            };
            this.upgradeTo = Object.assign(upgradeTo_send, {
                call: upgradeTo_call
            });
            let upgradeToAndCallParams = (params) => [params.oldImplementation, params.newImplementation, this.wallet.utils.stringToBytes(params.data), params.finalize];
            let upgradeToAndCall_send = async (params, _value) => {
                let result = await this.send('upgradeToAndCall', upgradeToAndCallParams(params), { value: _value });
                return result;
            };
            let upgradeToAndCall_call = async (params, _value) => {
                let result = await this.call('upgradeToAndCall', upgradeToAndCallParams(params), { value: _value });
                return;
            };
            this.upgradeToAndCall = Object.assign(upgradeToAndCall_send, {
                call: upgradeToAndCall_call
            });
        }
    }
    exports.OSWAP_ContractProxy = OSWAP_ContractProxy;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainTrollRegistry.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainTrollRegistry.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract IERC20", "name": "_govToken", "type": "address" }, { "internalType": "contract I_TrollNFT[]", "name": "_superTrollNft", "type": "address[]" }, { "internalType": "contract I_TrollNFT[]", "name": "_generalTrollNft", "type": "address[]" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "troll", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "isSuperTroll", "type": "bool" }], "name": "AddTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "blocked", "type": "bool" }], "name": "BlockNftTokenId", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [], "name": "Resume", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }], "name": "Shutdown", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "backer", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakesChange", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakesBalance", "type": "uint256" }], "name": "StakeGeneralToll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "backer", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakesChange", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakesBalance", "type": "uint256" }], "name": "StakeSuperToll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "backer", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakesChange", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakesBalance", "type": "uint256" }], "name": "UnstakeGeneralToll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "backer", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakesChange", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "stakesBalance", "type": "uint256" }], "name": "UnstakeSuperToll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "indexed": false, "internalType": "enum OSWAP_MainChainTrollRegistry.TrollType", "name": "trollType", "type": "uint8" }], "name": "UpdateNFT", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "oldTroll", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newTroll", "type": "address" }], "name": "UpdateTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract OSWAP_VotingManager", "name": "newVotingManager", "type": "address" }], "name": "UpdateVotingManager", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newTrollRegistry", "type": "address" }], "name": "Upgrade", "type": "event" },
            { "inputs": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "addStakesGeneralTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "addStakesSuperTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "bool", "name": "_isSuperTroll", "type": "bool" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "addTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "backer", "type": "address" }, { "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "backerStaking", "outputs": [{ "components": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "internalType": "struct OSWAP_MainChainTrollRegistry.StakeTo[]", "name": "stakings", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "backer", "type": "address" }], "name": "getStakeTo", "outputs": [{ "components": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "internalType": "struct OSWAP_MainChainTrollRegistry.StakeTo[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "getStakedBy", "outputs": [{ "components": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "internalType": "struct OSWAP_MainChainTrollRegistry.Nft[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "troll", "type": "address" }], "name": "getStakes", "outputs": [{ "internalType": "uint256", "name": "totalStakes", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "getStakesByTrollProfile", "outputs": [{ "internalType": "uint256", "name": "totalStakes", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "getTrollByNft", "outputs": [{ "internalType": "address", "name": "troll", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "getTrollProperties", "outputs": [{ "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "enum OSWAP_MainChainTrollRegistry.TrollType", "name": "trollType", "type": "uint8" }, { "internalType": "uint256", "name": "nftCount", "type": "uint256" }], "internalType": "struct OSWAP_MainChainTrollRegistry.TrollProfile", "name": "troll", "type": "tuple" }, { "components": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "internalType": "struct OSWAP_MainChainTrollRegistry.Nft[]", "name": "nfts", "type": "tuple[]" }, { "internalType": "address[]", "name": "backers", "type": "address[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "trollAddress", "type": "address" }], "name": "getTrollPropertiesByAddress", "outputs": [{ "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "enum OSWAP_MainChainTrollRegistry.TrollType", "name": "trollType", "type": "uint8" }, { "internalType": "uint256", "name": "nftCount", "type": "uint256" }], "internalType": "struct OSWAP_MainChainTrollRegistry.TrollProfile", "name": "troll", "type": "tuple" }, { "components": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "internalType": "struct OSWAP_MainChainTrollRegistry.Nft[]", "name": "nfts", "type": "tuple[]" }, { "internalType": "address[]", "name": "backers", "type": "address[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getTrolls", "outputs": [{ "components": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "enum OSWAP_MainChainTrollRegistry.TrollType", "name": "trollType", "type": "uint8" }, { "internalType": "uint256", "name": "nftCount", "type": "uint256" }], "internalType": "struct OSWAP_MainChainTrollRegistry.TrollProfile[]", "name": "trolls", "type": "tuple[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "govToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "_votingManager", "type": "address" }], "name": "initAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newTrollRegistry", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract I_TrollNFT", "name": "", "type": "address" }], "name": "nftType", "outputs": [{ "internalType": "enum OSWAP_MainChainTrollRegistry.TrollType", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "bytes", "name": "", "type": "bytes" }], "name": "onERC721Received", "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "ownerTrolls", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "ownerTrollsLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "resume", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "shutdownByAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "shutdownByVoting", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "stakeGeneralTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "stakeOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "stakeSuperTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakeTo", "outputs": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "timestamp", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract I_TrollNFT", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakeToInv", "outputs": [{ "internalType": "address", "name": "backer", "type": "address" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "backer", "type": "address" }], "name": "stakeToLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakedBy", "outputs": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract I_TrollNFT", "name": "", "type": "address" }, { "internalType": "uint256", "name": "", "type": "uint256" }], "name": "stakedByInv", "outputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "index", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "stakedByLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "totalStake", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "trollNft", "outputs": [{ "internalType": "contract I_TrollNFT", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract I_TrollNFT", "name": "", "type": "address" }], "name": "trollNftInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "trollNftLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "trollProfileInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "trollProfiles", "outputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "enum OSWAP_MainChainTrollRegistry.TrollType", "name": "trollType", "type": "uint8" }, { "internalType": "uint256", "name": "nftCount", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "trollProfilesLength", "outputs": [{ "internalType": "uint256", "name": "length", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstakeGeneralTroll", "outputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "uint256", "name": "tokenId", "type": "uint256" }], "name": "unstakeSuperTroll", "outputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract I_TrollNFT", "name": "nft", "type": "address" }, { "internalType": "enum OSWAP_MainChainTrollRegistry.TrollType", "name": "trolltype", "type": "uint8" }], "name": "updateNft", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "address", "name": "newTroll", "type": "address" }, { "internalType": "bytes", "name": "signature", "type": "bytes" }], "name": "updateTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "updateVotingManager", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_trollRegistry", "type": "address" }], "name": "upgrade", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_trollRegistry", "type": "address" }], "name": "upgradeByAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "votingManager", "outputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b5060405162005ced38038062005ced83398101604081905262000034916200041f565b600080546001600160a01b0319163317815560016003556001600160601b0319606085901b166080528251905b818110156200014a5760008482815181106200008157620000816200052c565b6020908102919091018101516001600160a01b0381166000818152600d84526040808220879055600c805460018082019092557fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70180546001600160a01b03191685179055600e90955290819020805460ff19168517905551919350917f16ddf45031c2e990a872494124626939277cfe2d55a7c67328719867b400513b916200012c91906200049e565b60405180910390a250806200014181620004e2565b91505062000061565b50815160005b81811015620002495760008482815181106200017057620001706200052c565b602002602001015190508382620001889190620004c7565b6001600160a01b0382166000818152600d6020908152604080832094909455600c8054600181019091557fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70180546001600160a01b03191684179055600e9052829020805460ff19166002908117909155915190917f16ddf45031c2e990a872494124626939277cfe2d55a7c67328719867b400513b916200022b91906200049e565b60405180910390a250806200024081620004e2565b91505062000150565b506040805160808101825260008082526020820181815292820181815260608301829052600580546001810182559252825160039092027f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0810180546001600160a01b039485166001600160a01b031991821617825595517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db19092018054929094169582168617845591519394919392916001600160a81b031990911617600160a01b83600481111562000321576200032162000516565b02179055506060919091015160029182015533600090815260209190915260409020805460ff1916600117905550620005719350505050565b600082601f8301126200036c57600080fd5b815160206001600160401b03808311156200038b576200038b62000542565b8260051b604051601f19603f83011681018181108482111715620003b357620003b362000542565b60405284815283810192508684018288018501891015620003d357600080fd5b600092505b858310156200040157620003ec816200040d565b845292840192600192909201918401620003d8565b50979650505050505050565b80516200041a8162000558565b919050565b6000806000606084860312156200043557600080fd5b8351620004428162000558565b60208501519093506001600160401b03808211156200046057600080fd5b6200046e878388016200035a565b935060408601519150808211156200048557600080fd5b5062000494868287016200035a565b9150509250925092565b6020810160058310620004c157634e487b7160e01b600052602160045260246000fd5b91905290565b60008219821115620004dd57620004dd62000500565b500190565b6000600019821415620004f957620004f962000500565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200056e57600080fd5b50565b60805160601c61574f6200059e6000396000818161039f0152818161398301526139f7015261574f6000f3fe608060405234801561001057600080fd5b50600436106103625760003560e01c806387fc5c4e116101c8578063bba588ca11610104578063cf86758a116100a2578063de447c6c1161007c578063de447c6c14610932578063e33a7e9714610945578063ef9414fc14610958578063f2fde38b1461097b57600080fd5b8063cf86758a146108da578063d4ee1d90146108ed578063da1bcdf01461090d57600080fd5b8063c1e4eba7116100de578063c1e4eba71461085e578063c28758e71461087e578063cc8c23d114610891578063ce5889e6146108a457600080fd5b8063bba588ca146107e0578063bba68e1214610800578063be8e42831461081357600080fd5b80639cd83e1d11610171578063a2f55ae51161014b578063a2f55ae51461076b578063a52fc2321461077e578063b562754c146107c5578063b8624127146107d857600080fd5b80639cd83e1d146106d85780639df9d5a0146106eb578063a2a317221461072157600080fd5b80638da5cb5b116101a25780638da5cb5b146106925780639c52a7f1146106b25780639c7d51dc146106c557600080fd5b806387fc5c4e1461065f5780638a942473146106675780638b0e9f3f1461068957600080fd5b8063432121be116102a2578063606a630f116102405780637b7740441161021a5780637b774044146105e75780637ba6f458146106265780637f21e566146106395780637f97f2261461064c57600080fd5b8063606a630f146105c45780636468fca1146105cc578063653b2b8a146105d457600080fd5b80635678cf221161027c5780635678cf221461056e5780635a8124651461059e5780635c975abb146105b157806360536172146105bc57600080fd5b8063432121be1461052857806344fe9eb01461053b5780634fd3d1a41461054e57600080fd5b80631d4c6b631161030f5780633820a526116102e95780633820a526146104955780633fd8cc4e146104b5578063425d04f1146104e8578063426233601461050857600080fd5b80631d4c6b63146104505780632170ee67146104635780633043ef751461047557600080fd5b80630900f010116103405780630900f010146103e65780630d504090146103f9578063150b7a021461040c57600080fd5b8063031cd7a914610367578063046f7da21461039057806305268cff1461039a575b600080fd5b61037a6103753660046150e7565b61098e565b6040516103879190615394565b60405180910390f35b610398610b2f565b005b6103c17f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610387565b6103986103f4366004614f3b565b610d00565b6103986104073660046150e7565b610e19565b61041f61041a366004614f58565b610fcd565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610387565b6103c161045e366004615193565b610ff7565b6005545b604051908152602001610387565b610467610483366004615193565b6000908152600a602052604090205490565b6104676104a3366004614f3b565b60066020526000908152604090205481565b6104d86104c3366004614f3b565b60026020526000908152604090205460ff1681565b6040519015158152602001610387565b6104676104f6366004614f3b565b600d6020526000908152604090205481565b610467610516366004614f3b565b60106020526000908152604090205481565b610398610536366004615056565b61102e565b610398610549366004614f3b565b61168c565b61056161055c366004615225565b6116b0565b604051610387919061540e565b61059161057c366004614f3b565b600e6020526000908152604090205460ff1681565b604051610387919061545c565b6103986105ac366004614f3b565b611866565b60045460ff166104d8565b6103986119d8565b610398611b02565b610398611ca7565b6104676105e23660046150bb565b611e0b565b6105fa6105f5366004615225565b611e3c565b6040805173ffffffffffffffffffffffffffffffffffffffff9093168352602083019190915201610387565b610467610634366004614f3b565b611e8f565b6103986106473660046151ed565b611ec5565b61039861065a3660046151ed565b612065565b600c54610467565b61067a610675366004615193565b612205565b604051610387939291906154bb565b610467600f5481565b6000546103c19073ffffffffffffffffffffffffffffffffffffffff1681565b6103986106c0366004614f3b565b6124bd565b61037a6106d3366004614f3b565b61255d565b6104676106e6366004615193565b612617565b6104676106f9366004614f3b565b73ffffffffffffffffffffffffffffffffffffffff1660009081526007602052604090205490565b61073461072f3660046150bb565b61276e565b6040805173ffffffffffffffffffffffffffffffffffffffff90951685526020850193909352918301526060820152608001610387565b610398610779366004614f3b565b6127cb565b6107b061078c3660046150bb565b600b6020908152600092835260408084209091529082529020805460019091015482565b60408051928352602083019190915201610387565b6103c16107d33660046150bb565b61286e565b61039861294b565b6011546103c19073ffffffffffffffffffffffffffffffffffffffff1681565b61039861080e3660046151c5565b612a58565b6105fa6108213660046150bb565b60096020908152600092835260408084209091529082529020805460019091015473ffffffffffffffffffffffffffffffffffffffff9091169082565b61087161086c366004615193565b612e94565b6040516103879190615381565b61039861088c3660046150e7565b612f1e565b61039861089f366004615139565b6130be565b6104676108b2366004614f3b565b73ffffffffffffffffffffffffffffffffffffffff1660009081526008602052604090205490565b61067a6108e8366004614f3b565b613312565b6001546103c19073ffffffffffffffffffffffffffffffffffffffff1681565b6004546103c190610100900473ffffffffffffffffffffffffffffffffffffffff1681565b6104676109403660046150bb565b613377565b6104676109533660046150bb565b61352a565b61096b610966366004615193565b6136ce565b6040516103879493929190615340565b610398610989366004614f3b565b613738565b73ffffffffffffffffffffffffffffffffffffffff831660009081526008602052604090208054606091906109c38486615535565b11156109d95780546109d690859061554d565b92505b8267ffffffffffffffff8111156109f2576109f26156ba565b604051908082528060200260200182016040528015610a6457816020015b610a516040518060800160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081525090565b815260200190600190039081610a105790505b5091508360005b84811015610b255782610a7e8784615535565b81548110610a8e57610a8e61568b565b6000918252602091829020604080516080810182526004909302909101805473ffffffffffffffffffffffffffffffffffffffff16835260018101549383019390935260028301549082015260039091015460608201528451859083908110610af957610af961568b565b60200260200101819052508180610b0f906155c5565b9250508080610b1d906155c5565b915050610a6b565b5050509392505050565b600480546040517fa3818b3b0000000000000000000000000000000000000000000000000000000081523392810192909252610100900473ffffffffffffffffffffffffffffffffffffffff169063a3818b3b9060240160206040518083038186803b158015610b9e57600080fd5b505afa158015610bb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd6919061511c565b610c41576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e670000000000000000000060448201526064015b60405180910390fd5b60045460ff16610cad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e4f5420504155534544210000000000000000000000000000000000000000006044820152606401610c38565b600480547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556040517f490d6d11e278f168be9be39e46297f72ea877136d5bccad9cf4993e63a29568f90600090a1565b600480546040517fa3818b3b0000000000000000000000000000000000000000000000000000000081523392810192909252610100900473ffffffffffffffffffffffffffffffffffffffff169063a3818b3b9060240160206040518083038186803b158015610d6f57600080fd5b505afa158015610d83573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da7919061511c565b610e0d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610c38565b610e16816137cf565b50565b610e21613842565b60045460ff1615610e8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c38565b6000610e9b8484846138b6565b9050600260058281548110610eb257610eb261568b565b906000526020600020906003020160010160149054906101000a900460ff166004811115610ee257610ee261562d565b14610f49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c6964207479706500000000000000000000000000000000000000006044820152606401610c38565b3360008181526010602090815260409182902054825173ffffffffffffffffffffffffffffffffffffffff8916815291820187905291810185905260608101919091528291907f3382a3810f9820eedad39485adbc997efa01ec1e6f28a42faa48591c0f021313906080015b60405180910390a350610fc86001600355565b505050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b600c818154811061100757600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60045460ff161561109b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c38565b3373ffffffffffffffffffffffffffffffffffffffff8516611119576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c69642074726f6c6c000000000000000000000000000000000000006044820152606401610c38565b73ffffffffffffffffffffffffffffffffffffffff8516600090815260066020526040902054156111a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f74726f6c6c20616c7265616479206578697374730000000000000000000000006044820152606401610c38565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015611205575073ffffffffffffffffffffffffffffffffffffffff8116600090815260066020526040902054155b61126b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6f776e65722063616e6e6f7420626520612074726f6c6c0000000000000000006044820152606401610c38565b73ffffffffffffffffffffffffffffffffffffffff851660009081526002602052604090205460ff1615611321576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f7065726d697474656420616464726573732063616e6e6f74206265206120747260448201527f6f6c6c00000000000000000000000000000000000000000000000000000000006064820152608401610c38565b8473ffffffffffffffffffffffffffffffffffffffff1661143484848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b16602082015260340191506113a99050565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905280516020918201207f19457468657265756d205369676e6564204d6573736167653a0a33320000000091830191909152603c820152605c0160405160208183030381529060405280519060200120613bca90919063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff16146114b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f696e76616c69642074726f6c6c207369676e61747572650000000000000000006044820152606401610c38565b6005805473ffffffffffffffffffffffffffffffffffffffff808816600081815260066020908152604080832086905593871680835260078252848320805460018101825590845292829020909201859055835160808101855291825281019190915291929190810187611526576002611529565b60015b600481111561153a5761153a61562d565b81526000602091820181905283546001808201865594825290829020835160039092020180547fffffffffffffffffffffffff000000000000000000000000000000000000000090811673ffffffffffffffffffffffffffffffffffffffff938416178255928401519481018054938416959092169485178255604084015193949093927fffffffffffffffffffffff0000000000000000000000000000000000000000001617740100000000000000000000000000000000000000008360048111156116095761160961562d565b0217905550606082015181600201555050808673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f5a5157dadc8c8bd7d4fc4714b56b66645f6b03fa2bb608c11ee6c5d089a601f78860405161167c911515815260200190565b60405180910390a4505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e0d57600080fd5b600554606090831015611860576005546116ca8385615535565b11156116e1576005546116de90849061554d565b91505b8167ffffffffffffffff8111156116fa576116fa6156ba565b60405190808252806020026020018201604052801561176a57816020015b6040805160808101825260008082526020808301829052928201819052606082015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9092019101816117185790505b50905060005b8281101561185e5760056117848583615535565b815481106117945761179461568b565b6000918252602091829020604080516080810182526003909302909101805473ffffffffffffffffffffffffffffffffffffffff908116845260018201549081169484019490945291929083019060ff7401000000000000000000000000000000000000000090910416600481111561180f5761180f61562d565b60048111156118205761182061562d565b81526020016002820154815250508282815181106118405761184061568b565b60200260200101819052508080611856906155c5565b915050611770565b505b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461188a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8116611907576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e756c6c206164647265737300000000000000000000000000000000000000006044820152606401610c38565b600454610100900473ffffffffffffffffffffffffffffffffffffffff161561198c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f616c7265616479207365740000000000000000000000000000000000000000006044820152606401610c38565b6004805473ffffffffffffffffffffffffffffffffffffffff909216610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314611a7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610c38565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b6000600460019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663568621756040518163ffffffff1660e01b815260040160206040518083038186803b158015611b6c57600080fd5b505afa158015611b80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ba49190615176565b905073ffffffffffffffffffffffffffffffffffffffff8116611c23576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f72650000000000000000000000006044820152606401610c38565b600480547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff8481168202929092179283905560405192041681527fe5399da4ca4a23fdcadfc64b00ca059531760b0f400124896ca6d487146e2bba906020015b60405180910390a150565b3360009081526002602052604090205460ff16611d46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610c38565b60045460ff1615611db3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c38565b600480547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560405133907f28b4c24cb1012c094cd2f59f98e89d791973295f8fda6eaa118022d6d318960a90600090a2565b60076020528160005260406000208181548110611e2757600080fd5b90600052602060002001600091509150505481565b600a6020528160005260406000208181548110611e5857600080fd5b60009182526020909120600290910201805460019091015473ffffffffffffffffffffffffffffffffffffffff9091169250905082565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260066020526040812054611ebe81612617565b9392505050565b611ecd613842565b60045460ff1615611f3a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c38565b600160058481548110611f4f57611f4f61568b565b906000526020600020906003020160010160149054906101000a900460ff166004811115611f7f57611f7f61562d565b14611fe6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c6964207479706500000000000000000000000000000000000000006044820152606401610c38565b6000611ff3848484613bee565b3360008181526010602090815260409182902054825173ffffffffffffffffffffffffffffffffffffffff89168152918201879052918101849052606081019190915291925085917f1c12b959181c41be80f7832b8e802318a5297f109d7aa0a41c71f1deae8d668390608001610fb5565b61206d613842565b60045460ff16156120da576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c38565b6002600584815481106120ef576120ef61568b565b906000526020600020906003020160010160149054906101000a900460ff16600481111561211f5761211f61562d565b14612186576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c6964207479706500000000000000000000000000000000000000006044820152606401610c38565b6000612193848484613bee565b3360008181526010602090815260409182902054825173ffffffffffffffffffffffffffffffffffffffff89168152918201879052918101849052606081019190915291925085917f3382a3810f9820eedad39485adbc997efa01ec1e6f28a42faa48591c0f02131390608001610fb5565b6040805160808101825260008082526020820181905291810182905260608101919091526060806005848154811061223f5761223f61568b565b6000918252602091829020604080516080810182526003909302909101805473ffffffffffffffffffffffffffffffffffffffff908116845260018201549081169484019490945291929083019060ff740100000000000000000000000000000000000000009091041660048111156122ba576122ba61562d565b60048111156122cb576122cb61562d565b81526020016002820154815250509250600a6000858152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b828210156123635760008481526020908190206040805180820190915260028502909101805473ffffffffffffffffffffffffffffffffffffffff16825260019081015482840152908352909201910161230e565b505082519294508291505067ffffffffffffffff811115612386576123866156ba565b6040519080825280602002602001820160405280156123af578160200160208202803683370190505b50915060005b818110156124b457600960008583815181106123d3576123d361568b565b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600085838151811061242d5761242d61568b565b602002602001015160200151815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683828151811061247d5761247d61568b565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152806124ac816155c5565b9150506123b5565b50509193909250565b60005473ffffffffffffffffffffffffffffffffffffffff1633146124e157600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a78849101611c9c565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600860209081526040808320805482518185028101850190935280835260609492939192909184015b8282101561260c5760008481526020908190206040805160808101825260048602909201805473ffffffffffffffffffffffffffffffffffffffff1683526001808201548486015260028201549284019290925260030154606083015290835290920191016125a2565b505050509050919050565b6000818152600a602052604081208054825b818110156127665760008382815481106126455761264561568b565b6000918252602090912060029091020190506001815473ffffffffffffffffffffffffffffffffffffffff166000908152600e602052604090205460ff1660048111156126945761269461562d565b141561275357805460018201546040517f8c8c8a5000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90921691638c8c8a50916126f69160040190815260200190565b60206040518083038186803b15801561270e57600080fd5b505afa158015612722573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061274691906151ac565b6127509086615535565b94505b508061275e816155c5565b915050612629565b505050919050565b6008602052816000526040600020818154811061278a57600080fd5b6000918252602090912060049091020180546001820154600283015460039093015473ffffffffffffffffffffffffffffffffffffffff9092169450925084565b60005473ffffffffffffffffffffffffffffffffffffffff1633146127ef57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf59101611c9c565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600b6020908152604080832084845290915281205480612906576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f7420657869737473000000000000000000000000000000000000000000006044820152606401610c38565b600581815481106129195761291961568b565b600091825260209091206001600390920201015473ffffffffffffffffffffffffffffffffffffffff16949350505050565b600480546040517fa3818b3b0000000000000000000000000000000000000000000000000000000081523392810192909252610100900473ffffffffffffffffffffffffffffffffffffffff169063a3818b3b9060240160206040518083038186803b1580156129ba57600080fd5b505afa1580156129ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129f2919061511c565b611d46576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610c38565b73ffffffffffffffffffffffffffffffffffffffff8316612ad5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c69642074726f6c6c000000000000000000000000000000000000006044820152606401610c38565b73ffffffffffffffffffffffffffffffffffffffff831660009081526006602052604090205415612b62576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e657754726f6c6c20616c7265616479206578697374730000000000000000006044820152606401610c38565b73ffffffffffffffffffffffffffffffffffffffff831660009081526002602052604090205460ff1615612c18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f7065726d697474656420616464726573732063616e6e6f74206265206120747260448201527f6f6c6c00000000000000000000000000000000000000000000000000000000006064820152608401610c38565b3373ffffffffffffffffffffffffffffffffffffffff1660058581548110612c4257612c4261568b565b600091825260209091206003909102015473ffffffffffffffffffffffffffffffffffffffff1614612cd0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e65720000000000000000000000000000000000006044820152606401610c38565b8273ffffffffffffffffffffffffffffffffffffffff16612d5883838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506040517fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003360601b16602082015260340191506113a99050565b73ffffffffffffffffffffffffffffffffffffffff1614612dd5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f696e76616c69642074726f6c6c207369676e61747572650000000000000000006044820152606401610c38565b600060058581548110612dea57612dea61568b565b600091825260208083206003929092029091016001810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff8a8116918217909355808652600690945260408086208b90559116808552818520859055905191945092839189917fa809954178f86ac2228f0b080243af1f1e8fa8931fde712147cc69b266967cc191a4505050505050565b6060600a6000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b8282101561260c5760008481526020908190206040805180820190915260028502909101805473ffffffffffffffffffffffffffffffffffffffff168252600190810154828401529083529092019101612ec9565b612f26613842565b60045460ff1615612f93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c38565b6000612fa08484846138b6565b9050600160058281548110612fb757612fb761568b565b906000526020600020906003020160010160149054906101000a900460ff166004811115612fe757612fe761562d565b1461304e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c6964207479706500000000000000000000000000000000000000006044820152606401610c38565b3360008181526010602090815260409182902054825173ffffffffffffffffffffffffffffffffffffffff8916815291820187905291810185905260608101919091528291907f1c12b959181c41be80f7832b8e802318a5297f109d7aa0a41c71f1deae8d668390608001610fb5565b60005473ffffffffffffffffffffffffffffffffffffffff1633146130e257600080fd5b73ffffffffffffffffffffffffffffffffffffffff82166000908152600e6020526040812054600c5460ff90911691901580613179575073ffffffffffffffffffffffffffffffffffffffff84166000818152600d6020526040902054600c805490919081106131545761315461568b565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b9050801561320757600c805473ffffffffffffffffffffffffffffffffffffffff86166000818152600d60205260408120839055600183018455929092527fdf6966c971051c3d54ec59162606531493a51404a002842f56009d7e5cf4a8c70180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055613259565b600182600481111561321b5761321b61562d565b1461323a5760048360048111156132345761323461562d565b14613250565b600383600481111561324e5761324e61562d565b145b61325957600080fd5b73ffffffffffffffffffffffffffffffffffffffff84166000908152600e6020526040902080548491907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660018360048111156132b9576132b961562d565b02179055508373ffffffffffffffffffffffffffffffffffffffff167f16ddf45031c2e990a872494124626939277cfe2d55a7c67328719867b400513b84604051613304919061545c565b60405180910390a250505050565b60408051608081018252600080825260208201819052918101829052606081019190915273ffffffffffffffffffffffffffffffffffffffff8216600090815260066020526040902054606090819061336a90612205565b9250925092509193909250565b6000613381613842565b60045460ff16156133ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c38565b60006133fa848461427b565b90925090506001600583815481106134145761341461568b565b906000526020600020906003020160010160149054906101000a900460ff1660048111156134445761344461562d565b146134ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c6964207479706500000000000000000000000000000000000000006044820152606401610c38565b3360008181526010602090815260409182902054825173ffffffffffffffffffffffffffffffffffffffff8916815291820187905291810184905260608101919091528391907f744df6fdf1e46bf94675ef68c91d2366a3d1af2c057b08a37885b722e70f7c3f906080015b60405180910390a3506118606001600355565b6000613534613842565b60045460ff16156135a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610c38565b60006135ad848461427b565b90925090506002600583815481106135c7576135c761568b565b906000526020600020906003020160010160149054906101000a900460ff1660048111156135f7576135f761562d565b1461365e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f496e76616c6964207479706500000000000000000000000000000000000000006044820152606401610c38565b3360008181526010602090815260409182902054825173ffffffffffffffffffffffffffffffffffffffff8916815291820187905291810184905260608101919091528391907fcd40dd8259555b5239d3fb50f32f4f582cc75eef596816a4031083b3fef8dfe990608001613517565b600581815481106136de57600080fd5b600091825260209091206003909102018054600182015460029092015473ffffffffffffffffffffffffffffffffffffffff91821693509082169174010000000000000000000000000000000000000000900460ff169084565b60005473ffffffffffffffffffffffffffffffffffffffff16331461375c57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b90602001611c9c565b601180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d90602001611c9c565b600260035414156138af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610c38565b6002600355565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152600b60209081526040808320878452825280832054938352600982528083208784529091529020805491929091163314613969576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f742066726f6d206261636b657200000000000000000000000000000000006044820152606401610c38565b6139ab73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163330866148f8565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b390604401602060405180830381600087803b158015613a3b57600080fd5b505af1158015613a4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613a73919061511c565b506040517fe7201063000000000000000000000000000000000000000000000000000000008152600481018590526024810184905273ffffffffffffffffffffffffffffffffffffffff86169063e720106390604401600060405180830381600087803b158015613ae357600080fd5b505af1158015613af7573d6000803e3d6000fd5b50503360009081526010602052604081208054879450909250613b1b908490615535565b9250508190555082600f6000828254613b349190615535565b9091555050600480546040517f17e42ec00000000000000000000000000000000000000000000000000000000081523392810192909252610100900473ffffffffffffffffffffffffffffffffffffffff16906317e42ec090602401600060405180830381600087803b158015613baa57600080fd5b505af1158015613bbe573d6000803e3d6000fd5b50505050509392505050565b6000806000613bd98585614993565b91509150613be6816149d9565b509392505050565b6040517f42842e0e0000000000000000000000000000000000000000000000000000000081523360048201523060248201526044810182905260009073ffffffffffffffffffffffffffffffffffffffff8416906342842e0e90606401600060405180830381600087803b158015613c6557600080fd5b505af1158015613c79573d6000803e3d6000fd5b50506040517f8c8c8a500000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff86169250638c8c8a50915060240160206040518083038186803b158015613ce357600080fd5b505afa158015613cf7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190613d1b91906151ac565b33600090815260106020526040812080549293508392909190613d3f908490615535565b9250508190555080600f6000828254613d589190615535565b909155505060058054339160009187908110613d7657613d7661568b565b6000918252602080832073ffffffffffffffffffffffffffffffffffffffff89168452600e9091526040909220546003909102909101915060ff166004811115613dc257613dc261562d565b600182015474010000000000000000000000000000000000000000900460ff166004811115613df357613df361562d565b14613e5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f496e76616c6964206e66742074797065000000000000000000000000000000006044820152606401610c38565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600060405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200183815250905080600960008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600088815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155905050600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180608001604052808973ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018a815260200142815250908060018154018082558091505060019003906000526020600020906004020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201556060820151816003015550506000600a60008a815260200190815260200160002080549050905060405180604001604052808a815260200182815250600b60008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008981526020019081526020016000206000820151816000015560208201518160010155905050600a60008a815260200190815260200160002060405180604001604052808a73ffffffffffffffffffffffffffffffffffffffff16815260200189815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015550508360020160008154809291906141e1906155c5565b9091555050600480546040517f17e42ec00000000000000000000000000000000000000000000000000000000081523392810192909252610100900473ffffffffffffffffffffffffffffffffffffffff16906317e42ec090602401600060405180830381600087803b15801561425757600080fd5b505af115801561426b573d6000803e3d6000fd5b5050505050505050509392505050565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600b602090815260408083208484529091528120805491903390836142bb57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8216600090815260086020526040812080548291906142f19060019061554d565b73ffffffffffffffffffffffffffffffffffffffff808b1660009081526009602090815260408083208d84529091529020805492945091811690871614614394576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e6f742061206261636b657200000000000000000000000000000000000000006044820152606401610c38565b8060010154935082841461446e5760008284815481106143b6576143b661568b565b90600052602060002090600402019050808386815481106143d9576143d961568b565b60009182526020808320845460049093020180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff938416178155600180860154818301556002808701549083015560039586015495909101949094558454909116825260098152604080832094840154835293905291909120018490555b8180548061447e5761447e61565c565b6000828152602080822060047fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9094019384020180547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116825560018281018590556002830185905560039092018490559390945573ffffffffffffffffffffffffffffffffffffffff8e168083526009825260408084208f85528352808420805490951685559385018390558252600b81528282208d835281528282208401548c8352600a9091529190208054919650935061455d925061554d565b915081831461461a57600081838154811061457a5761457a61568b565b906000526020600020906002020190508082858154811061459d5761459d61568b565b60009182526020808320845460029093020180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9384161781556001948501549085015584549091168252600b8152604080832094840154835293905291909120018390555b8080548061462a5761462a61565c565b6000828152602080822060027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9094019384020180547fffffffffffffffffffffffff000000000000000000000000000000000000000016815560019081018390559290935573ffffffffffffffffffffffffffffffffffffffff8c168152600b835260408082208c835290935291822082815501555060058054879081106146d5576146d561568b565b6000918252602082206002600390920201018054916146f383615590565b90915550506040517f8c8c8a500000000000000000000000000000000000000000000000000000000081526004810188905273ffffffffffffffffffffffffffffffffffffffff891690638c8c8a509060240160206040518083038186803b15801561475e57600080fd5b505afa158015614772573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061479691906151ac565b336000908152601060205260408120805492975087929091906147ba90849061554d565b9250508190555084600f60008282546147d3919061554d565b90915550506040517f42842e0e0000000000000000000000000000000000000000000000000000000081523060048201523360248201526044810188905273ffffffffffffffffffffffffffffffffffffffff8916906342842e0e90606401600060405180830381600087803b15801561484c57600080fd5b505af1158015614860573d6000803e3d6000fd5b5050600480546040517f17e42ec00000000000000000000000000000000000000000000000000000000081523392810192909252610100900473ffffffffffffffffffffffffffffffffffffffff1692506317e42ec09150602401600060405180830381600087803b1580156148d557600080fd5b505af11580156148e9573d6000803e3d6000fd5b50505050505050509250929050565b6040805173ffffffffffffffffffffffffffffffffffffffff85811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd0000000000000000000000000000000000000000000000000000000017905261498d908590614b90565b50505050565b6000808251604114156149ca5760208301516040840151606085015160001a6149be87828585614c9c565b945094505050506149d2565b506000905060025b9250929050565b60008160048111156149ed576149ed61562d565b14156149f65750565b6001816004811115614a0a57614a0a61562d565b1415614a72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610c38565b6002816004811115614a8657614a8661562d565b1415614aee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610c38565b6003816004811115614b0257614b0261562d565b1415610e16576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610c38565b6000614bf2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16614d8b9092919063ffffffff16565b805190915015610fc85780806020019051810190614c10919061511c565b610fc8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610c38565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115614cd35750600090506003614d82565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015614d27573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff8116614d7b57600060019250925050614d82565b9150600090505b94509492505050565b6060610fef8484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051614dbf9190615324565b60006040518083038185875af1925050503d8060008114614dfc576040519150601f19603f3d011682016040523d82523d6000602084013e614e01565b606091505b5091509150614e1287838387614e1d565b979650505050505050565b60608315614eb0578251614ea95773ffffffffffffffffffffffffffffffffffffffff85163b614ea9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610c38565b5081610fef565b610fef8383815115614ec55781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c38919061546a565b60008083601f840112614f0b57600080fd5b50813567ffffffffffffffff811115614f2357600080fd5b6020830191508360208285010111156149d257600080fd5b600060208284031215614f4d57600080fd5b8135611ebe816156e9565b60008060008060808587031215614f6e57600080fd5b8435614f79816156e9565b93506020850135614f89816156e9565b925060408501359150606085013567ffffffffffffffff80821115614fad57600080fd5b818701915087601f830112614fc157600080fd5b813581811115614fd357614fd36156ba565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715615019576150196156ba565b816040528281528a602084870101111561503257600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806000806060858703121561506c57600080fd5b8435615077816156e9565b935060208501356150878161570b565b9250604085013567ffffffffffffffff8111156150a357600080fd5b6150af87828801614ef9565b95989497509550505050565b600080604083850312156150ce57600080fd5b82356150d9816156e9565b946020939093013593505050565b6000806000606084860312156150fc57600080fd5b8335615107816156e9565b95602085013595506040909401359392505050565b60006020828403121561512e57600080fd5b8151611ebe8161570b565b6000806040838503121561514c57600080fd5b8235615157816156e9565b915060208301356005811061516b57600080fd5b809150509250929050565b60006020828403121561518857600080fd5b8151611ebe816156e9565b6000602082840312156151a557600080fd5b5035919050565b6000602082840312156151be57600080fd5b5051919050565b600080600080606085870312156151db57600080fd5b843593506020850135615087816156e9565b60008060006060848603121561520257600080fd5b833592506020840135615214816156e9565b929592945050506040919091013590565b6000806040838503121561523857600080fd5b50508035926020909101359150565b600081518084526020808501945080840160005b83811015615298578151805173ffffffffffffffffffffffffffffffffffffffff168852830151838801526040909601959082019060010161525b565b509495945050505050565b600581106152da577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9052565b73ffffffffffffffffffffffffffffffffffffffff80825116835280602083015116602084015250604081015161531860408401826152a3565b50606090810151910152565b60008251615336818460208701615564565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff8581168252841660208201526080810161537260408301856152a3565b82606083015295945050505050565b602081526000611ebe6020830184615247565b602080825282518282018190526000919060409081850190868401855b82811015615401578151805173ffffffffffffffffffffffffffffffffffffffff1685528681015187860152858101518686015260609081015190850152608090930192908501906001016153b1565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b818110156154505761543d8385516152de565b928401926080929092019160010161542a565b50909695505050505050565b6020810161186082846152a3565b6020815260008251806020840152615489816040850160208701615564565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b6154c581856152de565b60c0608082015260006154db60c0830185615247565b82810360a084015283518082526020808601928101919060005b8281101561552757845173ffffffffffffffffffffffffffffffffffffffff16845293810193928101926001016154f5565b509198975050505050505050565b60008219821115615548576155486155fe565b500190565b60008282101561555f5761555f6155fe565b500390565b60005b8381101561557f578181015183820152602001615567565b8381111561498d5750506000910152565b60008161559f5761559f6155fe565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156155f7576155f76155fe565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610e1657600080fd5b8015158114610e1657600080fdfea2646970667358221220310f77eccaab5166f3e138ce0c6d90fe8af3dbce52218f510678d4d843931e2964736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainTrollRegistry.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainTrollRegistry.json.ts"], function (require, exports, eth_contract_14, OSWAP_MainChainTrollRegistry_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_MainChainTrollRegistry = void 0;
    class OSWAP_MainChainTrollRegistry extends eth_contract_14.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_MainChainTrollRegistry_json_1.default.abi, OSWAP_MainChainTrollRegistry_json_1.default.bytecode);
            this.assign();
        }
        deploy(params) {
            return this.__deploy([params.govToken, params.superTrollNft, params.generalTrollNft]);
        }
        parseAddTrollEvent(receipt) {
            return this.parseEvents(receipt, "AddTroll").map(e => this.decodeAddTrollEvent(e));
        }
        decodeAddTrollEvent(event) {
            let result = event.data;
            return {
                owner: result.owner,
                troll: result.troll,
                trollProfileIndex: new eth_contract_14.BigNumber(result.trollProfileIndex),
                isSuperTroll: result.isSuperTroll,
                _event: event
            };
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseBlockNftTokenIdEvent(receipt) {
            return this.parseEvents(receipt, "BlockNftTokenId").map(e => this.decodeBlockNftTokenIdEvent(e));
        }
        decodeBlockNftTokenIdEvent(event) {
            let result = event.data;
            return {
                nft: result.nft,
                tokenId: new eth_contract_14.BigNumber(result.tokenId),
                blocked: result.blocked,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseResumeEvent(receipt) {
            return this.parseEvents(receipt, "Resume").map(e => this.decodeResumeEvent(e));
        }
        decodeResumeEvent(event) {
            let result = event.data;
            return {
                _event: event
            };
        }
        parseShutdownEvent(receipt) {
            return this.parseEvents(receipt, "Shutdown").map(e => this.decodeShutdownEvent(e));
        }
        decodeShutdownEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                _event: event
            };
        }
        parseStakeGeneralTollEvent(receipt) {
            return this.parseEvents(receipt, "StakeGeneralToll").map(e => this.decodeStakeGeneralTollEvent(e));
        }
        decodeStakeGeneralTollEvent(event) {
            let result = event.data;
            return {
                backer: result.backer,
                trollProfileIndex: new eth_contract_14.BigNumber(result.trollProfileIndex),
                nft: result.nft,
                tokenId: new eth_contract_14.BigNumber(result.tokenId),
                stakesChange: new eth_contract_14.BigNumber(result.stakesChange),
                stakesBalance: new eth_contract_14.BigNumber(result.stakesBalance),
                _event: event
            };
        }
        parseStakeSuperTollEvent(receipt) {
            return this.parseEvents(receipt, "StakeSuperToll").map(e => this.decodeStakeSuperTollEvent(e));
        }
        decodeStakeSuperTollEvent(event) {
            let result = event.data;
            return {
                backer: result.backer,
                trollProfileIndex: new eth_contract_14.BigNumber(result.trollProfileIndex),
                nft: result.nft,
                tokenId: new eth_contract_14.BigNumber(result.tokenId),
                stakesChange: new eth_contract_14.BigNumber(result.stakesChange),
                stakesBalance: new eth_contract_14.BigNumber(result.stakesBalance),
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseUnstakeGeneralTollEvent(receipt) {
            return this.parseEvents(receipt, "UnstakeGeneralToll").map(e => this.decodeUnstakeGeneralTollEvent(e));
        }
        decodeUnstakeGeneralTollEvent(event) {
            let result = event.data;
            return {
                backer: result.backer,
                trollProfileIndex: new eth_contract_14.BigNumber(result.trollProfileIndex),
                nft: result.nft,
                tokenId: new eth_contract_14.BigNumber(result.tokenId),
                stakesChange: new eth_contract_14.BigNumber(result.stakesChange),
                stakesBalance: new eth_contract_14.BigNumber(result.stakesBalance),
                _event: event
            };
        }
        parseUnstakeSuperTollEvent(receipt) {
            return this.parseEvents(receipt, "UnstakeSuperToll").map(e => this.decodeUnstakeSuperTollEvent(e));
        }
        decodeUnstakeSuperTollEvent(event) {
            let result = event.data;
            return {
                backer: result.backer,
                trollProfileIndex: new eth_contract_14.BigNumber(result.trollProfileIndex),
                nft: result.nft,
                tokenId: new eth_contract_14.BigNumber(result.tokenId),
                stakesChange: new eth_contract_14.BigNumber(result.stakesChange),
                stakesBalance: new eth_contract_14.BigNumber(result.stakesBalance),
                _event: event
            };
        }
        parseUpdateNFTEvent(receipt) {
            return this.parseEvents(receipt, "UpdateNFT").map(e => this.decodeUpdateNFTEvent(e));
        }
        decodeUpdateNFTEvent(event) {
            let result = event.data;
            return {
                nft: result.nft,
                trollType: new eth_contract_14.BigNumber(result.trollType),
                _event: event
            };
        }
        parseUpdateTrollEvent(receipt) {
            return this.parseEvents(receipt, "UpdateTroll").map(e => this.decodeUpdateTrollEvent(e));
        }
        decodeUpdateTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_14.BigNumber(result.trollProfileIndex),
                oldTroll: result.oldTroll,
                newTroll: result.newTroll,
                _event: event
            };
        }
        parseUpdateVotingManagerEvent(receipt) {
            return this.parseEvents(receipt, "UpdateVotingManager").map(e => this.decodeUpdateVotingManagerEvent(e));
        }
        decodeUpdateVotingManagerEvent(event) {
            let result = event.data;
            return {
                newVotingManager: result.newVotingManager,
                _event: event
            };
        }
        parseUpgradeEvent(receipt) {
            return this.parseEvents(receipt, "Upgrade").map(e => this.decodeUpgradeEvent(e));
        }
        decodeUpgradeEvent(event) {
            let result = event.data;
            return {
                newTrollRegistry: result.newTrollRegistry,
                _event: event
            };
        }
        assign() {
            let backerStakingParams = (params) => [params.backer, this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
            let backerStaking_call = async (params) => {
                let result = await this.call('backerStaking', backerStakingParams(params));
                return (result.map(e => ({
                    nft: e.nft,
                    tokenId: new eth_contract_14.BigNumber(e.tokenId),
                    trollProfileIndex: new eth_contract_14.BigNumber(e.trollProfileIndex),
                    timestamp: new eth_contract_14.BigNumber(e.timestamp)
                })));
            };
            this.backerStaking = backerStaking_call;
            let getStakeTo_call = async (backer) => {
                let result = await this.call('getStakeTo', [backer]);
                return (result.map(e => ({
                    nft: e.nft,
                    tokenId: new eth_contract_14.BigNumber(e.tokenId),
                    trollProfileIndex: new eth_contract_14.BigNumber(e.trollProfileIndex),
                    timestamp: new eth_contract_14.BigNumber(e.timestamp)
                })));
            };
            this.getStakeTo = getStakeTo_call;
            let getStakedBy_call = async (trollProfileIndex) => {
                let result = await this.call('getStakedBy', [this.wallet.utils.toString(trollProfileIndex)]);
                return (result.map(e => ({
                    nft: e.nft,
                    tokenId: new eth_contract_14.BigNumber(e.tokenId)
                })));
            };
            this.getStakedBy = getStakedBy_call;
            let getStakes_call = async (troll) => {
                let result = await this.call('getStakes', [troll]);
                return new eth_contract_14.BigNumber(result);
            };
            this.getStakes = getStakes_call;
            let getStakesByTrollProfile_call = async (trollProfileIndex) => {
                let result = await this.call('getStakesByTrollProfile', [this.wallet.utils.toString(trollProfileIndex)]);
                return new eth_contract_14.BigNumber(result);
            };
            this.getStakesByTrollProfile = getStakesByTrollProfile_call;
            let getTrollByNftParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId)];
            let getTrollByNft_call = async (params) => {
                let result = await this.call('getTrollByNft', getTrollByNftParams(params));
                return result;
            };
            this.getTrollByNft = getTrollByNft_call;
            let getTrollProperties_call = async (trollProfileIndex) => {
                let result = await this.call('getTrollProperties', [this.wallet.utils.toString(trollProfileIndex)]);
                return {
                    troll: {
                        owner: result.troll.owner,
                        troll: result.troll.troll,
                        trollType: new eth_contract_14.BigNumber(result.troll.trollType),
                        nftCount: new eth_contract_14.BigNumber(result.troll.nftCount)
                    },
                    nfts: result.nfts.map(e => ({
                        nft: e.nft,
                        tokenId: new eth_contract_14.BigNumber(e.tokenId)
                    })),
                    backers: result.backers
                };
            };
            this.getTrollProperties = getTrollProperties_call;
            let getTrollPropertiesByAddress_call = async (trollAddress) => {
                let result = await this.call('getTrollPropertiesByAddress', [trollAddress]);
                return {
                    troll: {
                        owner: result.troll.owner,
                        troll: result.troll.troll,
                        trollType: new eth_contract_14.BigNumber(result.troll.trollType),
                        nftCount: new eth_contract_14.BigNumber(result.troll.nftCount)
                    },
                    nfts: result.nfts.map(e => ({
                        nft: e.nft,
                        tokenId: new eth_contract_14.BigNumber(e.tokenId)
                    })),
                    backers: result.backers
                };
            };
            this.getTrollPropertiesByAddress = getTrollPropertiesByAddress_call;
            let getTrollsParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
            let getTrolls_call = async (params) => {
                let result = await this.call('getTrolls', getTrollsParams(params));
                return (result.map(e => ({
                    owner: e.owner,
                    troll: e.troll,
                    trollType: new eth_contract_14.BigNumber(e.trollType),
                    nftCount: new eth_contract_14.BigNumber(e.nftCount)
                })));
            };
            this.getTrolls = getTrolls_call;
            let govToken_call = async () => {
                let result = await this.call('govToken');
                return result;
            };
            this.govToken = govToken_call;
            let isPermitted_call = async (param1) => {
                let result = await this.call('isPermitted', [param1]);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let newOwner_call = async () => {
                let result = await this.call('newOwner');
                return result;
            };
            this.newOwner = newOwner_call;
            let newTrollRegistry_call = async () => {
                let result = await this.call('newTrollRegistry');
                return result;
            };
            this.newTrollRegistry = newTrollRegistry_call;
            let nftType_call = async (param1) => {
                let result = await this.call('nftType', [param1]);
                return new eth_contract_14.BigNumber(result);
            };
            this.nftType = nftType_call;
            let owner_call = async () => {
                let result = await this.call('owner');
                return result;
            };
            this.owner = owner_call;
            let ownerTrollsParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let ownerTrolls_call = async (params) => {
                let result = await this.call('ownerTrolls', ownerTrollsParams(params));
                return new eth_contract_14.BigNumber(result);
            };
            this.ownerTrolls = ownerTrolls_call;
            let ownerTrollsLength_call = async (owner) => {
                let result = await this.call('ownerTrollsLength', [owner]);
                return new eth_contract_14.BigNumber(result);
            };
            this.ownerTrollsLength = ownerTrollsLength_call;
            let paused_call = async () => {
                let result = await this.call('paused');
                return result;
            };
            this.paused = paused_call;
            let stakeOf_call = async (param1) => {
                let result = await this.call('stakeOf', [param1]);
                return new eth_contract_14.BigNumber(result);
            };
            this.stakeOf = stakeOf_call;
            let stakeToParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let stakeTo_call = async (params) => {
                let result = await this.call('stakeTo', stakeToParams(params));
                return {
                    nft: result.nft,
                    tokenId: new eth_contract_14.BigNumber(result.tokenId),
                    trollProfileIndex: new eth_contract_14.BigNumber(result.trollProfileIndex),
                    timestamp: new eth_contract_14.BigNumber(result.timestamp)
                };
            };
            this.stakeTo = stakeTo_call;
            let stakeToInvParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let stakeToInv_call = async (params) => {
                let result = await this.call('stakeToInv', stakeToInvParams(params));
                return {
                    backer: result.backer,
                    index: new eth_contract_14.BigNumber(result.index)
                };
            };
            this.stakeToInv = stakeToInv_call;
            let stakeToLength_call = async (backer) => {
                let result = await this.call('stakeToLength', [backer]);
                return new eth_contract_14.BigNumber(result);
            };
            this.stakeToLength = stakeToLength_call;
            let stakedByParams = (params) => [this.wallet.utils.toString(params.param1), this.wallet.utils.toString(params.param2)];
            let stakedBy_call = async (params) => {
                let result = await this.call('stakedBy', stakedByParams(params));
                return {
                    nft: result.nft,
                    tokenId: new eth_contract_14.BigNumber(result.tokenId)
                };
            };
            this.stakedBy = stakedBy_call;
            let stakedByInvParams = (params) => [params.param1, this.wallet.utils.toString(params.param2)];
            let stakedByInv_call = async (params) => {
                let result = await this.call('stakedByInv', stakedByInvParams(params));
                return {
                    trollProfileIndex: new eth_contract_14.BigNumber(result.trollProfileIndex),
                    index: new eth_contract_14.BigNumber(result.index)
                };
            };
            this.stakedByInv = stakedByInv_call;
            let stakedByLength_call = async (trollProfileIndex) => {
                let result = await this.call('stakedByLength', [this.wallet.utils.toString(trollProfileIndex)]);
                return new eth_contract_14.BigNumber(result);
            };
            this.stakedByLength = stakedByLength_call;
            let totalStake_call = async () => {
                let result = await this.call('totalStake');
                return new eth_contract_14.BigNumber(result);
            };
            this.totalStake = totalStake_call;
            let trollNft_call = async (param1) => {
                let result = await this.call('trollNft', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.trollNft = trollNft_call;
            let trollNftInv_call = async (param1) => {
                let result = await this.call('trollNftInv', [param1]);
                return new eth_contract_14.BigNumber(result);
            };
            this.trollNftInv = trollNftInv_call;
            let trollNftLength_call = async () => {
                let result = await this.call('trollNftLength');
                return new eth_contract_14.BigNumber(result);
            };
            this.trollNftLength = trollNftLength_call;
            let trollProfileInv_call = async (param1) => {
                let result = await this.call('trollProfileInv', [param1]);
                return new eth_contract_14.BigNumber(result);
            };
            this.trollProfileInv = trollProfileInv_call;
            let trollProfiles_call = async (param1) => {
                let result = await this.call('trollProfiles', [this.wallet.utils.toString(param1)]);
                return {
                    owner: result.owner,
                    troll: result.troll,
                    trollType: new eth_contract_14.BigNumber(result.trollType),
                    nftCount: new eth_contract_14.BigNumber(result.nftCount)
                };
            };
            this.trollProfiles = trollProfiles_call;
            let trollProfilesLength_call = async () => {
                let result = await this.call('trollProfilesLength');
                return new eth_contract_14.BigNumber(result);
            };
            this.trollProfilesLength = trollProfilesLength_call;
            let votingManager_call = async () => {
                let result = await this.call('votingManager');
                return result;
            };
            this.votingManager = votingManager_call;
            let addStakesGeneralTrollParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount)];
            let addStakesGeneralTroll_send = async (params) => {
                let result = await this.send('addStakesGeneralTroll', addStakesGeneralTrollParams(params));
                return result;
            };
            let addStakesGeneralTroll_call = async (params) => {
                let result = await this.call('addStakesGeneralTroll', addStakesGeneralTrollParams(params));
                return;
            };
            this.addStakesGeneralTroll = Object.assign(addStakesGeneralTroll_send, {
                call: addStakesGeneralTroll_call
            });
            let addStakesSuperTrollParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId), this.wallet.utils.toString(params.amount)];
            let addStakesSuperTroll_send = async (params) => {
                let result = await this.send('addStakesSuperTroll', addStakesSuperTrollParams(params));
                return result;
            };
            let addStakesSuperTroll_call = async (params) => {
                let result = await this.call('addStakesSuperTroll', addStakesSuperTrollParams(params));
                return;
            };
            this.addStakesSuperTroll = Object.assign(addStakesSuperTroll_send, {
                call: addStakesSuperTroll_call
            });
            let addTrollParams = (params) => [params.troll, params.isSuperTroll, this.wallet.utils.stringToBytes(params.signature)];
            let addTroll_send = async (params) => {
                let result = await this.send('addTroll', addTrollParams(params));
                return result;
            };
            let addTroll_call = async (params) => {
                let result = await this.call('addTroll', addTrollParams(params));
                return;
            };
            this.addTroll = Object.assign(addTroll_send, {
                call: addTroll_call
            });
            let deny_send = async (user) => {
                let result = await this.send('deny', [user]);
                return result;
            };
            let deny_call = async (user) => {
                let result = await this.call('deny', [user]);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let initAddress_send = async (votingManager) => {
                let result = await this.send('initAddress', [votingManager]);
                return result;
            };
            let initAddress_call = async (votingManager) => {
                let result = await this.call('initAddress', [votingManager]);
                return;
            };
            this.initAddress = Object.assign(initAddress_send, {
                call: initAddress_call
            });
            let onERC721ReceivedParams = (params) => [params.param1, params.param2, this.wallet.utils.toString(params.param3), this.wallet.utils.stringToBytes(params.param4)];
            let onERC721Received_send = async (params) => {
                let result = await this.send('onERC721Received', onERC721ReceivedParams(params));
                return result;
            };
            let onERC721Received_call = async (params) => {
                let result = await this.call('onERC721Received', onERC721ReceivedParams(params));
                return result;
            };
            this.onERC721Received = Object.assign(onERC721Received_send, {
                call: onERC721Received_call
            });
            let permit_send = async (user) => {
                let result = await this.send('permit', [user]);
                return result;
            };
            let permit_call = async (user) => {
                let result = await this.call('permit', [user]);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let resume_send = async () => {
                let result = await this.send('resume');
                return result;
            };
            let resume_call = async () => {
                let result = await this.call('resume');
                return;
            };
            this.resume = Object.assign(resume_send, {
                call: resume_call
            });
            let shutdownByAdmin_send = async () => {
                let result = await this.send('shutdownByAdmin');
                return result;
            };
            let shutdownByAdmin_call = async () => {
                let result = await this.call('shutdownByAdmin');
                return;
            };
            this.shutdownByAdmin = Object.assign(shutdownByAdmin_send, {
                call: shutdownByAdmin_call
            });
            let shutdownByVoting_send = async () => {
                let result = await this.send('shutdownByVoting');
                return result;
            };
            let shutdownByVoting_call = async () => {
                let result = await this.call('shutdownByVoting');
                return;
            };
            this.shutdownByVoting = Object.assign(shutdownByVoting_send, {
                call: shutdownByVoting_call
            });
            let stakeGeneralTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.nft, this.wallet.utils.toString(params.tokenId)];
            let stakeGeneralTroll_send = async (params) => {
                let result = await this.send('stakeGeneralTroll', stakeGeneralTrollParams(params));
                return result;
            };
            let stakeGeneralTroll_call = async (params) => {
                let result = await this.call('stakeGeneralTroll', stakeGeneralTrollParams(params));
                return;
            };
            this.stakeGeneralTroll = Object.assign(stakeGeneralTroll_send, {
                call: stakeGeneralTroll_call
            });
            let stakeSuperTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.nft, this.wallet.utils.toString(params.tokenId)];
            let stakeSuperTroll_send = async (params) => {
                let result = await this.send('stakeSuperTroll', stakeSuperTrollParams(params));
                return result;
            };
            let stakeSuperTroll_call = async (params) => {
                let result = await this.call('stakeSuperTroll', stakeSuperTrollParams(params));
                return;
            };
            this.stakeSuperTroll = Object.assign(stakeSuperTroll_send, {
                call: stakeSuperTroll_call
            });
            let takeOwnership_send = async () => {
                let result = await this.send('takeOwnership');
                return result;
            };
            let takeOwnership_call = async () => {
                let result = await this.call('takeOwnership');
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner) => {
                let result = await this.send('transferOwnership', [newOwner]);
                return result;
            };
            let transferOwnership_call = async (newOwner) => {
                let result = await this.call('transferOwnership', [newOwner]);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let unstakeGeneralTrollParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId)];
            let unstakeGeneralTroll_send = async (params) => {
                let result = await this.send('unstakeGeneralTroll', unstakeGeneralTrollParams(params));
                return result;
            };
            let unstakeGeneralTroll_call = async (params) => {
                let result = await this.call('unstakeGeneralTroll', unstakeGeneralTrollParams(params));
                return new eth_contract_14.BigNumber(result);
            };
            this.unstakeGeneralTroll = Object.assign(unstakeGeneralTroll_send, {
                call: unstakeGeneralTroll_call
            });
            let unstakeSuperTrollParams = (params) => [params.nft, this.wallet.utils.toString(params.tokenId)];
            let unstakeSuperTroll_send = async (params) => {
                let result = await this.send('unstakeSuperTroll', unstakeSuperTrollParams(params));
                return result;
            };
            let unstakeSuperTroll_call = async (params) => {
                let result = await this.call('unstakeSuperTroll', unstakeSuperTrollParams(params));
                return new eth_contract_14.BigNumber(result);
            };
            this.unstakeSuperTroll = Object.assign(unstakeSuperTroll_send, {
                call: unstakeSuperTroll_call
            });
            let updateNftParams = (params) => [params.nft, this.wallet.utils.toString(params.trolltype)];
            let updateNft_send = async (params) => {
                let result = await this.send('updateNft', updateNftParams(params));
                return result;
            };
            let updateNft_call = async (params) => {
                let result = await this.call('updateNft', updateNftParams(params));
                return;
            };
            this.updateNft = Object.assign(updateNft_send, {
                call: updateNft_call
            });
            let updateTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.newTroll, this.wallet.utils.stringToBytes(params.signature)];
            let updateTroll_send = async (params) => {
                let result = await this.send('updateTroll', updateTrollParams(params));
                return result;
            };
            let updateTroll_call = async (params) => {
                let result = await this.call('updateTroll', updateTrollParams(params));
                return;
            };
            this.updateTroll = Object.assign(updateTroll_send, {
                call: updateTroll_call
            });
            let updateVotingManager_send = async () => {
                let result = await this.send('updateVotingManager');
                return result;
            };
            let updateVotingManager_call = async () => {
                let result = await this.call('updateVotingManager');
                return;
            };
            this.updateVotingManager = Object.assign(updateVotingManager_send, {
                call: updateVotingManager_call
            });
            let upgrade_send = async (trollRegistry) => {
                let result = await this.send('upgrade', [trollRegistry]);
                return result;
            };
            let upgrade_call = async (trollRegistry) => {
                let result = await this.call('upgrade', [trollRegistry]);
                return;
            };
            this.upgrade = Object.assign(upgrade_send, {
                call: upgrade_call
            });
            let upgradeByAdmin_send = async (trollRegistry) => {
                let result = await this.send('upgradeByAdmin', [trollRegistry]);
                return result;
            };
            let upgradeByAdmin_call = async (trollRegistry) => {
                let result = await this.call('upgradeByAdmin', [trollRegistry]);
                return;
            };
            this.upgradeByAdmin = Object.assign(upgradeByAdmin_send, {
                call: upgradeByAdmin_call
            });
        }
    }
    exports.OSWAP_MainChainTrollRegistry = OSWAP_MainChainTrollRegistry;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainVotingExecutor.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainVotingExecutor.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "_votingManager", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32[]", "name": "params", "type": "bytes32[]" }], "name": "Execute", "type": "event" },
            { "inputs": [], "name": "chainRegistry", "outputs": [{ "internalType": "contract OSWAP_ChainRegistry", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32[]", "name": "params", "type": "bytes32[]" }], "name": "execute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract OSWAP_ChainRegistry", "name": "_chainRegistry", "type": "address" }], "name": "initAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "trollRegistry", "outputs": [{ "internalType": "contract OSWAP_MainChainTrollRegistry", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "votingManager", "outputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60c060405234801561001057600080fd5b50604051620014f8380380620014f8833981016040819052610031916100d8565b6000816001600160a01b03166330167bec6040518163ffffffff1660e01b815260040160206040518083038186803b15801561006c57600080fd5b505afa158015610080573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100a491906100d8565b6001600160601b0319606091821b811660805292901b90911660a05250600080546001600160a01b03191633179055610114565b6000602082840312156100ea57600080fd5b81516100f5816100fc565b9392505050565b6001600160a01b038116811461011157600080fd5b50565b60805160601c60a05160601c61137b6200017d6000396000818160e9015281816101cb015281816105ba0152818161068b0152818161078d015281816109460152610a0d0152600081816071015281816103de0152818161048b0152610868015261137b6000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80638af7c649116100505780638af7c649146100d1578063da1bcdf0146100e4578063fd5e394a1461010b57600080fd5b806330167bec1461006c5780635a812465146100bc575b600080fd5b6100937f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100cf6100ca3660046111b4565b61012b565b005b6100cf6100df366004611116565b61019d565b6100937f000000000000000000000000000000000000000000000000000000000000000081565b6001546100939073ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461014f57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600080549091169055565b6040517fb15866e60000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b15866e69060240160206040518083038186803b15801561022257600080fd5b505afa158015610236573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025a919061118b565b6102eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f4f535741505f566f74696e674578656375746f723a204e6f742066726f6d207660448201527f6f74696e6700000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b80610352576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c696420706172616d73206c656e677468000000000000000000000060448201526064016102e2565b7fb98f16f9e16a613740729e6e1b35730f7ca1456ba20bff88685e53e1881bec9082826040516103839291906111ee565b60405180910390a16000828260008181106103a0576103a06112f1565b602002919091013591505060018214156104f657807f73687574646f776e0000000000000000000000000000000000000000000000001415610461577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b86241276040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561044457600080fd5b505af1158015610458573d6000803e3d6000fd5b50505050505050565b807f726573756d65000000000000000000000000000000000000000000000000000014156104f1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663046f7da26040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561044457600080fd5b610aee565b60008383600181811061050b5761050b6112f1565b905060200201359050817f73696465436861696e436f6e666967000000000000000000000000000000000014156105575761055161054c8460018188611243565b610b50565b50505050565b600283141561070257817f73657441646d696e0000000000000000000000000000000000000000000000001415610631576040517f704b6c02000000000000000000000000000000000000000000000000000000008152606082901c60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063704b6c0290602401600060405180830381600087803b15801561061357600080fd5b505af1158015610627573d6000803e3d6000fd5b5050505050505050565b817f75706772616465566f74696e674d616e6167657200000000000000000000000014156106fd576040517f0900f010000000000000000000000000000000000000000000000000000000008152606082901c60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630900f01090602401600060405180830381600087803b1580156106e457600080fd5b505af11580156106f8573d6000803e3d6000fd5b505050505b610aec565b600084846002818110610717576107176112f1565b602002919091013591505060038414156108b857827f736574566f74696e674578656375746f720000000000000000000000000000001415610806576040517f788ddbcb000000000000000000000000000000000000000000000000000000008152606083901c600482015281151560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063788ddbcb906044015b600060405180830381600087803b1580156107e757600080fd5b505af11580156107fb573d6000803e3d6000fd5b505050505050505050565b827f7570677261646554726f6c6c526567697374727900000000000000000000000014156108b357468214156108ac576040517f0900f010000000000000000000000000000000000000000000000000000000008152606082901c60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630900f010906024016107cd565b5050505050565b610aea565b6000858560038181106108cd576108cd6112f1565b602002919091013591505060048514156109c557837f736574566f74696e67436f6e666967000000000000000000000000000000000014156109c0576040517fd9c370860000000000000000000000000000000000000000000000000000000081526004810184905260248101839052604481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d9c37086906064015b600060405180830381600087803b1580156109a057600080fd5b505af11580156109b4573d6000803e3d6000fd5b50505050505050505050565b610ae8565b6007851415610ae857837f616464566f74696e67436f6e66696700000000000000000000000000000000001415610ae85773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166365611e438484848a8a6004818110610a4857610a486112f1565b9050602002013560001c8b8b6005818110610a6557610a656112f1565b9050602002013560001c8c8c6006818110610a8257610a826112f1565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08b901b16815260048101989098526024880196909652506044860193909352606485019190915260848401526020909102013560a482015260c401610986565b505b505b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c696420706172616d6574657273000000000000000000000000000060448201526064016102e2565b60028111610bba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c696420706172616d6574657273000000000000000000000000000060448201526064016102e2565b600082826000818110610bcf57610bcf6112f1565b905060200201359050600083836001818110610bed57610bed6112f1565b610c01926020909102013590506002611271565b9050610c0e816001611271565b831115610aee576000848483818110610c2957610c296112f1565b90506020020135905060008585846001610c439190611271565b818110610c5257610c526112f1565b905060200201359050826002610c689190611271565b851415610f5d57837f736574436f6e66696700000000000000000000000000000000000000000000001415610de65760025b838110156104585760015473ffffffffffffffffffffffffffffffffffffffff166342f064c9888884818110610cd257610cd26112f1565b9050602002013560001c6040518263ffffffff1660e01b8152600401610cfa91815260200190565b60206040518083038186803b158015610d1257600080fd5b505afa158015610d26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4a91906111d1565b6040517fd1fd27b3000000000000000000000000000000000000000000000000000000008152600481018590526024810184905273ffffffffffffffffffffffffffffffffffffffff919091169063d1fd27b390604401600060405180830381600087803b158015610dbb57600080fd5b505af1158015610dcf573d6000803e3d6000fd5b505050508080610dde90611289565b915050610c9a565b837f736574436f6e666967416464726573730000000000000000000000000000000014156108b35760025b838110156104585760015473ffffffffffffffffffffffffffffffffffffffff166342f064c9888884818110610e4957610e496112f1565b9050602002013560001c6040518263ffffffff1660e01b8152600401610e7191815260200190565b60206040518083038186803b158015610e8957600080fd5b505afa158015610e9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec191906111d1565b6040517f9db57e1f000000000000000000000000000000000000000000000000000000008152600481018590526024810184905273ffffffffffffffffffffffffffffffffffffffff9190911690639db57e1f90604401600060405180830381600087803b158015610f3257600080fd5b505af1158015610f46573d6000803e3d6000fd5b505050508080610f5590611289565b915050610e11565b60008686610f6c866002611271565b818110610f7b57610f7b6112f1565b905060200201359050836003610f919190611271565b861415610ae857847f736574436f6e66696732000000000000000000000000000000000000000000001415610ae85760025b848110156106275760015473ffffffffffffffffffffffffffffffffffffffff166342f064c9898984818110610ffb57610ffb6112f1565b9050602002013560001c6040518263ffffffff1660e01b815260040161102391815260200190565b60206040518083038186803b15801561103b57600080fd5b505afa15801561104f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107391906111d1565b6040517fdf9321a500000000000000000000000000000000000000000000000000000000815260048101869052602481018590526044810184905273ffffffffffffffffffffffffffffffffffffffff919091169063df9321a590606401600060405180830381600087803b1580156110eb57600080fd5b505af11580156110ff573d6000803e3d6000fd5b50505050808061110e90611289565b915050610fc3565b6000806020838503121561112957600080fd5b823567ffffffffffffffff8082111561114157600080fd5b818501915085601f83011261115557600080fd5b81358181111561116457600080fd5b8660208260051b850101111561117957600080fd5b60209290920196919550909350505050565b60006020828403121561119d57600080fd5b815180151581146111ad57600080fd5b9392505050565b6000602082840312156111c657600080fd5b81356111ad81611320565b6000602082840312156111e357600080fd5b81516111ad81611320565b6020815281602082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561122757600080fd5b8260051b80856040850137600092016040019182525092915050565b6000808585111561125357600080fd5b8386111561126057600080fd5b5050600583901b0193919092039150565b60008219821115611284576112846112c2565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156112bb576112bb6112c2565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461134257600080fd5b5056fea2646970667358221220789fe3083f3eaab96e63c112498dc5f8335c671b914bf0ce534a52c60c52eea064736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainVotingExecutor.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainVotingExecutor.json.ts"], function (require, exports, eth_contract_15, OSWAP_MainChainVotingExecutor_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_MainChainVotingExecutor = void 0;
    class OSWAP_MainChainVotingExecutor extends eth_contract_15.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_MainChainVotingExecutor_json_1.default.abi, OSWAP_MainChainVotingExecutor_json_1.default.bytecode);
            this.assign();
        }
        deploy(votingManager) {
            return this.__deploy([votingManager]);
        }
        parseExecuteEvent(receipt) {
            return this.parseEvents(receipt, "Execute").map(e => this.decodeExecuteEvent(e));
        }
        decodeExecuteEvent(event) {
            let result = event.data;
            return {
                params: result.params,
                _event: event
            };
        }
        assign() {
            let chainRegistry_call = async () => {
                let result = await this.call('chainRegistry');
                return result;
            };
            this.chainRegistry = chainRegistry_call;
            let trollRegistry_call = async () => {
                let result = await this.call('trollRegistry');
                return result;
            };
            this.trollRegistry = trollRegistry_call;
            let votingManager_call = async () => {
                let result = await this.call('votingManager');
                return result;
            };
            this.votingManager = votingManager_call;
            let execute_send = async (params) => {
                let result = await this.send('execute', [this.wallet.utils.stringToBytes32(params)]);
                return result;
            };
            let execute_call = async (params) => {
                let result = await this.call('execute', [this.wallet.utils.stringToBytes32(params)]);
                return;
            };
            this.execute = Object.assign(execute_send, {
                call: execute_call
            });
            let initAddress_send = async (chainRegistry) => {
                let result = await this.send('initAddress', [chainRegistry]);
                return result;
            };
            let initAddress_call = async (chainRegistry) => {
                let result = await this.call('initAddress', [chainRegistry]);
                return;
            };
            this.initAddress = Object.assign(initAddress_send, {
                call: initAddress_call
            });
        }
    }
    exports.OSWAP_MainChainVotingExecutor = OSWAP_MainChainVotingExecutor;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_RouterVaultWrapper.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_RouterVaultWrapper.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "vault", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "orderId", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }, { "indexed": false, "internalType": "address", "name": "inToken", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "inAmount", "type": "uint256" }], "name": "Swap", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract OSWAP_ConfigStore", "name": "newConfigStore", "type": "address" }], "name": "UpdateConfigStore", "type": "event" },
            { "inputs": [], "name": "configStore", "outputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "_configStore", "type": "address" }], "name": "initAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "contract IOSWAP_BridgeVault", "name": "vault", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }], "name": "swapETHForExactTokens", "outputs": [{ "internalType": "uint256", "name": "orderId", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "contract IOSWAP_BridgeVault", "name": "vault", "type": "address" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }], "name": "swapExactETHForTokens", "outputs": [{ "internalType": "uint256", "name": "orderId", "type": "uint256" }], "stateMutability": "payable", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "contract IOSWAP_BridgeVault", "name": "vault", "type": "address" }, { "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }], "name": "swapExactTokensForTokens", "outputs": [{ "internalType": "uint256", "name": "orderId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "pair", "type": "address[]" }, { "internalType": "contract IOSWAP_BridgeVault", "name": "vault", "type": "address" }, { "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "uint256", "name": "deadline", "type": "uint256" }, { "components": [{ "internalType": "uint256", "name": "peerChain", "type": "uint256" }, { "internalType": "uint256", "name": "inAmount", "type": "uint256" }, { "internalType": "address", "name": "outToken", "type": "address" }, { "internalType": "uint256", "name": "minOutAmount", "type": "uint256" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "expire", "type": "uint256" }], "internalType": "struct IOSWAP_BridgeVault.Order", "name": "order", "type": "tuple" }], "name": "swapTokensForExactTokens", "outputs": [{ "internalType": "uint256", "name": "orderId", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "updateConfigStore", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "stateMutability": "payable", "type": "receive" }
        ],
        "bytecode": "608060405234801561001057600080fd5b50600080546001600160a01b031916331790556129e0806100326000396000f3fe60806040526004361061007f5760003560e01c8063842c48351161004e578063842c48351461023d5780638da5cb5b146102525780639d69dc4e146102a4578063bdfcb8b0146102d157600080fd5b806313c35abb146101c45780632211b3bd146101ea57806353613a031461020a5780635a8124651461021d57600080fd5b366101bf57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f887ea406040518163ffffffff1660e01b815260040160206040518083038186803b1580156100ec57600080fd5b505afa158015610100573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012491906122ad565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101bd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f6e6f7420666f726d20726f75746572000000000000000000000000000000000060448201526064015b60405180910390fd5b005b600080fd5b6101d76101d2366004612343565b6102f1565b6040519081526020015b60405180910390f35b3480156101f657600080fd5b506101d76102053660046123a9565b6106c4565b6101d76102183660046122d1565b610c2d565b34801561022957600080fd5b506101bd6102383660046125aa565b610fb3565b34801561024957600080fd5b506101bd61117f565b34801561025e57600080fd5b5060005461027f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101e1565b3480156102b057600080fd5b5060015461027f9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156102dd57600080fd5b506101d76102ec366004612423565b61131a565b600032331480156103015750333b155b610367576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e64207573657200000000000000000000000000000060448201526064016101b4565b600154604080517ff887ea40000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163f887ea40916004808301926020929190829003018186803b1580156103d257600080fd5b505afa1580156103e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040a91906122ad565b905060008173ffffffffffffffffffffffffffffffffffffffff1663ed3b11ce3486602001518b8b8b8b600067ffffffffffffffff81111561044e5761044e612956565b6040519080825280601f01601f191660200182016040528015610478576020820181803683370190505b506040518863ffffffff1660e01b815260040161049a96959493929190612763565b6000604051808303818588803b1580156104b357600080fd5b505af11580156104c7573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261050e91908101906124c6565b915050806001825161052091906128b5565b8151811061053057610530612927565b602090810291909101810151908501908152604080517fd06f3fb5000000000000000000000000000000000000000000000000000000008152865160048201529151602483015285015173ffffffffffffffffffffffffffffffffffffffff90811660448301526060860151606483015260808601518116608483015260a086015160a48301523360c483015287169063d06f3fb59060e401602060405180830381600087803b1580156105e357600080fd5b505af11580156105f7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061061b91906125c7565b92508573ffffffffffffffffffffffffffffffffffffffff167fd8323ca53cfc1feaad69ff4da62bfe7b2e48f1906238193fe8f686db378e6bc0843360008560008151811061066c5761066c612927565b60200260200101516040516106b1949392919093845273ffffffffffffffffffffffffffffffffffffffff928316602085015291166040830152606082015260800190565b60405180910390a2505095945050505050565b600032331480156106d45750333b155b61073a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e64207573657200000000000000000000000000000060448201526064016101b4565b60008573ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561078257600080fd5b505afa158015610796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ba91906122ad565b90506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f887ea406040518163ffffffff1660e01b815260040160206040518083038186803b15801561082657600080fd5b505afa15801561083a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085e91906122ad565b90506000808273ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8c8c876040518463ffffffff1660e01b81526004016108a09392919061269c565b60006040518083038186803b1580156108b857600080fd5b505afa1580156108cc573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526109129190810190612491565b90508060008151811061092757610927612927565b602002602001015191505061093d81338961186e565b965061096073ffffffffffffffffffffffffffffffffffffffff821683896119e3565b600073ffffffffffffffffffffffffffffffffffffffff831663c1385f2460208801358a8e8e898f8e896040519080825280601f01601f1916602001820160405280156109b4576020820181803683370190505b506040518963ffffffff1660e01b81526004016109d89897969594939291906127be565b600060405180830381600087803b1580156109f257600080fd5b505af1158015610a06573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a4c91908101906124c6565b6040517fd06f3fb500000000000000000000000000000000000000000000000000000000815290925073ffffffffffffffffffffffffffffffffffffffff8b16915063d06f3fb590610aa490899033906004016126e9565b602060405180830381600087803b158015610abe57600080fd5b505af1158015610ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af691906125c7565b94508873ffffffffffffffffffffffffffffffffffffffff167fd8323ca53cfc1feaad69ff4da62bfe7b2e48f1906238193fe8f686db378e6bc086338585600081518110610b4657610b46612927565b6020026020010151604051610b8b949392919093845273ffffffffffffffffffffffffffffffffffffffff928316602085015291166040830152606082015260800190565b60405180910390a280600081518110610ba657610ba6612927565b6020026020010151881115610c1f57610bfd3382600081518110610bcc57610bcc612927565b60200260200101518a610bdf91906128b5565b73ffffffffffffffffffffffffffffffffffffffff85169190611b74565b610c1f73ffffffffffffffffffffffffffffffffffffffff8316846000611bcf565b505050509695505050505050565b60003233148015610c3d5750333b155b610ca3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e64207573657200000000000000000000000000000060448201526064016101b4565b600154604080517ff887ea40000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163f887ea40916004808301926020929190829003018186803b158015610d0e57600080fd5b505afa158015610d22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4691906122ad565b9050600073ffffffffffffffffffffffffffffffffffffffff821663e76c59753460208701358b8b8b8b886040519080825280601f01601f191660200182016040528015610d9b576020820181803683370190505b506040518863ffffffff1660e01b8152600401610dbd96959493929190612763565b6000604051808303818588803b158015610dd657600080fd5b505af1158015610dea573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e3191908101906124c6565b6040517fd06f3fb500000000000000000000000000000000000000000000000000000000815290925073ffffffffffffffffffffffffffffffffffffffff8816915063d06f3fb590610e8990879033906004016126e9565b602060405180830381600087803b158015610ea357600080fd5b505af1158015610eb7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610edb91906125c7565b92508573ffffffffffffffffffffffffffffffffffffffff167fd8323ca53cfc1feaad69ff4da62bfe7b2e48f1906238193fe8f686db378e6bc08433600085600081518110610f2c57610f2c612927565b6020026020010151604051610f71949392919093845273ffffffffffffffffffffffffffffffffffffffff928316602085015291166040830152606082015260800190565b60405180910390a2610fa83382600081518110610f9057610f90612927565b602002602001015134610fa391906128b5565b611d60565b505095945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611034576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6e6f742066726f6d206f776e657200000000000000000000000000000000000060448201526064016101b4565b73ffffffffffffffffffffffffffffffffffffffff81166110b1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e756c6c2061646472657373000000000000000000000000000000000000000060448201526064016101b4565b60015473ffffffffffffffffffffffffffffffffffffffff1615611131576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f616c72656164792073657400000000000000000000000000000000000000000060448201526064016101b4565b6001805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600080549091169055565b600154604080517fef060951000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163ef060951916004808301926020929190829003018186803b1580156111ea57600080fd5b505afa1580156111fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061122291906122ad565b905073ffffffffffffffffffffffffffffffffffffffff81166112a1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f726500000000000000000000000060448201526064016101b4565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f6fa6ee9ec7808d2a9699505042862d79597c4068938b960a4a18d584a2aa3eea9060200160405180910390a150565b6000323314801561132a5750333b155b611390576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e64207573657200000000000000000000000000000060448201526064016101b4565b600154604080517ff887ea40000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff169163f887ea40916004808301926020929190829003018186803b1580156113fb57600080fd5b505afa15801561140f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061143391906122ad565b90506000808273ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8b8b8b73ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b815260040160206040518083038186803b15801561149c57600080fd5b505afa1580156114b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d491906122ad565b6040518463ffffffff1660e01b81526004016114f29392919061269c565b60006040518083038186803b15801561150a57600080fd5b505afa15801561151e573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526115649190810190612491565b90508060008151811061157957611579612927565b602002602001015191505061158f81338861186e565b95506115b273ffffffffffffffffffffffffffffffffffffffff821683886119e3565b60008273ffffffffffffffffffffffffffffffffffffffff166365d9e64b8887602001518d8d878e8d600067ffffffffffffffff8111156115f5576115f5612956565b6040519080825280601f01601f19166020018201604052801561161f576020820181803683370190505b506040518963ffffffff1660e01b81526004016116439897969594939291906127be565b600060405180830381600087803b15801561165d57600080fd5b505af1158015611671573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526116b791908101906124c6565b91505080600182516116c991906128b5565b815181106116d9576116d9612927565b602090810291909101810151908601908152604080517fd06f3fb5000000000000000000000000000000000000000000000000000000008152875160048201529151602483015286015173ffffffffffffffffffffffffffffffffffffffff90811660448301526060870151606483015260808701518116608483015260a087015160a48301523360c483015289169063d06f3fb59060e401602060405180830381600087803b15801561178c57600080fd5b505af11580156117a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117c491906125c7565b93508773ffffffffffffffffffffffffffffffffffffffff167fd8323ca53cfc1feaad69ff4da62bfe7b2e48f1906238193fe8f686db378e6bc08533858560008151811061181457611814612927565b6020026020010151604051611859949392919093845273ffffffffffffffffffffffffffffffffffffffff928316602085015291166040830152606082015260800190565b60405180910390a25050509695505050505050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a082319060240160206040518083038186803b1580156118d657600080fd5b505afa1580156118ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061190e91906125c7565b905061193273ffffffffffffffffffffffffffffffffffffffff8516843085611e6a565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8616906370a082319060240160206040518083038186803b15801561199957600080fd5b505afa1580156119ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119d191906125c7565b6119db91906128b5565b949350505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e9060440160206040518083038186803b158015611a5557600080fd5b505afa158015611a69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a8d91906125c7565b611a97919061289d565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150611b6e9085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611ec8565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611bca9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611aec565b505050565b801580611c7e57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e9060440160206040518083038186803b158015611c4457600080fd5b505afa158015611c58573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7c91906125c7565b155b611d0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016101b4565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611bca9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611aec565b6040805160008082526020820190925273ffffffffffffffffffffffffffffffffffffffff8416908390604051611d979190612680565b60006040518083038185875af1925050503d8060008114611dd4576040519150601f19603f3d011682016040523d82523d6000602084013e611dd9565b606091505b5050905080611bca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f5472616e7366657248656c7065723a204554485f5452414e534645525f46414960448201527f4c4544000000000000000000000000000000000000000000000000000000000060648201526084016101b4565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611b6e9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611aec565b6000611f2a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fd49092919063ffffffff16565b805190915015611bca5780806020019051810190611f489190612588565b611bca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016101b4565b60606119db8484600085856000808673ffffffffffffffffffffffffffffffffffffffff1685876040516120089190612680565b60006040518083038185875af1925050503d8060008114612045576040519150601f19603f3d011682016040523d82523d6000602084013e61204a565b606091505b509150915061205b87838387612066565b979650505050505050565b606083156120f95782516120f25773ffffffffffffffffffffffffffffffffffffffff85163b6120f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101b4565b50816119db565b6119db838381511561210e5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101b491906126d6565b60008083601f84011261215457600080fd5b50813567ffffffffffffffff81111561216c57600080fd5b6020830191508360208260051b850101111561218757600080fd5b9250929050565b600082601f83011261219f57600080fd5b815160206121b46121af83612879565b61282a565b80838252828201915082860187848660051b89010111156121d457600080fd5b60005b858110156121fc5781516121ea81612985565b845292840192908401906001016121d7565b5090979650505050505050565b600060c0828403121561221b57600080fd5b50919050565b600060c0828403121561223357600080fd5b60405160c0810181811067ffffffffffffffff8211171561225657612256612956565b80604052508091508235815260208301356020820152604083013561227a81612985565b604082015260608381013590820152608083013561229781612985565b608082015260a092830135920191909152919050565b6000602082840312156122bf57600080fd5b81516122ca81612985565b9392505050565b600080600080600061012086880312156122ea57600080fd5b853567ffffffffffffffff81111561230157600080fd5b61230d88828901612142565b909650945050602086013561232181612985565b9250604086013591506123378760608801612209565b90509295509295909350565b6000806000806000610120868803121561235c57600080fd5b853567ffffffffffffffff81111561237357600080fd5b61237f88828901612142565b909650945050602086013561239381612985565b9250604086013591506123378760608801612221565b60008060008060008061014087890312156123c357600080fd5b863567ffffffffffffffff8111156123da57600080fd5b6123e689828a01612142565b90975095505060208701356123fa81612985565b935060408701359250606087013591506124178860808901612209565b90509295509295509295565b600080600080600080610140878903121561243d57600080fd5b863567ffffffffffffffff81111561245457600080fd5b61246089828a01612142565b909750955050602087013561247481612985565b935060408701359250606087013591506124178860808901612221565b6000602082840312156124a357600080fd5b815167ffffffffffffffff8111156124ba57600080fd5b6119db8482850161218e565b600080604083850312156124d957600080fd5b825167ffffffffffffffff808211156124f157600080fd5b6124fd8683870161218e565b935060209150818501518181111561251457600080fd5b85019050601f8101861361252757600080fd5b80516125356121af82612879565b80828252848201915084840189868560051b870101111561255557600080fd5b600094505b8385101561257857805183526001949094019391850191850161255a565b5080955050505050509250929050565b60006020828403121561259a57600080fd5b815180151581146122ca57600080fd5b6000602082840312156125bc57600080fd5b81356122ca81612985565b6000602082840312156125d957600080fd5b5051919050565b8183526000602080850194508260005b8581101561262b57813561260381612985565b73ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016125f0565b509495945050505050565b6000815180845261264e8160208601602086016128cc565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600082516126928184602087016128cc565b9190910192915050565b6040815260006126b06040830185876125e0565b905073ffffffffffffffffffffffffffffffffffffffff83166020830152949350505050565b6020815260006122ca6020830184612636565b823581526020808401359082015260e08101604084013561270981612985565b73ffffffffffffffffffffffffffffffffffffffff8082166040850152606086013560608501526080860135915061274082612985565b808216608085015260a086013560a085015280851660c085015250509392505050565b86815260a06020820152600061277d60a0830187896125e0565b73ffffffffffffffffffffffffffffffffffffffff8616604084015284606084015282810360808401526127b18185612636565b9998505050505050505050565b88815287602082015260e0604082015260006127de60e08301888a6125e0565b73ffffffffffffffffffffffffffffffffffffffff87811660608501528616608084015260a0830185905282810360c084015261281b8185612636565b9b9a5050505050505050505050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561287157612871612956565b604052919050565b600067ffffffffffffffff82111561289357612893612956565b5060051b60200190565b600082198211156128b0576128b06128f8565b500190565b6000828210156128c7576128c76128f8565b500390565b60005b838110156128e75781810151838201526020016128cf565b83811115611b6e5750506000910152565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff811681146129a757600080fd5b5056fea26469706673582212205c66d5aa7aadadff5f2ccc4277b701ec2f0cb7b172f2c770b272a3b4b056559964736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_RouterVaultWrapper.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_RouterVaultWrapper.json.ts"], function (require, exports, eth_contract_16, OSWAP_RouterVaultWrapper_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_RouterVaultWrapper = void 0;
    class OSWAP_RouterVaultWrapper extends eth_contract_16.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_RouterVaultWrapper_json_1.default.abi, OSWAP_RouterVaultWrapper_json_1.default.bytecode);
            this.assign();
        }
        deploy() {
            return this.__deploy();
        }
        parseSwapEvent(receipt) {
            return this.parseEvents(receipt, "Swap").map(e => this.decodeSwapEvent(e));
        }
        decodeSwapEvent(event) {
            let result = event.data;
            return {
                vault: result.vault,
                orderId: new eth_contract_16.BigNumber(result.orderId),
                sender: result.sender,
                inToken: result.inToken,
                inAmount: new eth_contract_16.BigNumber(result.inAmount),
                _event: event
            };
        }
        parseUpdateConfigStoreEvent(receipt) {
            return this.parseEvents(receipt, "UpdateConfigStore").map(e => this.decodeUpdateConfigStoreEvent(e));
        }
        decodeUpdateConfigStoreEvent(event) {
            let result = event.data;
            return {
                newConfigStore: result.newConfigStore,
                _event: event
            };
        }
        assign() {
            let configStore_call = async () => {
                let result = await this.call('configStore');
                return result;
            };
            this.configStore = configStore_call;
            let owner_call = async () => {
                let result = await this.call('owner');
                return result;
            };
            this.owner = owner_call;
            let initAddress_send = async (configStore) => {
                let result = await this.send('initAddress', [configStore]);
                return result;
            };
            let initAddress_call = async (configStore) => {
                let result = await this.call('initAddress', [configStore]);
                return;
            };
            this.initAddress = Object.assign(initAddress_send, {
                call: initAddress_call
            });
            let swapETHForExactTokensParams = (params) => [params.pair, params.vault, this.wallet.utils.toString(params.deadline), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
            let swapETHForExactTokens_send = async (params, _value) => {
                let result = await this.send('swapETHForExactTokens', swapETHForExactTokensParams(params), { value: _value });
                return result;
            };
            let swapETHForExactTokens_call = async (params, _value) => {
                let result = await this.call('swapETHForExactTokens', swapETHForExactTokensParams(params), { value: _value });
                return new eth_contract_16.BigNumber(result);
            };
            this.swapETHForExactTokens = Object.assign(swapETHForExactTokens_send, {
                call: swapETHForExactTokens_call
            });
            let swapExactETHForTokensParams = (params) => [params.pair, params.vault, this.wallet.utils.toString(params.deadline), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
            let swapExactETHForTokens_send = async (params, _value) => {
                let result = await this.send('swapExactETHForTokens', swapExactETHForTokensParams(params), { value: _value });
                return result;
            };
            let swapExactETHForTokens_call = async (params, _value) => {
                let result = await this.call('swapExactETHForTokens', swapExactETHForTokensParams(params), { value: _value });
                return new eth_contract_16.BigNumber(result);
            };
            this.swapExactETHForTokens = Object.assign(swapExactETHForTokens_send, {
                call: swapExactETHForTokens_call
            });
            let swapExactTokensForTokensParams = (params) => [params.pair, params.vault, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.deadline), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
            let swapExactTokensForTokens_send = async (params) => {
                let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
                return result;
            };
            let swapExactTokensForTokens_call = async (params) => {
                let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
                return new eth_contract_16.BigNumber(result);
            };
            this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
                call: swapExactTokensForTokens_call
            });
            let swapTokensForExactTokensParams = (params) => [params.pair, params.vault, this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.deadline), [this.wallet.utils.toString(params.order.peerChain), this.wallet.utils.toString(params.order.inAmount), params.order.outToken, this.wallet.utils.toString(params.order.minOutAmount), params.order.to, this.wallet.utils.toString(params.order.expire)]];
            let swapTokensForExactTokens_send = async (params) => {
                let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
                return result;
            };
            let swapTokensForExactTokens_call = async (params) => {
                let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
                return new eth_contract_16.BigNumber(result);
            };
            this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
                call: swapTokensForExactTokens_call
            });
            let updateConfigStore_send = async () => {
                let result = await this.send('updateConfigStore');
                return result;
            };
            let updateConfigStore_call = async () => {
                let result = await this.call('updateConfigStore');
                return;
            };
            this.updateConfigStore = Object.assign(updateConfigStore_send, {
                call: updateConfigStore_call
            });
        }
    }
    exports.OSWAP_RouterVaultWrapper = OSWAP_RouterVaultWrapper;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainTrollRegistry.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainTrollRegistry.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "_configStore", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "troll", "type": "address" }, { "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "isSuperTroll", "type": "bool" }], "name": "AddTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "DelistTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "lockedBy", "type": "address" }], "name": "LockGeneralTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "address", "name": "lockedBy", "type": "address" }], "name": "LockSuperTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "contract IERC20", "name": "token", "type": "address" }, { "indexed": true, "internalType": "contract IOSWAP_BridgeVault", "name": "vault", "type": "address" }], "name": "NewVault", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "RemoveTroll", "type": "event" },
            { "anonymous": false, "inputs": [], "name": "Resume", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newVotingExecutor", "type": "address" }, { "indexed": false, "internalType": "bool", "name": "isActive", "type": "bool" }], "name": "SetVotingExecutor", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }], "name": "Shutdown", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "UnlockGeneralTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": false, "internalType": "bool", "name": "unlock", "type": "bool" }, { "indexed": false, "internalType": "address", "name": "bridgeVault", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "penalty", "type": "uint256" }], "name": "UnlockSuperTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract OSWAP_ConfigStore", "name": "newConfigStore", "type": "address" }], "name": "UpdateConfigStore", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "troll", "type": "address" }], "name": "UpdateTroll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "newTrollRegistry", "type": "address" }], "name": "Upgrade", "type": "event" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "bool", "name": "_isSuperTroll", "type": "bool" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "addTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "allVaultToken", "outputs": [{ "internalType": "contract IERC20[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "configStore", "outputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "generalTrollCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "govToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "bool", "name": "_isSuperTroll", "type": "bool" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "hashAddTroll", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "contract IOSWAP_BridgeVault", "name": "vault", "type": "address" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "hashRegisterVault", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "hashRemoveTroll", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "bool", "name": "unlock", "type": "bool" }, { "internalType": "address[]", "name": "vaultRegistry", "type": "address[]" }, { "internalType": "uint256[]", "name": "penalty", "type": "uint256[]" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "hashUnlockTroll", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "address", "name": "newTroll", "type": "address" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "hashUpdateTroll", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_votingExecutor", "type": "address" }, { "internalType": "contract IERC20[]", "name": "tokens", "type": "address[]" }, { "internalType": "contract IOSWAP_BridgeVault[]", "name": "_vaults", "type": "address[]" }], "name": "initAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "bool", "name": "returnFalseIfBlocked", "type": "bool" }], "name": "isGeneralTroll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "bool", "name": "returnFalseIfBlocked", "type": "bool" }], "name": "isGeneralTrollByIndex", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "bool", "name": "returnFalseIfBlocked", "type": "bool" }], "name": "isSuperTroll", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "bool", "name": "returnFalseIfBlocked", "type": "bool" }], "name": "isSuperTrollByIndex", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isVotingExecutor", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lastTrollTxCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "lockGeneralTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }], "name": "lockSuperTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newTrollRegistry", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newVotingExecutorManager", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "paused", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "contract IERC20", "name": "token", "type": "address" }, { "internalType": "contract IOSWAP_BridgeVault", "name": "vault", "type": "address" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "registerVault", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "removeTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "resume", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_votingExecutor", "type": "address" }, { "internalType": "bool", "name": "_bool", "type": "bool" }], "name": "setVotingExecutor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "shutdownByAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "shutdownByVoting", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "superTrollCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "transactionsCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "trollProfileInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "trollProfiles", "outputs": [{ "internalType": "address", "name": "troll", "type": "address" }, { "internalType": "enum OSWAP_SideChainTrollRegistry.TrollType", "name": "trollType", "type": "uint8" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "trollRegistry", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "unlockGeneralTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "bool", "name": "unlock", "type": "bool" }, { "internalType": "address[]", "name": "vaultRegistry", "type": "address[]" }, { "internalType": "uint256[]", "name": "penalty", "type": "uint256[]" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "unlockSuperTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "updateConfigStore", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "uint256", "name": "trollProfileIndex", "type": "uint256" }, { "internalType": "address", "name": "newTroll", "type": "address" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "updateTroll", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_trollRegistry", "type": "address" }], "name": "upgrade", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_trollRegistry", "type": "address" }], "name": "upgradeByAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "usedNonce", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "vaultToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "vaultTokenLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "name": "vaults", "outputs": [{ "internalType": "contract IOSWAP_BridgeVault", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "msgSender", "type": "address" }, { "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "bytes32", "name": "paramsHash", "type": "bytes32" }, { "internalType": "uint256", "name": "_nonce", "type": "uint256" }], "name": "verifySignatures", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "votingExecutor", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "votingExecutorInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "votingExecutorLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60c06040523060601b60a0523480156200001857600080fd5b50604051620043b8380380620043b88339810160408190526200003b9162000119565b600080546001600160a01b03191633179055600380546001600160a01b0383166101008102610100600160a81b031990921691909117909155604080516305268cff60e01b815290516305268cff91600480820192602092909190829003018186803b158015620000ab57600080fd5b505afa158015620000c0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000e6919062000119565b60601b6001600160601b031916608052503360009081526002602052604090208054600160ff1990911617905562000159565b6000602082840312156200012c57600080fd5b8151620001398162000140565b9392505050565b6001600160a01b03811681146200015657600080fd5b50565b60805160601c60a05160601c6142336200018560003960006104ba0152600061043501526142336000f3fe608060405234801561001057600080fd5b50600436106103615760003560e01c80639527afb4116101c8578063be955e6411610104578063e62d51cb116100a2578063f6f04d7f1161007c578063f6f04d7f146108f8578063f7b1bf7e14610918578063fb22afb61461092b578063fd99a7461461093e57600080fd5b8063e62d51cb14610864578063ef9414fc14610884578063f2fde38b146108e557600080fd5b8063c53bc047116100de578063c53bc047146107fe578063c8b45a571461081c578063d4ee1d9014610831578063e19888df1461085157600080fd5b8063be955e64146107c5578063c10ebe4b146107d8578063c20ecd1f146107eb57600080fd5b8063a2f55ae511610171578063b86241271161014b578063b862412714610777578063bba588ca1461077f578063bc69b0321461079f578063bced6181146107b257600080fd5b8063a2f55ae51461070b578063a3818b3b1461071e578063a622ee7c1461074157600080fd5b806398efa13a116101a257806398efa13a146106cb5780639c52a7f1146106d35780639d69dc4e146106e657600080fd5b80639527afb41461068c57806396e9c560146106955780639723fb6d146106a857600080fd5b80634686c025116102a2578063788ddbcb11610240578063842c48351161021a578063842c48351461063e5780638da5cb5b146106465780638f409ae914610666578063919270501461067957600080fd5b8063788ddbcb1461061057806378a1a9fa1461062357806382ad71191461062b57600080fd5b8063643053281161027c57806364305328146105745780636468fca1146105875780636bf7fe951461058f5780636cd31b3d146105a257600080fd5b80634686c0251461054e5780635c975abb14610561578063605361721461056c57600080fd5b806309a34aa41161030f578063382447b9116102e9578063382447b9146104fc5780633fd8cc4e1461050f578063414016d81461053257806344fe9eb01461053b57600080fd5b806309a34aa4146104a257806330167bec146104b55780633820a526146104dc57600080fd5b806305268cff1161034057806305268cff146104305780630900f0101461047c578063099828de1461048f57600080fd5b80622e60741461036657806303ad7c8e1461038e578063046f7da214610426575b600080fd5b610379610374366004613cdb565b610947565b60405190151581526020015b60405180910390f35b61041861039c366004613c6e565b60408051466020808301919091527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b82168486015260548401989098529590961b909416607485015291151560f81b60888401526089808401919091528151808403909101815260a99092019052805191012090565b604051908152602001610385565b61042e6109dd565b005b6104577f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610385565b61042e61048a366004613854565b610b1a565b61042e61049d366004613871565b610b9f565b6103796104b036600461395b565b610c2c565b6104577f000000000000000000000000000000000000000000000000000000000000000081565b6104186104ea366004613854565b60086020526000908152604090205481565b61041861050a366004613cb4565b610c64565b61037961051d366004613854565b60026020526000908152604090205460ff1681565b61041860095481565b61042e610549366004613854565b610ce2565b61042e61055c3660046138d8565b610d06565b60035460ff16610379565b61042e611010565b61042e610582366004613c3c565b61113a565b61042e6112e1565b61041861059d366004613bde565b611445565b6104186105b0366004613deb565b60408051466020808301919091523060601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016828401526054820194909452607480820193909352815180820390930183526094019052805191012090565b61042e61061e36600461395b565b6114aa565b600454610418565b61037961063936600461395b565b611531565b61042e611561565b6000546104579073ffffffffffffffffffffffffffffffffffffffff1681565b61042e610674366004613b8d565b611706565b610457610687366004613c3c565b6119c6565b610418600a5481565b61042e6106a3366004613a00565b6119fd565b6103796106b6366004613c3c565b600d6020526000908152604090205460ff1681565b600e54610418565b61042e6106e1366004613854565b611ebe565b60035461045790610100900473ffffffffffffffffffffffffffffffffffffffff1681565b61042e610719366004613854565b611f5e565b61037961072c366004613854565b60066020526000908152604090205460ff1681565b61045761074f366004613854565b600f6020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b61042e612001565b6010546104579073ffffffffffffffffffffffffffffffffffffffff1681565b6103796107ad366004613cdb565b61207a565b6104576107c0366004613c3c565b6120c7565b6104186107d3366004613cfe565b6120d7565b61042e6107e6366004613b8d565b61211b565b61042e6107f9366004613a78565b612266565b60105473ffffffffffffffffffffffffffffffffffffffff16610457565b6108246124d0565b6040516103859190613f2c565b6001546104579073ffffffffffffffffffffffffffffffffffffffff1681565b61042e61085f366004613ace565b61253f565b610418610872366004613854565b600c6020526000908152604090205481565b6108d7610892366004613c3c565b60076020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff81169074010000000000000000000000000000000000000000900460ff1682565b604051610385929190613ecb565b61042e6108f3366004613854565b612897565b610418610906366004613854565b60056020526000908152604090205481565b61042e610926366004613c3c565b61292e565b61042e610939366004613990565b612acd565b610418600b5481565b6000600160008481526007602052604090205474010000000000000000000000000000000000000000900460ff1660048111156109865761098661414e565b14806109d6575060035b60008481526007602052604090205474010000000000000000000000000000000000000000900460ff1660048111156109cb576109cb61414e565b1480156109d6575081155b9392505050565b3360009081526006602052604090205460ff16610a5b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e670000000000000000000060448201526064015b60405180910390fd5b60035460ff16610ac7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f4e4f5420504155534544210000000000000000000000000000000000000000006044820152606401610a52565b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690556040517f490d6d11e278f168be9be39e46297f72ea877136d5bccad9cf4993e63a29568f90600090a1565b3360009081526006602052604090205460ff16610b93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610a52565b610b9c81612ba6565b50565b3360009081526006602052604090205460ff16610c18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610a52565b610c258585858585612c19565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260086020526040812054610c5c818461207a565b949350505050565b6040805146602082018190527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b821694840194909452605483018790529285901b9092166074820152608881018390526000919060a8015b604051602081830303815290604052805190602001209150509392505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610b9357600080fd5b60005473ffffffffffffffffffffffffffffffffffffffff163314610d2a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff8516610da7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f6e756c6c206164647265737300000000000000000000000000000000000000006044820152606401610a52565b610db28560016131c6565b82818114610e1c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f6172726179206c656e677468206e6f74206d61746368656400000000000000006044820152606401610a52565b60005b8181101561100757600e868683818110610e3b57610e3b61417d565b9050602002016020810190610e509190613854565b81546001810183556000928352602090922090910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055838382818110610eb957610eb961417d565b9050602002016020810190610ece9190613854565b600f6000888885818110610ee457610ee461417d565b9050602002016020810190610ef99190613854565b73ffffffffffffffffffffffffffffffffffffffff9081168252602082019290925260400160002080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692909116919091179055838382818110610f6157610f6161417d565b9050602002016020810190610f769190613854565b73ffffffffffffffffffffffffffffffffffffffff16868683818110610f9e57610f9e61417d565b9050602002016020810190610fb39190613854565b73ffffffffffffffffffffffffffffffffffffffff167f4241302c393c713e690702c4a45a57e93cef59aa8c6e2358495853b3420551d860405160405180910390a380610fff816140e6565b915050610e1f565b50505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146110b7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a52565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b611145336000611531565b8061115f57503360009081526002602052604090205460ff165b6111c5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742066726f6d2073757065722074726f6c6c0000000000000000000000006044820152606401610a52565b60008181526007602052604090206002815474010000000000000000000000000000000000000000900460ff1660048111156112035761120361414e565b1461126a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f7420612067656e6572616c2074726f6c6c000000000000000000000000006044820152606401610a52565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167404000000000000000000000000000000000000000017815560405133815282907f7f685450453775986a82112c4cad63fd255a97ece09a2fca2bbca02c420fb748906020015b60405180910390a25050565b3360009081526002602052604090205460ff16611380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610a52565b60035460ff16156113ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f50415553454421000000000000000000000000000000000000000000000000006044820152606401610a52565b600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560405133907f28b4c24cb1012c094cd2f59f98e89d791973295f8fda6eaa118022d6d318960a90600090a2565b6040805146602082018190527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b82169484019490945286841b811660548401529285901b9092166068820152607c810183905260009190609c01610cc2565b3360009081526006602052604090205460ff16611523576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610a52565b61152d82826131c6565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260086020526040812054610c5c8184610947565b6000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ef0609516040518163ffffffff1660e01b815260040160206040518083038186803b1580156115cb57600080fd5b505afa1580156115df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116039190613c1f565b905073ffffffffffffffffffffffffffffffffffffffff8116611682576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f496e76616c696420636f6e6669672073746f72650000000000000000000000006044820152606401610a52565b600380547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010073ffffffffffffffffffffffffffffffffffffffff8481168202929092179283905560405192041681527f6fa6ee9ec7808d2a9699505042862d79597c4068938b960a4a18d584a2aa3eea906020015b60405180910390a150565b60408051466020808301919091527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000003060601b168284015260548201859052607480830185905283518084039091018152609490920190925280519101206117713386868486612c19565b600083815260076020526040812090815474010000000000000000000000000000000000000000900460ff1660048111156117ae576117ae61414e565b1415611816576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420612076616c69642074726f6c6c0000000000000000000000000000006044820152606401610a52565b60405184907f3146e37097e6cad53dc6803fe565afb42bd0fa6d1c8f2770885428ba293f672290600090a260008481526007602052604090205474010000000000000000000000000000000000000000900460ff16600181600481111561187f5761187f61414e565b148061189c5750600381600481111561189a5761189a61414e565b145b156118bb57600980549060006118b1836140b1565b9190505550611963565b60028160048111156118cf576118cf61414e565b14806118ec575060048160048111156118ea576118ea61414e565b145b1561190157600a80549060006118b1836140b1565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f696e76616c69642074726f6c6c207479706500000000000000000000000000006044820152606401610a52565b505473ffffffffffffffffffffffffffffffffffffffff166000908152600860209081526040808320839055948252600790529290922080547fffffffffffffffffffffff00000000000000000000000000000000000000000016905550505050565b600481815481106119d657600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60408051466020808301919091527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000030606090811b8216848601526054840189905287901b16607483015284151560f81b608883015260898083018590528351808403909101815260a99092019092528051910120611a7f3388888486612c19565b73ffffffffffffffffffffffffffffffffffffffff8416611afc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c69642074726f6c6c000000000000000000000000000000000000006044820152606401610a52565b84611b63576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f74726f6c6c50726f66696c65496e6465782063616e6e6f74206265207a65726f6044820152606401610a52565b6000808681526007602052604090205474010000000000000000000000000000000000000000900460ff166004811115611b9f57611b9f61414e565b14611c06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f616c7265616479206164646564000000000000000000000000000000000000006044820152606401610a52565b73ffffffffffffffffffffffffffffffffffffffff841660009081526008602052604090205415611c93576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f616c7265616479206164646564000000000000000000000000000000000000006044820152606401610a52565b60405180604001604052808573ffffffffffffffffffffffffffffffffffffffff16815260200184611cc6576002611cc9565b60015b6004811115611cda57611cda61414e565b905260008681526007602090815260409091208251815473ffffffffffffffffffffffffffffffffffffffff9091167fffffffffffffffffffffffff000000000000000000000000000000000000000082168117835592840151919283917fffffffffffffffffffffff000000000000000000000000000000000000000000161774010000000000000000000000000000000000000000836004811115611d8357611d8361414e565b0217905550505073ffffffffffffffffffffffffffffffffffffffff84166000908152600860205260409020859055600160008681526007602052604090205474010000000000000000000000000000000000000000900460ff166004811115611def57611def61414e565b1415611e0f5760098054906000611e05836140e6565b9190505550611e62565b600260008681526007602052604090205474010000000000000000000000000000000000000000900460ff166004811115611e4c57611e4c61414e565b141561190157600a8054906000611e05836140e6565b848473ffffffffffffffffffffffffffffffffffffffff167f8c9d891ac7160986ec470eacfe13fdd4e04741d07abc6e880cd9cdb4d1e019cb85604051611ead911515815260200190565b60405180910390a350505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611ee257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491016116fb565b60005473ffffffffffffffffffffffffffffffffffffffff163314611f8257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016116fb565b3360009081526006602052604090205460ff16611380576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610a52565b6000600260008481526007602052604090205474010000000000000000000000000000000000000000900460ff1660048111156120b9576120b961414e565b14806109d657506004610990565b600e81815481106119d657600080fd5b60405160009046906120f990829030908a908a908a908a908a90602001613e0d565b6040516020818303038152906040528051906020012091505095945050505050565b604080516000808252602082018181528284019093529161214291859160019190866120d7565b90506121513386868486612c19565b60008381526007602052604090206004815474010000000000000000000000000000000000000000900460ff16600481111561218f5761218f61414e565b146121f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420696e206c6f636b6564207374617475730000000000000000000000006044820152606401610a52565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167402000000000000000000000000000000000000000017815560405184907f5190d96f5b35d80be130fe8fdbbe793dcb5b7df2507981d58b0787851c64186c90600090a2505050505050565b6000612273848484610c64565b90506122823387878486612c19565b73ffffffffffffffffffffffffffffffffffffffff83166122ff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f496e76616c69642074726f6c6c000000000000000000000000000000000000006044820152606401610a52565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600860205260409020541561238c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f6e657754726f6c6c20616c7265616479206578697374730000000000000000006044820152606401610a52565b600084815260076020526040812090815474010000000000000000000000000000000000000000900460ff1660048111156123c9576123c961414e565b1415612431576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420612076616c69642074726f6c6c0000000000000000000000000000006044820152606401610a52565b805473ffffffffffffffffffffffffffffffffffffffff90811660009081526008602081815260408084208490558984526007825280842080547fffffffffffffffffffffffff000000000000000000000000000000000000000016958a1695861790558484529190528082208890555187917f76a543d419e6abc680c1406c05312545b9fcd5650ee4bb7038febab6838a0db491a350505050505050565b6060600e80548060200260200160405190810160405280929190818152602001828054801561253557602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019091019060200180831161250a575b5050505050905090565b60006125b2888888888080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808c0282810182019093528b82529093508b92508a9182918501908490808284376000920191909152508992506120d7915050565b90506125c1338b8b8486612c19565b60008881526007602052604090206003815474010000000000000000000000000000000000000000900460ff1660048111156125ff576125ff61414e565b14612666576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f7420696e206c6f636b6564207374617475730000000000000000000000006044820152606401610a52565b858481146126d0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6c656e677468206e6f74206d61746368000000000000000000000000000000006044820152606401610a52565b88156127145781547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001782555b60005b81811015612888578888828181106127315761273161417d565b90506020020160208101906127469190613854565b73ffffffffffffffffffffffffffffffffffffffff1663b5155a1b8c8989858181106127745761277461417d565b905060200201356040518363ffffffff1660e01b81526004016127a1929190918252602082015260400190565b600060405180830381600087803b1580156127bb57600080fd5b505af11580156127cf573d6000803e3d6000fd5b505050508a7fdc296d8aadc3ba5ba13b757df60241d09dc546e017a11ca07f0b71fccc55d66f8b8b8b858181106128085761280861417d565b905060200201602081019061281d9190613854565b8a8a8681811061282f5761282f61417d565b9050602002013560405161286e93929190921515835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b60405180910390a280612880816140e6565b915050612717565b50505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146128bb57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016116fb565b612939336000611531565b8061295357503360009081526002602052604090205460ff165b6129b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742066726f6d2073757065722074726f6c6c0000000000000000000000006044820152606401610a52565b60008181526007602052604090206001815474010000000000000000000000000000000000000000900460ff1660048111156129f7576129f761414e565b14612a5e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f6e6f7420612073757065722074726f6c6c0000000000000000000000000000006044820152606401610a52565b80547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff167403000000000000000000000000000000000000000017815560405133815282907fbb4243cf85be5a0fe6bee455e2c678ca74c8796416a6880ba7f98963ad838489906020016112d5565b6000612ada848484611445565b9050612ae93387878486612c19565b600e8054600181019091557fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd01805473ffffffffffffffffffffffffffffffffffffffff8087167fffffffffffffffffffffffff000000000000000000000000000000000000000092831681179093556000838152600f6020526040808220805493891693909416831790935591519092917f4241302c393c713e690702c4a45a57e93cef59aa8c6e2358495853b3420551d891a3505050505050565b601080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d906020016116fb565b612c24856000611531565b80612c54575073ffffffffffffffffffffffffffffffffffffffff851660009081526002602052604090205460ff165b612cba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6e6f742066726f6d2073757065722074726f6c6c0000000000000000000000006044820152606401610a52565b6000818152600d602052604090205460ff1615612d33576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6e6f6e63652075736564000000000000000000000000000000000000000000006044820152606401610a52565b6000818152600d6020526040812080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558080805b86811015612f4e576000612e31898984818110612d8d57612d8d61417d565b9050602002810190612d9f9190613f86565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250506040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c81018c9052605c019150612e0d9050565b6040516020818303038152906040528051906020012061347890919063ffffffff16565b905073ffffffffffffffffffffffffffffffffffffffff8116612eb0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964207369676e65720000000000000000000000000000000000006044820152606401610a52565b612ebb816000611531565b15612f0a578273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161115612f055784612efe816140e6565b9550508092505b612f3d565b73ffffffffffffffffffffffffffffffffffffffff811660009081526002602052604090205460ff1615612f3d57600193505b50612f47816140e6565b9050612d6e565b506000600360019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cdd7e0c46040518163ffffffff1660e01b815260040160206040518083038186803b158015612fb957600080fd5b505afa158015612fcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612ff19190613c55565b90506000600b60008154613004906140e6565b91829055509050836130b55773ffffffffffffffffffffffffffffffffffffffff8a166000908152600c6020526040902054819061304390849061405e565b108061304f5750818111155b6130b5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f746f6f20736f6f6e0000000000000000000000000000000000000000000000006044820152606401610a52565b73ffffffffffffffffffffffffffffffffffffffff8a166000908152600c60205260409020819055600954158015906130ef575060095485145b8061312e575060026009546001613106919061405e565b6131109190614076565b8511801561311b5750835b8061312e575060095415801561312e5750835b6131ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4f535741505f54726f6c6c52656769737472793a20537570657254726f6c6c2060448201527f636f756e74206e6f74206d6574000000000000000000000000000000000000006064820152608401610a52565b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216613243576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4f535741503a20496e76616c6964206578656375746f720000000000000000006044820152606401610a52565b60045415806132ad575073ffffffffffffffffffffffffffffffffffffffff82166000818152600560205260409020546004805490919081106132885761328861417d565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b15613338576004805473ffffffffffffffffffffffffffffffffffffffff84166000818152600560205260408120839055600183018455929092527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690911790556133ea565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600560205260409020546133ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4f535741503a2063616e6e6f74207265736574206d61696e206578656375746f60448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610a52565b73ffffffffffffffffffffffffffffffffffffffff821660008181526006602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168515159081179091558251938452908301527fc9d99f6e5fb91afe529b412fe3dae984962ebaa46ab41e1c3a0bd4d9239aadde910160405180910390a15050565b6000806000613487858561349c565b91509150613494816134e2565b509392505050565b6000808251604114156134d35760208301516040840151606085015160001a6134c787828585613699565b945094505050506134db565b506000905060025b9250929050565b60008160048111156134f6576134f661414e565b14156134ff5750565b60018160048111156135135761351361414e565b141561357b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610a52565b600281600481111561358f5761358f61414e565b14156135f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610a52565b600381600481111561360b5761360b61414e565b1415610b9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401610a52565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156136d0575060009050600361377f565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015613724573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166137785760006001925092505061377f565b9150600090505b94509492505050565b60008083601f84011261379a57600080fd5b50813567ffffffffffffffff8111156137b257600080fd5b6020830191508360208260051b85010111156134db57600080fd5b600082601f8301126137de57600080fd5b813560206137f36137ee8361403a565b613feb565b80838252828201915082860187848660051b890101111561381357600080fd5b60005b8581101561383257813584529284019290840190600101613816565b5090979650505050505050565b8035801515811461384f57600080fd5b919050565b60006020828403121561386657600080fd5b81356109d6816141db565b60008060008060006080868803121561388957600080fd5b8535613894816141db565b9450602086013567ffffffffffffffff8111156138b057600080fd5b6138bc88828901613788565b9699909850959660408101359660609091013595509350505050565b6000806000806000606086880312156138f057600080fd5b85356138fb816141db565b9450602086013567ffffffffffffffff8082111561391857600080fd5b61392489838a01613788565b9096509450604088013591508082111561393d57600080fd5b5061394a88828901613788565b969995985093965092949392505050565b6000806040838503121561396e57600080fd5b8235613979816141db565b91506139876020840161383f565b90509250929050565b6000806000806000608086880312156139a857600080fd5b853567ffffffffffffffff8111156139bf57600080fd5b6139cb88828901613788565b90965094505060208601356139df816141db565b925060408601356139ef816141db565b949793965091946060013592915050565b60008060008060008060a08789031215613a1957600080fd5b863567ffffffffffffffff811115613a3057600080fd5b613a3c89828a01613788565b909750955050602087013593506040870135613a57816141db565b9250613a656060880161383f565b9150608087013590509295509295509295565b600080600080600060808688031215613a9057600080fd5b853567ffffffffffffffff811115613aa757600080fd5b613ab388828901613788565b9096509450506020860135925060408601356139ef816141db565b600080600080600080600080600060c08a8c031215613aec57600080fd5b893567ffffffffffffffff80821115613b0457600080fd5b613b108d838e01613788565b909b50995060208c01359850899150613b2b60408d0161383f565b975060608c0135915080821115613b4157600080fd5b613b4d8d838e01613788565b909750955060808c0135915080821115613b6657600080fd5b50613b738c828d01613788565b9a9d999c50979a9699959894979660a00135949350505050565b60008060008060608587031215613ba357600080fd5b843567ffffffffffffffff811115613bba57600080fd5b613bc687828801613788565b90989097506020870135966040013595509350505050565b600080600060608486031215613bf357600080fd5b8335613bfe816141db565b92506020840135613c0e816141db565b929592945050506040919091013590565b600060208284031215613c3157600080fd5b81516109d6816141db565b600060208284031215613c4e57600080fd5b5035919050565b600060208284031215613c6757600080fd5b5051919050565b60008060008060808587031215613c8457600080fd5b843593506020850135613c96816141db565b9250613ca46040860161383f565b9396929550929360600135925050565b600080600060608486031215613cc957600080fd5b833592506020840135613c0e816141db565b60008060408385031215613cee57600080fd5b823591506139876020840161383f565b600080600080600060a08688031215613d1657600080fd5b853594506020613d2781880161383f565b9450604087013567ffffffffffffffff80821115613d4457600080fd5b818901915089601f830112613d5857600080fd5b8135613d666137ee8261403a565b8082825285820191508585018d878560051b8801011115613d8657600080fd5b600095505b83861015613db2578035613d9e816141db565b835260019590950194918601918601613d8b565b50975050506060890135925080831115613dcb57600080fd5b5050613dd9888289016137cd565b95989497509295608001359392505050565b60008060408385031215613dfe57600080fd5b50508035926020909101359150565b878152600060207fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008960601b168184015287603484015286151560f81b605484015260558301865182880160005b82811015613e8d57815173ffffffffffffffffffffffffffffffffffffffff1684529284019290840190600101613e5b565b5050865183880192915060005b81811015613eb657835183529284019291840191600101613e9a565b50509485525090920198975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831681526040810160058310613f1f577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8260208301529392505050565b6020808252825182820181905260009190848201906040850190845b81811015613f7a57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101613f48565b50909695505050505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112613fbb57600080fd5b83018035915067ffffffffffffffff821115613fd657600080fd5b6020019150368190038213156134db57600080fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715614032576140326141ac565b604052919050565b600067ffffffffffffffff821115614054576140546141ac565b5060051b60200190565b600082198211156140715761407161411f565b500190565b6000826140ac577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b6000816140c0576140c061411f565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156141185761411861411f565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff81168114610b9c57600080fdfea2646970667358221220a9936bc7a0ab03808ccb2b63446307134579c78b8198e378e40181e7bf86734b64736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainTrollRegistry.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainTrollRegistry.json.ts"], function (require, exports, eth_contract_17, OSWAP_SideChainTrollRegistry_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_SideChainTrollRegistry = void 0;
    class OSWAP_SideChainTrollRegistry extends eth_contract_17.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_SideChainTrollRegistry_json_1.default.abi, OSWAP_SideChainTrollRegistry_json_1.default.bytecode);
            this.assign();
        }
        deploy(configStore) {
            return this.__deploy([configStore]);
        }
        parseAddTrollEvent(receipt) {
            return this.parseEvents(receipt, "AddTroll").map(e => this.decodeAddTrollEvent(e));
        }
        decodeAddTrollEvent(event) {
            let result = event.data;
            return {
                troll: result.troll,
                trollProfileIndex: new eth_contract_17.BigNumber(result.trollProfileIndex),
                isSuperTroll: result.isSuperTroll,
                _event: event
            };
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDelistTrollEvent(receipt) {
            return this.parseEvents(receipt, "DelistTroll").map(e => this.decodeDelistTrollEvent(e));
        }
        decodeDelistTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_17.BigNumber(result.trollProfileIndex),
                _event: event
            };
        }
        parseLockGeneralTrollEvent(receipt) {
            return this.parseEvents(receipt, "LockGeneralTroll").map(e => this.decodeLockGeneralTrollEvent(e));
        }
        decodeLockGeneralTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_17.BigNumber(result.trollProfileIndex),
                lockedBy: result.lockedBy,
                _event: event
            };
        }
        parseLockSuperTrollEvent(receipt) {
            return this.parseEvents(receipt, "LockSuperTroll").map(e => this.decodeLockSuperTrollEvent(e));
        }
        decodeLockSuperTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_17.BigNumber(result.trollProfileIndex),
                lockedBy: result.lockedBy,
                _event: event
            };
        }
        parseNewVaultEvent(receipt) {
            return this.parseEvents(receipt, "NewVault").map(e => this.decodeNewVaultEvent(e));
        }
        decodeNewVaultEvent(event) {
            let result = event.data;
            return {
                token: result.token,
                vault: result.vault,
                _event: event
            };
        }
        parseRemoveTrollEvent(receipt) {
            return this.parseEvents(receipt, "RemoveTroll").map(e => this.decodeRemoveTrollEvent(e));
        }
        decodeRemoveTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_17.BigNumber(result.trollProfileIndex),
                _event: event
            };
        }
        parseResumeEvent(receipt) {
            return this.parseEvents(receipt, "Resume").map(e => this.decodeResumeEvent(e));
        }
        decodeResumeEvent(event) {
            let result = event.data;
            return {
                _event: event
            };
        }
        parseSetVotingExecutorEvent(receipt) {
            return this.parseEvents(receipt, "SetVotingExecutor").map(e => this.decodeSetVotingExecutorEvent(e));
        }
        decodeSetVotingExecutorEvent(event) {
            let result = event.data;
            return {
                newVotingExecutor: result.newVotingExecutor,
                isActive: result.isActive,
                _event: event
            };
        }
        parseShutdownEvent(receipt) {
            return this.parseEvents(receipt, "Shutdown").map(e => this.decodeShutdownEvent(e));
        }
        decodeShutdownEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseUnlockGeneralTrollEvent(receipt) {
            return this.parseEvents(receipt, "UnlockGeneralTroll").map(e => this.decodeUnlockGeneralTrollEvent(e));
        }
        decodeUnlockGeneralTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_17.BigNumber(result.trollProfileIndex),
                _event: event
            };
        }
        parseUnlockSuperTrollEvent(receipt) {
            return this.parseEvents(receipt, "UnlockSuperTroll").map(e => this.decodeUnlockSuperTrollEvent(e));
        }
        decodeUnlockSuperTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_17.BigNumber(result.trollProfileIndex),
                unlock: result.unlock,
                bridgeVault: result.bridgeVault,
                penalty: new eth_contract_17.BigNumber(result.penalty),
                _event: event
            };
        }
        parseUpdateConfigStoreEvent(receipt) {
            return this.parseEvents(receipt, "UpdateConfigStore").map(e => this.decodeUpdateConfigStoreEvent(e));
        }
        decodeUpdateConfigStoreEvent(event) {
            let result = event.data;
            return {
                newConfigStore: result.newConfigStore,
                _event: event
            };
        }
        parseUpdateTrollEvent(receipt) {
            return this.parseEvents(receipt, "UpdateTroll").map(e => this.decodeUpdateTrollEvent(e));
        }
        decodeUpdateTrollEvent(event) {
            let result = event.data;
            return {
                trollProfileIndex: new eth_contract_17.BigNumber(result.trollProfileIndex),
                troll: result.troll,
                _event: event
            };
        }
        parseUpgradeEvent(receipt) {
            return this.parseEvents(receipt, "Upgrade").map(e => this.decodeUpgradeEvent(e));
        }
        decodeUpgradeEvent(event) {
            let result = event.data;
            return {
                newTrollRegistry: result.newTrollRegistry,
                _event: event
            };
        }
        assign() {
            let allVaultToken_call = async () => {
                let result = await this.call('allVaultToken');
                return result;
            };
            this.allVaultToken = allVaultToken_call;
            let configStore_call = async () => {
                let result = await this.call('configStore');
                return result;
            };
            this.configStore = configStore_call;
            let generalTrollCount_call = async () => {
                let result = await this.call('generalTrollCount');
                return new eth_contract_17.BigNumber(result);
            };
            this.generalTrollCount = generalTrollCount_call;
            let govToken_call = async () => {
                let result = await this.call('govToken');
                return result;
            };
            this.govToken = govToken_call;
            let hashAddTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.troll, params.isSuperTroll, this.wallet.utils.toString(params.nonce)];
            let hashAddTroll_call = async (params) => {
                let result = await this.call('hashAddTroll', hashAddTrollParams(params));
                return result;
            };
            this.hashAddTroll = hashAddTroll_call;
            let hashRegisterVaultParams = (params) => [params.token, params.vault, this.wallet.utils.toString(params.nonce)];
            let hashRegisterVault_call = async (params) => {
                let result = await this.call('hashRegisterVault', hashRegisterVaultParams(params));
                return result;
            };
            this.hashRegisterVault = hashRegisterVault_call;
            let hashRemoveTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.nonce)];
            let hashRemoveTroll_call = async (params) => {
                let result = await this.call('hashRemoveTroll', hashRemoveTrollParams(params));
                return result;
            };
            this.hashRemoveTroll = hashRemoveTroll_call;
            let hashUnlockTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.unlock, params.vaultRegistry, this.wallet.utils.toString(params.penalty), this.wallet.utils.toString(params.nonce)];
            let hashUnlockTroll_call = async (params) => {
                let result = await this.call('hashUnlockTroll', hashUnlockTrollParams(params));
                return result;
            };
            this.hashUnlockTroll = hashUnlockTroll_call;
            let hashUpdateTrollParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.newTroll, this.wallet.utils.toString(params.nonce)];
            let hashUpdateTroll_call = async (params) => {
                let result = await this.call('hashUpdateTroll', hashUpdateTrollParams(params));
                return result;
            };
            this.hashUpdateTroll = hashUpdateTroll_call;
            let isGeneralTrollParams = (params) => [params.troll, params.returnFalseIfBlocked];
            let isGeneralTroll_call = async (params) => {
                let result = await this.call('isGeneralTroll', isGeneralTrollParams(params));
                return result;
            };
            this.isGeneralTroll = isGeneralTroll_call;
            let isGeneralTrollByIndexParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.returnFalseIfBlocked];
            let isGeneralTrollByIndex_call = async (params) => {
                let result = await this.call('isGeneralTrollByIndex', isGeneralTrollByIndexParams(params));
                return result;
            };
            this.isGeneralTrollByIndex = isGeneralTrollByIndex_call;
            let isPermitted_call = async (param1) => {
                let result = await this.call('isPermitted', [param1]);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let isSuperTrollParams = (params) => [params.troll, params.returnFalseIfBlocked];
            let isSuperTroll_call = async (params) => {
                let result = await this.call('isSuperTroll', isSuperTrollParams(params));
                return result;
            };
            this.isSuperTroll = isSuperTroll_call;
            let isSuperTrollByIndexParams = (params) => [this.wallet.utils.toString(params.trollProfileIndex), params.returnFalseIfBlocked];
            let isSuperTrollByIndex_call = async (params) => {
                let result = await this.call('isSuperTrollByIndex', isSuperTrollByIndexParams(params));
                return result;
            };
            this.isSuperTrollByIndex = isSuperTrollByIndex_call;
            let isVotingExecutor_call = async (param1) => {
                let result = await this.call('isVotingExecutor', [param1]);
                return result;
            };
            this.isVotingExecutor = isVotingExecutor_call;
            let lastTrollTxCount_call = async (param1) => {
                let result = await this.call('lastTrollTxCount', [param1]);
                return new eth_contract_17.BigNumber(result);
            };
            this.lastTrollTxCount = lastTrollTxCount_call;
            let newOwner_call = async () => {
                let result = await this.call('newOwner');
                return result;
            };
            this.newOwner = newOwner_call;
            let newTrollRegistry_call = async () => {
                let result = await this.call('newTrollRegistry');
                return result;
            };
            this.newTrollRegistry = newTrollRegistry_call;
            let newVotingExecutorManager_call = async () => {
                let result = await this.call('newVotingExecutorManager');
                return result;
            };
            this.newVotingExecutorManager = newVotingExecutorManager_call;
            let owner_call = async () => {
                let result = await this.call('owner');
                return result;
            };
            this.owner = owner_call;
            let paused_call = async () => {
                let result = await this.call('paused');
                return result;
            };
            this.paused = paused_call;
            let superTrollCount_call = async () => {
                let result = await this.call('superTrollCount');
                return new eth_contract_17.BigNumber(result);
            };
            this.superTrollCount = superTrollCount_call;
            let transactionsCount_call = async () => {
                let result = await this.call('transactionsCount');
                return new eth_contract_17.BigNumber(result);
            };
            this.transactionsCount = transactionsCount_call;
            let trollProfileInv_call = async (param1) => {
                let result = await this.call('trollProfileInv', [param1]);
                return new eth_contract_17.BigNumber(result);
            };
            this.trollProfileInv = trollProfileInv_call;
            let trollProfiles_call = async (param1) => {
                let result = await this.call('trollProfiles', [this.wallet.utils.toString(param1)]);
                return {
                    troll: result.troll,
                    trollType: new eth_contract_17.BigNumber(result.trollType)
                };
            };
            this.trollProfiles = trollProfiles_call;
            let trollRegistry_call = async () => {
                let result = await this.call('trollRegistry');
                return result;
            };
            this.trollRegistry = trollRegistry_call;
            let usedNonce_call = async (param1) => {
                let result = await this.call('usedNonce', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.usedNonce = usedNonce_call;
            let vaultToken_call = async (param1) => {
                let result = await this.call('vaultToken', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.vaultToken = vaultToken_call;
            let vaultTokenLength_call = async () => {
                let result = await this.call('vaultTokenLength');
                return new eth_contract_17.BigNumber(result);
            };
            this.vaultTokenLength = vaultTokenLength_call;
            let vaults_call = async (param1) => {
                let result = await this.call('vaults', [param1]);
                return result;
            };
            this.vaults = vaults_call;
            let votingExecutor_call = async (param1) => {
                let result = await this.call('votingExecutor', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.votingExecutor = votingExecutor_call;
            let votingExecutorInv_call = async (param1) => {
                let result = await this.call('votingExecutorInv', [param1]);
                return new eth_contract_17.BigNumber(result);
            };
            this.votingExecutorInv = votingExecutorInv_call;
            let votingExecutorLength_call = async () => {
                let result = await this.call('votingExecutorLength');
                return new eth_contract_17.BigNumber(result);
            };
            this.votingExecutorLength = votingExecutorLength_call;
            let addTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), params.troll, params.isSuperTroll, this.wallet.utils.toString(params.nonce)];
            let addTroll_send = async (params) => {
                let result = await this.send('addTroll', addTrollParams(params));
                return result;
            };
            let addTroll_call = async (params) => {
                let result = await this.call('addTroll', addTrollParams(params));
                return;
            };
            this.addTroll = Object.assign(addTroll_send, {
                call: addTroll_call
            });
            let deny_send = async (user) => {
                let result = await this.send('deny', [user]);
                return result;
            };
            let deny_call = async (user) => {
                let result = await this.call('deny', [user]);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let initAddressParams = (params) => [params.votingExecutor, params.tokens, params.vaults];
            let initAddress_send = async (params) => {
                let result = await this.send('initAddress', initAddressParams(params));
                return result;
            };
            let initAddress_call = async (params) => {
                let result = await this.call('initAddress', initAddressParams(params));
                return;
            };
            this.initAddress = Object.assign(initAddress_send, {
                call: initAddress_call
            });
            let lockGeneralTroll_send = async (trollProfileIndex) => {
                let result = await this.send('lockGeneralTroll', [this.wallet.utils.toString(trollProfileIndex)]);
                return result;
            };
            let lockGeneralTroll_call = async (trollProfileIndex) => {
                let result = await this.call('lockGeneralTroll', [this.wallet.utils.toString(trollProfileIndex)]);
                return;
            };
            this.lockGeneralTroll = Object.assign(lockGeneralTroll_send, {
                call: lockGeneralTroll_call
            });
            let lockSuperTroll_send = async (trollProfileIndex) => {
                let result = await this.send('lockSuperTroll', [this.wallet.utils.toString(trollProfileIndex)]);
                return result;
            };
            let lockSuperTroll_call = async (trollProfileIndex) => {
                let result = await this.call('lockSuperTroll', [this.wallet.utils.toString(trollProfileIndex)]);
                return;
            };
            this.lockSuperTroll = Object.assign(lockSuperTroll_send, {
                call: lockSuperTroll_call
            });
            let permit_send = async (user) => {
                let result = await this.send('permit', [user]);
                return result;
            };
            let permit_call = async (user) => {
                let result = await this.call('permit', [user]);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let registerVaultParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), params.token, params.vault, this.wallet.utils.toString(params.nonce)];
            let registerVault_send = async (params) => {
                let result = await this.send('registerVault', registerVaultParams(params));
                return result;
            };
            let registerVault_call = async (params) => {
                let result = await this.call('registerVault', registerVaultParams(params));
                return;
            };
            this.registerVault = Object.assign(registerVault_send, {
                call: registerVault_call
            });
            let removeTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.nonce)];
            let removeTroll_send = async (params) => {
                let result = await this.send('removeTroll', removeTrollParams(params));
                return result;
            };
            let removeTroll_call = async (params) => {
                let result = await this.call('removeTroll', removeTrollParams(params));
                return;
            };
            this.removeTroll = Object.assign(removeTroll_send, {
                call: removeTroll_call
            });
            let resume_send = async () => {
                let result = await this.send('resume');
                return result;
            };
            let resume_call = async () => {
                let result = await this.call('resume');
                return;
            };
            this.resume = Object.assign(resume_send, {
                call: resume_call
            });
            let setVotingExecutorParams = (params) => [params.votingExecutor, params.bool];
            let setVotingExecutor_send = async (params) => {
                let result = await this.send('setVotingExecutor', setVotingExecutorParams(params));
                return result;
            };
            let setVotingExecutor_call = async (params) => {
                let result = await this.call('setVotingExecutor', setVotingExecutorParams(params));
                return;
            };
            this.setVotingExecutor = Object.assign(setVotingExecutor_send, {
                call: setVotingExecutor_call
            });
            let shutdownByAdmin_send = async () => {
                let result = await this.send('shutdownByAdmin');
                return result;
            };
            let shutdownByAdmin_call = async () => {
                let result = await this.call('shutdownByAdmin');
                return;
            };
            this.shutdownByAdmin = Object.assign(shutdownByAdmin_send, {
                call: shutdownByAdmin_call
            });
            let shutdownByVoting_send = async () => {
                let result = await this.send('shutdownByVoting');
                return result;
            };
            let shutdownByVoting_call = async () => {
                let result = await this.call('shutdownByVoting');
                return;
            };
            this.shutdownByVoting = Object.assign(shutdownByVoting_send, {
                call: shutdownByVoting_call
            });
            let takeOwnership_send = async () => {
                let result = await this.send('takeOwnership');
                return result;
            };
            let takeOwnership_call = async () => {
                let result = await this.call('takeOwnership');
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner) => {
                let result = await this.send('transferOwnership', [newOwner]);
                return result;
            };
            let transferOwnership_call = async (newOwner) => {
                let result = await this.call('transferOwnership', [newOwner]);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let unlockGeneralTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), this.wallet.utils.toString(params.nonce)];
            let unlockGeneralTroll_send = async (params) => {
                let result = await this.send('unlockGeneralTroll', unlockGeneralTrollParams(params));
                return result;
            };
            let unlockGeneralTroll_call = async (params) => {
                let result = await this.call('unlockGeneralTroll', unlockGeneralTrollParams(params));
                return;
            };
            this.unlockGeneralTroll = Object.assign(unlockGeneralTroll_send, {
                call: unlockGeneralTroll_call
            });
            let unlockSuperTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), params.unlock, params.vaultRegistry, this.wallet.utils.toString(params.penalty), this.wallet.utils.toString(params.nonce)];
            let unlockSuperTroll_send = async (params) => {
                let result = await this.send('unlockSuperTroll', unlockSuperTrollParams(params));
                return result;
            };
            let unlockSuperTroll_call = async (params) => {
                let result = await this.call('unlockSuperTroll', unlockSuperTrollParams(params));
                return;
            };
            this.unlockSuperTroll = Object.assign(unlockSuperTroll_send, {
                call: unlockSuperTroll_call
            });
            let updateConfigStore_send = async () => {
                let result = await this.send('updateConfigStore');
                return result;
            };
            let updateConfigStore_call = async () => {
                let result = await this.call('updateConfigStore');
                return;
            };
            this.updateConfigStore = Object.assign(updateConfigStore_send, {
                call: updateConfigStore_call
            });
            let updateTrollParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.toString(params.trollProfileIndex), params.newTroll, this.wallet.utils.toString(params.nonce)];
            let updateTroll_send = async (params) => {
                let result = await this.send('updateTroll', updateTrollParams(params));
                return result;
            };
            let updateTroll_call = async (params) => {
                let result = await this.call('updateTroll', updateTrollParams(params));
                return;
            };
            this.updateTroll = Object.assign(updateTroll_send, {
                call: updateTroll_call
            });
            let upgrade_send = async (trollRegistry) => {
                let result = await this.send('upgrade', [trollRegistry]);
                return result;
            };
            let upgrade_call = async (trollRegistry) => {
                let result = await this.call('upgrade', [trollRegistry]);
                return;
            };
            this.upgrade = Object.assign(upgrade_send, {
                call: upgrade_call
            });
            let upgradeByAdmin_send = async (trollRegistry) => {
                let result = await this.send('upgradeByAdmin', [trollRegistry]);
                return result;
            };
            let upgradeByAdmin_call = async (trollRegistry) => {
                let result = await this.call('upgradeByAdmin', [trollRegistry]);
                return;
            };
            this.upgradeByAdmin = Object.assign(upgradeByAdmin_send, {
                call: upgradeByAdmin_call
            });
            let verifySignaturesParams = (params) => [params.msgSender, this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.stringToBytes32(params.paramsHash), this.wallet.utils.toString(params.nonce)];
            let verifySignatures_send = async (params) => {
                let result = await this.send('verifySignatures', verifySignaturesParams(params));
                return result;
            };
            let verifySignatures_call = async (params) => {
                let result = await this.call('verifySignatures', verifySignaturesParams(params));
                return;
            };
            this.verifySignatures = Object.assign(verifySignatures_send, {
                call: verifySignatures_call
            });
        }
    }
    exports.OSWAP_SideChainTrollRegistry = OSWAP_SideChainTrollRegistry;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainVotingExecutor.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainVotingExecutor.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract OSWAP_SideChainTrollRegistry", "name": "_trollRegistry", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32[]", "name": "params", "type": "bytes32[]" }], "name": "Execute", "type": "event" },
            { "inputs": [], "name": "configStore", "outputs": [{ "internalType": "contract OSWAP_ConfigStore", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes[]", "name": "signatures", "type": "bytes[]" }, { "internalType": "bytes32[]", "name": "params", "type": "bytes32[]" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }], "name": "execute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32[]", "name": "params", "type": "bytes32[]" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }], "name": "executeHash", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "govToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "trollRegistry", "outputs": [{ "internalType": "contract OSWAP_SideChainTrollRegistry", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60c060405234801561001057600080fd5b50604051610ebe380380610ebe83398101604081905261002f91610169565b806001600160a01b031660a0816001600160a01b031660601b81525050806001600160a01b0316639d69dc4e6040518163ffffffff1660e01b815260040160206040518083038186803b15801561008557600080fd5b505afa158015610099573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100bd9190610169565b6000806101000a8154816001600160a01b0302191690836001600160a01b03160217905550806001600160a01b03166305268cff6040518163ffffffff1660e01b815260040160206040518083038186803b15801561011b57600080fd5b505afa15801561012f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101539190610169565b60601b6001600160601b031916608052506101a5565b60006020828403121561017b57600080fd5b81516101868161018d565b9392505050565b6001600160a01b03811681146101a257600080fd5b50565b60805160601c60a05160601c610ccd6101f16000396000818160c20152818161026a0152818161032c015281816103db0152818161058101526107980152600060710152610ccd6000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80639d69dc4e116100505780639d69dc4e146100e4578063b2286ef014610104578063c0c888501461012557600080fd5b806305268cff1461006c57806330167bec146100bd575b600080fd5b6100937f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100937f000000000000000000000000000000000000000000000000000000000000000081565b6000546100939073ffffffffffffffffffffffffffffffffffffffff1681565b610117610112366004610989565b61013a565b6040519081526020016100b4565b6101386101333660046109d5565b610178565b005b60405160009046906101589082903090889088908890602001610a92565b604051602081830303815290604052805190602001209150509392505050565b816101e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f496e76616c696420706172616d73206c656e677468000000000000000000000060448201526064015b60405180910390fd5b7fb98f16f9e16a613740729e6e1b35730f7ca1456ba20bff88685e53e1881bec908383604051610215929190610c13565b60405180910390a1600061022a84848461013a565b6040517f099828de00000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063099828de906102a79033908a908a9087908990600401610b11565b600060405180830381600087803b1580156102c157600080fd5b505af11580156102d5573d6000803e3d6000fd5b505050506000848460008181106102ee576102ee610c68565b6020029190910135915050600184141561044657807f73687574646f776e00000000000000000000000000000000000000000000000014156103b1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b86241276040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561039257600080fd5b505af11580156103a6573d6000803e3d6000fd5b505050505050610936565b807f726573756d6500000000000000000000000000000000000000000000000000001415610441577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663046f7da26040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561039257600080fd5b6108d4565b60008585600181811061045b5761045b610c68565b602002919091013591505060028514156105ca57817f75706772616465436f6e66696753746f726500000000000000000000000000001415610527576000546040517f0900f010000000000000000000000000000000000000000000000000000000008152606083901c600482015273ffffffffffffffffffffffffffffffffffffffff90911690630900f010906024015b600060405180830381600087803b15801561050757600080fd5b505af115801561051b573d6000803e3d6000fd5b50505050505050610936565b817f7570677261646554726f6c6c526567697374727900000000000000000000000014156105c5576040517f0900f010000000000000000000000000000000000000000000000000000000008152606082901c60048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630900f010906024016104ed565b6108d2565b6000868660028181106105df576105df610c68565b602002919091013591505060038614156107e157827f736574436f6e666967000000000000000000000000000000000000000000000014156106b0576000546040517fd1fd27b3000000000000000000000000000000000000000000000000000000008152600481018490526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063d1fd27b3906044015b600060405180830381600087803b15801561068f57600080fd5b505af11580156106a3573d6000803e3d6000fd5b5050505050505050610936565b827f736574436f6e66696741646472657373000000000000000000000000000000001415610736576000546040517f9db57e1f000000000000000000000000000000000000000000000000000000008152600481018490526024810183905273ffffffffffffffffffffffffffffffffffffffff90911690639db57e1f90604401610675565b827f736574566f74696e674578656375746f7200000000000000000000000000000014156107dc576040517f788ddbcb000000000000000000000000000000000000000000000000000000008152606083901c600482015281151560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063788ddbcb90604401610675565b6108d0565b6000878760038181106107f6576107f6610c68565b602002919091013591505060048714156108ce57837f736574436f6e666967320000000000000000000000000000000000000000000014156108ce576000546040517fdf9321a500000000000000000000000000000000000000000000000000000000815260048101859052602481018490526044810183905273ffffffffffffffffffffffffffffffffffffffff9091169063df9321a590606401600060405180830381600087803b1580156108ac57600080fd5b505af11580156108c0573d6000803e3d6000fd5b505050505050505050610936565b505b505b505b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f496e76616c696420706172616d6574657273000000000000000000000000000060448201526064016101db565b5050505050565b60008083601f84011261094f57600080fd5b50813567ffffffffffffffff81111561096757600080fd5b6020830191508360208260051b850101111561098257600080fd5b9250929050565b60008060006040848603121561099e57600080fd5b833567ffffffffffffffff8111156109b557600080fd5b6109c18682870161093d565b909790965060209590950135949350505050565b6000806000806000606086880312156109ed57600080fd5b853567ffffffffffffffff80821115610a0557600080fd5b610a1189838a0161093d565b90975095506020880135915080821115610a2a57600080fd5b50610a378882890161093d565b96999598509660400135949350505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b8581527fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008560601b16602082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff841115610aef57600080fd5b8360051b80866034850137603492019182019290925260540195945050505050565b60006080820173ffffffffffffffffffffffffffffffffffffffff8816835260206080818501528187835260a08501905060a08860051b86010192508860005b89811015610bfb577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6087860301835281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18c3603018112610bb257600080fd5b8b01803567ffffffffffffffff811115610bcb57600080fd5b8036038d1315610bda57600080fd5b610be78782888501610a49565b965050509183019190830190600101610b51565b50505050604083019490945250606001529392505050565b6020815281602082015260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff831115610c4c57600080fd5b8260051b80856040850137600092016040019182525092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220fe94d8ded78a6b0199aedb225cfa5b9f25efe6b9707a9a73d9dd33d182169f2a64736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainVotingExecutor.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainVotingExecutor.json.ts"], function (require, exports, eth_contract_18, OSWAP_SideChainVotingExecutor_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_SideChainVotingExecutor = void 0;
    class OSWAP_SideChainVotingExecutor extends eth_contract_18.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_SideChainVotingExecutor_json_1.default.abi, OSWAP_SideChainVotingExecutor_json_1.default.bytecode);
            this.assign();
        }
        deploy(trollRegistry) {
            return this.__deploy([trollRegistry]);
        }
        parseExecuteEvent(receipt) {
            return this.parseEvents(receipt, "Execute").map(e => this.decodeExecuteEvent(e));
        }
        decodeExecuteEvent(event) {
            let result = event.data;
            return {
                params: result.params,
                _event: event
            };
        }
        assign() {
            let configStore_call = async () => {
                let result = await this.call('configStore');
                return result;
            };
            this.configStore = configStore_call;
            let executeHashParams = (params) => [this.wallet.utils.stringToBytes32(params.params), this.wallet.utils.toString(params.nonce)];
            let executeHash_call = async (params) => {
                let result = await this.call('executeHash', executeHashParams(params));
                return result;
            };
            this.executeHash = executeHash_call;
            let govToken_call = async () => {
                let result = await this.call('govToken');
                return result;
            };
            this.govToken = govToken_call;
            let trollRegistry_call = async () => {
                let result = await this.call('trollRegistry');
                return result;
            };
            this.trollRegistry = trollRegistry_call;
            let executeParams = (params) => [this.wallet.utils.stringToBytes(params.signatures), this.wallet.utils.stringToBytes32(params.params), this.wallet.utils.toString(params.nonce)];
            let execute_send = async (params) => {
                let result = await this.send('execute', executeParams(params));
                return result;
            };
            let execute_call = async (params) => {
                let result = await this.call('execute', executeParams(params));
                return;
            };
            this.execute = Object.assign(execute_send, {
                call: execute_call
            });
        }
    }
    exports.OSWAP_SideChainVotingExecutor = OSWAP_SideChainVotingExecutor;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingContract.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingContract.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "components": [{ "internalType": "contract OSWAP_MainChainVotingExecutor", "name": "executor", "type": "address" }, { "internalType": "uint256", "name": "id", "type": "uint256" }, { "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "internalType": "bytes32[]", "name": "options", "type": "bytes32[]" }, { "internalType": "uint256", "name": "quorum", "type": "uint256" }, { "internalType": "uint256", "name": "threshold", "type": "uint256" }, { "internalType": "uint256", "name": "voteEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "executeDelay", "type": "uint256" }, { "internalType": "bytes32[]", "name": "executeParam", "type": "bytes32[]" }], "internalType": "struct OSWAP_VotingContract.Params", "name": "params", "type": "tuple" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "accountVoteOption", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "accountVoteWeight", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "allExecuteParam", "outputs": [{ "internalType": "bytes32[]", "name": "", "type": "bytes32[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "allOptions", "outputs": [{ "internalType": "bytes32[]", "name": "", "type": "bytes32[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "allOptionsWeight", "outputs": [{ "internalType": "uint256[]", "name": "", "type": "uint256[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "execute", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "executeDelay", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "executeParam", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "executeParamLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "executed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "executor", "outputs": [{ "internalType": "contract OSWAP_MainChainVotingExecutor", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "getParams", "outputs": [{ "internalType": "address", "name": "executor_", "type": "address" }, { "internalType": "uint256", "name": "id_", "type": "uint256" }, { "internalType": "bytes32", "name": "name_", "type": "bytes32" }, { "internalType": "bytes32[]", "name": "options_", "type": "bytes32[]" }, { "internalType": "uint256", "name": "voteStartTime_", "type": "uint256" }, { "internalType": "uint256", "name": "voteEndTime_", "type": "uint256" }, { "internalType": "uint256", "name": "executeDelay_", "type": "uint256" }, { "internalType": "bool[2]", "name": "status_", "type": "bool[2]" }, { "internalType": "uint256[]", "name": "optionsWeight_", "type": "uint256[]" }, { "internalType": "uint256[3]", "name": "quorum_", "type": "uint256[3]" }, { "internalType": "bytes32[]", "name": "executeParam_", "type": "bytes32[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "id", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "name", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "options", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "optionsLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "optionsWeight", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "quorum", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "threshold", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalVoteWeight", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "totalWeight", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "trollRegistry", "outputs": [{ "internalType": "contract OSWAP_MainChainTrollRegistry", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "updateWeight", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "veto", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "vetoed", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "option", "type": "uint256" }], "name": "vote", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "voteEndTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "voteStartTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "votingManager", "outputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "6101c06040523480156200001257600080fd5b506040516200252c3803806200252c8339810160408190526200003591620006ea565b6000336001600160a01b03166330167bec6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200007157600080fd5b505afa15801562000086573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ac9190620006ca565b90506000336001600160a01b031663da1bcdf06040518163ffffffff1660e01b815260040160206040518083038186803b158015620000ea57600080fd5b505afa158015620000ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001259190620006ca565b6001600160601b0319606082811b821660a05284901b1660805260c0840151909150421115620001a85760405162461bcd60e51b8152602060048201526024808201527f566f74696e67436f6e74726163743a20566f74696e6720616c726561647920656044820152631b99195960e21b60648201526084015b60405180910390fd5b61010083015151156200040857825160405163a3818b3b60e01b81526001600160a01b0391821660048201529082169063a3818b3b9060240160206040518083038186803b158015620001fa57600080fd5b505afa1580156200020f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023591906200069f565b620002835760405162461bcd60e51b815260206004820181905260248201527f566f74696e67436f6e74726163743a20496e76616c6964206578656375746f7260448201526064016200019f565b8260600151516002148015620002bd57508260600151600081518110620002ae57620002ae6200081f565b6020026020010151605960f81b145b8015620002ee57508260600151600181518110620002df57620002df6200081f565b6020026020010151602760f91b145b6200033c5760405162461bcd60e51b815260206004820152601f60248201527f566f74696e67436f6e74726163743a20496e76616c6964206f7074696f6e730060448201526064016200019f565b670de0b6b3a76400008360a001511115620003a45760405162461bcd60e51b815260206004820152602160248201527f566f74696e67436f6e74726163743a20496e76616c6964207468726573686f6c6044820152601960fa1b60648201526084016200019f565b60008360e0015111620004085760405162461bcd60e51b815260206004820152602560248201527f566f74696e67436f6e74726163743a20496e76616c696420657865637574652060448201526464656c617960d81b60648201526084016200019f565b82600001516001600160a01b031660c0816001600160a01b031660601b81525050816001600160a01b0316638b0e9f3f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200046357600080fd5b505afa15801562000478573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200049e9190620007d9565b60065560208084015160e05260408401516101005260608401518051620004ca9260009201906200057c565b5060808301516101205260a0830151610140526060830151516001600160401b03811115620004fd57620004fd62000835565b60405190808252806020026020018201604052801562000527578160200160208202803683370190505b5080516200053e916004916020909101906200057c565b50426101605260c08301516101805260e08301516101a052610100830151805162000572916007916020909101906200057c565b5050505062000864565b828054828255906000526020600020908101928215620005ba579160200282015b82811115620005ba5782518255916020019190600101906200059d565b50620005c8929150620005cc565b5090565b5b80821115620005c85760008155600101620005cd565b600082601f830112620005f557600080fd5b815160206001600160401b038083111562000614576200061462000835565b8260051b604051601f19603f830116810181811084821117156200063c576200063c62000835565b604052848152838101925086840182880185018910156200065c57600080fd5b600092505b858310156200068157805184529284019260019290920191840162000661565b50979650505050505050565b80516200069a816200084b565b919050565b600060208284031215620006b257600080fd5b81518015158114620006c357600080fd5b9392505050565b600060208284031215620006dd57600080fd5b8151620006c3816200084b565b600060208284031215620006fd57600080fd5b81516001600160401b03808211156200071557600080fd5b9083019061012082860312156200072b57600080fd5b62000735620007f3565b62000740836200068d565b815260208301516020820152604083015160408201526060830151828111156200076957600080fd5b6200077787828601620005e3565b6060830152506080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015183811115620007ba57600080fd5b620007c888828701620005e3565b918301919091525095945050505050565b600060208284031215620007ec57600080fd5b5051919050565b60405161012081016001600160401b038111828210171562000819576200081962000835565b60405290565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200086157600080fd5b50565b60805160601c60a05160601c60c05160601c60e05161010051610120516101405161016051610180516101a051611ba962000983600039600081816103a801528181610f0701526110340152600081816103d8015281816104da01528181610ad001528181610ee501526110550152600081816102620152610ec301526000818161034501528181610e1a01526113f401526000818161022801528181610df701526112c30152600081816101ee0152610e9f0152600081816103ff0152610e7d01526000818161044101528181610e5b015261154601526000818161047001528181610762015281816115b001526116ae0152600081816102c90152818161088901528181610a2a01528181610b620152610cc70152611ba96000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c8063876cdb2f11610104578063c55dd801116100a2578063ede20b4611610071578063ede20b46146104a3578063ef9b78c6146104b5578063f3c49550146104bd578063f830f09c146104d057600080fd5b8063c55dd80114610463578063da1bcdf01461046b578063da918d7a14610492578063e5188f551461049a57600080fd5b8063af640d0f116100de578063af640d0f146103fa578063b3ee6e4014610421578063bd81b9a614610429578063c34c08e51461043c57600080fd5b8063876cdb2f146103a357806396c82e57146103ca5780639e6cb42b146103d357600080fd5b806330167bec1161017157806342cde4e81161014b57806342cde4e81461034057806358c0dc1d146103675780635e615a6b1461037c578063614619541461039b57600080fd5b806330167bec146102c457806331a38c8914610310578063409e22051461032d57600080fd5b806317e42ec0116101ad57806317e42ec01461024a57806318024acc1461025d5780632376a29a14610284578063281a9bdf146102a457600080fd5b80630121b93f146101d457806306fdde03146101e95780631703a01814610223575b600080fd5b6101e76101e23660046118fb565b6104d8565b005b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6101e76102583660046118be565b610ace565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6102106102923660046118be565b60036020526000908152604090205481565b6102106102b23660046118be565b60026020526000908152604090205481565b6102eb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161021a565b60015461031d9060ff1681565b604051901515815260200161021a565b61021061033b3660046118fb565b610d2e565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b61036f610d4f565b60405161021a9190611a4f565b610384610da7565b60405161021a9b9a9998979695949392919061198b565b6101e761102f565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b61021060065481565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b600754610210565b6102106104373660046118fb565b611630565b6102eb7f000000000000000000000000000000000000000000000000000000000000000081565b600054610210565b6102eb7f000000000000000000000000000000000000000000000000000000000000000081565b61036f611640565b61021060055481565b60015461031d90610100900460ff1681565b6101e7611696565b6102106104cb3660046118fb565b61181c565b61036f61182c565b7f000000000000000000000000000000000000000000000000000000000000000042111561058d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f566f74696e67436f6e74726163743a20566f746520616c726561647920656e6460448201527f656400000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600154610100900460ff1615610625576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792076657460448201527f6f656400000000000000000000000000000000000000000000000000000000006064820152608401610584565b60015460ff16156106b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792065786560448201527f63757465640000000000000000000000000000000000000000000000000000006064820152608401610584565b6000548110610723576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f566f74696e67436f6e74726163743a20496e76616c6964206f7074696f6e00006044820152606401610584565b6007546040517f65eaf8bc00000000000000000000000000000000000000000000000000000000815290156004820152336024820152604481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906365eaf8bc90606401600060405180830381600087803b1580156107bb57600080fd5b505af11580156107cf573d6000803e3d6000fd5b50503360009081526003602052604090205491505080156108585733600090815260026020526040902054600480548391908390811061081157610811611b44565b90600052602060002001546108269190611afe565b6004828154811061083957610839611b44565b600091825260209091200155600554610853908390611afe565b600555505b6040517f426233600000000000000000000000000000000000000000000000000000000081523360048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063426233609060240160206040518083038186803b1580156108e057600080fd5b505afa1580156108f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109189190611914565b9050600081116109aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f566f74696e67436f6e74726163743a204e6f74207374616b656420746f20766f60448201527f74650000000000000000000000000000000000000000000000000000000000006064820152608401610584565b3360009081526002602090815260408083208690556003909152902081905560048054829190859081106109e0576109e0611b44565b90600052602060002001546109f59190611aa9565b60048481548110610a0857610a08611b44565b600091825260209091200155600554610a22908290611aa9565b6005819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638b0e9f3f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8e57600080fd5b505afa158015610aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac69190611914565b600655505050565b7f00000000000000000000000000000000000000000000000000000000000000004211158015610b065750600154610100900460ff16155b8015610b15575060015460ff16155b15610d2b576040517f4262336000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063426233609060240160206040518083038186803b158015610ba657600080fd5b505afa158015610bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bde9190611914565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260409020549091508015801590610c165750818114155b15610cc55773ffffffffffffffffffffffffffffffffffffffff83166000908152600260209081526040808320546003909252909120839055600480548491849184908110610c6757610c67611b44565b9060005260206000200154610c7c9190611afe565b610c869190611aa9565b60048281548110610c9957610c99611b44565b90600052602060002001819055508282600554610cb69190611afe565b610cc09190611aa9565b600555505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638b0e9f3f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8e57600080fd5b50565b60008181548110610d3e57600080fd5b600091825260209091200154905081565b60606007805480602002602001604051908101604052809291908181526020018280548015610d9d57602002820191906000526020600020905b815481526020019060010190808311610d89575b5050505050905090565b600080600060606000806000610dbb611882565b6060610dc56118a0565b60408051808201825260015460ff808216151583526101009091041615156020808301919091528251606081810185527f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000082840152600654828601526000805486518186028101860190975280875291957f0000000000000000000000000000000000000000000000000000000000000000957f0000000000000000000000000000000000000000000000000000000000000000957f00000000000000000000000000000000000000000000000000000000000000009593947f0000000000000000000000000000000000000000000000000000000000000000947f0000000000000000000000000000000000000000000000000000000000000000947f00000000000000000000000000000000000000000000000000000000000000009493600493600792918a9190830182828015610f6157602002820191906000526020600020905b815481526020019060010190808311610f4d575b5050505050975082805480602002602001604051908101604052809291908181526020018280548015610fb357602002820191906000526020600020905b815481526020019060010190808311610f9f575b505050505092508080548060200260200160405190810160405280929190818152602001828054801561100557602002820191906000526020600020905b815481526020019060010190808311610ff1575b505050505090509a509a509a509a509a509a509a509a509a509a509a50909192939495969798999a565b6110797f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aa9565b4211611107576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f566f74696e67436f6e74726163743a20457865637574652064656c6179206e6f60448201527f74207061737420796574000000000000000000000000000000000000000000006064820152608401610584565b600154610100900460ff161561119f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792076657460448201527f6f656400000000000000000000000000000000000000000000000000000000006064820152608401610584565b60015460ff1615611232576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792065786560448201527f63757465640000000000000000000000000000000000000000000000000000006064820152608401610584565b6007546112c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f566f74696e67436f6e74726163743a204578656375746520706172616d206e6f60448201527f7420646566696e656400000000000000000000000000000000000000000000006064820152608401610584565b7f0000000000000000000000000000000000000000000000000000000000000000600554101561134d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f566f74696e67436f6e74726163743a2051756f72756d206e6f74206d657400006044820152606401610584565b600460018154811061136157611361611b44565b9060005260206000200154600460008154811061138057611380611b44565b9060005260206000200154116113f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f566f74696e67436f6e74726163743a204d616a6f72697479206e6f74206d65746044820152606401610584565b7f00000000000000000000000000000000000000000000000000000000000000006005546114209190611ac1565b670de0b6b3a7640000600460008154811061143d5761143d611b44565b90600052602060002001546114529190611ac1565b116114df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f566f74696e67436f6e74726163743a205468726573686f6c64206e6f74206d6560448201527f74000000000000000000000000000000000000000000000000000000000000006064820152608401610584565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016811790556040517f8af7c64900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690638af7c6499061157c90600790600401611a62565b600060405180830381600087803b15801561159657600080fd5b505af11580156115aa573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166331a38c896040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561161657600080fd5b505af115801561162a573d6000803e3d6000fd5b50505050565b60078181548110610d3e57600080fd5b60606000805480602002602001604051908101604052809291908181526020018280548015610d9d5760200282019190600052602060002090815481526020019060010190808311610d89575050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461175b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4f535741505f566f74696e67436f6e74726163743a204e6f742066726f6d204760448201527f6f7665726e616e636500000000000000000000000000000000000000000000006064820152608401610584565b60015460ff16156117ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f535741505f566f74696e67436f6e74726163743a20416c726561647920657860448201527f65637574656400000000000000000000000000000000000000000000000000006064820152608401610584565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b60048181548110610d3e57600080fd5b60606004805480602002602001604051908101604052809291908181526020018280548015610d9d5760200282019190600052602060002090815481526020019060010190808311610d89575050505050905090565b60405180604001604052806002906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b6000602082840312156118d057600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146118f457600080fd5b9392505050565b60006020828403121561190d57600080fd5b5035919050565b60006020828403121561192657600080fd5b5051919050565b600081518084526020808501945080840160005b8381101561195d57815187529582019590820190600101611941565b509495945050505050565b8060005b600381101561162a57815184526020938401939091019060010161196c565b60006101c073ffffffffffffffffffffffffffffffffffffffff8e16835260208d818501528c60408501528160608501526119c88285018d61192d565b91508a60808501528960a08501528860c085015260e084018860005b6002811015611a035781511515835291830191908301906001016119e4565b50505050828103610120840152611a1a818761192d565b9050611a2a610140840186611968565b8281036101a0840152611a3d818561192d565b9e9d5050505050505050505050505050565b6020815260006118f4602083018461192d565b6020808252825482820181905260008481528281209092916040850190845b81811015611a9d57835483526001938401939285019201611a81565b50909695505050505050565b60008219821115611abc57611abc611b15565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611af957611af9611b15565b500290565b600082821015611b1057611b10611b15565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220fb893253c0838414dd893d5fa2f15a58c12b422ae36a85f01367b3942041db0b64736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingContract.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingContract.json.ts"], function (require, exports, eth_contract_19, OSWAP_VotingContract_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_VotingContract = void 0;
    class OSWAP_VotingContract extends eth_contract_19.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_VotingContract_json_1.default.abi, OSWAP_VotingContract_json_1.default.bytecode);
            this.assign();
        }
        deploy(params) {
            return this.__deploy([[params.executor, this.wallet.utils.toString(params.id), this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.options), this.wallet.utils.toString(params.quorum), this.wallet.utils.toString(params.threshold), this.wallet.utils.toString(params.voteEndTime), this.wallet.utils.toString(params.executeDelay), this.wallet.utils.stringToBytes32(params.executeParam)]]);
        }
        assign() {
            let accountVoteOption_call = async (param1) => {
                let result = await this.call('accountVoteOption', [param1]);
                return new eth_contract_19.BigNumber(result);
            };
            this.accountVoteOption = accountVoteOption_call;
            let accountVoteWeight_call = async (param1) => {
                let result = await this.call('accountVoteWeight', [param1]);
                return new eth_contract_19.BigNumber(result);
            };
            this.accountVoteWeight = accountVoteWeight_call;
            let allExecuteParam_call = async () => {
                let result = await this.call('allExecuteParam');
                return result;
            };
            this.allExecuteParam = allExecuteParam_call;
            let allOptions_call = async () => {
                let result = await this.call('allOptions');
                return result;
            };
            this.allOptions = allOptions_call;
            let allOptionsWeight_call = async () => {
                let result = await this.call('allOptionsWeight');
                return result.map(e => new eth_contract_19.BigNumber(e));
            };
            this.allOptionsWeight = allOptionsWeight_call;
            let executeDelay_call = async () => {
                let result = await this.call('executeDelay');
                return new eth_contract_19.BigNumber(result);
            };
            this.executeDelay = executeDelay_call;
            let executeParam_call = async (param1) => {
                let result = await this.call('executeParam', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.executeParam = executeParam_call;
            let executeParamLength_call = async () => {
                let result = await this.call('executeParamLength');
                return new eth_contract_19.BigNumber(result);
            };
            this.executeParamLength = executeParamLength_call;
            let executed_call = async () => {
                let result = await this.call('executed');
                return result;
            };
            this.executed = executed_call;
            let executor_call = async () => {
                let result = await this.call('executor');
                return result;
            };
            this.executor = executor_call;
            let getParams_call = async () => {
                let result = await this.call('getParams');
                return {
                    executor_: result.executor_,
                    id_: new eth_contract_19.BigNumber(result.id_),
                    name_: result.name_,
                    options_: result.options_,
                    voteStartTime_: new eth_contract_19.BigNumber(result.voteStartTime_),
                    voteEndTime_: new eth_contract_19.BigNumber(result.voteEndTime_),
                    executeDelay_: new eth_contract_19.BigNumber(result.executeDelay_),
                    status_: result.status_,
                    optionsWeight_: result.optionsWeight_.map(e => new eth_contract_19.BigNumber(e)),
                    quorum_: result.quorum_.map(e => new eth_contract_19.BigNumber(e)),
                    executeParam_: result.executeParam_
                };
            };
            this.getParams = getParams_call;
            let id_call = async () => {
                let result = await this.call('id');
                return new eth_contract_19.BigNumber(result);
            };
            this.id = id_call;
            let name_call = async () => {
                let result = await this.call('name');
                return result;
            };
            this.name = name_call;
            let options_call = async (param1) => {
                let result = await this.call('options', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.options = options_call;
            let optionsLength_call = async () => {
                let result = await this.call('optionsLength');
                return new eth_contract_19.BigNumber(result);
            };
            this.optionsLength = optionsLength_call;
            let optionsWeight_call = async (param1) => {
                let result = await this.call('optionsWeight', [this.wallet.utils.toString(param1)]);
                return new eth_contract_19.BigNumber(result);
            };
            this.optionsWeight = optionsWeight_call;
            let quorum_call = async () => {
                let result = await this.call('quorum');
                return new eth_contract_19.BigNumber(result);
            };
            this.quorum = quorum_call;
            let threshold_call = async () => {
                let result = await this.call('threshold');
                return new eth_contract_19.BigNumber(result);
            };
            this.threshold = threshold_call;
            let totalVoteWeight_call = async () => {
                let result = await this.call('totalVoteWeight');
                return new eth_contract_19.BigNumber(result);
            };
            this.totalVoteWeight = totalVoteWeight_call;
            let totalWeight_call = async () => {
                let result = await this.call('totalWeight');
                return new eth_contract_19.BigNumber(result);
            };
            this.totalWeight = totalWeight_call;
            let trollRegistry_call = async () => {
                let result = await this.call('trollRegistry');
                return result;
            };
            this.trollRegistry = trollRegistry_call;
            let vetoed_call = async () => {
                let result = await this.call('vetoed');
                return result;
            };
            this.vetoed = vetoed_call;
            let voteEndTime_call = async () => {
                let result = await this.call('voteEndTime');
                return new eth_contract_19.BigNumber(result);
            };
            this.voteEndTime = voteEndTime_call;
            let voteStartTime_call = async () => {
                let result = await this.call('voteStartTime');
                return new eth_contract_19.BigNumber(result);
            };
            this.voteStartTime = voteStartTime_call;
            let votingManager_call = async () => {
                let result = await this.call('votingManager');
                return result;
            };
            this.votingManager = votingManager_call;
            let execute_send = async () => {
                let result = await this.send('execute');
                return result;
            };
            let execute_call = async () => {
                let result = await this.call('execute');
                return;
            };
            this.execute = Object.assign(execute_send, {
                call: execute_call
            });
            let updateWeight_send = async (account) => {
                let result = await this.send('updateWeight', [account]);
                return result;
            };
            let updateWeight_call = async (account) => {
                let result = await this.call('updateWeight', [account]);
                return;
            };
            this.updateWeight = Object.assign(updateWeight_send, {
                call: updateWeight_call
            });
            let veto_send = async () => {
                let result = await this.send('veto');
                return result;
            };
            let veto_call = async () => {
                let result = await this.call('veto');
                return;
            };
            this.veto = Object.assign(veto_send, {
                call: veto_call
            });
            let vote_send = async (option) => {
                let result = await this.send('vote', [this.wallet.utils.toString(option)]);
                return result;
            };
            let vote_call = async (option) => {
                let result = await this.call('vote', [this.wallet.utils.toString(option)]);
                return;
            };
            this.vote = Object.assign(vote_send, {
                call: vote_call
            });
        }
    }
    exports.OSWAP_VotingContract = OSWAP_VotingContract;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingManager.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingManager.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract OSWAP_MainChainTrollRegistry", "name": "_trollRegistry", "type": "address" }, { "internalType": "bytes32[]", "name": "_names", "type": "bytes32[]" }, { "internalType": "uint256[]", "name": "_minExeDelay", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "_minVoteDuration", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "_maxVoteDuration", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "_minGovTokenToCreateVote", "type": "uint256[]" }, { "internalType": "uint256[]", "name": "_minQuorum", "type": "uint256[]" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "indexed": false, "internalType": "uint256", "name": "minExeDelay", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "minVoteDuration", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "maxVoteDuration", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "minGovTokenToCreateVote", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "minQuorum", "type": "uint256" }], "name": "AddVotingConfig", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Authorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "Deauthorize", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "vote", "type": "address" }], "name": "Executed", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "poll", "type": "address" }], "name": "NewPoll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "vote", "type": "address" }], "name": "NewVote", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "value", "type": "bytes32" }], "name": "ParamSet", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "value1", "type": "bytes32" }, { "indexed": false, "internalType": "bytes32", "name": "value2", "type": "bytes32" }], "name": "ParamSet2", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "poll", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "option", "type": "uint256" }], "name": "Poll", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "bytes32", "name": "configName", "type": "bytes32" }, { "indexed": true, "internalType": "bytes32", "name": "paramName", "type": "bytes32" }, { "indexed": false, "internalType": "uint256", "name": "minExeDelay", "type": "uint256" }], "name": "SetVotingConfig", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "StartOwnershipTransfer", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "address", "name": "user", "type": "address" }], "name": "TransferOwnership", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "contract OSWAP_VotingManager", "name": "newVotingManager", "type": "address" }], "name": "Upgrade", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "vote", "type": "address" }], "name": "Veto", "type": "event" },
            { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "account", "type": "address" }, { "indexed": true, "internalType": "address", "name": "vote", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "option", "type": "uint256" }], "name": "Vote", "type": "event" },
            { "inputs": [{ "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "internalType": "uint256", "name": "minExeDelay", "type": "uint256" }, { "internalType": "uint256", "name": "minVoteDuration", "type": "uint256" }, { "internalType": "uint256", "name": "maxVoteDuration", "type": "uint256" }, { "internalType": "uint256", "name": "minGovTokenToCreateVote", "type": "uint256" }, { "internalType": "uint256", "name": "minQuorum", "type": "uint256" }], "name": "addVotingConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "admin", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "allVotings", "outputs": [{ "internalType": "address[]", "name": "", "type": "address[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "vote", "type": "address" }], "name": "closeVote", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "deny", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "executed", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "getNewVoteId", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "length", "type": "uint256" }], "name": "getVotingConfigProfiles", "outputs": [{ "internalType": "bytes32[]", "name": "profiles", "type": "bytes32[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "getVotingCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "name", "type": "bytes32" }], "name": "getVotingParams", "outputs": [{ "internalType": "uint256", "name": "_minExeDelay", "type": "uint256" }, { "internalType": "uint256", "name": "_minVoteDuration", "type": "uint256" }, { "internalType": "uint256", "name": "_maxVoteDuration", "type": "uint256" }, { "internalType": "uint256", "name": "_minGovTokenToCreateVote", "type": "uint256" }, { "internalType": "uint256", "name": "_minQuorum", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "start", "type": "uint256" }, { "internalType": "uint256", "name": "count", "type": "uint256" }], "name": "getVotings", "outputs": [{ "internalType": "address[]", "name": "_votings", "type": "address[]" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "govToken", "outputs": [{ "internalType": "contract IERC20", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_admin", "type": "address" }], "name": "initAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address[]", "name": "_votingExecutor", "type": "address[]" }], "name": "initVotingExecutor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isPermitted", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "votingContract", "type": "address" }], "name": "isVotingContract", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "isVotingExecutor", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "vote", "type": "address" }, { "internalType": "bool", "name": "isExecutiveVote", "type": "bool" }], "name": "newVote", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "newVotingExecutorManager", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "newVotingManager", "outputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "user", "type": "address" }], "name": "permit", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_admin", "type": "address" }], "name": "setAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "configName", "type": "bytes32" }, { "internalType": "bytes32", "name": "paramName", "type": "bytes32" }, { "internalType": "uint256", "name": "paramValue", "type": "uint256" }], "name": "setVotingConfig", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_votingExecutor", "type": "address" }, { "internalType": "bool", "name": "_bool", "type": "bool" }], "name": "setVotingExecutor", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "_votingRegister", "type": "address" }], "name": "setVotingRegister", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "takeOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "newOwner_", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "trollRegistry", "outputs": [{ "internalType": "contract OSWAP_MainChainTrollRegistry", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "updateWeight", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "_votingManager", "type": "address" }], "name": "upgrade", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "_votingManager", "type": "address" }], "name": "upgradeByAdmin", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "voting", "type": "address" }], "name": "veto", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "voteCount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bool", "name": "poll", "type": "bool" }, { "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "option", "type": "uint256" }], "name": "voted", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "votingConfigProfiles", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "votingConfigProfilesLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "name": "votingConfigs", "outputs": [{ "internalType": "uint256", "name": "minExeDelay", "type": "uint256" }, { "internalType": "uint256", "name": "minVoteDuration", "type": "uint256" }, { "internalType": "uint256", "name": "maxVoteDuration", "type": "uint256" }, { "internalType": "uint256", "name": "minGovTokenToCreateVote", "type": "uint256" }, { "internalType": "uint256", "name": "minQuorum", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "votingExecutor", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "votingExecutorInv", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "votingExecutorLength", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "votingIdx", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "votingRegister", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "name": "votings", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60a06040523480156200001157600080fd5b5060405162003b1d38038062003b1d833981016040819052620000349162000597565b600080546001600160a01b03199081163317909155600380546001600160a01b038a16921682179055604080516305268cff60e01b815290516305268cff91600480820192602092909190829003018186803b1580156200009457600080fd5b505afa158015620000a9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cf919062000570565b60601b6001600160601b03191660805284518651148015620000f2575083518551145b801562000100575082518451145b80156200010e575081518351145b80156200011c575080518251145b6200017a5760405162461bcd60e51b815260206004820152602360248201527f4f535741503a20417267756d656e74206c656e67746873206e6f74206d6174636044820152621a195960ea1b60648201526084015b60405180910390fd5b60005b8651811015620004a65760008682815181106200019e576200019e620006dd565b6020026020010151118015620001d3575062093a80868281518110620001c857620001c8620006dd565b602002602001015111155b620002215760405162461bcd60e51b815260206004820152601a60248201527f4f535741503a20496e76616c6964206d696e45786544656c6179000000000000604482015260640162000171565b838181518110620002365762000236620006dd565b6020026020010151858281518110620002535762000253620006dd565b602002602001015110801562000288575062093a808582815181106200027d576200027d620006dd565b602002602001015111155b620002d65760405162461bcd60e51b815260206004820152601e60248201527f4f535741503a20496e76616c6964206d696e566f74654475726174696f6e0000604482015260640162000171565b600060056000898481518110620002f157620002f1620006dd565b6020026020010151815260200190815260200160002090508682815181106200031e576200031e620006dd565b60200260200101518160000181905550858281518110620003435762000343620006dd565b60200260200101518160010181905550848281518110620003685762000368620006dd565b602002602001015181600201819055508382815181106200038d576200038d620006dd565b60200260200101518160030181905550828281518110620003b257620003b2620006dd565b602002602001015181600401819055506006888381518110620003d957620003d9620006dd565b6020908102919091018101518254600181018455600093845291909220015587517f4298cd6fa0bb1aeb8e309c8da40e32f5d5383c757a49341ef32bdcfe4bf0912990899084908110620004315762000431620006dd565b6020026020010151826000015483600101548460020154856003015486600401546040516200048896959493929190958652602086019490945260408501929092526060840152608083015260a082015260c00190565b60405180910390a150806200049d81620006b3565b9150506200017d565b505050505050505062000722565b600082601f830112620004c657600080fd5b815160206001600160401b0380831115620004e557620004e5620006f3565b8260051b604051601f19603f830116810181811084821117156200050d576200050d620006f3565b604052848152838101925086840182880185018910156200052d57600080fd5b600092505b858310156200055257805184529284019260019290920191840162000532565b50979650505050505050565b80516200056b8162000709565b919050565b6000602082840312156200058357600080fd5b8151620005908162000709565b9392505050565b600080600080600080600060e0888a031215620005b357600080fd5b620005be886200055e565b60208901519097506001600160401b0380821115620005dc57600080fd5b620005ea8b838c01620004b4565b975060408a01519150808211156200060157600080fd5b6200060f8b838c01620004b4565b965060608a01519150808211156200062657600080fd5b620006348b838c01620004b4565b955060808a01519150808211156200064b57600080fd5b620006598b838c01620004b4565b945060a08a01519150808211156200067057600080fd5b6200067e8b838c01620004b4565b935060c08a01519150808211156200069557600080fd5b50620006a48a828b01620004b4565b91505092959891949750929550565b6000600019821415620006d657634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200071f57600080fd5b50565b60805160601c6133dc62000741600039600061030901526133dc6000f3fe608060405234801561001057600080fd5b50600436106102ff5760003560e01c806378a1a9fa1161019c578063a8fd327e116100ee578063f2486f4411610097578063f851a44011610071578063f851a44014610719578063ff2a59b014610739578063ffccd8431461074157600080fd5b8063f2486f44146106d3578063f2fde38b146106e6578063f6f04d7f146106f957600080fd5b8063c6384071116100c8578063c638407114610697578063d4ee1d90146106a0578063d9c37086146106c057600080fd5b8063a8fd327e14610629578063b15866e614610666578063c53bc0471461067957600080fd5b806395e5cfa211610150578063a2f55ae51161012a578063a2f55ae5146105e0578063a3818b3b146105f3578063a598d03c1461061657600080fd5b806395e5cfa2146105a55780639c2aab5e146105c55780639c52a7f1146105cd57600080fd5b80638da5cb5b116101815780638da5cb5b1461055257806391927050146105725780639449f0131461058557600080fd5b806378a1a9fa14610537578063821077511461053f57600080fd5b80633fd8cc4e1161025557806365611e4311610209578063704b6c02116101e3578063704b6c02146104d6578063718fbb79146104e9578063788ddbcb1461052457600080fd5b806365611e431461049d57806365eaf8bc146104b05780636a333cee146104c357600080fd5b8063568621751161023a5780635686217514610462578063605361721461048257806362072e761461048a57600080fd5b80633fd8cc4e1461041c57806344fe9eb01461044f57600080fd5b806326ae21a9116102b757806330167bec1161029157806330167bec146103e157806331a38c89146104015780633b32cf421461040957600080fd5b806326ae21a9146103a657806329294e2b146103b957806329711413146103d957600080fd5b80630900f010116102e85780630900f0101461036a578063145988981461037d57806317e42ec01461039357600080fd5b806305268cff1461030457806308c4934d14610355575b600080fd5b61032b7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b610368610363366004612ffe565b610761565b005b610368610378366004612ffe565b610816565b610385610898565b60405190815260200161034c565b6103686103a1366004612ffe565b61095f565b6103686103b4366004612ffe565b610a24565b6103cc6103c73660046131ac565b610b52565b60405161034c91906131ce565b6103cc610c60565b60035461032b9073ffffffffffffffffffffffffffffffffffffffff1681565b610368610ccf565b610368610417366004613057565b610dd9565b61043f61042a366004612ffe565b60026020526000908152604090205460ff1681565b604051901515815260200161034c565b61036861045d366004612ffe565b610ebc565b600e5461032b9073ffffffffffffffffffffffffffffffffffffffff1681565b610368610ee0565b610368610498366004612ffe565b61100a565b6103686104ab366004613150565b6111de565b6103686104be3660046130cc565b61160f565b6103686104d1366004612ffe565b611786565b6103686104e4366004612ffe565b6118e9565b6104fc6104f736600461310b565b611962565b604080519586526020860194909452928401919091526060830152608082015260a00161034c565b610368610532366004613022565b6119f5565b600754610385565b61036861054d366004613022565b611a78565b60005461032b9073ffffffffffffffffffffffffffffffffffffffff1681565b61032b61058036600461310b565b611f7b565b610385610593366004612ffe565b600c6020526000908152604090205481565b6105b86105b33660046131ac565b611fb2565b60405161034c9190613228565b600d54610385565b6103686105db366004612ffe565b61208f565b6103686105ee366004612ffe565b612136565b61043f610601366004612ffe565b60096020526000908152604090205460ff1681565b61032b61062436600461310b565b6121d9565b6104fc61063736600461310b565b600560205260009081526040902080546001820154600283015460038401546004909401549293919290919085565b61043f610674366004612ffe565b6121e9565b600e5473ffffffffffffffffffffffffffffffffffffffff1661032b565b610385600b5481565b60015461032b9073ffffffffffffffffffffffffffffffffffffffff1681565b6103686106ce366004613124565b612250565b6103856106e136600461310b565b6127d9565b6103686106f4366004612ffe565b6127fa565b610385610707366004612ffe565b60086020526000908152604090205481565b600a5461032b9073ffffffffffffffffffffffffffffffffffffffff1681565b600654610385565b60045461032b9073ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461078557600080fd5b600a5473ffffffffffffffffffffffffffffffffffffffff161561080a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4f535741503a20416c726561647920736574000000000000000000000000000060448201526064015b60405180910390fd5b61081381612891565b50565b3360009081526009602052604090205460ff1661088f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610801565b610813816129c6565b60045460009073ffffffffffffffffffffffffffffffffffffffff163314610942576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f476f7665726e616e63653a204e6f742066726f6d20766f74696e67526567697360448201527f74727900000000000000000000000000000000000000000000000000000000006064820152608401610801565b600b80549060006109528361328f565b9190505550600b54905090565b60005b600d54811015610a2057600d818154811061097f5761097f613326565b6000918252602090912001546040517f17e42ec000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152909116906317e42ec090602401600060405180830381600087803b1580156109f557600080fd5b505af1158015610a09573d6000803e3d6000fd5b505050508080610a189061328f565b915050610962565b5050565b600a5473ffffffffffffffffffffffffffffffffffffffff163314610aa5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f4f535741503a204e6f742066726f6d2073687574646f776e2061646d696e00006044820152606401610801565b8073ffffffffffffffffffffffffffffffffffffffff1663ef9b78c66040518163ffffffff1660e01b8152600401600060405180830381600087803b158015610aed57600080fd5b505af1158015610b01573d6000803e3d6000fd5b50505050610b0e81612a39565b60405173ffffffffffffffffffffffffffffffffffffffff8216907f1c24a27ac669c0278656c76cc711441c8dd32d21c32227dad2b42bf6271e8fae90600090a250565b600d54606090610b628385613260565b1115610b7957600d54610b76908490613278565b91505b8167ffffffffffffffff811115610b9257610b92613355565b604051908082528060200260200182016040528015610bbb578160200160208202803683370190505b50905060005b82811015610c5957600d610bd58286613260565b81548110610be557610be5613326565b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16828281518110610c2257610c22613326565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610c518161328f565b915050610bc1565b5092915050565b6060600d805480602002602001604051908101604052809291908181526020018280548015610cc557602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610c9a575b5050505050905090565b336000818152600c6020526040902054600d80549091908110610cf457610cf4613326565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614610da3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f476f7665726e616e63653a20566f74696e6720636f6e7472616374206e6f742060448201527f65786973747300000000000000000000000000000000000000000000000000006064820152608401610801565b610dac33612a39565b60405133907fdf42bfa876a741bbe542cf1a563269e1390bf03901b5d433a6e8afd6ee36dbfe90600090a2565b60005473ffffffffffffffffffffffffffffffffffffffff163314610dfd57600080fd5b60075415610e67576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f535741503a206578656375746f7220616c72656164792073657400000000006044820152606401610801565b8060005b81811015610eb657610ea4848483818110610e8857610e88613326565b9050602002016020810190610e9d9190612ffe565b6001612cd8565b80610eae8161328f565b915050610e6b565b50505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461088f57600080fd5b60015473ffffffffffffffffffffffffffffffffffffffff163314610f87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610801565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b8073ffffffffffffffffffffffffffffffffffffffff1663b3ee6e406040518163ffffffff1660e01b815260040160206040518083038186803b15801561105057600080fd5b505afa158015611064573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110889190613193565b156110ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f476f7665726e616e63653a204e6f74206120506f6c6c000000000000000000006044820152606401610801565b8073ffffffffffffffffffffffffffffffffffffffff16639e6cb42b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561113557600080fd5b505afa158015611149573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116d9190613193565b42116111d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f476f7665726e616e63653a20566f74696e67206e6f7420656e646564000000006044820152606401610801565b61081381612a39565b3360009081526009602052604090205460ff16611257576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610801565b600354604080517f8b0e9f3f000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691638b0e9f3f916004808301926020929190829003018186803b1580156112c257600080fd5b505afa1580156112d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112fa9190613193565b905060008611801561130f575062093a808611155b611375576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4f535741503a20496e76616c6964206d696e45786544656c61790000000000006044820152606401610801565b8385108015611387575062093a808511155b6113ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f535741503a20496e76616c696420766f74654475726174696f6e00000000006044820152606401610801565b8083111561147d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f535741503a20496e76616c6964206d696e476f76546f6b656e546f4372656160448201527f7465566f746500000000000000000000000000000000000000000000000000006064820152608401610801565b808211156114e7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4f535741503a20496e76616c6964206d696e51756f72756d00000000000000006044820152606401610801565b600087815260056020526040902080541561155e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4f535741503a20436f6e66696720616c726561647920657869737473000000006044820152606401610801565b86815560018082018790556002820186905560038201859055600482018490556006805491820181556000527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f018890556040805189815260208101899052908101879052606081018690526080810185905260a081018490527f4298cd6fa0bb1aeb8e309c8da40e32f5d5383c757a49341ef32bdcfe4bf091299060c00160405180910390a15050505050505050565b336000818152600c6020526040902054600d8054909190811061163457611634613326565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16146116e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f476f7665726e616e63653a20566f74696e6720636f6e7472616374206e6f742060448201527f65786973747300000000000000000000000000000000000000000000000000006064820152608401610801565b821561173c57604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f939cecbaa6409c96475d12a0cf1c30c058192b2b51716b5591c3f659ed9354a7906020015b60405180910390a3505050565b604051818152339073ffffffffffffffffffffffffffffffffffffffff8416907f66a9138482c99e9baf08860110ef332cc0c23b4a199a53593d8db0fc8f96fbfc9060200161172f565b60005473ffffffffffffffffffffffffffffffffffffffff1633146117aa57600080fd5b60045473ffffffffffffffffffffffffffffffffffffffff161561182a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4f535741503a20416c72656164792073657400000000000000000000000000006044820152606401610801565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055604051606082901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001681527f766f74696e675265676973746572000000000000000000000000000000000000907f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509906020015b60405180910390a250565b3360009081526009602052604090205460ff1661080a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610801565b6000818152600560205260408120600381015482918291829182916119cd57507f766f74650000000000000000000000000000000000000000000000000000000060005260056020527f9d8bd124132542d3b6ae5154dc8b70b99a1fde60a7254eb6a258ad48a511339e5b8054600182015460028301546003840154600490940154929a91995097509195509350915050565b3360009081526009602052604090205460ff16611a6e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610801565b610a208282612cd8565b60045473ffffffffffffffffffffffffffffffffffffffff163314611b1f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f476f7665726e616e63653a204e6f742066726f6d20766f74696e67526567697360448201527f74727900000000000000000000000000000000000000000000000000000000006064820152608401610801565b73ffffffffffffffffffffffffffffffffffffffff8216611bc2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f476f7665726e616e63653a20496e76616c696420766f74696e6720616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610801565b600d541580611c2c575073ffffffffffffffffffffffffffffffffffffffff82166000818152600c6020526040902054600d80549091908110611c0757611c07613326565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b611cb8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f476f7665726e616e63653a20566f74696e6720636f6e747261637420616c726560448201527f61647920657869737473000000000000000000000000000000000000000000006064820152608401610801565b60005b600d54811015611e68576000600d8281548110611cda57611cda613326565b60009182526020918290200154604080517fb3ee6e40000000000000000000000000000000000000000000000000000000008152905173ffffffffffffffffffffffffffffffffffffffff9092169350839263b3ee6e4092600480840193829003018186803b158015611d4c57600080fd5b505afa158015611d60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d849190613193565b158015611e0d5750428173ffffffffffffffffffffffffffffffffffffffff16639e6cb42b6040518163ffffffff1660e01b815260040160206040518083038186803b158015611dd357600080fd5b505afa158015611de7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e0b9190613193565b105b15611e5457611e4f600d8381548110611e2857611e28613326565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16612a39565b611e62565b81611e5e8161328f565b9250505b50611cbb565b600d805473ffffffffffffffffffffffffffffffffffffffff85166000818152600c60205260408120839055600183018455929092527fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb50180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690911790558115611f355760405173ffffffffffffffffffffffffffffffffffffffff8416907f3b7f4bea1b2462212751e8a9d23ca2a37a1abf7ff729725e224314f1c190c99190600090a2505050565b60405173ffffffffffffffffffffffffffffffffffffffff8416907f83f5721a5071f4aac6f77c58360d8c8618098cebdc6d3c393f1e757ef4d1082b90600090a2505050565b60078181548110611f8b57600080fd5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60065460609083101561208957600654611fcc8385613260565b1115611fe357600654611fe0908490613278565b91505b8167ffffffffffffffff811115611ffc57611ffc613355565b604051908082528060200260200182016040528015612025578160200160208202803683370190505b50905060005b82811015610c5957600661203f8583613260565b8154811061204f5761204f613326565b906000526020600020015482828151811061206c5761206c613326565b6020908102919091010152806120818161328f565b91505061202b565b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146120b357600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff16331461215a57600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf5910161212b565b600d8181548110611f8b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff81166000818152600c6020526040812054600d8054929392909190811061222757612227613326565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff161492915050565b3360009081526009602052604090205460ff166122c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4f535741503a204e6f742066726f6d20766f74696e67000000000000000000006044820152606401610801565b600354604080517f8b0e9f3f000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691638b0e9f3f916004808301926020929190829003018186803b15801561233457600080fd5b505afa158015612348573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236c9190613193565b6000858152600560205260409020549091506123e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4f535741503a20436f6e666967206e6f742065786973747300000000000000006044820152606401610801565b827f6d696e45786544656c6179000000000000000000000000000000000000000000141561249b5760008211801561241f575062093a808211155b612485576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4f535741503a20496e76616c6964206d696e45786544656c61790000000000006044820152606401610801565b6000848152600560205260409020829055612798565b827f6d696e566f74654475726174696f6e0000000000000000000000000000000000141561256557600084815260056020526040902060020154821080156124e6575062093a808211155b61254c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f535741503a20496e76616c696420766f74654475726174696f6e00000000006044820152606401610801565b6000848152600560205260409020600101829055612798565b827f6d6178566f74654475726174696f6e00000000000000000000000000000000001415612620576000848152600560205260409020600101548211612607576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f4f535741503a20496e76616c696420766f74654475726174696f6e00000000006044820152606401610801565b6000848152600560205260409020600201829055612798565b827f6d696e476f76546f6b656e546f437265617465566f746500000000000000000014156126f157808211156126d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f535741503a20496e76616c6964206d696e476f76546f6b656e546f4372656160448201527f7465566f746500000000000000000000000000000000000000000000000000006064820152608401610801565b6000848152600560205260409020600301829055612798565b827f6d696e51756f72756d000000000000000000000000000000000000000000000014156127985780821115612783576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4f535741503a20496e76616c6964206d696e51756f72756d00000000000000006044820152606401610801565b60008481526005602052604090206004018290555b82847f10eff86a4e52b12bd92a6e64442cdb5baa87a9b327114811ebfc96a7c1e00281846040516127cb91815260200190565b60405180910390a350505050565b600681815481106127e957600080fd5b600091825260209091200154905081565b60005473ffffffffffffffffffffffffffffffffffffffff16331461281e57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b9060200161212b565b73ffffffffffffffffffffffffffffffffffffffff811661290e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4f535741503a20496e76616c69642061646d696e0000000000000000000000006044820152606401610801565b600a80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055604051606082901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001681527f61646d696e000000000000000000000000000000000000000000000000000000907f22ea5a9dcc7fb5bc447fcb472061adc51caa147724a67a6695d49a9dff162509906020016118de565b600e80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d9060200161212b565b73ffffffffffffffffffffffffffffffffffffffff81166000908152600c602052604090205480151580612ab757508173ffffffffffffffffffffffffffffffffffffffff16600d600081548110612a9357612a93613326565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16145b612b43576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f476f7665726e616e63653a20566f74696e6720636f6e7472616374206e6f742060448201527f65786973747300000000000000000000000000000000000000000000000000006064820152608401610801565b600d54612b5290600190613278565b811015612c4557600d8054612b6990600190613278565b81548110612b7957612b79613326565b600091825260209091200154600d805473ffffffffffffffffffffffffffffffffffffffff9092169183908110612bb257612bb2613326565b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600c6000600d8481548110612c1257612c12613326565b600091825260208083209091015473ffffffffffffffffffffffffffffffffffffffff1683528201929092526040019020555b73ffffffffffffffffffffffffffffffffffffffff82166000908152600c6020526040812055600d805480612c7c57612c7c6132f7565b60008281526020902081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001690550190555050565b73ffffffffffffffffffffffffffffffffffffffff8216612d55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f4f535741503a20496e76616c6964206578656375746f720000000000000000006044820152606401610801565b6007541580612dbf575073ffffffffffffffffffffffffffffffffffffffff8216600081815260086020526040902054600780549091908110612d9a57612d9a613326565b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff1614155b15612e4a576007805473ffffffffffffffffffffffffffffffffffffffff84166000818152600860205260408120839055600183018455929092527fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c6880180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055612efc565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260086020526040902054612efc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4f535741503a2063616e6e6f74207265736574206d61696e206578656375746f60448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610801565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260096020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168215151790557f410bdf2fedecd51e396bd4e5ca41880366c00ff01f4df34d7cc46faef60eb706606083901b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001682612f9f576000612fa2565b60015b604080517f766f74696e674578656375746f720000000000000000000000000000000000008152602081019390935260ff9091169082015260600160405180910390a15050565b80358015158114612ff957600080fd5b919050565b60006020828403121561301057600080fd5b813561301b81613384565b9392505050565b6000806040838503121561303557600080fd5b823561304081613384565b915061304e60208401612fe9565b90509250929050565b6000806020838503121561306a57600080fd5b823567ffffffffffffffff8082111561308257600080fd5b818501915085601f83011261309657600080fd5b8135818111156130a557600080fd5b8660208260051b85010111156130ba57600080fd5b60209290920196919550909350505050565b6000806000606084860312156130e157600080fd5b6130ea84612fe9565b925060208401356130fa81613384565b929592945050506040919091013590565b60006020828403121561311d57600080fd5b5035919050565b60008060006060848603121561313957600080fd5b505081359360208301359350604090920135919050565b60008060008060008060c0878903121561316957600080fd5b505084359660208601359650604086013595606081013595506080810135945060a0013592509050565b6000602082840312156131a557600080fd5b5051919050565b600080604083850312156131bf57600080fd5b50508035926020909101359150565b6020808252825182820181905260009190848201906040850190845b8181101561321c57835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016131ea565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b8181101561321c57835183529284019291840191600101613244565b60008219821115613273576132736132c8565b500190565b60008282101561328a5761328a6132c8565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156132c1576132c16132c8565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff8116811461081357600080fdfea2646970667358221220c1c1f7a17bf8e285fb70b189650920b13458232023f512433f68891c520d201464736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingManager.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingManager.json.ts"], function (require, exports, eth_contract_20, OSWAP_VotingManager_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_VotingManager = void 0;
    class OSWAP_VotingManager extends eth_contract_20.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_VotingManager_json_1.default.abi, OSWAP_VotingManager_json_1.default.bytecode);
            this.assign();
        }
        deploy(params) {
            return this.__deploy([params.trollRegistry, this.wallet.utils.stringToBytes32(params.names), this.wallet.utils.toString(params.minExeDelay), this.wallet.utils.toString(params.minVoteDuration), this.wallet.utils.toString(params.maxVoteDuration), this.wallet.utils.toString(params.minGovTokenToCreateVote), this.wallet.utils.toString(params.minQuorum)]);
        }
        parseAddVotingConfigEvent(receipt) {
            return this.parseEvents(receipt, "AddVotingConfig").map(e => this.decodeAddVotingConfigEvent(e));
        }
        decodeAddVotingConfigEvent(event) {
            let result = event.data;
            return {
                name: result.name,
                minExeDelay: new eth_contract_20.BigNumber(result.minExeDelay),
                minVoteDuration: new eth_contract_20.BigNumber(result.minVoteDuration),
                maxVoteDuration: new eth_contract_20.BigNumber(result.maxVoteDuration),
                minGovTokenToCreateVote: new eth_contract_20.BigNumber(result.minGovTokenToCreateVote),
                minQuorum: new eth_contract_20.BigNumber(result.minQuorum),
                _event: event
            };
        }
        parseAuthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Authorize").map(e => this.decodeAuthorizeEvent(e));
        }
        decodeAuthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseDeauthorizeEvent(receipt) {
            return this.parseEvents(receipt, "Deauthorize").map(e => this.decodeDeauthorizeEvent(e));
        }
        decodeDeauthorizeEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseExecutedEvent(receipt) {
            return this.parseEvents(receipt, "Executed").map(e => this.decodeExecutedEvent(e));
        }
        decodeExecutedEvent(event) {
            let result = event.data;
            return {
                vote: result.vote,
                _event: event
            };
        }
        parseNewPollEvent(receipt) {
            return this.parseEvents(receipt, "NewPoll").map(e => this.decodeNewPollEvent(e));
        }
        decodeNewPollEvent(event) {
            let result = event.data;
            return {
                poll: result.poll,
                _event: event
            };
        }
        parseNewVoteEvent(receipt) {
            return this.parseEvents(receipt, "NewVote").map(e => this.decodeNewVoteEvent(e));
        }
        decodeNewVoteEvent(event) {
            let result = event.data;
            return {
                vote: result.vote,
                _event: event
            };
        }
        parseParamSetEvent(receipt) {
            return this.parseEvents(receipt, "ParamSet").map(e => this.decodeParamSetEvent(e));
        }
        decodeParamSetEvent(event) {
            let result = event.data;
            return {
                name: result.name,
                value: result.value,
                _event: event
            };
        }
        parseParamSet2Event(receipt) {
            return this.parseEvents(receipt, "ParamSet2").map(e => this.decodeParamSet2Event(e));
        }
        decodeParamSet2Event(event) {
            let result = event.data;
            return {
                name: result.name,
                value1: result.value1,
                value2: result.value2,
                _event: event
            };
        }
        parsePollEvent(receipt) {
            return this.parseEvents(receipt, "Poll").map(e => this.decodePollEvent(e));
        }
        decodePollEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                poll: result.poll,
                option: new eth_contract_20.BigNumber(result.option),
                _event: event
            };
        }
        parseSetVotingConfigEvent(receipt) {
            return this.parseEvents(receipt, "SetVotingConfig").map(e => this.decodeSetVotingConfigEvent(e));
        }
        decodeSetVotingConfigEvent(event) {
            let result = event.data;
            return {
                configName: result.configName,
                paramName: result.paramName,
                minExeDelay: new eth_contract_20.BigNumber(result.minExeDelay),
                _event: event
            };
        }
        parseStartOwnershipTransferEvent(receipt) {
            return this.parseEvents(receipt, "StartOwnershipTransfer").map(e => this.decodeStartOwnershipTransferEvent(e));
        }
        decodeStartOwnershipTransferEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseTransferOwnershipEvent(receipt) {
            return this.parseEvents(receipt, "TransferOwnership").map(e => this.decodeTransferOwnershipEvent(e));
        }
        decodeTransferOwnershipEvent(event) {
            let result = event.data;
            return {
                user: result.user,
                _event: event
            };
        }
        parseUpgradeEvent(receipt) {
            return this.parseEvents(receipt, "Upgrade").map(e => this.decodeUpgradeEvent(e));
        }
        decodeUpgradeEvent(event) {
            let result = event.data;
            return {
                newVotingManager: result.newVotingManager,
                _event: event
            };
        }
        parseVetoEvent(receipt) {
            return this.parseEvents(receipt, "Veto").map(e => this.decodeVetoEvent(e));
        }
        decodeVetoEvent(event) {
            let result = event.data;
            return {
                vote: result.vote,
                _event: event
            };
        }
        parseVoteEvent(receipt) {
            return this.parseEvents(receipt, "Vote").map(e => this.decodeVoteEvent(e));
        }
        decodeVoteEvent(event) {
            let result = event.data;
            return {
                account: result.account,
                vote: result.vote,
                option: new eth_contract_20.BigNumber(result.option),
                _event: event
            };
        }
        assign() {
            let admin_call = async () => {
                let result = await this.call('admin');
                return result;
            };
            this.admin = admin_call;
            let allVotings_call = async () => {
                let result = await this.call('allVotings');
                return result;
            };
            this.allVotings = allVotings_call;
            let getVotingConfigProfilesParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.length)];
            let getVotingConfigProfiles_call = async (params) => {
                let result = await this.call('getVotingConfigProfiles', getVotingConfigProfilesParams(params));
                return result;
            };
            this.getVotingConfigProfiles = getVotingConfigProfiles_call;
            let getVotingCount_call = async () => {
                let result = await this.call('getVotingCount');
                return new eth_contract_20.BigNumber(result);
            };
            this.getVotingCount = getVotingCount_call;
            let getVotingParams_call = async (name) => {
                let result = await this.call('getVotingParams', [this.wallet.utils.stringToBytes32(name)]);
                return {
                    _minExeDelay: new eth_contract_20.BigNumber(result._minExeDelay),
                    _minVoteDuration: new eth_contract_20.BigNumber(result._minVoteDuration),
                    _maxVoteDuration: new eth_contract_20.BigNumber(result._maxVoteDuration),
                    _minGovTokenToCreateVote: new eth_contract_20.BigNumber(result._minGovTokenToCreateVote),
                    _minQuorum: new eth_contract_20.BigNumber(result._minQuorum)
                };
            };
            this.getVotingParams = getVotingParams_call;
            let getVotingsParams = (params) => [this.wallet.utils.toString(params.start), this.wallet.utils.toString(params.count)];
            let getVotings_call = async (params) => {
                let result = await this.call('getVotings', getVotingsParams(params));
                return result;
            };
            this.getVotings = getVotings_call;
            let govToken_call = async () => {
                let result = await this.call('govToken');
                return result;
            };
            this.govToken = govToken_call;
            let isPermitted_call = async (param1) => {
                let result = await this.call('isPermitted', [param1]);
                return result;
            };
            this.isPermitted = isPermitted_call;
            let isVotingContract_call = async (votingContract) => {
                let result = await this.call('isVotingContract', [votingContract]);
                return result;
            };
            this.isVotingContract = isVotingContract_call;
            let isVotingExecutor_call = async (param1) => {
                let result = await this.call('isVotingExecutor', [param1]);
                return result;
            };
            this.isVotingExecutor = isVotingExecutor_call;
            let newOwner_call = async () => {
                let result = await this.call('newOwner');
                return result;
            };
            this.newOwner = newOwner_call;
            let newVotingExecutorManager_call = async () => {
                let result = await this.call('newVotingExecutorManager');
                return result;
            };
            this.newVotingExecutorManager = newVotingExecutorManager_call;
            let newVotingManager_call = async () => {
                let result = await this.call('newVotingManager');
                return result;
            };
            this.newVotingManager = newVotingManager_call;
            let owner_call = async () => {
                let result = await this.call('owner');
                return result;
            };
            this.owner = owner_call;
            let trollRegistry_call = async () => {
                let result = await this.call('trollRegistry');
                return result;
            };
            this.trollRegistry = trollRegistry_call;
            let voteCount_call = async () => {
                let result = await this.call('voteCount');
                return new eth_contract_20.BigNumber(result);
            };
            this.voteCount = voteCount_call;
            let votingConfigProfiles_call = async (param1) => {
                let result = await this.call('votingConfigProfiles', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.votingConfigProfiles = votingConfigProfiles_call;
            let votingConfigProfilesLength_call = async () => {
                let result = await this.call('votingConfigProfilesLength');
                return new eth_contract_20.BigNumber(result);
            };
            this.votingConfigProfilesLength = votingConfigProfilesLength_call;
            let votingConfigs_call = async (param1) => {
                let result = await this.call('votingConfigs', [this.wallet.utils.stringToBytes32(param1)]);
                return {
                    minExeDelay: new eth_contract_20.BigNumber(result.minExeDelay),
                    minVoteDuration: new eth_contract_20.BigNumber(result.minVoteDuration),
                    maxVoteDuration: new eth_contract_20.BigNumber(result.maxVoteDuration),
                    minGovTokenToCreateVote: new eth_contract_20.BigNumber(result.minGovTokenToCreateVote),
                    minQuorum: new eth_contract_20.BigNumber(result.minQuorum)
                };
            };
            this.votingConfigs = votingConfigs_call;
            let votingExecutor_call = async (param1) => {
                let result = await this.call('votingExecutor', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.votingExecutor = votingExecutor_call;
            let votingExecutorInv_call = async (param1) => {
                let result = await this.call('votingExecutorInv', [param1]);
                return new eth_contract_20.BigNumber(result);
            };
            this.votingExecutorInv = votingExecutorInv_call;
            let votingExecutorLength_call = async () => {
                let result = await this.call('votingExecutorLength');
                return new eth_contract_20.BigNumber(result);
            };
            this.votingExecutorLength = votingExecutorLength_call;
            let votingIdx_call = async (param1) => {
                let result = await this.call('votingIdx', [param1]);
                return new eth_contract_20.BigNumber(result);
            };
            this.votingIdx = votingIdx_call;
            let votingRegister_call = async () => {
                let result = await this.call('votingRegister');
                return result;
            };
            this.votingRegister = votingRegister_call;
            let votings_call = async (param1) => {
                let result = await this.call('votings', [this.wallet.utils.toString(param1)]);
                return result;
            };
            this.votings = votings_call;
            let addVotingConfigParams = (params) => [this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.toString(params.minExeDelay), this.wallet.utils.toString(params.minVoteDuration), this.wallet.utils.toString(params.maxVoteDuration), this.wallet.utils.toString(params.minGovTokenToCreateVote), this.wallet.utils.toString(params.minQuorum)];
            let addVotingConfig_send = async (params) => {
                let result = await this.send('addVotingConfig', addVotingConfigParams(params));
                return result;
            };
            let addVotingConfig_call = async (params) => {
                let result = await this.call('addVotingConfig', addVotingConfigParams(params));
                return;
            };
            this.addVotingConfig = Object.assign(addVotingConfig_send, {
                call: addVotingConfig_call
            });
            let closeVote_send = async (vote) => {
                let result = await this.send('closeVote', [vote]);
                return result;
            };
            let closeVote_call = async (vote) => {
                let result = await this.call('closeVote', [vote]);
                return;
            };
            this.closeVote = Object.assign(closeVote_send, {
                call: closeVote_call
            });
            let deny_send = async (user) => {
                let result = await this.send('deny', [user]);
                return result;
            };
            let deny_call = async (user) => {
                let result = await this.call('deny', [user]);
                return;
            };
            this.deny = Object.assign(deny_send, {
                call: deny_call
            });
            let executed_send = async () => {
                let result = await this.send('executed');
                return result;
            };
            let executed_call = async () => {
                let result = await this.call('executed');
                return;
            };
            this.executed = Object.assign(executed_send, {
                call: executed_call
            });
            let getNewVoteId_send = async () => {
                let result = await this.send('getNewVoteId');
                return result;
            };
            let getNewVoteId_call = async () => {
                let result = await this.call('getNewVoteId');
                return new eth_contract_20.BigNumber(result);
            };
            this.getNewVoteId = Object.assign(getNewVoteId_send, {
                call: getNewVoteId_call
            });
            let initAdmin_send = async (admin) => {
                let result = await this.send('initAdmin', [admin]);
                return result;
            };
            let initAdmin_call = async (admin) => {
                let result = await this.call('initAdmin', [admin]);
                return;
            };
            this.initAdmin = Object.assign(initAdmin_send, {
                call: initAdmin_call
            });
            let initVotingExecutor_send = async (votingExecutor) => {
                let result = await this.send('initVotingExecutor', [votingExecutor]);
                return result;
            };
            let initVotingExecutor_call = async (votingExecutor) => {
                let result = await this.call('initVotingExecutor', [votingExecutor]);
                return;
            };
            this.initVotingExecutor = Object.assign(initVotingExecutor_send, {
                call: initVotingExecutor_call
            });
            let newVoteParams = (params) => [params.vote, params.isExecutiveVote];
            let newVote_send = async (params) => {
                let result = await this.send('newVote', newVoteParams(params));
                return result;
            };
            let newVote_call = async (params) => {
                let result = await this.call('newVote', newVoteParams(params));
                return;
            };
            this.newVote = Object.assign(newVote_send, {
                call: newVote_call
            });
            let permit_send = async (user) => {
                let result = await this.send('permit', [user]);
                return result;
            };
            let permit_call = async (user) => {
                let result = await this.call('permit', [user]);
                return;
            };
            this.permit = Object.assign(permit_send, {
                call: permit_call
            });
            let setAdmin_send = async (admin) => {
                let result = await this.send('setAdmin', [admin]);
                return result;
            };
            let setAdmin_call = async (admin) => {
                let result = await this.call('setAdmin', [admin]);
                return;
            };
            this.setAdmin = Object.assign(setAdmin_send, {
                call: setAdmin_call
            });
            let setVotingConfigParams = (params) => [this.wallet.utils.stringToBytes32(params.configName), this.wallet.utils.stringToBytes32(params.paramName), this.wallet.utils.toString(params.paramValue)];
            let setVotingConfig_send = async (params) => {
                let result = await this.send('setVotingConfig', setVotingConfigParams(params));
                return result;
            };
            let setVotingConfig_call = async (params) => {
                let result = await this.call('setVotingConfig', setVotingConfigParams(params));
                return;
            };
            this.setVotingConfig = Object.assign(setVotingConfig_send, {
                call: setVotingConfig_call
            });
            let setVotingExecutorParams = (params) => [params.votingExecutor, params.bool];
            let setVotingExecutor_send = async (params) => {
                let result = await this.send('setVotingExecutor', setVotingExecutorParams(params));
                return result;
            };
            let setVotingExecutor_call = async (params) => {
                let result = await this.call('setVotingExecutor', setVotingExecutorParams(params));
                return;
            };
            this.setVotingExecutor = Object.assign(setVotingExecutor_send, {
                call: setVotingExecutor_call
            });
            let setVotingRegister_send = async (votingRegister) => {
                let result = await this.send('setVotingRegister', [votingRegister]);
                return result;
            };
            let setVotingRegister_call = async (votingRegister) => {
                let result = await this.call('setVotingRegister', [votingRegister]);
                return;
            };
            this.setVotingRegister = Object.assign(setVotingRegister_send, {
                call: setVotingRegister_call
            });
            let takeOwnership_send = async () => {
                let result = await this.send('takeOwnership');
                return result;
            };
            let takeOwnership_call = async () => {
                let result = await this.call('takeOwnership');
                return;
            };
            this.takeOwnership = Object.assign(takeOwnership_send, {
                call: takeOwnership_call
            });
            let transferOwnership_send = async (newOwner) => {
                let result = await this.send('transferOwnership', [newOwner]);
                return result;
            };
            let transferOwnership_call = async (newOwner) => {
                let result = await this.call('transferOwnership', [newOwner]);
                return;
            };
            this.transferOwnership = Object.assign(transferOwnership_send, {
                call: transferOwnership_call
            });
            let updateWeight_send = async (account) => {
                let result = await this.send('updateWeight', [account]);
                return result;
            };
            let updateWeight_call = async (account) => {
                let result = await this.call('updateWeight', [account]);
                return;
            };
            this.updateWeight = Object.assign(updateWeight_send, {
                call: updateWeight_call
            });
            let upgrade_send = async (votingManager) => {
                let result = await this.send('upgrade', [votingManager]);
                return result;
            };
            let upgrade_call = async (votingManager) => {
                let result = await this.call('upgrade', [votingManager]);
                return;
            };
            this.upgrade = Object.assign(upgrade_send, {
                call: upgrade_call
            });
            let upgradeByAdmin_send = async (votingManager) => {
                let result = await this.send('upgradeByAdmin', [votingManager]);
                return result;
            };
            let upgradeByAdmin_call = async (votingManager) => {
                let result = await this.call('upgradeByAdmin', [votingManager]);
                return;
            };
            this.upgradeByAdmin = Object.assign(upgradeByAdmin_send, {
                call: upgradeByAdmin_call
            });
            let veto_send = async (voting) => {
                let result = await this.send('veto', [voting]);
                return result;
            };
            let veto_call = async (voting) => {
                let result = await this.call('veto', [voting]);
                return;
            };
            this.veto = Object.assign(veto_send, {
                call: veto_call
            });
            let votedParams = (params) => [params.poll, params.account, this.wallet.utils.toString(params.option)];
            let voted_send = async (params) => {
                let result = await this.send('voted', votedParams(params));
                return result;
            };
            let voted_call = async (params) => {
                let result = await this.call('voted', votedParams(params));
                return;
            };
            this.voted = Object.assign(voted_send, {
                call: voted_call
            });
        }
    }
    exports.OSWAP_VotingManager = OSWAP_VotingManager;
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingRegistry.json.ts", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<amd-module name='@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingRegistry.json.ts'/> 
    exports.default = {
        "abi": [
            { "inputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "_votingManager", "type": "address" }], "stateMutability": "nonpayable", "type": "constructor" },
            { "inputs": [{ "internalType": "contract OSWAP_MainChainVotingExecutor", "name": "executor", "type": "address" }, { "internalType": "bytes32", "name": "name", "type": "bytes32" }, { "internalType": "bytes32[]", "name": "options", "type": "bytes32[]" }, { "internalType": "uint256", "name": "quorum", "type": "uint256" }, { "internalType": "uint256", "name": "threshold", "type": "uint256" }, { "internalType": "uint256", "name": "voteEndTime", "type": "uint256" }, { "internalType": "uint256", "name": "executeDelay", "type": "uint256" }, { "internalType": "bytes32[]", "name": "executeParam", "type": "bytes32[]" }], "name": "newVote", "outputs": [], "stateMutability": "nonpayable", "type": "function" },
            { "inputs": [], "name": "trollRegistry", "outputs": [{ "internalType": "contract OSWAP_MainChainTrollRegistry", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" },
            { "inputs": [], "name": "votingManager", "outputs": [{ "internalType": "contract OSWAP_VotingManager", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }
        ],
        "bytecode": "60c060405234801561001057600080fd5b5060405161334c38038061334c83398101604081905261002f916100bf565b806001600160a01b03166330167bec6040518163ffffffff1660e01b815260040160206040518083038186803b15801561006857600080fd5b505afa15801561007c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100a091906100bf565b6001600160601b0319606091821b811660805291901b1660a0526100fb565b6000602082840312156100d157600080fd5b81516100dc816100e3565b9392505050565b6001600160a01b03811681146100f857600080fd5b50565b60805160601c60a05160601c6132056101476000396000818160a201528181610126015281816102910152818161071401526108ff0152600081816051015261039201526132056000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c806330167bec146200004b578063da1bcdf0146200009c578063dac642fb14620000c4575b600080fd5b620000737f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b620000737f000000000000000000000000000000000000000000000000000000000000000081565b620000db620000d5366004620009f6565b620000dd565b005b6040517fa3818b3b00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b81166004830152821515917f00000000000000000000000000000000000000000000000000000000000000009091169063a3818b3b9060240160206040518083038186803b1580156200016b57600080fd5b505afa15801562000180573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a69190620009cb565b62000238576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f535741505f566f74696e6752656769737472793a20496e76616c696420657860448201527f656375746f72000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b60008162000267577f706f6c6c0000000000000000000000000000000000000000000000000000000062000285565b838360008181106200027d576200027d62000c74565b905060200201355b905060008060008060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663718fbb79876040518263ffffffff1660e01b8152600401620002eb91815260200190565b60a06040518083038186803b1580156200030457600080fd5b505afa15801562000319573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200033f919062000ae7565b6040517f426233600000000000000000000000000000000000000000000000000000000081523360048201529499509297509095509350915060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063426233609060240160206040518083038186803b158015620003d557600080fd5b505afa158015620003ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000410919062000acd565b905082811015620004a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603560248201527f4f535741505f566f74696e6752656769737472793a206d696e476f76546f6b6560448201527f6e546f437265617465566f7465206e6f74206d6574000000000000000000000060648201526084016200022f565b620004b0428662000c34565b8c101562000541576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f4f535741505f566f74696e6752656769737472793a206d696e566f746544757260448201527f6174696f6e206e6f74206d65740000000000000000000000000000000000000060648201526084016200022f565b6200054d428562000c34565b8c1115620005de576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f4f535741505f566f74696e6752656769737472793a206578636565646564206d60448201527f6178566f74654475726174696f6e00000000000000000000000000000000000060648201526084016200022f565b87156200070957818e101562000677576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f4f535741505f566f74696e6752656769737472793a206d696e51756f72756d2060448201527f6e6f74206d65740000000000000000000000000000000000000000000000000060648201526084016200022f565b858b101562000709576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4f535741505f566f74696e6752656769737472793a206d696e45786544656c6160448201527f79206e6f74206d6574000000000000000000000000000000000000000000000060648201526084016200022f565b5050505050505060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663145988986040518163ffffffff1660e01b8152600401602060405180830381600087803b1580156200077b57600080fd5b505af115801562000790573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007b6919062000acd565b905060006040518061012001604052808e73ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018d81526020018c8c8080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050509082525060208082018c905260408083018c9052606083018b9052608083018a90528051888302818101840190925288815260a0909301929189918991829190850190849080828437600092019190915250505091525060405162000885906200096e565b62000891919062000b65565b604051809103906000f080158015620008ae573d6000803e3d6000fd5b506040517f8210775100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808316600483015285151560248301529192507f000000000000000000000000000000000000000000000000000000000000000090911690638210775190604401600060405180830381600087803b1580156200094657600080fd5b505af11580156200095b573d6000803e3d6000fd5b5050505050505050505050505050505050565b61252c8062000ca483390190565b60008083601f8401126200098f57600080fd5b50813567ffffffffffffffff811115620009a857600080fd5b6020830191508360208260051b8501011115620009c457600080fd5b9250929050565b600060208284031215620009de57600080fd5b81518015158114620009ef57600080fd5b9392505050565b6000806000806000806000806000806101008b8d03121562000a1757600080fd5b8a3573ffffffffffffffffffffffffffffffffffffffff8116811462000a3c57600080fd5b995060208b0135985060408b013567ffffffffffffffff8082111562000a6157600080fd5b62000a6f8e838f016200097c565b909a50985060608d0135975060808d0135965060a08d0135955060c08d0135945060e08d013591508082111562000aa557600080fd5b5062000ab48d828e016200097c565b915080935050809150509295989b9194979a5092959850565b60006020828403121562000ae057600080fd5b5051919050565b600080600080600060a0868803121562000b0057600080fd5b5050835160208501516040860151606087015160809097015192989197509594509092509050565b600081518084526020808501945080840160005b8381101562000b5a5781518752958201959082019060010162000b3c565b509495945050505050565b6020815262000b8d60208201835173ffffffffffffffffffffffffffffffffffffffff169052565b60208201516040820152604082015160608201526000606083015161012080608085015262000bc161014085018362000b28565b9150608085015160a085015260a085015160c085015260c085015160e085015260e08501516101008181870152808701519150507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403018286015262000c2a838262000b28565b9695505050505050565b6000821982111562000c6f577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfe6101c06040523480156200001257600080fd5b506040516200252c3803806200252c8339810160408190526200003591620006ea565b6000336001600160a01b03166330167bec6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200007157600080fd5b505afa15801562000086573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ac9190620006ca565b90506000336001600160a01b031663da1bcdf06040518163ffffffff1660e01b815260040160206040518083038186803b158015620000ea57600080fd5b505afa158015620000ff573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001259190620006ca565b6001600160601b0319606082811b821660a05284901b1660805260c0840151909150421115620001a85760405162461bcd60e51b8152602060048201526024808201527f566f74696e67436f6e74726163743a20566f74696e6720616c726561647920656044820152631b99195960e21b60648201526084015b60405180910390fd5b61010083015151156200040857825160405163a3818b3b60e01b81526001600160a01b0391821660048201529082169063a3818b3b9060240160206040518083038186803b158015620001fa57600080fd5b505afa1580156200020f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200023591906200069f565b620002835760405162461bcd60e51b815260206004820181905260248201527f566f74696e67436f6e74726163743a20496e76616c6964206578656375746f7260448201526064016200019f565b8260600151516002148015620002bd57508260600151600081518110620002ae57620002ae6200081f565b6020026020010151605960f81b145b8015620002ee57508260600151600181518110620002df57620002df6200081f565b6020026020010151602760f91b145b6200033c5760405162461bcd60e51b815260206004820152601f60248201527f566f74696e67436f6e74726163743a20496e76616c6964206f7074696f6e730060448201526064016200019f565b670de0b6b3a76400008360a001511115620003a45760405162461bcd60e51b815260206004820152602160248201527f566f74696e67436f6e74726163743a20496e76616c6964207468726573686f6c6044820152601960fa1b60648201526084016200019f565b60008360e0015111620004085760405162461bcd60e51b815260206004820152602560248201527f566f74696e67436f6e74726163743a20496e76616c696420657865637574652060448201526464656c617960d81b60648201526084016200019f565b82600001516001600160a01b031660c0816001600160a01b031660601b81525050816001600160a01b0316638b0e9f3f6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200046357600080fd5b505afa15801562000478573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200049e9190620007d9565b60065560208084015160e05260408401516101005260608401518051620004ca9260009201906200057c565b5060808301516101205260a0830151610140526060830151516001600160401b03811115620004fd57620004fd62000835565b60405190808252806020026020018201604052801562000527578160200160208202803683370190505b5080516200053e916004916020909101906200057c565b50426101605260c08301516101805260e08301516101a052610100830151805162000572916007916020909101906200057c565b5050505062000864565b828054828255906000526020600020908101928215620005ba579160200282015b82811115620005ba5782518255916020019190600101906200059d565b50620005c8929150620005cc565b5090565b5b80821115620005c85760008155600101620005cd565b600082601f830112620005f557600080fd5b815160206001600160401b038083111562000614576200061462000835565b8260051b604051601f19603f830116810181811084821117156200063c576200063c62000835565b604052848152838101925086840182880185018910156200065c57600080fd5b600092505b858310156200068157805184529284019260019290920191840162000661565b50979650505050505050565b80516200069a816200084b565b919050565b600060208284031215620006b257600080fd5b81518015158114620006c357600080fd5b9392505050565b600060208284031215620006dd57600080fd5b8151620006c3816200084b565b600060208284031215620006fd57600080fd5b81516001600160401b03808211156200071557600080fd5b9083019061012082860312156200072b57600080fd5b62000735620007f3565b62000740836200068d565b815260208301516020820152604083015160408201526060830151828111156200076957600080fd5b6200077787828601620005e3565b6060830152506080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015183811115620007ba57600080fd5b620007c888828701620005e3565b918301919091525095945050505050565b600060208284031215620007ec57600080fd5b5051919050565b60405161012081016001600160401b038111828210171562000819576200081962000835565b60405290565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200086157600080fd5b50565b60805160601c60a05160601c60c05160601c60e05161010051610120516101405161016051610180516101a051611ba962000983600039600081816103a801528181610f0701526110340152600081816103d8015281816104da01528181610ad001528181610ee501526110550152600081816102620152610ec301526000818161034501528181610e1a01526113f401526000818161022801528181610df701526112c30152600081816101ee0152610e9f0152600081816103ff0152610e7d01526000818161044101528181610e5b015261154601526000818161047001528181610762015281816115b001526116ae0152600081816102c90152818161088901528181610a2a01528181610b620152610cc70152611ba96000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c8063876cdb2f11610104578063c55dd801116100a2578063ede20b4611610071578063ede20b46146104a3578063ef9b78c6146104b5578063f3c49550146104bd578063f830f09c146104d057600080fd5b8063c55dd80114610463578063da1bcdf01461046b578063da918d7a14610492578063e5188f551461049a57600080fd5b8063af640d0f116100de578063af640d0f146103fa578063b3ee6e4014610421578063bd81b9a614610429578063c34c08e51461043c57600080fd5b8063876cdb2f146103a357806396c82e57146103ca5780639e6cb42b146103d357600080fd5b806330167bec1161017157806342cde4e81161014b57806342cde4e81461034057806358c0dc1d146103675780635e615a6b1461037c578063614619541461039b57600080fd5b806330167bec146102c457806331a38c8914610310578063409e22051461032d57600080fd5b806317e42ec0116101ad57806317e42ec01461024a57806318024acc1461025d5780632376a29a14610284578063281a9bdf146102a457600080fd5b80630121b93f146101d457806306fdde03146101e95780631703a01814610223575b600080fd5b6101e76101e23660046118fb565b6104d8565b005b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6101e76102583660046118be565b610ace565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6102106102923660046118be565b60036020526000908152604090205481565b6102106102b23660046118be565b60026020526000908152604090205481565b6102eb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161021a565b60015461031d9060ff1681565b604051901515815260200161021a565b61021061033b3660046118fb565b610d2e565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b61036f610d4f565b60405161021a9190611a4f565b610384610da7565b60405161021a9b9a9998979695949392919061198b565b6101e761102f565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b61021060065481565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b6102107f000000000000000000000000000000000000000000000000000000000000000081565b600754610210565b6102106104373660046118fb565b611630565b6102eb7f000000000000000000000000000000000000000000000000000000000000000081565b600054610210565b6102eb7f000000000000000000000000000000000000000000000000000000000000000081565b61036f611640565b61021060055481565b60015461031d90610100900460ff1681565b6101e7611696565b6102106104cb3660046118fb565b61181c565b61036f61182c565b7f000000000000000000000000000000000000000000000000000000000000000042111561058d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f566f74696e67436f6e74726163743a20566f746520616c726561647920656e6460448201527f656400000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600154610100900460ff1615610625576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792076657460448201527f6f656400000000000000000000000000000000000000000000000000000000006064820152608401610584565b60015460ff16156106b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792065786560448201527f63757465640000000000000000000000000000000000000000000000000000006064820152608401610584565b6000548110610723576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f566f74696e67436f6e74726163743a20496e76616c6964206f7074696f6e00006044820152606401610584565b6007546040517f65eaf8bc00000000000000000000000000000000000000000000000000000000815290156004820152336024820152604481018290527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906365eaf8bc90606401600060405180830381600087803b1580156107bb57600080fd5b505af11580156107cf573d6000803e3d6000fd5b50503360009081526003602052604090205491505080156108585733600090815260026020526040902054600480548391908390811061081157610811611b44565b90600052602060002001546108269190611afe565b6004828154811061083957610839611b44565b600091825260209091200155600554610853908390611afe565b600555505b6040517f426233600000000000000000000000000000000000000000000000000000000081523360048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063426233609060240160206040518083038186803b1580156108e057600080fd5b505afa1580156108f4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109189190611914565b9050600081116109aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f566f74696e67436f6e74726163743a204e6f74207374616b656420746f20766f60448201527f74650000000000000000000000000000000000000000000000000000000000006064820152608401610584565b3360009081526002602090815260408083208690556003909152902081905560048054829190859081106109e0576109e0611b44565b90600052602060002001546109f59190611aa9565b60048481548110610a0857610a08611b44565b600091825260209091200155600554610a22908290611aa9565b6005819055507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638b0e9f3f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8e57600080fd5b505afa158015610aa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac69190611914565b600655505050565b7f00000000000000000000000000000000000000000000000000000000000000004211158015610b065750600154610100900460ff16155b8015610b15575060015460ff16155b15610d2b576040517f4262336000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301526000917f00000000000000000000000000000000000000000000000000000000000000009091169063426233609060240160206040518083038186803b158015610ba657600080fd5b505afa158015610bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bde9190611914565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260409020549091508015801590610c165750818114155b15610cc55773ffffffffffffffffffffffffffffffffffffffff83166000908152600260209081526040808320546003909252909120839055600480548491849184908110610c6757610c67611b44565b9060005260206000200154610c7c9190611afe565b610c869190611aa9565b60048281548110610c9957610c99611b44565b90600052602060002001819055508282600554610cb69190611afe565b610cc09190611aa9565b600555505b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638b0e9f3f6040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8e57600080fd5b50565b60008181548110610d3e57600080fd5b600091825260209091200154905081565b60606007805480602002602001604051908101604052809291908181526020018280548015610d9d57602002820191906000526020600020905b815481526020019060010190808311610d89575b5050505050905090565b600080600060606000806000610dbb611882565b6060610dc56118a0565b60408051808201825260015460ff808216151583526101009091041615156020808301919091528251606081810185527f000000000000000000000000000000000000000000000000000000000000000082527f000000000000000000000000000000000000000000000000000000000000000082840152600654828601526000805486518186028101860190975280875291957f0000000000000000000000000000000000000000000000000000000000000000957f0000000000000000000000000000000000000000000000000000000000000000957f00000000000000000000000000000000000000000000000000000000000000009593947f0000000000000000000000000000000000000000000000000000000000000000947f0000000000000000000000000000000000000000000000000000000000000000947f00000000000000000000000000000000000000000000000000000000000000009493600493600792918a9190830182828015610f6157602002820191906000526020600020905b815481526020019060010190808311610f4d575b5050505050975082805480602002602001604051908101604052809291908181526020018280548015610fb357602002820191906000526020600020905b815481526020019060010190808311610f9f575b505050505092508080548060200260200160405190810160405280929190818152602001828054801561100557602002820191906000526020600020905b815481526020019060010190808311610ff1575b505050505090509a509a509a509a509a509a509a509a509a509a509a50909192939495969798999a565b6110797f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611aa9565b4211611107576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f566f74696e67436f6e74726163743a20457865637574652064656c6179206e6f60448201527f74207061737420796574000000000000000000000000000000000000000000006064820152608401610584565b600154610100900460ff161561119f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792076657460448201527f6f656400000000000000000000000000000000000000000000000000000000006064820152608401610584565b60015460ff1615611232576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f566f74696e67436f6e74726163743a20566f746520616c72656164792065786560448201527f63757465640000000000000000000000000000000000000000000000000000006064820152608401610584565b6007546112c1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f566f74696e67436f6e74726163743a204578656375746520706172616d206e6f60448201527f7420646566696e656400000000000000000000000000000000000000000000006064820152608401610584565b7f0000000000000000000000000000000000000000000000000000000000000000600554101561134d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f566f74696e67436f6e74726163743a2051756f72756d206e6f74206d657400006044820152606401610584565b600460018154811061136157611361611b44565b9060005260206000200154600460008154811061138057611380611b44565b9060005260206000200154116113f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f566f74696e67436f6e74726163743a204d616a6f72697479206e6f74206d65746044820152606401610584565b7f00000000000000000000000000000000000000000000000000000000000000006005546114209190611ac1565b670de0b6b3a7640000600460008154811061143d5761143d611b44565b90600052602060002001546114529190611ac1565b116114df576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f566f74696e67436f6e74726163743a205468726573686f6c64206e6f74206d6560448201527f74000000000000000000000000000000000000000000000000000000000000006064820152608401610584565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016811790556040517f8af7c64900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690638af7c6499061157c90600790600401611a62565b600060405180830381600087803b15801561159657600080fd5b505af11580156115aa573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166331a38c896040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561161657600080fd5b505af115801561162a573d6000803e3d6000fd5b50505050565b60078181548110610d3e57600080fd5b60606000805480602002602001604051908101604052809291908181526020018280548015610d9d5760200282019190600052602060002090815481526020019060010190808311610d89575050505050905090565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461175b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4f535741505f566f74696e67436f6e74726163743a204e6f742066726f6d204760448201527f6f7665726e616e636500000000000000000000000000000000000000000000006064820152608401610584565b60015460ff16156117ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f535741505f566f74696e67436f6e74726163743a20416c726561647920657860448201527f65637574656400000000000000000000000000000000000000000000000000006064820152608401610584565b600180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b60048181548110610d3e57600080fd5b60606004805480602002602001604051908101604052809291908181526020018280548015610d9d5760200282019190600052602060002090815481526020019060010190808311610d89575050505050905090565b60405180604001604052806002906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b6000602082840312156118d057600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146118f457600080fd5b9392505050565b60006020828403121561190d57600080fd5b5035919050565b60006020828403121561192657600080fd5b5051919050565b600081518084526020808501945080840160005b8381101561195d57815187529582019590820190600101611941565b509495945050505050565b8060005b600381101561162a57815184526020938401939091019060010161196c565b60006101c073ffffffffffffffffffffffffffffffffffffffff8e16835260208d818501528c60408501528160608501526119c88285018d61192d565b91508a60808501528960a08501528860c085015260e084018860005b6002811015611a035781511515835291830191908301906001016119e4565b50505050828103610120840152611a1a818761192d565b9050611a2a610140840186611968565b8281036101a0840152611a3d818561192d565b9e9d5050505050505050505050505050565b6020815260006118f4602083018461192d565b6020808252825482820181905260008481528281209092916040850190845b81811015611a9d57835483526001938401939285019201611a81565b50909695505050505050565b60008219821115611abc57611abc611b15565b500190565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611af957611af9611b15565b500290565b600082821015611b1057611b10611b15565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea2646970667358221220fb893253c0838414dd893d5fa2f15a58c12b422ae36a85f01367b3942041db0b64736f6c63430008060033a2646970667358221220b6d07fa78ad5357f62750c21f7e780108ae0334d7d004690fd816f7a03fcad7464736f6c63430008060033"
    };
});
define("@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingRegistry.ts", ["require", "exports", "@ijstech/eth-contract", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingRegistry.json.ts"], function (require, exports, eth_contract_21, OSWAP_VotingRegistry_json_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_VotingRegistry = void 0;
    class OSWAP_VotingRegistry extends eth_contract_21.Contract {
        constructor(wallet, address) {
            super(wallet, address, OSWAP_VotingRegistry_json_1.default.abi, OSWAP_VotingRegistry_json_1.default.bytecode);
            this.assign();
        }
        deploy(votingManager) {
            return this.__deploy([votingManager]);
        }
        assign() {
            let trollRegistry_call = async () => {
                let result = await this.call('trollRegistry');
                return result;
            };
            this.trollRegistry = trollRegistry_call;
            let votingManager_call = async () => {
                let result = await this.call('votingManager');
                return result;
            };
            this.votingManager = votingManager_call;
            let newVoteParams = (params) => [params.executor, this.wallet.utils.stringToBytes32(params.name), this.wallet.utils.stringToBytes32(params.options), this.wallet.utils.toString(params.quorum), this.wallet.utils.toString(params.threshold), this.wallet.utils.toString(params.voteEndTime), this.wallet.utils.toString(params.executeDelay), this.wallet.utils.stringToBytes32(params.executeParam)];
            let newVote_send = async (params) => {
                let result = await this.send('newVote', newVoteParams(params));
                return result;
            };
            let newVote_call = async (params) => {
                let result = await this.call('newVote', newVoteParams(params));
                return;
            };
            this.newVote = Object.assign(newVote_send, {
                call: newVote_call
            });
        }
    }
    exports.OSWAP_VotingRegistry = OSWAP_VotingRegistry;
});
define("@openswap/cross-chain-bridge-sdk/contracts/index.ts", ["require", "exports", "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.ts", "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC20/ERC20.ts", "@openswap/cross-chain-bridge-sdk/contracts/@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.ts", "@openswap/cross-chain-bridge-sdk/contracts/Authorization.ts", "@openswap/cross-chain-bridge-sdk/contracts/MOCK_TrollRegistry.ts", "@openswap/cross-chain-bridge-sdk/contracts/MintableToken.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVault.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_BridgeVaultTrollRegistry.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistry.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ChainRegistryExecutor.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStore.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ConfigStoreTradeVault.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_ContractProxy.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainTrollRegistry.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_MainChainVotingExecutor.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_RouterVaultWrapper.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainTrollRegistry.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_SideChainVotingExecutor.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingContract.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingManager.ts", "@openswap/cross-chain-bridge-sdk/contracts/OSWAP_VotingRegistry.ts"], function (require, exports, ERC1967Proxy_1, ERC20_1, ERC721Holder_1, Authorization_1, MOCK_TrollRegistry_1, MintableToken_1, OSWAP_BridgeVault_1, OSWAP_BridgeVaultTrollRegistry_1, OSWAP_ChainRegistry_1, OSWAP_ChainRegistryExecutor_1, OSWAP_ConfigStore_1, OSWAP_ConfigStoreTradeVault_1, OSWAP_ContractProxy_1, OSWAP_MainChainTrollRegistry_1, OSWAP_MainChainVotingExecutor_1, OSWAP_RouterVaultWrapper_1, OSWAP_SideChainTrollRegistry_1, OSWAP_SideChainVotingExecutor_1, OSWAP_VotingContract_1, OSWAP_VotingManager_1, OSWAP_VotingRegistry_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OSWAP_VotingRegistry = exports.OSWAP_VotingManager = exports.OSWAP_VotingContract = exports.OSWAP_SideChainVotingExecutor = exports.OSWAP_SideChainTrollRegistry = exports.OSWAP_RouterVaultWrapper = exports.OSWAP_MainChainVotingExecutor = exports.OSWAP_MainChainTrollRegistry = exports.OSWAP_ContractProxy = exports.OSWAP_ConfigStoreTradeVault = exports.OSWAP_ConfigStore = exports.OSWAP_ChainRegistryExecutor = exports.OSWAP_ChainRegistry = exports.OSWAP_BridgeVaultTrollRegistry = exports.OSWAP_BridgeVault = exports.MintableToken = exports.MOCK_TrollRegistry = exports.Authorization = exports.ERC721Holder = exports.ERC20 = exports.ERC1967Proxy = void 0;
    Object.defineProperty(exports, "ERC1967Proxy", { enumerable: true, get: function () { return ERC1967Proxy_1.ERC1967Proxy; } });
    Object.defineProperty(exports, "ERC20", { enumerable: true, get: function () { return ERC20_1.ERC20; } });
    Object.defineProperty(exports, "ERC721Holder", { enumerable: true, get: function () { return ERC721Holder_1.ERC721Holder; } });
    Object.defineProperty(exports, "Authorization", { enumerable: true, get: function () { return Authorization_1.Authorization; } });
    Object.defineProperty(exports, "MOCK_TrollRegistry", { enumerable: true, get: function () { return MOCK_TrollRegistry_1.MOCK_TrollRegistry; } });
    Object.defineProperty(exports, "MintableToken", { enumerable: true, get: function () { return MintableToken_1.MintableToken; } });
    Object.defineProperty(exports, "OSWAP_BridgeVault", { enumerable: true, get: function () { return OSWAP_BridgeVault_1.OSWAP_BridgeVault; } });
    Object.defineProperty(exports, "OSWAP_BridgeVaultTrollRegistry", { enumerable: true, get: function () { return OSWAP_BridgeVaultTrollRegistry_1.OSWAP_BridgeVaultTrollRegistry; } });
    Object.defineProperty(exports, "OSWAP_ChainRegistry", { enumerable: true, get: function () { return OSWAP_ChainRegistry_1.OSWAP_ChainRegistry; } });
    Object.defineProperty(exports, "OSWAP_ChainRegistryExecutor", { enumerable: true, get: function () { return OSWAP_ChainRegistryExecutor_1.OSWAP_ChainRegistryExecutor; } });
    Object.defineProperty(exports, "OSWAP_ConfigStore", { enumerable: true, get: function () { return OSWAP_ConfigStore_1.OSWAP_ConfigStore; } });
    Object.defineProperty(exports, "OSWAP_ConfigStoreTradeVault", { enumerable: true, get: function () { return OSWAP_ConfigStoreTradeVault_1.OSWAP_ConfigStoreTradeVault; } });
    Object.defineProperty(exports, "OSWAP_ContractProxy", { enumerable: true, get: function () { return OSWAP_ContractProxy_1.OSWAP_ContractProxy; } });
    Object.defineProperty(exports, "OSWAP_MainChainTrollRegistry", { enumerable: true, get: function () { return OSWAP_MainChainTrollRegistry_1.OSWAP_MainChainTrollRegistry; } });
    Object.defineProperty(exports, "OSWAP_MainChainVotingExecutor", { enumerable: true, get: function () { return OSWAP_MainChainVotingExecutor_1.OSWAP_MainChainVotingExecutor; } });
    Object.defineProperty(exports, "OSWAP_RouterVaultWrapper", { enumerable: true, get: function () { return OSWAP_RouterVaultWrapper_1.OSWAP_RouterVaultWrapper; } });
    Object.defineProperty(exports, "OSWAP_SideChainTrollRegistry", { enumerable: true, get: function () { return OSWAP_SideChainTrollRegistry_1.OSWAP_SideChainTrollRegistry; } });
    Object.defineProperty(exports, "OSWAP_SideChainVotingExecutor", { enumerable: true, get: function () { return OSWAP_SideChainVotingExecutor_1.OSWAP_SideChainVotingExecutor; } });
    Object.defineProperty(exports, "OSWAP_VotingContract", { enumerable: true, get: function () { return OSWAP_VotingContract_1.OSWAP_VotingContract; } });
    Object.defineProperty(exports, "OSWAP_VotingManager", { enumerable: true, get: function () { return OSWAP_VotingManager_1.OSWAP_VotingManager; } });
    Object.defineProperty(exports, "OSWAP_VotingRegistry", { enumerable: true, get: function () { return OSWAP_VotingRegistry_1.OSWAP_VotingRegistry; } });
});
define("@openswap/cross-chain-bridge-sdk", ["require", "exports", "@openswap/cross-chain-bridge-sdk/contracts/index.ts"], function (require, exports, Contracts) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Contracts = void 0;
    ///<amd-module name='@openswap/cross-chain-bridge-sdk'/> 
    exports.Contracts = Contracts;
});
