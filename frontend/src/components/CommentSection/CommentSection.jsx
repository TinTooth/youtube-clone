import "./CommentSection.css"
import axios from "axios";
import { useState } from "react";
import CommentForm from "../CommentForm/CommentForm";



const CommentSection = ({vid}) => {
    const [comments,setComments] = useState([{text:'test'}])

    async function getVideoComments() {
        const response = await axios.get(`http://127.0.0.1:8000/api/comments/video/${vid}/`)
        console.log(response.data)
        setComments(response.data)
    }
    
    
    return (  
        <div className="comment-section">
            <CommentForm vid = {vid} getVideoComments = {getVideoComments}/>
            {comments[0].text}
        </div>
    );
}
 
export default CommentSection;