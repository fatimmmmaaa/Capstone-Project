import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import Progress from './pages/Progress';
import MentalTraining from './pages/MentalTraining';
import Events from './pages/Events';
import Workout from './pages/Workout';
import DietAndNutrition from './pages/DietAndNutrition';



export default function App() {
  return (
    <main>

      <NavBar />

      <Routes>
        <Route path ="/" element={<HomePage />}/>
        <Route path="/workout/:id" element={<Workout />} />
        <Route path="/dietandnutrition" element={<DietAndNutrition />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/mentaltraining" element={<MentalTraining />} />
        <Route path="/events" element={<Events />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </main>
  );
}