'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useInView } from '@/lib/useInView'
import { ArrowRightLeft, FileText, CheckCircle2 } from 'lucide-react'

const docTransformations = [
  {
    id: 1,
    title: 'Research Documentation',
    before: '/images/documents/1b4.png',
    after: '/images/documents/1.png',
    description: 'Unstructured research notes transformed into a clean, professional technical document with proper formatting and clear hierarchy.',
  },
  {
    id: 2,
    title: 'Project Specifications',
    before: '/images/documents/2b4.png',
    after: '/images/documents/2.png',
    description: 'Raw requirements converted into structured project specs with clear sections, bullet points, and actionable items.',
  },
  {
    id: 3,
    title: 'Technical Documentation',
    before: '/images/documents/3b4.png',
    after: '/images/documents/3.png',
    description: 'Messy code comments reorganized into comprehensive technical documentation with code blocks and explanations.',
  },
  {
    id: 4,
    title: 'Process Workflows',
    before: '/images/documents/4b4.png',
    after: '/images/documents/4.png',
    description: 'Scattered process notes transformed into visual workflow diagrams with step-by-step instructions.',
  },
  {
    id: 5,
    title: 'Analysis Reports',
    before: '/images/documents/5b4.png',
    after: '/images/documents/5.png',
    description: 'Raw data analysis converted into professional reports with charts, summaries, and executive insights.',
  },
]

export default function FeaturedDocs() {
  const { ref, inView } = useInView()
  const [activeDoc, setActiveDoc] = useState(0)
  const [showAfter, setShowAfter] = useState(true)

  return (
    <section id="featured-docs" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[var(--orange-glow)] to-transparent" ref={ref as any}>
      <div className={`max-w-7xl mx-auto section-reveal ${inView ? 'visible' : ''}`}>
        <span className="section-number">02 / documentation</span>
        <h2 className="section-title">Reverse Engineering Showcase</h2>
        <p className="text-[var(--text-muted)] text-lg max-w-3xl mb-12">
          Transforming messy, unstructured documents into clean, professional documentation through 
          reverse engineering and code-driven organization.
        </p>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Before/After Viewer */}
          <div className="portfolio-card overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-[var(--text)] flex items-center gap-2">
                <FileText size={20} className="text-[var(--orange)]" />
                {docTransformations[activeDoc].title}
              </h3>
              <div className="flex items-center gap-2 bg-[var(--bg)] rounded-full p-1">
                <button
                  onClick={() => setShowAfter(false)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                    !showAfter ? 'bg-red-500 text-white' : 'text-[var(--text-muted)]'
                  }`}
                >
                  Before
                </button>
                <button
                  onClick={() => setShowAfter(true)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition ${
                    showAfter ? 'bg-emerald-500 text-white' : 'text-[var(--text-muted)]'
                  }`}
                >
                  After
                </button>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-[var(--card-border)]">
              <Image
                src={showAfter ? docTransformations[activeDoc].after : docTransformations[activeDoc].before}
                alt={`${docTransformations[activeDoc].title} - ${showAfter ? 'After' : 'Before'}`}
                fill
                className="object-contain"
              />
              <div className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold ${
                showAfter ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
              }`}>
                {showAfter ? '✓ PROFESSIONAL' : '✗ MESSY'}
              </div>
            </div>

            <p className="text-[var(--text-muted)] mt-4 text-sm leading-relaxed">
              {docTransformations[activeDoc].description}
            </p>
          </div>

          {/* Document Selector */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
              <ArrowRightLeft size={20} className="text-[var(--blue)]" />
              Select Transformation
            </h3>
            
            {docTransformations.map((doc, index) => (
              <button
                key={doc.id}
                onClick={() => { setActiveDoc(index); setShowAfter(true); }}
                className={`portfolio-card text-left transition-all ${
                  activeDoc === index ? 'border-[var(--orange)] ring-2 ring-[var(--orange)] ring-opacity-30' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-16 rounded overflow-hidden flex-shrink-0 border border-[var(--card-border)]">
                    <Image
                      src={doc.after}
                      alt={doc.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[var(--text)] mb-1">{doc.title}</h4>
                    <p className="text-xs text-[var(--text-muted)] line-clamp-2">{doc.description}</p>
                  </div>
                  {activeDoc === index && (
                    <CheckCircle2 size={20} className="text-[var(--orange)] flex-shrink-0" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Documents Transformed', value: '500+' },
            { label: 'Time Saved Per Doc', value: '3hrs' },
            { label: 'Readability Score', value: '95%' },
            { label: 'Client Satisfaction', value: '100%' },
          ].map((stat) => (
            <div key={stat.label} className="portfolio-card text-center">
              <div className="text-2xl md:text-3xl font-bold text-[var(--orange)]">{stat.value}</div>
              <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
