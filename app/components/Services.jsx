"use client"
import Image from 'next/image'
import React from 'react'

const Services = () => {

  const services = [
  {
    tag: "Car · Bike",
    title: "Engine Diagnostics",
    desc: "We inspect the engine for power loss causes. Proper diagnosis prevents breakdowns.",
    image: "/images/engine diagonis.png",
  },
  {
    tag: "Car · Bike",
    title: "Brake Repair",
    desc: "If brakes feel weak or noisy, we'll check and replace parts to restore power.",
    image: "/images/brake repair.png",
  },
  {
    tag: "Maintenance",
    title: "Oil & Filter Change",
    desc: "New oil and filters significantly reduce wear. We replace the oil and check for leaks.",
    image: "/images/oil.png",
  },
  {
    tag: "Car · Bike",
    title: "Wheel Balancing",
    desc: "Unbalanced wheels cause vibration and uneven tyre wear. We balance all four wheels.",
    image: "/images/oil.png",
  },
]
  return (
    <section className="py-16 px-20"
      style={{
        background: "#0d0d0d" 
      }}
    >
      <div className='mt-20 text-center mb-25'>
        <div className='uppercase mb-7' 
          style={{ 
            color: "#c0001a", 
            fontSize: 15, 
            fontWeight: 900, 
            letterSpacing: "3px"
          }}>
          WHAT WE DO
        </div>
        <h2 className='text-white' 
          style={{ 
            fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, letterSpacing: "-1px" 
          }}>
          Our <span style={{ color: "#c0001a" }}>Services</span>
        </h2>
      </div>

      <div className="items-center flex flex-col p-2 gap-8">
      {
        services.map((service, i) => (
          <div
            key={i}
            className="w-full md:w-[67%] flex flex-col md:flex-row items-start justify-between py-12 px-5 gap-10 rounded-2xl transition-all duration-500 cursor-pointer border border-white/10"
            style={{ 
              background: "#111111",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-5px)";
              el.style.boxShadow = "0 0 40px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.6)";
              el.style.borderColor = "rgba(255,255,255,0.25)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
              el.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            <div className="flex-1 p-2">
              <p
                className="text-sm font-bold uppercase tracking-widest mb-3"
                style={{ color: "#c0001a" }}
              >
                {service.tag}
              </p>
              <h3 className="text-2xl font-bold text-white mb-5">{service.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed max-w-sm">{service.desc}</p>
            </div>

            <Image
              src={service.image}
              alt={service.title}
              width={380}
              height={300}
              className="w-full md:w-auto h-62.5 rounded-xl object-cover shrink-0 transition-all duration-300 group-hover:brightness-110"
            />
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default Services