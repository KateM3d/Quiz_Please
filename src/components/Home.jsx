import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Home() {
  const handleReturnLater = () => {
    Swal.fire({
      title: "Come back later then!",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff",
    });
  };
  return (
    <div className="container_home">
      <h2 className="home_header">Quiz-Please</h2>

      <p className="home_header_text"> Welcome to the Quiz-Please game page!</p>
      <p className="home_header_text"> Ready to play?</p>

      <div className="container_question_answers">
        <Link to="/categories">
          <p className="container_question_answers_option">YES</p>
        </Link>
        <p
          className="container_question_answers_option"
          onClick={handleReturnLater}
        >
          NO
        </p>
      </div>
    </div>
  );
}
