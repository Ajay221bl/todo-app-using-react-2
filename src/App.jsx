import { useState } from "react";
import "./App.css";



export default function App(){

    // creating the state
    const [todos, setTodos] = useState([
        {
        title: "go to gym",
        description : "go regurlary",
        done : false
    }
]);
    //function that adds updates the todo array
    function addTodo(){
        const newArr = [...todos];
        newArr.push({
            title : document.getElementById("title").value,
            description : document.getElementById("description").value,
            done: true
        })
        setTodos(newArr);
}

    // the main function of react renders the button 
    // it also renders the todos from todo array in a neat fashion using the Todo component
    return (
        <div>
            <button onClick={addTodo}>Add Todo</button>
            <input id="title" placeholder="add title"></input>
            <input id="description" placeholder="add description"></input>
        
                {todos.map((todo)=>(
                    <Todo
                        title = {todo.title}
                        description = {todo.description}
                        done = {todo.done}
                        />
                ))
            }
        </div>
    )


    function Todo(prop){
        return(
        <div>
            <h1>{prop.title}</h1>
            <h2>{prop.description}</h2>
            <h3>{prop.done ? "task is done" : "task is not done"}</h3>
        </div>
    )
    }
};