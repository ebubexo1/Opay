import { useApp } from "../context/AppContext"

export default function GreenHeader({ title, subtitle, onBack, showBack = true }) {
  const { goBack } = useApp()
  const handleBack = onBack || goBack
  return (
    <div className="bg-[#19a46a] px-4 pt-10 pb-5 flex-shrink-0">
      {showBack && (
        <button onClick={handleBack} className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center mb-3">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      <h1 className="text-white text-[18px] font-extrabold">{title}</h1>
      {subtitle && <p className="text-white/75 text-sm mt-1">{subtitle}</p>}
    </div>
  )
}
