import TodoItem from "./TodoItem";
import useTodoContext from "../Hooks/useTodoContext";
import {BsTrash} from "react-icons/bs";
import {MdDone} from "react-icons/md";


export default function TodoList(){
    const {todo, todoStatusChange, deleteItem, todoStatus } = useTodoContext();

    // Handeling click event
    const handelClick = (item) => {
        todoStatusChange(item);
    };

    // Handeling deletiing item
    const handelClickDelete = (item) => {
        deleteItem(item);
    };

    // Filter todo list by done and undon tasks
    const todoOption = (todoStatus) => {
        switch (todoStatus){
            case "Active":{
                const active = todo.filter(item => {
                    return item.mode === true;
                })
                return active;
            }
            case "Completed":{
                const done = todo.filter (item => {
                    return item.mode === false;
                })
                return done;
            }
            case "All":
                return todo;
            default:
                return;           
        };
    };
    const arr = todoOption(todoStatus);
    

    const renderItems = arr.map(item => {
        return <div key={item.id} className="flex justify-between items-center  shadow-xl  transition bg-zinc-200 rounded-2xl  w-full px-4 my-1 py-2 max-w-xs overflow-x-hidden hover:scale-110 ">
                  <div onClick={() => handelClick(item)} className="flex gap-2 items-center cursor-pointer">
                     <TodoItem value = {item} />
                     <div>{item.mode || <MdDone/>}</div>
                  </div>

                  <button onClick={() => handelClickDelete(item)}><BsTrash/></button>
               </div>
    });

    return <div className="w-full flex flex-col items-center gap-1 my-5">
            {renderItems}             
           </div>
};