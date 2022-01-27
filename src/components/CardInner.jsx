export default function CardInner(props) {
  const shuffle = (opt) => {
    console.log(opt);
  };
  console.log(shuffle(props.options));

  console.log(props.options[2]);
  return (
    <div className="container_question">
      <h2 className="container_question_text">{props.categoryQuestion}</h2>
      <div className="container_question_answers">
        <p
          className="container_question_answers_option"
          options={props.options[0]}
        >
          {props.options[0]}
        </p>
        <p
          className="container_question_answers_option"
          options={props.options[1]}
        >
          {props.options[1]}
        </p>
        <p
          className={`container_question_answers_option ${
            props.options[2] === undefined && "none"
          }`}
          options={props.options[2]}
        >
          {props.options[2]}
        </p>
        <p
          className={`container_question_answers_option ${
            props.options[2] === undefined && "none"
          }`}
          options={props.options[3]}
        >
          {props.options[3]}
        </p>
      </div>
    </div>
  );
}
