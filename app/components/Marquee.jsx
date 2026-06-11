import React from "react"

export const Marquee = () => {
  const items = [
    { icon: "🔧", label: "Tyre Fitting" },
    { icon: "🚲", label: "Bike Repair" },
    { icon: "💨", label: "Puncture Fix" },
    { icon: "⚙️", label: "Full Service" },
    { icon: "🛞", label: "Wheel Balancing" },
    { icon: "🔩", label: "Brake Tuning" },
  ]

  const ItemSet = () => (
    <div className="flex items-center">
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span className="flex items-center gap-2 px-7 text-white font-extrabold tracking-[2.5px] uppercase whitespace-nowrap"
            style={{
                fontSize: 13,
            }}
          >
            <span 
                style={{
                    fontSize: 13,
                    fontWeight: 900, 
                    letterSpacing: "2px",
                }}
            >{item.icon}</span>
            {item.label}
          </span>
        </React.Fragment>
      ))}
    </div>
  )

  return (
    <div
      className="overflow-hidden relative py-4"
      style={{ backgroundColor: "#C0001A" }}
    >
      <div
        className="flex w-max"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        <ItemSet />
        <ItemSet />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}