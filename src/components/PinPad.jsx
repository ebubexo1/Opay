import { usePin } from "../hooks/usePin"

const KEYS = [
  [1,""], [2,"ABC"], [3,"DEF"],
  [4,"GHI"], [5,"JKL"], [6,"MNO"],
  [7,"PQRS"], [8,"TUV"], [9,"WXYZ"],
  [null,null], [0,"+"], ["del",null],
]

export default function PinPad({ onComplete, pinLength = 4, showFinger = false }) {
  const { digits, press, del } = usePin(pinLength, onComplete)
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex gap-5 mb-8">
        {Array.from({ length: pinLength }).map((_, i) => (
          <div key={i} className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${i < digits.length ? "bg-[#19a46a] border-[#19a46a]" : "bg-white border-gray-300"}`} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 w-full max-w-[290px]">
        {KEYS.map(([n, sub], i) => {
          if (n === null) {
            if (showFinger && i === 9) return <button key={i} className="flex items-center justify-center rounded-2xl py-4 bg-gray-100"><span className="text-2xl">í±†</span></button>
            return <div key={i} />
          }
          if (n === "del") return (
            <button key={i} onClick={del} className="flex items-center justify-center rounded-2xl py-4 bg-gray-100 active:bg-gray-200">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="2">
                <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                <line x1="18" y1="9" x2="12" y2="15" /><line x1="12" y1="9" x2="18" y2="15" />
              </svg>
            </button>
          )
          return (
            <button key={i} onClick={() => press(n)} className="flex flex-col items-center justify-center rounded-2xl py-4 bg-gray-100 active:bg-gray-200">
              <span className="text-xl font-bold text-gray-900">{n}</span>
              {sub && <span className="text-[8px] text-gray-400 tracking-widest mt-0.5">{sub}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
