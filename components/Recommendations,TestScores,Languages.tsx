'use client'

import { useInView } from '@/lib/useInView'

export default function RecommendationsTestScoresLanguages() {
  const { ref, inView } = useInView()

  return (
    <section id="recommendations" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[var(--orange-glow)] to-transparent" ref={ref as any}>
      <div className={`max-w-6xl mx-auto section-reveal ${inView ? 'visible' : ''}`}>
        <span className="section-number">09 / more info</span>
        <h2 className="section-title mb-4">Recommendations & Test Scores</h2>
        <p className="mb-12" style={{ color: 'var(--text-muted)' }}>
          Peer recommendations, standardized test scores, and language proficiencies.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Recommendations */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Recommendations</h3>
            <div className="grid gap-4">
              <div className="portfolio-card">
                <p className="text-sm italic text-[var(--text-muted)]">
                  &quot;Gyanankur is a great classmate who is very good at his work. He is always ready to help others with their tasks and explains things clearly.&quot;
                </p>
                <p className="mt-3 font-medium text-[var(--orange)] text-sm">— Vishakha Gupta</p>
              </div>
              <div className="portfolio-card">
                <p className="text-sm italic text-[var(--text-muted)]">
                  &quot;He consistently lends a hand to those around him—even when juggling his own work. His approachable and encouraging attitude fosters a supportive learning environment.&quot;
                </p>
                <p className="mt-3 font-medium text-[var(--orange)] text-sm">— Anushka Singh</p>
              </div>
              <div className="portfolio-card">
                <p className="text-sm italic text-[var(--text-muted)]">
                  &quot;He&apos;s completed over 10 internships spanning web development, data science, and analytics. His support on my beginner-level projects was both helpful and encouraging.&quot;
                </p>
                <p className="mt-3 font-medium text-[var(--orange)] text-sm">— Riya Raut</p>
              </div>
              <div className="portfolio-card">
                <p className="text-sm italic text-[var(--text-muted)]">
                  &quot;Turned our messy internal wiki into a structured knowledge base. New hire onboarding time dropped by 40%.&quot;
                </p>
                <p className="mt-3 font-medium text-[var(--orange)] text-sm">— Ravi M.<br/><span className="text-xs text-[var(--text-muted)]">Engineering Lead · Bengaluru</span></p>
              </div>
              <div className="portfolio-card">
                <p className="text-sm italic text-[var(--text-muted)]">
                  &quot;The proposal he wrote helped us secure a major partnership. Professional, persuasive, delivered on time.&quot;
                </p>
                <p className="mt-3 font-medium text-[var(--orange)] text-sm">— Priya S.<br/><span className="text-xs text-[var(--text-muted)]">Data Analyst · Pune</span></p>
              </div>
            </div>
          </div>

          {/* Test Scores */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Test Scores</h3>
            <div className="portfolio-card">
              <ul className="space-y-2 text-[var(--text)]">
                <li className="bg-[var(--bg)] p-3 rounded-md">Data Analyst Oneroadmap.io Certification – 95% (May 2025)</li>
                <li className="bg-[var(--bg)] p-3 rounded-md">IDMC Certified (Informatica) – 88% (May 2025)</li>
                <li className="bg-[var(--bg)] p-3 rounded-md">Project Management Basics (Pendo.io) – 93% (Apr 2025)</li>
                <li className="bg-[var(--bg)] p-3 rounded-md">Python Internship Phase 1 & 2 – 90/100 each (Apr 2025)</li>
                <li className="bg-[var(--bg)] p-3 rounded-md">Six Sigma Basics – 90% (Apr 2025)</li>
                <li className="bg-[var(--bg)] p-3 rounded-md">MAH BCA CET – 98.02 percentile (May 2024)</li>
                <li className="bg-[var(--bg)] p-3 rounded-md">JEE Mains Paper 2 (B.Arch) – 91.97 percentile (Apr 2024)</li>
                <li className="bg-[var(--bg)] p-3 rounded-md">Std 10 – 96.4% (Feb 2022)</li>
              </ul>
            </div>

            {/* Languages */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Languages</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="portfolio-card p-3">
                  <p className="font-medium text-sm">Assamese</p>
                  <p className="text-xs text-[var(--text-muted)]">Native or bilingual proficiency</p>
                </div>
                <div className="portfolio-card p-3">
                  <p className="font-medium text-sm">English</p>
                  <p className="text-xs text-[var(--text-muted)]">Professional working proficiency · Duolingo 130 (Jan 2026)</p>
                </div>
                <div className="portfolio-card p-3">
                  <p className="font-medium text-sm">German</p>
                  <p className="text-xs text-[var(--text-muted)]">Limited working proficiency · Duolingo 79 (Dec 2025)</p>
                </div>
                <div className="portfolio-card p-3">
                  <p className="font-medium text-sm">Hindi</p>
                  <p className="text-xs text-[var(--text-muted)]">Professional working proficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
