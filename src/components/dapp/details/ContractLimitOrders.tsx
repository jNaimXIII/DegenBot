import "./ContractLimitOrders.scss";
import ContractLimitOrderItem from "./ContractLimitOrderItem";
import { useState } from "react";
import GlobalModal from "../../global/GlobalModal";
import ConnectWalletModal from "./ConnectWalletModal";

function ContractLimitOrders() {
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

  function handleNewPositionButtonClick() {}

  return (
    <div className="contract-limit-orders">
      <div className="header">
        <span className="card-title">Current Positions / Limit Orders</span>

        {!hasConnectedWallet ? (
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
        {hasConnectedWallet && (
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
