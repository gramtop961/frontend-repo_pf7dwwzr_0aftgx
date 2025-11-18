import { Phone, Mail, MapPin } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Book a test drive</h2>
          <p className="text-white/60 mt-2">Speak to our Sydney team for availability and tailored finance options.</p>

          <div className="mt-6 space-y-4 text-white/80 text-sm">
            <p className="flex items-center gap-2"><Phone size={16}/> 1300 LAVISH</p>
            <p className="flex items-center gap-2"><Mail size={16}/> sales@lavishcars.com.au</p>
            <p className="flex items-center gap-2"><MapPin size={16}/> 88 Bourke St, Sydney NSW</p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="text-2xl font-semibold text-white">4.9★</p>
              <p className="text-xs text-white/60 mt-1">Customer rating</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="text-2xl font-semibold text-white">24h</p>
              <p className="text-xs text-white/60 mt-1">Turnaround</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="text-2xl font-semibold text-white">10+</p>
              <p className="text-xs text-white/60 mt-1">Years in Sydney</p>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-white/70">Name</label>
              <input className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Alex" />
            </div>
            <div>
              <label className="text-xs text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="alex@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs text-white/70">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-xl bg-white/10 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="I’d like to enquire about the Porsche 911…" />
            </div>
          </div>
          <button type="button" className="mt-4 w-full rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-5 py-3 text-white font-medium shadow-[0_0_25px_rgba(244,63,94,0.35)] hover:shadow-[0_0_35px_rgba(244,63,94,0.5)] transition">
            Send enquiry
          </button>
          <p className="text-xs text-white/50 mt-3">By submitting you agree to our terms and privacy policy.</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
