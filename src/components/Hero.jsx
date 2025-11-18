import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative pt-28">{/* account for fixed navbar */}
      <div className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* dark gradient overlays for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 w-full grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
                Premium vehicles • Sydney
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
                Lavish Car Sales
              </h1>
              <p className="mt-4 text-base sm:text-lg md:text-xl text-white/70 max-w-xl">
                A curated collection of performance and luxury cars. Exceptional service, transparent pricing, and flawless presentation.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#inventory" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-5 py-3 text-white font-medium shadow-[0_0_25px_rgba(244,63,94,0.35)] hover:shadow-[0_0_35px_rgba(244,63,94,0.5)] transition">
                  Browse inventory
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 text-white/80 hover:text-white hover:border-white/40 transition">
                  Book a viewing
                </a>
              </div>
            </div>

            <div className="md:col-span-5 hidden md:block text-white/70">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-sm">Why Lavish?</p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex gap-2"><span className="text-white">•</span> Pre-sale 150-point inspection</li>
                  <li className="flex gap-2"><span className="text-white">•</span> Tailored financing options</li>
                  <li className="flex gap-2"><span className="text-white">•</span> Australia-wide delivery</li>
                  <li className="flex gap-2"><span className="text-white">•</span> Trade-ins welcomed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
