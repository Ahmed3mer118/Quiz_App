import React from "react";

function ShowQuestions({
  currentQuestion,
  questions,
  userAnswers,
  handlePrevQuestion,
  handleFinishQuiz,
  handleNextQuestion,
  handleAnswer,
  cardStyles
}) {
  return (
    <div className="card shadow-lg p-4 mt-4 mb-3 text-center w-80 ms-2 me-2" style={cardStyles}>
      <h2 className="fw-bold text-primary">
        Question {currentQuestion + 1} of {questions.length}
      </h2>
      <h3 className="mt-4">{questions[currentQuestion].question}</h3>

      <div className="container mt-3">
        <div className="row g-2">
          {questions[currentQuestion].answers.map((option, index) => (
            <div key={index} className="col-12 col-sm-6">
              <button
                className={`btn w-100 p-2 fw-bold ${
                  userAnswers[currentQuestion] === index
                    ? "btn-primary text-white"
                    : "btn-outline-primary"
                }`}
                onClick={() => handleAnswer(option.correct, index)}
                disabled={userAnswers[currentQuestion] !== null}
              >
                {index + 1} - {option.text}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 d-flex justify-content-between">
        <button
          className="btn btn-secondary mx-2"
          onClick={handlePrevQuestion}
          disabled={currentQuestion === 0}
        >
          Prev
        </button>

        {currentQuestion === questions.length - 1 ? (
          <button className="btn btn-success mx-2" onClick={handleFinishQuiz}>
            Finish
          </button>
        ) : (
          <button className="btn btn-success mx-2" onClick={handleNextQuestion}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default ShowQuestions;
