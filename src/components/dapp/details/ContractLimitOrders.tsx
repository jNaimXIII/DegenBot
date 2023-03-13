import "./ContractLimitOrders.scss";
import ContractLimitOrderItem from "./ContractLimitOrderItem";

function ContractLimitOrders() {
  return (
    <div className="contract-limit-orders">
      <div className="header">
        <span className="card-title">Current Positions / Limit Orders</span>

        <button className="action-button">New Position</button>
      </div>

      <div className="content">
        <ContractLimitOrderItem editViewMode />
        <ContractLimitOrderItem />
        <ContractLimitOrderItem />
        <ContractLimitOrderItem />
        <ContractLimitOrderItem />
        <ContractLimitOrderItem />
        <ContractLimitOrderItem />
      </div>
    </div>
  );
}

export default ContractLimitOrders;
