'use client'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="py-10 px-4 sm:px-6 border-t"
      style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-orange-500">GB</span>
          <span className="font-display font-bold" style={{ color: 'var(--text)' }}>.dev</span>
          <span className="font-mono text-xs ml-2" style={{ color: 'var(--text-muted)' }}>
            · Gyanankur Baruah · Mumbai, India
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Gyanankur23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-orange-500 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/gyanankur-baruah-797205338"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-sky-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:gyanankur9@gmail.com"
            className="text-slate-400 hover:text-orange-500 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
          Built with Next.js 14 · Tailwind CSS · ♥
        </p>
      </div>
    </footer>
  )
}
