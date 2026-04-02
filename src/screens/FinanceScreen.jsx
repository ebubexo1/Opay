// ─────────────────────────────────────────────────────────────
//  FinanceScreen — financial overview
//  Sections: Balance summary · Stats grid · Spending breakdown
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import { useApp }   from "../context/AppContext";
import StatusBar    from "../components/StatusBar";
import BottomNav    from "../components/BottomNav";
import AndroidNav   from "../components/AndroidNav";

const STATS = [
  { label: "OWealth Balance", val: "₦0",       note: "Up to 17% p.a",   noteColor: "text-[#19a46a]" },
  { label: "Cashback Earned", val: "₦2,450",   note: "+₦450 this week", noteColor: "text-[#19a46a]" },
  { label: "Total Sent",      val: "₦47,000",  note: "This month",      noteColor: "text-red-400"   },
  { label: "Total Received",  val: "₦500,000", note: "This month",      noteColor: "text-[#19a46a]" },
];

const SPENDING = [
  { label: "Airtime & Data",    val: "₦4,000",  pct: "35%", color: "bg-[#19a46a]" },
  { label: "Bills & Utilities", val: "₦25,000", pct: "60%", color: "bg-blue-500"  },
  { label: "Transfers Out",     val: "₦30,000", pct: "75%", color: "bg-amber-400" },
  { label: "TV Subscriptions",  val: "₦9,900",  pct: "25%", color: "bg-purple-500"},
  { label: "Shopping",          val: "₦17,300", pct: "45%", color: "bg-pink-400"  },
];

const TABS = ["Overview", "Savings", "Loans"];

export default function FinanceScreen() {
  const { navigate } = useApp();
  const [tab, setTab] = useState("Overview");

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <StatusBar dark />

      {/* ── Green header ── */}
      <div className="bg-[#19a46a] px-4 pt-10 pb-8 flex-shrink-0">
        <h1 className="text-white text-[18px] font-extrabold mt-1 mb-0.5">Finance</h1>
        <p className="text-white/70 text-xs mb-4">Overview of your money</p>

        {/* Balance summary card */}
        <div className="bg-white/15 rounded-2xl px-4 py-4 border border-white/20">
          <p className="text-white/80 text-xs mb-1">Total Wallet Balance</p>
          <p className="text-white text-3xl font-black mb-3">₦1,500,000.00</p>
          <div className="flex gap-3">
            {[
              { label: "Income",   val: "₦500,000", sub: "↑ This month" },
              { label: "Expenses", val: "₦56,900",  sub: "↓ This month" },
            ].map(({ label, val, sub }) => (
              <div key={label} className="flex-1 bg-white/15 rounded-xl px-3 py-2">
                <p className="text-white/70 text-[11px]">{label}</p>
                <p className="text-white text-base font-extrabold mt-0.5">{val}</p>
                <p className="text-white/60 text-[10px] mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scrollable body ── */}
      <div className="flex-1 bg-[#f2f3f5] rounded-t-3xl -mt-3 overflow-y-auto pb-4">

        {/* Tab switcher */}
        <div className="flex bg-white rounded-xl p-1 mx-3.5 mt-4 mb-3">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2.5 text-xs font-bold rounded-lg transition-colors ${
                tab === t ? "bg-[#f2f3f5] text-[#19a46a]" : "text-gray-500"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === "Overview" && (
          <>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-2.5 px-3.5 mb-3">
              {STATS.map(({ label, val, note, noteColor }) => (
                <div key={label} className="bg-white rounded-2xl p-3.5">
                  <p className="text-[11px] text-gray-400 mb-1.5">{label}</p>
                  <p className="text-[18px] font-extrabold text-gray-900">{val}</p>
                  <p className={`text-[11px] mt-1 font-semibold ${noteColor}`}>{note}</p>
                </div>
              ))}
            </div>

            {/* Spending breakdown */}
            <div className="mx-3.5 bg-white rounded-2xl p-4">
              <p className="text-[13px] font-bold text-gray-900 mb-4">
                Spending Breakdown
              </p>
              <div className="flex flex-col gap-4">
                {SPENDING.map(({ label, val, pct, color }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs text-gray-600 font-semibold">{label}</span>
                      <span className="text-xs font-bold text-gray-900">{val}</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full">
                      <div
                        className={`h-1.5 ${color} rounded-full transition-all duration-500`}
                        style={{ width: pct }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {tab === "Savings" && (
          <div className="mx-3.5">
            <div className="bg-white rounded-2xl p-5 text-center">
              <div className="text-5xl mb-3">🏦</div>
              <p className="text-[15px] font-bold text-gray-900 mb-1">
                OWealth Savings
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Earn up to 17% per annum on your savings
              </p>
              <button
                onClick={() => navigate("home")}
                className="px-6 py-3 rounded-full bg-[#19a46a] text-white font-bold text-sm"
              >
                Start Saving
              </button>
            </div>
          </div>
        )}

        {tab === "Loans" && (
          <div className="mx-3.5">
            <div className="bg-white rounded-2xl p-5 text-center">
              <div className="text-5xl mb-3">💳</div>
              <p className="text-[15px] font-bold text-gray-900 mb-1">
                OKash Loans
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Get instant loans with low interest rates
              </p>
              <button
                className="px-6 py-3 rounded-full bg-[#19a46a] text-white font-bold text-sm"
              >
                Apply for Loan
              </button>
            </div>
          </div>
        )}

      </div>

      <BottomNav active="finance" />
      <AndroidNav />
    </div>
  );
}