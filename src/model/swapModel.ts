
import { FormatUtils, Module } from "@ijstech/components";
import { bridgeVaultConstantMap, crossChainSupportedChainIds, getBridgeSupportedChainList, getSupportedTokens, isClientWalletConnected, State } from "../store/index";
import { BigNumber, INetwork } from "@ijstech/eth-wallet";
import { ITokenObject, tokenStore } from "@scom/scom-token-list";
import { ApprovalStatus, formatNumber, INetworkConfig, IProvider, IProviderUI } from "../global/index";
import { createBridgeVaultOrder, executeSwap, getAllRoutesData, getCrossChainRouteOptions } from "../swap-utils/index";
import { ConfigModel } from "./configModel";
import ScomTokenInput from "@scom/scom-token-input";
import { getBondsInBridgeVault, getBridgeVault, getOraclePriceMap, getVaultAssetBalance, ICrossChainRouteResult } from "../crosschain-utils/index";

const priceImpactTooHighMsg = '$price_impact_too_high_if_you_want_to_bypass_this_check_please_turn_on_expert_mode';
type StatusMapType = 'approve' | 'swap';
const ROUNDING_NUMBER = BigNumber.ROUND_DOWN;

interface ISwapOptions {
  setHintLabel: (visible?: boolean) => void;
  showModalFees: () => void;
}

export class SwapModel {
  private state: State;
  private configModel: ConfigModel;
  private options: ISwapOptions = {
    setHintLabel: (value: boolean) => { },
    showModalFees: () => { }
  };
  private _fromInputValue: BigNumber;
  private _toInputValue: BigNumber;
  private _isFrom: boolean;
  private _fromToken: ITokenObject;
  private _toToken: ITokenObject;
  private _record: any;
  private _srcChain: INetwork;
  private _desChain: INetwork;
  private _bridgeSupportedChainList: INetworkConfig[] = [];
  private _swapButtonStatusMap: { [key: string]: ApprovalStatus } = {};
  private _approveButtonStatusMap: { [key: string]: ApprovalStatus } = {};
  private _crossChainApprovalStatus: ApprovalStatus = ApprovalStatus.NONE;

  private module: Module;

  constructor(module: Module, state: State, configModel: ConfigModel, options: ISwapOptions) {
    this.module = module;
    this.state = state;
    this.configModel = configModel;
    this.options = options;
    this.fromInputValue = new BigNumber(0);
    this.toInputValue = new BigNumber(0);
    this.swapButtonStatusMap = {};
    this.approveButtonStatusMap = {};
  }

  get crossChainApprovalStatus() {
    return this._crossChainApprovalStatus;
  }
  set crossChainApprovalStatus(value: ApprovalStatus) {
    this._crossChainApprovalStatus = value;
  }

  get swapButtonStatusMap() {
    return this._swapButtonStatusMap;
  }
  set swapButtonStatusMap(value: { [key: string]: ApprovalStatus }) {
    this._swapButtonStatusMap = value;
  }

  get approveButtonStatusMap() {
    return this._approveButtonStatusMap;
  }
  set approveButtonStatusMap(value: { [key: string]: ApprovalStatus }) {
    this._approveButtonStatusMap = value;
  }

  get isFrom() {
    return this._isFrom;
  }
  set isFrom(value: boolean) {
    this._isFrom = value;
  }

  get fromInputValue() {
    return this._fromInputValue;
  }
  set fromInputValue(value: BigNumber) {
    this._fromInputValue = value;
  }

  get toInputValue() {
    return this._toInputValue;
  }
  set toInputValue(value: BigNumber) {
    this._toInputValue = value;
  }

  get record() {
    return this._record;
  }
  set record(value: any) {
    this._record = value;
  }

  get fromToken() {
    return this._fromToken;
  }
  set fromToken(token: ITokenObject) {
    this._fromToken = token;
  }

  get toToken() {
    return this._toToken;
  }
  set toToken(token: ITokenObject) {
    this._toToken = token;
  }

  get srcChain() {
    return this._srcChain;
  }
  set srcChain(value: INetwork) {
    this._srcChain = value;
  }

  get desChain() {
    return this._desChain;
  }
  set desChain(value: INetwork) {
    this._desChain = value;
  }

  get bridgeSupportedChainList() {
    return this._bridgeSupportedChainList;
  }
  set bridgeSupportedChainList(value: INetworkConfig[]) {
    this._bridgeSupportedChainList = value;
  }

