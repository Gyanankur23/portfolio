'use client'
import React from 'react'

export default function RecommendationsTestScoresLanguages() {
  return (
    <section id="recommendations" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center text-orange-500">
        Recommendations & Test Scores
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Recommendations */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Recommendations</h3>
          <div className="grid gap-4">
            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 card-hover glow-orange">
              <p className="text-sm italic text-slate-600 dark:text-slate-300">
                "Gyanankur is a great classmate who is very good at his work. He is always ready to help others with their tasks and explains things clearly."
              </p>
              <p className="mt-3 font-medium text-orange-500 text-sm">— Vishakha Gupta</p>
            </div>
            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 card-hover glow-blue">
              <p className="text-sm italic text-slate-600 dark:text-slate-300">
                "He consistently lends a hand to those around him—even when juggling his own work. His approachable and encouraging attitude fosters a supportive learning environment."
              </p>
              <p className="mt-3 font-medium text-orange-500 text-sm">— Anushka Singh</p>
            </div>
            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 card-hover glow-orange">
              <p className="text-sm italic text-slate-600 dark:text-slate-300">
                "He's completed over 10 internships spanning web development, data science, and analytics. His support on my beginner-level projects was both helpful and encouraging."
              </p>
              <p className="mt-3 font-medium text-orange-500 text-sm">— Riya Raut</p>
            </div>
            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 card-hover glow-blue">
              <p className="text-sm italic text-slate-600 dark:text-slate-300">
                "Turned our messy internal wiki into a structured knowledge base. New hire onboarding time dropped by 40%."
              </p>
              <p className="mt-3 font-medium text-orange-500 text-sm">— Ravi M.<br/><span className="text-xs text-slate-500">Engineering Lead · Bengaluru</span></p>
            </div>
            <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4 card-hover glow-orange">
              <p className="text-sm italic text-slate-600 dark:text-slate-300">
                "The proposal he wrote helped us secure a major partnership. Professional, persuasive, delivered on time."
              </p>
              <p className="mt-3 font-medium text-orange-500 text-sm">— Priya S.<br/><span className="text-xs text-slate-500">Data Analyst · Pune</span></p>
            </div>
          </div>
        </div>

        {/* Test Scores */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 border-b pb-2">Test Scores</h3>
          <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-4">
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md shadow">Data Analyst Oneroadmap.io Certification – 95% (May 2025)</li>
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md shadow">IDMC Certified (Informatica) – 88% (May 2025)</li>
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md shadow">Project Management Basics (Pendo.io) – 93% (Apr 2025)</li>
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md shadow">Python Internship Phase 1 & 2 – 90/100 each (Apr 2025)</li>
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md shadow">Six Sigma Basics – 90% (Apr 2025)</li>
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md shadow">MAH BCA CET – 98.02 percentile (May 2024)</li>
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md shadow">JEE Mains Paper 2 (B.Arch) – 91.97 percentile (Apr 2024)</li>
              <li className="bg-slate-50 dark:bg-slate-900 p-3 rounded-md shadow">Std 10 – 96.4% (Feb 2022)</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Languages</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white dark:bg-slate-800 shadow rounded p-3">
                <p className="font-medium text-sm">Assamese</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Native or bilingual proficiency</p>
              </div>
              <div className="bg-white dark:bg-slate-800 shadow rounded p-3">
                <p className="font-medium text-sm">English</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Professional working proficiency · Duolingo 130 (Jan 2026)</p>
              </div>
              <div className="bg-white dark:bg-slate-800 shadow rounded p-3">
                <p className="font-medium text-sm">German</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Limited working proficiency · Duolingo 79 (Dec 2025)</p>
              </div>
              <div className="bg-white dark:bg-slate-800 shadow rounded p-3">
                <p className="font-medium text-sm">Hindi</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Professional working proficiency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}