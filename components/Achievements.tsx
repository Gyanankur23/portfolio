'use client'
import { portfolioData } from '@/lib/data'
import { useInView } from '@/lib/useInView'
import { Trophy, Star, Zap } from 'lucide-react'
import Image from 'next/image'

const icons = [Trophy, Star, Zap, Trophy, Star, Zap, Trophy, Star, Zap, Trophy, Star, Zap]

export default function Achievements() {
  const { ref, inView } = useInView()

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6" ref={ref as any}>
      <div className={`max-w-6xl mx-auto section-reveal ${inView ? 'visible' : ''}`}>
        <span className="section-number">07 / achievements</span>
        <h2 className="section-title mb-4">Awards & Recognition</h2>
        <p className="mb-12" style={{ color: 'var(--text-muted)' }}>
          From 1st place challenges to McKinsey Distinction and IIT Bombay entrepreneurship programs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {portfolioData.achievements.map((ach, i) => {
            const Icon = icons[i % icons.length]
            const isTop = i < 3
            const achievementText = typeof ach === 'string' ? ach : ach.text
            const hasImage = typeof ach === 'object' && ach.image
            return (
              <div
                key={i}
                className={`portfolio-card ${hasImage ? '' : 'flex items-start gap-4'}`}
                style={isTop ? { borderColor: 'rgba(249,98,22,0.4)', background: 'linear-gradient(135deg, var(--card) 0%, rgba(249,98,22,0.03) 100%)' } : {}}
              >
                {hasImage ? (
                  <div className="mb-3 w-full h-48 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={ach.image}
                      alt={achievementText}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                ) : (
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: isTop ? 'var(--orange-glow)' : 'var(--blue-glow)',
                      color: isTop ? 'var(--orange)' : '#38bdf8',
                    }}
                  >
                    <Icon size={18} />
                  </div>
                )}
                <p className={`text-sm leading-relaxed ${hasImage ? 'pt-0' : 'pt-1.5'}`} style={{ color: 'var(--text)' }}>
                  {achievementText}
                </p>
              </div>
            )
          })}
        </div>

        {/* GitHub badges */}
        <div className="mt-12 p-8 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--card-border)' }}>
          <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text)' }}>GitHub Badges Earned</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            YOLO · Pull Shark · Quick Draw · Pair Extraordinaire · Developer Program Member
          </p>
          <div className="flex flex-wrap gap-2">
            {['YOLO', 'Pull Shark', 'Quick Draw', 'Pair Extraordinaire', 'Developer Program Member'].map(b => (
              <span key={b} className="tag-blue tag">{b}</span>
            ))}
          </div>
        </div>

        {/* Volunteering */}
        <div className="mt-8">
          <h3 className="font-display font-semibold mb-6" style={{ color: 'var(--text)' }}>Volunteering & Social Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioData.volunteering.map((v, i) => (
              <div key={i} className="portfolio-card">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-semibold text-sm" style={{ color: 'var(--text)' }}>{v.role}</h4>
                  <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{v.period}</span>
                </div>
                <p className="font-semibold text-xs mb-2" style={{ color: 'var(--orange)' }}>{v.org}</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
