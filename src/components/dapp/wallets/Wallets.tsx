import "./Wallets.scss";

function Wallets() {
  const dummyWalletsList = [
    {
      name: "Dan's",
      address: "0xgt767hn....fdf4",
      balance: "500",
    },
    {
      name: "Dan's",
      address: "0xgt767hn....fdf4",
      balance: "500",
    },
    {
      name: "Dan's",
      address: "0xgt767hn....fdf4",
      balance: "500",
    },
    {
      name: "Dan's",
      address: "0xgt767hn....fdf4",
      balance: "500",
    },
  ];

  return (
    <div className="wallets-card">
      <div className="wallets-card-header">
        <h3 className="card-title">Multiple Wallets</h3>

        <button className="action-button">Import New</button>
      </div>

      <div className="content">
        <table>
          <thead>
            <tr>
              <th className="wallet-heading">Wallets</th>
              <th className="balance-heading">Balance</th>
            </tr>
          </thead>

          <tbody>
            {dummyWalletsList.map((wallet, index) => (
              <tr key={index} className={index === 0 ? "first" : ""}>
                <td className="wallet-info-col">
                  <span className="wallet-name">{wallet.name}</span>
                  <span className="wallet-address">{wallet.address}</span>
                </td>

                <td className="wallet-balance-col">
                  <span className="wallet-balance">{wallet.balance}</span>
                  <span className="wallet-currency">ETH</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="wallet-card-footer">
        <button className="action-button">Export Old</button>
      </div>
    </div>
  );
}

export default Wallets;
