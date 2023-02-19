import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Button2 } from "../../components/Buttons/Button2";
import { DeleteApiCall } from "../../components/DataBaseApiFunctions/DeleteApiCall";
import useFetchAuthorization from "../../components/DataBaseApiFunctions/useFetchAuthorization";
import ApiError from "../../components/HandleErrors/ApiError";
import Spinner from "../../components/HandleLoading/Spinner";
import { JwtContext } from "../../components/utils/AppContext";
import { backendEndPoint } from "../../components/utils/BackendEndPoint";
import { colors } from "../../components/utils/ThemeColors";
import { MyWatchListStyles } from "./MyWatchListStyles";

const MyWatchList = ({ voicePageNavigation, setVoicePageNavigation }) => {
  const theme = useSelector((state) => state.theme.value);
  const [onDelete, setOnDelete] = useState("");
  const [error, setError] = useState("");
  const [isTokenExpired, setIsTokenExpired] = useState(false);
  const navigate = useNavigate();
  const [onload, setOnload] = useState(false);
  const { value } = useContext(JwtContext);
  const { setValue } = useContext(JwtContext);
  const { apiData } = useFetchAuthorization(
    `${backendEndPoint}/coins`,
    setOnload,
    onDelete,
    setOnDelete,
    setError,
    error,
    isTokenExpired,
    setIsTokenExpired
  );

  const deleteItem = (id) => {
    const user = jwt_decode(value);
    const exp = user.exp * 1000;
    const expiryTime = new Date(exp).getTime();
    const currentTime = new Date().getTime();
    if (currentTime >= expiryTime) {
      setIsTokenExpired(true);
    } else {
      setIsTokenExpired(false);
      DeleteApiCall(
        `${backendEndPoint}/coin/${id}`,
        value,
        setOnDelete,
        setError
      );
    }
  };
  useEffect(() => {
    if (voicePageNavigation) {
      navigate(voicePageNavigation);
    }
    return () => {
      setVoicePageNavigation("");
    };
  }, [voicePageNavigation]);

  useEffect(() => {
    if (isTokenExpired) setValue(null);
  }, [isTokenExpired]);

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
                  <span>{crypto.mktcap}</span>
                </div>
                <div className="coin">
                  <span className="description">All Time Price High</span>
                  <span>{crypto.alltimehighprice}</span>
                </div>
                <div className="coin">
                  <span className="description">Coins In Circulation</span>
                  <span>{crypto.coinsincirculation}</span>
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
