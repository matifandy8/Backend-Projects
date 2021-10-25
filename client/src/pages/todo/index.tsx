import React, { useEffect, useState } from "react";
import "./index.css";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../helpers/ApiTodo";
import AddTodo from "./addTodo";
import TodoItem from "./todoItem";

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[] | any>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = (): void => {
    getTodos()
      .then((response) => setTodos(response.data))
      .catch((err: Error) => console.log(err));
  };

  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault();
    console.log(formData);
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not saved");
        }
        setTodos(data.todos);
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateTodo = (todo: ITodo): void => {
    updateTodo(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated");
        }
        setTodos(data.todos);
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteTodo = (_id: string): void => {
    deleteTodo(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted");
        }
        setTodos(data.todos);
        fetchTodos();
      })
      .catch((err) => console.log(err));
  };

  console.log(todos);

  return (
    <div className="todos">
      <h1>My Todos</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos?.length === 0 ? (
        <div className="empty">
          <h1>No todos</h1>
        </div>
      ) : (
        <div>
          {todos?.map((todo: ITodo) => (
            <TodoItem
              key={todo._id}
              updateTodo={handleUpdateTodo}
              deleteTodo={handleDeleteTodo}
              todo={todo}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Todo;
