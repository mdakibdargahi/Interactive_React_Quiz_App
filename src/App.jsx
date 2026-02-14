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
   <div className="min-h-screen bg-linear-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">
  {/* Background subtle pattern or animation */}
  <div className="absolute inset-0 opacity-20 pointer-events-none">
    <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPjxwYXR0aCBkPSJNMCA1SDVNMCAwTDUgNU0wIDVMMCAwTTUgMEw1IDUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9zdmc+')]"></div>
  </div>

  {/* Header */}
  <header className="w-full max-w-lg mb-8 text-center">
    <h1 className="text-4xl font-bold text-blue-800 drop-shadow-md animate-fade-in">
      Interactive Quiz Challenge 🧠
    </h1>
    <p className="text-lg text-gray-600 mt-2">Test your knowledge with fun trivia!</p>
  </header>

  {/* Main Content */}
  <main className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6 relative z-10 transform transition-all duration-500 hover:scale-105">
    {showResult ? <ResultScreen /> : <QuestionCard />}
  </main>

  {/* Footer */}
  <footer className="w-full max-w-lg mt-8 text-center text-sm text-gray-500">
    <p>Powered by Open Trivia DB | Built with React & Tailwind CSS</p>
    <p className="mt-2">© 2026 Md Akib Dargahi</p>
  </footer>
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
