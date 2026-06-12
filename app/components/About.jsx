import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-linear-to-b from-[#0d0d0d] via-[#12000a] to-[#0d0d0d]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="w-full pb-[100%] rounded-full relative border-[3px] border-[#c0001a]"
            style={{
              background: "radial-gradient(circle, #1a0008 0%, #0a0a0a 70%)",
              boxShadow: "0 0 60px rgba(192,0,26,0.2), inset 0 0 60px rgba(192,0,26,0.05)",
            }}>
            <div className="absolute inset-[10%] rounded-full border-2 border-dashed border-[#c0001a]/30" />
            <div className="absolute inset-[35%] rounded-full bg-[#1a1a1a] border-2 border-[#333] flex items-center justify-center text-5xl">
              🔧
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 bg-[#c0001a] rounded-lg px-6 py-4 text-center">
            <div className="text-3xl font-black text-white">15+</div>
            <div className="text-[11px] text-white/80 tracking-[1px] uppercase">Years in Business</div>
          </div>
        </div>

        <div>
          <div className="text-[#c0001a] text-m font-black tracking-[3px] uppercase mb-3">WHY CHOOSE US</div>
          <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white tracking-[-1px] mb-6 leading-[1.1]">
            Repairs Done <span className="text-[#c0001a]">Right</span>, Every Time
          </h2>
          <p className="text-[#888] text-base leading-[1.7] mb-9">
            Flat tyre? We've got you covered. Since 2008, our skilled technicians have used professional-grade equipment and quality patchesto get you back on the road fast — no shortcuts, no guesswork.
          </p>

          {[
            ["⚡", "Fast Turnaround", "Most repairs completed same day, often within the hour."],
            ["💯", "Genuine Parts", "We only fit quality parts — no cheap knock-offs that fail fast."],
            ["💰", "Fair Pricing", "Transparent quotes before we start. No hidden charges."],
            ["🛡️", "Warranty on Work", "All repairs backed by a 30-day workmanship guarantee."],
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex gap-4 mb-6 items-start">
              <div className="w-12 h-12 bg-[#1a1a1a] border border-[#c0001a] rounded-lg flex items-center justify-center text-xl shrink-0">
                {icon}
              </div>
              <div>
                <div className="text-white font-black text-m mb-1">{title}</div>
                <div className="text-[#888] text-sm font-sans leading-normal">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About