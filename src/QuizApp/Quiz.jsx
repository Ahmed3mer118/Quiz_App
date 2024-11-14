import React, { useState } from "react";
import "./app.css";
import { useLocation, useNavigate } from "react-router-dom";

function Quiz() {
  const [showQuestion, setShowQuestion] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([
    {
      question: "Which is the larget animal in the world?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Blue white", correct: true },
        { text: "Elephent", correct: false },
        { text: "Lion", correct: false },
      ],
    },
    {
      question: "Which is the smallest country in the world?",
      answers: [
        { text: "Vaticon city", correct: true },
        { text: "Bhutan", correct: false },
        { text: "Nepal", correct: false },
        { text: "shir lanka", correct: false },
      ],
    },
    {
      question: "Which is the smallest continent in the world?",
      answers: [
        { text: "Asia", correct: false },
        { text: " Asutralia", correct: true },
        { text: "Africa", correct: false },
        { text: "Arctic", correct: false },
      ],
    },
  ]);
  let [userAnwers, setUserAnwers] = useState(
    false || Array(questions.length).fill(null)
  );

  const handleCurrect = (current) => {
    setTimeout(() => {
      // console.log(current);
      if (current) {
        setScore(score + 1);
      }
      setUserAnwers((prev) => {
        const updateAnwers = [...prev];
        updateAnwers[currentQuestion] = current;
        return updateAnwers;
      });
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowQuestion(true);
      }
      setLoading(false);
    }, 1500);
    setLoading(true);
  };

  const handleSuccess = () => {
    setLoading(true);
    setShowAnswers(false);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  const handleShowAnswers = () => {
    setShowAnswers(true);
    setUserAnwers(userAnwers);
  };
  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowQuestion(false);
  };
  return (
    <div className="quiz container text-center  mt-4">
      <h1 className="title"> Quiz App </h1>
      <div>
        {showQuestion ? (
          <>
            <div className="final ">
              <h1>Final result</h1>
              <h2>Email : {location.state.email}</h2>
              <h2
                className={
                  score <= score / score.length ? "text-danger" : "text-success"
                }
              >
                {score} out of 3
              </h2>

              {score > score / 2 ? (
                <>
                  <button
                    className="btn btn-success m-1"
                    onClick={handleSuccess}
                  >
                    Finish
                  </button>
                  <button
                    className="btn btn-success m-1"
                    onClick={handleShowAnswers}
                  >
                    Show answer
                  </button>
                </>
              ) : (
                <button className="btn btn-danger" onClick={handleRestart}>
                  Restart
                </button>
              )}
              {/* {loading && <h1 className="text-center ">Loading...</h1>} */}
            </div>

            <div className="container mt-4">
              {showAnswers &&
                questions.map((question, index) => (
                  <div key={index} className="result-item">
                    <h1>
                      {index + 1}. {question.question}
                    </h1>
                    <div key={Math.random()}>
                      {question.answers.map((answer, ansindex) => {
                        const isUserAnswer =
                          userAnwers[index] === answer.correct;
                        const isCorrectAnswer = answer.correct;

                        let btnClass =
                          "btn btn-outline-secondary text-dark fw-bold w-100 m-2 p-2";

                        if (!isUserAnswer && !isCorrectAnswer) {
                          return (
                            <button className="btn border text-dark fw-bold w-100 m-2 p-2 ">
                              {answer.text}
                            </button>
                          );
                          // return null
                        } else if (isUserAnswer && !isCorrectAnswer) {
                          btnClass +=
                            "btn btn-danger text-dark fw-bold w-100 m-2 p-2 border"; // إجابة خاطئة
                        } else if (isCorrectAnswer) {
                          btnClass =
                            "btn btn-success text-light fw-bold w-100 m-2 p-2 border"; // إجابة صحيحة
                        }
                        return (
                          <button
                            key={ansindex}
                            className={btnClass}
                            disabled // تعطيل الزر عند عرض النتائج
                          >
                            {answer.text}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </>
        ) : (
          <>
            <h2>
              Question Number: {currentQuestion + 1} of {questions.length}
            </h2>
            <h1 className="mt-5">
              {currentQuestion + 1} - {questions[currentQuestion].question}
            </h1>
            {questions[currentQuestion].answers.map((option,index) => (
              <div key={index}>
                <button
                  className="btn btn-outline-secondary text-dark fw-bold w-100 m-2 p-2 "
                  onClick={() => handleCurrect(option.correct)}
                >
                  {option.text}
                </button>
              </div>
            ))}
          </>
        )}
        {loading && <h1 className="text-center">Loading...</h1>}
      </div>
    </div>
  );
}

export default Quiz;
