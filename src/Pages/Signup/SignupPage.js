import React, { useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { SignupStyles } from "./SignupStyles";
import ApiError from "../../components/HandleErrors/ApiError";
import { Button2 } from "../../components/Buttons/Button2";
import { colors } from "../../components/utils/ThemeColors";
import { SignupForm } from "../../components/FormContent/FormContent";
import Spinner from "../../components/HandleLoading/Spinner";
import ApiConfirmationPopUp from "../../components/Popups/ApiConfirmationPopUp";
import { backendEndPoint } from "../../components/utils/BackendEndPoint";
import { PostApiCall } from "../../components/DataBaseApiFunctions/PostApiCall";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(4),
  })
  .required();

const SignupPage = ({ voicePageNavigation, setVoicePageNavigation }) => {
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [onload, setOnload] = useState(false);
  const [apiData, setApiData] = useState("");
  const theme = useSelector((state) => state.theme.value);
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
    }
  }, [apiData, error]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 2500);
    }
  }, [error]);

  const submit = (userData) => {
    setOnload(true);
    let data = {
      "FirstName":userData.firstName,
      "LastName":userData.lastName,
      "Email": userData.email,
      "Password": userData.password
    }
    PostApiCall(
      `${backendEndPoint}/user`,
      data,
      null,
      setApiData,
      setError
    );
    reset()
  };
  return (
    <SignupStyles colors={colors(theme)}>
      {popup && (
        <ApiConfirmationPopUp confirmation={apiData} close={setPopup} />
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
                <form className="form" onSubmit={handleSubmit(submit)}>
                  {SignupForm.inputs.map((input, key) => (
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
                    <Button2 type="submit" colors={colors(theme)}>
                      Sign Up
                    </Button2>
                  </div>
                </form>
              </div>
            </>
          )}
          {error && <ApiError error={error} />}
        </>
      )}
    </SignupStyles>
  );
};

export default SignupPage;
