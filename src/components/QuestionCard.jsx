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
 <div className="p-8 bg-linear-to-br from-blue-50 to-white shadow-xl rounded-2xl max-w-lg mx-auto mt-10 border border-blue-200">
      {/* Header: Question info with icons */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">
          Question {currentQuestionIndex + 1} of {questions.length}
        </h2>
        <div className="flex justify-center items-center space-x-4 text-sm text-gray-600">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
            </svg>
            Category: {currentQuestion.category}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            Difficulty: {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
          </span>
        </div>
      </div>

      {/* Question Text */}
      <p
        className="text-xl font-semibold mb-6 text-gray-800"
        dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
      />

      {/* Answer Options */}
      <div className="space-y-4">
        {shuffledAnswers.map((answer, index) => (
          <button
            key={`${currentQuestionIndex}-${index}`}
            onClick={() => handleAnswer(answer)}
            className="w-full text-left p-4 bg-white border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white hover:shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>

      {/* Footer: Progress and Score */}
      <div className="mt-6 flex justify-between items-center text-sm text-gray-600">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        <span className="ml-4 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          
        </span>
      </div>
    </div>
  );
};

export default QuestionCard;
