import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import PinPad from "../components/PinPad"

export default function PinLoginScreen() {
  const { navigate, showToast, userName } = useApp()
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar />
      <div className="bg-[#19a46a] px-5 pt-10 pb-7 flex-shrink-0">
        <button onClick={() => navigate("login")} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <h1 className="text-white text-2xl font-extrabold">Enter PIN</h1>
        <p className="text-white/75 text-sm mt-1">Use your 4-digit PIN to continue</p>
      </div>
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 px-5 pt-8 overflow-y-auto pb-6">
        <p className="text-center text-sm text-gray-400 mb-4">Enter your PIN</p>
        <PinPad onComplete={() => { showToast(`Welcome back, ${userName}! í±‹`); navigate("home") }} showFinger />
        <div className="text-center mt-6">
          <button onClick={() => navigate("forgot")} className="text-[#19a46a] text-sm font-semibold">Forgot PIN?</button>
        </div>
      </div>
    </div>
  )
}
