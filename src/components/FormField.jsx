export default function FormField({ label, hint, children }) {
  return (
    <div className="mb-4">
      {label && <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">{label}</label>}
      {children}
      {hint && <p className="text-xs text-gray-400 mt-1.5">{hint}</p>}
    </div>
  )
}

export const inputCls = "w-full px-3.5 py-3.5 rounded-xl border-[1.5px] border-gray-200 text-sm text-gray-900 bg-gray-50 outline-none focus:border-[#19a46a] focus:bg-white transition-colors"

export function PhonePrefix() {
  return (
    <div className="flex items-center gap-2 px-3 py-[13px] rounded-xl border-[1.5px] border-gray-200 bg-gray-50 flex-shrink-0">
      <span className="text-lg"></span>
      <div className="w-px h-4 bg-gray-300" />
      <span className="text-sm font-semibold text-gray-700">+234</span>
    </div>
  )
}
