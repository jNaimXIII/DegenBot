import "./ContractDetails.scss";
import ContractDetailsBanner from "./ContractDetailsBanner";
import ContractHotProjects from "./ContractHotProjects";
import ContractLimitOrders from "./ContractLimitOrders";

function ContractDetails() {
  return (
    <div className="contract-details-cards">
      <div className="details-banner">
        <ContractDetailsBanner />
      </div>

      <div className="limit-orders">
        <ContractLimitOrders />
      </div>

      <div className="hot-projects">
        <ContractHotProjects />
      </div>
    </div>
  );
}

export default ContractDetails;
