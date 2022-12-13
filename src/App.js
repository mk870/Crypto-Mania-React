import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Globalstyles } from "./components/GlobalStyles/GlobalStyles";
import Home from "./components/Home/Home";
import Navbar from "./components/MenuBars/Navbar";
import Sidebar from "./components/MenuBars/Sidebar";
import Footer from "./components/Footer/Footer";
import CryptoDashboard from "./components/Dashboards/CryptoDashboard";
import News from "./components/NewsPage/News";
import Errorpage from "./components/HandleErrors/Errorpage";
import CryptoDetails from "./components/CoinDetails/CryptoDetails";
import CryptoExchanges from "./components/Dashboards/CryptoExchanges";
import MyWatchList from "./components/MyCryptoWatchlist/MyWatchList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { colors } from "./components/utils/ThemeColors";
import LoginPage from "./components/Login/LoginPage";
import SignupPage from "./components/Signup/SignupPage";
import Verification from "./components/Verification/Verification";
import { JwtContext } from "./components/utils/AppContext";
import { useLocaleStorage } from "./components/utils/useLocaleStorage";
import useAlan from "./components/AlanVoice/useAlan";
import AiNews from "./components/NewsPage/AiNews";
import VoiceCommands from "./components/VoiceCommands/VoiceCommands";

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
                <CryptoDetails
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
