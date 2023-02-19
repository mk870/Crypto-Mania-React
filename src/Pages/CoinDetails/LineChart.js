import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import CoinPricePrediction from "./CoinPricePrediction";
import { getTime } from "./Utilis/AxisDataPreprocessing";
import { LineChartStyles } from "./Styles/LineChartStyles";
import { colors } from "../../components/utils/ThemeColors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({
  price,
  name,
  history,
  timePeriod,
  setTimePeriod,
  time,
}) => {
  const coinprice = [];
  const cointime = [];
  const { coinId } = useParams();
  const theme = useSelector((state) => state.theme.value);
  for (let i = 0; i < history.length; i += 1) {
    coinprice.push(history[i].price);
    cointime.push(new Date(history[i].timestamp * 1000));
  }

  const data = {
    labels: cointime.reverse().map((time) => {
      const daytime = getTime(timePeriod, time);
      return timePeriod === "3h" ||
        timePeriod === "24h" ||
        timePeriod === "7d" ||
        timePeriod === "30d" ||
        timePeriod === "3m" ||
        timePeriod === "3y" ||
        timePeriod === "5y"
        ? daytime
        : time.toLocaleDateString();
    }),
    datasets: [
      {
        label: "Price in USD",
        data: coinprice.reverse(),
        fill: false,
        backgroundColor: "rgba(255,0,0,0.0)",
        borderColor: "#0071bd",
        borderWidth: 2,
        pointStyle: "circle",
        radius: 2,
        hoverRadius: 3,
        pointBorderColor: "rgba(255,0,0,0.0)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  const showPred = (coinId) => {
    if (
      coinId === "Qwsogvtv82FCd" ||
      coinId === "razxDUgYGNAdQ" ||
      coinId === "D7B1x_ks7WhV5"
    ) {
      return (
        <CoinPricePrediction coinId={coinId} name={name} coinprice={price} />
      );
    }
  };

  return (
    <LineChartStyles colors={colors(theme)}>
      <div className="header">
        <h3>{name} Price Chart</h3>
        <div className="coin">
          <select
            name="time"
            id="time"
            onChange={(e) => setTimePeriod(e.target.value)}
            value={timePeriod}
          >
            {time.map((period) => (
              <option value={period} key={period}>
                {period}
              </option>
            ))}
          </select>
          <span>Current price: ${price}</span>
        </div>
      </div>
      <div className="chart">
        <Line data={data} options={options} />
      </div>
      {showPred(coinId)}
    </LineChartStyles>
  );
};

export default LineChart;
