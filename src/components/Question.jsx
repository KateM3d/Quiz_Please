export default function Question() {
  return (
    <>
      <h2 className="header">Category</h2>
      <div className="container_question">
        <h2 className="container_question_text">question text</h2>
        <div className="container_question_answers">
          <p className="container_question_answers_option">opt</p>
          <p className="container_question_answers_option">opt</p>
          <p className="container_question_answers_option">opt</p>
          <p className="container_question_answers_option">opt</p>
        </div>
      </div>
      <div className="container_question">
        <button className="btn">Next</button>
        <h2 className="container_question_points">Points: </h2>
      </div>
    </>
  );
}
