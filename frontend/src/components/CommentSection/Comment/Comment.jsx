import { useContext,useEffect,useState } from 'react';
import './Comment.css';
import AuthContext from '../../../context/AuthContext';
import axios from 'axios';
import useConfig from '../../../hooks/useConfig';
import ReplySection from '../../ReplyComponents/ReplySection/ReplySection';

const Comment = ({comment}) => {
    const config = useConfig()
    const {user} = useContext(AuthContext);
    const [replies, setReplies] = useState([])

    useEffect(()=>{
        if (user) { getReplies();}
        console.log('useEffect Comment')
    },[user,comment])


    async function getReplies() {
        let response = await axios.get(`http://127.0.0.1:8000/api/replies/${comment.id}/`,config)
        if (response.status == 200){
            setReplies(response.data);
        }
    }

    return (
        <div className='comment-container'>
            <div className="comment">
                <h2 className="username"> {comment.username}:</h2>
                <div className='content'>
                    <div className='text'> {comment.text}</div>
                    <div className='buttons'>
                        { user ? (<button className='reply-btn'>REPLY {replies.length}</button>): <div className='text'> Login to See Replies</div>}
                    </div>
                </div>
            </div>
            <ReplySection replies = {replies}/>
        </div> 
     );
}
 
export default Comment;