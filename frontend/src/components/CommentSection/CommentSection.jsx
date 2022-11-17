import "./CommentSection.css"
import axios from "axios";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm/CommentForm";
import Comment from "./Comment/Comment";



const CommentSection = ({vid}) => {
    const [comments,setComments] = useState([{text:'test'}])

    useEffect(()=>{
        getVideoComments()
    },[vid])

    async function getVideoComments() {
        const response = await axios.get(`http://127.0.0.1:8000/api/comments/video/${vid}/`)
        setComments(response.data)
    }
    
    
    return (
        <>
        <div className="comment-section">
            <CommentForm vid = {vid} getVideoComments = {getVideoComments}/>
        </div>
        <div className="comment-list">
            {comments.map((comment, i) => {
                return ( 
                    <div className="comment-container" key = {i}>
                        <Comment comment={comment}/>
                    </div>

                )
            })}
        </div>
        </>  
    );
}
 
export default CommentSection;