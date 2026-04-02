import { useApp } from "../context/AppContext"
import StatusBar from "../components/StatusBar"
import BottomNav from "../components/BottomNav"
import AndroidNav from "../components/AndroidNav"

const EARN_LIST = [
  { emoji: "Ì≤∏", title: "Make a Transfer",      pts: "+50 pts per transfer",    action: "transfer",      btn: "Do Now" },
  { emoji: "Ì≥±", title: "Buy Airtime",           pts: "+20 pts per purchase",    action: "airtime",       btn: "Do Now" },
  { emoji: "Ì±•", title: "Refer a Friend",        pts: "+500 pts per referral",   action: "copy-link",     btn: "Invite" },
  { emoji: "Ì≤∞", title: "Save with OWealth",     pts: "+100 pts per ‚Ç¶10K saved", action: "toast-owealth", btn: "Save"   },
  { emoji: "‚ö°", title: "Pay Electricity Bills", pts: "+30 pts per payment",     action: "toast-elect",   btn: "Pay Now"},
]

const REDEEM_LIST = [
  { emoji: "ÌæÅ", title: "‚Ç¶500 Cashback",    pts: "500 pts required",   action: "toast-cashback" },
  { emoji: "Ì≥°", title: "Free Data 1GB",    pts: "300 pts required",   action: "toast-data"     },
  { emoji: "Ìæ´", title: "‚Ç¶200 Airtime",     pts: "200 pts required",   action: "toast-airtime"  },
  { emoji: "ÌøÜ", title: "Gold Membership",  pts: "2,000 pts required", action: "toast-gold"     },
]

export default function RewardsScreen() {
  const { navigate, showToast, config } = useApp()

  const doAction = (action) => {
    if (action === "transfer")           navigate("transfer")
    else if (action === "airtime")       navigate("airtime")
    else if (action === "copy-link")     showToast("Referral link copied! Ì¥ó")
    else if (action === "toast-owealth") showToast("OWealth opened!")
    else if (action === "toast-elect")   showToast("Electricity bills opened!")
    else if (action === "toast-cashback")showToast("‚Ç¶500 cashback redeemed! Ìæâ")
    else if (action === "toast-data")    showToast("1GB data redeemed! Ìæâ")
    else if (action === "toast-airtime") showToast("‚Ç¶200 airtime redeemed! Ìæâ")
    else if (action === "toast-gold")    showToast("Not enough points yet!")
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar dark />

      <div className="bg-[#19a46a] px-4 pt-10 pb-6 flex-shrink-0 text-center">
        <div className="text-5xl mb-2">‚≠ê</div>
        <p className="text-white text-[42px] font-black leading-none">{config.points}</p>
        <p className="text-white/75 text-sm mt-1">OPay Points Available</p>

        <div className="flex gap-2.5 justify-center mt-4">
          <button
            onClick={() => showToast("Points history opened!")}
            className="px-4 py-2 bg-white/20 text-white border border-white/40 rounded-full text-xs font-bold"
          >
            History
          </button>
          <button
            onClick={() => showToast("Redeem screen opened!")}
            className="px-4 py-2 bg-white text-[#19a46a] rounded-full text-xs font-bold"
          >
            Redeem All Points
          </button>
        </div>

        <div className="mt-4 mx-4">
          <div className="flex justify-between text-[10px] text-white/70 mb-1.5">
            <span>Gold Member</span>
            <span>Platinum at 2,000 pts</span>
          </div>
          <div className="h-1.5 bg-white/20 rounded-full">
            <div className="h-1.5 bg-white rounded-full" style={{ width: "64%" }} />
          </div>
        </div>
      </div>

      <div className="flex-1 bg-[#f2f3f5] rounded-t-3xl -mt-3 overflow-y-auto px-3.5 pt-5 pb-4">

        <p className="text-[13px] font-bold text-gray-900 mb-3">Earn More Points</p>
        <div className="bg-white rounded-2xl overflow-hidden mb-4">
          {EARN_LIST.map(({ emoji, title, pts, action, btn }) => (
            <div key={title} className="flex items-center gap-3 px-3.5 py-3.5 border-b border-gray-50 last:border-0">
              <div className="w-11 h-11 rounded-xl bg-[#e6f7f0] flex items-center justify-center text-2xl flex-shrink-0">
                {emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-gray-900">{title}</p>
                <p className="text-[11px] text-[#19a46a] font-semibold mt-0.5">{pts}</p>
              </div>
              <button
                onClick={() => doAction(action)}
                className="bg-[#e6f7f0] text-[#19a46a] text-[11px] font-bold px-3 py-1.5 rounded-full flex-shrink-0"
              >
                {btn}
              </button>
            </div>
          ))}
        </div>

        <p className="text-[13px] font-bold text-gray-900 mb-3">Redeem Rewards</p>
        <div className="bg-white rounded-2xl overflow-hidden">
          {REDEEM_LIST.map(({ emoji, title, pts, action }) => (
            <div key={title} className="flex items-center gap-3 px-3.5 py-3.5 border-b border-gray-50 last:border-0">
              <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center text-2xl flex-shrink-0">
                {emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-bold text-gray-900">{title}</p>
                <p className="text-[11px] text-[#19a46a] font-semibold mt-0.5">{pts}</p>
              </div>
              <button
                onClick={() => doAction(action)}
                className="bg-[#e6f7f0] text-[#19a46a] text-[11px] font-bold px-3 py-1.5 rounded-full flex-shrink-0"
              >
                Redeem
              </button>
            </div>
          ))}
        </div>

      </div>

      <BottomNav active="rewards" />
      <AndroidNav />
    </div>
  )
}
