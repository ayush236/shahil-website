import React from 'react'

const Services = () => {
  return (
    <section id="services" style={{ padding: "100px 24px", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#c0001a", fontSize: 12, fontWeight: 900, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>WHAT WE DO</div>
            <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "white", fontFamily: "'Arial Black', sans-serif", letterSpacing: "-1px" }}>
              Our <span style={{ color: "#c0001a" }}>Services</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: "🛞", title: "Tyre Fitting", desc: "All sizes, all brands. Car, motorbike, bicycle. We stock premium and budget options to suit every need.", price: "From NPR 500" },
              { icon: "🔧", title: "Puncture Repair", desc: "Fast puncture diagnosis and patching. Most jobs done in under 30 minutes while you wait.", price: "From NPR 150" },
              { icon: "⚖️", title: "Wheel Balancing", desc: "Precision balancing for a smooth, vibration-free ride. Extends tyre life and improves fuel efficiency.", price: "From NPR 300" },
              { icon: "🚲", title: "Bike Full Service", desc: "Brake adjustment, gear tuning, chain lubrication, bearing check — complete bicycle overhaul.", price: "From NPR 800" },
              { icon: "🛑", title: "Brake Overhaul", desc: "Brake pad replacement, cable tensioning, disc and drum inspection for safe stopping every time.", price: "From NPR 400" },
              { icon: "🔩", title: "Parts & Materials", desc: "Inner tubes, brake cables, chains, bearings, patches, valves — all stocked in-shop for immediate fitting.", price: "Varies" },
            ].map((service) => (
              <div key={service.title}
                style={{
                  background: "#161616", border: "1px solid #2a2a2a", borderRadius: 8, padding: 32,
                  transition: "all 0.3s", cursor: "default",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#c0001a";
                  el.style.background = "#1a0004";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 40px rgba(192,0,26,0.2)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.borderColor = "#2a2a2a";
                  el.style.background = "#161616";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{service.icon}</div>
                <h3 style={{ color: "white", fontSize: 20, fontWeight: 900, marginBottom: 10, fontFamily: "'Arial Black', sans-serif" }}>{service.title}</h3>
                <p style={{ color: "#888", fontSize: 14, lineHeight: 1.6, marginBottom: 20, fontFamily: "Arial, sans-serif" }}>{service.desc}</p>
                <div style={{ color: "#c0001a", fontSize: 14, fontWeight: 900, letterSpacing: "1px" }}>{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services