import CardInner from "./CardInner.jsx";

export default function Question() {
  return (
    <>
      <h2 className="header">Category:</h2>
      <h2 className="header">Question 1 out of length</h2>
      <CardInner />
      <div className="container_question">
        <button className="btn">Next</button>
        <h2 className="container_question_points">Points: </h2>
      </div>
    </>
  );
}
