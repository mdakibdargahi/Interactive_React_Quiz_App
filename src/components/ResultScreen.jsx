import React, { useState, useEffect } from "react";
import { useQuiz } from "../hooks/useQuiz";

const ResultScreen = () => {
  const { score, questions, restartQuiz } = useQuiz();
  const [cooldown, setCooldown] = useState(1); // Start with 1 second cooldown

  useEffect(() => {
    // If cooldown is active, decrement every second
    if (cooldown > 0) {
      const timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
      
      // Cleanup interval on unmount
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  const handleRestart = () => {
    if (cooldown === 0) {
      restartQuiz();
    }
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-10 text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-xl mb-6">
        Your Score: {score} out of {questions.length}
      </p>
      
      <button
        onClick={handleRestart}
        disabled={cooldown > 0}
        className={`px-4 py-2 rounded transition-colors font-semibold ${
          cooldown > 0 
            ? "bg-gray-400 cursor-not-allowed text-gray-200" 
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {cooldown > 0 ? `Restart in ${cooldown}s` : "Restart Quiz"}
      </button>
    </div>
  );
};

export default ResultScreen;
