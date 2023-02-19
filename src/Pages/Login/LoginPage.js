import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { LoginStyles } from "./LoginStyles";
import ApiError from "../../components/HandleErrors/ApiError";
import { colors } from "../../components/utils/ThemeColors";
import { Button2 } from "../../components/Buttons/Button2";
import { LoginForm } from "../../components/FormContent/FormContent";
import Spinner from "../../components/HandleLoading/Spinner";
import ApiConfirmationPopUp from "../../components/Popups/ApiConfirmationPopUp";
import { backendEndPoint } from "../../components/utils/BackendEndPoint";
import { PostApiCall } from "../../components/DataBaseApiFunctions/PostApiCall";
import { JwtContext } from "../../components/utils/AppContext";

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(4),
  })
  .required();

const LoginPage = ({ voicePageNavigation, setVoicePageNavigation }) => {
  const [error, setError] = useState("");
  const [apiData, setApiData] = useState("");
  const [popup, setPopup] = useState(false);
  const [onload, setOnload] = useState(false);
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.value);
  const { value } = useContext(JwtContext);
  const { setValue } = useContext(JwtContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (voicePageNavigation) {
      navigate(voicePageNavigation);
    }
    return () => {
      setVoicePageNavigation("");
    };
  }, [voicePageNavigation]);

  useEffect(() => {
    if (apiData) {
      setPopup(!popup);
    }
    if (apiData || error) {
      setOnload(false);
      setValue(apiData.accessToken);
    }
  }, [apiData, error]);
  
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 2500);
    }
  }, [error]);

  const postLogin = (userData) => {
    let data = {
      "Email": userData.email,
      "Password": userData.password
    }
    setApiData("");
    setOnload(true);
    PostApiCall(
      `${backendEndPoint}/login`,
      data,
      null,
      setApiData,
      setError
    );
    reset()
  };

  return (
    <LoginStyles colors={colors(theme)}>
      {popup && (
        <ApiConfirmationPopUp
          confirmation={apiData.response}
          close={setPopup}
        />
      )}
      {onload ? (
        <Spinner />
      ) : (
        <>
          {!error && (
            <>
              <div className="header">
                <h2>Please fill In Your Details</h2>
              </div>

              <div className="card">
                <form className="form" onSubmit={handleSubmit(postLogin)}>
                  {LoginForm.inputs.map((input, key) => (
                    <div className="wrapper" key={key}>
                      <label htmlFor={input.name}>{input.label}</label>
                      <input
                        placeholder={`please enter your ${input.name}`}
                        type={input.type}
                        {...register(input.name, { required: true })}
                      />
                      <p>{errors[input.name]?.message}</p>
                    </div>
                  ))}

                  <div className="submit">
                    {!value && (
                      <Button2 type="submit" colors={colors(theme)}>
                        Login
                      </Button2>
                    )}
                    {value && (
                      <Button2
                        onClick={() => setValue(null)}
                        colors={colors(theme)}
                      >
                        Logout
                      </Button2>
                    )}
                    <span onClick={() => navigate("/signup")}>
                      Create an Account
                    </span>
                  </div>
                </form>
              </div>
            </>
          )}
          {error && <ApiError error={error} />}
        </>
      )}
    </LoginStyles>
  );
};

export default LoginPage;
