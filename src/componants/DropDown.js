import { useEffect, useState, useRef } from "react";
import useTodoContext from "../Hooks/useTodoContext";

export default function DropDown(){

    const {setTodoStatus, todoStatus} = useTodoContext();
    const [isOpen, setOpen] = useState(false);
    const element = useRef();

    useEffect(() => {
        const handeleer =(event) =>  {
            if(!element.current){
                return;
            };
            if(!element.current.contains(event.target)){
                setOpen(false)
            };
            
            };
        document.addEventListener("click", handeleer, true);

        return () => {
            document.removeEventListener("click", handeleer); 
        }
    }, 
    []);

    const data = [
        {text : "All"},
        {text : "Active"},
        {text : "Completed"}
    ]
    // Handling dropDown open and close
    const handelClick = () => {
        setOpen(!isOpen);
        
    };

    // Handlign click option 
    const handelClikOption = (item) => {
        setTodoStatus(item.text);
        setOpen(!isOpen);
    };
        
    
    const renderOptions = data.map(item => {
        return <div key={Math.trunc(Math.random()*1000)}>
                  <p className=" cursor-pointer hover:bg-zinc-400 bg-zinc-300 py-1 px-3 border w-full" onClick={() => handelClikOption(item)} >{item.text}</p>
               </div>
    });
 


    return <div className="w-28 m-3 absolute -top-2 z-10 left-2 text-base " ref={element}>
            <p onClick = {handelClick} className="p-3 border border-cyan-200v w-full cursor-pointer">{todoStatus ? todoStatus : "All"}</p>
            {isOpen && renderOptions}
           </div>
};