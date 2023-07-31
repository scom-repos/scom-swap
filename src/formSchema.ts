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
                                    enum: [1, 56, 137, 250, 97, 80001, 43113, 43114],
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
                                    enum: [1, 56, 137, 250, 97, 80001, 43113, 43114],
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
                                    enum: [1, 56, 137, 250, 97, 80001, 43113, 43114],
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
                                                "scope": "#/properties/tokens",
                                                "options": {
                                                    "detail": {
                                                        "type": "VerticalLayout"
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
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
                            }
                        }
                    }
                }
            }
        }
    }
}

export function getProjectOwnerSchema(providerOptions: any[]) {
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
                    providers: {
                        type: "array",
                        required: true,
                        items: {
                            type: "object",
                            properties: {
                                name: {
                                    type: "string",
                                    oneOf: providerOptions,
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