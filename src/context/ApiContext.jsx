import { useState, useEffect, createContext } from "react";
import useFetch from "../components/useFetch";

export const APIContext = createContext();

export function APIContextProvider({ children }) {
  const { get } = useFetch("https://opentdb.com/api.php?amount=10&category=");
  const [categoryQuestion, setCategoryQuestion] = useState([]);
  const [options, setOptions] = useState([]);

  function updateData(questionValue, optionsValue, correctValue) {
    setCategoryQuestion([...questionValue]);
    setOptions([...optionsValue]);
  }

  useEffect(() => {
    get("22")
      .then((data) => {
        console.log(data.results);
        const questionsArray = data.results.map((el) => el.question);
        const optionsArray = data.results.map((opt) => [
          ...opt.incorrect_answers,
          opt.correct_answer,
        ]);
        console.log(optionsArray);
        updateData(questionsArray, optionsArray);

        console.log(categoryQuestion);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <APIContext.Provider
      value={{
        categoryQuestion,
        options,
        setOptions,
        updateData,
        setCategoryQuestion,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}
