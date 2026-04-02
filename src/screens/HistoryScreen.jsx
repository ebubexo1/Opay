import { useState } from "react"
import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import GreenHeader from "../components/GreenHeader"
import AndroidNav from "../components/AndroidNav"

const FILTERS = ["All", "Transfer", "Airtime", "Bills", "Received"]
const TXNS = [
  { date: "Today", items: [
    { icon: "↗", bg: "bg-green-100", color: "#059669", name: "Money Received",   sub: "From Emeka Chukwu",    amt: "+₦50,000",  credit: true,  time: "09:14",    status: "success", type: "Received"  },
    { icon: "", bg: "bg-yellow-50",color: "#d97706", name: "Airtime - MTN",    sub: "0803 456 7890",        amt: "-₦2,000",   credit: false, time: "08:32",    status: "success", type: "Airtime"   },
  ]},
  { date: "Yesterday", items: [
    { icon: "⚡", bg: "bg-yellow-100",color: "#a16207",name: "EKEDC Electricity",sub: "Meter: 4510293816",    amt: "-₦15,000",  credit: false, time: "4:20 PM",  status: "success", type: "Bills"     },
    { icon: "↗", bg: "bg-green-100", color: "#059669", name: "Money Received",   sub: "From Aisha Bello",     amt: "+₦25,000",  credit: true,  time: "11:00 AM", status: "success", type: "Received"  },
  ]},
  { date: "28 March", items: [
    { icon: "↗", bg: "bg-green-100", color: "#059669", name: "Salary Credit",    sub: "From Employer Ltd",    amt: "+₦450,000", credit: true,  time: "8:00 AM",  status: "success", type: "Received"  },
    { icon: "→", bg: "bg-red-100",   color: "#dc2626", name: "Bank Transfer",    sub: "To GTBank • Ngozi Obi",amt: "-₦30,000",  credit: false, time: "3:15 PM",  status: "pending", type: "Transfer"  },
    { icon: "📞", bg: "bg-purple-100",color: "#7c3aed",name: "DSTV Subscription",sub: "Compact Plus",         amt: "-₦9,900",   credit: false, time: "2:11 PM",  status: "success", type: "Bills"     },
  ]},
]

export default function HistoryScreen() {
  const { navigate } = useApp()
  const [active, setActive] = useState("All")
  const filtered = TXNS.map(g => ({ ...g, items: g.items.filter(tx => active === "All" || tx.type === active) })).filter(g => g.items.length > 0)

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar dark />
      <GreenHeader title="Transaction History" onBack={() => navigate("home")} />
      <div className="bg-white flex-shrink-0">
        <div className="flex gap-2 px-3.5 py-3 overflow-x-auto">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setActive(f)} className={`px-3.5 py-1.5 rounded-full border-[1.5px] text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-colors ${active === f ? "bg-[#19a46a] text-white border-[#19a46a]" : "bg-white text-gray-600 border-gray-200"}`}>{f}</button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto bg-[#f2f3f5] px-3.5 pb-4">
        {filtered.map(({ date, items }) => (
          <div key={date}>
            <p className="text-xs font-bold text-gray-500 my-3">{date}</p>
            <div className="bg-white rounded-2xl overflow-hidden">
              {items.map((tx, i) => (
                <div key={i} className="flex items-center px-3.5 py-3.5 border-b border-gray-50 last:border-0">
                  <div className={`w-10 h-10 rounded-full ${tx.bg} flex items-center justify-center mr-3 flex-shrink-0 font-bold text-sm`} style={{ color: tx.color }}>{tx.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-gray-900 truncate">{tx.name}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5 truncate">{tx.sub}</p>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md mt-1 inline-block ${tx.status === "success" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>{tx.status === "success" ? "Successful" : "Pending"}</span>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <p className={`text-[13px] font-extrabold ${tx.credit ? "text-[#19a46a]" : "text-red-500"}`}>{tx.amt}</p>
                    <p className="text-[10px] text-gray-300 mt-0.5">{tx.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <AndroidNav />
    </div>
  )
}
