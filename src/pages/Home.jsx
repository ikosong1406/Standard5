import React from 'react';
import { 
  FaArrowRight, 
  FaApple, 
  FaPlay 
} from 'react-icons/fa6';
import { 
  BsStethoscope, 
  BsCalculator, 
  BsClock 
} from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi2';

export default function Home() {
  return (
    <div className="bg-[#F8FAF8] text-[#121812] font-sans min-h-screen">
      
      {/* ==================== HERO SECTION ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-5xl sm:text-7xl font-black text-[#121812] leading-[1.05] tracking-tight">
              Smarter <br />
              healthcare, <br />
              powered by AI
            </h1>
            
            <p className="text-xs sm:text-sm text-gray-500 font-medium max-w-sm leading-relaxed">
              Transform the way healthcare is delivered with one intelligent platform.
            </p>

            <button className="px-6 py-3.5 rounded-full bg-[#032313] hover:bg-[#02180D] text-white text-xs font-bold tracking-wide transition-all shadow-md cursor-pointer">
              Request a demo
            </button>

            {/* Client Logos Ribbon */}
            <div className="pt-10 space-y-3">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Trusted by 300K+ organizations worldwide
              </p>
              <div className="flex flex-wrap items-center gap-6 opacity-70 grayscale hover:grayscale-0 transition-all text-xs font-black tracking-tighter text-gray-800">
                <span>SAMSUNG</span>
                <span>Uber</span>
                <span>adidas</span>
                <span>HARVARD</span>
                <span>MCKESSON</span>
              </div>
            </div>
          </div>

          {/* Right Hero Frame with Floating Popups */}
          <div className="lg:col-span-7 relative">
            <div className="bg-gradient-to-br from-[#00D66C]/25 via-[#A1F0C4]/30 to-[#E8FAEF] rounded-[48px] p-6 sm:p-12 relative overflow-hidden border border-[#00D66C]/20 shadow-xl min-h-[520px] flex items-center justify-center">
              
              {/* Central Phone Mockup */}
              <div className="w-full max-w-[280px] bg-white rounded-[36px] p-4 shadow-2xl border border-gray-100/80 space-y-4 relative z-10">
                
                {/* Phone Top Status */}
                <div className="flex justify-between items-center text-[10px] text-gray-400 px-2 pt-1 font-bold">
                  <span>9:41</span>
                  <div className="w-12 h-2.5 bg-black rounded-full"></div>
                  <span>5G</span>
                </div>

                {/* App Navigation Header */}
                <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#EAFCEF] text-[#00D66C] flex items-center justify-center font-bold text-xs">
                      <HiSparkles />
                    </div>
                    <span className="text-xs font-extrabold text-gray-900">MediAI</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400">≡</span>
                </div>

                <p className="text-xs font-extrabold text-gray-900">Good morning, Dann.</p>

                {/* Lab Test Card with Graphic */}
                <div className="bg-[#F8FAF8] p-3 rounded-2xl border border-gray-100 space-y-2">
                  <div className="flex items-center gap-1 text-[9px] text-gray-400 font-bold">
                    <span>⚠</span> Latest Lab Test
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-extrabold text-gray-900">May 10, 2026</p>
                      <p className="text-[9px] text-gray-400">160+ biomarkers tested</p>
                    </div>
                    {/* Test Tube Graphics Container */}
                    <div className="w-12 h-10 bg-gradient-to-b from-[#EBFCEF] to-[#D0F7DF] rounded-xl flex items-center justify-center text-xs text-[#00D66C]">
                      🧪
                    </div>
                  </div>
                </div>

                {/* Floating Question Box */}
                <div className="bg-[#EAFCEF] p-3 rounded-2xl text-[10px] text-[#00381B] font-medium border border-[#00D66C]/30 space-y-1">
                  <p className="font-bold">✦ What topics are you interested in exploring today?</p>
                </div>
              </div>

              {/* Top Left Floating Survey Badge */}
              <div className="absolute top-8 left-4 sm:left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 text-[10px] max-w-[210px] space-y-2 z-20">
                <p className="font-extrabold text-gray-800 leading-snug">
                  On a scale from 1 to 5, how would you rate your experience with our services?
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

              {/* Bottom Right Floating Quote Card */}
              <div className="absolute bottom-8 right-4 sm:right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-gray-100 text-[9px] max-w-[200px] space-y-1 z-20">
                <p className="text-[#00D66C] font-black">✦ ✦ ✦</p>
                <p className="text-gray-600 font-medium leading-relaxed">
                  At MediAI, we are dedicated to enhancing patient experiences through innovative AI solutions...
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ==================== INSURANCE TRUST BAR ==================== */}
      <section className="py-12 border-t border-b border-gray-200/80 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div>
            <h3 className="text-2xl font-black text-[#121812]">We take all major insurances</h3>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              And many more! Visit our website to learn more about insurance we offer in Portland and Austin.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all text-xs font-black tracking-tight text-gray-800">
            <span className="font-serif italic text-base">brewer lane ventures</span>
            <span className="underline decoration-2">1a capital group</span>
            <span className="flex items-center gap-1 font-extrabold"><span className="text-xs">◆</span> TWO SIGMA VENTURES</span>
            <span className="tracking-widest font-extrabold">DIGITALIS</span>
            <span className="font-mono">FOUNDER COLLECTIVE</span>
          </div>
        </div>
      </section>


      {/* ==================== 2x2 FEATURE GRID ==================== */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">ONE PLATFORM</span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#121812] leading-tight">
              Everything healthcare teams need, connected in one intelligent ecosystem.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Manage appointments, medical records, AI consultations, prescriptions, diagnostics, billing, and patient communication from a single secure platform—available on web and mobile.
            </p>
          </div>
        </div>

        {/* 2x2 Grid with Vector Style Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 hover:border-[#00D66C]/50 transition-all space-y-6 group">
            <div className="h-52 bg-[#F6F8F6] rounded-2xl flex items-center justify-center border border-gray-100 relative overflow-hidden">
              <div className="w-28 h-28 rounded-full border-2 border-dashed border-[#00D66C]/40 flex items-center justify-center text-4xl text-[#00D66C]">
                🤖
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#121812]">AI Medical Assistant</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Custom AI models and automation tools that streamline operations, reduce effort, and unlock data-driven decisions.
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-black text-[#121812] group-hover:text-[#00D66C] transition-colors pt-2">
                Learn More <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 hover:border-[#00D66C]/50 transition-all space-y-6 group">
            <div className="h-52 bg-[#F6F8F6] rounded-2xl flex items-center justify-center border border-gray-100 relative overflow-hidden">
              <div className="w-36 h-24 bg-white rounded-xl shadow-xs border border-gray-200 p-2 text-[10px] font-bold text-gray-400 flex flex-col justify-between">
                <div className="flex justify-between border-b pb-1"><span>SCAN</span><span className="text-[#00D66C]">ECG</span></div>
                <div className="h-2 w-full bg-gray-100 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#121812]">Electronic Health Records</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                We create responsive, polished user interfaces that feel fluid, intuitive, and visually consistent across platforms.
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-black text-[#121812] group-hover:text-[#00D66C] transition-colors pt-2">
                Learn More <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 hover:border-[#00D66C]/50 transition-all space-y-6 group">
            <div className="h-52 bg-[#F6F8F6] rounded-2xl flex items-center justify-center border border-gray-100 relative overflow-hidden">
              <div className="w-24 h-32 bg-white rounded-2xl shadow-xs border border-gray-200 p-2 text-center text-2xl">
                📱
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#121812]">Virtual Consultations</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                We develop seamless native and cross-platform apps that improve user engagement and drive business results.
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-black text-[#121812] group-hover:text-[#00D66C] transition-colors pt-2">
                Learn More <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200/80 hover:border-[#00D66C]/50 transition-all space-y-6 group">
            <div className="h-52 bg-[#F6F8F6] rounded-2xl flex items-center justify-center border border-gray-100 relative overflow-hidden">
              <div className="w-28 h-28 bg-white rounded-2xl shadow-xs border border-gray-200 p-3 space-y-2">
                <div className="h-3 bg-[#00D66C]/30 rounded-full w-full"></div>
                <div className="h-3 bg-[#00D66C]/60 rounded-full w-3/4"></div>
                <div className="h-3 bg-[#00D66C] rounded-full w-1/2"></div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#121812]">Analytics Dashboard</h3>
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Our backend systems ensure performance, security, and reliability that support long-term product growth and stability.
              </p>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-black text-[#121812] group-hover:text-[#00D66C] transition-colors pt-2">
                Learn More <FaArrowRight className="text-[10px]" />
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ==================== MINT BANNER ==================== */}
      <section className="bg-[#E4F7EC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-[#121812] leading-tight">
              Finding answers shouldn’t be hard. <br />
              We make it easy.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-8 rounded-3xl text-center space-y-4 border border-gray-100 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-[#EBFCEF] text-[#00D66C] mx-auto flex items-center justify-center text-2xl font-bold">
                <BsStethoscope />
              </div>
              <h3 className="text-base font-black text-[#121812]">Panic Free Symptom Checker</h3>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center space-y-4 border border-gray-100 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-[#EBFCEF] text-[#00D66C] mx-auto flex items-center justify-center text-2xl font-bold">
                <BsCalculator />
              </div>
              <h3 className="text-base font-black text-[#121812]">Weight-based Dosage Calculator</h3>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center space-y-4 border border-gray-100 shadow-xs">
              <div className="w-16 h-16 rounded-full bg-[#EBFCEF] text-[#00D66C] mx-auto flex items-center justify-center text-2xl font-bold">
                <BsClock />
              </div>
              <h3 className="text-base font-black text-[#121812]">We’re here to help 24 hours a day.</h3>
            </div>

          </div>

        </div>
      </section>


      {/* ==================== BENTO MEDIA & TRENDS ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Grid (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Light Green Banner */}
            <div className="bg-[#D3F5E1] p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#B3E8C8]">
              <div className="w-28 h-36 bg-white rounded-2xl p-2 shadow-md flex items-center justify-center text-center font-bold text-xs text-gray-800">
                HealthAI
              </div>
              
              <div className="space-y-3 max-w-md">
                <h3 className="text-xl sm:text-2xl font-black text-[#002B14] leading-snug">
                  Discover the latest trends in health and wellness that are gaining popularity every day.
                </h3>
                <button className="px-4 py-2 rounded-full bg-black text-white text-[11px] font-bold flex items-center gap-2">
                  <FaApple className="text-xs" /> Available on App Store
                </button>
              </div>
            </div>

            {/* Bottom 2 Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Engagement Metric Card */}
              <div className="bg-[#F4F6F4] p-6 rounded-3xl border border-gray-200/60 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-white text-[10px] font-bold text-gray-700 shadow-2xs">
                  ✦ This health tip received 1.2K Likes
                </div>
                <div className="h-20 bg-white rounded-xl flex items-end justify-center p-2">
                  <div className="w-8 bg-[#00D66C] rounded-t-lg h-full"></div>
                </div>
                <p className="text-xs font-medium text-gray-600">
                  Monitor which health tips received the most engagement, such as likes and comments.
                </p>
              </div>

              {/* Innovative Health Thumbnails Card */}
              <div className="bg-[#EAF5EF] p-6 rounded-3xl border border-gray-200/60 space-y-4">
                <h4 className="font-black text-sm text-[#001D0C]">Innovative health and care</h4>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="h-20 bg-white/80 rounded-xl flex items-center justify-center text-xs">🔬</div>
                  <div className="h-20 bg-white/80 rounded-xl flex items-center justify-center text-xs">🩺</div>
                  <div className="h-20 bg-white/80 rounded-xl flex items-center justify-center text-xs">🧬</div>
                  <div className="h-20 bg-white/80 rounded-xl flex items-center justify-center text-xs">🏥</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Doctor Portrait Card (4 Cols) */}
          <div className="lg:col-span-4 bg-gradient-to-b from-[#A0B8AD] to-[#6E8A7D] rounded-3xl p-6 text-white flex flex-col justify-between relative overflow-hidden min-h-[440px]">
            <div className="w-full flex justify-center pt-8">
              <div className="w-32 h-32 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-5xl">
                👨‍⚕️
              </div>
            </div>

            <div className="relative z-10 space-y-3">
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl border border-white/30 text-xs">
                <p className="font-bold">How would you rate this health tip on a scale from 1 to 10?</p>
              </div>
              <div className="flex justify-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span className="w-2 h-2 rounded-full bg-white/40"></span>
                <span className="w-2 h-2 rounded-full bg-white/40"></span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ==================== LAB TESTING SECTION ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-gray-200/80">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-[#121812] leading-tight">
              Gold standard <br />
              for lab testing
            </h2>
            <p className="text-xs text-gray-500 font-medium max-w-sm">
              Labs trusted by the medical community. Established partners. Consistent, reliable results.
            </p>
            <a href="#" className="inline-flex items-center gap-1 text-xs font-black text-[#121812] underline pt-2">
              Explore testing options →
            </a>

            <div className="pt-8 flex items-center gap-6 grayscale opacity-70 text-xs font-black">
              <span>Quest Diagnostics</span>
              <span>Getlabs</span>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Map Card */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200/80 space-y-4 shadow-xs">
              <p className="text-[11px] font-bold text-[#00D66C]">2,000+ lab test locations across the US</p>
              <div className="h-28 bg-[#F5FAF6] rounded-2xl flex items-center justify-center text-3xl text-[#00D66C]/40 font-mono">
                [ US MAP ]
              </div>
              <p className="text-4xl font-black text-[#121812]">2,000</p>
            </div>

            {/* Metric Growth Card */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200/80 space-y-4 shadow-xs">
              <p className="text-[11px] font-bold text-[#00D66C]">Over 75M+ million results delivered to MediAI members</p>
              <p className="text-4xl font-black text-[#121812]">75M+</p>
              <div className="h-20 flex items-end gap-1.5 pt-2">
                <div className="flex-1 bg-[#00D66C]/20 h-1/3 rounded-t-sm"></div>
                <div className="flex-1 bg-[#00D66C]/40 h-1/2 rounded-t-sm"></div>
                <div className="flex-1 bg-[#00D66C]/70 h-3/4 rounded-t-sm"></div>
                <div className="flex-1 bg-[#00D66C] h-full rounded-t-sm"></div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ==================== CALL TO ACTION ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-6">
        <h2 className="text-4xl sm:text-6xl font-black text-[#121812] tracking-tight">
          Deliver smarter <br />
          healthcare with AI.
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-medium max-w-lg mx-auto leading-relaxed">
          Empower your organization with intelligent tools that improve patient care, streamline operations, and help healthcare professionals focus on what matters most—people.
        </p>

        <div className="flex justify-center items-center gap-3 pt-2">
          <button className="px-6 py-3 rounded-full bg-[#032313] hover:bg-[#02180D] text-white text-xs font-bold transition-all cursor-pointer">
            Request a demo
          </button>
          <button className="px-6 py-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 text-[#121812] text-xs font-bold transition-all cursor-pointer">
            Contact us
          </button>
        </div>
      </section>

    </div>
  );
}