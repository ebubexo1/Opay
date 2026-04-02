import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import PinPad from "../components/PinPad"

export default function CreatePinScreen() {
  const { navigate, showToast } = useApp()
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar />
      <div className="bg-[#19a46a] px-5 pt-10 pb-7 flex-shrink-0">
        <button onClick={() => navigate("otp")} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <h1 className="text-white text-2xl font-extrabold">Create PIN</h1>
        <p className="text-white/75 text-sm mt-1">Set a 4-digit PIN to secure your account</p>
      </div>
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 px-5 pt-8 overflow-y-auto pb-6">
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full bg-[#e6f7f0] flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#19a46a" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 mb-4">Enter your new PIN</p>
        <PinPad onComplete={() => { showToast("PIN created! Welcome í¾‰"); navigate("home") }} />
      </div>
    </div>
  )
}
