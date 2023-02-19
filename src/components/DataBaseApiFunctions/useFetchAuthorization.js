import axios from "axios";
import { useState, useEffect, useContext } from "react";
import jwt_decode from "jwt-decode";

import { JwtContext } from "../utils/AppContext";

const useFetchAuthorization = (
  url,
  setOnload,
  onDelete,
  setOnDelete,
  setError,
  error,
  isTokenExpired,
  setIsTokenExpired
) => {
  const [apiData, setApiData] = useState("");
  const { value } = useContext(JwtContext);
  useEffect(() => {
    setOnload(true);
    setError("");
    setOnDelete("");
    const user = jwt_decode(value);
    const exp = user.exp * 1000;
    const expiryTime = new Date(exp).getTime();
    const currentTime = new Date().getTime();
    if (currentTime >= expiryTime) {
      setIsTokenExpired(true);
    } else {
      setIsTokenExpired(false);
      axios
        .get(url, { headers: { Authorization: `Bearer ${value}` } })
        .then((data) => {
          setApiData(data.data);
          setError("");
        })
        .catch((e) => {
          if (e.response?.data?.error !== "") {
            setError(e.response?.data?.error);
          }
          if (JSON.stringify(e).message === "Network Error") {
            setError("your internet connection is poor");
          }
        });
    }
  }, [onDelete]);
  useEffect(() => {
    if (apiData || error || isTokenExpired) {
      setOnload(false);
    }
  }, [apiData, error]);
  return { apiData };
};

export default useFetchAuthorization;
