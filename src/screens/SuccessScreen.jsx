import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import AndroidNav from "../components/AndroidNav"

const ROWS = [
  { k: "Amount Sent",  v: "â‚¦5,000.00",           green: false },
  { k: "Recipient",    v: "Emeka Chukwu",          green: false },
  { k: "Bank",         v: "OPay",                  green: false },
  { k: "Date & Time",  v: "30 Mar 2026, 5:45 PM",  green: false },
  { k: "Fee",          v: "â‚¦0.00 (Free!)",          green: false },
  { k: "Status",       v: "Successful âœ“",           green: true  },
  { k: "Reference",    v: "OPY2026033000482",        green: true  },
]

export default function SuccessScreen() {
  const { navigate, showToast } = useApp()
  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-white">
      <StatusBar />
      <div className="flex-1 flex flex-col items-center justify-center px-6 overflow-y-auto py-8">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-5">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#19a46a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h2 className="text-[22px] font-extrabold text-gray-900 mb-1.5">Transfer Successful!</h2>
        <p className="text-sm text-gray-400 mb-7">Your money has been sent successfully</p>
        <div className="w-full bg-gray-50 rounded-2xl p-4 mb-6">
          {ROWS.map(({ k, v, green }) => (
            <div key={k} className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0">
              <span className="text-xs text-gray-500">{k}</span>
              <span className={`text-xs font-bold ${green ? "text-[#19a46a]" : "text-gray-900"}`}>{v}</span>
            </div>
          ))}
        </div>
        <button onClick={() => navigate("home")} className="w-full py-4 rounded-2xl bg-[#19a46a] text-white font-bold text-[15px] mb-3">Done</button>
        <button onClick={() => showToast("Receipt shared!")} className="w-full py-4 rounded-2xl bg-[#e6f7f0] text-[#19a46a] font-bold text-[15px]">í³¤ Share Receipt</button>
      </div>
      <AndroidNav />
    </div>
  )
}
