import React from "react";

function ShowAnswers({
  questions,
  userAnswers,
  handleShowResult,
  handleShowQuestion,
  cardStyles, // استلام التنسيق من المكون الأب
}) {
  return (
    <div className="card shadow-lg p-4 mb-3 text-center" style={cardStyles}>
      <h2 className="fw-bold text-primary">Your Answers</h2>
      <ul className="list-group">
        {questions.map((q, index) => (
          <li
            key={index}
            className="list-group-item"
            style={{
              backgroundColor: cardStyles.backgroundColor, // استخدام نفس التنسيق
              color: cardStyles.color,
            }}
          >
            <strong>Q{index + 1}: {q.question}</strong>
            <br />
            <span className={userAnswers[index] == null ? "text-danger" : "text-success"}>
              {userAnswers[index] !== null && q.answers[userAnswers[index]]
                ? `Your answer : ${q.answers[userAnswers[index]].text}`
                : "No answer selected ❌"}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 d-flex justify-content-between">
        <button className="btn btn-secondary mt-3" onClick={handleShowQuestion}>
          Back To Question
        </button>
        <button className="btn btn-success mt-3" onClick={handleShowResult}>
          Show Result
        </button>
      </div>
    </div>
  );
}

export default ShowAnswers;
