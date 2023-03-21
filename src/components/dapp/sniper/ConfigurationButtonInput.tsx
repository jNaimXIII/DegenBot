import "./ConfigurationButtonInput.scss";

type Props = {
  label: string;
  oneLine?: boolean;
};

function ConfigurationButtonInput(props: Props) {
  return (
    <label className={`configuration-button-input ${props.oneLine ? "oneline" : ""}`}>
      <button className="input-button">{props.label}</button>
      <input className="text-input" type="text" />
    </label>
  );
}

export default ConfigurationButtonInput;
