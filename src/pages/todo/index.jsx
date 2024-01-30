// import { useSelector } from "react-redux";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [editTodoId, setEditTodoId] = useState(null);
  return (
    <>
      <div className="md:pl-[140px] md:pr-[140px] sm:pl-[80px] sm:pr-[80px] pl-[20px] pr-[20px] pt-20 pb-20">
        <h2 className="text-3xl mb-3">Todo App</h2>

        <h4 className=" w-full font-semibold">Todo</h4>
        <TodoForm
          input={input}
          setInput={setInput}
          editTodoId={editTodoId}
          setEditTodoId={setEditTodoId}
        />

        <TodoList
          input={input}
          setInput={setInput}
          editTodoId={editTodoId}
          setEditTodoId={setEditTodoId}
        />
      </div>
    </>
  );
}
export default Todo;
