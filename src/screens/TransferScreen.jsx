import { useState } from "react"
import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import GreenHeader from "../components/GreenHeader"
import AndroidNav from "../components/AndroidNav"

const RECENT = [
  { initials: "EM", color: "#6366f1", name: "Emeka"  },
  { initials: "AI", color: "#ec4899", name: "Aisha"  },
  { initials: "CH", color: "#f59e0b", name: "Chidi"  },
  { initials: "NG", color: "#10b981", name: "Ngozi"  },
  { initials: "TO", color: "#3b82f6", name: "Tolu"   },
]

export default function TransferScreen() {
  const { navigate } = useApp()
  const [amount, setAmount] = useState("")
  const [accountNum, setAccountNum] = useState("")

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar dark />
      <GreenHeader title="Send Money" onBack={() => navigate("home")} />
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 px-4 pt-5 overflow-y-auto pb-6">
        <p className="text-[13px] font-bold text-gray-500 mb-3">Recent</p>
        <div className="flex gap-4 overflow-x-auto pb-2 mb-5">
          {RECENT.map(({ initials, color, name }) => (
            <div key={name} className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base" style={{ background: color }}>{initials}</div>
              <span className="text-[10px] text-gray-500 font-medium">{name}</span>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-2xl p-4 mb-3">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2.5">Recipient</p>
          <select className="w-full px-3.5 py-3 rounded-xl border-[1.5px] border-gray-200 text-sm text-gray-700 bg-white mb-2.5 outline-none">
            <option>OPay Account</option><option>Bank Account</option>
          </select>
          <input className="w-full px-3.5 py-3 rounded-xl border-[1.5px] border-gray-200 text-sm bg-gray-50 outline-none focus:border-[#19a46a] mb-2.5" placeholder="Phone number or account" value={accountNum} onChange={e => setAccountNum(e.target.value)} />
          <input className="w-full px-3.5 py-3 rounded-xl border-[1.5px] border-gray-100 text-sm bg-gray-100 text-gray-400 outline-none" placeholder="Account Name" value={accountNum.length >= 10 ? "EMEKA CHUKWU" : ""} readOnly />
        </div>
        <div className="bg-gray-50 rounded-2xl p-4 mb-3">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-2.5">Amount</p>
          <div className="flex items-center bg-white rounded-xl border-[1.5px] border-gray-200 px-3.5 py-3">
            <span className="text-[18px] font-extrabold text-[#19a46a] mr-2">₦</span>
            <input type="number" placeholder="0.00" value={amount} onChange={e => setAmount(e.target.value)} className="flex-1 text-xl font-bold text-gray-900 bg-transparent outline-none" />
          </div>
          <p className="text-[11px] text-gray-400 mt-2">Available: <span className="text-[#19a46a] font-bold">₦1,500,000.00</span></p>
          <div className="flex gap-2 mt-2.5">
            {[1000, 5000, 10000, 50000].map(v => (
              <button key={v} onClick={() => setAmount(String(v))} className="flex-1 py-1.5 rounded-lg border-[1.5px] border-gray-200 bg-white text-[11px] font-bold text-gray-700">₦{v >= 1000 ? `${v/1000}K` : v}</button>
            ))}
          </div>
        </div>
        <input className="w-full px-3.5 py-3 rounded-xl border-[1.5px] border-gray-200 text-sm bg-gray-50 outline-none mb-5" placeholder="Narration (optional)" />
        <button onClick={() => navigate("success")} className="w-full py-4 rounded-2xl bg-[#19a46a] text-white font-bold text-[15px]">Continue</button>
      </div>
      <AndroidNav />
    </div>
  )
}
