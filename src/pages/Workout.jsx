import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Workout() {
    const { id } = useParams();  // Get workout ID from URL params
    const [workout, setWorkout] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch workout details by ID
    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:4000/api/workouts/${id}`)  // Fetch the workout by ID
            .then((response) => {
                setWorkout(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching workout details:", error);
                setLoading(false);
            });
    }, [id]);  // Fetch workout when ID changes

    return (
        <div className="workout-container">
            {loading ? (
                <h3>Loading workout...</h3>
            ) : (
                <div>
                    {workout ? (
                        <div>
                            <h2>{workout.name}</h2>
                            <p>Power Up: {workout.powerUp}</p>
                            <h3>Exercises:</h3>
                            <ul>
                                {workout.exercises.map((exercise, index) => (
                                    <li key={index}>{exercise.exerciseName}</li>
                                ))}
                            </ul>
                            <button onClick={() => alert("Starting workout!")}>Start Workout</button>
                        </div>
                    ) : (
                        <h3>Workout not found</h3>
                    )}
                </div>
            )}
        </div>
    );
}
