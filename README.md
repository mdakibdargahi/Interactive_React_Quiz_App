# Interactive React Quiz App 🧠
A modern, interactive quiz application built with React.js, leveraging the Context API for state management, Tailwind CSS for styling, and the Open Trivia Database API for dynamic questions. This project emphasizes a modular architecture with custom hooks, making it scalable and easy to maintain.

## 🚀 Features

- **Modular State Management**: Utilizes React's Context API with separate files for context creation, provider logic, and custom hooks to avoid prop drilling.
- **Dynamic Question Fetching**: Integrates with the Open Trivia Database API to load fresh multiple-choice questions on demand.
- **Seamless View Switching**: Manages transitions between loading, quiz, and results views using conditional rendering and global state—no routing library required.
- **Error-Safe Hooks**: Includes a custom `useQuiz` hook with built-in checks to ensure it's used within the provider, preventing runtime errors.
- **Responsive Design**: Fully responsive UI styled with Tailwind CSS for a clean, engaging user experience across devices.

## 🌐 Live Demo

Experience the app in action: [Live Demo](https://interactive-react-quiz-app.vercel.app/)

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **API**: Open Trivia Database (OpenTDB)
- **State Management**: React Context API & Custom Hooks
- **Build Tool**: Vite 

## 📂 Project Structure

Here's a overview of the project's organized folder structure for better scalability:

```
src/
├── components/
│   └── QuizInterface.jsx    # Handles UI logic and view rendering
├── context/
│   ├── QuizContext.jsx      # Defines the React Context
│   └── QuizProvider.jsx     # Manages global state, API fetches, and logic
├── hooks/
│   └── useQuiz.js           # Custom hook for safe context consumption
├── App.jsx                  # Main entry point and provider wrapper
└── main.jsx                 # Root rendering file
```

## 📦 Installation & Setup

Get the app running locally in just a few steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/interactive-react-quiz-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd interactive-react-quiz-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:5173` (default Vite port).

## 🧩 How It Works

- **Context Setup**: `QuizContext.jsx` creates the React context for sharing state.
- **Provider Logic**: `QuizProvider.jsx` fetches questions from the API, tracks the current question, score, and handles quiz restarts.
- **Hook Usage**: Components like `QuizInterface.jsx` use the `useQuiz` hook to access and update state seamlessly.
- **Styling & Interactivity**: Tailwind CSS classes manage layouts, buttons with hover effects, and responsive typography.

For more details, explore the source code or check the live demo.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the app, fix bugs, or add features:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Please ensure your code follows the project's style and includes tests where applicable.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Md Akib Dargahi](https://x.com/MdAkibDargahi1). If you have questions or feedback, feel free to reach out!