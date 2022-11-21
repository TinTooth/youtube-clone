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
        if (user) {getReplies()}
    },[showReplies])
    // Didnt want showReplies here, since everytime you click the show replies button it makes a request to the backend.
    // But I was getting an error where on the first mount, the first commentId would be undefined but would be defined on on the following requests. I couldnt figure it out.
    
    async function getReplies() {
        console.log(commentId);
        let response = await axios.get(`http://127.0.0.1:8000/api/replies/${commentId}/`,config)
        if (response.status === 200){
            setReplies(response.data);
        }
    }


    return showReplies ? ( 
        <div className="reply-section">
            <div className="replies-list">
                {replies.map((reply, i) => {
                    return(
                        <div className="reply-container" key = {i}>
                        <Reply reply={reply}></Reply>
                    </div>
                    )    
                })}
            </div>
            <ReplyForm commentId={commentId} show = {true} getReplies = {getReplies}/>
        </div>
     ):null;
}
 
export default ReplySection;