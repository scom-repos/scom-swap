import {
  customElements,
  customModule,
  Module,
  Container,
  ControlElement,
  Modal,
  Panel,
  Input,
  Label,
  Icon,
  Switch,
  IEventBus,
  observable,
  application,
  Button,
  Control,
} from '@ijstech/components';
import { EventId } from '../global/index';
import { getSlippageTolerance, getTransactionDeadline, isExpertMode, setSlippageTolerance, setTransactionDeadline, toggleExpertMode } from '../store/index';
import styleClass from './index.css';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['i-scom-swap-transaction-settings']: ControlElement;
    }
  }
};

const listSlippage = [0.1, 0.5, 1];

@customModule
@customElements('i-scom-swap-transaction-settings')
export class TransactionSettings extends Module {
  private transactionModal: Modal;
  private slippageGroup: Panel;
  private slippageInput: Input;
  private deadlineInput: Input;
  private deadlineGroup: Panel;
  private deadlineMessage: Label;
  private warningIcon: Icon;
  private switchBox: Switch;
  private slippageRow: Panel;
  private deadlineRow: Panel;
  private deadlineInputRow: Panel;
  private switchBoxRow: Panel;

  private _showSlippageOnly: boolean;

  private $eventBus: IEventBus;
  @observable()
  private slippageToleranceMessage: string;

  constructor(parent?: Container, options?: any) {
    super(parent, options);
    this.$eventBus = application.EventBus;
    this.registerEvent();
  }

  get showSlippageOnly() {
    return this._showSlippageOnly;
  }

  set showSlippageOnly(value: boolean) {
    this._showSlippageOnly = value;
    if (value) {
      this.slippageRow.visible = false;
      this.deadlineRow.visible = false;
      this.deadlineInputRow.visible = false;
      this.switchBoxRow.visible = false;
    } else {
      this.slippageRow.visible = true;
      this.deadlineRow.visible = true;
      this.deadlineInputRow.visible = true;
      this.switchBoxRow.visible = true;
    }
  }

  registerEvent() {
    this.$eventBus.register(this, EventId.ExpertModeChanged, () => {
      if (this.switchBox)
        this.switchBox.checked = isExpertMode()
    });
  }

  async onRenderSlippage() {
    listSlippage.map(async value => {
      const button = await Button.create({
        height: 'auto',
        width: '4rem',
        caption: `${value}%`
      });
      button.classList.add('pill-slippage');
      button.onClick = (source: Control) => this.onSelectSlippage(source, value);
      this.slippageGroup.prepend(button);
    })

    const label = await Label.create();
    label.caption = '%';
    this.slippageInput.appendChild(label);
  }

  async onRenderWarningElm() {
    this.deadlineMessage = await Label.create();
    this.deadlineMessage.caption = 'Please enter a valid transaction deadline';
    this.deadlineMessage.classList.add("slippage-message");

    this.warningIcon = await Icon.create();
    this.warningIcon.fill = '#f05e61';
    this.warningIcon.width = 15.75;
    this.warningIcon.height = 14;
    this.warningIcon.name = 'exclamation-triangle';
    this.warningIcon.classList.add('slippage-input__warning');
  }

  onActiveItem = (source: Control) => {
    const activeItem = this.slippageGroup.querySelector('.active');
    if (activeItem) {
      if (source.isSameNode(activeItem)) return;
      activeItem.classList.remove('active');
    }

    source.classList.add('active');
  }

  onSelectSlippage = (source: Control, val: any) => {
    this.inputSlippageTolerance(source, val);
    if (listSlippage.includes(val)) {
      this.slippageInput.value = '';
    }
  }

  inputSlippageTolerance = (source: Control, val: any) => {
    if (val) {
      const value = +val;
      const hasWarningIcon = this.slippageInput.contains(this.warningIcon);
      this.slippageInput.value = value;
      this.slippageInput.placeholder = value.toFixed(2)
      if (value < 50) {
        setSlippageTolerance(value);
        this.$eventBus.dispatch(EventId.SlippageToleranceChanged);
        this.setSlippageToleranceMessage();
        this.slippageInput.classList.remove('transaction-input__error');
        if (value > 5) {
          if (!hasWarningIcon)
            this.slippageInput.prepend(this.warningIcon);
        } else if (hasWarningIcon)
          this.slippageInput.removeChild(this.warningIcon);
      } else {
        this.slippageToleranceMessage = 'Please enter a valid slippage percentage';
        this.slippageInput.classList.add('transaction-input__error');
        if (hasWarningIcon)
          this.slippageInput.removeChild(this.warningIcon);
      }
    }
    const index = listSlippage.indexOf(+val);
    if (index >= 0 && source.isSameNode(this.slippageInput)) {
      const buttons = this.slippageGroup.querySelectorAll('i-button.pill-slippage');
      this.onActiveItem(buttons[index] as Button)
    } else {
      this.onActiveItem(source);
    }
  }

  blurSlippageTolerance = (source: Input) => {
    const val = source.value;
    if (val && val >= 50) {
      this.inputSlippageTolerance(source, 0.5);
    } else if (!this.slippageInput.value) {
      this.inputSlippageTolerance(source, getSlippageTolerance());
    }
  }

