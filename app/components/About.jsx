import React from 'react'

const About = () => {
  return (
    <section id="about" style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, #0d0d0d 0%, #12000a 50%, #0d0d0d 100%)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{
              width: "100%", paddingBottom: "100%", borderRadius: "50%",
              background: "radial-gradient(circle, #1a0008 0%, #0a0a0a 70%)",
              border: "3px solid #c0001a", position: "relative",
              boxShadow: "0 0 60px rgba(192,0,26,0.2), inset 0 0 60px rgba(192,0,26,0.05)",
            }}>
              <div style={{
                position: "absolute", inset: "15%", borderRadius: "50%",
                border: "2px dashed rgba(192,0,26,0.3)",
              }} />
              <div style={{
                position: "absolute", inset: "35%", borderRadius: "50%",
                background: "#1a1a1a", border: "2px solid #333",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48,
              }}>🔧</div>
            </div>
            <div style={{
              position: "absolute", bottom: -20, right: -20, background: "#c0001a",
              borderRadius: 8, padding: "16px 24px", textAlign: "center",
            }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "white", fontFamily: "'Arial Black', sans-serif" }}>15+</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", letterSpacing: "1px", textTransform: "uppercase" }}>Years in Business</div>
            </div>
          </div>

          <div>
            <div style={{ color: "#c0001a", fontSize: 12, fontWeight: 900, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>WHY CHOOSE US</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, color: "white", fontFamily: "'Arial Black', sans-serif", letterSpacing: "-1px", marginBottom: 24, lineHeight: 1.1 }}>
              Repairs Done <span style={{ color: "#c0001a" }}>Right</span>, Every Time
            </h2>
            <p style={{ color: "#888", fontSize: 16, lineHeight: 1.7, marginBottom: 36, fontFamily: "Arial, sans-serif" }}>
              We've been keeping Siddharthanagar's bikes and vehicles rolling since 2008. Our team of certified mechanics uses professional-grade tools and only genuine parts — no shortcuts, no guesswork.
            </p>

            {[
              ["⚡", "Fast Turnaround", "Most repairs completed same day, often within the hour."],
              ["💯", "Genuine Parts", "We only fit quality parts — no cheap knock-offs that fail fast."],
              ["💰", "Fair Pricing", "Transparent quotes before we start. No hidden charges."],
              ["🛡️", "Warranty on Work", "All repairs backed by a 30-day workmanship guarantee."],
            ].map(([icon, title, desc]) => (
              <div key={title} style={{ display: "flex", gap: 16, marginBottom: 24, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, background: "#1a1a1a", border: "1px solid #c0001a", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ color: "white", fontWeight: 900, fontSize: 15, marginBottom: 4, fontFamily: "'Arial Black', sans-serif" }}>{title}</div>
                  <div style={{ color: "#888", fontSize: 13, fontFamily: "Arial, sans-serif", lineHeight: 1.5 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}

export default About