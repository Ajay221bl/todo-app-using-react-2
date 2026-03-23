import { useState, useEffect} from "react";
import "./App.css";
import { PostComponent } from "./components";

// Building a LinkedIn like Navigation Bar using react
function App(){
    const ButtonsArr = [
        {
            logo: "https://cdn-icons-png.flaticon.com/128/15429/15429582.png",
            logoName: "Home"
        },
        {
            logo:"https://cdn-icons-png.flaticon.com/128/14233/14233355.png",
            logoName:"Jobs"
        },
        {
            logo:"https://cdn-icons-png.flaticon.com/128/17561/17561655.png",
            logoName:"My Network"
        },
        {
            logo:"https://cdn-icons-png.flaticon.com/128/16689/16689811.png",
            logoName:"Messaging"
        },
        {
            logo: "https://cdn-icons-png.flaticon.com/128/14283/14283678.png",
            logoName: "Notifications"
        }
    ]
    const NavBarComponents = ButtonsArr.map(
        Button=><NavBarButtonComponent 
            logo={Button.logo}
            logoName={Button.logoName}
            count= {Button.count}
            />)
    
    const CountButtonsArr = [
        {
            buttonName: "Home"
        },
        {
            buttonName: "Jobs"
        },
        {
            buttonName: "My Networks"
        },
        {
            buttonName: "Messaging"
        },
        {
            buttonName: "Notifications"
        }
    ]
    const CountAddButtonComponents = CountButtonsArr.map(CountButton=>

    <CountAddButton  buttonName={CountButton.buttonName}/>)
    return (
        <div>
            <div style={{display:"flex", marginRight:"200pk", marginLeft:"800px"}}>
            {NavBarComponents}
            </div>
            <div>
                {CountAddButtonComponents}
            </div>
        </div>
    )
}


function NavBarButtonComponent({logo, logoName, count}){
    return (
        <div style={{textAlign:"center", marginRight: "20px"}}>
            <div style={{display:"flex", alignItems:"start", justifyContent:"center"}}>
                <img src={logo} style={{width: "30px" }}></img>
                <div  style={{border:"solid black 0.5px", height:"10px", width:"10px", fontSize:"15px"}}>{count}</div>
            </div>
            <div style={{fontSize:"15px"}}>{logoName}</div>
        </div>
    )
}

function CountAddButton({buttonName, count}){
    
    function addCount(){
        setCount(count + 1)
    }
    return (
        <button onClick={addCount}>{buttonName}</button>
    )
}



export default App





