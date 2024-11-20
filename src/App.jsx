import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'




export default function App() {
  return (
    <main>
      <h1>Fitness</h1>

      <NavBar />

      <Routes>
        <Route path ="/" element={<HomePage />}/>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  )
}