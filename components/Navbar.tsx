'use client'
import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#featured-docs', label: 'Docs' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#achievements', label: 'Awards' },
  { href: '#recommendations', label: 'More Info' }, // Recommendations, Test Scores & Languages
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [dark, setDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const isDark =
      stored === 'dark' ||
      (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl border-b' : ''
      }`}
      style={{
        background: scrolled
          ? 'rgba(var(--bg-rgb, 6,13,31), 0.85)'
          : 'transparent',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-lg tracking-tight flex items-center gap-2"
        >
          <span className="text-orange-500">GB</span>
          <span style={{ color: 'var(--text)' }}>.dev</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-all duration-200 hover:bg-orange-500/10"
            style={{ color: 'var(--text-muted)' }}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://github.com/Gyanankur23"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex btn-primary text-sm py-2 px-4"
          >
            GitHub ↗
          </a>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            style={{ color: 'var(--text)' }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t py-4 px-4 flex flex-col gap-3"
          style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link py-2 text-base"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}