import React from "react";
import { Phone, MessageSquare, ShieldAlert, PhoneCall } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

interface MobileStickyBarProps {
  onOpenCallback?: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenCallback }) => {
  const whatsappUrl = `https://wa.me/${COMPANY_DATA.contacts.headOffice.whatsapp}?text=${encodeURIComponent(
    "Hello COPS NIGHT PATROLLING, I am inquiring about industrial and residential night patrolling services."
  )}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-2 sm:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-1.5">
        {/* Call Helpline */}
        <a
          href={`tel:${COMPANY_DATA.contacts.bhopalHelpline.rawNumber}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-red-600 text-white font-black text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5 animate-pulse" />
          <span className="leading-tight">CALL HELPLINE</span>
        </a>

        {/* WhatsApp Direct */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white font-bold text-[11px] shadow-sm active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 mb-0.5" />
          <span className="leading-tight">WHATSAPP</span>
        </a>

        {/* Request Service */}
        <button
          onClick={onOpenCallback}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-800 border border-slate-700 text-amber-400 font-bold text-[11px] shadow-sm active:scale-95 transition-transform cursor-pointer"
        >
          <PhoneCall className="w-4 h-4 mb-0.5 text-amber-400" />
          <span className="leading-tight">INQUIRE</span>
        </button>
      </div>
    </div>
  );
};
