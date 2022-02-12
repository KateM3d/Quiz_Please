import { useState, createContext, useEffect } from "react";
import useFetch from "../components/useFetch";

export const APIContext = createContext();

export function APIContextProvider({ children }) {
  const { get } = useFetch("https://opentdb.com/api.php?amount=10&category=");
  const [categoryQuestion, setCategoryQuestion] = useState([]);
  const [options, setOptions] = useState([]);
  const [correct, setCorrect] = useState();
  const [categorySelected, setCategorySelected] = useState();
  function updateData(questionValue, optionsValue, correctValue) {
    setCategoryQuestion([...questionValue]);
    setOptions([...optionsValue]);
  }

  const getQuestionsData = (id) => {
    get(id)
      .then((data) => {
        console.log(data.results);
        const questionsArray = data.results.map((el) => el.question);
        const optionsArray = data.results.map((opt) => [
          ...opt.incorrect_answers,
          opt.correct_answer,
        ]);
        const correctAnsw = data.results.map((answ) => {
          return answ.correct_answer;
        });
        updateData(questionsArray, optionsArray);
        setCorrect(correctAnsw);
      })
      .catch((error) => console.log(error));
  };

  return (
    <APIContext.Provider
      value={{
        categoryQuestion,
        options,
        correct,
        categorySelected,
        setCategorySelected,
        setCorrect,
        setOptions,
        updateData,
        setCategoryQuestion,
        getQuestionsData,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}
