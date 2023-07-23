import { createContext, useState } from "react";


const todoContext = createContext();

export default function Provider({children}){
    const[todo, setTodo] = useState([]);

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
       const updateTodo =  todo.map(todo => {
             return todo.id === item.id ? {...todo, mode : !todo.mode} : todo;
        });
        setTodo(updateTodo);
        console.log(todo);
    };
    
    // Provide data for share in app
    const valueToShare = {
        todo,
        setTodo,
        createTodo,
        todoStatusChange
    };

    return <todoContext.Provider value={valueToShare}>
                {children}
           </todoContext.Provider>
};

export {todoContext};

