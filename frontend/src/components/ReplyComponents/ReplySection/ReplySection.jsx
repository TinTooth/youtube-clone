import Reply from "../Reply/Reply";
import ReplyForm from "../ReplyForm/ReplyForm";
import "./ReplySection.css"
import axios from "axios";
import { useContext,useEffect,useState } from 'react';
import useConfig from "../../../hooks/useConfig";
import AuthContext from "../../../context/AuthContext";

const ReplySection = ({showReplies, commentId}) => {
    const {user} = useContext(AuthContext);
    const [replies, setReplies] = useState([]);
    const config = useConfig();
    

    useEffect (()=> {
        getReplies()
    },[showReplies])
    


    async function getReplies() {
        console.log(commentId);
        let response = await axios.get(`http://127.0.0.1:8000/api/replies/${commentId}/`,config)
        if (response.status == 200){
            setReplies(response.data);
        }
    }


    return showReplies ? ( 
        <div className="reply-section">
            <ReplyForm commentId={commentId} show = {true} getReplies = {getReplies}/>
            <div className="replies-list">
                {replies.map((reply, i) => {
                    return(
                        <div className="reply-container" key = {i}>
                        <Reply reply={reply}></Reply>
                    </div>
                    )    
                })}
            </div>
        </div>
     ):null;
}
 
export default ReplySection;