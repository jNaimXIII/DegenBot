import "./Balance.scss";
import BitCoinLogo from "../../../assets/images/icons/btc.png";
import { Line } from "react-chartjs-2";
import { ScriptableContext } from "chart.js";
import { generateRandomInteger } from "../../../utils/generateRandomInteger";
import { waveSort } from "./../../../utils/waveSort";

function Balance() {
  const labels = new Array(10).fill("");
  let points = labels.map(() => generateRandomInteger(35, 100)).sort();
  points = waveSort(points, points.length);

  return (
    <div className="wallet-balance-card">
      <div className="content">
        <span className="title">Your Balance</span>

        <span className="amount">230.9</span>

        <span className="currency">
          <img className="logo" src={BitCoinLogo} alt="BitCoin Logo" />
          <span className="name">BNB</span>
        </span>

        <span className="pnl">
          <span className="pnl-amount">50</span>
          <span className="currency">ETH</span>
          <span className="label">PNL</span>
        </span>
      </div>

      <div className="chart">
        <Line
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: false,
              },
              filler: {
                propagate: false,
              },
            },
            scales: {
              y: {
                display: false,
                suggestedMin: 50,
              },
              x: {
                display: false,
              },
            },
            elements: {
              point: {
                radius: 0,
              },
              line: {
                tension: 0.4,
              },
            },
          }}
          data={{
            labels,
            datasets: [
              {
                data: points,
                borderColor: "#34C759",
                backgroundColor: (context: ScriptableContext<"line">) => {
                  const ctx = context.chart.ctx;
                  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                  gradient.addColorStop(0, "#34C759");
                  gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
                  return gradient;
                },
                fill: "start",
                yAxisID: "y",
                xAxisID: "x",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

export default Balance;
