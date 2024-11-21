import React, { useState, useEffect } from "react"; 
import axios from "axios";

export default function Home() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    // Fetch characters
    useEffect(() => {
        axios
            .get("https://dragonball-api.com/api/characters")
            .then((response) => {
                setCharacters(response.data); 
                setLoading(false); 
            })
            .catch((error) => {
                console.error("Error fetching characters:", error);
                setLoading(false); 
            });
    }, []);

    // Handle character
    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
    };

    return (
        <div className="home-container">
            {/* Intro section */}
                <h2>Welcome, Saiyan Warrior!</h2>
                <p>
                    Ready to level up? Train like Goku, Vegeta, and other Z warriors to push your limits and become the strongest version of yourself.
                </p>

            {/* Character selection */}
            <div className="character-selection">
                {loading ? (
                    <p>Loading characters...</p> // Show loading message while characters are being fetched
                ) :
                    <div>
                        <h3>Select your favorite character to train with:</h3>
                        {/* Display selected character's information */}
                        {selectedCharacter && (
                            <div>
                                <h4>You selected: {selectedCharacter.name}</h4>
                                <p>{selectedCharacter.description}</p>
                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    );
}
