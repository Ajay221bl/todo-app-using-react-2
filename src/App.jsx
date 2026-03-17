import { useState } from "react";
import "./App.css";



function App(){

    return (
        <div>
        <Timer></Timer>
        </div>
    )
}


function Timer(){
    const [count, setCount] = useState(0);

    setInterval(function increase(){
        setCount(count + 1)
    }, 1000)

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default App