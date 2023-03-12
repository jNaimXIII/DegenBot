import "./DAPPHeader.scss";
import DegenBotLogo from "../../assets/images/DegenBotLogo.png";

function DAPPHeader() {
  return (
    <div className="dapp-header">
      <div className="brand-logo">
        <img src={DegenBotLogo} alt="DegenBot Logo" />
      </div>

      <nav className="site-nav">
        <DAPPNavigationList />
      </nav>

      <button className="connect-wallet-button">
        <span>Connect Wallet</span>
      </button>
    </div>
  );
}

export default DAPPHeader;

function DAPPNavigationList() {
  return (
    <ul>
      <li>
        <a href="#" className={window.location.pathname === "/dapp" ? "active" : ""}>
          Home
        </a>
      </li>
      <li>
        <a href="#features" className={window.location.pathname === "" ? "active" : ""}>
          Copy Trading
        </a>
      </li>
    </ul>
  );
}
