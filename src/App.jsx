import { useState, useEffect} from "react";
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

    //making sure that the setInterval function only gets rendered once by using useEffect() hook
    useEffect(function(){
        setInterval(function(){
        setCount(function(count){
            return count + 1 
        })
    }, 1000)
    }, [])
    

    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default App