import FeatureItem from "./FeatureItem";
import "./Features.scss";

import Feature_SniperBotImage from "../../assets/images/Feature_SniperBot.png";
import Feature_MarketBuyOrSellImage from "../../assets/images/Feature_MarketBuyOrSell.png";
import Feature_CopyTradeImage from "../../assets/images/Feature_CopyTrade.png";
import Feature_WalletWatcherImage from "../../assets/images/Feature_WalletWatcher.png";
import SectionHeading from "../global/SectionHeading";

function Features() {
  const features = [
    {
      label: ["Sniper", "Bot"],
      highlightedIndex: 1,
      description:
        "Our sniper bot utilizes Bloxroutes high-performance mempool services for 0ms latency.  Enter the tokens contract method ID and buy amount and snipe any listings at ease! Our sniper comes with blacklist protection, rug protection and even a custom honeypot filter to ensure safety and minimize risk! Get ready to ape into almost any listing with zero risk!",
      propImage: Feature_SniperBotImage,
      inverted: true,
      lineBreak: false,
    },
    {
      label: ["Market", "Buy/Sell"],
      highlightedIndex: 1,
      description:
        "Our Trading Suite includes market buy and sell options via our custom contract which prevents you from any frontrun bots. Settings include gas optimization, multiple exchange support, test sells for honeypots, rug protection, multiwallets and much more! Our software gives you all that you need for a competitive edge.",
      propImage: Feature_MarketBuyOrSellImage,
      inverted: false,
      lineBreak: true,
    },
    {
      label: ["Copy", "Trade"],
      highlightedIndex: 0,
      description:
        "Mirror trade high ROI wallets trades & sell automatically; or set limit orders and stop losses for risk management. Our suite will also include a wallet analyzer which can generate updated lists daily using our highly advanced algorithm to find high ROI wallets that can be utilized for CopyTrade so you can Degen at ease and generate that passive income you've always dreamed of.",
      propImage: Feature_CopyTradeImage,
      inverted: true,
      lineBreak: false,
    },
    {
      label: ["Wallet", "Watcher"],
      highlightedIndex: 1,
      description:
        "Get connected with all insider wallets & highly active whale wallets with this panel. Access to the wallet analyzer will require a higher tier and will give you insight to alpha wallets. Transaction data will be updated in real time and will give you not only the wallets buy/sells but it will also give you the transaction volume, tax, holder distribution etc. of each token the whale/insider wallets buy so you can make informed decisions on your investments.",
      propImage: Feature_WalletWatcherImage,
      inverted: false,
      lineBreak: true,
    },
  ];

  return (
    <section className="features-section" id="features">
      <SectionHeading tag="The Core" label="Features" />

      <div className="features">
        {features.map((item, index) => (
          <FeatureItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Features;
