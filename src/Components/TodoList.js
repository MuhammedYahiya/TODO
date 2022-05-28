import React from "react";
import Todo from "./Todo";

function TodoList({ todo,setTodo }) {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todo.map((todos) => (
            <Todo
              todo={todo}
              setTodo={setTodo}
              todos={todos}
              key={todos.id}
              text={todos.text}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
