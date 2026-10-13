
import React, { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

export const GalleryPage: React.FC = () => {
  const [items, setItems] = useState<any[]>(COMPANY_DATA.galleryItems);

  useEffect(() => {
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data && data.data.length > 0) {
          setItems(data.data);
        }
      })
      .catch((err) => console.log("Using default gallery fallback:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2000&q=80"
            alt="Security Patrol Gallery Banner"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/90 text-amber-400 border border-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            Field Evidence & Visual Archives
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white font-heading">
            Operational Gallery
          </h1>
        </div>
      </section>

      {/* Clean Photo Grid (Sirf Images, No Descriptions) */}
      <section className="py-12 sm:py-16 bg-white flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={item._id || item.id || index}
                className="group relative bg-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all aspect-[4/3]"
              >
                <img
                  src={item.imageUrl}
                  alt="Gallery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {items.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              No photos currently available in the archive.
            </div>
          )}
        </div>
      </section>
    </div>
  );
};