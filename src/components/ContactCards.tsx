
import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  UserCheck
} from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

export const ContactCards: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [industrialArea, setIndustrialArea] = useState("");
  const [serviceType, setServiceType] = useState("Night Industrial Patrolling");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!name.trim() || !phone.trim()) {
      setStatusMessage({ type: "error", text: "Please enter your full name and 10-digit phone number." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, companyName, industrialArea, serviceType, message })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage({ type: "success", text: data.message });
        setName("");
        setPhone("");
        setCompanyName("");
        setIndustrialArea("");
        setMessage("");
      } else {
        setStatusMessage({ type: "error", text: data.error || "Failed to submit request. Please try again or call." });
      }
    } catch {
      setStatusMessage({
        type: "error",
        text: "Could not connect to server. Please call our 24×7 Helpline directly at 9376000205."
      });
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.headOffice.whatsapp}?text=${encodeURIComponent(
    "Hello COPS NIGHT PATROLLING, I would like to inquire about your industrial and residential night patrolling services."
  )}`;

  return (
    <section id="contact-section" className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5 text-red-600" />
            24×7 Emergency & Contact Center
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-heading">
            Connect With COPS NIGHT PATROLLING
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Contact our dedicated helplines for night patrol deployments, unscheduled inspection audits, and rapid emergency assistance across Bhopal, Indore, Delhi, and Rajasthan.
          </p>
        </div>

        {/* Primary Contact Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">

          {/* 1st Card: M.D. */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Managing Director
                </span>
                <UserCheck className="w-5 h-5 text-amber-700" />
              </div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Dharmender Malik (MD)
              </h3>
              <a
                href="tel:9376000204"
                className="text-2xl font-black text-slate-950 hover:text-amber-800 transition-colors block mt-1"
              >
                9376000204
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Executive leadership & critical corporate security inquiries
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="tel:9376000204"
                className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1"
              >
                Call Direct →
              </a>
            </div>
          </div>

          {/* 2nd Card: Helpline 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-red-600 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  24×7 Helpline
                </span>
                <Phone className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Helpline Number
              </h3>
              <a
                href="tel:9376000205"
                className="text-2xl font-black text-slate-950 hover:text-red-600 transition-colors block mt-1"
              >
                9376000205
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Night patrol deployments & rapid emergency assistance
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="tel:9376000205"
                className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
              >
                Call Now →
              </a>
            </div>
          </div>

          {/* 3rd Card: Helpline 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-red-600 bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  24×7 Helpline
                </span>
                <Phone className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Helpline Number
              </h3>
              <a
                href="tel:9376000206"
                className="text-2xl font-black text-slate-950 hover:text-red-600 transition-colors block mt-1"
              >
                9376000206
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Night patrol deployments & rapid emergency assistance
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="tel:9376000206"
                className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1"
              >
                Call Now →
              </a>
            </div>
          </div>

        </div>

        {/* 2-Column: Office Addresses & Quick Callback Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Office Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-extrabold text-slate-950 border-b border-slate-100 pb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                Office Address
              </h3>

              {/* Single Office Address (hardcoded) */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-950 uppercase">
                    HEAD OFFICE
                  </span>
                  <span className="font-bold text-sm text-slate-900">Bhiwadi</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed pl-1">
                  Shop No. 020-SunSquare Shopping Plaza,<br />
                  RIICO Chowk, Bhiwadi Distt. Khairthal-Tijara,<br />
                  Rajasthan - 301019
                </p>
              </div>

              {/* Email */}
              <div className="space-y-1.5 pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-blue-700" />
                  Official Email Address
                </div>
                <a
                  href={`mailto:${COMPANY_DATA.email}`}
                  className="text-sm sm:text-base font-bold text-blue-900 hover:underline block break-all"
                >
                  {COMPANY_DATA.email}
                </a>
              </div>

              {/* WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Callback Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  Quick Inquiry Form
                </span>
                <h3 className="text-2xl font-black text-slate-950 tracking-tight mt-0.5 font-heading">
                  Request Security & Patrolling Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Submit your details below. Our operations team will call you back promptly to coordinate your patrol requirements.
                </p>
              </div>

              {statusMessage && (
                <div
                  className={`mb-5 p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                    statusMessage.type === "success"
                      ? "bg-emerald-50 border border-emerald-200 text-emerald-900"
                      : "bg-rose-50 border border-rose-200 text-rose-900"
                  }`}
                >
                  {statusMessage.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                  )}
                  <span className="leading-relaxed">{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Full Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="10-digit mobile number"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Premier Industries Ltd."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Industrial / Residential Area
                    </label>
                    <input
                      type="text"
                      value={industrialArea}
                      onChange={(e) => setIndustrialArea(e.target.value)}
                      placeholder="e.g. Sanwer Road / Govindpura / Palda"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none bg-white"
                  >
                    <option value="Night Industrial Patrolling">Night Industrial Patrolling (10 PM to 6 AM)</option>
                    <option value="Multiple Night Checks">Multiple Night Checks (5–6 Inspections per Night)</option>
                    <option value="QRT Emergency Response">QRT Emergency Response (Rapid Dispatch)</option>
                    <option value="Daily WhatsApp Reporting">Daily WhatsApp Reporting (Verified Photo/Video Evidence)</option>
                    <option value="Fire & Safety Assistance">Fire & Safety Assistance (Trained Emergency Support)</option>
                    <option value="Residential Area Patrolling">Residential Area Patrolling (Gated Colonies & Societies)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message or Specific Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Factory area size, number of gates, shift timings, or specific patrolling concerns..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Submitting Request..." : "Submit Callback Request"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};