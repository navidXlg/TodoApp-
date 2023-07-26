import SearchBar from "./componants/SearchBar";
import TodoList from "./componants/TodoList";
import useTodoContext from "./Hooks/useTodoContext";
import DropDown from "./componants/DropDown";


export default function App(){
  const {resetAllTodos, todo} = useTodoContext();

  // Handeling rest click btn
  const handelClick = () => {
    resetAllTodos()
  };


// Rember to change it 
  return <div className="flex items-center justify-center bg-zinc-100 min-h-screen w-full  text-xl  ">
          <div className="bg-zinc-200 border-spacing-1 border-slate-600 rounded-xl p-10 flex shadow-xl transition-all flex-col items-center justify-between relative">
            <h2>Todo App</h2>
            <SearchBar/>
            <DropDown/>
            <TodoList/>
            {todo.length > 0 ? <button onClick={handelClick} className="my-2">Clear</button> : "" } 
          </div>
        </div>
};
