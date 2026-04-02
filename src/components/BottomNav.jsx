import { useApp } from "../context/AppContext"

const TABS = [
  { id: "home",    label: "Home",    isHome: true },
  { id: "rewards", label: "Rewards", icon: "heart" },
  { id: "finance", label: "Finance", icon: "chart" },
  { id: "cards",   label: "Cards",   icon: "card"  },
  { id: "profile", label: "Me",      icon: "person"},
]

export default function BottomNav({ active }) {
  const { navigate } = useApp()
  const icons = {
    heart:  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />,
    chart:  <><rect x="3" y="3" width="18" height="18" rx="2" /><polyline points="7 17 10 12 13 15 17 8" /></>,
    card:   <><rect x="1" y="4" width="22" height="16" rx="3" /><line x1="1" y1="10" x2="23" y2="10" /></>,
    person: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  }
  return (
    <div className="flex justify-around items-start pt-2 pb-5 bg-white border-t border-gray-100 flex-shrink-0">
      {TABS.map(({ id, label, isHome, icon }) => {
        const on = active === id
        return (
          <button key={id} onClick={() => navigate(id)} className="flex flex-col items-center gap-1 min-w-[52px] pt-0.5">
            {isHome ? (
              <div className={`w-10 h-10 rounded-full border-[2.5px] flex items-center justify-center ${on ? "border-[#19a46a]" : "border-gray-300"}`}>
                <div className={`w-[18px] h-[18px] rounded-full ${on ? "bg-[#19a46a]" : "bg-gray-300"}`} />
              </div>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={on ? "#19a46a" : "#aaa"} strokeWidth="1.8">{icons[icon]}</svg>
            )}
            <span className={`text-[10px] ${on ? "text-[#19a46a] font-bold" : "text-gray-400 font-medium"}`}>{label}</span>
          </button>
        )
      })}
    </div>
  )
}
