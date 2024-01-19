// import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
function TodoForm({input,setInput}) {
  // const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
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

      <button className="pl-3 pr-3 pt-1 pb-1 text-md border rounded-md hover:shadow-md w-20">
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
