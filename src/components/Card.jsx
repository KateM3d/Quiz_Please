import { Link } from "react-router-dom";
import { useState } from "react";
import { data } from "../data.js";

export default function Card() {
  const [categories] = useState(data);

  const handleCategoryClick = (categoryName) => {
    console.log(categoryName);
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
