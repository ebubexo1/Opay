export default function Avatar({ size = 46, showBadge = false }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <div className="rounded-full bg-[#4a7c59] overflow-hidden flex items-center justify-center" style={{ width: size, height: size }}>
        <svg viewBox="0 0 44 44" width={size} height={size}>
          <circle cx="22" cy="22" r="22" fill="#4a7c59" />
          <circle cx="22" cy="17" r="9" fill="#7dbf94" />
          <ellipse cx="22" cy="38" rx="14" ry="9" fill="#7dbf94" />
        </svg>
      </div>
      {showBadge && <div className="absolute bottom-0.5 right-0.5 rounded-full bg-[#19c37d] border-2 border-white" style={{ width: size * 0.28, height: size * 0.28 }} />}
    </div>
  )
}
