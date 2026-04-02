import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import GreenHeader from "../components/GreenHeader"
import AndroidNav from "../components/AndroidNav"

const OPTIONS = [
  { label: "Bank Transfer",       sub: "Transfer from any Nigerian bank",    bg: "bg-[#e6f7f0]", stroke: "#19a46a", icon: <><rect x="3" y="10" width="18" height="11" rx="1" /><path d="M3 10l9-7 9 7" /></> },
  { label: "Debit / Credit Card", sub: "Visa, Mastercard & Verve accepted",  bg: "bg-blue-50",   stroke: "#3b82f6", icon: <><rect x="1" y="4" width="22" height="16" rx="3" /><line x1="1" y1="10" x2="23" y2="10" /></> },
  { label: "USSD",                sub: "Dial *955# â€” No internet needed",    bg: "bg-[#f0fdf4]", stroke: "#19a46a", icon: <><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="17" r="1" fill="#19a46a" stroke="none" /></> },
]

export default function AddMoneyScreen() {
  const { navigate, showToast, userName, config } = useApp()
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar dark />
      <GreenHeader title="Add Money" onBack={() => navigate("home")} />
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 px-4 pt-5 overflow-y-auto pb-6">
        <div className="bg-[#e6f7f0] rounded-2xl p-4 mb-5 border border-[#b2dfcc] text-center">
          <p className="text-xs text-gray-500 mb-1">Your OPay Account Number</p>
          <p className="text-3xl font-black text-gray-900 tracking-[3px] my-1">{config.accountNumber}</p>
          <p className="text-sm text-[#19a46a] font-bold mb-3">OPay â€” {userName}</p>
          <button onClick={() => showToast("Account number copied!")} className="px-5 py-2.5 rounded-full bg-[#19a46a] text-white text-xs font-bold">í³‹ Copy Account Number</button>
        </div>
        <p className="text-[13px] font-bold text-gray-900 mb-3">Add money via</p>
        <div className="flex flex-col gap-2.5">
          {OPTIONS.map(({ label, sub, bg, stroke, icon }) => (
            <button key={label} onClick={() => showToast(`${label} selected!`)} className="bg-white rounded-2xl p-3.5 flex items-center gap-3 border border-gray-100 w-full text-left">
              <div className={`w-11 h-11 rounded-full ${bg} flex items-center justify-center flex-shrink-0`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">{icon}</svg>
              </div>
              <div className="flex-1">
                <p className="text-[13px] font-bold text-gray-900">{label}</p>
                <p className="text-[11px] text-gray-400 mt-0.5">{sub}</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          ))}
        </div>
      </div>
      <AndroidNav />
    </div>
  )
}
