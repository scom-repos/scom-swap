import { INetworkConfig } from '../global/index'

enum VaultType {
  Project = 'Project',
  Exchange = 'Exchange',
}

interface BridgeVaultConstant {
  tokenAddress: string,
  vaultRegistryAddress: string,
  vaultAddress: string,
  vaultDecimals?: number,
  softCap?: number,
  fixedStakingApr?: string
}

interface BridgeVaultGroup {
  name: string;
  vaultType: VaultType;
  vaults: { [key: string]: BridgeVaultConstant };
  deprecated?: boolean;
}

const BridgeVaultGroupList: BridgeVaultGroup[] = [
  {
    "name": "USDT",
    "vaultType": VaultType.Exchange,
    "vaults": {
      "56": {
        "tokenAddress": "0x55d398326f99059fF775485246999027B3197955",
        "vaultRegistryAddress": "0x1026deABF37C452F8aF8672cC9B9181fab709154",
        "vaultAddress": "0xE9CAAFD124831562423FE129b02e938Cc33B45E2",
        "vaultDecimals": 18,
        "softCap": 100000,
      },
      "43114": {
        "tokenAddress": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
        "vaultRegistryAddress": "0x2e102E6E9546433aB9c2a32ddd6eAFDfE987910B",
        "vaultAddress": "0x55570d7EcAeFF86a6425815def25447A8b14A222",
        "vaultDecimals": 18,
        "softCap": 100000,
      }
    }
  },
  {
    "name": "OSWAP",
    "vaultType": VaultType.Project,
    "vaults": {
      "56": {
        "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
        "vaultRegistryAddress": "0xd8f7a9E2cE096670A27238487a62e1e000334F81",
        "vaultAddress": "0x65d6d677e102C2758224a797f7fb2b60DBeA8635",
        "softCap": 30000,
        "vaultDecimals": 18
      },
      "43114": {
        "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
        "vaultRegistryAddress": "0x39dfbdF2a8b4719D009F3CEE1d000899FeD8B00a",
        "vaultAddress": "0x8Af3e8596acE65D9c1EDE6d5356a34eAb46a46f5",
        "vaultDecimals": 18,
        "softCap": 30000,
      }
    }
  },
  {
    "name": "PROJECT",
    "vaultType": VaultType.Project,
    "vaults": {
      "97": { 
        "tokenAddress": "0x3cb66f6057d80015D0cf7c4c4e00dfC79ff6c836",
        "vaultRegistryAddress": "0xC4E40bCf83cF57c932D82CA22Bc0B5b534BAa0D3",
        "vaultAddress": "0x8e99f3ACc224b0eafa109De0c3E95E34A20a1aDA",
        "softCap": 30000,
      },
      "43113": { 
        "tokenAddress": "0x1B23B0dBB8D142596443999Dd0197299Fa17eb03",
        "vaultRegistryAddress": "0xE72Ae94De5c2BA8C4f87bd8C7B2b8cF0ebCD1dAd",
        "vaultAddress": "0xe9Ee7b58404440ffC4A4941dECe71e273e6954EB",
        "softCap": 30000,
      }
    }
  }
]

const CrossChainAddressMap: { [chainId: number]: { wrapperAddress: string } } = {
  56: {
    wrapperAddress: '0xce194324a8ddaf43e5c00f38593f37c9f21ed297',
  },
  97: { 
    wrapperAddress: '0x7369D771e0680b2cb8e10c63D5D17fA6C4571a85'
  },
  43113: { 
    wrapperAddress: '0x945ddEa84f9b9A6f8231c698148E510d91355A33'
  },
  43114: {
    wrapperAddress: '0xcD050070b53924E1965418d7D940fa2ABB4302f3',
  }
}

// Dependent
const MockOracleMap: { [chainId: number]: { [token: string]: string } } = {
  56: {
    '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93': '0xd9df1285e2effbaaa580513b256bd21c041973f7', // OSWAP
    '0x55d398326f99059fF775485246999027B3197955': '0x6979c00cc49e0b5e77a920b25a0e16445b0f665a', // USDT
  },
  97: {
    '0x3cb66f6057d80015D0cf7c4c4e00dfC79ff6c836': '0x50C41443c3F05d469644675235249F375a5AA622',  //PROJECT 
    '0x45eee762aaea4e5ce317471bda8782724972ee19': '0x50C41443c3F05d469644675235249F375a5AA622',  //OSWAP
  },
  43113: {
    '0x1B23B0dBB8D142596443999Dd0197299Fa17eb03': '0xe4dfc0E5772405483F71FE1c234290d62C102e02',  //PROJECT
    '0x78d9d80e67bc80a11efbf84b7c8a65da51a8ef3c': '0xe4dfc0E5772405483F71FE1c234290d62C102e02', //OSWAP
  },
  43114: {
    '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93': '0xd9df1285e2effbaaa580513b256bd21c041973f7', // OSWAP
    '0xc7198437980c041c805A1EDcbA50c1Ce5db95118': '0x6979c00cc49e0b5e77a920b25a0e16445b0f665a', // USDT
  }
}

const crossChainSupportedChainIds = [
  { chainId: 56 },
  { chainId: 97, isTestnet: true },
  { chainId: 43113, isTestnet: true },
  { chainId: 43114 }
];


const getBridgeVaultVersion = (chainId: number): string => {
  const isTestnet = crossChainSupportedChainIds.find(v => v.chainId === chainId && v.isTestnet);
  // Testnet
  if (isTestnet) return '0.2.1';
  // Mainnet
  return '1.1.1';
}

const getBridgeSupportedChainList = (chainId: number, networks: INetworkConfig[]) => {
  const testnetSupportedList = networks.filter(v => crossChainSupportedChainIds.some(s => s.chainId === v.chainId && s.isTestnet));
  const mainnetSupportedList = networks.filter(v => !crossChainSupportedChainIds.some(s => s.chainId === v.chainId && s.isTestnet));
  const isMainnet = mainnetSupportedList.some((item: any) => item.chainId == chainId);
  return isMainnet ? mainnetSupportedList : testnetSupportedList;
}

const bridgeVaultConstantMap = BridgeVaultGroupList.reduce((acc, cur) => {
  if (cur.deprecated) return acc;
  if (acc[cur.name] == null) acc[cur.name] = {};
  Object.entries(cur.vaults).forEach(([chainId, v]) => {
    acc[cur.name][chainId] = v;
  })
  return acc;
}, {} as { [assetSymbol: string]: { [chainId: string]: BridgeVaultConstant } });

export {
  BridgeVaultGroupList,
  CrossChainAddressMap,
  crossChainSupportedChainIds,
  MockOracleMap,
  getBridgeVaultVersion,
  getBridgeSupportedChainList,
  bridgeVaultConstantMap
}
