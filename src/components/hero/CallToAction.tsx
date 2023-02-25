import "./CallToAction.scss";

type CallToActionProps = {
  label: string;
  filled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  compact?: boolean;
};

function CallToAction(props: CallToActionProps) {
  return (
    <button
      className={`
        call-to-action
        ${props.filled ? "filled" : ""}
        ${props.fullWidth ? "full-width" : ""}
        ${props.compact ? "compact" : ""}
      `}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default CallToAction;
