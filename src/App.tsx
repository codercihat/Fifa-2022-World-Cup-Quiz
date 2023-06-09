import { useState } from "react";

import "./App.css";

export default function App() {
  const questions = [
    {
      question: "Which country won the 2022 world cup?",
      options: [
        { answerText: "France", isCorrect: false },
        { answerText: "Argentina", isCorrect: true },
        { answerText: "Morocco", isCorrect: false },
        { answerText: "Italy", isCorrect: false },
      ],
    },
    {
      question: "In which country was the 2022 World Cup located?",
      options: [
        { answerText: "Qatar", isCorrect: true },
        { answerText: "Dubai", isCorrect: false },
        { answerText: "China", isCorrect: false },
        { answerText: "Russia", isCorrect: false },
      ],
    },
    {
      question:
        "Which national team did Cristiano Ronaldo represent in the 2022 FIFA World Cup?",
      options: [
        { answerText: "Argentina", isCorrect: false },
        { answerText: "Brazil", isCorrect: false },
        { answerText: "Turkey", isCorrect: false },
        { answerText: "Portugal", isCorrect: true },
      ],
    },
    {
      question:
        "Which national team did Mbappe represent in the 2022 FIFA World Cup??",
      options: [
        { answerText: "France", isCorrect: true },
        { answerText: "Colombia", isCorrect: false },
        { answerText: "Peru", isCorrect: false },
        { answerText: "Persia", isCorrect: false },
      ],
    },
    {
      question: "Which country  play in the semi-finals 2022 world cup?",
      options: [
        { answerText: "Morocco", isCorrect: true },
        { answerText: "England", isCorrect: false },
        { answerText: "Wales", isCorrect: false },
        { answerText: "Italy", isCorrect: false },
      ],
    },
    {
      question: "Who was the top goal scorer in the FIFA World Cup 2022?",
      options: [
        { answerText: "Mbappe ", isCorrect: true },
        { answerText: "Messi", isCorrect: false },
        { answerText: "Lautrao Martinez", isCorrect: false },
        { answerText: "Karim Benzama", isCorrect: false },
      ],
    },
    {
      question: "Who was the top assist scorer in the FIFA World Cup 2022?",
      options: [
        { answerText: "Bruno Fernandes", isCorrect: true },
        { answerText: "Antonie Griezmann", isCorrect: false },
        { answerText: "Ivan Perisic", isCorrect: false },
        { answerText: "Hary Kane", isCorrect: false },
      ],
    },
    {
      question:
        "Which national team did Benzema represent in the 2022 FIFA World Cup?",
      options: [
        { answerText: "France", isCorrect: false },
        { answerText: "Morocco", isCorrect: false },
        { answerText: "Italy", isCorrect: false },
        { answerText: "He didnt join the tournament", isCorrect: true },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect === true) {
      setScore(score + 12.5);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
    score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">You scored {score} out of 100</div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((mu) => (
              <button onClick={() => handleNextQuestion(mu.isCorrect)}>
                {mu.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
