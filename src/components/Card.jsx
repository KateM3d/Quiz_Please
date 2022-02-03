import { Link } from "react-router-dom";
import { useState } from "react";
import { data } from "../data.js";
import { useContext } from "react";
import { APIContext } from "../context/ApiContext";

export default function Card() {
  const {
    categoryQuestion,
    options,
    correct,
    setCorrect,
    categorySelected,
    setCategorySelected,
    getQuestionsData,
  } = useContext(APIContext);

  const [categories] = useState(data);

  const handleCategoryClick = (categoryName) => {
    switch (categoryName) {
      case "Geography":
        getQuestionsData("22");
        break;
      case "Sports":
        getQuestionsData("21");
        break;
      case "History":
        getQuestionsData("23");
        break;
      case "Art":
        getQuestionsData("25");
        break;
      case "Celebrities":
        getQuestionsData("26");
        break;
      case "Animals":
        getQuestionsData("27");
        break;
      case "Vehicles":
        getQuestionsData("28");
        break;

      case "General Knowledge":
        getQuestionsData("9");
        break;
      default:
        console.log(`Sorry, we are out of ${categoryName}.`);

        console.log(categoryName);
    }
  };

  return (
    <>
      <h2 className="header">Please select a category</h2>
      <div className="container_category">
        {categories.map((element) => {
          const { id, categoryName } = element;
          return (
            <Link to="/question" key={id}>
              <div
                className="container_category_card"
                onClick={() => handleCategoryClick(categoryName)}
              >
                <h2 className="container_category_card_name">{categoryName}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
