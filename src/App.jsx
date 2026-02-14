import React from "react";
import QuizProvider from "./providers/QuizProvider";
import { useQuiz } from "./hooks/useQuiz";
import QuestionCard from "./components/QuestionCard";
import ResultScreen from "./components/ResultScreen";
import "./App.css";

const AppContent = () => {
  const { loading, error, showResult } = useQuiz();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading questions...
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Error: {error}
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {showResult ? <ResultScreen /> : <QuestionCard />}
    </div>
  );
};

function App() {
  return (
    <QuizProvider>
      <AppContent />
    </QuizProvider>
  );
}

export default App;
