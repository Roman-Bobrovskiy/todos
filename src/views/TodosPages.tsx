import React, { useState, useEffect } from "react";
import { ITodo } from "../components/interfaces";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

declare var confirm: (boolean: string) => boolean;

export const TodosPages: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        todo.completed = todo.id === id && !todo.completed;
        return todo;
      })
    );
  };

  const removeHendler = (id: number) => {
    const shoudRemove = confirm("Please confirm");
    shoudRemove && setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onRemove={removeHendler}
        onToggle={toggleHandler}
      />
    </>
  );
};
