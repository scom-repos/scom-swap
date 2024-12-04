import { customElements, customModule, Module, Container, ControlElement, Modal, application, IEventBus, Styles } from '@ijstech/components';
import { State } from '../store/index';
import { EventId } from '../global/index';
import { settingsJson } from '../languages/index';
const Theme = Styles.Theme.ThemeVars;

declare global {
	namespace JSX {
		interface IntrinsicElements {
			['i-scom-swap-expert-mode-settings']: ControlElement;
		}
	}
};

@customModule
@customElements('i-scom-swap-expert-mode-settings')
export class ExpertModeSettings extends Module {
  private expertModal: Modal;
  private $eventBus: IEventBus;
  private state: State;

	constructor(state: State, parent?: Container, options?: any) {
		super(parent, options);
    this.state = state;
    this.$eventBus = application.EventBus;
	};

  closeModal() {
    this.expertModal.visible = false;
  }

  showModal() {
    this.expertModal.visible = true;
  }

  onToggle() {
    this.state.toggleExpertMode();
    this.closeModal();
    this.$eventBus.dispatch(EventId.ExpertModeChanged)
  }

  init() {
    this.i18n.init({...settingsJson});
    super.init();
  }

	render() {
		return (
      <i-modal
        id="expertModal"
        border={{radius: '1rem'}}
        padding={{top: '1rem', bottom: '1rem', left: '1rem', right: '1rem'}}
        width={327}
      >
        <i-hstack
          verticalAlignment="center" horizontalAlignment="space-between"
          margin={{bottom: '1.25rem'}} padding={{bottom: '0.75rem'}}
          border={{bottom: {width: '2px', style: 'solid', color: Theme.background.main}}}
        >
          <i-label
            font={{color: Theme.colors.primary.main, weight: 700, size: '1.125rem'}}
            caption="$expert_mode"
            margin={{left: 'auto', right: 'auto'}}
            padding={{left: '2rem', right: '2rem'}}
          ></i-label>
          <i-icon
            fill={Theme.colors.primary.main}
            name="times"
            width={16} height={16}
            cursor="pointer"
            onClick={() => this.closeModal()}
          ></i-icon>
        </i-hstack>
        <i-panel class="text-center">
          <i-panel
            padding={{top: '1rem', bottom: '1rem', left: '0.75rem', right: '0.75rem'}}
            margin={{bottom: '1.25rem'}}
            background={{color: 'linear-gradient(90deg,#df5869 -19.25%,#bc4c7b 116.5%)'}}
            border={{width: '1px', style: 'solid', color: '#f15e61', radius: '0.5rem'}}
          >
            <i-label
              caption="$expert_mode_allows_high_slippage_trades_that_often_result_in_bad_rates_and_lost_funds"
              font={{weight: 'bold', color: Theme.colors.primary.contrastText, size: '1rem'}}
            ></i-label>
          </i-panel>
          <i-label
            class="warning-text"
            caption="$only_use_this_mode_if_you_know_what_you_are_doing"
            font={{weight: 'bold', color: Theme.colors.warning.light, size: '1.05rem'}}
          ></i-label>
          <i-button
            width="100%" height="auto"
            caption="$turn_on_expert_mode"
            padding={{top: '0.75rem', bottom: '0.75rem', left: '0.75rem', right: '0.75rem'}}
            margin={{top: '1.25rem', bottom: '0.5rem'}}
            font={{color: Theme.colors.primary.contrastText, weight: 700}}
            background={{color: 'transparent linear-gradient(255deg,#e75b66,#b52082) 0% 0% no-repeat padding-box'}}
            onClick={this.onToggle.bind(this)}
          ></i-button>
        </i-panel>
      </i-modal>
		)
	}
};