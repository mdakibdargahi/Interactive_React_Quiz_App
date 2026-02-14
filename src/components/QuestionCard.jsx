import React, { useState, useEffect } from "react";
import { useQuiz } from "../hooks/useQuiz";

const QuestionCard = () => {
  const { questions, currentQuestionIndex, handleAnswer } = useQuiz();
  const currentQuestion = questions[currentQuestionIndex];

  // 1. Initialize state with a "lazy initializer" function
  // This runs only once when the component first mounts
  const [shuffledAnswers, setShuffledAnswers] = useState(() => {
    if (!currentQuestion) return [];
    return [
      ...currentQuestion.incorrect_answers,
      currentQuestion.correct_answer,
    ].sort(() => Math.random() - 0.5);
  });

  // 2. Synchronize state whenever the question changes
  useEffect(() => {
    // Define the async function
    const shuffleData = async () => {
      if (currentQuestion) {
        
        const answers = [
          ...currentQuestion.incorrect_answers,
          currentQuestion.correct_answer,
        ].sort(() => Math.random() - 0.5);

        setShuffledAnswers(answers);
      }
    };

    // Call the function
    shuffleData().catch(console.error); 
  }, [currentQuestion]); // Dependency ensures shuffle happens on new questions

  if (!currentQuestion) return null;

  return (
    <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-10">
      <p
        className="text-xl font-semibold mb-4"
        dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
      />
      <div className="space-y-3">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={`${currentQuestionIndex}-${index}`} 
            onClick={() => handleAnswer(answer)}
            className="w-full text-left p-3 border border-gray-300 rounded-md hover:bg-blue-500 hover:text-white transition duration-200"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
