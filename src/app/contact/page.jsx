export default function Contact() {
    return (
      <main className="min-h-screen bg-[#f7f1e3] text-[#4b3b2b] font-serif p-8">
        <section className="text-center max-w-xl mx-auto py-16">
          <h1 className="text-4xl font-bold mb-4 text-[#5a6a4f]">Get in Touch</h1>
          <p className="mb-8">
            We’d love to hear from you! Fill out the form below and we’ll get back to you soon.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-[#3a5a40] rounded-lg p-3"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-[#3a5a40] rounded-lg p-3"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="border border-[#3a5a40] rounded-lg p-3"
              required
            />
            <button
              type="submit"
              className="bg-[#5a8a55] text-white font-bold py-3 rounded-lg hover:bg-[#3a5a40] transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    );
  }
  