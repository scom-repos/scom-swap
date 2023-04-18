const InfuraId = "adc596bf88b648e2a8902bc9093930c5";

export default {
  "name": "@scom/scom-swap/main",
  "version": "0.1.0",
  "moduleDir": "src",
  "main": "@scom/scom-swap/main",
  "modules": {
    "@scom/scom-swap/assets": {
      "path": "assets"
    },
    "@scom/scom-swap/global": {
      "path": "global"
    },
    "@scom/scom-swap/store": {
      "path": "store"
    },
    "@scom/scom-swap/result": {
      "path": "result"
    },
    "@scom/scom-swap/main": {
      "path": "main"
    },
    "@scom/scom-swap/token-selection": {
      "path": "token-selection"
    },
    "@scom/scom-swap/swap-utils": {
      "path": "swap-utils"
    },
    "@scom/scom-swap/price-info": {
      "path": "price-info"
    },
    "@scom/scom-swap/transaction-settings": {
      "path": "transaction-settings"
    },
    "@scom/scom-swap/expert-mode-settings": {
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