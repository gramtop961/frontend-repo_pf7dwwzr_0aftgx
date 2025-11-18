import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Inventory from './components/Inventory'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-rose-600/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Inventory />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Lavish Car Sales — Sydney</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-white/60 hover:text-white transition">About</a>
            <a href="#inventory" className="text-white/60 hover:text-white transition">Inventory</a>
            <a href="#contact" className="text-white/60 hover:text-white transition">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
