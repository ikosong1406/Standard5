import React from "react";
import { FaArrowRight, FaApple } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function Home({ setActiveTab }) {
  return (
    <div className="relative text-[#121812] font-sans min-h-screen">
      {/* 1. Global Background Image with Fallback Pattern Overlay */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/4a/5c/d7/4a5cd7646653fe02bf83ba73cad21530.jpg')`,
        }}
      />

      {/* Hero Section */}
      <section
        id="hero"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-5xl sm:text-6xl font-black text-[#121812] leading-[1.05] tracking-tight">
              Smarter <br />
              healthcare, <br />
              powered by AI
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-sm leading-relaxed">
              Transform the way healthcare is delivered with one intelligent
              platform.
            </p>

            <button
              onClick={() => setActiveTab && setActiveTab("ai-assistant")}
              className="px-6 py-3.5 rounded-full bg-[#032313] hover:bg-[#02180D] text-white text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer"
            >
              Request a demo
            </button>

            {/* Trusted By Ribbon */}
            <div className="pt-10 space-y-3">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Trusted by Medical organizations
              </p>
              <div className="flex flex-wrap items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all text-xs font-black tracking-tighter text-gray-800">
                <span>GoodFriend</span>
                <span>LIFE FORTE</span>
                <span>Riverside</span>
                <span>DANFRED</span>
                <span>bethesda</span>
              </div>
            </div>
          </div>

          {/* Right Hero Mobile Mockup Frame */}
          <div className="lg:col-span-5 relative">
            <div
              className="rounded-[48px] p-6 sm:p-12 relative overflow-hidden shadow-xl min-h-[520px] flex items-center justify-center"
              style={{
                backgroundImage: `url('https://i.pinimg.com/control1/1200x/7b/04/96/7b0496379acaeae6d57360c2fbde9ebe.jpg')`,
              }}
            >
              {/* Phone Mockup Body */}
              <div className="w-full max-w-[280px] bg-white rounded-[36px] p-4 shadow-2xl space-y-4 relative z-10">
                {/* Phone Notch/Status Bar */}
                <div className="flex justify-between items-center text-[10px] text-gray-400 px-2 pt-1 font-bold">
                  <span>9:41</span>
                  <div className="w-12 h-2.5 bg-black rounded-full"></div>
                  <span>5G</span>
                </div>

                {/* Mobile App Header */}
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#EAFCEF] text-[#00D66C] flex items-center justify-center font-bold text-xs">
                      <HiSparkles />
                    </div>
                    <span className="text-xs font-extrabold text-gray-900">
                      Standard5
                    </span>
                  </div>
                  <span className="text-xs font-bold text-gray-400">≡</span>
                </div>

                <p className="text-xs font-extrabold text-gray-900">
                  Good morning, Dann.
                </p>

                {/* Lab Card with Image Placeholder */}
                <div className="bg-[#F8FAF8] p-3 rounded-2xl space-y-2">
                  <div className="flex items-center gap-1 text-[9px] text-gray-400 font-bold">
                    <span>⚠</span> Latest Lab Test
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-extrabold text-gray-900">
                        May 10, 2026
                      </p>
                      <p className="text-[9px] text-gray-400">
                        160+ biomarkers tested
                      </p>
                    </div>
                    {/* Replaced tube emoji with Image Tag */}
                    <div className="w-12 h-10 rounded-xl overflow-hidden bg-emerald-50">
                      <img
                        src="https://i.pinimg.com/control1/736x/4a/98/d7/4a98d7105c027a8d80b18fe0e16891ad.jpg"
                        alt="Lab Test Graphic Illustration"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Question Box */}
                <div className="bg-[#EAFCEF] p-3 rounded-2xl text-[10px] text-[#00381B] font-medium space-y-1">
                  <p className="font-bold">
                    ✦ What topics are you interested in exploring today?
                  </p>
                </div>
              </div>

              {/* Floating Survey Badge Overlay */}
              <div className="absolute top-0 left-0 sm:left-6 bg-white backdrop-blur-md p-4 rounded-2xl shadow-xl text-[10px] max-w-[210px] space-y-2 z-20">
                <p className="font-extrabold text-gray-800 leading-snug">
                  On a scale from 1 to 5, how would you rate your experience
                  with our services?
                </p>
                <div className="space-y-1.5 text-[9px] font-medium text-gray-500">
                  <div className="flex justify-between items-center">
                    <span>Extremely Satisfied</span>
                    <div className="w-12 h-1.5 bg-[#00D66C] rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Satisfied</span>
                    <div className="w-8 h-1.5 bg-[#00D66C]/60 rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Neither Satisfied nor Dissatisfied</span>
                    <div className="w-4 h-1.5 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Quote Overlay */}
              <div className="absolute bottom-8 right-4 sm:right-6 bg-white backdrop-blur-md p-3.5 rounded-2xl shadow-xl text-[9px] max-w-[200px] space-y-1 z-20">
                <p className="text-[#00D66C] font-black">✦ ✦ ✦</p>
                <p className="text-gray-600 font-medium leading-relaxed">
                  At MediAI, we are dedicated to enhancing patient experiences
                  through innovative AI solutions...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2x2 Feature Grid Section */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              ONE PLATFORM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#121812] leading-tight">
              Everything healthcare teams need, connected in one intelligent
              ecosystem.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Manage appointments, medical records, AI consultations,
              prescriptions, diagnostics, billing, and patient communication
              from a single secure platform—available on web and mobile.
            </p>
          </div>
        </div>

        {/* 2x2 Grid Cards with Image Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-xs p-8 rounded-3xl hover:shadow-xl transition-all space-y-6 group">
            <div className="h-52 bg-[#F6F8F6] rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/f2/47/d3/f247d3b2c252972f3728b360978b4894.jpg"
                alt="AI Medical Assistant Illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#121812]">
                AI Medical Assistant
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Custom AI models and automation tools that streamline
                operations, reduce effort, and unlock data-driven decisions.
              </p>
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#121812] group-hover:text-[#00D66C] transition-colors pt-2"
              >
                Learn More <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-xs p-8 rounded-3xl hover:shadow-xl transition-all space-y-6 group">
            <div className="h-52 bg-[#F6F8F6] rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/f0/eb/03/f0eb03301d8efaf9f08476a3cc9e1e16.jpg"
                alt="Electronic Health Records Illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#121812]">
                Electronic Health Records
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                We create responsive, polished user interfaces that feel fluid,
                intuitive, and visually consistent across platforms.
              </p>
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#121812] group-hover:text-[#00D66C] transition-colors pt-2"
              >
                Learn More <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 backdrop-blur-xs p-8 rounded-3xl hover:shadow-xl transition-all space-y-6 group">
            <div className="h-52 bg-[#F6F8F6] rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/cb/bf/f4/cbbff4def65ed0b0e0a6f3be1c87ccaf.jpg"
                alt="Virtual Consultations Illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#121812]">
                Virtual Consultations
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                We develop seamless native and cross-platform apps that improve
                user engagement and drive business results.
              </p>
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#121812] group-hover:text-[#00D66C] transition-colors pt-2"
              >
                Learn More <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/90 backdrop-blur-xs p-8 rounded-3xl hover:shadow-xl transition-all space-y-6 group">
            <div className="h-52 bg-[#F6F8F6] rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="https://i.pinimg.com/1200x/13/05/bb/1305bb8f163b5837e8ed38e211a9454f.jpg"
                alt="Analytics Dashboard Illustration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#121812]">
                Analytics Dashboard
              </h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Our backend systems ensure performance, security, and
                reliability that support long-term product growth and stability.
              </p>
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#121812] group-hover:text-[#00D66C] transition-colors pt-2"
              >
                Learn More <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Updates / Mint Banner Section */}
      <section id="updates" className="bg-[#E4F7EC]/90 backdrop-blur-xs py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-[#121812] leading-tight">
              Finding answers shouldn’t be hard. <br />
              We make it easy.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-3xl text-center space-y-4 shadow-xs">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto bg-emerald-50">
                <img
                  src="https://i.pinimg.com/1200x/45/03/c8/4503c869c6759a1505bb6c60b7c25873.jpg"
                  alt="Panic Free Symptom Checker Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-black text-[#121812]">
                Panic Free Symptom Checker
              </h3>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center space-y-4 shadow-xs">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto bg-emerald-50">
                <img
                  src="https://i.pinimg.com/1200x/59/dc/ac/59dcac22b6f3d6cc7443d777c9405e87.jpg"
                  alt="Dosage Calculator Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-black text-[#121812]">
                Weight-based Dosage Calculator
              </h3>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center space-y-4 shadow-xs">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto bg-emerald-50">
                <img
                  src="https://i.pinimg.com/1200x/a4/7e/9e/a47e9e30e3a4eaa1f487cbe4a08122c2.jpg"
                  alt="24 Hours Support Icon"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base font-black text-[#121812]">
                We’re here to help 24 hours a day.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Lab Testing Section (Removed border line) */}
      <section
        id="blog"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-[#121812] leading-tight">
              Gold standard <br />
              for lab testing
            </h2>
            <p className="text-xs text-gray-500 font-medium max-w-sm">
              Labs trusted by the medical community. Established partners.
              Consistent, reliable results.
            </p>
            <a
              href="#blog"
              className="inline-flex items-center gap-1 text-xs font-black text-[#121812] underline pt-2"
            >
              Explore testing options →
            </a>

            <div className="pt-8 flex items-center gap-6 grayscale opacity-70 text-xs font-black">
              <span>Quest Diagnostics</span>
              <span>Getlabs</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Map Card */}
            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-3xl space-y-4 shadow-xs">
              <p className="text-[11px] font-bold text-[#00D66C]">
                20+ lab test locations
              </p>
              <div className="h-28 rounded-2xl overflow-hidden bg-[#F5FAF6]">
                <img
                  src="https://i.pinimg.com/1200x/d1/f0/b8/d1f0b8f919ced3799afd41ebc4a4bb5d.jpg"
                  alt="US Lab Locations Map Graphic"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-4xl font-black text-[#121812]">20</p>
            </div>

            {/* Metric Growth Card */}
            <div className="bg-white/90 backdrop-blur-xs p-6 rounded-3xl space-y-4 shadow-xs">
              <p className="text-[11px] font-bold text-[#00D66C]">
                Results delivered to standard5 members
              </p>
              <p className="text-4xl font-black text-[#121812]">200+</p>
              <div className="h-20 rounded-xl overflow-hidden bg-emerald-50">
                <img
                  src="https://i.pinimg.com/1200x/01/ff/92/01ff929a4ca7743ad5bbe2c75d52bfd3.jpg"
                  alt="Results delivered growth chart"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-6">
        <h2 className="text-4xl sm:text-5xl font-black text-[#121812] tracking-tight">
          Deliver smarter <br />
          healthcare with AI.
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-medium max-w-lg mx-auto leading-relaxed">
          Empower your organization with intelligent tools that improve patient
          care, streamline operations, and help healthcare professionals focus
          on what matters most people.
        </p>

        <div className="flex justify-center items-center gap-3 pt-2">
          <button
            onClick={() => setActiveTab && setActiveTab("ai-assistant")}
            className="px-6 py-3 rounded-full bg-[#032313] hover:bg-[#02180D] text-white text-xs font-bold transition-all cursor-pointer"
          >
            Request a demo
          </button>
          <button
            onClick={() => alert("Contacting Sales Team")}
            className="px-6 py-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 text-[#121812] text-xs font-bold transition-all cursor-pointer"
          >
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
}
