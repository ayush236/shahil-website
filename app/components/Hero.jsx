"use client"
import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-screen relative flex items-center pt-20 overflow-hidden' 
        style={{
            background: "linear-gradient(135deg, #0a0a0a 0%, #1a0005 50%, #0a0a0a 100%)",
        }}>
        <div className='w-150 h-150 rounded-full absolute -right-100 top-[50%] transform -translate-y-1/2 pointer-events-none' style={{
          border: "60px solid rgba(192,0,26,0.12)",
        }} />
        <div className='w-100 h-100 rounded-full absolute right-0 top-[50%] transform -translate-y-1/2 pointer-events-none'style={{
          border: "40px solid rgba(192,0,26,0.08)",
        }} />
        <div className='absolute top-0 right-[30%] w-2 h-[120%] transform rotate-15 pointer-events-none'
          style={{
          background: "linear-gradient(180deg, transparent, rgba(192,0,26,0.3), transparent)",
        }} />

        <div className="max-w-300 mx-auto px-6 py-20 relative z-10"> 
            <div className="max-w-170">
                <div className="inline-block bg-[#c0001a] text-white px-3.5 py-1 text-xs font-black tracking-[2px] uppercase mb-6">
                ⚙ Trusted Since 2008
                </div>
                <h1 className="text-[clamp(42px,8vw,90px)] font-black leading-[0.95] mb-6 tracking-[-2px]" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                <span className="text-white">
                    FLAT TYRE?
                </span><br />
                <span 
                    style={{color: "#c0001a"}}
                >
                    FIXED.
                </span><br />
                <span className="text-white">
                    RIDE OUT.
                </span>
                </h1>
                <p className="text-lg text-[#aaa] leading-relaxed mb-10 max-w-125 font-normal" style={{ fontFamily: "Arial, sans-serif" }}>
                Expert tyre fitting, puncture repairs, and full bicycle servicing. Walk in, ride out — same day service guaranteed.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <a
                        href="https://wa.me/9761560190" target='_blank'
                        className="bg-[#c0001a] text-white px-6 py-4 no-underline text-[15px] font-black tracking-[1px] uppercase rounded transition-all duration-200 shadow-[0_0_30px_rgba(192,0,26,0.3)] hover:bg-[#e8001f] hover:shadow-[0_0_40px_rgba(232,0,31,0.5)]"
                    >
                        Call us: +977 9761561090
                    </a>
                    <a
                        href="/services"
                        className="border-2 border-[#444] text-white px-6 py-4 no-underline text-[15px] font-black tracking-[1px] uppercase rounded transition-all duration-200 hover:border-[#c0001a] hover:text-[#c0001a]"
                    >
                        Our Services
                    </a>
                </div>

                <div className="flex gap-10 mt-15 flex-wrap">
                    {[["5000+", "Happy Customers"], ["15+", "Years Experience"], ["Same Day", "Turnaround"]].map(([num, label]) => (
                        <div key={label}>
                            <div className="text-[28px] font-black text-[#c0001a]" style={{ fontFamily: "'Arial Black', sans-serif" }}>{num}</div>
                            <div className="text-xs text-[#aaa] tracking-[1px] uppercase" style={{ fontFamily: "Arial, sans-serif" }}>{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
  )
}

export default Hero