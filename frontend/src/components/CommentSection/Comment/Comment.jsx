import './Comment.css'

const Comment = ({comment}) => {
    console.log(comment);

    return (
        <>
        <div className="comment">
            <h2 className="username"> {comment.username}:</h2>
            <div className='content'>
                <div className='text'> {comment.text}</div>
                <div className='buttons'>
                    <button className='reply-btn'>REPLY</button>
                </div>
            </div>
        </div>
        </> 
     );
}
 
export default Comment;