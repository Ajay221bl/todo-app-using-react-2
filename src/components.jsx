

// defining the component and adding props as parameters
export function PostComponent({profilePic, name, designation, description, contentImage}){
    
    return (
    <div style={{margin: "100px 600px 100px 600px"}}>
        <div style={{textAlign: "left"}}>suggested</div>
        <div style={{display: "flex", justifyContent: "flex-start"}}>
            <img src={profilePic} style={{height: "50px", marginLeft: "20px", marginRight: "20px"}}></img>

            <div style={{textAlign: "left"}}>
                <div>{name}</div>
                <div>{designation}</div>
            </div>
        </div>
        <div>{description}</div>
        <img src={contentImage} style={{height: "500px", maxWidth: "500px"}}></img>
        <div>post stats</div>
        <div>Buttons</div>

    </div>
    )
}


export function ToggleMessage(){
    let [isVisible, setIsVisible] = useState(true);

    function toggle(){
        setIsVisible(!isVisible);
    }
    return (
        <div>
            <button onClick={toggle}>Toggle</button>
            {isVisible ? <p>This message is conditionally rendered</p>: ""}
        </div>
    )
}
