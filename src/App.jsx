import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Books from './components/Books'
import BookDetails from './components/BookDetails'
import Quotes from './components/Quotes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">        
        <Navigation />
        <h1>Seuss Treasury</h1>
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/quotes" element={<Quotes />} />
          
        </Routes>
      </div>
    </Router>
  )
  
}

export default App
