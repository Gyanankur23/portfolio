'use client'
import { portfolioData } from '@/lib/data'
import { useInView } from '@/lib/useInView'
import { Award } from 'lucide-react'
import Image from 'next/image'

export default function Certifications() {
  const { ref, inView } = useInView()

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[var(--orange-glow)] to-transparent" ref={ref as any}>
      <div className={`max-w-7xl mx-auto section-reveal ${inView ? 'visible' : ''}`}>
        <span className="section-number">07 / certifications</span>
        <h2 className="section-title mb-4">Professional Certifications</h2>
        <p className="mb-12" style={{ color: 'var(--text-muted)' }}>
          Key certifications from Google Cloud, McKinsey, Microsoft, IBM, Forage, and other leading platforms in data science and AI.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioData.certifications.map((cert, i) => (
            <div
              key={i}
              className="portfolio-card"
              style={cert.highlight ? { borderColor: 'rgba(249,98,22,0.4)', boxShadow: '0 4px 16px rgba(249,98,22,0.08)' } : {}}
            >
              {cert.image && (
                <div className="mb-4 w-full h-52 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              )}
              <div className="flex items-start gap-3">
                {!cert.image && (
                  <div
                    className="flex-shrink-0 p-2 rounded-lg mt-0.5"
                    style={{
                      background: cert.highlight ? 'var(--orange-glow)' : 'var(--blue-glow)',
                      color: cert.highlight ? 'var(--orange)' : '#38bdf8',
                    }}
                  >
                    <Award size={14} />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-display font-medium text-sm leading-snug mb-1" style={{ color: 'var(--text)' }}>
                    {cert.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs" style={{ color: 'var(--orange)' }}>{cert.issuer}</span>
                    {cert.year && (
                      <>
                        <span style={{ color: 'var(--text-muted)' }}>·</span>
                        <span className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>{cert.year}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Platform badges */}
        <div className="mt-12 p-8 rounded-2xl border" style={{ background: 'var(--card)', borderColor: 'var(--card-border)' }}>
          <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text)' }}>Platforms Covered</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Google Cloud', 'Microsoft', 'IBM', 'Forage', 'Udemy', 'Kaggle', 'HackerRank', 'Excelerate', 'Internshala', 'GitHub', '365 Data Science'].map(p => (
              <span key={p} className="tag">{p}</span>
            ))}
          </div>
          <p className="mt-4 text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
            + 40 more platforms · 500+ total credentials
          </p>
        </div>
      </div>
    </section>
  )
}