  get originalData() {
    const data = this.configModel.getData();
    if (!data) return undefined;
    const { category, providers } = data;
    if (!providers.length) return undefined;
    let _providers: IProvider[] = [];
    if (this.configModel.isFixedPair) {
      const { key } = providers[0];
      let defaultProvider: IProvider = {
        key
      };
      _providers.push(defaultProvider);
    } else {
      let providersByKeys: { [key: string]: IProviderUI[] } = {};
      providers.forEach(v => {
        if (!providersByKeys[v.key]) {
          providersByKeys[v.key] = [];
        }
        providersByKeys[v.key].push(v);
      });
      Object.keys(providersByKeys).forEach(k => {
        const arr = providersByKeys[k];
        const { key } = arr[0];
        let defaultProvider: IProvider = {
          key
        }
        _providers.push(defaultProvider);
      })
    }
    return { category, providers: _providers };
  }

  get isCrossChainEnabled() {
    let chainId = this.state.getChainId();
    if (!this.bridgeSupportedChainList.some((v: INetworkConfig) => v.chainId == chainId) || !this.configModel.isCrossChainSwap) {
      return false;
    }
    return true;
  }

  get isCrossChain() {
    const srcChainId = this.srcChain?.chainId;
    const desChainId = this.desChain?.chainId;
    if (this.isCrossChainEnabled && crossChainSupportedChainIds.some(v => v.chainId === srcChainId) && srcChainId != desChainId) {
      return true;
    }
    this.options.setHintLabel(false);
    return false;
  }

  get isApproveButtonShown(): boolean {
    return this.warningMessageText === '' && this.approveButtonStatus !== undefined && this.approveButtonStatus !== ApprovalStatus.NONE
  }

  get isPriceImpactTooHigh(): boolean {
    if (this.isCrossChain) return false;
    return this.record?.priceImpact > 15 && !this.state.isExpertMode && this.warningMessageText === priceImpactTooHighMsg
  }

  get isInsufficientBalance(): boolean {
    if (!this.fromToken || !this.record) return false;
    const balance = this.getBalance(this.fromToken);
    return this.maxSold.gt(balance);
  }

  get maxSold() {
    if (!this.fromToken || !this.record) return new BigNumber(0);
    if (!this.isFrom) return new BigNumber(this.record.fromAmount);
    return new BigNumber(this.minReceivedMaxSold || this.record.fromAmount);
  }

  get isSwapping(): boolean {
    const key = this.record?.key;
    return key && this.swapButtonStatusMap[key] === ApprovalStatus.APPROVING;
  }

  get approveButtonStatus(): any {
    const key = this.record?.key;
    return this.approveButtonStatusMap[key];
  }

  get isApprovingRouter(): boolean {
    return this.approveButtonStatus === ApprovalStatus.APPROVING;
  }

  get isValidToken(): boolean {
    if (this.fromToken?.symbol && this.toToken?.symbol) {
      return true;
    }
    return false;
  }

  get isButtonLoading() {
    if (this.isApproveButtonShown || (this.isCrossChain && this.crossChainApprovalStatus === ApprovalStatus.APPROVING)) {
      return this.isApprovingRouter;
    }
    return this.isSwapping;
  }

  get isSwapButtonDisabled() {
    if (isClientWalletConnected() && this.state.isRpcWalletConnected() && !this.record) {
      return true;
    }
    return (this.state.isRpcWalletConnected() && (this.warningMessageText != '' && !this.isPriceImpactTooHigh));
  }

  private get warningMessageText() {
    const tokens = [this.fromToken?.symbol, this.toToken?.symbol];
    if (tokens.every(v => v === 'ETH' || v === 'WETH')) {
      return '$invalid_pair';
    }
    if (!this.record) {
      return '';
    }
    if (this.record.key === 'Oracle' && (this.record.fromAmount.isZero() || this.record.toAmount.isZero())) {
      return '$circuit_breaker_triggered';
    }
    const balance = this.getBalance(this.fromToken);
    if (this.maxSold.gt(balance)) {
      return this.module.i18n.get('$insufficient_balance', {symbol: this.fromToken?.symbol});
    }
    if (this.record.priceImpact > 15 && !this.state.isExpertMode) {
      return priceImpactTooHighMsg;
    }
    return '';
  }

