import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

function ThemeToggle({ className = '' }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Initialize from localStorage or prefers-color-scheme
    const stored = localStorage.getItem('theme')
    if (stored) {
      setTheme(stored)
      document.documentElement.classList.toggle('dark', stored === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = prefersDark ? 'dark' : 'light'
      setTheme(initial)
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <button
      aria-label="Toggle theme"
      className={`relative inline-flex items-center justify-center h-10 w-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:scale-[1.03] hover:border-white/20 active:scale-95 ${className}`}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-amber-300 drop-shadow" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700" />)
      }
    </button>
  )
}

export default ThemeToggle
