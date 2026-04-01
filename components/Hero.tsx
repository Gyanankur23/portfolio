'use client'
import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '@/lib/data'
import { Github, Mail, Award, Code, Trophy, Cloud, Database, Linkedin, BarChart3 } from 'lucide-react'

// Type definitions for canvas animations
interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  color: string
  life?: number
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [displayText, setDisplayText] = useState('')
  const fullText = "Hi, I am Gyanankur Baruah"

  // Typing Effect Logic
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setDisplayText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        setTimeout(() => { i = 0 }, 2000); // Reset after 2s
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  // Canvas Background Logic
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight || window.innerWidth * 0.6
    }
    resize();
    window.addEventListener('resize', resize);

    const particles: any[] = []
    const colors = ['rgba(249,98,22,0.5)', 'rgba(14,165,233,0.5)', 'rgba(56,189,248,0.5)']

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark')
      ctx.fillStyle = isDark ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }
    animate()
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0 bg-gradient-to-b from-transparent via-[var(--orange-glow)] to-transparent">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 w-full h-full" />
      
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
          <span 
            className="animate-pulse"
            style={{
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'var(--text)',
              padding: '0 10px',
              filter: 'drop-shadow(0 0 30px rgba(255, 107, 107, 1)) drop-shadow(0 0 60px rgba(14, 165, 233, 0.8)) drop-shadow(0 0 90px rgba(56, 189, 248, 0.6))',
              textShadow: '0 0 40px rgba(255, 107, 107, 0.8)',
            }}
          >
            <span style={{ color: 'var(--text)' }}>Hi, I am</span>
          </span>
          {' '}
          <span 
            className="animate-pulse"
            style={{
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'var(--text)',
              padding: '0 10px',
              filter: 'drop-shadow(0 0 25px rgba(255, 107, 107, 1)) drop-shadow(0 0 80px rgba(14, 165, 233, 0.8)) drop-shadow(0 0 120px rgba(56, 189, 248, 0.6))',
              textShadow: '0 0 35px rgba(14, 165, 233, 0.9)',
            }}
          >
            <span style={{ color: 'var(--text)' }}>Gyanankur</span>
          </span>
          {' '}
          <span 
            className="animate-pulse"
            style={{
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'var(--text)',
              padding: '0 10px',
              filter: 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.8)) drop-shadow(0 0 40px rgba(14, 165, 233, 0.8)) drop-shadow(0 0 60px rgba(56, 189, 248, 0.4))',
              textShadow: '0 0 30px rgba(255, 107, 107, 0.8)',
            }}
          >
            <span style={{ color: 'var(--text)' }}>Baruah</span>
          </span>
          <span 
            className="animate-pulse" 
            style={{
              background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              padding: '0 2px',
              filter: 'blur(0.5px) brightness(1.5)',
              boxShadow: '0 0 8px rgba(255,255,255,0.8)',
            }}
          >|</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto mb-6 leading-relaxed px-4">
          <span className="font-semibold text-[var(--orange)]">Documentation Lead @Metamindset Labs</span> — Helping people turn messy documents into structured ones by reverse engineering using code lines. <br className="hidden md:block" />
          <span className="text-[var(--blue)]">Final year Data Science @BSc Data Science @Mumbai University</span>
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 max-w-3xl mx-auto px-2">
          <a href="https://github.com/Gyanankur23" target="_blank" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-gray-900 text-white border border-gray-700 rounded-full hover:bg-gray-800 transition shadow-lg hover:shadow-xl">
            <Github size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline font-medium">GitHub</span>
          </a>
          <a href="mailto:gyanankur9@gmail.com" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-red-600 text-white border border-red-500 rounded-full hover:bg-red-700 transition shadow-lg hover:shadow-xl">
            <Mail size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline font-medium">Email</span>
          </a>
          <a href="https://www.linkedin.com/in/gyanankur-baruah-797205338" target="_blank" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-blue-600 text-white border border-blue-500 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
            <Linkedin size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline font-medium">LinkedIn</span>
          </a>
          <a href="https://learn.microsoft.com/en-us/users/GyanankurBaruah-1209" target="_blank" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-yellow-500 text-gray-900 border border-yellow-400 rounded-full hover:bg-yellow-400 transition shadow-lg hover:shadow-xl">
            <Cloud size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline font-medium">Microsoft</span>
          </a>
          <a href="https://www.credly.com/users/gyanankur-baruah.a175da8c/badges#credly" target="_blank" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-orange-500 text-white border border-orange-400 rounded-full hover:bg-orange-600 transition shadow-lg hover:shadow-xl">
            <Award size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline font-medium">Credly</span>
          </a>
          <a href="https://www.salesforce.com/trailblazer/ezqfq14cu93a05hv7f" target="_blank" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-sky-400 text-white border border-sky-300 rounded-full hover:bg-sky-500 transition shadow-lg hover:shadow-xl">
            <Code size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline font-medium">Salesforce</span>
          </a>
          <a href="https://www.udemy.com/user/gyanankur-baruah-2/" target="_blank" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-purple-600 text-white border border-purple-500 rounded-full hover:bg-purple-700 transition shadow-lg hover:shadow-xl">
            <Trophy size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline font-medium">Udemy</span>
          </a>
          <a href="https://www.hackerrank.com/profile/gyanankur9" target="_blank" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-gray-600 text-white border border-gray-500 rounded-full hover:bg-gray-700 transition shadow-lg hover:shadow-xl">
            <Code size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline font-medium">HackerRank</span>
          </a>
          <a href="https://www.kaggle.com/gyanankurbaruah" target="_blank" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-emerald-600 text-white border border-emerald-500 rounded-full hover:bg-emerald-700 transition shadow-lg hover:shadow-xl">
            <Database size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline font-medium">Kaggle</span>
          </a>
          <a href="https://datadna.onyxdata.co.uk/profile/?uwp_profile=gyanankurbaruah" target="_blank" className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 text-sm md:text-base bg-indigo-600 text-white border border-indigo-500 rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
            <BarChart3 size={14} className="md:w-4 md:h-4" /> <span className="hidden sm:inline font-medium">Onyx Data</span>
          </a>
        </div>
      </div>
    </section>
  )
}
