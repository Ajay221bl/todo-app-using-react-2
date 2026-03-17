import { useState } from "react";
import "./App.css";



function App() {


    return (
         <Counter></Counter>
    
    )
}


function Counter(){
        const [count, setCount] = useState(0);
    function IncreaseCounter(){
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={IncreaseCounter}>Counter</button>
        </div>
    )
}  





export default App


