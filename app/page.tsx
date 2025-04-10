export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#84a1ff] via-[#c599ff] to-[#a3e0ff] text-[#1a1a1a]">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] bg-[#c599ff] opacity-30 blur-3xl -top-20 -left-20 rounded-full" />
        <div className="absolute w-[600px] h-[600px] bg-[#84a1ff] opacity-30 blur-3xl -bottom-40 -right-40 rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 space-y-24 py-20">
        {/* Hero Section */}
        <section className="text-center max-w-2xl">
<h1 className="text-6xl font-light tracking-wide mb-6 font-[serif] text-white" style={{ textShadow: "0 0 15px rgba(255,255,255,0.9)" }}>
            MOSAIC
          </h1>
          <h2 className="text-2xl font-light tracking-wide mb-6">
            Redefine access to art for <span className="font-semibold">everyone</span>
          </h2>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/80 text-[#1a1a1a] placeholder:text-gray-500 px-6 py-3 rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-black transition-all"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-full hover:opacity-90 transition-all duration-300 font-medium"
            >
              Join the Waitlist
            </button>
          </form>
        </section>

        {/* How It Works */}
        <section className="w-full max-w-5xl">
          <h2 className="text-4xl font-semibold text-center mb-16">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-12 text-center">
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
              <div key={index} className="bg-white/70 text-[#1a1a1a] p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105">
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission + Vision */}
        <section className="text-center max-w-3xl bg-white/70 text-[#1a1a1a] p-12 rounded-2xl">
          <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
          <p className="mb-8 text-gray-800">
            Mosaic was created to make the beauty of visual art accessible to everyone. We believe that art should be experienced, not just seen—and that accessibility can be deeply creative.
          </p>
          <blockquote className="italic text-gray-600 bg-white/50 rounded-lg px-6 py-4">
            "I never thought I could experience a painting this way. It's like hearing a story that was once silent."
          </blockquote>
        </section>
      </div>
    </main>
  );
}