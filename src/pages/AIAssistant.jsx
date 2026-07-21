import React, { useState } from 'react';
import { 
  FaPaperPlane, 
  FaUserDoctor, 
  FaShieldHalved, 
  FaBolt, 
  FaChartLine, 
  FaLock, 
  FaArrowRight 
} from 'react-icons/fa6';
import { FaCheckCircle } from "react-icons/fa";
import { HiSparkles } from 'react-icons/hi2';

export default function AiAssistant({ setActiveTab }) {
  // Preset clinical demo scenarios
  const presets = [
    {
      id: 1,
      title: 'Analyze Symptom Cluster',
      prompt: 'Patient exhibits persistent fatigue, elevated fasting glucose (128 mg/dL), and sudden weight loss over 4 weeks.',
      response: {
        summary: 'Primary Diagnostic Impression: High probability of Type 2 Diabetes Mellitus onset or early Metabolic Syndrome.',
        confidence: '96.4%',
        biomarkers: [
          { name: 'Fasting Glucose', val: '128 mg/dL', status: 'High' },
          { name: 'Est. HbA1c Target', val: '6.8 - 7.2%', status: 'Elevated' }
        ],
        recommendations: [
          'Order full Metabolic Panel (CMP) & HbA1c test.',
          'Schedule targeted nutrition & endocrine consultation.',
          'Screen for secondary thyroid dysfunctions.'
        ]
      }
    },
    {
      id: 2,
      title: 'Check Medication Interaction',
      prompt: 'Is there any contraindication in prescribing Metformin alongside lisinopril and atorvastatin for a 58-year-old male?',
      response: {
        summary: 'No severe major interactions detected. Renal function monitoring recommended.',
        confidence: '98.1%',
        biomarkers: [
          { name: 'Interaction Severity', val: 'Low Risk', status: 'Optimal' },
          { name: 'Renal Clearance', val: 'eGFR > 60 Required', status: 'Monitor' }
        ],
        recommendations: [
          'Verify baseline Serum Creatinine / eGFR before starting Metformin.',
          'Monitor blood pressure response during initial co-administration.',
          'Advise patient on hydration during concurrent use.'
        ]
      }
    },
    {
      id: 3,
      title: 'Summarize Lab Results',
      prompt: 'Interpret biomarker panel: LDL 165 mg/dL, HDL 38 mg/dL, Triglycerides 210 mg/dL, CRP 3.2 mg/L.',
      response: {
        summary: 'Atherogenic Dyslipidemia with elevated systemic inflammation indicators.',
        confidence: '94.8%',
        biomarkers: [
          { name: 'LDL Cholesterol', val: '165 mg/dL', status: 'High' },
          { name: 'hs-CRP', val: '3.2 mg/L', status: 'Elevated Risk' }
        ],
        recommendations: [
          'Consider initiation or dose adjustment of lipid-lowering statin therapy.',
          'Recommend cardiac risk evaluation (CAC scoring or ASCVD risk calculation).',
          'Implement Mediterranean dietary protocols.'
        ]
      }
    }
  ];

  const [selectedPreset, setSelectedPreset] = useState(presets[0]);
  const [customInput, setCustomInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'user',
      text: presets[0].prompt
    },
    {
      sender: 'ai',
      data: presets[0].response
    }
  ]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Trigger scenario switch or prompt submission
  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setIsAnalyzing(true);
    setChatHistory([{ sender: 'user', text: preset.prompt }]);
    
    setTimeout(() => {
      setChatHistory([
        { sender: 'user', text: preset.prompt },
        { sender: 'ai', data: preset.response }
      ]);
      setIsAnalyzing(false);
    }, 600);
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const userText = customInput;
    setCustomInput('');
    setIsAnalyzing(true);

    setChatHistory(prev => [...prev, { sender: 'user', text: userText }]);

    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        {
          sender: 'ai',
          data: {
            summary: `Clinical synthesis completed for query regarding: "${userText.slice(0, 40)}..."`,
            confidence: '95.2%',
            biomarkers: [
              { name: 'Diagnostic Confidence', val: 'High Accuracy', status: 'Optimal' },
              { name: 'Clinical Verification', val: 'Required', status: 'Pending' }
            ],
            recommendations: [
              'Cross-reference findings with EHR historical records.',
              'Confirm patient history and allergen profiles prior to decision.',
              'Export findings directly to patient chart.'
            ]
          }
        }
      ]);
      setIsAnalyzing(false);
    }, 900);
  };

  return (
    <div className="relative text-[#121812] font-sans min-h-screen">
      
      {/* Global Subtle Background Image */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: `url('https://i.pinimg.com/736x/4a/5c/d7/4a5cd7646653fe02bf83ba73cad21530.jpg')` 
        }}
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAFCEF] border border-[#00D66C]/40 text-[#004A24] text-xs font-extrabold shadow-2xs">
          <HiSparkles className="text-[#00D66C]" />
          <span>Clinical AI Assistant • Live Interactive Demo</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black text-[#121812] tracking-tight leading-tight">
          Experience the future of <br />
          <span className="text-[#00D66C]">clinical intelligence</span> in action.
        </h1>

        <p className="text-xs sm:text-sm text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
          MediAI assists physicians and clinical teams with real-time diagnostic synthesis, biomarker parsing, and drug interaction safety checks. Try the live interactive simulator below.
        </p>
      </section>


      {/* Main Interactive Sandbox Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Clinical Preset Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-lg space-y-4">
              <h3 className="text-sm font-black text-[#121812] uppercase tracking-wider flex items-center gap-2">
                <FaUserDoctor className="text-[#00D66C]" /> Select Sample Case
              </h3>
              <p className="text-xs text-gray-500 font-medium">
                Click any pre-configured clinical query to see how MediAI processes complex patient data:
              </p>

              <div className="space-y-2.5 pt-1">
                {presets.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelectPreset(item)}
                    className={`w-full text-left p-4 rounded-2xl text-xs font-bold transition-all cursor-pointer flex justify-between items-center ${
                      selectedPreset.id === item.id 
                        ? 'bg-[#032313] text-white shadow-md' 
                        : 'bg-[#F4F6F4] hover:bg-[#EAEFEA] text-gray-800'
                    }`}
                  >
                    <span>{item.title}</span>
                    <FaArrowRight className={`text-[10px] ${selectedPreset.id === item.id ? 'text-[#00D66C]' : 'text-gray-400'}`} />
                  </button>
                ))}
              </div>

              {/* Security Metrics Box */}
              <div className="pt-4 border-t border-gray-100 space-y-2 text-[11px] text-gray-600">
                <div className="flex items-center gap-2 font-bold text-gray-800">
                  <FaShieldHalved className="text-[#00D66C]" />
                  <span>HIPAA & SOC2 Type II Compliant</span>
                </div>
                <p className="text-[10px] text-gray-500 leading-snug">
                  All clinical reasoning models operate within encrypted, isolated environments ensuring zero data leakage.
                </p>
              </div>
            </div>

            {/* Doctor Testimonial Card */}
            <div className="bg-[#D3F5E1]/90 backdrop-blur-md p-6 rounded-3xl space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xs">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80" 
                    alt="Dr. Sarah Jenkins - Lead Neurologist" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#002B14]">Dr. Sarah Jenkins, MD</h4>
                  <p className="text-[10px] text-emerald-800 font-semibold">Chief of Medicine • St. Jude Health</p>
                </div>
              </div>
              <p className="text-xs text-[#00381B] font-medium leading-relaxed italic">
                "MediAI reduces our clinical documentation time by 40%. It acts as an incredible second reader for complex biomarker trends."
              </p>
            </div>
          </div>


          {/* Right Column: Live Chat Interface */}
          <div className="lg:col-span-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden flex flex-col min-h-[580px]">
            
            {/* Top Chat Bar */}
            <div className="bg-[#1A1F1C] px-6 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#00D66C] animate-pulse"></div>
                <div>
                  <h3 className="text-xs font-black tracking-wide text-white">MediAI Engine v4.2</h3>
                  <p className="text-[10px] text-gray-400 font-medium">Medical LLM • Active Session</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#2A322D] text-[10px] font-bold text-[#00D66C]">
                  Latency: 18ms
                </span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-6 space-y-6 overflow-y-auto max-h-[460px]">
              {chatHistory.map((msg, index) => (
                <div key={index} className="space-y-2">
                  
                  {/* User Query */}
                  {msg.sender === 'user' && (
                    <div className="flex justify-end">
                      <div className="bg-[#032313] text-white p-4 rounded-2xl rounded-tr-xs max-w-lg text-xs font-medium leading-relaxed shadow-sm">
                        <p className="text-[10px] text-[#00D66C] font-extrabold mb-1">CLINICIAN QUERY</p>
                        {msg.text}
                      </div>
                    </div>
                  )}

                  {/* AI Medical Response */}
                  {msg.sender === 'ai' && (
                    <div className="flex justify-start">
                      <div className="bg-[#F4F8F5] border border-[#00D66C]/20 p-5 rounded-2xl rounded-tl-xs max-w-2xl text-xs space-y-4 shadow-xs">
                        
                        {/* Header Status */}
                        <div className="flex items-center justify-between border-b border-gray-200/80 pb-2">
                          <div className="flex items-center gap-2 text-[#006B35] font-extrabold text-[11px]">
                            <HiSparkles />
                            <span>CLINICAL SYNTHESIS</span>
                          </div>
                          <span className="bg-[#00D66C]/10 text-[#005228] px-2.5 py-0.5 rounded-full font-black text-[10px]">
                            Confidence Score: {msg.data.confidence}
                          </span>
                        </div>

                        {/* Impression Summary */}
                        <p className="font-extrabold text-gray-900 text-sm leading-snug">
                          {msg.data.summary}
                        </p>

                        {/* Biomarker Breakdown Grid */}
                        {msg.data.biomarkers && (
                          <div className="grid grid-cols-2 gap-2 pt-1">
                            {msg.data.biomarkers.map((b, i) => (
                              <div key={i} className="bg-white p-2.5 rounded-xl border border-gray-100 flex items-center justify-between">
                                <div>
                                  <p className="text-[10px] text-gray-400 font-bold">{b.name}</p>
                                  <p className="text-xs font-black text-gray-800">{b.val}</p>
                                </div>
                                <span className={`text-[9px] font-black px-2 py-0.5 rounded-md ${
                                  b.status === 'High' || b.status === 'Elevated' || b.status === 'Elevated Risk' 
                                    ? 'bg-amber-100 text-amber-800' 
                                    : 'bg-emerald-100 text-emerald-800'
                                }`}>
                                  {b.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Next Steps / Recommendations */}
                        {msg.data.recommendations && (
                          <div className="space-y-1.5 pt-1">
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-wider">Suggested Clinical Next Steps:</p>
                            <ul className="space-y-1">
                              {msg.data.recommendations.map((rec, i) => (
                                <li key={i} className="flex items-start gap-2 text-[11px] text-gray-700 font-medium">
                                  <FaCheckCircle className="text-[#00D66C] text-xs shrink-0 mt-0.5" />
                                  <span>{rec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                      </div>
                    </div>
                  )}

                </div>
              ))}

              {/* Analyzing Loader State */}
              {isAnalyzing && (
                <div className="flex justify-start">
                  <div className="bg-[#F4F8F5] p-4 rounded-2xl text-xs font-bold text-gray-500 flex items-center gap-3">
                    <div className="w-4 h-4 border-2 border-[#00D66C] border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing medical logic & parsing biomarkers...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Form Footer */}
            <form onSubmit={handleCustomSubmit} className="p-4 bg-gray-50 border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Type custom patient case or lab values to test..."
                className="flex-1 px-4 py-3 rounded-full bg-white border border-gray-200 text-xs outline-none focus:border-[#00D66C] shadow-2xs font-medium"
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-full bg-[#032313] hover:bg-[#02180D] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md cursor-pointer shrink-0"
              >
                <span>Analyze</span> <FaPaperPlane className="text-[10px] text-[#00D66C]" />
              </button>
            </form>

          </div>

        </div>
      </section>


      {/* Value Proposition Highlights Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#EAFCEF] text-[#00D66C] flex items-center justify-center text-lg font-bold">
              <FaBolt />
            </div>
            <h4 className="text-sm font-black text-[#121812]">Instant Charting</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Synthesizes long consultation transcripts into accurate SOAP notes in under 3 seconds.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#EAFCEF] text-[#00D66C] flex items-center justify-center text-lg font-bold">
              <FaChartLine />
            </div>
            <h4 className="text-sm font-black text-[#121812]">Predictive Biomarkers</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Flags anomalous trend lines across historical lab tests to catch early chronic symptoms.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#EAFCEF] text-[#00D66C] flex items-center justify-center text-lg font-bold">
              <FaLock />
            </div>
            <h4 className="text-sm font-black text-[#121812]">Zero Data Retention</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Patient data is processed in-memory and never used to train public machine learning models.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-[#EAFCEF] text-[#00D66C] flex items-center justify-center text-lg font-bold">
              <FaShieldHalved />
            </div>
            <h4 className="text-sm font-black text-[#121812]">EHR Integration</h4>
            <p className="text-xs text-gray-500 font-medium leading-relaxed">
              Native FHIR/HL7 API connectors for Epic, Cerner, AthenaHealth, and practice management tools.
            </p>
          </div>

        </div>
      </section>


      {/* Enterprise Conversion CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-[#032313] rounded-[36px] p-8 sm:p-14 text-center text-white space-y-6 relative overflow-hidden shadow-2xl">
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to deploy MediAI in your clinical workflow?
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed">
              Join over 300,000 healthcare professionals saving hours daily on diagnostics, charting, and patient communications.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3 pt-4">
              <button 
                onClick={() => alert('Initiating Enterprise Onboarding')}
                className="px-8 py-3.5 rounded-full bg-[#00D66C] hover:bg-[#00B85C] text-[#001D0C] text-xs font-black transition-all shadow-lg cursor-pointer"
              >
                Schedule Enterprise Trial
              </button>
              <button 
                onClick={() => setActiveTab && setActiveTab('home')}
                className="px-8 py-3.5 rounded-full bg-[#1A3828] hover:bg-[#254A36] text-white text-xs font-bold transition-all cursor-pointer border border-[#00D66C]/20"
              >
                Back to Home
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}