import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ShowResult({
  score,
  questions,
  handleRestart,
  cardStyles,
  userAnswers,
}) {
 
  const location = useLocation();
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="card shadow-lg p-4 text-center" style={cardStyles}>
      <h1 className="fw-bold text-primary">Final Result</h1>
      <h2>Email: {location.state?.email}</h2>
      <h2
        className={`fw-bold ${
          score > questions.length / 2 ? "text-success" : "text-danger"
        }`}
      >
        {score} out of {questions.length}
      </h2>

      {/* زر إظهار الإجابات إذا كان المستخدم حصل على أكثر من نصف الدرجة */}
      <div className="mt-3 d-flex justify-content-between flex-wrap">

      {score > questions.length / 2 && (
        <button
          className="btn btn-success px-4 fw-bold mt-3 ms-3"
          onClick={() => setShowAnswers(!showAnswers)}
        >
          {showAnswers ? "Hide Answers" : "Show Correct Answers"}
        </button>
      )}
         <button
        className="btn btn-danger px-4 fw-bold mt-3 ms-3"
        onClick={handleRestart}
      >
        Restart
      </button>
      </div>

      {showAnswers && (
        <ul className="list-group mt-3"  style={cardStyles}>
          {questions.map((q,index) => {
            const correctAnswer =
              q.answers.find((ans) => ans.correct)?.text ||
              "No correct answer found";
            const userAnswer =
              userAnswers[index] !== null&&
              userAnswers[index] !== undefined &&
              q.answers[userAnswers[index]]
                ? q.answers[userAnswers[index]].text
                : "No answer selected ❌";

            return (
              <li key={index} className="list-group-item"    style={{
                backgroundColor: cardStyles.backgroundColor,
                color: cardStyles.color,
              }}>
                <strong>
                  Q{index + 1}: {q.question}
                </strong>
                <br />
                <span className="text-success">
                  ✅ Correct Answer: {correctAnswer}
                </span>
                <br />
                <span
                  className={`fw-bold ${
                    userAnswer === correctAnswer
                      ? "text-success"
                      : "text-danger"
                  }`}
                >
                  {userAnswer}
                </span>
              </li>
            );
   
          })}
        </ul>
      )}

    </div>
  );
}

export default ShowResult;
