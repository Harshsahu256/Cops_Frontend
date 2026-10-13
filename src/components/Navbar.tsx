import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Shield,
  Phone,
  MessageSquare,
  Menu,
  X,
  Clock,
  ChevronRight,
  AlertTriangle,
  Building
} from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";
import { CompanyLogo } from "./CompanyLogo";

interface NavbarProps {
  onOpenCallback?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCallback }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Service Areas", path: "/areas" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" }
  ];


  const WHATSAPP_NUMBER = "+919376000204";

  // const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.headOffice.whatsapp}?text=${encodeURIComponent(
  //   "Hello COPS NIGHT PATROLLING, I am inquiring about industrial and residential security and night patrolling services."
  // )}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello COPS NIGHT PATROLLING, I am inquiring about industrial and residential security and night patrolling services."
  )}`;

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-xs border-b border-slate-200">
      {/* Top Emergency & Quick Contact Bar */}
      <div className="bg-blue-950 text-slate-200 text-xs py-2 px-4 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Emergency Alert Tag */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-orange-500/90 text-white font-semibold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              24×7 EMERGENCY RESPONSE
            </span>
            <span className="hidden sm:inline text-slate-300 font-medium">
              Active Night Patrolling from 10:00 PM to 6:00 AM
            </span>
          </div>

          {/* Direct Helplines */}
          <div className="flex items-center flex-wrap gap-3 sm:gap-5 text-slate-300">
            <a
              href={`tel:${COMPANY_DATA.contacts.bhopalHelpline.rawNumber}`}
              className="hover:text-orange-400 transition-colors flex items-center gap-1 font-medium"
              title="Bhopal Helpline"
            >
              {/* <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">BHOPAL:</span> */}
              {/* <span className="text-white font-semibold">{COMPANY_DATA.contacts.bhopalHelpline.number}</span> */}
            </a>

            <span className="text-slate-700 hidden sm:inline">|</span>

            {/* <a
              href={`tel:${COMPANY_DATA.contacts.indoreHelpline.rawNumber}`}
              className="hover:text-orange-400 transition-colors flex items-center gap-1 font-medium"
              title="Indore Helpline"
            >
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">INDORE:</span>
              <span className="text-white font-semibold">{COMPANY_DATA.contacts.indoreHelpline.number}</span>
            </a> */}

            <span className="text-slate-700 hidden md:inline">|</span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-200 ${isScrolled ? "py-2.5 shadow-md bg-white/98 backdrop-blur-md" : "py-3 bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
              to="/"
            className="flex items-center gap-3 group text-left"
            aria-label="COPS NIGHT PATROLLING Home"
          >
            <div className="relative p-0.5 rounded-full bg-slate-900 border border-slate-700 shadow-md group-hover:scale-105 transition-transform">
              <CompanyLogo className="w-12 h-12 sm:w-14 sm:h-14 rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl md:text-2xl text-slate-950 tracking-tight font-heading group-hover:text-blue-950 transition-colors">
                  {COMPANY_DATA.name}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-600 font-medium tracking-wide line-clamp-1">
                {COMPANY_DATA.subTagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 font-medium text-slate-700 text-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-md transition-all duration-150 relative ${
                    isActive
                      ? "text-blue-950 font-bold bg-orange-50"
                      : "text-slate-700 hover:text-blue-950 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons Header Right */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${COMPANY_DATA.contacts.headOffice.rawNumber}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-blue-950 text-white hover:bg-blue-900 transition-colors text-sm font-semibold shadow-xs"
              title="Call Head Office"
            >
              <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{COMPANY_DATA.contacts.headOffice.number}</span>
            </a>

            <button
              onClick={onOpenCallback}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white transition-colors text-sm font-bold shadow-xs cursor-pointer"
            >
              <span>Service Inquiry</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_DATA.contacts.bhopalHelpline.rawNumber}`}
              className="p-2 rounded-lg bg-orange-50 text-orange-600 border border-orange-200"
              aria-label="Call Helpline"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-2 pb-6 animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-blue-950 text-white"
                      : "text-slate-800 hover:bg-orange-50"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-400"}`} />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Helplines Block */}
          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Direct Helplines (Click to Call)
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${COMPANY_DATA.contacts.bhopalHelpline.rawNumber}`}
                className="flex items-center gap-1.5 p-2.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-[10px] text-slate-500 font-bold">BHOPAL</div>
                  <div className="truncate">{COMPANY_DATA.contacts.bhopalHelpline.number}</div>
                </div>
              </a>

              <a
                href={`tel:${COMPANY_DATA.contacts.indoreHelpline.rawNumber}`}
                className="flex items-center gap-1.5 p-2.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <div className="overflow-hidden">
                  <div className="text-[10px] text-slate-500 font-bold">INDORE</div>
                  <div className="truncate">{COMPANY_DATA.contacts.indoreHelpline.number}</div>
                </div>
              </a>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-md bg-emerald-600 text-white font-bold text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCallback?.();
                }}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-md bg-orange-500 text-white font-bold text-xs cursor-pointer"
              >
                <span>Request Callback</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
