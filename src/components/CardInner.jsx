import { useEffect, useState } from "react";
import useFetch from "./useFetch.jsx";

export default function CardInner() {
  const { get } = useFetch("https://opentdb.com/api.php?amount=10&category=");
  const [questionCount, setQuestionCount] = useState(0);
  const [categoryQuestion, setCategoryQuestion] = useState("");
  const [options, setOptions] = useState("");

  useEffect(() => {
    get("22")
      .then((data) => {
        console.log(data.results);

        setCategoryQuestion(data.results[questionCount].question);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container_question">
      <h2 className="container_question_text" questionText={categoryQuestion}>
        {categoryQuestion}
      </h2>
      <div className="container_question_answers">
        <p className="container_question_answers_option" options={options}>
          opt1
        </p>
        {/* <p className="container_question_answers_option" options={options}>
          opt2
        </p>
        <p className="container_question_answers_option" options={options}>
          opt3
        </p>
        <p className="container_question_answers_option" options={options}>
          opt4
        </p> */}
      </div>
    </div>
  );
}
