import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import Achievements from '@/components/Achievements'
import RecommendationsTestScoresLanguages from '@/components/Recommendations,TestScores,Languages'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-fit overflow-x-scroll overflow-y-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Achievements />
      <RecommendationsTestScoresLanguages />
      <Contact />
      <Footer />
    </main>
  )
}