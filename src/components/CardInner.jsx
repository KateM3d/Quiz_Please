import { APIContext } from "../context/ApiContext";

export default function CardInner(props) {
  const shuffle = (opt) => {
    console.log(opt);
  };
  console.log(shuffle(props.options));

  console.log(props);
  return (
    <div className="container_question">
      <h2 className="container_question_text">{props.categoryQuestion}</h2>
      <div className="container_question_answers">
        <p
          className="container_question_answers_option"
          options={props.options}
        >
          {props.options}
        </p>
        <p
          className="container_question_answers_option"
          options={props.options}
        >
          {props.options}
        </p>
        <p
          className="container_question_answers_option"
          options={props.options}
        >
          {props.options}
        </p>
        <p
          className="container_question_answers_option"
          options={props.options}
        >
          {props.options}
        </p>
      </div>
    </div>
  );
}
