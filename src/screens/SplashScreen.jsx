import { useEffect } from "react"
import { useApp } from "../context/AppContext"

export default function SplashScreen() {
  const { navigate } = useApp()
  useEffect(() => {
    const t = setTimeout(() => navigate("onboarding"), 2400)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="flex-1 bg-[#19a46a] flex flex-col items-center justify-center relative">
      <div className="flex flex-col items-center gap-3 animate-pulse">
        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl">
          <span className="text-6xl font-black text-[#19a46a] leading-none select-none">O</span>
        </div>
        <p className="text-white text-3xl font-black tracking-tight">OPay</p>
        <p className="text-white/70 text-sm">Fast · Safe · Reliable</p>
      </div>
      <div className="absolute bottom-16 flex gap-2.5">
        {[0, 150, 300].map((delay, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: `${delay}ms` }} />
        ))}
      </div>
      <p className="absolute bottom-8 text-white/40 text-[11px]">© 2026 OPay Digital Services</p>
    </div>
  )
}
