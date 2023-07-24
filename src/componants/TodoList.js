import TodoItem from "./TodoItem";
import useTodoContext from "../Hooks/useTodoContext";
import { BsTrash} from "react-icons/bs";

export default function TodoList(){
    const {todo, todoStatusChange, deleteItem } = useTodoContext();

    // Handeling click event
    const handelClick = (item) => {
        todoStatusChange(item);
    };

    // Handeling deletiing item
    const handelClickDelete = (item) => {
        deleteItem(item);
    };


    const renderItems = todo.map(item => {
        return <div key={item.id} className="flex justify-between items-center  shadow-xl bg-zinc-200 rounded-2xl  w-full px-4 my-1 py-2 max-w-xs overflow-x-hidden hover:scale-100 ">
                  <div onClick={() => handelClick(item)}>
                     <TodoItem value = {item} />
                  </div>
                  <button onClick={() => handelClickDelete(item)}><BsTrash/></button>
               </div>
    });

    return <div className="w-full flex flex-col items-center gap-1 my-5">
            {renderItems}             
           </div>
};