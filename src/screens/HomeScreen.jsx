// ─────────────────────────────────────────────────────────────
//  HomeScreen — main OPay dashboard (matches exact screenshot)
//  Sections: TopBar · BalanceCard · TransferRow · Services
//            SavingChallenge · PromoBanner · BottomNav
// ─────────────────────────────────────────────────────────────

import { useApp }     from "../context/AppContext";
import StatusBar      from "../components/StatusBar";
import BottomNav      from "../components/BottomNav";
import AndroidNav     from "../components/AndroidNav";
import Avatar         from "../components/Avatar";

// ── Service grid data ────────────────────────────────────────
const SERVICES = [
  {
    label: "Airtime",
    badge: "Up to 6%",
    screen: "airtime",
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <rect x="8"  y="7"  width="2" height="7"  fill="#19a46a" stroke="none" />
        <rect x="11" y="5"  width="2" height="9"  fill="#19a46a" stroke="none" />
        <rect x="14" y="9"  width="2" height="5"  fill="#19a46a" stroke="none" />
      </>
    ),
  },
  {
    label: "Data",
    badge: "Up to 6%",
    screen: "airtime",
    icon: (
      <>
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <rect x="7.5"  y="12" width="2" height="5"  fill="#19a46a" stroke="none" rx="0.5" />
        <rect x="11"   y="9"  width="2" height="8"  fill="#19a46a" stroke="none" rx="0.5" />
        <rect x="14.5" y="6"  width="2" height="11" fill="#19a46a" stroke="none" rx="0.5" />
      </>
    ),
  },
  {
    label: "Betting",
    badge: null,
    screen: null,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    label: "TV",
    badge: null,
    screen: null,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <polyline points="8 20 12 16 16 20" />
        <polygon points="10 8 10 14 16 11" fill="#19a46a" stroke="none" />
      </>
    ),
  },
  {
    label: "SafeBox",
    badge: null,
    screen: null,
    icon: (
      <>
        <rect x="3" y="4" width="16" height="16" rx="2" />
        <circle cx="11" cy="12" r="3" />
        <line x1="19" y1="7"  x2="21" y2="7"  />
        <line x1="19" y1="12" x2="21" y2="12" />
        <line x1="19" y1="17" x2="21" y2="17" />
      </>
    ),
  },
  {
    label: "Loan",
    badge: null,
    screen: null,
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    ),
  },
  {
    label: "Invitation",
    badge: "₦5600",
    screen: null,
    icon: (
      <>
        <path d="M3 11l18-5v12L3 13" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </>
    ),
  },
  {
    label: "More",
    badge: null,
    screen: null,
    icon: (
      <>
        <rect x="2" y="8" width="20" height="13" rx="2" />
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <line x1="12" y1="12" x2="12" y2="17" />
      </>
    ),
  },
];

// ── Transfer row data ─────────────────────────────────────────
const TRANSFERS = [
  {
    label: "To OPay",
    screen: "transfer",
    icon: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <circle cx="9"  cy="10" r="1.2" fill="#19a46a" stroke="none" />
        <circle cx="12" cy="10" r="1.2" fill="#19a46a" stroke="none" />
        <circle cx="15" cy="10" r="1.2" fill="#19a46a" stroke="none" />
      </>
    ),
  },
  {
    label: "To Bank",
    screen: "transfer",
    icon: (
      <>
        <rect x="3" y="10" width="18" height="11" rx="1" />
        <path d="M3 10l9-7 9 7" />
        <line x1="6"  y1="10" x2="6"  y2="21" />
        <line x1="10" y1="10" x2="10" y2="21" />
        <line x1="14" y1="10" x2="14" y2="21" />
        <line x1="18" y1="10" x2="18" y2="21" />
      </>
    ),
  },
  {
    label: "Withdraw",
    screen: null,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <polyline points="15 9 9 15" />
        <polyline points="9 9 15 9 15 15" />
      </>
    ),
  },
];

