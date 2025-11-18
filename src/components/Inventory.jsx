function Inventory() {
  const cars = [
    { id: 1, name: '2023 Porsche 911 Carrera', price: '$249,800', spec: 'PDK • 3,500 km • White', img: 'https://images.unsplash.com/photo-1549921296-3b4a69a0aafb?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, name: '2022 BMW M4 Competition', price: '$169,900', spec: 'Auto • 9,200 km • Black', img: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, name: '2021 Mercedes-AMG G63', price: '$319,500', spec: 'Auto • 18,000 km • Grey', img: 'https://images.unsplash.com/photo-1619767886558-dc98c6845c7f?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, name: '2020 Audi R8 V10', price: '$279,000', spec: 'Auto • 12,400 km • Red', img: 'https://images.unsplash.com/photo-1619767886558-3e3f59b2f25f?q=80&w=1600&auto=format&fit=crop' },
  ];

  return (
    <section id="inventory" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white">Featured Inventory</h2>
            <p className="text-white/60 mt-2">Handpicked vehicles ready for immediate delivery.</p>
          </div>
          <a href="#" className="text-sm text-white/70 hover:text-white">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div key={car.id} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-lg hover:border-white/20 transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={car.img} alt={car.name} className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium leading-tight">{car.name}</h3>
                <p className="text-white/50 text-sm mt-1">{car.spec}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-white text-lg font-semibold">{car.price}</span>
                  <button className="text-sm px-3 py-1.5 rounded-lg bg-white/10 text-white/90 hover:bg-white/20 transition">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Inventory;
