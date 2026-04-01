'use client'

import { portfolioData } from '@/lib/data'
import { MapPin, GraduationCap, Users, Code2, Wind, GitBranch, BookOpen, Palette } from 'lucide-react'
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
    <section id="about" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[var(--orange-glow)] to-transparent" ref={ref as any}>
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

            {/* Orbit wire lines - connecting badges to center (subtle, not touching image) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <line x1="50%" y1="50%" x2="88%" y2="15%" stroke="rgba(249,98,22,0.15)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="50%" y1="50%" x2="12%" y2="25%" stroke="rgba(14,165,233,0.15)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="50%" y1="50%" x2="92%" y2="42%" stroke="rgba(249,98,22,0.15)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="50%" y1="50%" x2="8%" y2="55%" stroke="rgba(14,165,233,0.15)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="50%" y1="50%" x2="85%" y2="72%" stroke="rgba(249,98,22,0.15)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="50%" y1="50%" x2="15%" y2="78%" stroke="rgba(14,165,233,0.15)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="50%" y1="50%" x2="50%" y2="12%" stroke="rgba(249,98,22,0.15)" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="50%" y1="50%" x2="50%" y2="88%" stroke="rgba(14,165,233,0.15)" strokeWidth="0.5" strokeDasharray="2,2" />
            </svg>

            {/* Orbit badges with icons - spread out positions */}
            {[
              { label: 'Python', icon: null, pos: { top: '5%', left: '42%' }, color: 'orange' },
              { label: 'Power BI', icon: null, pos: { top: '12%', right: '8%' }, color: 'orange' },
              { label: 'Next.js', icon: null, pos: { top: '28%', left: '2%' }, color: 'blue' },
              { label: 'AI/ML', icon: null, pos: { top: '42%', right: '2%' }, color: 'orange' },
              { label: 'LaTeX', icon: null, pos: { top: '58%', left: '0%' }, color: 'blue' },
              { label: 'Excel', icon: null, pos: { top: '72%', right: '8%' }, color: 'orange' },
              { label: 'Streamlit', icon: <Wind size={14} className="mr-1" />, pos: { bottom: '8%', left: '12%' }, color: 'blue' },
              { label: 'Git', icon: <GitBranch size={14} className="mr-1" />, pos: { bottom: '5%', right: '20%' }, color: 'orange' },
              { label: 'Jupyter', icon: <BookOpen size={14} className="mr-1" />, pos: { top: '85%', left: '35%' }, color: 'orange' },
              { label: 'Tailwind', icon: <Palette size={14} className="mr-1" />, pos: { top: '8%', right: '28%' }, color: 'blue' },
            ].map((item, i) => (
              <div
                key={item.label}
                className="absolute flex items-center font-mono text-xs px-3 py-1.5 rounded-full border whitespace-nowrap"
                style={{
                  background: 'var(--card)',
                  borderColor: item.color === 'orange' ? 'rgba(249,98,22,0.4)' : 'rgba(14,165,233,0.4)',
                  color: item.color === 'orange' ? 'var(--orange)' : '#38bdf8',
                  zIndex: 2,
                  ...item.pos,
                }}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>

          {/* Right: bio + highlights */}
          <div>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              I am a Final Year Data Science student at Thakur Shyamnarayan Degree College, Mumbai, maintaining a 9.45 SGPA. As the Documentation Lead at MetaMindset Labs, I specialize in reverse engineering messy documents into clean, structured formats using code-driven approaches. I also lead Machine Learning Open Shelf, focusing on practical AI solutions and data-driven dashboards.
            </p>
            <p className="leading-relaxed mb-8" style={{ color: 'var(--text-muted)' }}>
              My work bridges raw data and actionable intelligence through documentation, analytics, and full-stack development. I am involved in community leadership via DataFam Mumbai, contributing to research and social impact initiatives while maintaining a record of shipping practical solutions.
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
    </section>
  )
}
