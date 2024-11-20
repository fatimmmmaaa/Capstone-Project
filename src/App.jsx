import {Routes, Route} from 'react-router-dom'




export default function App() {
  return (
    <main>
      <h1>Fitness</h1>

      <Routes>
        <Route path ="/" element={<HomePage />}/>
        
      </Routes>
    </main>
  )
}