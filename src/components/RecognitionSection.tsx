

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Landmark, Award, Shield, Flame, CheckCircle, ArrowRight } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

export const RecognitionSection: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  // Fetch Gallery to get the first 4 images
  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data && data.data.length > 0) {
          setGalleryImages(data.data.slice(0, 4).map((item: any) => item.imageUrl));
        }
      })
      .catch((err) => console.log("Fallback to static images:", err));
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case "Landmark":
        return <Landmark className="w-7 h-7 text-blue-900" />;
      case "Award":
        return <Award className="w-7 h-7 text-amber-700" />;
      case "Shield":
        return <Shield className="w-7 h-7 text-indigo-900" />;
      case "Flame":
        return <Flame className="w-7 h-7 text-red-600" />;
      default:
        return <Award className="w-7 h-7 text-blue-900" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-blue-950 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle className="w-3.5 h-3.5 text-orange-500" />
            Official Recognitions & Industry Associations
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight font-heading">
            Authoritative Affiliations & Partnerships
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            COPS NIGHT PATROLLING operates in accordance with state regulations and industrial association benchmarks to deliver premier industrial and residential security.
          </p>
        </div>

        {/* 4 Cards: First 4 Gallery images automatically power these */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_DATA.recognitions.map((item, idx) => {
            const cardImg = galleryImages[idx] || "/gallry.png";

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all flex flex-col group"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={cardImg}
                    alt={`Recognition ${item.id} - ${item.text}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-[11px] font-bold text-orange-500 uppercase tracking-widest mb-1">
                    Recognition 0{item.id}
                  </div>
                  <h3 className="text-base font-black text-slate-950 leading-tight group-hover:text-blue-950 transition-colors">
                    {item.text}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95 group"
          >
            <span>View More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};