  get minReceivedMaxSold() {
    const slippageTolerance = this.state.slippageTolerance;
    if (!slippageTolerance) return null;
    if (this.isFrom) {
      const poolAmount = new BigNumber(this.record?.amountIn);
      if (poolAmount.isZero()) return null;
      const minReceivedMaxSold = poolAmount.times(1 + slippageTolerance / 100).toNumber();
      return minReceivedMaxSold;
    } else {
      const poolAmount = new BigNumber(this.record?.amountOut);
      if (poolAmount.isZero()) return null;
      const minReceivedMaxSold = poolAmount.times(1 - slippageTolerance / 100).toNumber();
      return minReceivedMaxSold;
    }
  }

  get isMaxDisabled() {
    const address = this.fromToken?.address || this.fromToken?.symbol;
    let balance = this.getBalance(this.fromToken);
    return !address || new BigNumber(balance).isLessThanOrEqualTo(0);
  }

  get priceImpact() {
    const value = this.record?.priceImpact;
    if (value || value == 0) {
      return `${formatNumber(value)}%`;
    }
    return '-';
  }

  get minimumReceived() {
    const value = this.minReceivedMaxSold;
    if (value || value == 0) {
      if (this.isFrom) {
        return `${formatNumber(value)} ${this.fromToken?.symbol}`;
      }
      return `${formatNumber(value)} ${this.toToken?.symbol}`;
    }
    return '-';
  }

  get tradeFeeExactAmount() {
    const tradeFee = this.isCrossChain ? new BigNumber(this.record?.tradeFee) : this.record?.fromAmount.times(this.record?.tradeFee);
    if (tradeFee && !tradeFee.isNaN()) {
      return `${formatNumber(tradeFee)} ${this.fromToken?.symbol}`;
    }
    return '-';
  }

  get feeDetails() {
    if (this.isCrossChain && this.record) {
      let record: ICrossChainRouteResult = this.record;
      let detail = [
        {
          title: "$source_chain_liquidity_fee",
          description: "$this_fee_is_paid_to_the_amm_liquidity_providers_on_the_source_chain",
          value: record.fees.sourceRouteLiquidityFee,
          isHidden: record.fees.sourceRouteLiquidityFee?.isZero()
        },
        {
          title: "$target_chain_liquidity_fee",
          description: "$this_fee_is_paid_to_the_amm_liquidity_providers_on_the_target_chain",
          value: record.fees.targetRouteLiquidityFee,
          isHidden: record.targetRouteObj.pairs.length == 0
        },
        {
          title: "$base_fee",
          description: "$this_fee_is_paid_to_the_trolls_to_cover_gas_fee_on_the_target_chain",
          value: record.fees.baseFee,
        },
        {
          title: "$bridge_vault_liquidity_fee",
          description: "$this_fee_is_paid_to_the_bridge_vault_liquidity_provider_on_target_chain",
          value: record.fees.transactionFee,
        },
        {
          title: "$protocol_fee",
          description: "$this_fee_is_paid_to_the_troll_owners_on_the_cross_chain_network",
          value: record.fees.protocolFee,
        },
        {
          title: "$imbalance_fee",
          description: "$this_fee_is_acted_as_an_incentive_to_balance_the_vault",
          value: record.fees.imbalanceFee,
        }
      ]
      return detail.filter(v => !v.isHidden);
    }
    if (!this.isCrossChain && this.record) {
      return [{
        title: "$liquidity_provider_fee",
        description: "$this_fee_is_paid_to_the_amm_liquidity_provider",
        value: this.record.tradeFee
      }];
    }
    return [];
  }

  get determineSwapButtonCaption() {
    const isApproveButtonShown = this.isCrossChain ? this.crossChainApprovalStatus !== ApprovalStatus.NONE : this.isApproveButtonShown;
    if (!isClientWalletConnected()) {
      return this.module.i18n.get("$connect_wallet");
    }
    if (!this.state.isRpcWalletConnected()) {
      return this.module.i18n.get("$switch_network");
    }
    if (isApproveButtonShown) {
      const status = this.isCrossChain ? this.crossChainApprovalStatus : this.approveButtonStatus;
      switch (status) {
        case ApprovalStatus.APPROVING:
          return this.module.i18n.get("$approving");
        case ApprovalStatus.TO_BE_APPROVED:
          return this.module.i18n.get("$approve");
      }
      return '';
    } else {
      if (this.isSwapping) {
        return this.module.i18n.get(this.isCrossChain ? "$creating_order" : "$swapping");
      }
      if (this.isInsufficientBalance) {
        return this.module.i18n.get('$insufficient_balance', { symbol: this.fromToken?.symbol });
      }
      if (this.isCrossChain) {
        return this.module.i18n.get("$create_order");
      }
      if (this.isPriceImpactTooHigh) {
        return this.module.i18n.get("$turn_on_expert_mode")
      }
      return this.module.i18n.get("$swap");
    }
  }

