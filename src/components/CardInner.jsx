export default function CardInner(props) {
  return (
    <div className="container_question">
      <h2 className="container_question_text">question text</h2>
      <div className="container_question_answers">
        <p className="container_question_answers_option">{props.options}</p>
        <p className="container_question_answers_option">{props.options}</p>
        <p className="container_question_answers_option">{props.options}</p>
        <p className="container_question_answers_option">{props.options}</p>
      </div>
    </div>
  );
}
