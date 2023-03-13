import "./OrderConfiguration.scss";
import EthIcon from "../../../assets/images/icons/eth.png";

function OrderConfiguration() {
  return (
    <div className="sniper-order-configuration">
      <div className="header">
        <span className="label">Snipe / Copy Trade / Market Order Configuration</span>

        <div className="token">
          <img src={EthIcon} alt="Eth Icon" className="logo" />
          <span className="name">Ethereum</span>
          <span className="sign">(ETH)</span>
        </div>
      </div>
    </div>
  );
}

export default OrderConfiguration;
