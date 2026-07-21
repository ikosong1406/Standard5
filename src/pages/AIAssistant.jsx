import React, { useState } from 'react';
import { FaBrain, FaMicrophone, FaClock, FaCircleCheck, FaRobot } from 'react-icons/fa6';

export default function AIAssistant() {
  const [symptomInput, setSymptomInput] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!symptomInput.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setResult({
        primaryCondition: 'Acute Sinusitis / Viral Rhinovirus',
        confidence: 94,
        urgency: 'Low Risk - Outpatient Consult Recommended',
        suggestions: [
          'Saline nasal rinse 2x daily',
          'Increase fluid intake above 2.5L daily',
          'Rest and monitor temperature'
        ],
        recommendedSpecialist: 'ENT Specialist or Primary Care Physician'
      });
    }, 1400);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <span className="px-4 py-1.5 bg-[#E2E6E4] text-forest-deep text-xs font-bold rounded-full uppercase tracking-wider border border-card-border">
          Interactive Triage
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-forest-dark mt-3">Smart AI Health Assistant</h1>
        <p className="text-forest-mid mt-2 font-medium">Describe your symptoms naturally or pick quick tags below.</p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-card-border shadow-lg space-y-6">
        <form onSubmit={handleAnalyze} className="space-y-4">
          <label className="block text-sm font-bold text-forest-dark">What symptoms are you experiencing?</label>
          <div className="relative">
            <textarea
              rows="4"
              value={symptomInput}
              onChange={(e) => setSymptomInput(e.target.value)}
              placeholder="e.g. Throbbing pressure around forehead and eyes, congestion for 4 days, mild fatigue..."
              className="w-full p-4 rounded-2xl border border-card-border bg-[#F8F9F8] focus:bg-white focus:ring-2 focus:ring-emerald-accent focus:border-transparent outline-none text-forest-dark text-sm resize-none font-medium"
            ></textarea>
            <button type="button" className="absolute right-3 bottom-3 p-2 text-forest-mid hover:text-emerald-accent">
              <FaMicrophone className="text-lg" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs bg-[#E8EBE9] text-forest-dark font-semibold px-3 py-1.5 rounded-full cursor-pointer hover:bg-sage-light/30 transition-all" onClick={() => setSymptomInput('Sinus pressure and facial pain')}>#SinusPressure</span>
              <span className="text-xs bg-[#E8EBE9] text-forest-dark font-semibold px-3 py-1.5 rounded-full cursor-pointer hover:bg-sage-light/30 transition-all" onClick={() => setSymptomInput('Sore throat and dry cough')}>#SoreThroat</span>
            </div>
            <button
              type="submit"
              disabled={isAnalyzing}
              className="px-6 py-3 bg-forest-dark hover:bg-forest-deep text-white font-bold rounded-full text-xs tracking-wider transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50 cursor-pointer"
            >
              {isAnalyzing ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span> Analyzing...
                </>
              ) : (
                <>
                  <FaBrain className="text-sage-light" /> Analyze Symptoms
                </>
              )}
            </button>
          </div>
        </form>

        {result && (
          <div className="border-t border-card-border pt-6 mt-6 space-y-6">
            <div className="bg-[#F2F5F3] p-6 rounded-2xl border border-card-border">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-forest-mid uppercase tracking-wider">Clinical Probability</span>
                  <h3 className="text-2xl font-black text-forest-dark mt-1">{result.primaryCondition}</h3>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black text-emerald-accent">{result.confidence}%</span>
                  <p className="text-xs font-bold text-forest-mid">Confidence</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-forest-dark bg-white p-3 rounded-xl border border-card-border mb-4">
                <FaClock className="text-emerald-accent" /> 
                <span>Status: {result.urgency}</span>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-forest-mid uppercase tracking-wider">Recommended Action Steps:</p>
                <ul className="space-y-2">
                  {result.suggestions.map((item, idx) => (
                    <li key={idx} className="text-sm text-forest-dark font-medium flex items-center gap-2">
                      <FaCircleCheck className="text-emerald-accent text-xs" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between p-5 bg-forest-dark text-white rounded-2xl gap-4">
              <div>
                <p className="text-xs text-sage-soft font-semibold">Recommended Specialist Routing</p>
                <p className="font-bold text-sm text-white">{result.recommendedSpecialist}</p>
              </div>
              <button className="px-5 py-2.5 bg-emerald-accent hover:bg-forest-deep text-white text-xs font-bold rounded-full transition-all cursor-pointer">
                Book Video Consult
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}