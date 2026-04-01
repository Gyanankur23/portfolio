'use client'
import { useState } from 'react'
import { portfolioData } from '@/lib/data'
import { useInView } from '@/lib/useInView'
import { Calendar, MapPin, ExternalLink, Briefcase } from 'lucide-react'
import Image from 'next/image'

export default function Experience() {
  const { ref, inView } = useInView()
  const [expanded, setExpanded] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)

  const displayed = showAll ? portfolioData.experience : portfolioData.experience.slice(0, 10)

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[var(--orange-glow)] to-transparent" ref={ref as any}>
      <div className={`max-w-5xl mx-auto section-reveal ${inView ? 'visible' : ''}`}>
        <span className="section-number">03 / experience</span>
        <h2 className="section-title mb-4">30 Internships & Roles</h2>
        <p className="mb-12" style={{ color: 'var(--text-muted)' }}>
          From McKinsey's Leadership Accelerator to AI internships, hackathons to community founding.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-orange-500 to-transparent" />
          
          {/* Experience cards */}
          <div className="space-y-12">
            {displayed.map((exp, i) => {
              const isLeft = i % 2 === 0
              const hasImage = exp.image && exp.image.startsWith('/images/internships/')
              
              return (
                <div key={i} className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className={`absolute ${isLeft ? 'right-8' : 'left-8'} w-4 h-4 rounded-full border-4 border-orange-500 bg-orange-500 z-10`} />
                  
                  {/* Content card */}
                  <div className={`flex-1 ${isLeft ? 'ml-16' : 'mr-16'}`}>
                    <div className={`portfolio-card p-6 ${hasImage ? 'flex gap-4' : ''}`}>
                      {/* Left side - Text content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="font-display font-semibold text-lg" style={{ color: 'var(--text)', fontSize: '1.1rem' }}>
                                {exp.role}
                              </h3>
                              {exp.badge && (
                                <span className="text-xs px-2 py-0.5 rounded-full font-mono ml-2"
                                  style={{ background: 'var(--orange-glow)', color: 'var(--orange)', border: '1px solid rgba(249,98,22,0.3)' }}>
                                  {exp.badge}
                                </span>
                              )}
                              {exp.highlight && (
                                <span className="text-xs px-2 py-0.5 rounded-full font-mono ml-2"
                                  style={{ background: 'var(--blue-glow)', color: '#38bdf8', border: '1px solid rgba(14,165,233,0.3)' }}>
                                  🌟 Founder
                                </span>
                              )}
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
                              <span className="font-semibold" style={{ color: '#f96216' }}>{exp.org}</span>
                              <span>·</span>
                              <span className="font-mono text-xs">{exp.period}</span>
                              <span>·</span>
                              <span>{exp.mode}</span>
                            </div>
                          </div>
                        </div>

                        {exp.bullets && (
                          <ul className="mt-4 space-y-2 pl-4 border-l-2" style={{ borderColor: 'var(--orange)' }}>
                            {exp.bullets.map((b, j) => (
                              <li key={j} className="pl-4 text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.tags.slice(0, 3).map(t => (
                            <span key={t} className="tag">{t}</span>
                          ))}
                        </div>
                      </div>

                      {/* Right side - Large image */}
                      {hasImage ? (
                        <div className="flex-shrink-0 w-64 h-64 relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                          <Image
                            src={exp.image}
                            alt={exp.role}
                            width={256}
                            height={256}
                            className="w-full h-full object-contain p-4"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {portfolioData.experience.length > 10 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-12 btn-outline mx-auto block"
          >
            {showAll ? 'Show Less' : `Show All ${portfolioData.experience.length} Roles`}
          </button>
        )}
      </div>
    </section>
  )
}