  setSlippageToleranceMessage = () => {
    const slippageTolerance = getSlippageTolerance();
    if (slippageTolerance < 0.5) {
      return (this.slippageToleranceMessage = 'Your transaction may fail');
    } else if (slippageTolerance >= 0.5 && slippageTolerance <= 5) {
      return (this.slippageToleranceMessage = '');
    } else if (slippageTolerance > 5 && slippageTolerance < 50) {
      return (this.slippageToleranceMessage = 'Your transaction may be frontrun');
    } else {
      return (this.slippageToleranceMessage = 'Please enter a valid slippage percentage');
    }
  }

  inputDeadline = (source: Control, event: Event) => {
    const val = (source as Input).value;
    setTransactionDeadline(+val);
    const hasMessage = this.deadlineGroup.contains(this.deadlineMessage)
    if (val > 180) {
      this.deadlineInput.classList.add('transaction-input__error');
      if (!hasMessage)
        this.deadlineGroup.appendChild(this.deadlineMessage);
    } else {
      this.deadlineInput.classList.remove('transaction-input__error');
      if (hasMessage)
        this.deadlineGroup.removeChild(this.deadlineMessage);
    }
  }

  blurTransactionDeadline = (source: Input) => {
    const val = source.value;
    const newVal = val > 180 || val < 1 ? 30 : parseInt(val);
    source.value = newVal;
    setTransactionDeadline(newVal);
    if (val > 180 && this.deadlineGroup.contains(this.deadlineMessage)) {
      this.deadlineGroup.removeChild(this.deadlineMessage);
    }
    this.deadlineInput.classList.remove('transaction-input__error');
  }

  handleProcessExpertMode = () => {
    if (isExpertMode()) {
      toggleExpertMode();
      this.$eventBus.dispatch(EventId.ExpertModeChanged)
      return;
    }
    this.$eventBus.dispatch(EventId.ShowExpertModal);
  }

  setDefaultTransactionSettings() {
    const slippageTolerance = getSlippageTolerance();
    const index = listSlippage.indexOf(slippageTolerance);
    if (index >= 0) {
      const buttons = this.slippageGroup.querySelectorAll('i-button.pill-slippage');
      this.onActiveItem(buttons[index] as Button)
      this.slippageInput.value = '';
    } else {
      this.slippageInput.value = slippageTolerance;
      this.onActiveItem(this.slippageInput)
    }
    this.slippageInput.placeholder = slippageTolerance.toFixed(2);

    const transactionDeadline = getTransactionDeadline();
    this.deadlineInput.value = transactionDeadline;
  }

  async init() {
    this.classList.add(styleClass);
    super.init();
    await this.onRenderSlippage();
    await this.onRenderWarningElm();
    this.setDefaultTransactionSettings();
  }

  closeModal() {
    this.transactionModal.visible = false;
  }

  showModal() {
    this.transactionModal.visible = true;
  }

  render() {
    return (
      <i-modal
        id="transactionModal"
        class='dark-modal'
        title="Transaction Settings"
        closeIcon={{ name: 'times' }}
      >
        <i-panel id="mainContent">
          <i-panel class="settings-content">
            <i-hstack id="slippageRow" verticalAlignment='center'>
              <i-label caption="Slippage Tolerance"></i-label>
              <i-icon
                width={16}
                height={16}
                name="question-circle"
                fill="rgba(255,255,255,0.55)"
                tooltip={{
                  content: 'Your transaction will revert if the price changes unfavorably by more than this percentage.'
                }}
              ></i-icon>
            </i-hstack>
            <i-hstack id="slippageGroup" gap=".5rem">
              <i-input
                id="slippageInput"
                height={40}
                width="100%"
                inputType="number"
                class='transaction-input'
                onChanged={(source: Control, event: Event) => this.inputSlippageTolerance(source, (source as Input).value)}
                onBlur={this.blurSlippageTolerance}
              ></i-input>
            </i-hstack>
            <i-hstack>
              <i-label class="slippage-message" caption={this.slippageToleranceMessage}></i-label>
            </i-hstack>
            <i-hstack id="deadlineRow" verticalAlignment='center' class="trans-title">
              <i-label caption="Transaction deadline"></i-label>
              <i-icon
                width={16}
                height={16}
                name="question-circle"
                fill="rgba(255,255,255,0.55)"
                tooltip={{
                  content: 'Your transaction will revert if it is pending for more than this long.'
                }}
              ></i-icon>
            </i-hstack>
            <i-hstack id="deadlineInputRow" verticalAlignment='center'>
              <i-input
                id="deadlineInput"
                height={40}
                width="100%"
                class="transaction-input"
                inputType="number"
                onChanged={this.inputDeadline}
                onBlur={this.blurTransactionDeadline}
              ></i-input>
              <i-label class="ml-1" caption="minutes"></i-label>
              <i-hstack id="deadlineGroup" ></i-hstack>
            </i-hstack>
            <i-hstack id="switchBoxRow" horizontalAlignment='space-between' verticalAlignment='center' class="mt-1">
              <i-label class="toggle-text" caption="Toggle Expert Mode"></i-label>
              <i-switch
                id="switchBox"
                checkedTrackColor="transparent"
                uncheckedTrackColor="transparent"
                checkedThumbText="Off"
                uncheckedThumbText="On"
                checkedText="Off"
                uncheckedText="On"
                checked={isExpertMode()}
                onClick={this.handleProcessExpertMode}
              ></i-switch>
            </i-hstack>
          </i-panel>
        </i-panel>
      </i-modal>
    )
  }
};