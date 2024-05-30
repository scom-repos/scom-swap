import { Button, Input, StackLayout, Styles } from '@ijstech/components';
import ScomNetworkPicker from '@scom/scom-network-picker';
import ScomTokenInput from '@scom/scom-token-input';
import { ScomStorage } from "@scom/scom-storage";
import { storageModalStyle } from './index.css';

const Theme = Styles.Theme.ThemeVars;
const chainIds = [1, 56, 137, 250, 97, 80001, 43113, 43114];
const networks = chainIds.map(v => { return { chainId: v } });

const theme = {
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
        maxButtonBackground: {
            type: 'string',
            format: 'color'
        },
        maxButtonHoverBackground: {
            type: 'string',
            format: 'color'
        },
        primaryButtonBackground: {
            type: 'string',
            format: 'color'
        },
        primaryButtonHoverBackground: {
            type: 'string',
            format: 'color'
        },
        primaryButtonDisabledBackground: {
            type: 'string',
            format: 'color'
        }
    }
}

const themeUISchema = {
    type: 'Category',
    label: 'Theme',
    elements: [
        {
            type: 'VerticalLayout',
            elements: [
                {
                    type: 'Group',
                    label: 'Dark',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/backgroundColor'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/fontColor'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/inputBackgroundColor'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/inputFontColor'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/maxButtonBackground'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/maxButtonHoverBackground'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/primaryButtonBackground'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/primaryButtonHoverBackground'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/dark/properties/primaryButtonDisabledBackground'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'Group',
                    label: 'Light',
                    elements: [
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/backgroundColor'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/fontColor'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/inputBackgroundColor'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/inputFontColor'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/maxButtonBackground'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/maxButtonHoverBackground'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/primaryButtonBackground'
                                },
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/primaryButtonHoverBackground'
                                }
                            ]
                        },
                        {
                            type: 'HorizontalLayout',
                            elements: [
                                {
                                    type: 'Control',
                                    scope: '#/properties/light/properties/primaryButtonDisabledBackground'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

export function getBuilderSchema() {
    return {
        dataSchema: {
            type: 'object',
            properties: {
                title: {
                    type: 'string'
                },
                logo: {
                    type: 'string',
                    format: 'data-url'
                },
                category: {
                    type: 'string',
                    required: true,
                    enum: [
                        'fixed-pair',
                        'fixed-protocal',
                        'aggregator',
                        'cross-chain-swap'
                    ]
                },
                networks: {
                    type: 'array',
                    required: true,
                    items: {
                        type: 'object',
                        properties: {
                            chainId: {
                                type: 'number',
                                enum: chainIds,
                                required: true
                            }
                        }
                    }
                },
                tokens: {
                    type: 'array',
                    required: true,
                    items: {
                        type: 'object',
                        properties: {
                            chainId: {
                                type: 'number',
                                enum: chainIds,
                                required: true
                            },
                            address: {
                                type: 'string'
                            }
                        }
                    }
                },
                providers: {
                    type: 'array',
                    required: true,
                    items: {
                        type: 'object',
                        properties: {
                            key: {
                                type: 'string',
                                required: true
                            },
                            chainId: {
                                type: 'number',
                                enum: chainIds,
                                required: true
                            }
                        }
                    }
                },
                dark: theme,
                light: theme
            }
        },
        uiSchema: {
            type: 'Categorization',
            elements: [
                {
                    type: 'Category',
                    label: 'General',
                    elements: [
                        {
                            type: 'VerticalLayout',
                            elements: [
                                {
                                    type: 'HorizontalLayout',
                                    elements: [
                                        {
                                            type: 'Control',
                                            scope: '#/properties/category'
                                        }
                                    ]
                                },
                                {
                                    type: 'HorizontalLayout',
                                    elements: [
                                        {
                                            type: 'Categorization',
                                            elements: [
                                                {
                                                    type: 'Category',
                                                    label: 'Branding',
                                                    elements: [
                                                        {
                                                            type: 'HorizontalLayout',
                                                            elements: [
                                                                {
                                                                    type: 'Control',
                                                                    scope: '#/properties/title'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            type: 'HorizontalLayout',
                                                            elements: [
                                                                {
                                                                    type: 'Control',
                                                                    scope: '#/properties/logo'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'Category',
                                                    label: 'Networks',
                                                    elements: [
                                                        {
                                                            type: 'Control',
                                                            scope: '#/properties/networks',
                                                            options: {
                                                                detail: {
                                                                    type: 'VerticalLayout'
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'Category',
                                                    label: 'Providers',
                                                    elements: [
                                                        {
                                                            type: 'Control',
                                                            scope: '#/properties/providers',
                                                            options: {
                                                                detail: {
                                                                    type: 'VerticalLayout'
                                                                }
                                                            }
                                                        }
                                                    ]
                                                },
                                                {
                                                    type: 'Category',
                                                    label: 'Tokens',
                                                    elements: [
                                                        {
                                                            type: 'Control',
                                                            scope: '#/properties/tokens'
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
                },
                themeUISchema
            ]

        },
        customControls(rpcWalletId: string) {
            let networkPickers: ScomNetworkPicker[] = [];
            let tokenInputs: ScomTokenInput[] = [];
            let edtLogo: Input;
            return {
                '#/properties/logo': {
                    render: () => {
                        const hstack = new StackLayout(undefined, {
                            width: '100%',
                            alignItems: 'center',
                            background: Theme.input.background
                        });
                        edtLogo = new Input(hstack, {
                            width: '100%',
                            height: 42,
                            padding: { left: '1rem', right: '1rem' },
                            border: { width: 0 }
                        });
                        const button = new Button(hstack, {
                            height: 42,
                            padding: { left: '0.5rem', right: '0.5rem' },
                            caption: 'Browse',
                            icon: { width: '0.875rem', height: '0.875rem', name: 'image' },
                            font: { size: '0.875rem', color: Theme.colors.secondary.contrastText },
                            background: { color: Theme.colors.secondary.main }
                        });
                        button.onClick = () => {
                            showStorage(edtLogo);
                        }
                        return hstack;
                    },
                    getData: (control: StackLayout) => {
                        return edtLogo.value;
                    },
                    setData: (control: StackLayout, value: string) => {
                        edtLogo.value = value;
                    }
                },
                '#/properties/networks/properties/chainId': customNetworkPicker(),
                '#/properties/tokens/properties/chainId': {
                    render: () => {
                        const idx = networkPickers.length;
                        networkPickers[idx] = new ScomNetworkPicker(undefined, {
                            type: 'combobox',
                            networks,
                            onCustomNetworkSelected: () => {
                                const chainId = networkPickers[idx].selectedNetwork?.chainId;
                                tokenInputs[idx].chainId = chainId;
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
                        if (tokenInputs[idx]) tokenInputs[idx].chainId = value;
                    }
                },
                '#/properties/tokens/properties/address': {
                    render: () => {
                        const idx = tokenInputs.length;
                        tokenInputs[idx] = new ScomTokenInput(undefined, {
                            type: 'combobox',
                            isBalanceShown: false,
                            isBtnMaxShown: false,
                            isInputShown: false
                        });
                        const chainId = networkPickers[idx]?.selectedNetwork?.chainId;
                        tokenInputs[idx].chainId = chainId;
                        return tokenInputs[idx];
                    },
                    getData: (control: ScomTokenInput) => {
                        return control.token?.address || control.token?.symbol;
                    },
                    setData: (control: ScomTokenInput, value: string) => {
                        control.address = value;
                    }
                },
                '#/properties/providers/properties/chainId': customNetworkPicker()
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

const showStorage = (target: Input) => {
    const scomStorage = ScomStorage.getInstance();
    scomStorage.onCancel = () => {
        scomStorage.closeModal();
    }
    scomStorage.onOpen = (path: string) => {
        const imageTypes = ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'];
        const ext = path.split('.').pop().toLowerCase();
        if (imageTypes.includes(ext)) {
            target.value = path;
            scomStorage.closeModal();
        }
    }
    scomStorage.openModal({
        width: 800,
        maxWidth: '100%',
        height: '90vh',
        overflow: 'hidden',
        zIndex: 1002,
        closeIcon: {width: '1rem', height: '1rem', name: 'times', fill: Theme.text.primary, margin: {bottom: '0.5rem'}},
        class: storageModalStyle
    });
    scomStorage.onShow();
}

export function getProjectOwnerSchema() {
    return {
        general: {
            dataSchema: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string'
                    },
                    logo: {
                        type: 'string',
                        format: 'data-url'
                    },
                    // category: {
                    //     type: 'string',
                    //     required: true,
                    //     enum: [
                    //         'fixed-pair',
                    //         'fixed-protocal',
                    //         'aggregator'
                    //     ]
                    // },
                    // providers: {
                    //     type: 'array',
                    //     required: true,
                    //     items: {
                    //         type: 'object',
                    //         properties: {
                    //             key: {
                    //                 title: 'Name',
                    //                 type: 'string',
                    //                 oneOf: providerOptions,
                    //                 required: true
                    //             }
                    //         }
                    //     }
                    // }
                }
            },
            uiSchema: {
                type: 'VerticalLayout',
                elements: [
                    // {
                    //     type: 'HorizontalLayout',
                    //     elements: [
                    //         {
                    //             type: 'Control',
                    //             scope: '#/properties/category'
                    //         }
                    //     ]
                    // },
                    {
                        type: 'HorizontalLayout',
                        elements: [
                            {
                                type: 'Categorization',
                                elements: [
                                    {
                                        type: 'Category',
                                        label: 'Branding',
                                        elements: [
                                            {
                                                type: 'HorizontalLayout',
                                                elements: [
                                                    {
                                                        type: 'Control',
                                                        scope: '#/properties/title'
                                                    }
                                                ]
                                            },
                                            {
                                                type: 'HorizontalLayout',
                                                elements: [
                                                    {
                                                        type: 'Control',
                                                        scope: '#/properties/logo'
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