// ─────────────────────────────────────────────────────────────
export default function HomeScreen() {
  const { navigate, showToast, userName, config, balVisible, setBalVisible } = useApp();

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#f2f3f5]">
      <StatusBar />

      {/* ════════════════ TOP BAR ════════════════ */}
      <div className="bg-white px-3.5 py-2 flex items-center justify-between flex-shrink-0">

        {/* Avatar + name */}
        <div className="flex items-center">
          <Avatar size={46} showBadge />
          <span className="text-[17px] font-extrabold text-gray-900 ml-2.5">
            Hi, {userName}
          </span>
        </div>

        {/* Icon buttons */}
        <div className="flex gap-2">
          {/* Help (headset) */}
          <button
            onClick={() => showToast("Help Center")}
            className="relative w-10 h-10 rounded-full bg-[#f2f3f5] flex items-center justify-center"
          >
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[7px] font-black px-1 py-0.5 rounded-md leading-none">
              HELP
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8">
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
              <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
          </button>

          {/* QR scanner */}
          <button className="w-10 h-10 rounded-full bg-[#f2f3f5] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8">
              <rect x="3"  y="3"  width="7" height="7" rx="1" />
              <rect x="14" y="3"  width="7" height="7" rx="1" />
              <rect x="3"  y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="3" height="3" />
              <rect x="18" y="18" width="3" height="3" />
              <rect x="14" y="18" width="3" height="3" />
              <rect x="18" y="14" width="3" height="3" />
            </svg>
          </button>

          {/* Notifications bell */}
          <button
            onClick={() => navigate("notifications")}
            className="relative w-10 h-10 rounded-full bg-[#f2f3f5] flex items-center justify-center"
          >
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-black px-1 py-0.5 rounded-lg min-w-[17px] text-center leading-none">
              48
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.8">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
        </div>
      </div>

      {/* ════════════════ SCROLLABLE BODY ════════════════ */}
      <div className="flex-1 overflow-y-auto">

        {/* ── Balance card ── */}
        <div className="mx-3 mb-2.5 bg-[#19a46a] rounded-[18px] px-4 py-3.5">

          {/* Row 1: label + history */}
          <div className="flex justify-between items-center mb-2.5">
            <div className="flex items-center gap-1.5">
              {/* Shield */}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="text-white/90 text-[13px]">Available Balance</span>
              {/* Eye toggle */}
              <button onClick={() => setBalVisible((v) => !v)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8">
                  {balVisible ? (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  ) : (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  )}
                </svg>
              </button>
            </div>

            {/* Transaction History */}
            <button
              onClick={() => navigate("history")}
              className="flex items-center gap-1"
            >
              <span className="text-white/90 text-[12px]">Transaction History</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Row 2: balance + add money */}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setBalVisible((v) => !v)}
              className="flex items-center gap-2"
            >
              <span className="text-white text-[24px] font-extrabold tracking-[2px]">
                {balVisible ? `₦${config.balance}` : "****"}
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button
              onClick={() => navigate("add-money")}
              className="bg-white text-[#19a46a] text-[12px] font-extrabold px-4 py-2.5 rounded-3xl active:opacity-80 transition-opacity"
            >
              + Add Money
            </button>
          </div>
        </div>

        {/* ── Transfer row ── */}
        <div className="mx-3 mb-2.5 bg-white rounded-2xl px-2 py-4">
          <div className="flex justify-around">
            {TRANSFERS.map(({ label, screen, icon }, i) => (
              <div key={label} className="flex items-center flex-1">
                <button
                  onClick={() => screen ? navigate(screen) : showToast("Coming soon!")}
                  className="flex flex-col items-center gap-2 flex-1"
                >
                  <div className="w-14 h-14 rounded-full bg-[#e6f7f0] flex items-center justify-center">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#19a46a" strokeWidth="1.8">
                      {icon}
                    </svg>
                  </div>
                  <span className="text-[12px] text-gray-700 font-medium">{label}</span>
                </button>
                {i < TRANSFERS.length - 1 && (
                  <div className="w-px h-14 bg-gray-100" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Services grid ── */}
        <div className="mx-3 mb-2.5 bg-white rounded-2xl px-2.5 py-4">
          <div className="grid grid-cols-4 gap-x-1 gap-y-3.5">
            {SERVICES.map(({ label, badge, screen, icon }) => (
              <button
                key={label}
                onClick={() => screen ? navigate(screen) : showToast(`${label} coming soon!`)}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="relative w-14 h-14 rounded-full bg-[#e6f7f0] flex items-center justify-center">
                  {badge && (
                    <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[7.5px] font-black px-1.5 py-0.5 rounded-lg whitespace-nowrap leading-none">
                      {badge}
                    </span>
                  )}
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#19a46a" strokeWidth="1.8">
                    {icon}
                  </svg>
                </div>
                <span className="text-[11px] text-gray-700 font-medium text-center leading-tight">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Saving Challenge 2026 ── */}
        <div className="mx-3 mb-2.5 bg-[#edf8f3] rounded-2xl px-3.5 py-3 border border-dashed border-[#b2dfcc]">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[14px] font-extrabold text-gray-900">
              Saving Challenge 2026
            </span>
            <span className="text-2xl">🎁</span>
          </div>
          <div className="border-t border-dashed border-[#b2dfcc] mb-2.5" />
          <div className="bg-white rounded-xl p-3 flex items-center gap-2.5">
            <div className="w-11 h-11 rounded-full bg-[#e6f7f0] flex items-center justify-center flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19a46a" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.5" fill="#19a46a" />
                <path d="M20 4l-4 4" />
                <polyline points="17 4 20 4 20 7" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-bold text-gray-900">Special Target</p>
              <p className="text-[11px] text-gray-400 mt-0.5">
                Start small daily, finish big in 2026
              </p>
            </div>
            <button
              onClick={() => showToast("Saving challenge opened!")}
              className="bg-[#19a46a] text-white text-[13px] font-extrabold px-5 py-2.5 rounded-3xl flex-shrink-0 active:bg-[#147a50]"
            >
              Go
            </button>
          </div>
        </div>

        {/* ── Promo banner ── */}
        <div className="mx-3 mb-4 bg-white rounded-2xl px-3.5 py-3 flex items-center gap-2.5">
          <div className="w-[52px] h-[52px] rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 text-3xl">
            ⚽
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[12px] font-bold text-gray-900 leading-snug">
              Awoof Wey No Dey Run Belle!!!
            </p>
            <p className="text-[10px] text-gray-400 mt-0.5">
              Get 10% Off when you deposit ₦300 only
            </p>
          </div>
          <button
            onClick={() => showToast("Promo activated!")}
            className="bg-[#19a46a] text-white text-[10px] font-extrabold px-2.5 py-2 rounded-3xl flex-shrink-0"
          >
            Click for
          </button>
        </div>

      </div>{/* end scrollable body */}

      {/* ════════════════ BOTTOM NAV ════════════════ */}
      <BottomNav active="home" />
      <AndroidNav />
    </div>
  );
}