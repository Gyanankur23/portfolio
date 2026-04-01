'use client'
import { useState } from 'react'
import { portfolioData } from '@/lib/data'
import { useInView } from '@/lib/useInView'
import { Github, ExternalLink, Star } from 'lucide-react'
import Image from 'next/image'

const categories = ['All', 'ML/AI', 'Analytics', 'Full-Stack', 'Web Dev', 'Open Source', 'Academic']

export default function Projects() {
  const { ref, inView } = useInView()
  const [active, setActive] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const filtered = active === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === active)

  const displayed = showAll ? filtered : filtered.slice(0, 12)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6" ref={ref as any}>
      <div className={`max-w-7xl mx-auto section-reveal ${inView ? 'visible' : ''}`}>
        <span className="section-number">03 / projects</span>
        <h2 className="section-title mb-4">140 Projects Built</h2>
        <p className="mb-8" style={{ color: 'var(--text-muted)' }}>
          From published PyPI libraries to real-time Streamlit apps, Power BI challenges to full-stack SaaS platforms.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setShowAll(false) }}
              className="px-4 py-2 rounded-full font-mono text-xs transition-all duration-200"
              style={{
                background: active === cat ? 'var(--orange)' : 'var(--card)',
                color: active === cat ? 'white' : 'var(--text-muted)',
                border: `1px solid ${active === cat ? 'var(--orange)' : 'var(--card-border)'}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured row */}
        {active === 'All' && (
          <>
            <h3 className="font-display font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text)' }}>
              <Star size={16} style={{ color: 'var(--orange)' }} />
              Featured
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {portfolioData.projects.filter(p => p.featured).map((p, i) => (
                <ProjectCard key={i} project={p} featured />
              ))}
            </div>
            <h3 className="font-display font-semibold mb-4" style={{ color: 'var(--text)' }}>All Projects</h3>
          </>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayed
            .filter(p => active !== 'All' || !p.featured)
            .map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
        </div>

        {filtered.filter(p => active !== 'All' || !p.featured).length > 12 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-10 btn-outline mx-auto block"
          >
            {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
          </button>
        )}

        {/* GitHub note */}
        <div
          className="mt-12 p-6 rounded-2xl border text-center"
          style={{ background: 'var(--card)', borderColor: 'var(--card-border)' }}
        >
          <p style={{ color: 'var(--text-muted)' }} className="mb-4">
            120+ public repos including ML models, dashboards, web apps, and academic practicals.
          </p>
          <a
            href="https://github.com/Gyanankur23"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Github size={16} />
            Explore All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
function ProjectCard({ project, featured }: { project: typeof portfolioData.projects[0]; featured?: boolean }) {
  const catColors: Record<string, string> = {
    'ML/AI': '#f96216',
    'Analytics': '#0ea5e9',
    'Full-Stack': '#8b5cf6',
    'Web Dev': '#10b981',
    'Open Source': '#f59e0b',
    'Academic': '#94a3b8',
  }
  const color = catColors[project.category] || '#f96216'

  return (
    <div
      className="portfolio-card flex flex-col h-full relative overflow-hidden card-hover"
      style={featured ? { borderColor: 'rgba(249,98,22,0.4)', boxShadow: '0 4px 20px rgba(249,98,22,0.1)' } : {}}
    >
      {featured && (
        <div
          className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full font-mono text-xs"
          style={{ background: 'var(--orange-glow)', color: 'var(--orange)' }}
        >
          <Star size={10} />
          Featured
        </div>
      )}

      {/* Full-width image at top */}
      {project.image && (
        <div className="w-full h-48 relative mb-4">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      )}

      {/* Category dot */}
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 rounded-full" style={{ background: color }} />
        <span className="font-mono text-xs" style={{ color }}>{project.category}</span>
      </div>

      {/* Title + description */}
      <h3 className="font-display font-semibold mb-2" style={{ color: 'var(--text)', fontSize: '0.95rem' }}>
        {project.name}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
        {project.desc}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.tech.slice(0, 4).map(t => (
          <span key={t} className="tag-blue tag">{t}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-orange-500 transition-colors duration-200"
          >
            <Github size={13} /> GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors duration-200"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
      </div>
    </div>
  )
}