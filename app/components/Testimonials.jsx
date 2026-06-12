import React from 'react'

const Testimonials = () => {
  return (
    <section className="px-6 py-20 bg-[#0a0a0a]">
        <div className="max-w-300 mx-auto">
            <div className="text-center mb-12">
                <div className="text-[#c0001a] text-m font-black tracking-[3px] uppercase mb-3">
                    HAPPY RIDERS
                </div>
                <h2 className="text-[clamp(28px,4vw,48px)] font-black text-white tracking-tight" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                    What Our <span className="text-[#c0001a]">Customers Say</span>
                </h2>
            </div>

            <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                {[
                    { name: "Ramesh Shrestha", role: "Motorbike Owner", text: "Fixed my puncture in 20 minutes. Cheap, fast, and the repair held perfectly for months. Won't go anywhere else.", stars: 5 },
                    { name: "Sunita Thapa", role: "Mountain Biker", text: "Full service on my Trek — gears shift perfectly now. They clearly know what they're doing. Highly recommended.", stars: 5 },
                    { name: "Bikash Yadav", role: "Daily Commuter", text: "Brought in two worn tyres and they had them swapped and balanced in under an hour. Great service, honest price.", stars: 5 },
                ].map((t) => (
                    <div key={t.name} className="bg-[#161616] border border-[#2a2a2a] rounded-lg p-7">
                        <div className="text-[#c0001a] text-lg mb-3">{"★".repeat(t.stars)}</div>
                        <p className="text-[#ccc] text-sm leading-[1.7] mb-5 italic font-sans">
                            &quot;{t.text}&quot;
                        </p>
                        <div className="border-t border-[#2a2a2a] pt-4">
                            <div className="text-white font-black text-sm">{t.name}</div>
                            <div className="text-[#666] text-xs uppercase tracking-[1px]">{t.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials