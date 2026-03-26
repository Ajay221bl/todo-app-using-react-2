import { useState, useEffect, useRef, useActionState} from "react";
import "./App.css";
import { PostComponent } from "./components";

// clock

function App(){
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);


    function startClock(){
        if(intervalRef.current !== null){
             return
        }
       intervalRef.current = setInterval(()=>{
            setCount(prev=> prev + 1)
        }, 1000)
    }



    function stopClock(){
        console.log(intervalRef.current)
        clearInterval(intervalRef.current)
        intervalRef.current= null;
        
    }

    return(
        <div>
            <div>{count}</div>
            <button onClick={startClock}>Start</button>
            <button onClick={stopClock}>Stop</button>
        </div>
        
    )
}


export default App





