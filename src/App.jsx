import React, {useEffect, useState} from 'react'
import Home from './pages/Home'
import Header from './components/Header'

export default function App(){
  const [theme, setTheme] = useState('light')
  useEffect(()=>{
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light')
  },[theme])
  return (
    <div className='min-h-screen p-4'>
      <Header theme={theme} setTheme={setTheme}/>
      <main className='mt-6'>
        <Home />
      </main>
    </div>
  )
}
