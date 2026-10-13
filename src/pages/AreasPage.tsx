import React, { useState } from "react";
import {
  MapPin,
  Shield,
  Phone,
  ArrowDown,
  Compass,
  Eye,
  Search,
  ShieldAlert,
  Send,
  Building,
  CheckCircle2,
  Flame,
  MessageSquare,
  ArrowRight
} from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

interface AreasPageProps {
  onOpenCallback: (areaName?: string) => void;
}

export const AreasPage: React.FC<AreasPageProps> = ({ onOpenCallback }) => {
  const [selectedRegion, setSelectedRegion] = useState<string>("INDORE");

  const activeAreaData = COMPANY_DATA.areasWeServe.find((a) => a.region === selectedRegion) || COMPANY_DATA.areasWeServe[0];

  const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.headOffice.whatsapp}?text=${encodeURIComponent(
    `Hello COPS NIGHT PATROLLING, I am inquiring about industrial night patrolling services in ${selectedRegion}.`
  )}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-blue-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=2000&q=80"
            alt="Industrial Areas Night Patrol"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/90 text-amber-400 border border-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Operational Network & Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-heading">
              Service Areas We Secure
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Active security patrols deployed across key industrial corridors and residential communities in Indore, Bhopal, Delhi NCR, and Rajasthan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Areas Navigation and Interactive Cards */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
            {COMPANY_DATA.areasWeServe.map((regionItem) => {
              const isSelected = selectedRegion === regionItem.region;
              return (
                <button
                  key={regionItem.region}
                  onClick={() => setSelectedRegion(regionItem.region)}
                  className={`px-5 py-3 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? "bg-blue-950 text-white shadow-lg ring-2 ring-blue-800"
                      : "bg-slate-100 text-slate-700 hover:bg-orange-50"
                  }`}
                >
                  <MapPin className={`w-4 h-4 ${isSelected ? "text-amber-400" : "text-slate-500"}`} />
                  <span>{regionItem.region}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${isSelected ? "bg-blue-900 text-orange-300" : "bg-slate-200 text-slate-600"}`}>
                    {regionItem.areas.length} {regionItem.areas.length === 1 ? "Zone" : "Zones"}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Region Card */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Region Info (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest px-2.5 py-1 rounded bg-orange-50 border border-orange-100">
                    {activeAreaData.state}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Active Night Patrolling Deployment
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-heading">
                  {activeAreaData.region} Industrial Hubs
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {activeAreaData.description}
                </p>

                {/* List of exact supplied areas */}
                <div className="pt-2">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3">
                    Key Industrial Areas Covered:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeAreaData.areas.map((area, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 shadow-xs"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center text-xs font-bold shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-sm font-bold text-slate-900">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Action for this region */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenCallback(`${activeAreaData.region} Industrial Hubs`)}
                    className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm shadow-md transition-colors cursor-pointer"
                  >
                    Request Patrolling in {activeAreaData.region}
                  </button>

                  <a
                    href={`tel:${activeAreaData.contactNumber.replace(/\s+/g, "")}`}
                    className="px-5 py-3 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-900 font-bold text-sm transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-orange-500" />
                    <span>Helpline: {activeAreaData.contactNumber}</span>
                  </a>
                </div>
              </div>

              {/* Territory Specification Card (5 cols) */}
              <div className="lg:col-span-5">
                <div className="bg-blue-950 text-white rounded-2xl p-6 sm:p-8 border border-blue-900 shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-blue-900 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-mono font-bold text-slate-300 uppercase">
                        PATROL MONITOR • {activeAreaData.region}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-amber-400 font-bold">
                      24×7 Active
                    </span>
                  </div>

                  {/* Node Grid */}
                  <div className="space-y-3 py-2">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Patrolling Hours</span>
                      <span className="text-xs font-bold text-white font-mono">10:00 PM – 06:00 AM</span>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-900/60 border border-blue-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Nightly Audits</span>
                      <span className="text-xs font-bold text-white font-mono">5 to 6 Times per Night</span>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-900/60 border border-blue-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Verified Evidence</span>
                      <span className="text-xs font-bold text-emerald-400 font-mono">WhatsApp  Photos/Videos</span>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-900/60 border border-blue-800 flex items-center justify-between">
                      <span className="text-xs text-slate-400">Emergency QRT Target</span>
                      <span className="text-xs font-bold text-orange-400 font-mono">2 to 4 Min Target</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-blue-900 text-center">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Contact {activeAreaData.region} Team on WhatsApp →</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION: Industrial Area Security & Fire Safety Force Note */}
          <div className="bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-16 border border-slate-800">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/80 text-red-400 border border-red-800/60 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-red-500" />
                Fire & Safety Management
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-heading">
                Our Security Deployment for Industrial Areas
              </h2>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                "{COMPANY_DATA.industrialTeamNote}"
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-slate-300 font-semibold">
                  ✓ Internal / External Theft Prevention
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-slate-300 font-semibold">
                  ✓ Fire & Safety Certified Personnel
                </div>
                <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-slate-300 font-semibold">
                  ✓ Quick Reaction Team (QRT) Readiness
                </div>
              </div>
            </div>
          </div>

          {/* VISUAL PROCESS FLOW */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">
                Standardized Security Cycle
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1 font-heading">
                Operational Security Process
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                From active vehicular rounds to real-time digital proof, every step adheres to strict operational rigor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {COMPANY_DATA.processFlow.map((step, idx) => (
                <div
                  key={step.title}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col items-center text-center relative group hover:border-blue-900 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-950 flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                    {idx === 0 && <Compass className="w-6 h-6 text-blue-900" />}
                    {idx === 1 && <Eye className="w-6 h-6 text-blue-900" />}
                    {idx === 2 && <Search className="w-6 h-6 text-amber-700" />}
                    {idx === 3 && <ShieldAlert className="w-6 h-6 text-orange-500" />}
                    {idx === 4 && <Send className="w-6 h-6 text-emerald-600" />}
                  </div>

                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    STEP 0{idx + 1}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-950 mt-1">
                    {step.title}
                  </h3>
                  <div className="text-xs font-bold text-orange-500 mt-0.5">
                    {step.subtitle}
                  </div>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Call to Action on Areas Page */}
          <div className="text-center bg-slate-100 rounded-3xl p-8 sm:p-12 border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight font-heading">
              Is Your Industrial Facility Located in These Regions?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto mt-2 mb-6">
              We also expand customized night patrolling and security coordination to adjacent industrial clusters and residential townships across Madhya Pradesh, Delhi NCR, and Rajasthan.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onOpenCallback("Coverage Inquiry")}
                className="px-7 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-black text-sm sm:text-base shadow-md transition-colors cursor-pointer"
              >
                Inquire for Your Location
              </button>
              <a
                href={`tel:${COMPANY_DATA.contacts.headOffice.rawNumber}`}
                className="px-6 py-3.5 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-sm sm:text-base transition-colors"
              >
                Call Head Office
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
