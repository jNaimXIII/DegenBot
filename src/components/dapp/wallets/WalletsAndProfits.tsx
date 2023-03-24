import Balance from "./Balance";
import Investment from "./Investment";
import Wallets from "./Wallets";
import "./WalletsAndProfits.scss";

function WalletsAndProfits() {
  return (
    <div className="wallets-and-profits-cards">
      <Wallets />
      <Balance />
      <Investment />
    </div>
  );
}

export default WalletsAndProfits;
