import axios from "axios";
import React, { useEffect, useState } from "react";
import ApiError from "../HandleErrors/ApiError";
import { historyOptions } from "../ApiOptions/CoinHistory";
import { Button2 } from "../Buttons/Button2";
import Spinner from "../HandleLoading/Spinner";
import { useSelector } from "react-redux";
import { colors } from "../utils/ThemeColors";
import { CoinPricePredictionStyles } from "./Styles/CoinPricePredictionStyles";
import PredictedLineChart from "./PredictedLineChart";
import {aiBackendEndPoint} from "./../utils/BackendEndPoint"

const CoinPricePrediction = ({ coinId, name, coinprice }) => {
  const [prediction, setPrediction] = useState("");
  const [history, setHistory] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [preddays, setPreddays] = useState("");
  const theme = useSelector((state) => state.theme.value);
  const timePeriod = "1y";
  const price = [];
  const [data, setData] = useState("");
  const getPrice = (response) => {
    for (let i = 0; i < response.length; i += 1) {
      price.push(response[i].price);
    }
    return price;
  };
  useEffect(() => {
    axios
      .request(historyOptions(coinId, timePeriod))
      .then(function (response) {
        setHistory(response.data.data.history);
        setData(getPrice(response.data.data.history));
      })
      .catch(function (error) {
        setError("failed to fetch Please check Network connection");
      });
  }, []);

  const coinname = (name) => {
    if (name === "Litecoin") {
      return "litecoin";
    } else if (name === "Bitcoin") {
      return "bitcoin";
    } else {
      return "ethereum";
    }
  };
  const predict = (predictedDays) => {
    const pred = data.slice(0, 60).reverse();
    setPreddays(predictedDays);
    setLoader(true);
    fetch(
      `${aiBackendEndPoint}/${coinname(name)}`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({
          modelInputs: pred,
          days: predictedDays,
        }),
        cache: "no-cache",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw Error(
            "Could not fetch data please check your network connection or try again"
          );
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setPrediction(data);
        setLoader(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoader(false);
        setTimeout(() => {
          setError("");
        }, 4000);
      });
  };
  return (
    <CoinPricePredictionStyles colors={colors(theme)}>
      <h3>Click to Predict Price</h3>
      {data && !error && (
        <div className="predictions">
          <Button2 onClick={() => predict(1)} colors={colors(theme)}>
            Next 24hrs
          </Button2>
          <Button2 onClick={() => predict(3)} colors={colors(theme)}>
            Next 3 Days
          </Button2>
          <Button2 onClick={() => predict(7)} colors={colors(theme)}>
            Next 7 Days
          </Button2>
          <Button2 onClick={() => predict(14)} colors={colors(theme)}>
            Next 14 Days
          </Button2>
        </div>
      )}
      {prediction && !error && !loader && (
        <PredictedLineChart
          history={history}
          prediction={prediction.predictions}
          name={name}
          price={coinprice}
          preddays={preddays}
        />
      )}
      {error && <ApiError error={error} />}
      {!data && !error && !loader && <Spinner />}
      {loader && <Spinner />}
    </CoinPricePredictionStyles>
  );
};

export default CoinPricePrediction;
