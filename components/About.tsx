'use client'

import { portfolioData } from '@/lib/data'
import { MapPin, GraduationCap, Users, Code2, ChevronRight } from 'lucide-react'
import { useInView } from '@/lib/useInView'

export default function About() {
  const { ref, inView } = useInView()

  const highlights = [
    { icon: <Code2 size={20} />, label: 'GitHub Repos', value: '150+', color: 'orange' },
    { icon: <Users size={20} />, label: 'Community Members Led', value: '2,500+', color: 'blue' },
    { icon: <GraduationCap size={20} />, label: 'Current SGPA', value: '9.45', color: 'orange' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Mumbai', color: 'blue' },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6" ref={ref as any}>
      <div className={`max-w-7xl mx-auto section-reveal ${inView ? 'visible' : ''}`}>
        <span className="section-number">01 / about</span>
        <h2 className="section-title mb-12">Who I Am</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: profile image + orbit */}
          <div className="relative flex items-center justify-center" style={{ height: 360 }}>
            {/* Morph blob background */}
            <div
              className="absolute w-64 h-64 rounded-full opacity-20"
              style={{
                background: 'linear-gradient(135deg, #f96216, #0ea5e9)',
                animation: 'morphBg 8s ease infinite',
                filter: 'blur(24px)',
              }}
            />

            {/* Profile image container */}
            <div
              className="relative w-48 h-48 rounded-full border-4 overflow-hidden flex items-center justify-center"
              style={{
                borderColor: 'var(--orange)',
                boxShadow: '0 0 40px rgba(249,98,22,0.3)',
              }}
            >
              <img 
                src="/images/Gyanankur.png" 
                alt="Gyanankur Profile" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Orbit badges */}
            {['Python', 'Power BI', 'Next.js', 'AI/ML','Latex','Advanced Excel'].map((label, i) => (
              <div
                key={label}
                className="absolute font-mono text-xs px-3 py-1 rounded-full border"
                style={{
                  background: 'var(--card)',
                  borderColor: 'var(--card-border)',
                  color: 'var(--text-muted)',
                  top: `${20 + i * 22}%`,
                  right: i % 2 === 0 ? '-5%' : undefined,
                  left: i % 2 !== 0 ? '-5%' : undefined,
                  animationDelay: `${i * 0.5}s`,
                }}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Right: bio + highlights */}
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              I am a Final Year Data Science student at Thakur Shyamnarayan Degree College, Mumbai. My academic foundation is built on a 9.45 SGPA, which I balance with real-world execution. As the lead at MetaMindset Labs and founder of Machine Learning Open Shelf, I focus on building functional AI solutions, data-driven dashboards, and scalable web applications. My work is centered on bridging the gap between raw data and actionable intelligence.

            </p>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              This portfolio is a transparent archive of my technical journey. It documents my progression across data analytics, Generative AI implementation, and full-stack development. Beyond coding, I am deeply involved in community leadership through DataFam Mumbai, where I contribute to research and social impact initiatives. My goal is to maintain a consistent record of shipping high-quality, practical solutions that solve real-world problems.
            </p>

            {/* Highlight grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="portfolio-card flex items-center gap-3"
                >
                  <div
                    className="p-2 rounded-lg"
                    style={{
                      background: h.color === 'orange' ? 'var(--orange-glow)' : 'var(--blue-glow)',
                      color: h.color === 'orange' ? 'var(--orange)' : '#38bdf8',
                    }}
                  >
                    {h.icon}
                  </div>
                  <div>
                    <div
                      className="font-display font-bold text-xl"
                      style={{ color: h.color === 'orange' ? 'var(--orange)' : '#38bdf8' }}
                    >
                      {h.value}
                    </div>
                    <div className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                      {h.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/Gyanankur23" target="_blank" rel="noopener noreferrer" className="btn-primary">
                GitHub Profile
              </a>
              <a href="https://www.linkedin.com/in/gyanankur-baruah-797205338" target="_blank" rel="noopener noreferrer" className="btn-outline">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-60 z-40">
        <ChevronRight size={20} className="text-[var(--orange)] animate-pulse" />
        <ChevronRight size={20} className="text-[var(--orange)] animate-pulse delay-75" />
      </div>
    </section>
  )
}
