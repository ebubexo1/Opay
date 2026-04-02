import { useState } from "react"
import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import BottomNav from "../components/BottomNav"
import AndroidNav from "../components/AndroidNav"

const ACTIONS = [
  { label: "Freeze",   toast: "Card frozen! ‚ùÑÔ∏è",       icon: <><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" /></> },
  { label: "Details",  toast: "Card details shown Ì±Å",  icon: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></> },
  { label: "Settings", toast: "Card settings opened!",  icon: <><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></> },
]

export default function CardsScreen() {
  const { showToast, userName } = useApp()
  const [frozen, setFrozen] = useState(false)

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar dark />
      <div className="bg-[#19a46a] px-4 pt-10 pb-6 flex-shrink-0">
        <h1 className="text-white text-[18px] font-extrabold mt-1">My Cards</h1>
      </div>
      <div className="flex-1 bg-[#f2f3f5] rounded-t-3xl -mt-3 overflow-y-auto pb-4">
        <div className="mx-3.5 mt-4 relative mb-4">
          <div className={`rounded-[20px] p-5 relative overflow-hidden transition-opacity ${frozen ? "opacity-60" : ""}`} style={{ background: "linear-gradient(135deg,#1a7a52,#19a46a,#25c57a)" }}>
            <div className="absolute right-[-30px] top-[-30px] w-32 h-32 rounded-full bg-white/10" />
            {frozen && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-[20px]">
                <div className="text-center"><span className="text-4xl">‚ùÑÔ∏è</span><p className="text-white font-bold text-sm mt-1">Card Frozen</p></div>
              </div>
            )}
            <div className="w-8 h-6 rounded bg-yellow-400 mb-4" />
            <p className="text-white text-[15px] font-semibold tracking-[3px] mb-3">8012  ‚Ä¢‚Ä¢‚Ä¢‚Ä¢  ‚Ä¢‚Ä¢‚Ä¢‚Ä¢  3456</p>
            <div className="flex justify-between items-end">
              <div><p className="text-white font-bold text-[13px]">{userName}</p><p className="text-white/60 text-[11px] mt-0.5">Expires 03/28</p></div>
              <p className="text-white font-extrabold text-sm opacity-90">VISA</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2.5 px-3.5 mb-4">
          <button onClick={() => showToast("Virtual card added! Ì≤≥")} className="flex-1 py-3 rounded-xl bg-[#19a46a] text-white text-xs font-bold">+ Add Virtual Card</button>
          <button onClick={() => showToast("Physical card requested!")} className="flex-1 py-3 rounded-xl bg-white text-[#19a46a] border border-[#19a46a] text-xs font-bold">Request Physical</button>
        </div>
        <div className="grid grid-cols-3 gap-2.5 px-3.5 mb-4">
          {ACTIONS.map(({ label, toast, icon }) => (
            <button key={label} onClick={() => { if (label === "Freeze") setFrozen(f => !f); showToast(label === "Freeze" ? (frozen ? "Card unfrozen! ‚úÖ" : "Card frozen! ‚ùÑÔ∏è") : toast) }} className="bg-white rounded-xl py-3 flex flex-col items-center gap-1.5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#19a46a" strokeWidth="2">{icon}</svg>
              <span className="text-[11px] text-gray-600 font-semibold">{label === "Freeze" && frozen ? "Unfreeze" : label}</span>
            </button>
          ))}
        </div>
        <div className="px-3.5">
          <p className="text-[13px] font-bold text-gray-900 mb-2.5">Card Transactions</p>
          <div className="bg-white rounded-2xl overflow-hidden">
            {[{ icon: "ÌªçÔ∏è", name: "Online Shopping", sub: "Jumia ‚Ä¢ Card Payment", amt: "-‚Ç¶12,500" }, { icon: "ÌΩî", name: "Food Delivery", sub: "Chowdeck ‚Ä¢ Card Payment", amt: "-‚Ç¶4,800" }].map(({ icon, name, sub, amt }) => (
              <div key={name} className="flex items-center px-3.5 py-3.5 border-b border-gray-50 last:border-0">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3 text-lg flex-shrink-0">{icon}</div>
                <div className="flex-1"><p className="text-[13px] font-bold text-gray-900">{name}</p><p className="text-[11px] text-gray-400">{sub}</p></div>
                <p className="text-[13px] font-extrabold text-red-500">{amt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomNav active="cards" />
      <AndroidNav />
    </div>
  )
}
