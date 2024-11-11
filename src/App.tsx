import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Creative from './pages/Creative' 

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Creative />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
