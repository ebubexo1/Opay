import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import BottomNav from "../components/BottomNav"
import AndroidNav from "../components/AndroidNav"
import Avatar from "../components/Avatar"

const SECTIONS = [
  { title: "Account", rows: [
    { emoji: "í±¤", bg: "bg-[#e6f7f0]", label: "Personal Information", sub: "View and edit your profile", action: "edit-profile" },
    { emoji: "í»¡ï¸", bg: "bg-yellow-50",  label: "KYC Verification",    sub: "Verified âœ“",                  action: "kyc", subGreen: true },
    { emoji: "í¿¦", bg: "bg-blue-50",    label: "Linked Bank Accounts", sub: "2 accounts linked",           action: "banks" },
  ]},
  { title: "Security", rows: [
    { emoji: "í´’", bg: "bg-pink-50",    label: "Change PIN",     sub: "Update your 4-digit PIN",       action: "change-pin" },
    { emoji: "í±†", bg: "bg-[#e6f7f0]", label: "Biometric Login", sub: "Fingerprint & Face ID",         action: "biometric", toggle: true },
  ]},
  { title: "Support", rows: [
    { emoji: "í´”", bg: "bg-purple-50",  label: "Notifications",  sub: "48 unread",                     action: "notifications" },
    { emoji: "â“", bg: "bg-yellow-50",  label: "Help Center",    sub: "FAQs and support",              action: "help" },
    { emoji: "íºª", bg: "bg-red-50",     label: "Logout",         sub: "Sign out of OPay",              action: "logout", red: true },
  ]},
]

export default function ProfileScreen() {
  const { navigate, showToast, userName, config } = useApp()

  const handleRow = (action) => {
    if (action === "notifications") navigate("notifications")
    else if (action === "change-pin") navigate("create-pin")
    else if (action === "logout") navigate("login")
    else showToast(`${action.replace(/-/g, " ")} opened!`)
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar dark />
      <div className="bg-[#19a46a] px-4 pt-10 pb-14 flex-shrink-0 text-center">
        <div className="flex justify-center mb-3">
          <div className="border-[3px] border-white/30 rounded-full"><Avatar size={72} /></div>
        </div>
        <p className="text-white text-[18px] font-extrabold">{userName}</p>
        <p className="text-white/75 text-sm mt-0.5">{config.userPhone}</p>
        <div className="inline-flex items-center gap-1.5 bg-white/20 px-3 py-1.5 rounded-full mt-3">
          <span className="text-yellow-300 text-sm">â˜…</span>
          <span className="text-white text-xs font-semibold">{config.memberLevel}</span>
        </div>
      </div>
      <div className="flex-1 bg-[#f2f3f5] rounded-t-3xl -mt-5 overflow-y-auto px-3.5 pt-5 pb-4">
        {SECTIONS.map(({ title, rows }) => (
          <div key={title} className="bg-white rounded-2xl mb-3 overflow-hidden">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wide px-4 pt-3.5 pb-1">{title}</p>
            {rows.map(({ emoji, bg, label, sub, action, toggle, red, subGreen }) => (
              <button key={label} onClick={() => handleRow(action)} className="w-full flex items-center px-4 py-3.5 border-b border-gray-50 last:border-0">
                <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center mr-3 text-base flex-shrink-0`}>{emoji}</div>
                <div className="flex-1 text-left">
                  <p className={`text-[13px] font-semibold ${red ? "text-red-500" : "text-gray-900"}`}>{label}</p>
                  <p className={`text-[11px] mt-0.5 ${subGreen ? "text-[#19a46a] font-semibold" : "text-gray-400"}`}>{sub}</p>
                </div>
                {toggle ? (
                  <div className="w-10 h-6 bg-[#19a46a] rounded-full relative flex-shrink-0"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" /></div>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={red ? "#ef4444" : "#ccc"} strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
                )}
              </button>
            ))}
          </div>
        ))}
        <p className="text-center text-xs text-gray-300 mt-2">OPay v5.2.1 Â· Â© 2026 OPay Digital Services</p>
      </div>
      <BottomNav active="profile" />
      <AndroidNav />
    </div>
  )
}
