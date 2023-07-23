import TodoItem from "./TodoItem";
import useTodoContext from "../Hooks/useTodoContext";


export default function TodoList(){
    const {todo, todoStatusChange} = useTodoContext();

    // Handeling click event
    const handelClick = (item) => {
        todoStatusChange(item)
    };



    const renderItems = todo.map(item => {
        return <div onClick={() => handelClick(item)} key={item.id}>
                  <TodoItem value = {item}/>
               </div>
    });

    return <div>
            {renderItems}             
           </div>
};