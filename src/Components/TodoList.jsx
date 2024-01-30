import { useSelector, useDispatch } from "react-redux";
import { removeTodo, markTodoComplete } from "../redux/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function TodoList({ input, setInput, editTodoId, setEditTodoId }) {
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
  const handleEditClick = (todo) => {
    setEditTodoId(todo.id);
    setInput(todo.text);
  };

  const handleEditDelete = (todo) => {
    dispatch(removeTodo(todo.id));
    setEditTodoId(null);
    setInput("");
  };

  return (
    <>
      {todos.length > 0 && (
        <div className="mt-2 text-white">
          <button
            className="pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md mr-2 mb-3 bg-sky-500"
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className="pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md mr-2 mb-3 bg-green-500"
            onClick={() => setFilter("Completed")}
          >
            Completed
          </button>
          <button
            className="pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md mr-2 mb-3 bg-red-500  "
            onClick={() => setFilter("InComplete")}
          >
            InComplete
          </button>
        </div>
      )}
      <div className="flex flex-col w-full pt-3 pb-3 gap-3 h-44 overflow-auto ">
        {filteredTodos().map((todo) => (
          <div
            key={todo.id}
            className={`border rounded-md p-1 w-full  flex items-center justify-between ${
              todo.id !== editTodoId
                ? "border-slate-300"
                : "border-sky-500 border-2"
            }`}
          >
            <div className="flex overflow-auto ">
              <input
                type="checkbox"
                className="mr-2 cursor-pointer "
                onChange={() => handleCheckboxChange(todo.id)}
                checked={todo.completed}
              />
              {editTodoId === todo.id ? (
                <input
                  type="text"
                  className="mr-2 "
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              ) : (
                <spanv>{todo.text}</spanv>
              )}
            </div>
            <div className="flex gap-3 text-white">
              {todo.completed ? (
                <span className="bg-green-500 ml-1 pl-1 pr-1 text-sm">
                  Complete
                </span>
              ) : (
                <span className="bg-red-500 ml-1 pl-1 pr-1  text-sm">
                  InComplete
                </span>
              )}

              <FontAwesomeIcon
                icon={faPencilAlt}
                className="text-sky-500 cursor-pointer"
                onClick={() => handleEditClick(todo)}
              />
              <FontAwesomeIcon
                icon={faTrash}
                className="text-red-500 cursor-pointer"
                // onClick={() => dispatch(removeTodo(todo.id))}
                onClick={() => handleEditDelete(todo)}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
