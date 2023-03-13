import "./ContractHotProjectItem.scss";
import BitCoinIcon from "../../../assets/images/icons/btc.png";

function ContractHotProjectItem() {
  return (
    <div className="contract-hot-project-item">
      <div className="token">
        <img src={BitCoinIcon} alt="" className="icon" />
        <span className="label">Bitcoin Index</span>
      </div>

      <span className="diff-value positive">+$1536</span>

      <span className="time">2 days ago</span>

      <span className="date">24 Jul</span>

      <span className="value">25,000$</span>
    </div>
  );
}

export default ContractHotProjectItem;
