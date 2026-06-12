import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t-2 border-[#c0001a] px-6 py-10">
        <div className="max-w-350 mx-auto flex justify-between items-center flex-wrap gap-6">
            <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full border-2 border-[#c0001a] flex items-center justify-center bg-[#1a1a1a]">
                    <span className="text-sm">🔧</span>
                </div>
                <span className="text-xl font-black text-white" style={{ fontFamily: "'Arial Black', sans-serif" }}>
                    Shahid <span className="text-[#c0001a]">Tyres</span>
                </span>
            </div>

            <div className="text-[#555] text-m font-sans">
            © 2026 Shahid Tyres. All rights reserved. · Siddharthanagar, Nepal
            </div>

            <div className="flex gap-4">
                {["Facebook", "Instagram", "WhatsApp"].map(s => (
                    <a
                    key={s}
                    href="#"
                    className="text-[#555] text-m font-sans transition-colors duration-200 hover:text-[#c0001a]"
                    >
                    {s}
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer