import axios from "axios";
import useConfig from "../../../hooks/useConfig";
import useCustomForm from "../../../hooks/useCustomForm";
import { useState } from "react";



const ReplyForm = ({commentId, getReplies}) => {
    const config = useConfig();
    const [formData,handleInputChange,handleSubmit] = useCustomForm({reply:''},createReply);
    const [show,setShow] = useState(true)

    function createReply(){
        let newReply  = {text:formData.reply};
        postReply(newReply);  
    }


    async function postReply(newReply) {
        let response = await axios.post(`http://127.0.0.1:8000/api/replies/${commentId}/`,newReply,config)
        if (response.status == 201){
            getReplies();
        }
    }
    
    return show ? ( 
        <div className="comment-form">
                <form onSubmit={handleSubmit}>
                <textarea name = 'reply' value = {formData.reply} onChange ={handleInputChange} />
                <button className="post-btn">REPLY</button>
            </form>
        </div>
     ):null;
}
 
export default ReplyForm;