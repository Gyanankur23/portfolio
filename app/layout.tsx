import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gyanankur Baruah — Data Scientist & AI Builder',
  description: 'Portfolio of Gyanankur Baruah — 140 Projects, 30 Internships, Professional Certifications. Data Science, AI, ML, Full-Stack.',
  keywords: ['Gyanankur Baruah', 'Data Science', 'AI', 'Machine Learning', 'Portfolio', 'Mumbai'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
