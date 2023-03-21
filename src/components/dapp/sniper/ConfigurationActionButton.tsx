import "./ConfigurationActionButton.scss";

type Props = {
  label: string;
};

function ConfigurationActionButton(props: Props) {
  return <button className="configuration-action-button">{props.label}</button>;
}

export default ConfigurationActionButton;
