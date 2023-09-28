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
      // "42": {
      //   "tokenAddress": "0xDcdAFd9461c2df544F6E2165481E8174e45fEbD8",
      //   "vaultRegistryAddress": "0x9580C567daC0EC4D05bB64a078e6fCCDc2103B64",
      //   "vaultAddress": "0x07578ec965a54bfBdAA83db7261F442d315eC6c2",
      //   "softCap": 100000,
      // },
      "56": {
        "tokenAddress": "0x55d398326f99059fF775485246999027B3197955",
        "vaultRegistryAddress": "0x1026deABF37C452F8aF8672cC9B9181fab709154",
        "vaultAddress": "0xE9CAAFD124831562423FE129b02e938Cc33B45E2",
        "vaultDecimals": 18,
        "softCap": 100000,
      },
      "97": { //v9
        "tokenAddress": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
        "vaultRegistryAddress": "0xABEe7701A960D4ab10456b33D3fCd606335A09B3",
        "vaultAddress": "0x0574C45032FcCFB91a652D2800Fa5219343b4991",
        "softCap": 100000,
      },
      "43113": { //v9
        "tokenAddress": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
        "vaultRegistryAddress": "0xD12E87F7474442a7a6611f92E14C7F2303f97d6d",
        "vaultAddress": "0xa9d579E1a07C44889daBd537cdb6C70840594e9B",
        "softCap": 100000,
      },
      "43114": {
        "tokenAddress": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
        "vaultRegistryAddress": "0x2e102E6E9546433aB9c2a32ddd6eAFDfE987910B",
        "vaultAddress": "0x55570d7EcAeFF86a6425815def25447A8b14A222",
        "vaultDecimals": 18,
        "softCap": 100000,
      },
      "80001": { //v5
        "tokenAddress": "0xF6Bf7c1213fdCe4AA92e7c91865cD586891B9cF6",
        "vaultRegistryAddress": "0x8E5fcD46C6Dc74180C89572bAd8822cC0Eff3622",
        "vaultAddress": "0x90Dd6EF27dBB77CD55Da6818414F3A3185f6a7f6",
        "softCap": 100000,
      },
    }
  },
  {
    "name": "OSWAP",
    "vaultType": VaultType.Project,
    "vaults": {
      // "42": {
      //   "tokenAddress": "0x28A6a9079fA8e041179cD13F4652af2B315b6fd8",
      //   "vaultRegistryAddress": "0x911567173f33377784a934DC071a999F1dA4bd0C",
      //   "vaultAddress": "0x13c682d5F11927c24022a743B0510A7C23649667",
      //   "softCap": 100000,
      // },
      "56": {
        "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
        "vaultRegistryAddress": "0xd8f7a9E2cE096670A27238487a62e1e000334F81",
        "vaultAddress": "0x65d6d677e102C2758224a797f7fb2b60DBeA8635",
        "softCap": 30000,
        "vaultDecimals": 18
      },
      "97": { //v9
        "tokenAddress": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
        "vaultRegistryAddress": "0xEdA5F1946b0524d60EaB3DB0CC40575CeEBCa749",
        "vaultAddress": "0xa27D23fAe232eb0d0965299A9C41Ef3d1156020D",
        "softCap": 30000,
      },
      "43113": { //v9
        "tokenAddress": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
        "vaultRegistryAddress": "0x04dbb0174381a007A3EAbA8C4D52283dA20A8B8c",
        "vaultAddress": "0x1b6196C1d2b5bfc9b89d914990d2bD4a07E92a26",
        "fixedStakingApr": "18.25",
        "softCap": 30000,
      },
      "43114": {
        "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
        "vaultRegistryAddress": "0x39dfbdF2a8b4719D009F3CEE1d000899FeD8B00a",
        "vaultAddress": "0x8Af3e8596acE65D9c1EDE6d5356a34eAb46a46f5",
        "vaultDecimals": 18,
        "softCap": 30000,
      },
      "80001": {
        "tokenAddress": "0xA9d603421e2777b8BEa685272611A01fF3bc6523",
        "vaultRegistryAddress": "0x4c0f2C0acb7a5728a75EE35820Ed14e98F24e8b9",
        "vaultAddress": "0x2ED4CE8f09F606ea253bF57c45e83d8BD45Ce572",
        "softCap": 100000,
      },
    }
  },
  {
    "name": "PROJECT",
    "vaultType": VaultType.Project,
    "vaults": {
      "97": { 
        "tokenAddress": "0x3cb66f6057d80015D0cf7c4c4e00dfC79ff6c836",
        "vaultRegistryAddress": "0x6Be03Ad6151B7DD7dd5A8A860202e20691ab124b",
        "vaultAddress": "0x2B05599641f3f0d96d0D1F2eec4237406638fB8F",
        "softCap": 30000,
      },
      "43113": { 
        "tokenAddress": "0x1B23B0dBB8D142596443999Dd0197299Fa17eb03",
        "vaultRegistryAddress": "0xB120481872288dF6bAEcc1D4eFEC61387ce1891c",
        "vaultAddress": "0x7E8c8155516fad72419BAd2dDaE48fC686b4590A",
        "softCap": 30000,
      }
    }
  }
]

