import { useState, useEffect} from "react";
import "./App.css";
import { PostComponent } from "./components";

// stopwatch in react

function App(){
    let [showTimer, setShowTimer] = useState(true);

    useEffect(()=>{
        setInterval(()=>{
            setShowTimer(x=> !x)
        }, 5000)

        
    }, [])

    
    return (
        <div>{showTimer ? <Timer /> : <div></div> }</div>
    )
}

function Timer(){
    let [seconds, setSeconds] = useState(1);
    

    function increaseCount(){
        setSeconds(prev=> prev + 1);
    }

    useEffect(()=>{
        let clock = setInterval(()=>{
            increaseCount()
        }, 1000)

        // cleanup logic here in return expression
         return function(){
            clearInterval(clock)
         }
    }, [])
    return (
        <div>{seconds} seconds elapsed</div>
    )
}


export default App





