import React, { useState } from "react";
import {
  Moon,
  CheckCircle2,
  Smartphone,
  Eye,
  Truck,
  Users,
  Scale,
  Flame,
  Activity,
  AlertTriangle,
  Zap,
  Home,
  Clock,
  Phone,
  MessageSquare,
  ShieldAlert,
  ArrowRight,
  Filter,
  Check,
  Building
} from "lucide-react";
import { COMPANY_DATA, ServiceItem } from "../data/companyData";

interface ServicesPageProps {
  onOpenCallback: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenCallback }) => {
  const [activeFilter, setActiveFilter] = useState<"ALL" | "Patrolling" | "Emergency" | "Monitoring" | "Safety">("ALL");

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Moon":
        return <Moon className="w-5 h-5 text-blue-900" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-emerald-700" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-emerald-600" />;
      case "Eye":
        return <Eye className="w-5 h-5 text-indigo-900" />;
      case "Truck":
        return <Truck className="w-5 h-5 text-amber-700" />;
      case "Users":
        return <Users className="w-5 h-5 text-blue-900" />;
      case "Scale":
        return <Scale className="w-5 h-5 text-slate-800" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-orange-600" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-rose-600" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-orange-500" />;
      case "Home":
        return <Home className="w-5 h-5 text-blue-900" />;
      default:
        return <Clock className="w-5 h-5 text-blue-900" />;
    }
  };

  const filteredServices = activeFilter === "ALL"
    ? COMPANY_DATA.services
    : COMPANY_DATA.services.filter((svc) => svc.category === activeFilter);

  const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.headOffice.whatsapp}?text=${encodeURIComponent(
    "Hello COPS NIGHT PATROLLING, I would like to inquire about your 12 security and night patrolling services."
  )}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-blue-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2000&q=80"
            alt="Security Operations"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/90 text-orange-400 border border-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldAlert className="w-3.5 h-3.5 text-orange-400" />
              Complete Security Coverage
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-heading">
              Our Security & Patrolling Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              12 specialized operational layers engineered for manufacturing plants, industrial areas, warehouses, and residential sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Operating Hours & Emergency Hotline Banner */}
          <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-950 shrink-0">
                <Moon className="w-6 h-6 text-blue-900" />
              </div>
              <div>
                <h2 className="text-base font-extrabold text-slate-950">
                  Patrolling Hours: 10:00 PM to 6:00 AM Nightly
                </h2>
                <p className="text-xs text-slate-600">
                  For unforeseen emergencies, our 24×7 hotline and Quick Reaction Team (QRT) remain active round-the-clock.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${COMPANY_DATA.contacts.bhopalHelpline.rawNumber}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>24×7 Emergency Call</span>
              </a>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
            {[
              { id: "ALL", label: "All 12 Services" },
              { id: "Patrolling", label: "Night Patrolling" },
              { id: "Monitoring", label: "Monitoring & Reporting" },
              { id: "Emergency", label: "Emergency & QRT" },
              { id: "Safety", label: "Safety & Dispute Support" }
            ].map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? "bg-blue-950 text-white shadow-md"
                      : "bg-white text-slate-700 hover:bg-orange-50 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* 12 Service Cards with High Quality Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Service Photo with Badges */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
                    <img
                      src={svc.imageUrl}
                      alt={svc.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                    
                    {/* Number Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-900/90 text-amber-300 border border-slate-700 backdrop-blur-xs">
                        {svc.number}
                      </span>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/60 text-slate-200 border border-white/10 backdrop-blur-xs">
                        {svc.category}
                      </span>
                    </div>

                    {/* Bottom Title Overlay on Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white">
                      <div className="p-1.5 rounded-lg bg-black/50 border border-white/10 text-amber-400">
                        {getServiceIcon(svc.iconName)}
                      </div>
                      <span className="text-xs font-bold text-slate-200 truncate">
                        {svc.tag || "Security Service"}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-slate-950 tracking-tight leading-snug group-hover:text-blue-950 transition-colors">
                      {svc.title}
                    </h3>

                    {/* Highlight pill */}
                    {svc.highlight && (
                      <div className="inline-block mt-2 px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-[11px] font-bold text-amber-900">
                        ★ {svc.highlight}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenCallback(svc.title)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-950 hover:bg-blue-900 text-white text-xs font-bold transition-colors cursor-pointer"
                    >
                      <span>Inquire for this Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`tel:${COMPANY_DATA.contacts.bhopalHelpline.rawNumber}`}
                      className="p-2.5 rounded-xl bg-orange-50 text-orange-500 hover:bg-orange-100 border border-orange-200 transition-colors"
                      title="Call Helpline"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
