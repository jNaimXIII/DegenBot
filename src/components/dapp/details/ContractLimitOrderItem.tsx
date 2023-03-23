import "./ContractLimitOrderItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import GlobalModal from "../../global/GlobalModal";
import ContractTPorSLForm from "./ContractTPorSLForm";

type Props = {
  editViewMode?: boolean;
};

function ContractLimitOrderItem(props: Props) {
  const [showAddTPorSLModal, setShowAddTPorSLModal] = useState(false);

  function handleAddTPorSLButtonClick() {
    setShowAddTPorSLModal(true);
  }

  function handleAddTPorSLModalClose() {
    setShowAddTPorSLModal(false);
  }

  function handleAddTPorSLModalSuccess() {
    handleAddTPorSLModalClose();
  }

  return (
    <div className="contract-limit-order-item">
      <div className="stat-item">
        <span className="value">20B</span>
        <span className="tag">
          Balance /
          <br />
          ETH Value
        </span>
      </div>

      <div className="stat-item">
        <span className="value">20B</span>
        <span className="tag">
          Balance /
          <br />
          ETH Value
        </span>
      </div>

      {props.editViewMode ? (
        <div className="edit-content">
          <div className="stats">
            <div className="stat-item">
              <span className="label">TP:</span>
              <span className="value">4590$</span>
            </div>

            <div className="stat-item">
              <span className="label">SL:</span>
              <span className="value">1100$</span>
            </div>
          </div>

          <button className="edit-button">
            <FontAwesomeIcon icon={faPencil} color="#f00031" size="lg" />
          </button>
        </div>
      ) : (
        <button className="add-button" onClick={handleAddTPorSLButtonClick}>
          Add TP/SL
        </button>
      )}

      {showAddTPorSLModal && (
        <GlobalModal
          name="Take Profit / Stop Loss"
          isOpen={showAddTPorSLModal}
          onCancel={handleAddTPorSLModalClose}
        >
          <ContractTPorSLForm
            onCancel={handleAddTPorSLModalClose}
            onSuccess={handleAddTPorSLModalSuccess}
          />
        </GlobalModal>
      )}
    </div>
  );
}

export default ContractLimitOrderItem;
