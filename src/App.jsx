import { useState, useEffect} from "react";
import "./App.css";
import { PostComponent } from "./components";

// clock

function App(){
    const [count, setCount] = useState(0);

    function startClock(){
            setInterval(()=>{
                setCount(prev=> prev + 1)
            }, 1000)
    }


    return(
        <div>
            <div>{count}</div>
            <button onClick={startClock}>Start</button>
            <button>Stop</button>
        </div>
        
    )
}


export default App





