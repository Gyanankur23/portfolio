'use client'
import { useInView } from '@/lib/useInView'
import { Mail, Github, Linkedin, MapPin, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const { ref, inView } = useInView()
  const [copied, setCopied] = useState(false)

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    {
      icon: <Mail size={20} />,
      label: 'Primary Email',
      value: 'gyanankur9@gmail.com',
      href: 'mailto:gyanankur9@gmail.com',
      color: 'orange',
    },
    {
      icon: <Mail size={20} />,
      label: 'Secondary Email',
      value: 'gyanankurcricket20@gmail.com',
      href: 'mailto:gyanankurcricket20@gmail.com',
      color: 'blue',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/gyanankur-baruah-797205338',
      href: 'https://www.linkedin.com/in/gyanankur-baruah-797205338',
      color: 'blue',
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/Gyanankur23',
      href: 'https://github.com/Gyanankur23',
      color: 'orange',
    },
    {
      icon: <Mail size={20} />,
      label: 'Google Cloud Skills',
      value: 'skills.google/public_profiles/3c85cfbc-2cca-4b1e-a946-a48ae43d2f91',
      href: 'https://www.skills.google/public_profiles/3c85cfbc-2cca-4b1e-a946-a48ae43d2f91',
      color: 'blue',
    },
    {
      icon: <Mail size={20} />,
      label: 'Google Cloud Skills 2',
      value: 'skills.google/public_profiles/d1648a16-ebd0-4b8a-9588-3d0bdea81f48',
      href: 'https://www.skills.google/public_profiles/d1648a16-ebd0-4b8a-9588-3d0bdea81f48',
      color: 'green',
    },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6" style={{ background: 'var(--bg-secondary)' }} ref={ref as any}>
      <div className={`max-w-4xl mx-auto section-reveal ${inView ? 'visible' : ''}`}>
        <span className="section-number">08 / contact</span>
        <h2 className="section-title mb-4">Let&apos;s Connect</h2>
        <p className="mb-12 max-w-xl" style={{ color: 'var(--text-muted)' }}>
          Open to internships, collaborations, data science roles, AI projects, and community initiatives. Drop a message anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card flex items-center gap-4 group no-underline"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                style={{
                  background: l.color === 'orange' ? 'var(--orange-glow)' : 'var(--blue-glow)',
                  color: l.color === 'orange' ? 'var(--orange)' : '#38bdf8',
                }}
              >
                {l.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-mono text-xs mb-0.5" style={{ color: 'var(--text-muted)' }}>{l.label}</p>
                <p className="font-display font-medium text-sm truncate" style={{ color: 'var(--text)' }}>{l.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Location */}
        <div
          className="flex items-center gap-3 p-5 rounded-2xl border mb-10"
          style={{ background: 'var(--card)', borderColor: 'var(--card-border)' }}
        >
          <MapPin size={18} style={{ color: 'var(--orange)', flexShrink: 0 }} />
          <span style={{ color: 'var(--text-muted)' }} className="text-sm">
            Mira Road, Mumbai 401107, Maharashtra, India
          </span>
        </div>

        {/* CTA block */}
        <div
          className="relative overflow-hidden p-8 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(249,98,22,0.12) 0%, rgba(14,165,233,0.08) 100%)',
            border: '1px solid rgba(249,98,22,0.2)',
          }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, var(--orange), transparent)' }}
          />

          <h3 className="font-display font-bold text-2xl mb-2" style={{ color: 'var(--text)' }}>
            Ready to build something great?
          </h3>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            140 projects shipped. 30 internships done. Always building the next one.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:gyanankur9@gmail.com" className="btn-primary">
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/gyanankur-baruah-797205338"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
