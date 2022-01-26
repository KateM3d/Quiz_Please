import { useState } from "react";
import CardInner from "./CardInner.jsx";

export default function Question(props) {
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState();

  const handleCountIncrease = () => {
    if (count === 10) {
      setDisabled("disabled");
      setCount(10);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <h2 className="header">Question {count} out of 10</h2>
      <CardInner options={props.options} questionText={props.questionText} />
      <div className="container_question">
        <button
          className={`btn ${disabled === "disabled" ? "disabled" : ""}`}
          disabled={disabled}
          onClick={handleCountIncrease}
        >
          Next
        </button>
        <h2 className="container_question_points">Score: </h2>
      </div>
    </>
  );
}
