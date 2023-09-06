import { DefaultERC20Tokens } from "@scom/scom-token-list";
const baseRoute = 'https://route.openswap.xyz';

const crossChainNativeTokenList: { [chainId: number]: { address: string, decimals: number, symbol: string, name: string, isNative: boolean, wethAddress: string } } = {
  42: { address: "ETH", decimals: 18, symbol: "ETH", name: 'ETH', isNative: true, wethAddress: "0xd0A1E359811322d97991E03f863a0C30C2cF029C" },
  56: { address: "BNB", decimals: 18, symbol: "BNB", name: 'BNB', isNative: true, wethAddress: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c" },
  97: { address: "BNB", decimals: 18, symbol: "BNB", name: 'BNB', isNative: true, wethAddress: "0xae13d989dac2f0debff460ac112a837c89baa7cd" },
  43113: { address: "AVAX", decimals: 18, symbol: "AVAX", name: 'AVAX', isNative: true, wethAddress: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c" },
  43114: { address: "AVAX", decimals: 18, symbol: "AVAX", name: 'AVAX', isNative: true, wethAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7" },
  80001: { address: "MATIC", decimals: 18, symbol: "MATIC", name: 'MATIC', isNative: true, wethAddress: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889" }
}

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
    // DEPRECATED VAULT
    "name": "OSWAP",
    "deprecated": true,
    "vaultType": VaultType.Project,
    "vaults": {
      "43113": {
        "tokenAddress": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
        "vaultRegistryAddress": "0xc8fC05a8e9D6dA2FF6395202b28eEbA4e5B21004",
        "vaultAddress": "0x67565ACa8abcc5C94b3E934AdC5C6965b3ed7F89"
      },
      "43114": {
        "tokenAddress": "0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93",
        "vaultRegistryAddress": "",
        "vaultAddress": "0x547C8B68Cb36410FFDceE6Ad4bA0c64FD21085Bb",
      },
    }
  },
]

const CrossChainAddressMap: { [chainId: number]: { wrapperAddress: string } } = {
  // 42: {
  //   wrapperAddress: '0x8ad7a50FA4647995126988c7fCEa242Bae2D832F'
  // },
  56: {
    wrapperAddress: '0xce194324a8ddaf43e5c00f38593f37c9f21ed297',
  },
  97: { //v9
    wrapperAddress: '0x97ACbBCe88c6358496800893397ABf5d071Af3A3'
  },
  43113: { //v89
    wrapperAddress: '0xA8e373C6f31280eAFC93AF14df4a6663A56c09a5'
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
  // 42: {
  //   '0x28a6a9079fa8e041179cd13f4652af2b315b6fd8': '0x226021E3582c89eF9a338be069dEcFD43acF0269',  //OSWAP 
  //   '0xdcdafd9461c2df544f6e2165481e8174e45febd8': '0xEF4Faa48Ee32E2D47503a821eb7E8607D52489AC', //USDT
  // },
  56: {
    '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93': '0xd9df1285e2effbaaa580513b256bd21c041973f7', // OSWAP
    '0x55d398326f99059fF775485246999027B3197955': '0x6979c00cc49e0b5e77a920b25a0e16445b0f665a', // USDT
  },
  97: {
    '0x45eee762aaea4e5ce317471bda8782724972ee19': '0x50C41443c3F05d469644675235249F375a5AA622',  //OSWAP 
    '0x29386b60e0a9a1a30e1488ada47256577ca2c385': '0x6af1CdfBe372C922405C0CD9003CE7758250E8E5', //USDT
  },
  43113: {
    '0x78d9d80e67bc80a11efbf84b7c8a65da51a8ef3c': '0xe4dfc0E5772405483F71FE1c234290d62C102e02', //OSWAP
    '0xb9c31ea1d475c25e58a1be1a46221db55e5a7c6e': '0xA79D4C012AaeafD45630af1298DC3e18596fF081', //USDT
  },
  43114: {
    '0xb32aC3C79A94aC1eb258f3C830bBDbc676483c93': '0xd9df1285e2effbaaa580513b256bd21c041973f7', // OSWAP
    '0xc7198437980c041c805A1EDcbA50c1Ce5db95118': '0x6979c00cc49e0b5e77a920b25a0e16445b0f665a', // USDT
  },
  80001: {
    '0xA9d603421e2777b8BEa685272611A01fF3bc6523': '0x7d564Ca1A9fb5a6D2275e62A97333AdaA5d2Cbe6', //OSWAP
    '0xf6bf7c1213fdce4aa92e7c91865cd586891b9cf6': '0xc2817961e17E24853856cC355E902C5D1B8f07E9', //USDT
  }
}

const crossChainSupportedChainIds = [
  { chainId: 56 },
  { chainId: 97, isTestnet: true },
  { chainId: 43113, isTestnet: true },
  { chainId: 43114 },
  { chainId: 80001, isTestnet: true },
];

interface ProviderConfig {
  caption: string;
  marketCode: Market;
  key: string;
  dexId?: number;
  supportedChains?: number[];
}

enum Market {
  OPENSWAP,
  UNISWAP,
  SUSHISWAP,
  PANCAKESWAPV1,
  PANCAKESWAP,
  BAKERYSWAP,
  BURGERSWAP,
  IFSWAPV1,
  OPENSWAPV1,
  HYBRID,
  MIXED_QUEUE,
  GROUP_QUEUE,
  QUICKSWAP,
  BISWAP,
  PANGOLIN,
  TRADERJOE,
  SPIRITSWAP,
  SPOOKYSWAP,
  PEGGED_QUEUE,
  HAKUSWAP,
  JETSWAP,
  IFSWAPV3
}

const ProviderConfigMap: { [key: string]: ProviderConfig } = {
  OpenSwap: {
    caption: 'OpenSwap',
    marketCode: Market.OPENSWAP,
    key: 'OpenSwap',
    dexId: 1,
    supportedChains: [42, 56, 97, 4002, 43113, 43114, 137, 80001, 13370, 338, 42161, 421613]
  },
  Uniswap: {
    caption: 'Uniswap',
    marketCode: Market.UNISWAP,
    key: 'Uniswap',
    dexId: 10,
    supportedChains: [1, 42]
  },
  SushiSwap: {
    caption: 'SushiSwap',
    marketCode: Market.SUSHISWAP,
    key: 'SushiSwap',
    dexId: 8,
    supportedChains: [1, 42, 137, 250, 43113, 43114, 42161]
  },
  PancakeSwap: {
    caption: 'PancakeSwap',
    marketCode: Market.PANCAKESWAP,
    key: 'PancakeSwap',
    dexId: 2,
    supportedChains: [56, 97]
  },
  PancakeSwapV1: {
    caption: 'PancakeSwapV1',
    marketCode: Market.PANCAKESWAPV1,
    key: 'PancakeSwapV1'
  },
  BakerySwap: {
    caption: 'BakerySwap',
    marketCode: Market.BAKERYSWAP,
    key: 'BakerySwap',
    dexId: 3,
    supportedChains: [56, 97]
  },
  BurgerSwap: {
    caption: 'BurgerSwap',
    marketCode: Market.BURGERSWAP,
    key: 'BurgerSwap',
    dexId: 4
  },
  Oracle: {
    caption: 'Oracle',
    marketCode: Market.MIXED_QUEUE,
    key: 'Oracle',
    dexId: 5,
    supportedChains: [56, 97, 43113, 43114]
  },
  PeggedOracle: {
    caption: 'Pegged Queue',
    marketCode: Market.PEGGED_QUEUE,
    key: 'PeggedOracle'
  },
  GroupQueue: {
    caption: 'Group Queue',
    marketCode: Market.GROUP_QUEUE,
    key: 'GroupQueue'
  },
  IFSwapV1: {
    caption: 'IFSwapV1',
    marketCode: Market.IFSWAPV1,
    key: 'IFSwapV1',
    dexId: 7,
    supportedChains: [56]
  },
  IFSwapV3: {
    caption: 'IFSwapV3',
    marketCode: Market.IFSWAPV3,
    key: 'IFSwapV3',
    dexId: 18,
    supportedChains: [56]
  },
  OpenSwapV1: {
    caption: 'OpenSwapV1',
    marketCode: Market.OPENSWAPV1,
    key: 'OpenSwapV1'
  },
  Hybrid: {
    caption: 'Smart Router',
    marketCode: Market.HYBRID,
    key: 'Hybrid',
    dexId: 0,
    supportedChains: [42, 56, 97, 43113, 43114]
  },
  QuickSwap: {
    caption: 'QuickSwap',
    marketCode: Market.QUICKSWAP,
    key: 'QuickSwap',
    dexId: 9,
    supportedChains: [137]
  },
  BiSwap: {
    caption: 'BiSwap',
    marketCode: Market.BISWAP,
    key: 'BiSwap',
    dexId: 11,
    supportedChains: [56]
  },
  Pangolin: {
    caption: 'Pangolin',
    marketCode: Market.PANGOLIN,
    key: 'Pangolin',
    dexId: 12,
    supportedChains: [43113, 43114]
  },
  TraderJoe: {
    caption: 'TraderJoe',
    marketCode: Market.TRADERJOE,
    key: 'TraderJoe',
    dexId: 13,
    supportedChains: [43114]
  },
  SpiritSwap: {
    caption: 'SpiritSwap',
    marketCode: Market.SPIRITSWAP,
    key: 'SpiritSwap',
    dexId: 15,
    supportedChains: [250]
  },
  SpookySwap: {
    caption: 'SpookySwap',
    marketCode: Market.SPOOKYSWAP,
    key: 'SpookySwap',
    dexId: 14,
    supportedChains: [250]
  }
};

const getBridgeVaultVersion = (chainId: number): string => {
  const isTestnet = crossChainSupportedChainIds.find(v => v.chainId === chainId && v.isTestnet);
  // Testnet
  if (isTestnet) return '0.1.9';
  // Mainnet
  return '1.1.1';
}

const getOpenSwapToken = (chainId: number) => {
  let tokens = DefaultERC20Tokens[chainId];
  if (!tokens) return null;
  for (const token of tokens) {
    if (token.name == "OpenSwap" && token.symbol == "OSWAP") return token;
  }
  return null;
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
  baseRoute,
  BridgeVaultGroupList,
  CrossChainAddressMap,
  crossChainNativeTokenList,
  crossChainSupportedChainIds,
  ProviderConfig,
  Market,
  ProviderConfigMap,
  MockOracleMap,
  getBridgeVaultVersion,
  getOpenSwapToken,
  bridgeVaultConstantMap
}
