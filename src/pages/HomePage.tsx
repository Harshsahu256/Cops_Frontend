import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Phone,
  MessageSquare,
  ArrowRight,
  Clock,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Truck,
  Users,
  Smartphone,
  ShieldAlert,
  ChevronRight,
  Building,
  Zap,
  Activity,
  Home
} from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";
import { HeroSlider } from "../components/HeroSlider";
import { TrustStats } from "../components/TrustStats";
import { RecognitionSection } from "../components/RecognitionSection";

interface HomePageProps {
  onOpenCallback: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenCallback }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.headOffice.whatsapp}?text=${encodeURIComponent(
    "Hello COPS NIGHT PATROLLING, I am inquiring about industrial and residential night patrolling and security services."
  )}`;

  // 8 Prominent Services for Home Page with their image and metadata
  const homeServices = COMPANY_DATA.services.slice(0, 8);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SLIDER SECTION */}
      <HeroSlider onOpenCallback={onOpenCallback} />

      {/* TRUST / HIGHLIGHT CARDS (2700+ Companies, 25+ Residential, 24x7 Emergency, 5-6 Night Checks) */}
      <TrustStats />

      {/* FEATURED SERVICES SECTION WITH IMAGES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                Comprehensive Security Solutions
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-1 font-heading">
                Our Core Services
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Specialized night patrolling, rigorous unscheduled physical inspections, rapid emergency reaction, and transparent WhatsApp reporting for industrial and residential premises.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-950 hover:text-orange-500 transition-colors"
            >
              <span>Explore All 12 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 8 Prominent Service Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeServices.map((service, idx) => (
              <div
                key={service.id}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Image with overlay & badge */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900/80 text-amber-300 border border-slate-700/80 backdrop-blur-xs">
                        {service.number}
                      </span>
                    </div>
                    {service.tag && (
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/60 text-slate-200 border border-white/10 backdrop-blur-xs">
                          {service.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-black text-slate-950 tracking-tight leading-snug group-hover:text-blue-950 transition-colors">
                      {service.title}
                    </h3>

                    {service.highlight && (
                      <p className="text-[11px] font-bold text-orange-500 mt-1">
                        ★ {service.highlight}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer link inside card */}
                <div className="px-5 pb-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-start">
                    <Link
                      to="/services"
                      className="text-xs font-bold text-blue-950 group-hover:text-orange-500 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Read Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW OUR SERVICE WORKS (5 Steps in English) */}
      <section className="py-16 sm:py-24 bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-blue-900/80 px-3 py-1 rounded-full border border-blue-800/60">
              Methodology & Protocols
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-3 font-heading">
              How Our Service Works
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
              A structured, transparent, and responsive security operating procedure safeguarding your industrial premises throughout the night.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {COMPANY_DATA.howItWorks.map((item) => (
              <div
                key={item.step}
                className="bg-blue-900/80 border border-blue-800/80 rounded-2xl p-5 hover:border-orange-400/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-orange-400 font-mono tracking-tight mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-base font-extrabold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-blue-100 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-blue-800/60 text-[11px] font-semibold text-blue-300">
                  Step {item.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION & ASSOCIATIONS SECTION */}
      <RecognitionSection />
    </div>
  );
};
