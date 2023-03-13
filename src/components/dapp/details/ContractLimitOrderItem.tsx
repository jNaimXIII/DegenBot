import "./ContractLimitOrderItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

type Props = {
  editViewMode?: boolean;
};

function ContractLimitOrderItem(props: Props) {
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
        <button className="add-button">Add TP/SL</button>
      )}
    </div>
  );
}

export default ContractLimitOrderItem;
