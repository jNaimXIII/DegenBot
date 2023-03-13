import "./ContractDetailsBanner.scss";
import EthIcon from "../../../assets/images/icons/eth.png";

function ContractDetailsBanner() {
  return (
    <div className="contract-details-banner">
      <div className="header">
        <div className="details">
          <span className="label">Contract Details:</span>
          <span className="address">0xgt767hn....fdf4</span>
        </div>

        <div className="token">
          <img src={EthIcon} alt="Eth Icon" className="logo" />
          <span className="name">Ethereum</span>
          <span className="sign">(ETH)</span>
        </div>
      </div>

      <div className="content">
        <div className="stat-item">
          <span className="value">1.000054</span>
          <span className="sub">$</span>
          <span className="tag">PRICE</span>
        </div>

        <div className="stat-item">
          <span className="value">20B</span>
          <span className="tag">
            Total
            <br />
            Price
          </span>
        </div>

        <div className="stat-item">
          <span className="value">5</span>
          <span className="tag">Decimal</span>
        </div>

        <div className="stat-item">
          <div className="joined">
            <span className="value">5</span>
            <span className="sub">%</span>

            <div className="vertical-divider">/</div>

            <span className="value">5</span>
            <span className="sub">%</span>
          </div>

          <span className="tag">
            Buy/Sell
            <br />
            Tax
          </span>
        </div>

        <div className="stat-item">
          <span className="value">1</span>
          <span className="sub">ETH</span>
          <span className="tag">
            Owner
            <br />
            Balance
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContractDetailsBanner;
