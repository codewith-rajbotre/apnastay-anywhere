"use client";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* 🔝 Navbar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          <h1 className="text-xl font-bold tracking-tight">
            ApnaStay
          </h1>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <span className="cursor-pointer hover:text-black">Explore</span>
            <span className="cursor-pointer hover:text-black">Bookings</span>
            <span className="cursor-pointer hover:text-black">Profile</span>
          </nav>

          <button 
          className="text-sm px-4 py-2 rounded-xl border border-border hover:bg-muted transition">
            Logout
          </button>
        </div>
      </header>


      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-neutral-900 to-neutral-700 text-white p-10 md:p-14 shadow-lg">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find your perfect stay
          </h2>

          <p className="text-sm md:text-base text-neutral-200 mb-8">
            Discover affordable and comfortable places across India.
          </p>

          {/* 🔍 Search Bar */}
          <div className="bg-white rounded-2xl p-3 flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Where are you going?"
              className="flex-1 h-12 px-4 rounded-xl border border-neutral-200 text-black outline-none"
            />
            <input
              type="date"
              className="h-12 px-4 rounded-xl border border-neutral-200 text-black"
            />
            <input
              type="date"
              className="h-12 px-4 rounded-xl border border-neutral-200 text-black"
            />
            <button className="h-12 px-6 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800">
              Search
            </button>
          </div>

        </div>
      </section>


      {/* ⭐ Featured Stays */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold mb-6">Featured Stays</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition"
            >
              <div className="h-48 bg-neutral-200" />

              <div className="p-4 space-y-2">
                <h4 className="font-semibold">Cozy Apartment</h4>
                <p className="text-sm text-muted-foreground">
                  Pune, Maharashtra
                </p>
                <p className="text-sm font-medium">₹1,200 / night</p>
              </div>
            </div>
          ))}

        </div>
      </section>


      {/* 🌍 Categories */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-semibold mb-6">Browse by Category</h3>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {["Apartments", "Villas", "Hostels", "Budget Rooms", "Luxury"].map(
            (cat) => (
              <div
                key={cat}
                className="px-6 py-3 rounded-full border border-border whitespace-nowrap text-sm font-medium hover:bg-muted cursor-pointer"
              >
                {cat}
              </div>
            )
          )}
        </div>
      </section>


      {/* 💡 Why Choose Us */}
      <section className="bg-muted py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-10 text-center">
            Why choose ApnaStay?
          </h3>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            
            <div>
              <h4 className="font-semibold mb-2">Affordable</h4>
              <p className="text-sm text-muted-foreground">
                Best prices for every budget.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Trusted</h4>
              <p className="text-sm text-muted-foreground">
                Verified listings and secure booking.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Flexible</h4>
              <p className="text-sm text-muted-foreground">
                Easy cancellations and support.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 📩 CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-14 text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Ready to explore?
        </h3>
        <p className="text-muted-foreground mb-6">
          Book your next stay with confidence.
        </p>

        <button className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-neutral-800">
          Get Started
        </button>
      </section>


      {/* 🔻 Footer */}
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} ApnaStay. All rights reserved.
      </footer>

    </div>
  );
}