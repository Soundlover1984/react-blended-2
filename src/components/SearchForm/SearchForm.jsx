import { nanoid } from "nanoid";
import { useState } from "react";

import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { FormBtn, InputSearch, SearchFormStyled } from "./SearchForm.styled";

import { addTodo } from "redux/todoSlice";

export const SearchForm = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    setQuery(e.currentTarget.value);
  };

  // const addTodo = (text) => {
  // const todo = {
  //   id: nanoid(),
  //   text,
  //   };

  //   setTodos((prevTodos) => ({
  //     todos: [...prevTodos, todo],
  //   }));
  // };

  // const handleSubmit = (data) => {
  //   addTodo(data);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!query.trim()) {
      return;
    }

    const todo = {
      id: nanoid(),
      text: query,
    };

    dispatch(addTodo(todo));
    //   .then((todos) =>
    //   localStorage.setItem("todos", JSON.stringify(todos))
    // );

    setQuery("");
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );
};
