import { useState } from "react"
import { useApp } from "../context/AppContext"

const SLIDES = [
  { emoji: "Ì≤∏", title: "Fast & Secure Payments", body: "Send money, pay bills and manage your finances all in one place with OPay." },
  { emoji: "ÌæÅ", title: "Earn While You Spend",   body: "Get cashback, earn reward points and enjoy exclusive offers every time you transact." },
  { emoji: "Ì¥ê", title: "Your Money is Safe",     body: "Bank-level security with biometric login, real-time alerts and 24/7 fraud protection." },
]

export default function OnboardingScreen() {
  const { navigate } = useApp()
  const [step, setStep] = useState(0)
  const isLast = step === SLIDES.length - 1
  const { emoji, title, body } = SLIDES[step]
  return (
    <div className="flex-1 bg-white flex flex-col overflow-hidden">
      <div className="flex justify-between items-center px-4 pt-2.5 pb-1 bg-white flex-shrink-0">
        <span className="text-xs font-bold text-gray-900">9:41</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-7">
        <div className="w-56 h-56 rounded-full bg-[#e6f7f0] flex items-center justify-center">
          <span className="text-[90px] leading-none">{emoji}</span>
        </div>
        <div className="text-center">
          <h2 className="text-[22px] font-extrabold text-gray-900 leading-snug mb-3">{title}</h2>
          <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
        </div>
        <div className="flex gap-2 items-center">
          {SLIDES.map((_, i) => (
            <div key={i} onClick={() => setStep(i)} className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${i === step ? "bg-[#19a46a] w-6" : "bg-gray-200 w-2"}`} />
          ))}
        </div>
        <button onClick={() => isLast ? navigate("signup") : setStep(step + 1)} className="w-full py-4 rounded-3xl bg-[#19a46a] text-white font-bold text-[15px]">
          {isLast ? "Get Started" : "Next"}
        </button>
        <button onClick={() => navigate("login")} className="text-[#19a46a] font-semibold text-sm py-1">Skip</button>
      </div>
    </div>
  )
}
