import ScomNetworkPicker from '@scom/scom-network-picker';
import ScomTokenInput from '@scom/scom-token-input';

const chainIds = [1, 56, 137, 250, 97, 80001, 43113, 43114];
const networks = chainIds.map(v => { return { chainId: v } });

export function getBuilderSchema() {
    return {
        general: {
            dataSchema: {
                type: "object",
                properties: {
                    title: {
                        type: 'string'
                    },
                    logo: {
                        type: 'string',
                        format: 'data-url'
                    },
                    category: {
                        type: "string",
                        required: true,
                        enum: [
                            "fixed-pair",
                            "fixed-protocal",
                            "aggregator"
                        ]
                    },
                    networks: {
                        type: "array",
                        required: true,
                        items: {
                            type: "object",
                            properties: {
                                chainId: {
                                    type: "number",
                                    enum: chainIds,
                                    required: true
                                }
                            }
                        }
                    },
                    tokens: {
                        type: "array",
                        required: true,
                        items: {
                            type: "object",
                            properties: {
                                chainId: {
                                    type: "number",
                                    enum: chainIds,
                                    required: true
                                },
                                address: {
                                    type: "string"
                                }
                            }
                        }
                    },
                    providers: {
                        type: "array",
                        required: true,
                        items: {
                            type: "object",
                            properties: {
                                key: {
                                    type: "string",
                                    required: true
                                },
                                chainId: {
                                    type: "number",
                                    enum: chainIds,
                                    required: true
                                }
                            }
                        }
                    }
                }
            },
            uiSchema: {
                "type": "VerticalLayout",
                "elements": [
                    {
                        "type": "HorizontalLayout",
                        "elements": [
                            {
                                "type": "Control",
                                "scope": "#/properties/category"
                            }
                        ]
                    },
                    {
                        "type": "HorizontalLayout",
                        "elements": [
                            {
                                "type": "Categorization",
                                "elements": [
                                    {
                                        "type": "Category",
                                        "label": "Branding",
                                        "elements": [
                                            {
                                                "type": "HorizontalLayout",
                                                "elements": [
                                                    {
                                                        "type": "Control",
                                                        "scope": "#/properties/title"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "HorizontalLayout",
                                                "elements": [
                                                    {
                                                        "type": "Control",
                                                        "scope": "#/properties/logo"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "type": "Category",
                                        "label": "Networks",
                                        "elements": [
                                            {
                                                "type": "Control",
                                                "scope": "#/properties/networks",
                                                "options": {
                                                    "detail": {
                                                        "type": "VerticalLayout"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "type": "Category",
                                        "label": "Providers",
                                        "elements": [
                                            {
                                                "type": "Control",
                                                "scope": "#/properties/providers",
                                                "options": {
                                                    "detail": {
                                                        "type": "VerticalLayout"
                                                    }
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        "type": "Category",
                                        "label": "Tokens",
                                        "elements": [
                                            {
                                                "type": "Control",
                                                "scope": "#/properties/tokens"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            customControls(rpcWalletId: string) {
                let networkPickers: ScomNetworkPicker[] = [];
                let tokenInputs: ScomTokenInput[] = [];
                return {
                    "#/properties/networks/properties/chainId": customNetworkPicker(),
                    "#/properties/tokens/properties/chainId": {
                        render: () => {
                            const idx = networkPickers.length;
                            networkPickers[idx] = new ScomNetworkPicker(undefined, {
                                type: 'combobox',
                                networks,
                                onCustomNetworkSelected: () => {
                                    const chainId = networkPickers[idx].selectedNetwork?.chainId;
                                    tokenInputs[idx].targetChainId = chainId;
                                }
                            });
                            return networkPickers[idx];
                        },
                        getData: (control: ScomNetworkPicker) => {
                            return control.selectedNetwork?.chainId;
                        },
                        setData: (control: ScomNetworkPicker, value: number) => {
                            control.setNetworkByChainId(value);
                            const idx = networkPickers.findIndex(f => f === control);
                            if (tokenInputs[idx]) tokenInputs[idx].targetChainId = value;
                        }
                    },
                    "#/properties/tokens/properties/address": {
                        render: () => {
                            const idx = tokenInputs.length;
                            tokenInputs[idx] = new ScomTokenInput(undefined, {
                                type: 'combobox',
                                isBalanceShown: false,
                                isBtnMaxShown: false,
                                isInputShown: false
                            });
                            tokenInputs[idx].rpcWalletId = rpcWalletId;
                            const chainId = networkPickers[idx]?.selectedNetwork?.chainId;
                            if (chainId && tokenInputs[idx].targetChainId !== chainId) {
                                tokenInputs[idx].targetChainId = chainId;
                            }
                            return tokenInputs[idx];
                        },
                        getData: (control: ScomTokenInput) => {
                            return control.token?.address || control.token?.symbol;
                        },
                        setData: (control: ScomTokenInput, value: string) => {
                            control.address = value;
                        }
                    },
                    "#/properties/providers/properties/chainId": customNetworkPicker()
                }

            }
        },
        theme: {
            dataSchema: {
                type: 'object',
                properties: {
                    "dark": {
                        type: 'object',
                        properties: {
                            backgroundColor: {
                                type: 'string',
                                format: 'color'
                            },
                            fontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            inputBackgroundColor: {
                                type: 'string',
                                format: 'color'
                            },
                            inputFontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            primaryButtonBackground: {
                                type: 'string'
                            },
                            primaryButtonHoverBackground: {
                                type: 'string'
                            },
                            primaryButtonDisabledBackground: {
                                type: 'string'
                            },
                            maxButtonBackground: {
                                type: 'string'
                            },
                            maxButtonHoverBackground: {
                                type: 'string'
                            }
                        }
                    },
                    "light": {
                        type: 'object',
                        properties: {
                            backgroundColor: {
                                type: 'string',
                                format: 'color'
                            },
                            fontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            inputBackgroundColor: {
                                type: 'string',
                                format: 'color'
                            },
                            inputFontColor: {
                                type: 'string',
                                format: 'color'
                            },
                            primaryButtonBackground: {
                                type: 'string'
                            },
                            primaryButtonHoverBackground: {
                                type: 'string'
                            },
                            primaryButtonDisabledBackground: {
                                type: 'string'
                            },
                            maxButtonBackground: {
                                type: 'string'
                            },
                            maxButtonHoverBackground: {
                                type: 'string'
                            }
                        }
                    }
                }
            }
        }
    }
}

const customNetworkPicker = () => {
    return {
        render: () => {
            const networkPicker = new ScomNetworkPicker(undefined, {
                type: 'combobox',
                networks
            });
            return networkPicker;
        },
        getData: (control: ScomNetworkPicker) => {
            return control.selectedNetwork?.chainId;
        },
        setData: (control: ScomNetworkPicker, value: number) => {
            control.setNetworkByChainId(value);
        }
    }
}

export function getProjectOwnerSchema() {
    return {
        general: {
            dataSchema: {
                type: "object",
                properties: {
                    title: {
                        type: 'string'
                    },
                    logo: {
                        type: 'string',
                        format: 'data-url'
                    },
                    // category: {
                    //     type: "string",
                    //     required: true,
                    //     enum: [
                    //         "fixed-pair",
                    //         "fixed-protocal",
                    //         "aggregator"
                    //     ]
                    // },
                    // providers: {
                    //     type: "array",
                    //     required: true,
                    //     items: {
                    //         type: "object",
                    //         properties: {
                    //             key: {
                    //                 title: "Name",
                    //                 type: "string",
                    //                 oneOf: providerOptions,
                    //                 required: true
                    //             }
                    //         }
                    //     }
                    // }
                }
            },
            uiSchema: {
                "type": "VerticalLayout",
                "elements": [
                    // {
                    //     "type": "HorizontalLayout",
                    //     "elements": [
                    //         {
                    //             "type": "Control",
                    //             "scope": "#/properties/category"
                    //         }
                    //     ]
                    // },
                    {
                        "type": "HorizontalLayout",
                        "elements": [
                            {
                                "type": "Categorization",
                                "elements": [
                                    {
                                        "type": "Category",
                                        "label": "Branding",
                                        "elements": [
                                            {
                                                "type": "HorizontalLayout",
                                                "elements": [
                                                    {
                                                        "type": "Control",
                                                        "scope": "#/properties/title"
                                                    }
                                                ]
                                            },
                                            {
                                                "type": "HorizontalLayout",
                                                "elements": [
                                                    {
                                                        "type": "Control",
                                                        "scope": "#/properties/logo"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
}