import "./ContractLimitOrders.scss";
import ContractLimitOrderItem from "./ContractLimitOrderItem";
import { useState } from "react";
import GlobalModal from "../../global/GlobalModal";
import ConnectWalletModal from "./ConnectWalletModal";
import { useWalletConnectStore } from "../../../stores/walletConnect";

function ContractLimitOrders() {
  const walletConnectStore = useWalletConnectStore();
  const [showConnectWalletModal, setShowConnectWalletModal] = useState(false);

  function handleConnectWalletButtonClick() {
    setShowConnectWalletModal(true);
  }

  function handleConnectWalletModalClose() {
    setShowConnectWalletModal(false);
  }

  function handleConnectWalletModalSuccess() {
    walletConnectStore.setWalletConnectedStatus("connected");
    handleConnectWalletModalClose();
  }

  function handleNewPositionButtonClick() {}

  return (
    <div className="contract-limit-orders">
      <div className="header">
        <span className="card-title">Current Positions / Limit Orders</span>

        {walletConnectStore.walletConnectStatus === "disconnected" ? (
          <button className="action-button" onClick={handleConnectWalletButtonClick}>
            Connect Wallet
          </button>
        ) : (
          <button className="action-button" onClick={handleNewPositionButtonClick}>
            New Position
          </button>
        )}

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

      <div className="content">
        {walletConnectStore.walletConnectStatus === "connected" && (
          <>
            <ContractLimitOrderItem editViewMode />
            <ContractLimitOrderItem />
            <ContractLimitOrderItem />
            <ContractLimitOrderItem />
            <ContractLimitOrderItem />
            <ContractLimitOrderItem />
            <ContractLimitOrderItem />
          </>
        )}
      </div>
    </div>
  );
}

export default ContractLimitOrders;
