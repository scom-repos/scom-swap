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
    "@pageblock-swap/crosschain-utils": {
      "path": "crosschain-utils"
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
    "@scom/oswap-cross-chain-bridge-contract": "*",
    "@scom/oswap-oracle-adaptor-contract": "*"
  }
}