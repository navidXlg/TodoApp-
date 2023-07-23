import { useContext } from "react";
import { todoContext } from "../Context/TodoContext"; 

export default function useTodoContext(){
    return useContext(todoContext);
};