import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import News from './components/News'
import Results from './components/Results'
import Tables from './components/Tables'
import Analysis from './components/Analysis'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="app">
      <Header />
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero />
          <News />
          <Results />
        </>
      )}
      
      {currentPage === 'resultados' && <Results fullPage={true} />}
      {currentPage === 'tabelas' && <Tables />}
      {currentPage === 'analises' && <Analysis />}
      
      <Footer />
    </div>
  )
}

export default App
