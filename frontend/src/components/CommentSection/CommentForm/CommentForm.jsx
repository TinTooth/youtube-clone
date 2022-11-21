import axios from "axios";
import useConfig from "../../../hooks/useConfig";
import useCustomForm from "../../../hooks/useCustomForm";
import useAuth from "../../../hooks/useAuth";
import "./CommentForm.css"

const CommentForm = ({vid, getVideoComments}) => {
    const config = useConfig();
    const [user,token] = useAuth();
    const [formData, handleInputChange, handleSubmit] = useCustomForm({comment:''},createComment);
    

    function createComment() {
        let newComment = {
            video_id:vid,
            text: formData.comment,
            likes: 0,
            dislikes: 0
        }
        postComment(newComment);
    }

    async function postComment(newComment) {
    
        let response = await axios.post('http://127.0.0.1:8000/api/comments/',newComment, config)
        if (response.status == 201){
            getVideoComments();
        }  
    }



    return ( 
        <div className="comment-form">
            <h1>COMMENTS</h1>
            { user ? (
                <form onSubmit={handleSubmit}>
                <textarea name = 'comment' value = {formData.comment} onChange ={handleInputChange} />
                <button className="post-btn">Post</button>
            </form>
            ) : (
                <h2>Please Login to Comment on Video</h2>
            )
            }

        </div>
     );
}
 
export default CommentForm;