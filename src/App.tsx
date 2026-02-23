import { useState, useEffect } from 'react';

function App() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sections = [
    { id: 'create', label: 'CREATE', description: 'Bringing ideas to life through code and design' },
    { id: 'explore', label: 'EXPLORE', description: 'Curious about everything, especially the edges' },
    { id: 'connect', label: 'CONNECT', description: 'Building meaningful digital experiences' },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-[#f5f0e8] overflow-hidden relative flex flex-col">
      {/* Noise texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] -top-48 -right-48 md:-top-64 md:-right-64 rounded-full transition-all duration-[2000ms] ${mounted ? 'opacity-30 scale-100' : 'opacity-0 scale-50'}`}
          style={{
            background: 'radial-gradient(circle, #ff6b4a 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
        <div
          className={`absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] -bottom-32 -left-32 md:-bottom-48 md:-left-48 rounded-full transition-all duration-[2500ms] delay-300 ${mounted ? 'opacity-20 scale-100' : 'opacity-0 scale-50'}`}
          style={{
            background: 'radial-gradient(circle, #4a9fff 0%, transparent 70%)',
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 md:px-8 md:py-12">
        {/* Identity card container */}
        <div
          className={`w-full max-w-4xl transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Top border accent */}
          <div className="h-1 md:h-2 bg-gradient-to-r from-[#ff6b4a] via-[#ff9a8b] to-[#ff6b4a] mb-4 md:mb-6" />

          {/* Card frame */}
          <div className="border-2 md:border-4 border-[#f5f0e8] p-4 md:p-8 lg:p-12 relative">
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-[#ff6b4a]" />
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-t-2 md:border-t-4 border-r-2 md:border-r-4 border-[#ff6b4a]" />
            <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 border-b-2 md:border-b-4 border-l-2 md:border-l-4 border-[#ff6b4a]" />
            <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-[#ff6b4a]" />

            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 mb-8 md:mb-12">
              <div>
                <p
                  className={`text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] text-[#888] mb-2 md:mb-3 font-mono transition-all duration-700 delay-200 ${mounted ? 'opacity-100' : 'opacity-0'}`}
                >
                  DIGITAL IDENTITY / 001
                </p>
                <h1
                  className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.85] transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ fontFamily: "'Clash Display', sans-serif" }}
                >
                  ME
                </h1>
                <div
                  className={`h-0.5 md:h-1 w-12 md:w-16 bg-[#ff6b4a] mt-3 md:mt-4 transition-all duration-700 delay-500 ${mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                  style={{ transformOrigin: 'left' }}
                />
              </div>

              {/* Floating orb visualization */}
              <div
                className={`relative w-24 h-24 md:w-32 md:h-32 transition-all duration-1000 delay-500 self-center md:self-auto ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #ff6b4a, #ff9a8b, #f5f0e8, #4a9fff, #ff6b4a)',
                    animation: 'spin 10s linear infinite',
                  }}
                />
                <div className="absolute inset-1 md:inset-2 rounded-full bg-[#1a1a1a]" />
                <div
                  className="absolute inset-3 md:inset-4 rounded-full"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #ff6b4a 0%, #1a1a1a 60%)',
                    animation: 'pulse 4s ease-in-out infinite',
                  }}
                />
              </div>
            </div>

            {/* Tagline */}
            <p
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 md:mb-12 max-w-xl leading-relaxed transition-all duration-700 delay-400 ${mounted ? 'opacity-100' : 'opacity-0'}`}
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              A digital presence exploring the intersection of
              <span className="text-[#ff6b4a] font-medium"> creativity</span> and
              <span className="text-[#4a9fff] font-medium"> technology</span>
            </p>

            {/* Interactive sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12">
              {sections.map((section, index) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                  className={`group relative p-4 md:p-6 border border-[#333] hover:border-[#ff6b4a] transition-all duration-500 text-left min-h-[100px] md:min-h-[120px] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${activeSection === section.id ? 'bg-[#ff6b4a]/10 border-[#ff6b4a]' : ''}`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <span
                    className="text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] block mb-2"
                    style={{ fontFamily: "'Clash Display', sans-serif" }}
                  >
                    {section.label}
                  </span>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${activeSection === section.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 md:max-h-20 md:opacity-70'}`}
                  >
                    <p
                      className="text-xs md:text-sm text-[#888] leading-relaxed"
                      style={{ fontFamily: "'Crimson Pro', serif" }}
                    >
                      {section.description}
                    </p>
                  </div>
                  <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#ff6b4a] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>

            {/* Status bar */}
            <div
              className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 md:pt-6 border-t border-[#333] transition-all duration-700 delay-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] md:text-xs tracking-widest text-[#888] font-mono">ONLINE</span>
              </div>
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-[10px] md:text-xs tracking-widest text-[#888] font-mono">v1.0.0</span>
                <span className="text-[10px] md:text-xs tracking-widest text-[#888] font-mono">{new Date().getFullYear()}</span>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="h-0.5 md:h-1 bg-gradient-to-r from-transparent via-[#333] to-transparent mt-4 md:mt-6" />
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-4 md:py-6 px-4">
        <p
          className="text-center text-[10px] md:text-xs text-[#555] tracking-wider"
          style={{ fontFamily: "'Crimson Pro', serif" }}
        >
          Requested by <span className="text-[#666]">@modzzdude</span> · Built by <span className="text-[#666]">@clonkbot</span>
        </p>
      </footer>

      {/* Global animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(20px, 10px) scale(1.02); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

export default App;
