import { useState } from "react";
import useTodoContext from "../Hooks/useTodoContext"; 
import {MdAdd} from "react-icons/md";



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

    return <form onSubmit={handelSubmit} className="w-full max-w-sm my-3">
                <input
                className="shadow appearance-none border outline-slate-500 hover: rounded inline-block py-2 px-3 text-gray-500 mr-4"
                type="text"
                placeholder="New Todo"
                onChange={handelChange}
                value={term} 
                ></input>
                <button><MdAdd/></button>
           </form>
};