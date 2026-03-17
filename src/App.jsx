import { useState } from "react";
import "./App.css";

// creating a counter button using react

export default function App(){


    const [count, setCount] = useState(0);

    

    function Counter(){
        return (
            <div>
            <h1>{count}</h1>
            <button onClick={IncreaseCounter}>Counter</button>
            </div>
        )
    }

    function IncreaseCounter(){
        setCount(count + 1)
    }

    
    return (
        <div>
            <Counter></Counter>
        </div>
    )
}
    