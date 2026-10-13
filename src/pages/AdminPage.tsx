import React, { useState, useEffect } from "react";
import {
  Lock,
  Mail,
  Sliders,
  Image as ImageIcon,
  LayoutDashboard,
  LogOut,
  Trash2,
  Upload,
  ArrowRight,
  AlertCircle,
  ShieldCheck,
  CheckCircle2,
  X
} from "lucide-react";

export const AdminPage: React.FC = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("admin_token"));
  const [activeTab, setActiveTab] = useState<"dashboard" | "slider" | "gallery">("dashboard");

  // Login States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Data States
  const [sliders, setSliders] = useState<any[]>([]);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);
  const [uploadLoading, setUploadLoading] = useState(false);

  // File Upload + Live Preview States
  const [sliderFile, setSliderFile] = useState<File | null>(null);
  const [sliderPreview, setSliderPreview] = useState<string | null>(null);

  const [galleryFile, setGalleryFile] = useState<File | null>(null);
  const [galleryPreview, setGalleryPreview] = useState<string | null>(null);

  const [msg, setMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const loadData = async () => {
    try {
      const [sRes, gRes] = await Promise.all([
        fetch("/api/sliders"),
        fetch("/api/gallery")
      ]);
      const sData = await sRes.json();
      const gData = await gRes.json();
      if (sData.success) setSliders(sData.data);
      if (gData.success) setGalleryItems(gData.data);
    } catch (err) {
      console.error("Error loading data:", err);
    }
  };

  useEffect(() => {
    if (token) loadData();
  }, [token]);

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem("admin_token", data.token);
        setToken(data.token);
      } else {
        setLoginError(data.message || "Invalid email or password");
      }
    } catch {
      setLoginError("Backend server se connect nahi ho paya. Make sure backend is running.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken(null);
  };

  // Handle Slider File Change (Generate Preview)
  const handleSliderFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSliderFile(file);
      setSliderPreview(URL.createObjectURL(file));
    }
  };

  const clearSliderSelected = () => {
    setSliderFile(null);
    setSliderPreview(null);
  };

  // Upload Slider
  const handleUploadSlider = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!sliderFile) return alert("Pehle image select karein!");

    setUploadLoading(true);
    const formData = new FormData();
    formData.append("image", sliderFile);

    try {
      const res = await fetch("/api/sliders", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setMsg({ type: "success", text: "Slider image successfully upload ho gayi!" });
        clearSliderSelected();
        loadData();
      } else {
        setMsg({ type: "error", text: data.message });
      }
    } catch {
      setMsg({ type: "error", text: "Upload fail ho gaya. Dubara try karein." });
    } finally {
      setUploadLoading(false);
    }
  };

  const handleDeleteSlider = async (id: string) => {
    if (!confirm("Kya aap sach me ye slider image delete karna chahte hain?")) return;
    const res = await fetch(`/api/sliders/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.success) {
      setMsg({ type: "success", text: "Slider image deleted!" });
      loadData();
    }
  };

  // Handle Gallery File Change (Generate Preview)
  const handleGalleryFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setGalleryFile(file);
      setGalleryPreview(URL.createObjectURL(file));
    }
  };

  const clearGallerySelected = () => {
    setGalleryFile(null);
    setGalleryPreview(null);
  };

  // Upload Gallery
  const handleUploadGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryFile) return alert("Pehle image select karein!");

    setUploadLoading(true);
    const formData = new FormData();
    formData.append("image", galleryFile);
    formData.append("title", "Gallery Photo");

    try {
      const res = await fetch("/api/gallery", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setMsg({ type: "success", text: "Gallery photo successfully upload ho gayi!" });
        clearGallerySelected();
        loadData();
      } else {
        setMsg({ type: "error", text: data.message });
      }
    } catch {
      setMsg({ type: "error", text: "Upload fail ho gaya. Dubara try karein." });
    } finally {
      setUploadLoading(false);
    }
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm("Kya aap sach me ye photo delete karna chahte hain?")) return;
    const res = await fetch(`/api/gallery/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.success) {
      setMsg({ type: "success", text: "Gallery photo deleted!" });
      loadData();
    }
  };

  // ================= 1. LOGIN SCREEN (LIGHT THEME) =================
  if (!token) {
    return (
      <div className="fixed inset-0 bg-slate-100 flex items-center justify-center p-4 z-50">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-950 text-white rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-md">
              <ShieldCheck className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Admin Portal</h2>
            <p className="text-slate-500 text-xs mt-1 font-semibold uppercase tracking-wider">
              COPS NIGHT PATROLLING
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 mb-5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@cops.com"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-950 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3.5 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{loginLoading ? "Verifying..." : "Sign In to Admin"}</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // ================= 2. FULL-PAGE ADMIN DASHBOARD =================
  return (
    <div className="fixed inset-0 bg-slate-50 flex flex-col md:flex-row z-50 overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 bg-slate-950 text-white flex flex-col justify-between shrink-0 border-r border-slate-800">
        <div>
          {/* Header Brand */}
          <div className="p-6 border-b border-slate-800/80 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center font-black text-white text-base shadow-md">
              CP
            </div>
            <div>
              <h1 className="text-sm font-black tracking-wide leading-tight">COPS PATROLLING</h1>
              <p className="text-[10px] text-orange-400 uppercase tracking-widest font-bold">Admin Panel</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-2">
            {/* 1. Dashboard */}
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "dashboard"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            {/* 2. Slider Images */}
            <button
              onClick={() => setActiveTab("slider")}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "slider"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Sliders className="w-4 h-4" />
                <span>Slider Images</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                {sliders.length}
              </span>
            </button>

            {/* 3. Gallery Images */}
            <button
              onClick={() => setActiveTab("gallery")}
              className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "gallery"
                  ? "bg-orange-500 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <ImageIcon className="w-4 h-4" />
                <span>Gallery Images</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300">
                {galleryItems.length}
              </span>
            </button>
          </nav>
        </div>

        {/* HIGHLIGHTED LOGOUT BUTTON (PROMINENT RED) */}
        <div className="p-4 border-t border-slate-800/80 bg-slate-950/60">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs tracking-wider uppercase shadow-md hover:shadow-red-600/30 transition-all cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Account</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {/* Alerts */}
        {msg && (
          <div
            className={`p-4 mb-6 rounded-2xl text-xs font-bold flex items-center justify-between shadow-xs ${
              msg.type === "success"
                ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <span>{msg.text}</span>
            <button onClick={() => setMsg(null)} className="cursor-pointer font-black text-sm">✕</button>
          </div>
        )}

        {/* ================= TAB 1: DASHBOARD ================= */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Dashboard Overview</h2>
              <p className="text-slate-500 text-xs mt-1">Cards par click karke direct unke manager page par jayein.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Slider Card */}
              <div
                onClick={() => setActiveTab("slider")}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Top Slider Images</span>
                    <div className="w-11 h-11 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Sliders className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-slate-900 mt-4 font-mono">{sliders.length}</div>
                  <p className="text-xs text-slate-500 mt-2">Homepage hero background par auto-slide hoti hain.</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  <span>Manage Slider Images</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Gallery Card */}
              <div
                onClick={() => setActiveTab("gallery")}
                className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-900 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Gallery Images</span>
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-4xl font-black text-blue-950 mt-4 font-mono">{galleryItems.length}</div>
                  <p className="text-xs text-slate-500 mt-2">Gallery page aur Homepage ke 4 cards par display hoti hain.</p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:translate-x-1 transition-transform">
                  <span>Manage Gallery Images</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: SLIDER (WITH THUMBNAIL PREVIEW) ================= */}
        {activeTab === "slider" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">Homepage Top Slider</h2>
              <p className="text-slate-500 text-xs mt-1">Nayi image select karke upload karein.</p>
            </div>

            {/* Upload Box with Preview */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                Upload New Slide
              </h3>

              <form onSubmit={handleUploadSlider} className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleSliderFileChange}
                    className="w-full sm:flex-1 text-xs text-slate-500 file:mr-4 file:py-3 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-orange-50 file:text-orange-600 hover:file:bg-orange-100 cursor-pointer"
                  />

                  {sliderFile && (
                    <button
                      type="submit"
                      disabled={uploadLoading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                      <span>{uploadLoading ? "Uploading..." : "Click to Upload"}</span>
                    </button>
                  )}
                </div>

                {/* THUMBNAIL PREVIEW WHEN SELECTED */}
                {sliderPreview && (
                  <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-12 rounded-lg overflow-hidden border border-orange-300 bg-white shrink-0">
                        <img src={sliderPreview} alt="Selected preview" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Image Selected & Ready!</span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate max-w-xs">{sliderFile?.name}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={clearSliderSelected}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-white transition-colors cursor-pointer"
                      title="Cancel Selection"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Active Slides */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                Active Slides ({sliders.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {sliders.map((s) => (
                  <div key={s._id} className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200 aspect-[16/10]">
                    <img src={s.imageUrl} alt="Slider" className="w-full h-full object-cover" />
                    <button
                      onClick={() => handleDeleteSlider(s._id)}
                      className="absolute top-3 right-3 p-2 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
                      title="Delete Slide"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {sliders.length === 0 && (
                  <p className="text-xs text-slate-400 py-10 col-span-3 text-center">Koi custom slide nahi hai.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: GALLERY (WITH THUMBNAIL PREVIEW) ================= */}
        {activeTab === "gallery" && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Gallery Images</h2>
                <p className="text-slate-500 text-xs mt-1">Sirf image select karein aur upload karein.</p>
              </div>
              <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-800 w-fit">
                ★ Pehli 4 images Homepage par bhi dikhengi
              </span>
            </div>

            {/* Upload Box with Preview */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                Upload New Photo
              </h3>

              <form onSubmit={handleUploadGallery} className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleGalleryFileChange}
                    className="w-full sm:flex-1 text-xs text-slate-500 file:mr-4 file:py-3 file:px-5 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-blue-50 file:text-blue-900 hover:file:bg-blue-100 cursor-pointer"
                  />

                  {galleryFile && (
                    <button
                      type="submit"
                      disabled={uploadLoading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                      <span>{uploadLoading ? "Uploading..." : "Click to Upload"}</span>
                    </button>
                  )}
                </div>

                {/* THUMBNAIL PREVIEW WHEN SELECTED */}
                {galleryPreview && (
                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-12 rounded-lg overflow-hidden border border-blue-300 bg-white shrink-0">
                        <img src={galleryPreview} alt="Selected preview" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Photo Selected & Ready!</span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate max-w-xs">{galleryFile?.name}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={clearGallerySelected}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-white transition-colors cursor-pointer"
                      title="Cancel Selection"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </form>
            </div>

            {/* Active Gallery Photos */}
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
                Current Gallery Photos ({galleryItems.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {galleryItems.map((item, idx) => (
                  <div key={item._id} className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200 aspect-[4/3]">
                    <img src={item.imageUrl} alt="Gallery" className="w-full h-full object-cover" />
                    {idx < 4 && (
                      <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-black px-2.5 py-1 rounded-lg shadow-md">
                        Homepage #{idx + 1}
                      </span>
                    )}
                    <button
                      onClick={() => handleDeleteGallery(item._id)}
                      className="absolute top-3 right-3 p-2 bg-red-600 text-white rounded-xl shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
                      title="Delete Image"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                {galleryItems.length === 0 && (
                  <p className="text-xs text-slate-400 py-10 col-span-3 text-center">Koi gallery image nahi hai.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};