import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VerificationStyles } from "./VerificationStyles";
import UseFetch from "../DataBaseApiFunctions/useFetch";
import Spinner from "../HandleLoading/Spinner";
import { useSelector } from "react-redux";
import ApiError from "../HandleErrors/ApiError";
import { colors } from "../utils/ThemeColors";
import { backendEndPoint } from "../utils/BackendEndPoint";

const Verification = ({ voicePageNavigation, setVoicePageNavigation }) => {
  const theme = useSelector((state) => state.theme.value);
  const navigate = useNavigate();
  const { token } = useParams();
  const { apiData, error, setError } = UseFetch(
    `${backendEndPoint}/api/verifyRegistration?token=${token}`,
    null
  );
  useEffect(() => {
    if (voicePageNavigation) {
      navigate(voicePageNavigation);
    }
    return () => {
      setVoicePageNavigation("");
    };
  }, [voicePageNavigation]);

  return (
    <VerificationStyles colors={colors(theme)}>
      {!apiData && !error && <Spinner />}
      {apiData && !error && <h3>{apiData.response}</h3>}
      {error && <ApiError error={error} />}
    </VerificationStyles>
  );
};

export default Verification;
