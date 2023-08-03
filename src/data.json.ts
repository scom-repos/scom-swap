const InfuraId = "adc596bf88b648e2a8902bc9093930c5";

export default {
  "infuraId": InfuraId,
  "networks": [  
    {
      "chainId": 97
    },    
    {
      "chainId": 43113
    }       
  ],
  "proxyAddresses": {
    "43113": "0x83aaf000f0a09f860564e894535cc18f5a50f627"
  },
  "ipfsGatewayUrl": "https://ipfs.scom.dev/ipfs/",
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
        "name": "USDT",
        "address": "0x29386B60e0A9A1a30e1488ADA47256577ca2C385",
        "symbol": "USDT",
        "decimals": 6,
        "chainId": 97
      },
      {
        "name": "OpenSwap",
        "address": "0x45eee762aaeA4e5ce317471BDa8782724972Ee19",
        "symbol": "OSWAP",
        "decimals": 18,
        "chainId": 97
      },
      {
        "name": "Tether USD",
        "address": "0xb9C31Ea1D475c25E58a1bE1a46221db55E5A7C6e",
        "symbol": "USDT.e",
        "decimals": 6,
        "chainId": 43113
      },
      {
        "name": "OpenSwap",
        "address": "0x78d9D80E67bC80A11efbf84B7c8A65Da51a8EF3C",
        "symbol": "OSWAP",
        "decimals": 18,
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