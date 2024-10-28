import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './Pages/Home'
import './App.css'
import Footer from './components/Footer/Footer'
import Blog from './Pages/Blog'
import News from './Pages/news'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog/:id" element={<Blog />}/>
        <Route path="/news" element={<News />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
