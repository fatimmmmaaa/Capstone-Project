import React, { useState, useEffect } from "react"
import Home from "../components/Home"


export default function HomePage() {
    const dbzQuotes = [
        "Welcome to Your Saiyan Journey! – Tap into the DBZ theme of training and growth, inviting users to level up like a Saiyan.",
        "Unleash Your Inner Super Saiyan! – The journey to becoming stronger begins now.",
        "Train like Goku and reach your ultimate potential. – Break through your limits.",
        "Ready to push your limits? Become the strongest version of yourself.",
        "Power comes in response to a need, not a desire. You have to create that need. — Goku",
        "The more you use your power, the more it grows. — Vegeta",
        "It’s not about being the best. It’s about being better than you were yesterday. — Goku",
        "You’re the one who has to make the choice! What do you want to be? — Trunks",
        "Whatever you do, don’t ever give up. Don’t ever stop fighting. — Goku",
        "If you don’t try, you’ll never succeed. — Master Roshi",
        "You can always get stronger. Don’t hold back! — Goku",
        "You’re stronger than you think you are. — Goku",
        "Only the strong survive. But even the weak can become strong if they are willing to try. — Vegeta",
        "It’s not about winning. It’s about doing your best and pushing yourself beyond your limits. — Piccolo",
        "No matter how many times you fall, you can always stand back up. — Vegeta",
        "If you think you’re weak, you’ll always be weak. You must believe in yourself. — Frieza",
        "Stronger than yesterday, that’s all that matters. — Goku",
        "You can’t fight fate, but you can fight for your future! — Vegeta"
    ];


// state the random quote 
const [quote, setQuote] = useState("");

//function to get random quote 
const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * dbzQuotes.length);
    setQuote(dbzQuotes[randomIndex]);
  };

  useEffect(() => {
    getRandomQuote(); //get random quote
  }, []);


  return (
    <main>
        <h1>Welcome to Your Saiyan Journey!</h1>
        <p className="quote">{quote}</p>
        <Home />
    </main>
);
}