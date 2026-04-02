import { createContext, useContext, useState } from "react";
import config from "../config";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [screen, setScreen] = useState("splash");
  const [prevScreen, setPrevScreen] = useState("home");
  const [toast, setToast] = useState("");
  const [userName, setUserName] = useState(config.userName);
  const [balanceVisible, setBalanceVisible] = useState(false);
  const [pin, setPin] = useState("");

  const navigate = (to) => {
    setPrevScreen(screen);
    setScreen(to);
  };

  const goBack = () => setScreen(prevScreen);

  const showToast = (msg, duration = 2200) => {
    setToast(msg);
    setTimeout(() => setToast(""), duration);
  };

  return (
    <AppContext.Provider value={{
      screen, navigate, goBack,
      toast, showToast,
      userName, setUserName,
      balanceVisible, setBalanceVisible,
      pin, setPin,
      config,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);