import TodoItem from "./TodoItem";
import useTodoContext from "../Hooks/useTodoContext";


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
        return <div key={item.id}>
                  <div onClick={() => handelClick(item)}>
                     <TodoItem value = {item} />
                  </div>
                  <button onClick={() => handelClickDelete(item)}>remove</button>
               </div>
    });

    return <div>
            {renderItems}             
           </div>
};