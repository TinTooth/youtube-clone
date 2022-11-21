import axios from "axios";
import useConfig from "../../../hooks/useConfig";
import useCustomForm from "../../../hooks/useCustomForm";
import "./ReplyForm.css"



const ReplyForm = ({commentId, getReplies}) => {
    const config = useConfig();
    const [formData,handleInputChange,handleSubmit] = useCustomForm({reply:''},createReply);
    
    function createReply(){
        let newReply  = {text:formData.reply};
        postReply(newReply);  
    }


    async function postReply(newReply) {
        let response = await axios.post(`http://127.0.0.1:8000/api/replies/${commentId}/`,newReply,config)
        if (response.status === 201){
            getReplies();
        }
    }
    
    return ( 
        <div className="reply-form">
                <form onSubmit={handleSubmit}>
                <textarea name = 'reply' value = {formData.reply} onChange ={handleInputChange} />
                <button className="reply-form-btn">REPLY</button>
            </form>
        </div>
     );
}
 
export default ReplyForm;