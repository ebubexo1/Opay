import { createContext, useContext, useState } from "react"
import config from "../config"

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [screen, setScreen] = useState("splash")
  const [history, setHistory] = useState([])
  const [toast, setToast] = useState("")
  const [userName, setUserName] = useState(config.userName)
  const [balVisible, setBalVisible] = useState(false)

  const navigate = (to) => {
    setHistory((h) => [...h, screen])
    setScreen(to)
  }

  const goBack = () => {
    setHistory((h) => {
      const next = [...h]
      const prev = next.pop() || "home"
      setScreen(prev)
      return next
    })
  }

  const showToast = (msg, ms = 2200) => {
    setToast(msg)
    setTimeout(() => setToast(""), ms)
  }

  return (
    <AppContext.Provider value={{ screen, navigate, goBack, toast, showToast, userName, setUserName, balVisible, setBalVisible, config }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
