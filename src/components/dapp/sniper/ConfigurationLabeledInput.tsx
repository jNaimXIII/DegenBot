import "./ConfigurationLabeledInput.scss";

type Props = {
  label: string;
  oneLine?: boolean;
};

function ConfigurationLabeledInput(props: Props) {
  return (
    <label className={`configuration-labeled-input ${props.oneLine ? "oneline" : ""}`}>
      <span className="input-label-text">{props.label}</span>
      <input className="text-input" type="text" />
    </label>
  );
}

export default ConfigurationLabeledInput;
