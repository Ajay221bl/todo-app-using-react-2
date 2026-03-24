import { useState, useEffect} from "react";
import "./App.css";
import { PostComponent } from "./components";

// fetching data from backend using react

function App(){
    let [currentTab, setCurrentTab] = useState(1);
    let [tabData, setTabData] = useState({});

    
    
    return (
        <div>
            <button style={{color: currentTab==1 ? "red" : "black" }} onClick={()=>setCurrentTab(1)}>todo1</button>
            <button style={{color: currentTab==2 ? "red": "black"}} onClick={()=>setCurrentTab(2)}>todo2</button>
            <button style={{color: currentTab==3 ? "red": "black"}} onClick={()=>setCurrentTab(3)}>todo3</button>
            <button style={{color: currentTab==4 ? "red" : "black"}} onClick={()=>setCurrentTab(4)}>todo4</button>
        </div>
    )
}


export default App