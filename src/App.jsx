import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
function App() {
  return (
    <>
      <div className="md:pl-[140px] md:pr-[140px] sm:pl-[80px] sm:pr-[80px] pl-[20px] pr-[20px] pt-20 pb-20">
        <h2 className="text-3xl mb-3">Todo App</h2>

        <h4 className=" w-full font-semibold">Todo</h4>
        <TodoForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;
