import "./ConnectWalletModal.scss";
import MetaMaskIcon from "../../../assets/images/icons/metamask.png";

type Props = {
  onSuccess?: () => void;
};

function ConnectWalletModal(props: Props) {
  function handleWalletConnectSuccess() {
    props.onSuccess && props.onSuccess();
  }

  function handleMetaMaskWalletClick() {
    handleWalletConnectSuccess();
  }

  return (
    <div className="wallets">
      <button className="wallet-item" onClick={handleMetaMaskWalletClick}>
        <img className="wallet-icon" src={MetaMaskIcon} alt="Wallet Icon" />
        <span className="wallet-name">Metamask</span>
      </button>
      <button className="wallet-item" onClick={handleMetaMaskWalletClick}>
        <img className="wallet-icon" src={MetaMaskIcon} alt="Wallet Icon" />
        <span className="wallet-name">Metamask</span>
      </button>
    </div>
  );
}

export default ConnectWalletModal;
