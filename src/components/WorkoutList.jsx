import React, { useState, useEffect } from 'react';
import axios from 'axios';

// component to fetch and display workouts
function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  // Fetch the list of workouts from the API 
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get('/api/workouts');
        setWorkouts(response.data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };
    
    fetchWorkouts();
  }, []); 

  return (
    <div>
      <h1>Workouts</h1>
      <ul>
        {workouts.length === 0 ? (
          <p>No workouts available</p>
        ) : (
          workouts.map(workout => (
            <li key={workout._id}>{workout.name}</li> // Display the workout name
          ))
        )}
      </ul>
    </div>
  );
}

export default WorkoutList;
