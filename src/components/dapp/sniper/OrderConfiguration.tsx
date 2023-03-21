import "./OrderConfiguration.scss";
import EthIcon from "../../../assets/images/icons/eth.png";
import OrderConfigurationItem from "./OrderConfigurationItem";
import ConfigurationLabeledInput from "./ConfigurationLabeledInput";
import ConfigurationButtonInput from "./ConfigurationButtonInput";
import ConfigurationActionButton from "./ConfigurationActionButton";

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

      <div className="content">
        <OrderConfigurationItem itemLabel="Method ID">
          <ConfigurationLabeledInput label="ETH Amount" />
          <ConfigurationLabeledInput label="Max TX Percent" />
        </OrderConfigurationItem>

        <OrderConfigurationItem itemLabel="Sell Config">
          <ConfigurationLabeledInput label="Percent To Sell" />
        </OrderConfigurationItem>

        <OrderConfigurationItem itemLabel="Cancel Config">
          <ConfigurationLabeledInput oneLine label="Gas Multiplier" />
          <ConfigurationButtonInput oneLine label="Get Selector" />
        </OrderConfigurationItem>

        <OrderConfigurationItem itemLabel="Watcher">
          <ConfigurationActionButton label="Active Contracts" />
          <ConfigurationActionButton label="Watched Contracts" />
        </OrderConfigurationItem>
      </div>
    </div>
  );
}

export default OrderConfiguration;
