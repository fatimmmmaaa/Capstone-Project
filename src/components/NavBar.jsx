import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/workout">Workouts</Link></li> */}
            <li><Link to="/dietandnutrition"> Diet & Nutrition</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/mentaltraining">Mental Training</Link></li>
            <li><Link to="/events">Events</Link></li>

            </ul>
        </nav>
    );
}