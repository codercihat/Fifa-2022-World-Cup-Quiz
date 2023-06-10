import { useState } from "react";

import "./App.css";

export default function App() {
  const questions = [
    {
      question: "Which country won the 2022 world cup?",
      options: [
        { id:0,answerText: "France", isCorrect: false },
        { id:1,answerText: "Argentina", isCorrect: true },
        { id:3,answerText: "Morocco", isCorrect: false },
        { id:4,answerText: "Italy", isCorrect: false },
      ],
    },
    {
      question: "In which country was the 2022 World Cup located?",
      options: [
        { id:5,answerText: "Qatar", isCorrect: true },
        { id:6,answerText: "Dubai", isCorrect: false },
        { id:7,answerText: "China", isCorrect: false },
        { id:8,answerText: "Russia", isCorrect: false },
      ],
    },
    {
      question:
        "Which national team did Cristiano Ronaldo represent in the 2022 FIFA World Cup?",
      options: [
        { id:9,answerText: "Argentina", isCorrect: false },
        { id:10,answerText: "Brazil", isCorrect: false },
        { id:11,answerText: "Turkey", isCorrect: false },
        { id:12,answerText: "Portugal", isCorrect: true },
      ],
    },
    {
      question:
        "Which national team did Mbappe represent in the 2022 FIFA World Cup??",
      options: [
        { id:13,answerText: "France", isCorrect: true },
        { id:14,answerText: "Colombia", isCorrect: false },
        { id:15,answerText: "Peru", isCorrect: false },
        { id:16,answerText: "Persia", isCorrect: false },
      ],
    },
    {
      question: "Which country  play in the semi-finals 2022 world cup?",
      options: [
        { id:17,answerText: "Morocco", isCorrect: true },
        { id:18,answerText: "England", isCorrect: false },
        { id:19,answerText: "Wales", isCorrect: false },
        { id:20,answerText: "Italy", isCorrect: false },
      ],
    },
    {
      question: "Who was the top goal scorer in the FIFA World Cup 2022?",
      options: [
        { id:21,answerText: "Mbappe ", isCorrect: true },
        { id:22,answerText: "Messi", isCorrect: false },
        { id:23,answerText: "Lautrao Martinez", isCorrect: false },
        { id:24,answerText: "Karim Benzama", isCorrect: false },
      ],
    },
    {
      question: "Who was the top assist scorer in the FIFA World Cup 2022?",
      options: [
        { id:25,answerText: "Bruno Fernandes", isCorrect: true },
        { id:26,answerText: "Antonie Griezmann", isCorrect: false },
        { id:27,answerText: "Ivan Perisic", isCorrect: false },
        { id:28,answerText: "Hary Kane", isCorrect: false },
      ],
    },
    {
      question:
        "Which national team did Benzema represent in the 2022 FIFA World Cup?",
      options: [
        { id:29,answerText: "France", isCorrect: false },
        { id:30,answerText: "Morocco", isCorrect: false },
        { id:31,answerText: "Italy", isCorrect: false },
        { id:32,answerText: "He didnt join the tournament", isCorrect: true },
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
              <button key={mu.id} onClick={() => handleNextQuestion(mu.isCorrect)}>
                {mu.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
