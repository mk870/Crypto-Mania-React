import React, { useState, useEffect } from "react";
import ApiError from "../HandleErrors/ApiError";
import { Button2 } from "../Buttons/Button2";
import { JwtContext } from "../utils/AppContext";
import useFetchAuthorization from "../DataBaseApiFunctions/useFetchAuthorization";
import Spinner from "../HandleLoading/Spinner";
import { MyWatchListStyles } from "./MyWatchListStyles";
import { useSelector } from "react-redux";
import { colors } from "../utils/ThemeColors";
import { DeleteApiCall } from "../DataBaseApiFunctions/DeleteApiCall";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { backendEndPoint } from "../utils/BackendEndPoint";

const MyWatchList = ({ voicePageNavigation, setVoicePageNavigation }) => {
  const theme = useSelector((state) => state.theme.value);
  const [onDelete, setOnDelete] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [onload, setOnload] = useState(false);
  const { value } = useContext(JwtContext);
  const { apiData } = useFetchAuthorization(
    `${backendEndPoint}/api/account/cryptos`,
    setOnload,
    onDelete,
    setOnDelete,
    setError,
    error
  );

  const deleteItem = (id) => {
    DeleteApiCall(
      `${backendEndPoint}/api/account/crypto/${id}`,
      value,
      setOnDelete,
      setError
    );
  };

  useEffect(() => {
    if (voicePageNavigation) {
      navigate(voicePageNavigation);
    }
    return () => {
      setVoicePageNavigation("");
    };
  }, [voicePageNavigation]);

  return (
    <MyWatchListStyles colors={colors(theme)}>
      <div className="header">
        <h2>My WatchList </h2>
        <Button2
          colors={colors(theme)}
          onClick={() => navigate("/cryptodashboard")}
        >
          Add Crypto Coin
        </Button2>
      </div>
      {onload ? (
        <Spinner />
      ) : (
        <>
          {apiData &&
            !error &&
            apiData.map((crypto) => (
              <div className="cryptoList" key={crypto.id}>
                <div className="coin">
                  <span className="description">Rank</span>
                  <span>{crypto.rank}</span>
                </div>
                <div className="coin">
                  <span className="description">Name</span>
                  <span>{crypto.name}</span>
                </div>
                <div className="coin">
                  <span className="description">Market Cap</span>
                  <span>{crypto.mktCap}</span>
                </div>
                <div className="coin">
                  <span className="description">All Time Price High</span>
                  <span>{crypto.allTimeHighPrice}</span>
                </div>
                <div className="coin">
                  <span className="description">Coins In Circulation</span>
                  <span>{crypto.coinsInCirculation}</span>
                </div>
                <div className="btn">
                  <button onClick={() => deleteItem(crypto.id)}>Delete</button>
                </div>
              </div>
            ))}
          {error && <ApiError error={error} />}
        </>
      )}
    </MyWatchListStyles>
  );
};

export default MyWatchList;
