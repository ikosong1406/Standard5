import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaQrcode,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-4 lg:px-8 pb-12">
      <div className="bg-[#D3F5E1] rounded-[36px] p-8 sm:p-12 space-y-12 border border-[#B3E8C8]">
        {/* Brand Header */}
        <div className="flex items-center gap-1">
          <div className="text-[#00D66C] text-xl font-black">
            <HiSparkles />
          </div>
          <span className="font-extrabold text-xl tracking-tight text-[#121812]">
            Standard<span className="text-[#001D0C]">5</span>
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Navigation Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6">
            <div>
              <p className="text-[11px] font-black uppercase tracking-wider text-gray-800 mb-3">
                Company
              </p>
              <ul className="space-y-2 text-xs font-medium text-gray-700">
                <li>
                  <a className="hover:text-black">
                    Join Function
                  </a>
                </li>
                <li>
                  <a className="hover:text-black">
                    Login
                  </a>
                </li>
                <li>
                  <a className="hover:text-black">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a className="hover:text-black">
                    Security
                  </a>
                </li>
                <li>
                  <a className="hover:text-black">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-black">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-wider text-gray-800 mb-3">
                Explore
              </p>
              <ul className="space-y-2 text-xs font-medium text-gray-700">
                <li>
                  <a className="hover:text-black">
                    What people say
                  </a>
                </li>
                <li>
                  <a className="hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-black">
                    MRI & CT scans
                  </a>
                </li>
                <li>
                  <a className="hover:text-black">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-black">
                    Lab locations
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe Card */}
          <div className="lg:col-span-5 bg-white/80 backdrop-blur-md p-6 rounded-3xl space-y-3 border border-white/60">
            <h4 className="font-black text-base text-[#001D0C] leading-snug">
              Subscribe and get 9 health guides for living 100 healthy years
            </h4>
            <p className="text-[11px] text-gray-600 font-medium">
              Get the foundational guides for lifelong health. Built by top
              experts with decades of research.
            </p>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 border-t border-[#B3E8C8] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <FaQrcode className="text-3xl text-gray-800" />
            <div className="flex gap-2">
              <button className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-[10px] font-bold flex items-center gap-1.5 text-gray-800">
                <FaGooglePlay /> Google Play
              </button>
              <button className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-[10px] font-bold flex items-center gap-1.5 text-gray-800">
                <FaApple /> App Store
              </button>
            </div>
          </div>

          <div className="space-y-2 text-center sm:text-right">
            <div className="flex justify-center sm:justify-end gap-3 text-gray-800 text-sm">
              <FaInstagram className="hover:text-black cursor-pointer" />
              <FaLinkedinIn className="hover:text-black cursor-pointer" />
              <FaXTwitter className="hover:text-black cursor-pointer" />
              <FaTiktok className="hover:text-black cursor-pointer" />
              <FaYoutube className="hover:text-black cursor-pointer" />
            </div>
            <p className="text-[10px] text-gray-600 font-medium">
              Privacy Policy • Terms of Service • Do Not Sell My Personal
              Information • Consumer Health Data Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
