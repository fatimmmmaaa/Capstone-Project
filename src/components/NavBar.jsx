import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <ul>
            <Link to="/">Home</Link>
            <Link to="/workout">Workout</Link>
            <Link to="/dietandnutrition"> Diet & Nutrition</Link>
            <Link to="/progress">Progress Tracking & Motivation</Link>
            <Link to="/mentaltraining">Mental Training</Link>
            <Link to="/events">Events</Link>

            </ul>
        </nav>
    )
}