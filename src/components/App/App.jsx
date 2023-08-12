import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from "components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "redux/todoSlice";
import { getTodos } from "redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos) {
      dispatch(addTodo(todos));
    }
  }, [dispatch]);

  // useEffect(() => {
  // localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // const addTodo = (text) => {
  //   const todo = {
  //     id: nanoid(),
  //     text,
  //   };

  //   setTodos((prevTodos) => ({
  //     todos: [...prevTodos, todo],
  //   }));
  // };

  // const handleSubmit = (data) => {
  //   addTodo(data);
  // };

  // const deleteTodo = (id) => {
  //   setTodos((prevTodos) => ({
  //     todos: prevTodos.filter((todo) => todo.id !== id),
  //   }));
  // };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo
                    id={todo.id}
                    text={todo.text}
                    counter={index + 1}
                    // onClick={deleteTodo}
                  />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
