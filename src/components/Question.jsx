import { useState, useContext } from "react";
import { APIContext } from "../context/ApiContext";

export default function Question({}) {
  const { categoryQuestion, options, correct } = useContext(APIContext);
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState();
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);

  const handleCountIncrease = () => {
    if (count === 10) {
      setDisabled("disabled");
      setCount(10);
    } else {
      setCount((prevCount) => prevCount + 1);
      setQuestionCount((prevCount) => prevCount + 1);
      // if (correct === selected) {
      setScore((prevScore) => prevScore + 1);
      // }
    }
  };
  const selectedArray = [...options];

  const handleAnswerCheck = ({ answer }) => {
    console.log(correct);
    const selectedAnswer = { answer };
    console.log(selectedAnswer);
    console.log(selectedArray[questionCount]);
    const answerCheck = correct.includes(selectedAnswer.answer);
    console.log(answerCheck);
    if (answerCheck) {
      const correctSelected = [selectedAnswer.answer];
      console.log(correctSelected);
    }
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
        <button
          className={`btn ${disabled === "disabled" ? "disabled" : ""}`}
          disabled={disabled}
          onClick={handleCountIncrease}
        >
          Next
        </button>
        <h2 className="container_question_points">Score: {score}</h2>
      </div>
    </>
  );
}
