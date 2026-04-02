import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import FormField, { inputCls, PhonePrefix } from "../components/FormField"

export default function ForgotScreen() {
  const { navigate, showToast } = useApp()
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar />
      <div className="bg-[#19a46a] px-5 pt-10 pb-7 flex-shrink-0">
        <button onClick={() => navigate("login")} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <h1 className="text-white text-2xl font-extrabold">Reset Password</h1>
        <p className="text-white/75 text-sm mt-1">We'll send a reset code to your phone</p>
      </div>
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 px-5 pt-8 overflow-y-auto pb-8">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#e6f7f0] flex items-center justify-center">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#19a46a" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          </div>
        </div>
        <FormField label="Phone Number">
          <div className="flex gap-2">
            <PhonePrefix />
            <input className={`${inputCls} flex-1`} placeholder="08XX XXX XXXX" type="tel" />
          </div>
        </FormField>
        <button onClick={() => { showToast("Reset code sent!"); navigate("otp") }} className="w-full py-4 rounded-3xl bg-[#19a46a] text-white font-bold text-[15px] mb-5 mt-2">Send Reset Code</button>
        <p className="text-center text-sm text-gray-400">Remember your password? <button onClick={() => navigate("login")} className="text-[#19a46a] font-semibold">Log In</button></p>
      </div>
    </div>
  )
}