const CrossChainAddressMap: { [chainId: number]: { wrapperAddress: string } } = {
  56: {
    wrapperAddress: '0xce194324a8ddaf43e5c00f38593f37c9f21ed297',
  },
  // 97: { //v9
  //   wrapperAddress: '0x97ACbBCe88c6358496800893397ABf5d071Af3A3'
  // },
  // 43113: { //v89
  //   wrapperAddress: '0xA8e373C6f31280eAFC93AF14df4a6663A56c09a5'
  // },
  97: { //v9
    wrapperAddress: '0x0a097c562B796203318783581B659EE8005C3988'
  },
  43113: { //v89
    wrapperAddress: '0xa60c76A648018b5f4124984618355590Ed79c8B7'
  },
  43114: {
    wrapperAddress: '0xcD050070b53924E1965418d7D940fa2ABB4302f3',
  },
  80001: {
    wrapperAddress: '0x788a9036b682AdB247A30Ec3628DE11735B67718'
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
    '0x29386b60e0a9a1a30e1488ada47256577ca2c385': '0x6af1CdfBe372C922405C0CD9003CE7758250E8E5', //USDT
  },
  43113: {
    '0x1B23B0dBB8D142596443999Dd0197299Fa17eb03': '0xe4dfc0E5772405483F71FE1c234290d62C102e02',  //PROJECT 
    '0x78d9d80e67bc80a11efbf84b7c8a65da51a8ef3c': '0xe4dfc0E5772405483F71FE1c234290d62C102e02', //OSWAP
    '0xb9c31ea1d475c25e58a1be1a46221db55e5a7c6e': '0xA79D4C012AaeafD45630af1298DC3e18596fF081', //USDT
  },
  43114: {
    '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93': '0xd9df1285e2effbaaa580513b256bd21c041973f7', // OSWAP
    '0xc7198437980c041c805A1EDcbA50c1Ce5db95118': '0x6979c00cc49e0b5e77a920b25a0e16445b0f665a', // USDT
  },
  // 80001: {
  //   '0xA9d603421e2777b8BEa685272611A01fF3bc6523': '0x7d564Ca1A9fb5a6D2275e62A97333AdaA5d2Cbe6', //OSWAP
  //   '0xf6bf7c1213fdce4aa92e7c91865cd586891b9cf6': '0xc2817961e17E24853856cC355E902C5D1B8f07E9', //USDT
  // }
}

const crossChainSupportedChainIds = [
  { chainId: 56 },
  { chainId: 97, isTestnet: true },
  { chainId: 43113, isTestnet: true },
  { chainId: 43114 },
  { chainId: 80001, isTestnet: true },
];


const getBridgeVaultVersion = (chainId: number): string => {
  const isTestnet = crossChainSupportedChainIds.find(v => v.chainId === chainId && v.isTestnet);
  // Testnet
  if (isTestnet) return '0.1.9';
  // Mainnet
  return '1.1.1';
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
  bridgeVaultConstantMap
}
