import React, { useContext, useState } from "react";
import { FcHome } from "react-icons/fc";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { FcCurrencyExchange, FcVoicePresentation } from "react-icons/fc";
import { FiList } from "react-icons/fi";
import { SiFuturelearn } from "react-icons/si";
import { RiLoginCircleFill } from "react-icons/ri";
import { RiLogoutCircleFill } from "react-icons/ri";
import { IoColorPalette } from "react-icons/io5";
import { FcNews } from "react-icons/fc";
import logo from "../../images/logo3.png";
import { useNavigate } from "react-router-dom";
import SelectPrediction from "./SelectPrediction";
import SelectTheme from "./SelectTheme";
import { SidebarStyles } from "./Styles/SidebarStyles";
import { JwtContext } from "../utils/AppContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const [hidetheme, setHideTheme] = useState(true);
  const { value } = useContext(JwtContext);
  const { setValue } = useContext(JwtContext);

  const submit = () => {
    if (value === null) {
      navigate("/login");
    }
    setValue(null);
  };
  return (
    <SidebarStyles>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>
          Crypto<span>Mania</span>
        </h3>
      </div>
      <div className="links">
        <div className="link" onClick={() => navigate("/")}>
          <FcHome fontSize={29} />
          <span>Home</span>
        </div>
        <div className="link" onClick={() => navigate("/news")}>
          <FcNews fontSize={29} />
          <span>News</span>
        </div>
        <div className="link" onClick={() => navigate("/cryptodashboard")}>
          <BsCurrencyBitcoin fontSize={29} />
          <span>Crypto Dashboard</span>
        </div>
        <div className="link" onClick={() => navigate("/cryptoexchanges")}>
          <FcCurrencyExchange fontSize={29} />
          <span>Crypto Exchanges</span>
        </div>
        <div className="link" onClick={() => navigate("/mywatchlist")}>
          <FiList fontSize={29} color={"purple"} />
          <span>My WatchList</span>
        </div>
        <div className="link" onClick={submit}>
          {!value ? (
            <RiLoginCircleFill fontSize={29} color={"gold"} />
          ) : (
            <RiLogoutCircleFill fontSize={29} color={"red"} />
          )}
          <span>{!value ? "Login" : "Logout"}</span>
        </div>

        <div className="link" onClick={() => navigate("/voicecommands")}>
          <FcVoicePresentation fontSize={29} />
          <span>Voice Commands</span>
        </div>
        <div className="predict">
          <div className="shown" onClick={() => setHide(!hide)}>
            <SiFuturelearn fontSize={21} />
            <span>Predict Crypto Prices</span>
          </div>
          <div className="select">
            {!hide && <SelectPrediction hide={setHide} />}
          </div>
        </div>
        <div className="toggle">
          <div className="shown" onClick={() => setHideTheme(!hidetheme)}>
            <IoColorPalette fontSize={29} color={"green"} />
            <span>Color Theme</span>
          </div>
          <div className="select">
            {!hidetheme && <SelectTheme hidetheme={setHideTheme} />}
          </div>
        </div>
      </div>
    </SidebarStyles>
  );
};

export default Sidebar;
