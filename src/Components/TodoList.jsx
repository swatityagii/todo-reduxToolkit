import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../todo/todoSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col w-full pt-3 pb-3 gap-3 h-60 overflow-y-auto ">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className={
              "border rounded-md p-1 w-full  flex items-center justify-between"
            }
          >
            <div className="flex ">
              <input type="checkbox" className="mr-2 cursor-pointer " />
              <span>{todo.text}</span>
            </div>
            <div className="flex gap-3">
              <FontAwesomeIcon icon={faPencilAlt} className="text-sky-500" />

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
