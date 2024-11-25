import React from 'react'
import WorkoutList from '../components/WorkoutList';
import { useParams } from 'react-router-dom';

export default function Progress() {
    const { id } = useParams();
    
    return (
        <main>
            <h1>Progress Tracking & Motivation</h1>

        <div>
            <h1>Workouts</h1>
            <p>
                
            </p>
        </div>
        </main>
    );
}