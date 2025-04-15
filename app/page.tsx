export default function Home() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-white to-[#f8f9ff]">
      {/* Subtle gradient accents */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-[800px] h-[800px] bg-[#84a1ff] opacity-5 blur-[100px] -top-[400px] -right-[400px] rounded-full" />
        <div className="absolute w-[600px] h-[600px] bg-[#c599ff] opacity-5 blur-[80px] bottom-[-300px] left-[-200px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 space-y-32 py-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center max-w-2xl">
          <h1 className="text-6xl font-light mb-6 bg-gradient-to-r from-[#84a1ff] to-[#c599ff] inline-block text-transparent bg-clip-text">
            MOSAIC
          </h1>
          <h2 className="text-2xl font-light tracking-tight text-gray-600 mb-8">
            Redefine access to art for <span className="text-black font-medium">everyone</span>
          </h2>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-[#84a1ff] focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#84a1ff] to-[#c599ff] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
            >
              Join the Waitlist
            </button>
          </form>
        </section>

        {/* How It Works */}
        <section className="w-full max-w-5xl">
          <h2 className="text-3xl font-medium text-center mb-16 text-gray-900">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Upload or Snap a Photo",
                description: "Users select any artwork or image to begin the sound translation."
              },
              {
                title: "AI Breaks It Down",
                description: "Our AI analyzes visual layers, color, texture, and emotion."
              },
              {
                title: "Experience the Soundscape",
                description: "Mosaic generates a sound journey that is fully customizable."
              }
            ].map((item, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="w-full max-w-5xl">
          <h2 className="text-3xl font-medium text-center mb-16 text-gray-900">See Mosaic in Action</h2>
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/7l5wKt90rEo"
              title="Mosaic Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
        </section>

        {/* Mission + Vision */}
        <section className="text-center max-w-3xl bg-white border border-gray-100 p-12 rounded-xl shadow-sm">
          <h2 className="text-3xl font-medium mb-6 text-gray-900">Our Mission</h2>
          <p className="mb-8 text-gray-600 leading-relaxed">
            Mosaic was created to make the beauty of visual art accessible to everyone. We believe that art should be experienced, not just seen—and that accessibility can be deeply creative.
          </p>
          <blockquote className="italic text-gray-500 bg-gray-50 rounded-lg px-8 py-6 border-l-4 border-[#84a1ff]">
            &ldquo;I never thought I could experience a painting this way. It&rsquo;s like hearing a story that was once silent.&rdquo;
          </blockquote>
        </section>

        {/* Contact Form */}
        <section className="w-full max-w-2xl" id="contact">
          <h2 className="text-3xl font-medium text-center mb-16 text-gray-900">Contact Us</h2>
          <form 
            action="https://formspree.io/f/jiajial@stanford.edu"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84a1ff] focus:border-transparent text-black"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84a1ff] focus:border-transparent text-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#84a1ff] focus:border-transparent text-black"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#84a1ff] to-[#c599ff] text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-medium shadow-sm hover:shadow-md"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}