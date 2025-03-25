import React, { useState, useEffect } from "react";
import "./app.css";
import { useLocation } from "react-router-dom";
import ShowResult from "./ShowResult";

import ShowQuestions from "./ShowQuestions";
import ShowAnswers from "./ShowAnswers";

function Quiz() {
  const location = useLocation();

  const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
      ],
    },
    {
      question: "What is the capital of Japan?",
      answers: [
        { text: "Seoul", correct: false },
        { text: "Beijing", correct: false },
        { text: "Tokyo", correct: true },
        { text: "Bangkok", correct: false },
      ],
    },
    {
      question: "What is the capital of Canada?",
      answers: [
        { text: "Toronto", correct: false },
        { text: "Vancouver", correct: false },
        { text: "Ottawa", correct: true },
        { text: "Montreal", correct: false },
      ],
    },
    {
      question: "What is the capital of Brazil?",
      answers: [
        { text: "Rio de Janeiro", correct: false },
        { text: "São Paulo", correct: false },
        { text: "Brasília", correct: true },
        { text: "Buenos Aires", correct: false },
      ],
    },
    {
      question: "What is the capital of Egypt?",
      answers: [
        { text: "Cairo", correct: true },
        { text: "Alexandria", correct: false },
        { text: "Giza", correct: false },
        { text: "Luxor", correct: false },
      ],
    },
    {
      question: "What is the capital of India?",
      answers: [
        { text: "Mumbai", correct: false },
        { text: "New Delhi", correct: true },
        { text: "Kolkata", correct: false },
        { text: "Bangalore", correct: false },
      ],
    },
    {
      question: "What is the capital of the United States?",
      answers: [
        { text: "New York", correct: false },
        { text: "Washington D.C.", correct: true },
        { text: "Los Angeles", correct: false },
        { text: "Chicago", correct: false },
      ],
    },
    {
      question: "What is the capital of Germany?",
      answers: [
        { text: "Frankfurt", correct: false },
        { text: "Berlin", correct: true },
        { text: "Munich", correct: false },
        { text: "Hamburg", correct: false },
      ],
    },
    {
      question: "What is the capital of Russia?",
      answers: [
        { text: "Saint Petersburg", correct: false },
        { text: "Moscow", correct: true },
        { text: "Kazan", correct: false },
        { text: "Novosibirsk", correct: false },
      ],
    },
    {
      question: "What is the capital of Australia?",
      answers: [
        { text: "Sydney", correct: false },
        { text: "Canberra", correct: true },
        { text: "Melbourne", correct: false },
        { text: "Brisbane", correct: false },
      ],
    },
  ];
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const [showAnswers, setShowAnswers] = useState(false);
  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    const savedQuestion = localStorage.getItem("currentQuestion");
    const savedScore = localStorage.getItem("score");
    const savedAnswers = localStorage.getItem("userAnswers");
  
    if (savedQuestion !== null) {
      setCurrentQuestion(parseInt(savedQuestion, 10));
    }
    if (savedScore !== null) {
      setScore(Number(savedScore));
    }
    if (savedAnswers !== null) {
      setUserAnswers(JSON.parse(savedAnswers));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("currentQuestion", currentQuestion);
    localStorage.setItem("score", score);
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [currentQuestion, score, userAnswers, darkMode]);
 
  const handletoggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleAnswer = (isCorrect, index) => {
    if (userAnswers[currentQuestion] !== null) return;

    if (isCorrect) setScore((prev) => prev + 1);

    setUserAnswers((prev) => {
      const updatedAnswers = [...prev];
      updatedAnswers[currentQuestion] = index;
      return updatedAnswers;
    });
  };
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };
  const handleFinishQuiz = () => {
    setShowAnswers(true);
  };
  const handleShowResult = () => {
    setShowAnswers(false); // إخفاء قائمة الإجابات
    setShowResult(true); // اظهار النتائج
  };
  const handleShowQuestion = () => {
    setShowResult(false); // إخفاء النتائج
    setShowAnswers(false); // إخفاء قائمة الإجابات
    setCurrentQuestion(0); // إعادة المستخدم إلى أول سؤال
  };
  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setShowAnswers(false);
    setUserAnswers(Array(questions.length).fill(null));
  };
  const appStyles = {
    backgroundColor: darkMode ? "#212529" : "#f8f9fa",
    color: darkMode ? "#f8f9fa" : "#212529",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
  };
  const cardStyles = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#000",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
    minWidth:"80%"
  };

  return (
    <div
      // className={`container text-center mt-4 `}
      style={appStyles}
    >
      <button
        className="btn btn-dark mode-toggle "
        onClick={handletoggleDarkMode}
      >
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
      <h1 className="title mt-3">Quiz App</h1>

      {showResult ? (
        <ShowResult
          score={score}
          questions={questions}
          handleRestart={handleRestart}
          cardStyles={cardStyles}
          userAnswers={userAnswers}
        />
      ) : showAnswers ? (
        <ShowAnswers
          questions={questions}
          userAnswers={userAnswers}
          handleShowResult={handleShowResult}
          handleShowQuestion={handleShowQuestion}
          cardStyles={cardStyles}
        />
      ) : (
        <ShowQuestions
          currentQuestion={currentQuestion}
          questions={questions}
          userAnswers={userAnswers}
          handlePrevQuestion={handlePrevQuestion}
          handleFinishQuiz={handleFinishQuiz}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer}
          cardStyles={cardStyles}
        />
      )}
    </div>
  );
}

export default Quiz;
