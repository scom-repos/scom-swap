const InfuraId = "adc596bf88b648e2a8902bc9093930c5";

export default {
  "infuraId": InfuraId,
  "apiEndpoints": {
    "tradingRouting": "https://route.openswap.xyz/trading/v1/route",
    "bridgeRouting": "https://route.openswap.xyz/trading/v1/cross-chain-route",
    "bridgeVault": "https://route.openswap.xyz/trading/v1/bridge-vault",
    "bonds": "https://route.openswap.xyz/trading/v1/bonds-by-chain-id-and-vault-troll-registry"
  },
  "proxyAddresses": {
    "43113": "0x83aaf000f0a09f860564e894535cc18f5a50f627"
  },
  "defaultBuilderData": {
    "providers": [
      {
        "key": "OpenSwap",
        "chainId": 97
      },
      {
        "key": "OpenSwap",
        "chainId": 43113
      }
    ],
    "category": "fixed-pair",
    "tokens": [
      {
        "address": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
        "chainId": 97
      },
      {
        "address": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
        "chainId": 97
      },
      {
        "address": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
        "chainId": 43113
      },
      {
        "address": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
        "chainId": 43113
      }
    ],
    "defaultChainId": 43113,
    "networks": [
      {
        "chainId": 43113
      },
      {
        "chainId": 97
      }
    ],
    "wallets": [
      {
        "name": "metamask"
      }
    ],
    "showHeader": true,
    "showFooter": true
  }
}