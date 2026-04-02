import { useState, useEffect, useRef } from "react"
import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"

export default function OtpScreen() {
  const { navigate, showToast } = useApp()
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(120)
  const refs = useRef([])

  useEffect(() => {
    const id = setInterval(() => setTimer(t => (t > 0 ? t - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])

  const fmt = `${String(Math.floor(timer / 60)).padStart(2, "0")}:${String(timer % 60).padStart(2, "0")}`

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return
    const next = [...otp]; next[i] = val; setOtp(next)
    if (val && i < 5) refs.current[i + 1]?.focus()
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar />
      <div className="bg-[#19a46a] px-5 pt-10 pb-7 flex-shrink-0">
        <button onClick={() => navigate("signup")} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <h1 className="text-white text-2xl font-extrabold">Verify Phone</h1>
        <p className="text-white/75 text-sm mt-1">Enter the 6-digit code sent to your number</p>
      </div>
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 px-5 pt-8 overflow-y-auto pb-8">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-[#e6f7f0] flex items-center justify-center">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#19a46a" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.12 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.55 5.55l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" /></svg>
          </div>
        </div>
        <div className="flex gap-2 justify-center mb-7">
          {otp.map((val, i) => (
            <input key={i} ref={el => refs.current[i] = el} maxLength={1} value={val} onChange={e => handleChange(i, e.target.value)} className="w-11 h-14 rounded-xl border-[1.5px] border-gray-200 text-center text-2xl font-bold text-gray-900 bg-gray-50 outline-none focus:border-[#19a46a]" />
          ))}
        </div>
        <button onClick={() => navigate("create-pin")} className="w-full py-4 rounded-3xl bg-[#19a46a] text-white font-bold text-[15px] mb-5">Verify OTP</button>
        <p className="text-center text-sm text-gray-400 mb-2">Didn't receive code? <button onClick={() => showToast("OTP Resent!")} className="text-[#19a46a] font-semibold">Resend OTP</button></p>
        <p className="text-center text-xs text-gray-400">Code expires in <span className="text-[#19a46a] font-bold">{fmt}</span></p>
      </div>
    </div>
  )
}
