import { useState, useEffect} from "react";
import "./App.css";
import { PostComponent } from "./components";


function App(){
    // creating a state variable to store the state of the posts array 
    let [posts, setPosts] = useState([]);
    // for any change in the state variable the App() function gets re-rendered means the below
    // map function gets executed again and again on the posts array, creating fresh new Posts using the Post Component
    const postComponents = posts.map(post=> <PostComponent
        profilePic={post.profilePic}
        name={post.name}
        designation={post.designation}
        description={post.description}
        contentImage={post.contentImage}
         />)

    // this function adds the new post to the posts array.
    function addPost(){
        setPosts([...posts, {
           profilePic :"https://media.licdn.com/dms/image/v2/D5603AQE7vKPQpOICdg/profile-displayphoto-crop_800_800/B56ZvwwIiOIcAM-/0/1769270709332?e=1775692800&v=beta&t=TZAPblaOTU986S4JCXNpA-GjDibc9-w0wTEypCXw77c",
           name : "Rana Mehtab",
           designation:"Food Technologist | Quality Assurance Officer",
           description:"These Five Steps ensure your inventory stays fresh and your operations stay lean",
           contentImage:"https://media.licdn.com/dms/image/v2/D5610AQHhp9eYbE_00Q/image-shrink_1280/B56ZxlWp2oG4Ac-/0/1771226963634/HiringFreshers?e=1774796400&v=beta&t=NhjA92oMt0zP0j7b5HKY68hCRN9ojpt7DggqB0nTDFQ"
   
        }])
    }
    return ( 
        <div>
            <button onClick={addPost} style={{maxWidth: "100px"}}>Add Post</button>
            <div>
            {postComponents}
            </div>
        </div>
    )
        
        
}



export default App



