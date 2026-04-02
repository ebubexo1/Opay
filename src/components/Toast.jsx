import { useApp } from "../context/AppContext"

export default function Toast() {
  const { toast } = useApp()
  if (!toast) return null
  return (
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full z-50 shadow-xl whitespace-nowrap pointer-events-none">
      {toast}
    </div>
  )
}
