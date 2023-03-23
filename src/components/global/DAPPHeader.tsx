import "./DAPPHeader.scss";
import DegenBotLogo from "../../assets/images/DegenBotLogo.png";
import { useState } from "react";
import ConnectWalletModal from "../dapp/details/ConnectWalletModal";
import DisconnectWalletModal from "../dapp/details/DisconnectWalletModal";
import GlobalModal from "./GlobalModal";
import { useWalletConnectStore } from "../../stores/walletConnect";

function DAPPHeader() {
  const walletConnectStore = useWalletConnectStore();

  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);
  const [showDisconnectWalletModal, setShowDisconnectWalletModal] = useState(false);

  function handleConnectWalletButtonClick() {
    setShowConnectWalletModal(true);
  }

  function handleConnectWalletModalClose() {
    setShowConnectWalletModal(false);
  }

  function handleDisconnectWalletButtonClick() {
    setShowDisconnectWalletModal(true);
  }

  function handleDisconnectWalletModalClose() {
    setShowDisconnectWalletModal(false);
  }

  function handleWalletConnectSuccess() {
    walletConnectStore.setWalletConnectedStatus("connected");
    setShowConnectWalletModal(false);
  }

  function handleWalletDisconnectSuccess() {
    walletConnectStore.setWalletConnectedStatus("disconnected");
    setShowDisconnectWalletModal(false);
  }

  return (
    <div className="dapp-header">
      <div className="brand-logo">
        <a href="/?portal=false">
          <img src={DegenBotLogo} alt="DegenBot Logo" />
        </a>
      </div>

      <nav className="site-nav">
        <DAPPNavigationList />
      </nav>

      {walletConnectStore.walletConnectStatus === "disconnected" && (
        <button onClick={handleConnectWalletButtonClick} className="connect-wallet-button">
          <span>Connect Wallet</span>
        </button>
      )}

      {walletConnectStore.walletConnectStatus === "connected" && (
        <button onClick={handleDisconnectWalletButtonClick} className="disconnect-wallet-button">
          <span>Disconnect Wallet</span>
        </button>
      )}

      {showConnectWalletModal && (
        <GlobalModal
          name="Select Wallet"
          isOpen={showConnectWalletModal}
          onCancel={handleConnectWalletModalClose}
        >
          <ConnectWalletModal onSuccess={handleWalletConnectSuccess} />
        </GlobalModal>
      )}
      {showDisconnectWalletModal && (
        <GlobalModal
          name="Disconnect Wallet"
          isOpen={showDisconnectWalletModal}
          onCancel={handleDisconnectWalletModalClose}
        >
          <DisconnectWalletModal onSuccess={handleWalletDisconnectSuccess} />
        </GlobalModal>
      )}
    </div>
  );
}

export default DAPPHeader;

function DAPPNavigationList() {
  return (
    <ul>
      <li>
        <a href="#" className={window.location.pathname === "/dapp" ? "active" : ""}>
          Home
        </a>
      </li>
      <li>
        <a href="#features" className={window.location.pathname === "" ? "active" : ""}>
          Copy Trading
        </a>
      </li>
    </ul>
  );
}
