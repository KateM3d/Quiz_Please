import { useState, useContext, useMemo } from "react";
import { APIContext } from "../context/ApiContext";

export default function Question() {
  const { getQuestionsData, categoryQuestion, options, correct } =
    useContext(APIContext);
  const [count, setCount] = useState(1);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const selectedArray = [...options];
  console.log(options);
  const shuffledOptions = useMemo(() => newOptions(options), [options]);

  const newOptions = () => {
    let i = 0;
    let j = 0;
    let temp = 0;
    for (i = selectedArray.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = selectedArray[i];
      selectedArray[i] = selectedArray[j];
      selectedArray[j] = temp;
    }
    return selectedArray;
  };
  console.log(newOptions);
  const handleCountIncrease = () => {
    if (count === 10) {
      setCount(10);
      setScore(score);

      alert(`Your score is ${score}/10`);
    } else {
      setCount((prevCount) => prevCount + 1);
      setQuestionCount((prevCount) => prevCount + 1);
      shuffledOptions();
    }
  };

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
          {selectedArray[questionCount]?.map((answer, i) => {
            return (
              <p
                key={i}
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
