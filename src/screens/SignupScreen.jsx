import { useState } from "react"
import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import FormField, { inputCls, PhonePrefix } from "../components/FormField"

export default function SignupScreen() {
  const { navigate, showToast, setUserName } = useApp()
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", ref: "" })
  const [agreed, setAgreed] = useState(false)
  const [showPass, setShowPass] = useState(false)
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = () => {
    if (!form.name.trim())  { showToast("Please enter your full name"); return }
    if (!form.phone.trim()) { showToast("Please enter your phone number"); return }
    if (!form.password)     { showToast("Please create a password"); return }
    if (!agreed)            { showToast("Please accept the terms"); return }
    setUserName(form.name.trim().toUpperCase())
    navigate("otp")
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar />
      <div className="bg-[#19a46a] px-5 pt-10 pb-7 flex-shrink-0">
        <button onClick={() => navigate("onboarding")} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <h1 className="text-white text-2xl font-extrabold">Create Account</h1>
        <p className="text-white/75 text-sm mt-1">Join millions using OPay daily</p>
      </div>
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 px-5 pt-7 overflow-y-auto pb-8">
        <FormField label="Full Name">
          <input className={inputCls} placeholder="Enter your full name" value={form.name} onChange={set("name")} />
        </FormField>
        <FormField label="Phone Number">
          <div className="flex gap-2">
            <PhonePrefix />
            <input className={`${inputCls} flex-1`} placeholder="08XX XXX XXXX" type="tel" value={form.phone} onChange={set("phone")} />
          </div>
        </FormField>
        <FormField label="Email Address">
          <input className={inputCls} placeholder="Enter your email" type="email" value={form.email} onChange={set("email")} />
        </FormField>
        <FormField label="Password">
          <div className="relative">
            <input className={`${inputCls} pr-11`} placeholder="Create a strong password" type={showPass ? "text" : "password"} value={form.password} onChange={set("password")} />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" onClick={() => setShowPass(v => !v)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
            </button>
          </div>
        </FormField>
        <FormField label="Referral Code (Optional)" hint="Have a referral code? You both earn ₦500!">
          <input className={inputCls} placeholder="Enter referral code" value={form.ref} onChange={set("ref")} />
        </FormField>
        <div className="flex items-start gap-3 mb-5">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 accent-[#19a46a] w-4 h-4 flex-shrink-0" />
          <p className="text-xs text-gray-500 leading-relaxed">I agree to OPay's <span className="text-[#19a46a] font-semibold">Terms of Service</span> and <span className="text-[#19a46a] font-semibold">Privacy Policy</span></p>
        </div>
        <button onClick={submit} className="w-full py-4 rounded-3xl bg-[#19a46a] text-white font-bold text-[15px] mb-4">Create Account</button>
        <p className="text-center text-sm text-gray-400">Already have an account? <button onClick={() => navigate("login")} className="text-[#19a46a] font-semibold">Log In</button></p>
      </div>
    </div>
  )
}
