import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { coinOptions } from "../ApiOptions/CoinOptions";
import CoinDescription from "./CoinDescription";
import Coinstats from "./Coinstats";
import LineChart from "./LineChart";
import { CryptoDetailsStyles } from "./Styles/CryptoDetailsStyles";
import millify from "millify";
import { historyOptions } from "../ApiOptions/CoinHistory";
import ApiError from "../HandleErrors/ApiError";
import Spinner from "../HandleLoading/Spinner";
import { useSelector } from "react-redux";
import { colors } from "../utils/ThemeColors";

const CrtyptoDetails = ({ voicePageNavigation, setVoicePageNavigation }) => {
  const { coinId } = useParams();
  const theme = useSelector((state) => state.theme.value);
  const [coindata, setCoinData] = useState("");
  const [error, setError] = useState("");
  const [history, setHistory] = useState("");
  const [timePeriod, setTimePeriod] = useState("7d");
  const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
  const navigate = useNavigate();
  useEffect(() => {
    setError("");
    setCoinData("");
    axios
      .request(coinOptions(coinId))
      .then(function (response) {
        setCoinData(response.data.data.coin);
      })
      .catch(function (error) {
        setError("failed to fetch Please check Network connection");
      });
  }, [coinId]);
  useEffect(() => {
    setError("");
    setHistory("");
    axios
      .request(historyOptions(coinId, timePeriod))
      .then(function (response) {
        setHistory(response.data.data.history);
      })
      .catch(function (error) {
        setError("failed to fetch Please check Network connection");
      });
  }, [timePeriod, coinId]);

  useEffect(() => {
    if (voicePageNavigation) {
      navigate(voicePageNavigation);
    }
    return () => {
      setVoicePageNavigation("");
    };
  }, [voicePageNavigation]);

  return (
    <CryptoDetailsStyles colors={colors(theme)}>
      {coindata && history && !error && (
        <div className="container">
          <Coinstats
            coindata={coindata}
            time={time}
            setTimePeriod={setTimePeriod}
            timePeriod={timePeriod}
          />
          <LineChart
            price={millify(coindata.price)}
            name={coindata.name}
            history={history}
            timePeriod={timePeriod}
            setTimePeriod={setTimePeriod}
            time={time}
          />
          <CoinDescription coindata={coindata} />
        </div>
      )}
      {error && <ApiError error={error} />}
      {!error && !coindata && !history && <Spinner />}
    </CryptoDetailsStyles>
  );
};

export default CrtyptoDetails;
