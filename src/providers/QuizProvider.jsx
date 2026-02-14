import React, { useEffect, useState, useCallback, useRef } from "react";
import { QuizContext } from "../context/QuizContext";

const QuizProvider = ({ children }) => {
  // Use useRef so the object persists across renders and doesn't trigger useEffect
  const isMounted = useRef(true);

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/api.php?amount=10&type=multiple");
      if (response.status === 429)
        throw new Error("Rate limit exceeded. Wait 5s.");
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      // Only update if the component hasn't been unmounted
      if (isMounted.current) {
        setQuestions(data.results);
      }
    } catch (error) {
      if (isMounted.current) {
        setError(error.message);
      }
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;
    fetchQuestions();

    return () => {
      isMounted.current = false; // Cleanup on unmount
    };
  }, [fetchQuestions]);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore((prev) => prev + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setTimeout(fetchQuestions, 0); // Wait 5s to respect rate limit
  };

  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        score,
        showResult,
        loading,
        error,
        handleAnswer,
        restartQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
