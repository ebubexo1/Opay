export default function StatusBar({ dark = false }) {
  const c = dark ? "#fff" : "#111"
  const cd = dark ? "rgba(255,255,255,0.35)" : "#ddd"
  return (
    <div className={`flex justify-between items-center px-4 pt-2.5 pb-1 flex-shrink-0 ${dark ? "bg-[#19a46a]" : "bg-white"}`}>
      <span className={`text-xs font-bold ${dark ? "text-white" : "text-gray-900"}`}>5:45</span>
      <div className="flex items-center gap-1.5">
        <svg width="14" height="10" viewBox="0 0 20 14">
          <rect x="0" y="4" width="3" height="10" rx="1" fill={c} />
          <rect x="5" y="2" width="3" height="12" rx="1" fill={c} />
          <rect x="10" y="0" width="3" height="14" rx="1" fill={c} />
          <rect x="15" y="3" width="3" height="11" rx="1" fill={cd} />
        </svg>
        <svg width="22" height="11" viewBox="0 0 28 14">
          <rect x="0" y="1" width="23" height="12" rx="2.5" fill="none" stroke={c} strokeWidth="1.5" />
          <rect x="1.5" y="2.5" width="15" height="9" rx="1.5" fill={c} />
          <rect x="25" y="4" width="2.5" height="6" rx="1" fill={c} />
        </svg>
      </div>
    </div>
  )
}
