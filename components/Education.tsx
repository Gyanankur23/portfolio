'use client'
import { portfolioData } from '@/lib/data'
import { useInView } from '@/lib/useInView'
import Image from 'next/image'

export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section id="education" className="py-24 px-4 sm:px-6" ref={ref as any}>
      <div className={`max-w-5xl mx-auto section-reveal ${inView ? 'visible' : ''}`}>
        <span className="section-number">05 / education</span>
        <h2 className="section-title mb-12">Academic & Leadership Programs</h2>

        <div className="space-y-6">
          {portfolioData.education.map((edu, i) => (
            <div key={i} className="portfolio-card flex gap-5 items-start">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: 'var(--orange-glow)', border: '1px solid rgba(249,98,22,0.2)' }}
              >
                {edu.icon}
              </div>
              <div className="flex-1">
                {edu.image && (
                  <div className="mb-3 w-48 h-32 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <Image
                      src={edu.image}
                      alt={edu.degree}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                )}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold" style={{ color: 'var(--text)', fontSize: '1rem' }}>
                    {edu.degree}
                  </h3>
                  <span className="font-mono text-xs px-2 py-1 rounded-full"
                    style={{ background: 'var(--blue-glow)', color: '#38bdf8' }}>
                    {edu.period}
                  </span>
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: 'var(--orange)' }}>
                  {edu.institution}{edu.university ? ` · ${edu.university}` : ''}
                </p>
                <p className="text-sm font-mono mb-2" style={{ color: 'var(--text-muted)' }}>
                  {edu.grade}
                </p>
                {edu.activities && (
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {edu.activities}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
