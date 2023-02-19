import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { colors } from "../../components/utils/ThemeColors";
import { VoiceCommandsStyles } from "./VoiceCommandsStyles";

const VoiceCommands = ({ voicePageNavigation, setVoicePageNavigation }) => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    if (voicePageNavigation) {
      navigate(voicePageNavigation);
    }
    return () => {
      setVoicePageNavigation("");
    };
  }, [voicePageNavigation]);

  return (
    <VoiceCommandsStyles colors={colors(theme)}>
      <div className="heading">
        <h2>CryptoMania Voice Commands</h2>
      </div>
      <div className="wrapper">
        <div className="card1">
          <span className="head">App Description Command</span>
          <span className="description">
            <span className="sub-heading">Try saying:</span>
            <br />
            What does this app do
          </span>
        </div>

        <div className="card2">
          <span className="head">Page Navigation commands</span>
          <div className="pages">
            <span className="sub-heading">App Pages:</span>
            <br />
            <span className="content">
              Home, Login, News, Signup, Mywatchlist, Dashboard, Exchanges,
              VoiceCommands
            </span>
          </div>
          <span className="description">
            <span className="sub-heading">Try saying:</span>
            <br />
            Open Home page
          </span>
        </div>

        <div className="card3">
          <span className="head">News Reading Command</span>
          <span className="description">
            <span className="sub-heading">Try saying:</span>
            <br />
            Open News page (then say yes for the app to read you the news)
          </span>
        </div>
        <div className="card4">
          <span className="head">Theme Change Command</span>
          <div className="themes">
            <span className="sub-heading">App Theme Modes:</span>
            <br />
            Dark,Light
          </div>
          <span className="description">
            <span className="sub-heading">Try saying:</span>
            <br />
            Change theme to dark mode
          </span>
        </div>
      </div>
    </VoiceCommandsStyles>
  );
};

export default VoiceCommands;
