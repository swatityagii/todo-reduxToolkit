// import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/todoSlice";
function TodoForm({ input, setInput, editTodoId, setEditTodoId }) {
  const dispatch = useDispatch();
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      if (editTodoId !== null) {
        dispatch(editTodo({ id: editTodoId, textEdit: input }));
        setEditTodoId(null);
      } else {
        dispatch(addTodo(input));
      }
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCancel = () => {
    setEditTodoId(null);
    setInput("");
  };

  return (
    <form className="flex flex-col gap-3 pt-2" onSubmit={handleAddTodo}>
      <input
        className="border rounded-md pl-2 h-8 hover:shadow-lg"
        placeholder="Your Todo..."
        type="text"
        onChange={handleChange}
        value={input}
      />
      {editTodoId !== null && input.trim() === "" && (
        <p className="text-red-500">
          {" "}
          *You cannot update the task to empty, Please enter some valid task.
        </p>
      )}
      <div>
        {editTodoId !== null ? (
          <div>
            <button className="pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md w-20 mr-4">
              Update
            </button>
            <button
              className="pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md w-20"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button className="pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md w-20">
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

export default TodoForm;
