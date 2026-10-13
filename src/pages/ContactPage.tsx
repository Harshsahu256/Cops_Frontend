import React from "react";
import { Phone, Mail, MapPin, Clock, ShieldAlert } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";
import { ContactCards } from "../components/ContactCards";
import { CompanyLogo } from "../components/CompanyLogo";

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-blue-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=2000&q=80"
            alt="Contact COPS NIGHT PATROLLING"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/90 text-orange-400 border border-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldAlert className="w-3.5 h-3.5 text-orange-400" />
                24×7 Emergency & Operations Desk
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-heading">
                Contact Us
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Direct access to our Bhopal Head Office, Indore Regional Center, and 24×7 emergency hotlines for night patrol deployments and immediate security intervention.
              </p>
            </div>

            <div className="p-2 rounded-full bg-blue-900/90 border border-blue-800 shadow-2xl shrink-0 hidden sm:block">
              <CompanyLogo className="w-24 h-24 sm:w-28 sm:h-28 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactCards />
    </div>
  );
};
