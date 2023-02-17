import {
  customElements,
  customModule,
  Module,
  Container,
  ControlElement,
  Modal,
  Panel,
} from '@ijstech/components';
import { TransactionSettingsLayout } from '@swap/transaction-settings-layout';
import styleClass from './index.css';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['transaction-settings']: ControlElement;
		}
	}
};

@customModule
@customElements('transaction-settings')
export class TransactionSettings extends Module {
  private transactionModal: Modal;
  private transactionLayout: TransactionSettingsLayout;
  private mainContent: Panel;

	constructor(parent?: Container, options?: any) {
		super(parent, options);
	};

	async init(){
		this.classList.add(styleClass);
    super.init();
    this.transactionLayout = new TransactionSettingsLayout();
    this.mainContent.appendChild(this.transactionLayout);
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
        <i-panel id="mainContent"></i-panel>
      </i-modal>
		)
	}
};