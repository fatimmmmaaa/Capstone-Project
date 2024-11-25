import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [workouts, setWorkouts] = useState(null);
    const [selectedCharacter, setSelectedCharacter] = useState("Goku");
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch workouts based on selected character
    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:4000/api/workouts/${selectedCharacter}`)
            .then((response) => {
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

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
    };

    const handleWorkoutSelect = (workout) => {
        navigate(`/workouts/${workout._id}`);
    };

    return (
        <div className="home-container">
            <h2>Welcome, Saiyan Warrior!</h2>
            <p>Ready to level up? Choose your character and intensity to begin training!</p>

            <div className="character-selection">
                <h3>Select a character:</h3>
                <button onClick={() => handleCharacterSelect("Goku")}>Goku</button>
                <button onClick={() => handleCharacterSelect("Vegeta")}>Vegeta</button>
                <button onClick={() => handleCharacterSelect("Gohan")}>Gohan</button>
            </div>

            {loading ? (
                <div>
                    <h3>Charging up your power level...</h3>
                    <p>Get ready for your training!</p>
                </div>
            ) : (
                <div>
                    <h3>Select a workout:</h3>
                    {workouts && workouts.length > 0 ? (
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
        </div>
    );
}
