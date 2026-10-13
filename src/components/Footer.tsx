


import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";
import { CompanyLogo } from "./CompanyLogo";

export const Footer: React.FC = () => {
  const location = useLocation();
  
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.headOffice.whatsapp}?text=${encodeURIComponent(
    "Hello COPS NIGHT PATROLLING, I am inquiring about industrial and residential security and night patrolling services."
  )}`;

  return (
    <footer className="bg-blue-950 text-slate-300 pt-14 pb-24 sm:pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-blue-900/80">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative p-0.5 rounded-full bg-blue-900 border border-blue-800 shadow-md">
                <CompanyLogo className="w-12 h-12 rounded-full" />
              </div>
              <div>
                <h4 className="text-xl font-extrabold text-white tracking-tight font-heading">
                  {COMPANY_DATA.name}
                </h4>
                <p className="text-xs text-amber-400 font-semibold tracking-wide">
                  {COMPANY_DATA.subTagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {COMPANY_DATA.heroSupportingText}
            </p>

            <div className="p-3.5 rounded-xl bg-blue-900/60 border border-blue-800 text-xs text-slate-400 space-y-1.5">
              <div className="text-white font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                Recognitions & Associations
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Recognized by MP Government, AIMP Association Indore, GIA Association Bhopal, and Fire & Safety Management.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-blue-900 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/areas" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
                  Service Areas
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Helplines & Officers (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-blue-900 pb-2">
              Official Helplines
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {/* Head Office */}
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase">
                    Head Office
                  </div>
                  <a
                    href="tel:9376000204"
                    className="text-white hover:text-amber-400 font-semibold"
                  >
                    9376000204
                  </a>
                </div>
              </li>

              {/* Helpline */}
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase">
                    Helpline Number
                  </div>
                  <div className="text-white font-semibold flex flex-col">
                    <a href="tel:9376000205" className="hover:text-amber-400">
                      9376000205
                    </a>
                    <a href="tel:9376000206" className="hover:text-amber-400">
                      9376000206
                    </a>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase">Email Address</div>
                  <a href={`mailto:${COMPANY_DATA.email}`} className="text-white hover:text-amber-400 break-all text-xs">
                    {COMPANY_DATA.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Office Addresses (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-blue-900 pb-2">
              Office Locations
            </h4>

            {/* Single Office Address (hardcoded) */}
            <div className="p-3 rounded-xl bg-blue-900/60 border border-blue-800 text-xs space-y-1">
              <div className="flex items-center gap-1.5 text-orange-400 font-extrabold uppercase">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                Head Office
              </div>
              <p className="text-slate-300 leading-relaxed">
                Shop No. 020-SunSquare Shopping Plaza, RIICO Chowk, Bhiwadi Distt. Khairthal-Tijara, Rajasthan - 301019
              </p>
            </div>

            {/* WhatsApp button in footer */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_DATA.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Operating Hours: 10:00 PM – 6:00 AM Night Patrol</span>
            <span>•</span>
            <span className="text-emerald-500 font-semibold">24×7 Emergency QRT Response</span>
          </div>
        </div>
      </div>
    </footer>
  );
};