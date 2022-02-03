// import { useContext } from "react";
// import { APIContext } from "../context/ApiContext";
import { useState } from "react";

export default function CardInner(props) {
  console.log(props);
  // const { categoryQuestion, options, correct, setCorrect } =
  //   useContext(APIContext);

  //   const shuffle = (opt) => {
  //     let i = 0;
  //     let j = 0;
  //     let temp = 0;
  //
  //     for (i = opt.length - 1; i > 0; i -= 1) {
  //       j = Math.floor(Math.random() * (i + 1));
  //       temp = opt[i];
  //       opt[i] = opt[j];
  //       opt[j] = temp;
  //     }
  //   };
  //   shuffle(props.options);

  // const handleSelectedClick = (e, el, index) => {
  //   e.preventDefault();
  //   console.log(el);
  //   props.setSelected(el);
  // };
  return (
    <div className="container_question">
      <h2 className="container_question_text">{props.categoryQuestion}</h2>
      <div className="container_question_answers">
        {/* {props.options.map((el, index) => {
          return (
            <p
              key={index}
              className={`container_question_answers_option`}
              options={el}
            >
              {el}
            </p>
          );
        })} */}
      </div>
    </div>
  );
}
