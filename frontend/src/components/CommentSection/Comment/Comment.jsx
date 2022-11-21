import { useContext,useState } from 'react';
import './Comment.css';
import AuthContext from '../../../context/AuthContext';
import ReplySection from '../../ReplyComponents/ReplySection/ReplySection';

const Comment = ({comment}) => {
    const {user} = useContext(AuthContext);
    const [showReplies, setShowReplies] = useState(false);
    const [replyButton, setReplyButton] = useState('SHOW REPLIES')

    const handleClick = () => {
         if (!showReplies) {
            setShowReplies(true);
            setReplyButton('HIDE');
            } 
            else { 
            setShowReplies(false);
            setReplyButton('SHOW REPLIES')
            }
    }

    return (
        <div className='comment-container'>
            <div className="comment">
                <h2 className="username"> {comment.username}:</h2>
                <div className='content'>
                    <div className='text'> {comment.text}</div>
                    <div className='buttons'>
                        { user ? (<button className='reply-btn' onClick={handleClick}>{replyButton}</button>): <div> Login to See Replies</div>}
                    </div>
                </div>
            </div>
            <ReplySection showReplies = {showReplies} commentId = {comment.id}/>
        </div> 
     );
}
 
export default Comment;