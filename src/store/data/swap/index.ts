import Assets from '@swap/assets';
export interface ProviderConfig {
  caption: string;
  image: string;
  marketCode: Market;
  key: string;
  dexId?: number;
  supportedChains?: number[];
}
export enum Market {
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
export const ProviderConfigMap: { [key: string]: ProviderConfig } = {
  OpenSwap: {
    caption: 'OpenSwap',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.OPENSWAP,
    key: 'OpenSwap',
    dexId: 1,
    supportedChains: [42, 56, 97, 4002, 43113, 43114, 80001, 13370, 338]
  },
  Uniswap: {
    caption: 'Uniswap',
    image: Assets.fullPath('img/swap/uniswap-logo.svg'),
    marketCode: Market.UNISWAP,
    key: 'Uniswap',
    dexId: 10,
    supportedChains: [1, 42]
  },
  SushiSwap: {
    caption: 'SushiSwap',
    image: Assets.fullPath('img/swap/sushiswap-logo.svg'),
    marketCode: Market.SUSHISWAP,
    key: 'SushiSwap',
    dexId: 8,
    supportedChains: [1, 42, 137, 250, 43113, 43114]
  },
  PancakeSwap: {
    caption: 'PancakeSwap',
    image: Assets.fullPath('img/swap/pancakeswap.svg'),
    marketCode: Market.PANCAKESWAP,
    key: 'PancakeSwap',
    dexId: 2,
    supportedChains: [56, 97]
  },
  PancakeSwapV1: {
    caption: 'PancakeSwapV1',
    image: Assets.fullPath('img/pancakeswap.svg'),
    marketCode: Market.PANCAKESWAPV1,
    key: 'PancakeSwapV1'
  },
  BakerySwap: {
    caption: 'BakerySwap',
    image: Assets.fullPath('img/swap/bakeryswap.svg'),
    marketCode: Market.BAKERYSWAP,
    key: 'BakerySwap',
    dexId: 3,
    supportedChains: [56, 97]
  },
  BurgerSwap: {
    caption: 'BurgerSwap',
    image: Assets.fullPath('img/swap/burgerswap.png'),
    marketCode: Market.BURGERSWAP,
    key: 'BurgerSwap',
    dexId: 4
  },
  Oracle: {
    caption: 'Oracle',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.MIXED_QUEUE,
    key: 'Oracle',
    dexId: 5,
    supportedChains: [56, 97, 43113, 43114]
  },
  PeggedOracle: {
    caption: 'Pegged Queue',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.PEGGED_QUEUE,
    key: 'PeggedOracle'
  },
  GroupQueue: {
    caption: 'Group Queue',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.GROUP_QUEUE,
    key: 'GroupQueue'
  },
  IFSwapV1: {
    caption: 'IFSwapV1',
    image: Assets.fullPath('img/swap/IFSwapV1.png'),
    marketCode: Market.IFSWAPV1,
    key: 'IFSwapV1',
    dexId: 7,
    supportedChains: [56]
  },
  IFSwapV3: {
    caption: 'IFSwapV3',
    image: Assets.fullPath('img/swap/IFSwapV1.png'),
    marketCode: Market.IFSWAPV3,
    key: 'IFSwapV3',
    dexId: 18,
    supportedChains: [56]
  },
  OpenSwapV1: {
    caption: 'OpenSwapV1',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.OPENSWAPV1,
    key: 'OpenSwapV1'
  },
  Hybrid: {
    caption: 'Smart Router',
    image: Assets.fullPath('img/swap/openswap.png'),
    marketCode: Market.HYBRID,
    key: 'Hybrid',
    dexId: 0,
    supportedChains: [42, 56, 97, 43113, 43114]
  },
  QuickSwap: {
    caption: 'QuickSwap',
    image: Assets.fullPath('img/swap/quickswap-logo.png'),
    marketCode: Market.QUICKSWAP,
    key: 'QuickSwap',
    dexId: 9,
    supportedChains: [137]
  },
  BiSwap: {
    caption: 'BiSwap',
    image: Assets.fullPath('img/swap/biswapsvg.svg'),
    marketCode: Market.BISWAP,
    key: 'BiSwap',
    dexId: 11,
    supportedChains: [56]
  },
  Pangolin: {
    caption: 'Pangolin',
    image: Assets.fullPath('img/swap/pangolin.svg'),
    marketCode: Market.PANGOLIN,
    key: 'Pangolin',
    dexId: 12,
    supportedChains: [43113, 43114]
  },
  TraderJoe: {
    caption: 'TraderJoe',
    image: Assets.fullPath('img/swap/traderjoe.svg'),
    marketCode: Market.TRADERJOE,
    key: 'TraderJoe',
    dexId: 13,
    supportedChains: [43114]
  },
  SpiritSwap: {
    caption: 'SpiritSwap',
    image: Assets.fullPath('img/swap/spiritswap-logo.svg'),
    marketCode: Market.SPIRITSWAP,
    key: 'SpiritSwap',
    dexId: 15,
    supportedChains: [250]
  },
  SpookySwap: {
    caption: 'SpookySwap',
    image: Assets.fullPath('img/swap/spookyswap-logo.svg'),
    marketCode: Market.SPOOKYSWAP,
    key: 'SpookySwap',
    dexId: 14,
    supportedChains: [250]
  },
};

export const availableMarketsByChainId: { [key: number]: string[] } = {
  1: [
    // 'OpenSwap', 
    'Uniswap',
    'SushiSwap'
  ],
  // Rinkeby
  4: [
    'OpenSwap',
    'Uniswap',
    'SushiSwap'
  ],
  // Kovan
  42: [
    'OpenSwap',
    'Uniswap',
    'SushiSwap'
  ],
  // Binance Mainnet
  56: [
    'OpenSwap',
    //'OpenSwapV1', 
    'PancakeSwap',
    // 'PancakeSwapV1',
    'BakerySwap',
    //'BurgerSwap'
    'IFSwapV1',
    'BiSwap',
    'IFSwapV3',
  ],
  // Binance Test Chain
  97: [
    'OpenSwap',
    'PancakeSwap',
    'BakerySwap',
    'BurgerSwap'
  ],
  // Polygon
  137: [
    'SushiSwap',
    'QuickSwap',
  ],
  // Moonbeam
  1287: ['OpenSwap'],
  1337: ['OpenSwap'],
  // Amino Testnet    
  31337: ['OpenSwap'],
  // Mumbai, Polygon Testnet
  80001: ['OpenSwap'],
  // Avalance Mainnet C-Chain
  43114: ['OpenSwap', 'Pangolin', 'TraderJoe', 'SushiSwap'],
  // Avalance Fuji Testnet C-Chain
  43113: ['Pangolin', 'OpenSwap', 'SushiSwap'],
  // Fantom Opera
  250: ['SpiritSwap', 'SpookySwap', 'SushiSwap'],
  // Fantom Testnet
  4002: ['OpenSwap'],
  13370: ['OpenSwap'],
  // Cronos Mainnet
  //25: ['SpiritSwap', 'SpookySwap', 'SushiSwap'],
  // Cronos Testnet
  338: ['OpenSwap']
}
