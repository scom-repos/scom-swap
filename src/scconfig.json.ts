const InfuraId = "adc596bf88b648e2a8902bc9093930c5";

export default {
  "name": "@pageblock-swap/main",
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
      "chainId": 97,
      "isMainChain": true,
      "isCrossChainSupported": true,
      "explorerName": "BSCScan",
      "explorerTxUrl": "https://testnet.bscscan.com/tx/",
      "explorerAddressUrl": "https://testnet.bscscan.com/address/",
      "isTestnet": true
    },    
    {
      "chainId": 43113,
      "shortName": "AVAX Testnet",
      "isCrossChainSupported": true,
      "explorerName": "SnowTrace",
      "explorerTxUrl": "https://testnet.snowtrace.io/tx/",
      "explorerAddressUrl": "https://testnet.snowtrace.io/address/",
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