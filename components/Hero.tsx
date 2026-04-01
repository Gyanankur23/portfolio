'use client'
import { useEffect, useRef, useState } from 'react'
import { portfolioData } from '@/lib/data'
import { Github, Mail, ArrowDown, Award, Code, Trophy, Cloud, Database, Linkedin, BarChart3, ChevronRight } from 'lucide-react'

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
      canvas.height = window.innerHeight
    }
    resize();
    window.addEventListener('resize', resize);

    const isDark = document.documentElement.classList.contains('dark')
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      <div className="relative z-10 text-center px-4">
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
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-2xl mx-auto">
          <a href="https://github.com/Gyanankur23" target="_blank" className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <Github size={16} /> GitHub
          </a>
          <a href="mailto:gyanankur9@gmail.com" className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <Mail size={16} /> Email
          </a>
          <a href="https://www.linkedin.com/in/gyanankur-baruah-797205338" target="_blank" className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://learn.microsoft.com/en-us/users/GyanankurBaruah-1209" target="_blank" className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <Cloud size={16} /> Microsoft
          </a>
          <a href="https://www.credly.com/users/gyanankur-baruah.a175da8c/badges#credly" target="_blank" className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <Award size={16} /> Credly
          </a>
          <a href="https://www.salesforce.com/trailblazer/ezqfq14cu93a05hv7f" target="_blank" className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <Code size={16} /> Salesforce
          </a>
          <a href="https://www.udemy.com/user/gyanankur-baruah-2/" target="_blank" className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <Trophy size={16} /> Udemy
          </a>
          <a href="https://www.hackerrank.com/profile/gyanankur9" target="_blank" className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <Code size={16} /> HackerRank
          </a>
          <a href="https://www.kaggle.com/gyanankurbaruah" target="_blank" className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <Database size={16} /> Kaggle
          </a>
          <a href="https://datadna.onyxdata.co.uk/profile/?uwp_profile=gyanankurbaruah" target="_blank" className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
            <BarChart3 size={16} /> Onyx Data
          </a>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 animate-bounce opacity-80 z-50">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--orange)]">scroll</span>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-60 z-40">
          <ChevronRight size={20} className="text-[var(--orange)] animate-pulse" />
          <ChevronRight size={20} className="text-[var(--orange)] animate-pulse delay-75" />
        </div>
      </div>
    </section>
  )
}
