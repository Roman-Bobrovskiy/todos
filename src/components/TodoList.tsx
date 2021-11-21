import React from "react";
import { ITodo } from "./interfaces";

type TodoListprops = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove(id: number): void;
};

export const TodoList: React.FC<TodoListprops> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  const removeHendler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.length === 0 && <p className="center">No tasks</p>}
      {todos.map((todo) => {
        const classes = ["todo"];

        todo.completed && classes.push("completed");

        return (
          <li key={todo.id} className={classes.join("  ")}>
            <label>
              <input
                onChange={onToggle.bind(null, todo.id)}
                type="checkbox"
                checked={todo.completed}
              />
              <span>{todo.title}</span>
              <i
                onClick={(event) => removeHendler(event, todo.id)}
                className="material-icons red-text"
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
