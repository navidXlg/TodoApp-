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
  return <div>
            <h2>Todo App</h2>
            <SearchBar/>
            <TodoList/>
            {todo.length > 0 ? <button onClick={handelClick}>Clear</button> : "" } 
            <DropDown/>
        </div>
};