  isEstimated = (tokenPosition: string, strict = false) => {
    if (tokenPosition === 'from') {
      return strict ? this.isFrom && !this.fromInputValue.isZero() : this.isFrom;
    } else if (tokenPosition === 'to') {
      return strict ? !this.isFrom && !this.toInputValue.isZero() : !this.isFrom;
    } else {
      return false;
    }
  }

  updateEstimatedPosition = (isFrom: boolean) => {
    if (this.isFrom != isFrom) {
      this.isFrom = isFrom;
    }
  }

  setProviders = () => {
    const providers = this.originalData?.providers || [];
    if (this.configModel.isFixedPair) {
      this.state.setProviderList([providers[0]]);
    } else {
      this.state.setProviderList(providers);
    }
  }

  setMapStatus = (type: StatusMapType, key: string, status: ApprovalStatus) => {
    if (type === 'approve') {
      let mapStatus = this.approveButtonStatusMap;
      mapStatus[key] = status;
      this.approveButtonStatusMap = {
        ...mapStatus
      };
    }
    else {
      let mapStatus = this.swapButtonStatusMap;
      mapStatus[key] = status;
      this.swapButtonStatusMap = {
        ...mapStatus
      };
    }
  }

  updateTokenValues = (token: ITokenObject, isFrom: boolean, tokenInput: ScomTokenInput) => {
    if (!token) return;
    if (isFrom) {
      this.fromToken = token;
      if (this.fromInputValue.gt(0)) {
        const formattedValue = new BigNumber(this.fromInputValue).dp(token.decimals || 18, ROUNDING_NUMBER).toFixed();
        if (!this.fromInputValue.eq(formattedValue)) {
          if (tokenInput) {
            tokenInput.value = formattedValue === '0' ? '' : formattedValue;
          }
          this.fromInputValue = new BigNumber(formattedValue);
        }
      } else if (this.fromInputValue.isZero()) {
        this.updateEstimatedPosition(true);
      }
    } else {
      this.toToken = token;
      if (this.toInputValue.gt(0)) {
        const formattedValue = new BigNumber(this.toInputValue).dp(token.decimals || 18, ROUNDING_NUMBER).toFixed();
        if (!this.toInputValue.eq(formattedValue)) {
          if (tokenInput) {
            tokenInput.value = formattedValue === '0' ? '' : formattedValue;
          }
          this.toInputValue = new BigNumber(formattedValue);
        }
      } else if (this.toInputValue.isZero()) {
        this.updateEstimatedPosition(false);
      }
    }
  }

  getBalance = (token?: ITokenObject) => {
    if (!token) return '0';
    let tokenBalances = tokenStore.getTokenBalancesByChainId(token.chainId);
    if (!tokenBalances) return '0';
    const address = token.address || '';
    let balance = address ? tokenBalances[address.toLowerCase()] ?? '0' : tokenBalances[token.symbol] || '0';
    return balance;
  }

  fixedNumber = (value: BigNumber | string | number) => {
    const val = typeof value === 'object' ? value : new BigNumber(value);
    if (val.isNaN() || val.isZero()) return '';
    return FormatUtils.formatNumber(val.toFixed(), { decimalFigures: 4, useSeparators: false, hasTrailingZero: false });
  }

  getInputValue = (isFrom: boolean) => {
    const token = isFrom ? this.fromToken : this.toToken;
    const value = isFrom ? this.fromInputValue : this.toInputValue;
    if (!value || value.isNaN()) return '';
    const newValue = value.dp(token?.decimals || 18, ROUNDING_NUMBER).toFixed()
    return newValue;
  }

