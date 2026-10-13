import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Building,
  UserCheck,
  ShieldCheck,
  ArrowRight,
  MessageSquare,
  Compass,
  Eye,
  Target,
  Flame,
  Award,
  ClockAlert,
  Briefcase
} from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";
import { RecognitionSection } from "../components/RecognitionSection";
import { TrustStats } from "../components/TrustStats";
import { CompanyLogo } from "../components/CompanyLogo";

interface AboutPageProps {
  onOpenCallback: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenCallback }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.headOffice.whatsapp}?text=${encodeURIComponent(
    "Hello COPS NIGHT PATROLLING, I would like to inquire about your company profile, directors, and night patrolling services."
  )}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-blue-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=2000&q=80"
            alt="About COPS NIGHT PATROLLING"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/90 text-amber-400 border border-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                Corporate Identity & Leadership
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-heading">
                About COPS NIGHT PATROLLING
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                India's dedicated security patrolling enterprise providing continuous nocturnal vigilance, unscheduled factory audits, certified Fire & Safety assistance, and verified digital reporting.
              </p>
            </div>

            <div className="p-2 rounded-full bg-blue-900/90 border border-blue-800 shadow-2xl shrink-0 hidden sm:block">
              <CompanyLogo className="w-24 h-24 sm:w-28 sm:h-28 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: DETAILED ABOUT SECTION */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                Vigilant Night Security Force
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-heading leading-tight">
                Specialized Night Patrolling & Security Assistance for Industrial and Residential Sectors
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                COPS NIGHT PATROLLING was founded to resolve a critical security vulnerability: ordinary static guards are often isolated or unmonitored during high-risk nocturnal hours. Our team provides active, synchronized mobile patrolling and instant crisis intervention between 10:00 PM and 6:00 AM.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Operating across premier industrial hubs such as Sanwer Road, Pologround, Readymade Complex, Palda, and Bardari in Indore, Govindpura Industrial Area in Bhopal, as well as Mundka in Delhi and Bhiwadi/Khushkhera in Rajasthan, we safeguard over 2,700 companies and 25+ residential societies.
              </p>

              {/* Core Operational Capabilities List */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-700 space-y-3.5">
                <div className="font-extrabold text-slate-950 text-base flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                  <span>Our Standardized Operational Pillars:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                    <span><strong>10:00 PM to 6:00 AM:</strong> Uninterrupted nocturnal vehicular and foot patrols.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                    <span><strong>5–6 Random Audits:</strong> Unscheduled night checks of gates, perimeters, and guards.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                    <span><strong>Verified Proof:</strong> Time-stamped photo and video evidence delivered twice nightly via WhatsApp.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-2" />
                    <span><strong>Emergency QRT:</strong> Rapid dispatch readiness with a 2 to 4 minute target response.</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenCallback}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
                >
                  <span>Request Patrolling Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>

            {/* Right Side Visual Overview (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-950 aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80"
                    alt="Industrial Night Security"
                    className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Overlay Floating Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-blue-950/90 backdrop-blur-md border border-blue-800 text-white text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-orange-400">COPS NIGHT PATROLLING DEPLOYMENT</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">24×7 ACTIVE</span>
                    </div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">
                      Equipped with patrol vehicles, high-beam searchlights, communication gear, and Fire & Safety first-response extinguishers.
                    </p>
                  </div>
                </div>

                {/* Accent stats tag */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-center">
                    <div className="text-2xl font-black text-slate-950 font-heading">2,700+</div>
                    <div className="text-xs font-bold text-slate-600 mt-0.5">Companies Secured</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-center">
                    <div className="text-2xl font-black text-orange-500 font-heading">10 PM – 6 AM</div>
                    <div className="text-xs font-bold text-slate-600 mt-0.5">Active Night Shift</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MISSION AND VISION */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-50 text-blue-950 text-xs font-bold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5 text-orange-500" />
              Purpose & Direction
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-heading">
              Our Mission & Vision
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Guiding every night patrol, emergency dispatch, and client interaction with clear principles of vigilance and integrity.
            </p>
          </div>

          {/* 2 Big Cards: Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
            {/* Our Mission */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500" />
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 border border-orange-100 flex items-center justify-center font-bold">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block">
                      Core Purpose
                    </span>
                    <h3 className="text-2xl font-black text-slate-950 font-heading">
                      {COMPANY_DATA.missionVision.mission.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 text-base leading-relaxed font-medium mb-6">
                  {COMPANY_DATA.missionVision.mission.statement}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Action Commitments:
                  </span>
                  {COMPANY_DATA.missionVision.mission.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Vision */}
            <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-900 to-indigo-600" />
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-900 border border-blue-100 flex items-center justify-center font-bold">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-900 uppercase tracking-widest block">
                      Long-Term Horizon
                    </span>
                    <h3 className="text-2xl font-black text-slate-950 font-heading">
                      {COMPANY_DATA.missionVision.vision.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-700 text-base leading-relaxed font-medium mb-6">
                  {COMPANY_DATA.missionVision.vision.statement}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Strategic Focus Areas:
                  </span>
                  {COMPANY_DATA.missionVision.vision.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Values 4-Grid */}
          <div className="bg-blue-950 text-white rounded-3xl p-6 sm:p-10 border border-blue-900 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                Operating Discipline
              </span>
              <h3 className="text-2xl font-black text-white mt-1 font-heading">
                Core Operating Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {COMPANY_DATA.missionVision.coreValues.map((val) => (
                <div
                  key={val.name}
                  className="bg-blue-900/80 rounded-2xl p-5 border border-blue-800 flex flex-col justify-between hover:border-blue-700 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-900 text-orange-400 flex items-center justify-center font-bold mb-3">
                      {val.icon === "ClockAlert" && <ClockAlert className="w-5 h-5" />}
                      {val.icon === "CheckCircle2" && <CheckCircle className="w-5 h-5" />}
                      {val.icon === "ShieldAlert" && <Shield className="w-5 h-5" />}
                      {val.icon === "Flame" && <Flame className="w-5 h-5 text-red-500" />}
                    </div>
                    <h4 className="text-base font-extrabold text-white mb-2">
                      {val.name}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DIRECTORS & LEADERSHIP (WITH PHOTOS AND NAMES) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 text-xs font-bold uppercase tracking-wider mb-3">
              <UserCheck className="w-3.5 h-3.5 text-amber-800" />
              Leadership & Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-heading">
              Directors & Executive Leadership
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Meet the management leadership overseeing our operational command, industry compliance, nocturnal patrolling schedules, and emergency response infrastructure.
            </p>
          </div>

          {/* Directors Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {COMPANY_DATA.directors.map((dir) => (
              <div
                key={dir.id}
                className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top: Photo & Basic Details */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
                    {/* Portrait Photo */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-md border-2 border-slate-300 shrink-0 bg-slate-200 relative">
                      <img
                        src={dir.photoUrl}
                        alt={dir.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    </div>

                    {/* Name, Designation & Badges */}
                    <div className="text-center sm:text-left space-y-1.5">
                      <span className="inline-block px-2.5 py-1 rounded text-[11px] font-extrabold bg-blue-50 text-blue-950 uppercase tracking-wider">
                        {dir.designation}
                      </span>
                      <h3 className="text-2xl font-black text-slate-950 font-heading">
                        {dir.name}
                      </h3>
                      <div className="text-xs font-bold text-slate-600">
                        {dir.role}
                      </div>

                      {/* Direct Phone / Contact Badge */}
                      <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
                        <a
                          href={`tel:${dir.rawPhone}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-950 text-white text-xs font-bold hover:bg-orange-500 transition-colors"
                        >
                          <Phone className="w-3 h-3 text-amber-400" />
                          <span>{dir.phone}</span>
                        </a>

                        <a
                          href={`https://wa.me/${dir.whatsapp}?text=${encodeURIComponent(`Hello ${dir.name}, I am contacting you regarding COPS NIGHT PATROLLING services.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-700 leading-relaxed font-normal mb-5 pt-3 border-t border-slate-200">
                    {dir.bio}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="space-y-2 mb-4 bg-white p-4 rounded-xl border border-slate-200">
                    <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block">
                      Key Governance & Focus Areas:
                    </span>
                    {dir.keyResponsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-800 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Email Footer */}
                {dir.email && (
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold">Official Inquiries:</span>
                    <a href={`mailto:${dir.email}`} className="font-bold text-blue-900 hover:underline">
                      {dir.email}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognitions Section */}
      <RecognitionSection />

      {/* Official Office Centers */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
              Corporate Centers
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1 font-heading">
              Official Offices & Administrative Hubs
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Official registered offices in Bhopal and Indore for direct contract administration, billing, and patrolling coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* HEAD OFFICE BHOPAL */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-950 text-xs font-extrabold uppercase">
                  <Building className="w-3.5 h-3.5 text-blue-800" />
                  HEAD OFFICE
                </div>
                <h3 className="text-xl font-extrabold text-slate-950 font-heading">
                  Bhopal Administrative Office
                </h3>
                <div className="text-sm text-slate-700 leading-relaxed space-y-1">
                  <p className="font-semibold text-slate-900">
                    {COMPANY_DATA.offices.headOffice.addressLine1}
                  </p>
                  <p>{COMPANY_DATA.offices.headOffice.addressLine2}</p>
                  <p className="font-mono text-xs text-slate-600">
                    {COMPANY_DATA.offices.headOffice.statePin}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Head Office:</span>
                  <a
                    href={`tel:${COMPANY_DATA.contacts.headOffice.rawNumber}`}
                    className="font-extrabold text-slate-950 hover:text-orange-500"
                  >
                    {COMPANY_DATA.contacts.headOffice.number}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Bhopal Helpline:</span>
                  <a
                    href={`tel:${COMPANY_DATA.contacts.bhopalHelpline.rawNumber}`}
                    className="font-extrabold text-orange-500 hover:text-orange-600"
                  >
                    {COMPANY_DATA.contacts.bhopalHelpline.number}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Email:</span>
                  <a
                    href={`mailto:${COMPANY_DATA.email}`}
                    className="font-semibold text-blue-900 hover:underline text-xs"
                  >
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* INDORE OFFICE */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-extrabold uppercase">
                  <Building className="w-3.5 h-3.5 text-amber-800" />
                  INDORE OFFICE
                </div>
                <h3 className="text-xl font-extrabold text-slate-950 font-heading">
                  Indore Regional Office
                </h3>
                <div className="text-sm text-slate-700 leading-relaxed space-y-1">
                  <p className="font-semibold text-slate-900">
                    {COMPANY_DATA.offices.indoreOffice.addressLine1}
                  </p>
                  <p>{COMPANY_DATA.offices.indoreOffice.addressLine2}</p>
                  <p className="font-mono text-xs text-slate-600">
                    {COMPANY_DATA.offices.indoreOffice.statePin}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Indore Helpline:</span>
                  <a
                    href={`tel:${COMPANY_DATA.contacts.indoreHelpline.rawNumber}`}
                    className="font-extrabold text-orange-500 hover:text-orange-600"
                  >
                    {COMPANY_DATA.contacts.indoreHelpline.number}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Operations Manager:</span>
                  <a
                    href={`tel:${COMPANY_DATA.contacts.manager.rawNumber}`}
                    className="font-extrabold text-slate-950 hover:text-blue-900"
                  >
                    {COMPANY_DATA.contacts.manager.number}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 font-bold">Email:</span>
                  <a
                    href={`mailto:${COMPANY_DATA.email}`}
                    className="font-semibold text-blue-900 hover:underline text-xs"
                  >
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
