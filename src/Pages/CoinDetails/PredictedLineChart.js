import React from "react";
import { FcHighPriority } from "react-icons/fc";
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
import { PredictedLineChartStyles } from "./Styles/PredictedLineChartStyles";
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

const PredictedLineChart = ({ history, prediction, name, price, preddays }) => {
  const histprice = [];
  const histtime = [];
  const predprice = [];
  const theme = useSelector((state) => state.theme.value);
  for (let i = 0; i < history.length; i += 1) {
    histprice.push(history[i].price);
    histtime.push(new Date(history[i].timestamp * 1000).toLocaleDateString());
  }

  const time = (histtime) => {
    const now = new Date().getTime();
    for (let i = 1; i < preddays + 1; i++) {
      histtime.push(
        new Date(now + 1000 * 60 * 60 * 24 * i).toLocaleDateString()
      );
    }
    return histtime;
  };
  const actualprice = (histprice) => {
    for (let i = 1; i < preddays + 1; i++) {
      histprice.push(NaN);
    }
    return histprice;
  };
  predprice.push(history[0].price);
  for (let i = 0; i < history.length - 1; i++) {
    predprice.push(NaN);
  }
  const predfutureprice = (predprice) => {
    for (let i = 0; i < prediction.length; i++) {
      predprice.push(prediction[i]);
    }
    return predprice;
  };
  const data = {
    labels: time(histtime.reverse()),
    datasets: [
      {
        label: "Historical Price in USD",
        data: actualprice(histprice.reverse()),
        fill: false,
        backgroundColor: "rgba(255,0,0,0.0)",
        borderColor: "#0071bd",
        borderWidth: 2,
        pointStyle: "circle",
        radius: 2,
        hoverRadius: 3,
        pointBorderColor: "rgba(255,0,0,0.0)",
      },
      {
        label: "Predicted Price in USD",
        data: predfutureprice(predprice.reverse()),
        fill: false,
        backgroundColor: "rgba(255,0,0,0.0)",
        borderColor: "red",
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

  return (
    <PredictedLineChartStyles colors={colors(theme)}>
      <div className="header">
        <h3>{name} Actual and Predicted Price Chart</h3>
        <span>Current price: ${price}</span>
      </div>
      <div className="warning">
        <p>
          <span>
            <FcHighPriority fontSize={15} />
            Risk Warning:{" "}
          </span>
          Crypto currency trading involves a significant risk to your invested
          capital. Please do your own research and ensure you fully understand
          the risks involved.
        </p>
      </div>
      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </PredictedLineChartStyles>
  );
};

export default PredictedLineChart;