  calculateDefaultTokens = () => {
    let firstDefaultToken: ITokenObject;
    let secondDefaultToken: ITokenObject;
    const currentChainId = this.configModel.chainId;
    const { tokens, defaultInputToken, defaultOutputToken } = this.configModel;
    const currentChainTokens = getSupportedTokens(tokens, currentChainId);
    if (!defaultInputToken && !defaultOutputToken) {
      firstDefaultToken = currentChainTokens[0];
      secondDefaultToken = currentChainTokens[1];
    }
    else {
      if (defaultInputToken && currentChainId === defaultInputToken.chainId) {
        let inputTokens = getSupportedTokens(tokens, defaultInputToken.chainId);
        firstDefaultToken = inputTokens.find(v => v.chainId === defaultInputToken.chainId && v.address === defaultInputToken.address);
      }
      else {
        firstDefaultToken = currentChainTokens[0];
      }
      if (defaultOutputToken) {
        let outputTokens = getSupportedTokens(tokens, defaultOutputToken.chainId);
        secondDefaultToken = outputTokens.find(v => v.chainId === defaultOutputToken.chainId && v.address === defaultOutputToken.address);
      }
      else {
        secondDefaultToken = currentChainTokens[0];
      }
    }
    this.fromToken = firstDefaultToken;
    this.toToken = secondDefaultToken;
    return {
      firstDefaultToken,
      secondDefaultToken
    }
  }

  getSwapRoutesData = async () => {
    const useAPI = this.configModel.category === 'aggregator' || this.configModel.category === 'cross-chain-swap';
    let listRouting = await getAllRoutesData(this.state, this.fromToken, this.toToken, this.fromInputValue, this.toInputValue, this.isFrom, useAPI);
    listRouting = listRouting.map((v: any) => {
      return {
        ...v,
        isHybrid: false // market == Market.HYBRID,
      }
    });
    return listRouting;
  }

  getCrossChainRouteData = async () => {
    const tokenIn = Object.assign({}, this.fromToken);
    const tokenOut = Object.assign({}, this.toToken);
    let listRouting = await getCrossChainRouteOptions(this.state, {
      fromChainId: this.srcChain.chainId,
      toChainId: this.desChain.chainId,
      tokenIn: tokenIn,
      tokenOut: tokenOut,
      amountIn: this.fromInputValue
    })
    listRouting = listRouting.map((v: any) => {
      let route: any = {};
      if (v.sourceRouteObj) {
        const amountOut = v.targetRouteObj ? v.targetRouteObj.amountOut : v.sourceRouteObj.amountOut;
        route = {
          ...v,
          ...v.sourceRouteObj,
          tradeFee: v.tradeFee,
          price: v.price,
          amountOut: new BigNumber(amountOut),
        };
        if (v.targetRouteObj) {
          const market = this.state.getProviderByKey(v.targetRouteObj.provider)?.key || '';
          if (market) {
            route.targetRouteObj = {
              ...route.targetRouteObj,
              route: v.targetRouteObj.bestRoute,
              isHybrid: false //market == Market.HYBRID,
            }
          } else {
            route.targetRouteObj = undefined;
          }
        }
      } else {
        route = {
          ...v,
          ...v.targetRouteObj,
          tradeFee: v.tradeFee,
          price: v.price,
        };
      }
      return { ...route, fromAmount: new BigNumber(route.fromAmount) };
    });
    return listRouting;
  }

  getVaultData = async (record: any) => {
    const assetSymbol = record.targetVaultToken.symbol;
    const assetDecimal = record.targetVaultToken.decimals;
    const vaultTokenToTargetChain = new BigNumber(record.vaultTokenToTargetChain);
    const { vaultAddress, vaultRegistryAddress, tokenAddress: vaultTokenAddress, softCap } = bridgeVaultConstantMap[assetSymbol === 'USDT.e' ? 'USDT' : assetSymbol][this.desChain!.chainId];
    const [vault, vaultAssetBalance, bonds, oraclePriceMap] = await Promise.all([
      getBridgeVault(this.state, this.desChain!.chainId, vaultAddress),
      getVaultAssetBalance(this.desChain!.chainId, vaultAddress),
      getBondsInBridgeVault(this.state, this.desChain!.chainId, vaultRegistryAddress),
      getOraclePriceMap(this.desChain!.chainId)
    ]);
    const assetBalance = vaultAssetBalance ?? 0;
    const targetVaultAssetBalance = (new BigNumber(assetBalance)).shiftedBy(-assetDecimal);
    const targetVaultBondBalance = bonds.reduce((acc, cur) => {
      if (cur.chainId !== this.desChain?.chainId) return acc;
      acc = acc.plus((new BigNumber(cur.bond)).shiftedBy(-18));
      return acc;
    }, new BigNumber(0));
    const vaultToUsdPrice = oraclePriceMap[vaultTokenAddress.toLowerCase()]; // This will be the vaultToken -> USD Price
    const oswapToken = Object.values(tokenStore.getTokenMapByChainId(this.desChain!.chainId)).find(v => v.symbol === 'OSWAP')
    const oswapToUsdPrice = oraclePriceMap[oswapToken.address.toLowerCase()];
    const vaultToOswapPrice = vaultToUsdPrice.div(oswapToUsdPrice); // This will vaultToken -> oswap price;
    const minValue = BigNumber.min(targetVaultAssetBalance, targetVaultBondBalance, softCap);
    return {
      assetSymbol,
      softCap,
      vault,
      targetVaultAssetBalance,
      targetVaultBondBalance,
      vaultTokenToTargetChain,
      vaultToOswapPrice,
      minValue
    }
  }

