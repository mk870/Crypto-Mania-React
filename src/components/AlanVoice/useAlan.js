import { useCallback, useContext, useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { JwtContext } from "../utils/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { themeAction } from "../Features/Theme";
import { useLocaleStorage } from "../utils/useLocaleStorage";

const useAlan = () => {
  const [alanInstance, setAlanInstance] = useState();
  const [data, setData] = useState({
    news: "",
    voiceNavigation: "",
    cardNum: 0,
  });
  const [value, setValue] = useLocaleStorage(null, "crptojwt");

  const { setAiNews } = useContext(JwtContext);
  const themeMode = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const COMMANDS = {
    OPEN_HOME: "open-home",
    OPEN_WATCHLIST: "open-watchlist",
    OPEN_DASHBOARD: "open-dashboard",
    OPEN_EXCHANGES: "open-exchanges",
    OPEN_LOGIN: "open-login",
    OPEN_SIGNUP: "open-signup",
    LOGOUT: "logout",
    THEME_CHANGE: "themeChange",
    NEWS: "newsArticles",
    HIGHLIGHT: "highlight",
    VOICE_COMMANDS: "open-voiceCommands",
  };
  const newsfeed = (info) => setData({ ...data, news: info });
  const openHome = useCallback(() => {
    alanInstance.playText("opening home page");
    setData({ ...data, voiceNavigation: "/" });
  }, [alanInstance]);

  const openVoiceCommands = useCallback(() => {
    alanInstance.playText("opening voice commands page");
    setData({ ...data, voiceNavigation: "/voicecommands" });
  }, [alanInstance, setData]);

  const openWatchlist = useCallback(() => {
    alanInstance.playText("opening your crypto watchlist");
    setData({ ...data, voiceNavigation: "/mywatchlist" });
  }, [alanInstance, setData]);

  const theme_change = useCallback(
    ({ detail: { theme } }) => {
      if (theme === "dark" || theme === "light") {
        dispatch(themeAction(theme));
        alanInstance.playText(`Changed theme to ${theme} mode`);
      } else {
        alanInstance.playText("Please choose between light or dark theme");
      }
    },
    [alanInstance, dispatch]
  );

  const logout = useCallback(() => {
    if (value) {
      alanInstance.playText("logging you out");
      setValue(null);
    } else {
      alanInstance.playText("please login first");
      setData({ ...data, voiceNavigation: "/login" });
    }
  }, [alanInstance, value, setValue, setData]);
  const openDashboard = useCallback(() => {
    alanInstance.playText("opening crypto dashboard");
    setData({ ...data, voiceNavigation: "/cryptodashboard" });
  }, [alanInstance, setData]);
  
  const openExchanges = useCallback(() => {
    alanInstance.playText("opening crypto exchanges");
    setData({ ...data, voiceNavigation: "/cryptoexchanges" });
  }, [alanInstance, setData]);

  const openLogin = useCallback(() => {
    alanInstance.playText("opening login page");

    setData({ ...data, voiceNavigation: "/login" });
  }, [alanInstance, setData]);

  const openSignup = useCallback(() => {
    alanInstance.playText("opening signup page");

    setData({ ...data, voiceNavigation: "/signup" });
  }, [alanInstance, setData]);

  const newsArticles = useCallback(
    ({ detail: { info } }) => {
      newsfeed(info);
      setData({ ...data, voiceNavigation: "/cryptonews" });
    },
    [alanInstance, setAiNews]
  );

  const highlight = useCallback(
    (num) => {
      console.log(num.detail.num);
      setData({ ...data, cardNum: num.detail.num });
    },
    [alanInstance, setData]
  );
  useEffect(() => {
    window.addEventListener(COMMANDS.OPEN_HOME, openHome);
    window.addEventListener(COMMANDS.OPEN_WATCHLIST, openWatchlist);
    window.addEventListener(COMMANDS.OPEN_DASHBOARD, openDashboard);
    window.addEventListener(COMMANDS.OPEN_EXCHANGES, openExchanges);
    window.addEventListener(COMMANDS.OPEN_LOGIN, openLogin);
    window.addEventListener(COMMANDS.OPEN_SIGNUP, openSignup);
    window.addEventListener(COMMANDS.LOGOUT, logout);
    window.addEventListener(COMMANDS.THEME_CHANGE, theme_change);
    window.addEventListener(COMMANDS.NEWS, newsArticles);
    window.addEventListener(COMMANDS.HIGHLIGHT, highlight);
    window.addEventListener(COMMANDS.VOICE_COMMANDS, openVoiceCommands);
    return () => {
      window.removeEventListener(COMMANDS.OPEN_HOME, openHome);
      window.removeEventListener(COMMANDS.OPEN_WATCHLIST, openWatchlist);
      window.removeEventListener(COMMANDS.OPEN_DASHBOARD, openDashboard);
      window.removeEventListener(COMMANDS.OPEN_EXCHANGES, openExchanges);
      window.removeEventListener(COMMANDS.OPEN_LOGIN, openLogin);
      window.removeEventListener(COMMANDS.OPEN_SIGNUP, openSignup);
      window.removeEventListener(COMMANDS.LOGOUT, logout);
      window.removeEventListener(COMMANDS.THEME_CHANGE, theme_change);
      window.removeEventListener(COMMANDS.NEWS, newsArticles);
      window.removeEventListener(COMMANDS.HIGHLIGHT, highlight);
      window.removeEventListener(COMMANDS.VOICE_COMMANDS, openVoiceCommands);
    };
  }, [
    openHome,
    openDashboard,
    openExchanges,
    openLogin,
    openSignup,
    openWatchlist,
    logout,
    theme_change,
    newsArticles,
    highlight,
    openVoiceCommands,
  ]);

  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        key: "8ad9f01a0281952f16295952a00621412e956eca572e1d8b807a3e2338fdd0dc/stage",
        onCommand: ({ command, payload }) => {
          window.dispatchEvent(new CustomEvent(command, { detail: payload }));
        },
      })
    );
  }, []);
  if (data.news) {
    return data;
  } else if (data.voiceNavigation) {
    return data;
  } else if (data.cardNum) {
    return data;
  } else {
    return null;
  }
};

export default useAlan;
