interface ProviderConfig {
    key: string;
    dexId?: number;
    supportedChains?: number[];
}

const ProviderConfigMap: { [key: string]: ProviderConfig } = {
    OpenSwap: {
        key: 'OpenSwap',
        dexId: 1,
        supportedChains: [42, 56, 97, 4002, 43113, 43114, 137, 80001, 13370, 338, 42161, 421613]
    },
    Uniswap: {
        key: 'Uniswap',
        dexId: 10,
        supportedChains: [1, 42]
    },
    SushiSwap: {
        key: 'SushiSwap',
        dexId: 8,
        supportedChains: [1, 42, 137, 250, 43113, 43114, 42161]
    },
    PancakeSwap: {
        key: 'PancakeSwap',
        dexId: 2,
        supportedChains: [56, 97]
    },
    BakerySwap: {
        key: 'BakerySwap',
        dexId: 3,
        supportedChains: [56, 97]
    },
    BurgerSwap: {
        key: 'BurgerSwap',
        dexId: 4,
        supportedChains: []
    },
    Oracle: {
        key: 'Oracle',
        dexId: 5,
        supportedChains: [56, 97, 43113, 43114]
    },
    IFSwapV1: {
        key: 'IFSwapV1',
        dexId: 7,
        supportedChains: [56]
    },
    IFSwapV3: {
        key: 'IFSwapV3',
        dexId: 18,
        supportedChains: [56]
    },
    Hybrid: {
        key: 'Hybrid',
        dexId: 0,
        supportedChains: [42, 56, 97, 43113, 43114]
    },
    QuickSwap: {
        key: 'QuickSwap',
        dexId: 9,
        supportedChains: [137]
    },
    BiSwap: {
        key: 'BiSwap',
        dexId: 11,
        supportedChains: [56]
    },
    Pangolin: {
        key: 'Pangolin',
        dexId: 12,
        supportedChains: [43113, 43114]
    },
    TraderJoe: {
        key: 'TraderJoe',
        dexId: 13,
        supportedChains: [43114]
    },
    SpiritSwap: {
        key: 'SpiritSwap',
        dexId: 15,
        supportedChains: [250]
    },
    SpookySwap: {
        key: 'SpookySwap',
        dexId: 14,
        supportedChains: [250]
    }
};

export {
    ProviderConfig,
    ProviderConfigMap
}