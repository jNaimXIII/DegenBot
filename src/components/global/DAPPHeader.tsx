import "./DAPPHeader.scss";
import DegenBotLogo from "../../assets/images/DegenBotLogo.png";
import { useState } from "react";
import ConnectWalletModal from "../dapp/details/ConnectWalletModal";
import GlobalModal from "./GlobalModal";

function DAPPHeader() {
  // NOTE: this state is being separately managed in the DAPPHeader and the ContractLimitOrders components
  // TODO: merge the following state using context for a global access point
  const [hasConnectedWallet, setHasConnectedWallet] = useState(false);
  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);

  function handleConnectWalletButtonClick() {
    setShowConnectWalletModal(true);
  }

  function handleConnectWalletModalClose() {
    setShowConnectWalletModal(false);
  }

  function handleConnectWalletModalSuccess() {
    setHasConnectedWallet(true);
    handleConnectWalletModalClose();
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

      <button onClick={handleConnectWalletButtonClick} className="connect-wallet-button">
        <span>Connect Wallet</span>
      </button>

      {showConnectWalletModal && (
        <GlobalModal
          name="Select Wallet"
          isOpen={showConnectWalletModal}
          onCancel={handleConnectWalletModalClose}
        >
          <ConnectWalletModal onSuccess={handleConnectWalletModalSuccess} />
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
