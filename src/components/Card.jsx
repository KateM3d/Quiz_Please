import { useState } from "react";
import { data } from "./data.js";

export default function Card() {
  const [categories, setCategories] = useState(data);
  return (
    <>
      <h1 className="header">Please select the category</h1>
      <div className="container_category">
        {categories.map((element) => {
          const { id, categoryName } = element;
          return (
            <div key={id} className="container_category_card">
              <h2 className="container_category_card_name">{categoryName}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
