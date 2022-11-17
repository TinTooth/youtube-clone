import './Comment.css'

const Comment = ({comment}) => {
    console.log(comment);

    return (
        <>
        <div className="comment">
            <h2 className="username"> {comment.username}</h2>
            <div className='text'> {comment.text}</div>
            <div className='buttons'>
                <button> Like </button>
                <button> Dislike</button>
                <button className='reply-btn'>REPLY</button>
            </div>
        </div>
        </> 
     );
}
 
export default Comment;