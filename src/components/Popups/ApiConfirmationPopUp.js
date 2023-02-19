import React from "react";
import { ApiConfirmationPopupStyles } from "./ApiConfirmationPopUpStyles";

const ApiConfirmationPopUp = ({ confirmation, close }) => {
  setTimeout(() => {
    close(false);
  }, 5000);
  const bgcolors = () => {
    if (
      confirmation === "Incorrect Credentials" ||
      confirmation ===
        "Failed to send email please check your network and try again" ||
      confirmation === "This email already exists"
    ) {
      return "red";
    }
    return "green";
  };
  return (
    <ApiConfirmationPopupStyles bgcolors={bgcolors()}>
      <h4>{confirmation}</h4>
    </ApiConfirmationPopupStyles>
  );
};

export default ApiConfirmationPopUp;
