import ContractHotProjectItem from "./ContractHotProjectItem";
import "./ContractHotProjects.scss";

function ContractHotProjects() {
  return (
    <div className="contract-hot-projects">
      <div className="header">
        <span className="card-title">Hot Projects</span>
      </div>

      <div className="content">
        <ContractHotProjectItem />
        <ContractHotProjectItem />
        <ContractHotProjectItem />
        <ContractHotProjectItem />
      </div>
    </div>
  );
}

export default ContractHotProjects;
