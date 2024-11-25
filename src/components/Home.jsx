import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
    const [workouts, setWorkouts] = useState([]);
    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState("Goku");
    const [loading, setLoading] = useState(true);

    // Fetch workouts based on selected character
    useEffect(() => {
        setLoading(true); 
        axios
            .get(`http://localhost:4000/api/workouts/`) // Get all workouts
            .then((response) => {
                // Filter workouts by selected character
                const filteredWorkouts = response.data.filter((workout) =>
                    workout.name.includes(selectedCharacter)
                );
                setWorkouts(filteredWorkouts); 
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching workouts:", error);
                setLoading(false); 
            });
    }, [selectedCharacter]); 

    // Handle character select
    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
    };

    // Handle workout select
    const handleWorkoutSelect = (workout) => {
        setSelectedWorkout(workout);
    };

    return (
        <div className="home-container">
            <h2>Welcome, Saiyan Warrior!</h2>
            <p>
                Ready to level up? Choose your character and intensity to begin training!
            </p>

            {/* Character Selection */}
            <div className="character-selection">
                <h3>Select a character:</h3>
                <button onClick={() => handleCharacterSelect("Goku")}>Goku</button>
                <button onClick={() => handleCharacterSelect("Vegeta")}>Vegeta</button>
                <button onClick={() => handleCharacterSelect("Gohan")}>Gohan</button>
            </div>

            {/* Loading */}
            {loading ? (
                <div>
                    <h3>Charging up your power level...</h3>
                    <p>Get ready for your training!</p>
                </div>
            ) : (
                <div>
                    {/* Display workouts for selected character */}
                    <h3>Select a workout:</h3>
                    {workouts.length > 0 ? (
                        <div className="workout-list">
                            {workouts.map((workout) => (
                                <button
                                    key={workout._id}
                                    onClick={() => handleWorkoutSelect(workout)}
                                >
                                    {workout.name}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="no-workouts-message">
                            <h3>No workouts available for this character yet!</h3>
                        </div>
                    )}
                </div>
            )}

            {/* Display selected workout */}
            {selectedWorkout && (
                <div className="selected-workout">
                    <h4>{selectedWorkout.name}</h4>
                    <p>Power Up: {selectedWorkout.powerUp}</p>
                    <div>
                        <h5>Exercises</h5>
                        <ul>
                            {selectedWorkout.exercises.map((exercise, index) => (
                                <li key={index}>{exercise.exerciseName}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
