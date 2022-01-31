import { useState, useEffect, createContext } from "react";
import useFetch from "../components/useFetch";

export const APIContext = createContext();

export const questionId = {
  geography: 22,
  sports: 21,
  history: 23,
  art: 25,
  celebrities: 26,
  animals: 27,
  vehicles: 28,
  generalKnowledge: 9,
};
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

  useEffect(() => {
    get(categorySelected)
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
  }, [categorySelected]);
  console.log(correct);
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
      }}
    >
      {children}
    </APIContext.Provider>
  );
}
