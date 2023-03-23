import "./DisconnectWalletModal.scss";

type Props = {
  onSuccess?: () => void;
  onCancel?: () => void;
};

function DisconnectWalletModal(props: Props) {
  function handleWalletDisconnectSuccess() {
    props.onSuccess && props.onSuccess();
  }

  function handleWalletDisconnectCancel() {
    props.onCancel && props.onCancel();
  }

  function handleWalletDisconnectConfirmClick() {
    handleWalletDisconnectSuccess();
  }

  function handleWalletDisconnectCancelClick() {
    handleWalletDisconnectCancel();
  }

  return (
    <div className="disconnect-confirm">
      <p className="warn-text">Are you sure you want to disconnect your wallet?</p>

      <div className="action-buttons">
        <button className="action-button cancel" onClick={handleWalletDisconnectCancelClick}>
          Cancel
        </button>
        <button className="action-button confirm" onClick={handleWalletDisconnectConfirmClick}>
          Disconnect
        </button>
      </div>
    </div>
  );
}

export default DisconnectWalletModal;
