import './Reply.css'

const Reply = ({reply}) => {
    return ( 
        <div className="reply">
            <h2 className="reply-username"> {reply.username}:</h2>
            <div className='text'> {reply.text}</div>
            <div className= 'spacer'></div>
            
        </div>
     );
}
 
export default Reply;