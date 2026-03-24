import { useState, useEffect} from "react";
import "./App.css";
import { PostComponent } from "./components";

// stopwatch in react

function App(){
    let [count, setCount] = useState(1)

    function increaseCount(){
        setCount(currentValue=> currentValue + 1) // using lambda function instead of setCount(count + 1)
    }

    useEffect(()=>{
        setInterval(increaseCount, 1000)
    }, []);

    return (
        <div>{count}</div>
    )
}


export default App





