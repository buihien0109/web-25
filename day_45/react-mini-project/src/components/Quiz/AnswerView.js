import React from 'react'

function AnswerView({ answers, handlerClick }) {
    return (
        <div className="answer-section">
          {answers.map((answer, index) => (
            <button key={index} onClick={() => handlerClick(answer.correct)}>
              {answer.content}
            </button>
          ))}
        </div>
      );
}

export default AnswerView