import { createContext, useState } from "react";


const todoContext = createContext();

export default function Provider({children}){
    const[todo, setTodo] = useState([]);

    // Creating Todo item
    const createTodo = (item) => {
        const updateTodo = [
            ...todo,
            {id : Math.trunc(Math.random()*1000), label : item}
        ];
        setTodo(updateTodo);
    };
    
    // Provide data for share in app
    const valueToShare = {
        todo,
        setTodo,
        createTodo
    };

    return <todoContext.Provider value={valueToShare}>
                {children}
           </todoContext.Provider>
};

export {todoContext};

