import { Menu, Phone, MapPin } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl">
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 ring-1 ring-white/20 shadow-lg" />
            <div className="leading-tight">
              <p className="text-white font-semibold tracking-tight">Lavish Car Sales</p>
              <p className="text-xs text-white/60 flex items-center gap-1"><MapPin size={14}/> Sydney</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#inventory" className="text-white/70 hover:text-white transition">Inventory</a>
            <a href="#financing" className="text-white/70 hover:text-white transition">Financing</a>
            <a href="#about" className="text-white/70 hover:text-white transition">About</a>
            <a href="#contact" className="text-white/70 hover:text-white transition">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-500 to-rose-600 text-white px-4 py-2 text-sm font-medium shadow-[0_0_25px_rgba(244,63,94,0.35)] hover:shadow-[0_0_35px_rgba(244,63,94,0.5)] transition">
              <Phone size={16}/> Book a test drive
            </a>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/15 text-white/80 hover:text-white hover:border-white/30 transition">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
