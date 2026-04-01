'use client'
import { useEffect, useRef } from 'react'
import { portfolioData } from '@/lib/data'
import { useInView } from '@/lib/useInView'

export default function Skills() {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (!inView) return
    const bars = document.querySelectorAll('.skill-bar-fill')
    bars.forEach((bar, i) => {
      setTimeout(() => bar.classList.add('animate'), i * 50)
    })
  }, [inView])

  const categoryIcons: Record<string, string> = {
    'Data & Analytics': '📊',
    'Machine Learning & AI': '🤖',
    'Web Development': '🌐',
    'Cloud & DevOps': '☁️',
    'Business & Strategy': '📈',
    'Tools': '🛠️',
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6" ref={ref as any} style={{ background: 'var(--bg-secondary)' }}>
      <div className={`max-w-7xl mx-auto section-reveal ${inView ? 'visible' : ''}`}>
        <span className="section-number">04 / skills</span>
        <h2 className="section-title mb-4">Technical Expertise</h2>
        <p className="mb-12" style={{ color: 'var(--text-muted)' }}>
          Built from professional certifications, 30 internships, and 140 shipped projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(portfolioData.skills).map(([category, skills]) => (
            <div key={category} className="portfolio-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{categoryIcons[category] || '💡'}</span>
                <h3 className="font-display font-semibold" style={{ color: 'var(--text)', fontSize: '0.9rem' }}>
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-lg font-mono transition-all duration-200 cursor-default hover:scale-105 hover:border-orange-500"
                    style={{
                      background: i % 3 === 0 ? 'var(--orange-glow)' : i % 3 === 1 ? 'var(--blue-glow)' : 'var(--card-border)',
                      color: i % 3 === 0 ? 'var(--orange)' : i % 3 === 1 ? '#38bdf8' : 'var(--text-muted)',
                      border: '1px solid transparent',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech cloud for visual impact */}
        <div
          className="mt-12 p-8 rounded-2xl border"
          style={{ background: 'var(--card)', borderColor: 'var(--card-border)' }}
        >
          <h3 className="font-display font-semibold mb-6 text-center" style={{ color: 'var(--text)' }}>
            Full Stack & Beyond
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Python', 'SQL', 'Power BI', 'Next.js', 'React', 'TypeScript', 'Streamlit',
              'scikit-learn', 'LangChain', 'Gemini API', 'Google Cloud', 'Supabase',
              'BigQuery', 'Tableau', 'Looker Studio', 'DAX', 'Pandas', 'NumPy',
              'Plotly', 'Dash', 'Node.js', 'Express.js', 'MongoDB', 'Firebase',
              'Vercel', 'GitHub', 'Jupyter', 'Weka', 'NLTK', 'TensorFlow',
            ].map((tech, i) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-full font-mono text-xs transition-all duration-200 cursor-default"
                style={{
                  fontSize: `${0.65 + (i % 4) * 0.05}rem`,
                  background: `rgba(${i % 2 === 0 ? '249,98,22' : '14,165,233'},${0.05 + (i % 5) * 0.02})`,
                  color: i % 2 === 0 ? 'var(--orange)' : '#38bdf8',
                  border: `1px solid rgba(${i % 2 === 0 ? '249,98,22' : '14,165,233'},0.15)`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
