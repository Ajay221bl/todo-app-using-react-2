import { useState, useEffect} from "react";
import "./App.css";
import { PostComponent } from "./components";

// Building a LinkedIn like Navigation Bar using react
function App(){
    return (
        <div style={{display:"flex", marginRight:"200px", marginLeft:"800px"}}>
        <ButtonComponent 
            logo={"https://cdn-icons-png.flaticon.com/128/15429/15429582.png"}
            logoName={"Home"}
            count={1}
            />
        <ButtonComponent
            logo={"https://cdn-icons-png.flaticon.com/128/14233/14233355.png"}
            logoName={"Jobs"}
            />
        <ButtonComponent
            logo={"https://cdn-icons-png.flaticon.com/128/17561/17561655.png"}
            logoName= {"My Network"}
            />
        <ButtonComponent
            logo={"https://cdn-icons-png.flaticon.com/128/16689/16689811.png"}
            logoName={"Messaging"}
            />
        <ButtonComponent
            logo={"https://cdn-icons-png.flaticon.com/128/14283/14283678.png"}
            logoName={"Notifications"}
            />
        </div>
    )
}


function ButtonComponent({logo, logoName, count}){
    return (
        <div style={{textAlign:"center", marginRight: "20px"}}>
            <div style={{display:"flex", alignItems:"start", justifyContent:"center"}}>
                <img src={logo} style={{width: "30px" }}></img>
                <div  style={{border:"solid black 0.5px", height:"10px", width:"10px"}}>{count}</div>
            </div>
            <div style={{fontSize:"15px"}}>{logoName}</div>
        </div>
    )
}



export default App