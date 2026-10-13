import React, { useState } from "react";
import { X, Phone, MessageSquare, ShieldCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultArea?: string;
}

export const CallbackModal: React.FC<CallbackModalProps> = ({
  isOpen,
  onClose,
  defaultService = "",
  defaultArea = ""
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industrialArea, setIndustrialArea] = useState(defaultArea);
  const [serviceType, setServiceType] = useState(defaultService || "Night Industrial Patrolling");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (!name.trim() || !phone.trim()) {
      setErrorMsg("Please enter your name and contact phone number.");
      return;
    }

    if (phone.replace(/\D/g, "").length < 10) {
      setErrorMsg("Please provide a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          companyName,
          industrialArea,
          serviceType,
          message
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccessMsg(data.message || "Thank you! Your patrol inquiry has been recorded. Our team will contact you shortly.");
        setName("");
        setPhone("");
        setCompanyName("");
        setMessage("");
      } else {
        setErrorMsg(data.error || "Unable to submit inquiry. Please call our helpline directly.");
      }
    } catch {
      setErrorMsg("Unable to connect to server. Please call our 24×7 Helpline directly at 7221 804 804.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.headOffice.whatsapp}?text=${encodeURIComponent(
    `Hello COPS NIGHT PATROLLING, I am inquiring about ${serviceType || "Night Patrolling"} service. Company: ${companyName || "N/A"}, Area: ${industrialArea || "N/A"}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-blue-950 text-white p-5 flex items-center justify-between relative border-b border-blue-900">
          <div>
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
              COPS NIGHT PATROLLING • DIRECT INQUIRY
            </span>
            <h3 className="text-xl font-extrabold text-white">
              Patrol Service Callback Request
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-blue-900 hover:bg-blue-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {/* Quick Direct Buttons Strip */}
          <div className="p-3 bg-orange-50 border border-orange-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-blue-950 font-bold">
              <Phone className="w-4 h-4 text-orange-500 shrink-0" />
              <span>Direct Emergency Helplines:</span>
            </div>
            <div className="flex gap-2">
              <a
                href={`tel:${COMPANY_DATA.contacts.bhopalHelpline.rawNumber}`}
                className="px-2.5 py-1.5 rounded-lg bg-orange-500 text-white font-bold hover:bg-orange-600"
              >
                Bhopal
              </a>
              <a
                href={`tel:${COMPANY_DATA.contacts.indoreHelpline.rawNumber}`}
                className="px-2.5 py-1.5 rounded-lg bg-blue-950 text-white font-bold hover:bg-blue-900"
              >
                Indore
              </a>
            </div>
          </div>

          {successMsg ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Inquiry Received!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">{successMsg}</p>
              <div className="pt-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-blue-950 text-white text-sm font-bold hover:bg-blue-900 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Industries Ltd"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Industrial / Residential Area
                  </label>
                  <select
                    value={industrialArea}
                    onChange={(e) => setIndustrialArea(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                  >
                    <option value="">Select Location</option>
                    <option value="Sanwer Road, Indore">Sanwer Road, Indore</option>
                    <option value="Pologround, Indore">Pologround, Indore</option>
                    <option value="Readymade Complex, Indore">Readymade Complex, Indore</option>
                    <option value="Palda / Bardari, Indore">Palda / Bardari, Indore</option>
                    <option value="Govindpura, Bhopal">Govindpura, Bhopal</option>
                    <option value="Residential Area, Bhopal">Residential Colony, Bhopal</option>
                    <option value="Residential Area, Indore">Residential Colony, Indore</option>
                    <option value="Mundka, Delhi">Mundka, Delhi</option>
                    <option value="Bhiwadi / Rajasthan">Bhiwadi / Rajasthan Hubs</option>
                    <option value="Other">Other Sector</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                  >
                    {COMPANY_DATA.services.map((svc) => (
                      <option key={svc.id} value={svc.title}>
                        {svc.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Requirements or Message (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Night shift guard inspection, warehouse perimeter security, daily WhatsApp report setup..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-md transition-all disabled:opacity-50 cursor-pointer"
                >
                  {loading ? "Submitting Inquiry..." : "Submit Callback Request"}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
