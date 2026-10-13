

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MobileStickyBar } from "./components/MobileStickyBar";
import { CallbackModal } from "./components/CallbackModal";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AreasPage } from "./pages/AreasPage";
import { GalleryPage } from "./pages/GalleryPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminPage } from "./pages/AdminPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  const location = useLocation();
  // Check if current route is admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  const [isCallbackOpen, setIsCallbackOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedArea, setSelectedArea] = useState<string>("");

  const handleOpenCallback = (serviceName?: string, areaName?: string) => {
    setSelectedService(serviceName || "");
    setSelectedArea(areaName || "");
    setIsCallbackOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-red-600 selection:text-white font-sans">
      <ScrollToTop />

      {/* Website Navbar sirf non-admin pages par dikhega */}
      {!isAdminRoute && <Navbar onOpenCallback={() => handleOpenCallback()} />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenCallback={() => handleOpenCallback()} />} />
          <Route path="/about" element={<AboutPage onOpenCallback={() => handleOpenCallback()} />} />
          <Route
            path="/services"
            element={<ServicesPage onOpenCallback={(svc) => handleOpenCallback(svc)} />}
          />
          <Route
            path="/areas"
            element={<AreasPage onOpenCallback={(area) => handleOpenCallback("Industrial Area Patrolling", area)} />}
          />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* STANDALONE ADMIN ROUTE */}
          <Route path="/admin" element={<AdminPage />} />

          {/* Fallback to Home */}
          <Route path="*" element={<HomePage onOpenCallback={() => handleOpenCallback()} />} />
        </Routes>
      </main>

      {/* Footer & Mobile Sticky Bar sirf non-admin pages par dikhenge */}
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <MobileStickyBar onOpenCallback={() => handleOpenCallback()} />}

      <CallbackModal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
        defaultService={selectedService}
        defaultArea={selectedArea}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}