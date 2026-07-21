import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AIAssistant from "./pages/AIAssistant";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [cookieConsent, setCookieConsent] = useState(null);

  // Scroll to top whenever the active tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeTab]);

  // Check if consent was saved in local storage on initial load
  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent) {
      setCookieConsent(savedConsent);
    }
  }, []);

  const handleConsent = (choice) => {
    setCookieConsent(choice);
    localStorage.setItem("cookieConsent", choice);
  };

  const renderPage = () => {
    switch (activeTab) {
      case "home":
        return <Home setActiveTab={setActiveTab} />;
      case "ai-assistant":
        return <AIAssistant />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />

      {/* Cookie Consent Banner */}
      {cookieConsent === null && (
        <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-slate-700 p-4 shadow-2xl z-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white font-normal">
            We use cookies to improve your experience. By using our site, you
            agree to our use of cookies.
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={() => handleConsent("rejected")}
              className="px-4 py-2 text-sm font-medium rounded-md text-[#00D66C] border border-slate-600 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={() => handleConsent("accepted")}
              className="px-4 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
