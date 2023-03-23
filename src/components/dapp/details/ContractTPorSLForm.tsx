import "./ContractTPorSLForm.scss";

type Props = {
  onSuccess?: () => void;
  onCancel?: () => void;
};

function ContractTPorSLForm(props: Props) {
  return (
    <form className="tp-or-sl-form">
      <ContractTPorSLFormItem>
        <span className="label">ETH Price</span>

        <span className="content">
          <span>$1756</span>
          <span className="sub">/ETH</span>
        </span>
      </ContractTPorSLFormItem>

      <div className="divider"></div>

      <ContractTPorSLFormItem>
        <label className="label">Take Profit</label>

        <span className="content">
          <input type="number" />
          <span className="sub">ETH</span>
        </span>
      </ContractTPorSLFormItem>

      <div className="divider"></div>

      <ContractTPorSLFormItem>
        <label className="label">Stop Loss</label>

        <span className="content">
          <input type="number" />
          <span className="sub">ETH</span>
        </span>
      </ContractTPorSLFormItem>

      <div className="spacer"></div>

      <ContractTPorSLFormItem>
        <button className="action-button cancel" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="action-button confirm" onClick={props.onSuccess}>
          Confirm
        </button>
      </ContractTPorSLFormItem>
    </form>
  );
}

export default ContractTPorSLForm;

function ContractTPorSLFormItem(props: { children?: JSX.Element | JSX.Element[] }) {
  return <div className="tp-or-sl-form-item">{props.children}</div>;
}
