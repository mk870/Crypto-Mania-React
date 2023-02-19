import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Globalstyles } from "./components/GlobalStyles/GlobalStyles";
import Navbar from "./components/MenuBars/Navbar";
import Sidebar from "./components/MenuBars/Sidebar";
import Footer from "./components/Footer/Footer";
import Errorpage from "./components/HandleErrors/Errorpage";
import { colors } from "./components/utils/ThemeColors";
import { JwtContext } from "./components/utils/AppContext";
import { useLocaleStorage } from "./components/utils/useLocaleStorage";
import useAlan from "./components/AlanVoice/useAlan";
import VoiceCommands from "./Pages/VoiceCommands/VoiceCommands";
import AiNews from "./Pages/NewsPage/AiNews";
import Verification from "./Pages/Verification/Verification";
import SignupPage from "./Pages/Signup/SignupPage";
import CryptoDashboard from "./Pages/Dashboards/CryptoDashboard";
import CryptoExchanges from "./Pages/Dashboards/CryptoExchanges";
import News from "./Pages/NewsPage/News";
import CrtyptoDetails from "./Pages/CoinDetails/CryptoDetails";
import LoginPage from "./Pages/Login/LoginPage";
import Home from "./Pages/Home/Home";
import MyWatchList from "./Pages/MyCryptoWatchlist/MyWatchList";


function App() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);
  const [aiNews, setAiNews] = useState("");
  const [voicePageNavigation, setVoicePageNavigation] = useState("");
  const [activeArticle, setActiveArticle] = useState(0);
  const [value, setValue] = useLocaleStorage(null, "crptojwt");
  const theme = useSelector((state) => state.theme.value);

  let data = useAlan();
  useEffect(() => {
    if (data) {
      if (data.news) {
        setAiNews(data.news);
      } else if (data.voiceNavigation) {
        setVoicePageNavigation(data.voiceNavigation);
      } else if (data.cardNum) {
        setActiveArticle(data.cardNum);
      }
    }
  }, [data]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 760) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <JwtContext.Provider value={{ value, setValue, aiNews, setAiNews }}>
      <BrowserRouter>
        <Globalstyles colors={colors(theme)} />
        <div className="container">
          {activeMenu && <Sidebar />}
          {!activeMenu && <Navbar />}

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                />
              }
            />

            <Route
              path="/news"
              element={
                <News
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                />
              }
            />

            <Route
              path="/cryptoexchanges"
              element={
                <CryptoExchanges
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                />
              }
            />

            <Route
              path="/cryptodashboard"
              element={
                <CryptoDashboard
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                />
              }
            />

            <Route
              path="/signup"
              element={
                <SignupPage
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                />
              }
            />

            <Route
              path="/verification/:token"
              element={
                <Verification
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                />
              }
            />

            <Route
              path="/login"
              element={
                <LoginPage
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                />
              }
            />

            <Route
              path="/cryptonews"
              element={
                <AiNews
                  aiNews={aiNews}
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                  activeArticle={activeArticle}
                />
              }
            />

            <Route
              path="/crypto/:coinId"
              element={
                <CrtyptoDetails
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                />
              }
            />

            <Route
              path="/mywatchlist"
              element={
                value ? (
                  <MyWatchList
                    voicePageNavigation={voicePageNavigation}
                    setVoicePageNavigation={setVoicePageNavigation}
                  />
                ) : (
                  <Navigate to={"/login"} />
                )
              }
            />

            <Route
              path="/voicecommands"
              element={
                <VoiceCommands
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                />
              }
            />

            <Route
              path="*"
              element={
                <Errorpage
                  voicePageNavigation={voicePageNavigation}
                  setVoicePageNavigation={setVoicePageNavigation}
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </JwtContext.Provider>
  );
}

export default App;
