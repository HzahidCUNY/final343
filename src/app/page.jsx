// app/page.jsx
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e3] text-[#4b3b2b] font-serif">
      {/* Final Exam Header */}
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Final Exam 343</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-1">Zahid, Hajran</h2>
        <h3 className="text-xl text-gray-600">Spring 2025</h3>
      </section>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#6b4c3b] to-[#3a5a40] text-[#f0e6d2] text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-2">Hajran's Stationery</h1>
        <p className="italic text-lg">Your favorite place for all things creative and professional</p>
      </header>

      {/* Navigation */}
      <nav className="bg-[#5a6a4f] text-center py-4">
        <a href="#products" className="mx-4 text-[#f0e6d2] font-semibold hover:text-[#d6c4a1]">Products</a>
        <a href="#about" className="mx-4 text-[#f0e6d2] font-semibold hover:text-[#d6c4a1]">About</a>
        <a href="#contact" className="mx-4 text-[#f0e6d2] font-semibold hover:text-[#d6c4a1]">Contact</a>
      </nav>

      {/* Products Section */}
      <section id="products" className="py-16 px-6 text-center">
        <h2 className="text-2xl text-[#5a6a4f] font-bold mb-10">Featured Products</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#f0e6d2] border-2 border-[#6b4c3b] rounded-xl p-6 shadow-md hover:-translate-y-1 transition">
            <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80" alt="Notebook" className="rounded-lg mb-4 w-full" />
            <h3 className="text-lg font-bold text-[#3a5a40]">Classic Notebook</h3>
            <p className="font-semibold text-[#6b4c3b]">$5.99</p>
          </div>
          <div className="bg-[#f0e6d2] border-2 border-[#6b4c3b] rounded-xl p-6 shadow-md hover:-translate-y-1 transition">
            <img src="https://www.ikea.com/us/en/images/products/mala-felt-tip-pen-mixed-colors__0710244_pe727426_s5.jpg?f=s" alt="Pens" className="rounded-lg mb-4 w-full" />
            <h3 className="text-lg font-bold text-[#3a5a40]">Colorful Pen Set</h3>
            <p className="font-semibold text-[#6b4c3b]">$3.49</p>
          </div>
          <div className="bg-[#f0e6d2] border-2 border-[#6b4c3b] rounded-xl p-6 shadow-md hover:-translate-y-1 transition">
            <img src="https://ubrands.com/cdn/shop/files/937fca07ad185c76e2c00ec4f758f8c69929a2e3_05d62ea8-512e-4ed4-8227-98955eb33846.jpg?v=1730130918&width=1946" alt="Markers" className="rounded-lg mb-4 w-full" />
            <h3 className="text-lg font-bold text-[#3a5a40]">Permanent Markers</h3>
            <p className="font-semibold text-[#6b4c3b]">$4.99</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="bg-[#e8dfd0] text-center rounded-xl mx-4 sm:mx-20 px-6 py-16 shadow-inner">
        <h2 className="text-xl text-[#5a6a4f] font-bold mb-4">About Us</h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
          At Hajran's Stationery, we believe that the right tools spark creativity.
          Whether you're taking notes, drawing, journaling, or just staying organized,
          we offer top-quality supplies to keep your ideas flowing.
        </p>
      </section>

      {/* Contact Us */}
      <section id="contact" className="text-center py-16 px-6">
        <h2 className="text-xl text-[#5a6a4f] font-bold mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Your Name" required className="border border-[#3a5a40] rounded-lg p-3" />
          <input type="email" placeholder="Your Email" required className="border border-[#3a5a40] rounded-lg p-3" />
          <textarea rows="5" placeholder="Your Message" required className="border border-[#3a5a40] rounded-lg p-3"></textarea>
          <button type="submit" className="bg-[#5a8a55] text-white font-bold py-3 rounded-lg hover:bg-[#3a5a40] transition">
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#6b4c3b] text-[#f0e6d2] text-center py-6 mt-8">
        <p>&copy; 2025 Hajran's Stationery. All rights reserved.</p>
      </footer>
    </main>
  );
}
