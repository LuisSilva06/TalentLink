import React from 'react'
import logo from '../assets/logo.png'

export default function Header({theme, setTheme}){
  return (
    <header className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <div className='w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-teal-400 flex items-center justify-center text-white font-bold'>
          FT
        </div>
        <div>
          <h1 className='text-2xl font-bold'>TalentLink</h1>
          <p className='text-sm text-gray-500'>Conectando talentos, propósito e futuro</p>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        <button
          onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}
          className='px-3 py-2 rounded-md border'
        >
          {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
      </div>
    </header>
  )
}
