import { useState } from "react"
import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import GreenHeader from "../components/GreenHeader"
import AndroidNav from "../components/AndroidNav"
import FormField, { inputCls, PhonePrefix } from "../components/FormField"

const NETWORKS = [
  { name: "MTN",     color: "#f5a623", cashback: "6% off" },
  { name: "Airtel",  color: "#e8001c", cashback: "4% off" },
  { name: "Glo",     color: "#4caf50", cashback: "5% off" },
  { name: "9Mobile", color: "#007a4d", cashback: "3% off" },
]

export default function AirtimeScreen() {
  const { navigate } = useApp()
  const [tab, setTab] = useState("Airtime")
  const [network, setNetwork] = useState("MTN")
  const [amount, setAmount] = useState("")

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar dark />
      <GreenHeader title="Buy Airtime / Data" onBack={() => navigate("home")} />
      <div className="flex-1 bg-white rounded-t-3xl -mt-4 px-4 pt-5 overflow-y-auto pb-6">
        <div className="flex bg-gray-100 rounded-xl p-1 mb-5">
          {["Airtime", "Data", "SMS"].map(t => (
            <button key={t} onClick={() => setTab(t)} className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors ${tab === t ? "bg-white text-[#19a46a] shadow-sm" : "text-gray-500"}`}>{t}</button>
          ))}
        </div>
        <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide mb-3">Select Network</p>
        <div className="grid grid-cols-4 gap-2.5 mb-5">
          {NETWORKS.map(({ name, color, cashback }) => (
            <button key={name} onClick={() => setNetwork(name)} className={`flex flex-col items-center gap-1.5 py-2.5 rounded-xl border-2 transition-all ${network === name ? "border-[#19a46a] bg-[#e6f7f0]" : "border-transparent bg-gray-50"}`}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[11px] font-extrabold" style={{ background: color }}>{name}</div>
              <span className="text-[9.5px] text-gray-500 font-medium">{name}</span>
              <span className="bg-red-500 text-white text-[7px] font-bold px-1.5 py-0.5 rounded-md">{cashback}</span>
            </button>
          ))}
        </div>
        <FormField label="Phone Number">
          <div className="flex gap-2">
            <PhonePrefix />
            <input className={`${inputCls} flex-1`} placeholder="08XX XXX XXXX" type="tel" />
          </div>
        </FormField>
        <FormField label="Amount">
          <div className="flex items-center bg-gray-50 rounded-xl border-[1.5px] border-gray-200 px-3.5 py-3">
            <span className="text-[18px] font-extrabold text-[#19a46a] mr-2">₦</span>
            <input type="number" placeholder="0.00" value={amount} onChange={e => setAmount(e.target.value)} className="flex-1 text-xl font-bold text-gray-900 bg-transparent outline-none" />
          </div>
        </FormField>
        <div className="flex gap-2 mb-5">
          {[100, 200, 500, 1000].map(v => (
            <button key={v} onClick={() => setAmount(String(v))} className="flex-1 py-2 rounded-xl border-[1.5px] border-gray-200 bg-white text-[11px] font-bold text-gray-700">₦{v}</button>
          ))}
        </div>
        <button onClick={() => navigate("success")} className="w-full py-4 rounded-2xl bg-[#19a46a] text-white font-bold text-[15px]">Buy {tab}</button>
      </div>
      <AndroidNav />
    </div>
  )
}