  getRate = (isPriceToggled: boolean) => {
    const value = isPriceToggled ? this.record?.priceSwap : this.record?.price;
    let fromSymbol = this.fromToken?.symbol;
    let toSymbol = this.toToken?.symbol;
    if (this.isCrossChain) {
      const srcName = this.srcChain?.chainName;
      const desName = this.desChain?.chainName;
      if (srcName) {
        fromSymbol = `${fromSymbol} (${srcName})`;
      }
      if (desName) {
        toSymbol = `${toSymbol} (${desName})`;
      }
    }
    if (value || value == 0) {
      if (isPriceToggled) {
        return `1 ${fromSymbol} ≈ ${formatNumber(value)} ${toSymbol}`;
      }
      return `1 ${toSymbol} ≈ ${formatNumber(value)} ${fromSymbol}`;
    }
    return '-';
  }

  getPriceInfo = (isPriceToggled: boolean) => {
    const rate = this.getRate(isPriceToggled);
    const fees = this.feeDetails;
    const countFees = fees.length;
    let feeTooltip: any;
    if (countFees === 1) {
      const fee = fees[0];
      feeTooltip = `${fee.description}`;
    } else if (countFees > 1) {
      feeTooltip = fees;
    }

    let info = [
      {
        title: "$rate",
        value: this.isValidToken ? rate : '-',
        isToggleShown: this.record && this.isValidToken,
      },
      {
        title: "$price_impact",
        value: this.isValidToken ? this.priceImpact : '-',
        isHidden: this.isCrossChain,
      },
      {
        title: this.isFrom ? "$maximum_sold" : "$minimum_received",
        value: this.isValidToken ? this.minimumReceived : '-',
      },
      {
        title: "$transaction_fee",
        value: this.isValidToken ? this.tradeFeeExactAmount : '-',
        tooltip: feeTooltip,
        onClick: countFees > 1 ? () => this.options.showModalFees() : null
      },
      {
        title: "$estimated_time",
        value: this.isValidToken && this.record ? '$30_seconds' : '-',
        isHidden: !this.isCrossChain
      }
    ];
    return info.filter((f: any) => !f.isHidden);
  }

  updateBridgeSupportChainList = () => {
    this.bridgeSupportedChainList = getBridgeSupportedChainList(this.configModel.chainId, this.configModel.networks);
  }

  onSubmit = async () => {
    let _error: Record<string, string>;
    try {
      if (this.isCrossChain) {
        if (this.toToken && this.fromToken && this.desChain) {
          this.record.minReceivedMaxSold = this.minReceivedMaxSold;
          const { error } = await createBridgeVaultOrder(this.state, {
            vaultAddress: this.record.vaultAddress,
            targetChainId: this.desChain.chainId,
            tokenIn: this.fromToken,
            tokenOut: this.toToken,
            amountIn: this.record.fromAmount,
            minAmountOut: this.record.minReceivedMaxSold,
            sourceRouteInfo: this.record.sourceRouteObj ? { amountOut: this.record.sourceRouteObj.amountOut, pairs: this.record.sourceRouteObj.pairs } : undefined
          });
          _error = error;
        }
      } else {
        const route = this.record.bestRoute ? this.record.bestRoute : [this.fromToken, this.toToken];
        const swapData = {
          provider: this.record.provider,
          queueType: this.record.queueType,
          routeTokens: this.record.bestRoute,
          bestSmartRoute: route,
          pairs: this.record.pairs,
          fromAmount: this.record.fromAmount,
          toAmount: this.record.toAmount,
          isFromEstimated: this.isFrom,
          providerList: this.originalData?.providers || [],
          campaignId: this.configModel.campaignId,
          referrer: this.configModel.commissions.find(v => v.chainId === this.state.getChainId())?.walletAddress,
        }

        const { error } = await executeSwap(this.state, swapData);
        _error = error;
      }
    } catch (error) {
      console.error(error);
    }
    return _error;
  }
}