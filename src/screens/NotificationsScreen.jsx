import { useState } from "react"
import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import GreenHeader from "../components/GreenHeader"
import AndroidNav from "../components/AndroidNav"

const NOTIFS = [
  { read: false, emoji: "💰", title: "Money Received",          body: "You received ₦50,000 from Emeka Chukwu via OPay transfer.",         time: "Today, 09:14 AM" },
  { read: false, emoji: "✅", title: "Airtime Purchase",         body: "₦2,000 MTN airtime purchased for 0803 456 7890.",                   time: "Today, 08:32 AM" },
  { read: false, emoji: "🎯", title: "Saving Challenge Reminder",body: "Don't miss your daily savings goal! Save ₦500 today.",             time: "Yesterday, 9:00 AM" },
  { read: true,  emoji: "🎯", title: "Salary Received",          body: "₦450,000 salary credit has been received in your OPay wallet.",    time: "28 Mar, 8:00 AM" },
  { read: true,  emoji: "", title: "Special Weekend Offer",    body: "Get 10% cashback on all airtime purchases this weekend only!",     time: "27 Mar, 2:00 PM" },
  { read: true,  emoji: "", title: "OWealth Update",           body: "Earn up to 17% per annum interest on your savings with OWealth.", time: "26 Mar, 11:00 AM" },
  { read: true,  emoji: "🎁", title: "Referral Bonus",           body: "Your friend Aisha has joined OPay! You earned ₦500 bonus.",       time: "25 Mar, 4:15 PM" },
]

export default function NotificationsScreen() {
  const { navigate } = useApp()
  const [notifs, setNotifs] = useState(NOTIFS)
  const unread = notifs.filter(n => !n.read).length

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar dark />
      <GreenHeader title="Notifications" onBack={() => navigate("home")} />
      <div className="bg-white flex items-center justify-between px-4 py-2.5 border-b border-gray-100 flex-shrink-0">
        <span className="text-xs text-gray-500 font-medium">{unread > 0 ? `${unread} unread` : "All read"}</span>
        {unread > 0 && <button onClick={() => setNotifs(n => n.map(i => ({ ...i, read: true })))} className="text-xs text-[#19a46a] font-semibold">Mark all as read</button>}
      </div>
      <div className="flex-1 bg-[#f2f3f5] overflow-y-auto px-3.5 py-4">
        <div className="flex flex-col gap-2.5">
          {notifs.map(({ read, emoji, title, body, time }, i) => (
            <div key={i} onClick={() => { const n = [...notifs]; n[i] = { ...n[i], read: true }; setNotifs(n) }} className={`flex gap-3 rounded-2xl p-3.5 cursor-pointer ${read ? "bg-white" : "bg-white border-l-4 border-[#19a46a]"}`}>
              <div className="flex flex-col items-center pt-1.5 flex-shrink-0">
                <div className={`w-2.5 h-2.5 rounded-full ${read ? "bg-gray-200" : "bg-[#19a46a]"}`} />
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#e6f7f0] flex items-center justify-center text-xl flex-shrink-0">{emoji}</div>
              <div className="flex-1 min-w-0">
                <p className={`text-[13px] leading-snug ${read ? "font-semibold text-gray-700" : "font-bold text-gray-900"}`}>{title}</p>
                <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">{body}</p>
                <p className="text-[10px] text-gray-300 mt-1.5">{time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AndroidNav />
    </div>
  )
}
