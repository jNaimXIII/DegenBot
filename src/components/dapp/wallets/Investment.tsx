import { generateRandomInteger } from "../../../utils/generateRandomInteger";
import { waveSort } from "../../../utils/waveSort";
import "./Investment.scss";
import { Bar } from "react-chartjs-2";

function Investment() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let points = labels.map(() => generateRandomInteger(0, 100)).sort();
  points = waveSort(points, points.length);

  return (
    <div className="investments-card">
      <div className="investments-header">
        <div className="investments-title">Your Investments</div>
      </div>

      <div className="investments-chart">
        <Bar
          data={{
            labels,
            datasets: [
              {
                data: points,
                backgroundColor: "#34C759",
                barPercentage: 0.5,
                borderColor: "#34C759",
                borderRadius: {
                  topLeft: 64,
                  topRight: 64,
                },
              },
            ],
          }}
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
          }}
        />
      </div>
    </div>
  );
}

export default Investment;
