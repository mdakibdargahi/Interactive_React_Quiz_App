🧠 Interactive React Quiz App
A sleek, modular quiz application built with React JS, Tailwind CSS, and the Open Trivia DB API. This project demonstrates advanced state management using the Context API with a strictly modular architecture and custom hooks.
🚀 Features
Modular Context API: Separate files for Context creation, Provider logic, and Custom Hooks.
Dynamic API Integration: Fetches fresh questions from the Open Trivia Database.
Zero Router Logic: Handles view switching (Loading -> Quiz -> Results) using conditional rendering and global state.
Safety Hooks: Includes a custom useQuiz hook with a provider check to prevent runtime errors.
Responsive UI: Styled with Tailwind CSS for a clean, modern experience.
🛠️ Project Structure
The project follows a clean, scalable folder structure:
text
src/
 ┣ components/
 ┃ ┗ QuizInterface.jsx    # UI Logic & View Controller
 ┣ context/
 ┃ ┣ QuizContext.jsx      # Context initialization
 ┃ ┗ QuizProvider.jsx     # Global state logic & API calls
 ┣ hooks/
 ┃ ┗ useQuiz.js           # Custom hook with safety checks
 ┣ App.jsx                # Entry point & Provider wrapper
 ┗ main.jsx
Use code with caution.

📦 Installation & Setup
Clone the repository:
bash
git clone https://github.com
Use code with caution.

Navigate to the directory:
bash
cd react-quiz-app
Use code with caution.

Install dependencies:
bash
npm install
Use code with caution.

Start the development server:
bash
npm run dev
Use code with caution.

🧩 How It Works
Context Creation: QuizContext.jsx exports a standard React context.
State Management: QuizProvider.jsx handles the fetch request, tracks the current question index, manages the score, and handles the "Restart" logic.
Consumption: The useQuiz hook is used in QuizInterface.jsx to access state without prop-drilling.
Styling: Utility classes from Tailwind handle the layout, hover effects, and typography.


📝 License
This project is open-source and available under the MIT License.



