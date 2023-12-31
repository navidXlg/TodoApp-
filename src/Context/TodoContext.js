import { createContext, useState } from "react";


const todoContext = createContext();

export default function Provider({children}){

    // Todo list item data
    const[todo, setTodo] = useState([]);

    // Status of our todo items
    const [todoStatus, setTodoStatus] = useState("All");

    // Creating Todo item
    const createTodo = (item) => {
        const updateTodo = [
            ...todo,
            {id : Math.trunc(Math.random()*1000), label : item, mode:true}
        ];
        setTodo(updateTodo);
    };

    // Change Active Mode
    const todoStatusChange = (item) => {
       const updateTodo =  todo.map(tode => {
             return tode.id === item.id ? {...tode, mode : !tode.mode} : tode;
        });
        setTodo(updateTodo);
    };

    // Delete every todo item
    const deleteItem = (item) => {
        const updateTodo = todo.filter(tode => {
            return !(tode.id === item.id);
        });
        setTodo(updateTodo);
    };

    // Rest all todos
    const resetAllTodos = () => {
        setTodo([])
    };
    
    // Provide data for share in app
    const valueToShare = {
        todo,
        setTodo,
        createTodo,
        todoStatusChange,
        deleteItem,
        resetAllTodos,
        todoStatus,
        setTodoStatus,
    };

    return <todoContext.Provider value={valueToShare}>
                {children}
           </todoContext.Provider>
};

export {todoContext};

