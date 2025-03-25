import React from "react";
import { useLocation } from "react-router-dom";

function ShowResult({ score, questions ,handleRestart ,cardStyles}) {
  const location = useLocation()
  return (
    <div className="card shadow-lg p-4 text-center" style={cardStyles} >
      <h1 className="fw-bold text-primary">Final Result</h1>
      <h2>Email: {location.state?.email}</h2>
      <h2
        className={`fw-bold ${
          score > questions.length / 2 ? "text-success" : "text-danger"
        }`}
      >
        {score} out of {questions.length}
      </h2>
      <button className="btn btn-danger px-4 fw-bold" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
}

export default ShowResult;
