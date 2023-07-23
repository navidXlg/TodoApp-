import { useState } from "react";
import useTodoContext from "../Hooks/useTodoContext"; 



export default function SearchBar(){
    // Todo state setter
    const {createTodo} = useTodoContext();

    // Componant State of serch term
    const [term, setTerm] = useState("");

    // Handeling input change
    const handelChange = (event) => {
        setTerm(event.target.value);
    };

    // Handeling Submit of form Adding item to todo state
    const handelSubmit = (event) => {
        event.preventDefault();
        createTodo(term);
        setTerm("");
    };

    return <form onSubmit={handelSubmit}>
                <input
                type="text"
                placeholder="New Todo"
                onChange={handelChange}
                value={term} 
                ></input>
                <button>Add</button>
           </form>
};