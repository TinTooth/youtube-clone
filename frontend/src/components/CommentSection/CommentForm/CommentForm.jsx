import axios from "axios";
import useConfig from "../../../hooks/useConfig";
import useCustomForm from "../../../hooks/useCustomForm";
import useAuth from "../../../hooks/useAuth";

const CommentForm = ({vid, getVideoComments}) => {
    const config = useConfig()
    const [user,token] = useAuth()
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
            <form onSubmit={handleSubmit}>
                <textarea name = 'comment' value = {formData.comment} onChange ={handleInputChange} />
                <button>Post</button>
            </form>

        </div>
     );
}
 
export default CommentForm;