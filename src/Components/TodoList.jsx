import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo, markTodoComplete } from "../redux/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function TodoList({ input, setInput }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");

  const handleCheckboxChange = (id) => {
    dispatch(markTodoComplete({ id }));
  };

  const filteredTodos = () => {
    switch (filter) {
      case "Completed":
        return todos.filter((todo) => todo.completed);
      case "InComplete":
        return todos.filter((todo) => !todo.completed);
      case "All":
        return todos;
    }
  };

  return (
    <>
      {todos.length > 0 && (
        <div className="mt-2">
          <button
            className="pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md mr-2 mb-3"
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className="pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md mr-2 mb-3"
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>
          <button
            className="pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md mr-2 mb-3"
            onClick={() => setFilter("InComplete")}
          >
            InComplete
          </button>
        </div>
      )}
      <div className="flex flex-col w-full pt-3 pb-3 gap-3 h-60 overflow-y-auto ">
        {filteredTodos().map((todo) => (
          <div
            key={todo.id}
            className={
              "border rounded-md p-1 w-full  flex items-center justify-between"
            }
          >
            <div className="flex ">
              <input
                type="checkbox"
                className="mr-2 cursor-pointer "
                onChange={() => handleCheckboxChange(todo.id)}
                checked={todo.completed}
              />
              <span>{todo.text}</span>
            </div>
            <div className="flex gap-3 text-white">
              {todo.completed ? (
                <span className="bg-green-500 pl-1 pr-1 text-sm">Complete</span>
              ) : (
                <span className="bg-red-500 pl-1 pr-1 text-sm">Incomplete</span>
              )}

              <FontAwesomeIcon
                icon={faPencilAlt}
                className="text-sky-500"
                onClick={() => {
                  setInput(todo.text);
                  // dispatch(editTodo({ id: todo.id, textEdit: todo.text }));
                }}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="text-red-500"
                onClick={() => dispatch(removeTodo(todo.id))}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
