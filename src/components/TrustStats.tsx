import React from "react";
import { Building2, Home, ClockAlert, ShieldCheck, Info } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

export const TrustStats: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-8 h-8 text-blue-950" />,
    Home: <Home className="w-8 h-8 text-blue-950" />,
    ClockAlert: <ClockAlert className="w-8 h-8 text-orange-500" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-emerald-700" />
  };

  return (
    <section className="relative z-10 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {COMPANY_DATA.trustClaims.map((claim, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx !== 0 ? "pt-5 sm:pt-0 sm:pl-6 lg:pl-8" : ""
              }`}
            >
              <div className="mb-3 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                {iconMap[claim.icon] || <ShieldCheck className="w-8 h-8 text-blue-900" />}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight font-heading">
                {claim.metric}
              </div>
              <div className="text-base font-extrabold text-slate-800 mt-1">
                {claim.title}
              </div>
              <div className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                {claim.subtitle}
              </div>
            </div>
          ))}
        </div>

        {/* randomized inspections... */}
      </div>
    </section>
  );
};
