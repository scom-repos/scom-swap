const InfuraId = "adc596bf88b648e2a8902bc9093930c5";

export default {
  "name": "@pageblock-swap/main",
  "env": "mainnet",
  "version": "0.1.0",
  "moduleDir": "src",
  "main": "@pageblock-swap/main",
  "modules": {
    "@pageblock-swap/assets": {
      "path": "assets"
    },
    "@pageblock-swap/global": {
      "path": "global"
    },
    "@pageblock-swap/store": {
      "path": "store"
    },
    "@pageblock-swap/result": {
      "path": "result"
    },
    "@pageblock-swap/main": {
      "path": "main"
    },
    "@pageblock-swap/token-selection": {
      "path": "token-selection"
    },
    "@pageblock-swap/swap-utils": {
      "path": "swap-utils"
    },
    "@pageblock-swap/queue-utils": {
      "path": "queue-utils"
    },
    "@pageblock-swap/price-info": {
      "path": "price-info"
    },
    "@pageblock-swap/transaction-settings": {
      "path": "transaction-settings"
    },
    "@pageblock-swap/expert-mode-settings": {
      "path": "expert-mode-settings"
    }
  },
  "dependencies": {
    "@ijstech/eth-contract": "*",
    "@scom/oswap-openswap-contract": "*",
    "@scom/oswap-chainlink-contract": "*",
    "@scom/oswap-oracle-adaptor-contract": "*",
    "@scom/scom-commission-proxy-contract": "*"
  },
  "infuraId": InfuraId,
  "networks": [
    {
      "name": "Ethereum",
      "chainId": 1,
      "img": "img/network/ethereumNetwork.svg",
      "rpc": `https://mainnet.infura.io/v3/${InfuraId}`,
      "explorerName": "Etherscan",
      "explorerTxUrl": "https://etherscan.io/tx/",
      "explorerAddressUrl": "https://etherscan.io/address/"
    },
    {
      "name": "Cronos Mainnet",
      "chainId": 25,
      "img": "img/network/cronosMainnet.svg",
      "isDisabled": true
    },
    {
      "name": "Binance Smart Chain",
      "chainId": 56,
      "img": "img/network/bscMainnet.svg",
      "rpc": "https://bsc-dataseed.binance.org/",
      "isMainChain": true,
      "explorerName": "BSCScan",
      "explorerTxUrl": "https://bscscan.com/tx/",
      "explorerAddressUrl": "https://bscscan.com/address/"
    },
    {
      "name": "Polygon",
      "chainId": 137,
      "img": "img/network/polygon.svg",
      "explorerName": "PolygonScan",
      "explorerTxUrl": "https://polygonscan.com/tx/",
      "explorerAddressUrl": "https://polygonscan.com/address/"
    },
    {
      "name": "Fantom Opera",
      "chainId": 250,
      "img": "img/network/fantom-ftm-logo.svg",
      "rpc": "https://rpc.ftm.tools/",
      "explorerName": "FTMScan",
      "explorerTxUrl": "https://ftmscan.com/tx/",
      "explorerAddressUrl": "https://ftmscan.com/address/"
    },
    {
      "name": "BSC Testnet",
      "chainId": 97,
      "img": "img/network/bscMainnet.svg",
      "rpc": "https://rpc.ankr.com/bsc_testnet_chapel",
      "isMainChain": true,
      "explorerName": "BSCScan",
      "explorerTxUrl": "https://testnet.bscscan.com/tx/",
      "explorerAddressUrl": "https://testnet.bscscan.com/address/",
      "isTestnet": true
    },
    {
      "name": "Cronos Mainnet",
      "chainId": 338,
      "img": "img/network/cronosMainnet.svg",
      "isDisabled": true
    },
    {
      "name": "Amino Testnet",
      "chainId": 31337,
      "img": "img/network/animoTestnet.svg",
      "isDisabled": true,
      "isTestnet": true
    },
    {
      "name": "Mumbai",
      "chainId": 80001,
      "img": "img/network/polygon.svg",
      "rpc": "https://matic-mumbai.chainstacklabs.com",
      "explorerName": "PolygonScan",
      "explorerTxUrl": "https://mumbai.polygonscan.com/tx/",
      "explorerAddressUrl": "https://mumbai.polygonscan.com/address/",
      "isDisabled": true,
      "isTestnet": true
    },
    {
      "name": "Avalanche FUJI C-Chain",
      "chainId": 43113,
      "img": "img/network/avax.svg",
      "rpc": "https://api.avax-test.network/ext/bc/C/rpc",
      "explorerName": "SnowTrace",
      "explorerTxUrl": "https://testnet.snowtrace.io/tx/",
      "explorerAddressUrl": "https://testnet.snowtrace.io/address/",
      "isTestnet": true
    },
    {
      "name": "Avalanche Mainnet C-Chain",
      "chainId": 43114,
      "img": "img/network/avax.svg",
      "rpc": "https://api.avax.network/ext/bc/C/rpc",
      "explorerName": "SnowTrace",
      "explorerTxUrl": "https://snowtrace.io/tx/",
      "explorerAddressUrl": "https://snowtrace.io/address/"
    },
    {
      "name": "Fantom Testnet",
      "chainId": 4002,
      "img": "img/network/fantom-ftm-logo.svg",
      "rpc": "https://rpc.testnet.fantom.network/",
      "explorerName": "FTMScan",
      "explorerTxUrl": "https://testnet.ftmscan.com/tx/",
      "explorerAddressUrl": "https://testnet.ftmscan.com/address/",
      "isDisabled": true,
      "isTestnet": true
    },
    {
      "name": "AminoX Testnet",
      "chainId": 13370,
      "img": "img/network/aminoXTestnet.svg",
      "isDisabled": true,
      "explorerName": "AminoX Explorer",
      "explorerTxUrl": "https://aminoxtestnet.blockscout.alphacarbon.network/tx/",
      "explorerAddressUrl": "https://aminoxtestnet.blockscout.alphacarbon.network/address/",
      "isTestnet": true
    }
  ],
  "proxyAddresses": {
    "97": "0x9602cB9A782babc72b1b6C96E050273F631a6870",
    "43113": "0x7f1EAB0db83c02263539E3bFf99b638E61916B96"
  },
  "ipfsGatewayUrl": "https://ipfs.scom.dev/ipfs/",
  "embedderCommissionFee": "0.01"
}