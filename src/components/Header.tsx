'use client'
import { useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <nav className={`fixed top-0 w-full z-50 p-6 transition-all duration-300 ${darkMode ? 'bg-slate-900 shadow-2xl' : 'bg-white shadow-lg'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className={`text-3xl font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>BL</div>
        
        <div className="flex items-center space-x-6">
          <a href="#about" className={`hover:text-indigo-400 transition ${darkMode ? 'text-white' : 'text-gray-700'}`}>About</a>
          <a href="#projects" className={`hover:text-indigo-400 transition ${darkMode ? 'text-white' : 'text-gray-700'}`}>Projects</a>
          <a href="#contact" className={`hover:text-indigo-400 transition ${darkMode ? 'text-white' : 'text-gray-700'}`}>Contact</a>
          
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl ${darkMode ? 'bg-slate-800' : 'bg-gray-200'} hover:scale-110 transition-all`}
          >
            {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-slate-800" />}
          </button>
        </div>
      </div>
    </nav>
  )
}