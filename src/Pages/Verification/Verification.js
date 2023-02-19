import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { VerificationStyles } from "./VerificationStyles";
import ApiError from "../../components/HandleErrors/ApiError";
import Spinner from "../../components/HandleLoading/Spinner";
import { colors } from "../../components/utils/ThemeColors";
import { backendEndPoint } from "../../components/utils/BackendEndPoint";
import UseFetch from "../../components/DataBaseApiFunctions/useFetch";

const Verification = ({ voicePageNavigation, setVoicePageNavigation }) => {
  const theme = useSelector((state) => state.theme.value);
  const navigate = useNavigate();
  const { token } = useParams();
  const { apiData, error} = UseFetch(
    `${backendEndPoint}/verification/${token}`,
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
