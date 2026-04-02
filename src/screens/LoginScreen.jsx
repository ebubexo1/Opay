import { useState } from "react"
import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import FormField, { inputCls, PhonePrefix } from "../components/FormField"
import Avatar from "../components/Avatar"

export default function LoginScreen() {
  const { navigate, userName } = useApp()
  const [showPass, setShowPass] = useState(false)
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar />
      <div className="bg-[#19a46a] px-5 pt-10 pb-7 flex-shrink-0">
        <button onClick={() => navigate("onboarding")} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <h1 className="text-white text-2xl font-extrabold">Welcome Back!</h1>
        <p className="text-white/75 text-sm mt-1">Log in to your OPay account</p>
      </div>
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 px-5 pt-7 overflow-y-auto pb-8">
        <div className="flex flex-col items-center mb-6">
          <div className="mb-2"><Avatar size={64} /></div>
          <p className="text-sm font-semibold text-gray-500">Hi, {userName} 👋</p>
        </div>
        <FormField label="Phone Number">
          <div className="flex gap-2">
            <PhonePrefix />
            <input className={`${inputCls} flex-1`} placeholder="08XX XXX XXXX" type="tel" defaultValue="0812 345 6789" />
          </div>
        </FormField>
        <FormField label="Password">
          <div className="relative">
            <input className={`${inputCls} pr-11`} type={showPass ? "text" : "password"} defaultValue="password123" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" onClick={() => setShowPass(v => !v)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
            </button>
          </div>
        </FormField>
        <div className="text-right -mt-1 mb-5">
          <button onClick={() => navigate("forgot")} className="text-[#19a46a] text-sm font-semibold">Forgot Password?</button>
        </div>
        <button onClick={() => navigate("pin-login")} className="w-full py-4 rounded-3xl bg-[#19a46a] text-white font-bold text-[15px] mb-4">Log In</button>
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-200" /><span className="text-xs text-gray-300 font-semibold">OR</span><div className="flex-1 h-px bg-gray-200" />
        </div>
        <button onClick={() => navigate("pin-login")} className="w-full py-3.5 rounded-3xl bg-white text-[#19a46a] font-bold text-[15px] border-2 border-[#19a46a] flex items-center justify-center gap-2 mb-5">
          <span className="text-xl">☝️</span> Login with Fingerprint
        </button>
        <p className="text-center text-sm text-gray-400">Don't have an account? <button onClick={() => navigate("signup")} className="text-[#19a46a] font-semibold">Sign Up</button></p>
      </div>
    </div>
  )
}
