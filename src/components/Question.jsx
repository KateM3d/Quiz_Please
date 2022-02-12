import { useEffect } from "react";
import { useState, useContext } from "react";
import { APIContext } from "../context/ApiContext";

export default function Question() {
  const { getQuestionsData, categoryQuestion, options, correct } =
    useContext(APIContext);
  const [count, setCount] = useState(1);

  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);

  const handleCountIncrease = () => {
    if (count === 10) {
      setCount(10);
      setScore(score);

      alert(`Your score is ${score}/10`);
    } else {
      setCount((prevCount) => prevCount + 1);
      setQuestionCount((prevCount) => prevCount + 1);
    }
  };
  const selectedArray = [...options];

  const handleAnswerCheck = ({ answer }) => {
    const selectedAnswer = { answer };
    const answerCheck = correct.includes(selectedAnswer?.answer);
    answerCheck && setScore((prevScore) => prevScore + 1);
    handleCountIncrease();
  };
  return (
    <>
      <h2 className="header">Question {count} out of 10</h2>
      <div className="container_question">
        <h2 className="container_question_text">
          {categoryQuestion[questionCount]}
        </h2>
        <div className="container_question_answers">
          {selectedArray[questionCount]?.map((answer) => {
            return (
              <p
                key={answer}
                onClick={() => handleAnswerCheck({ answer })}
                className="container_question_answers_option"
              >
                {answer}
              </p>
            );
          })}
        </div>
      </div>
      <div className="container_question">
        <h2 className="container_question_points">Score: {score}</h2>
      </div>
    </>
  );
}
