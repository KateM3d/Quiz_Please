import { useEffect, useState } from "react";
import useFetch from "./useFetch.jsx";
import CardInner from "./CardInner.jsx";
import { data } from "../data.js";

export default function Question() {
  const { get } = useFetch("https://opentdb.com/api.php?amount=10&category=");
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState();
  const [categoryQuestion, setCategoryQuestion] = useState();
  const [globalCategory, setGlobalCategory] = useState();
  const [options, setOptions] = useState();
  const [correct, setCorrect] = useState();

  useEffect(() => {
    get("22")
      .then((data) => {
        console.log(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

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
      <h2 className="header">Category: {globalCategory}</h2>
      <h2 className="header">Question {count} out of 10</h2>
      <CardInner options={options} />
      <div className="container_question">
        <button
          className={`btn ${disabled === "disabled" ? "disabled" : ""}`}
          disabled={disabled}
          onClick={handleCountIncrease}
        >
          Next
        </button>
        <h2 className="container_question_points">Points: </h2>
      </div>
    </>
  );
}
