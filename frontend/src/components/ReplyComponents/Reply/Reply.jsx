const Reply = ({reply}) => {
    return ( 
        <div className="reply">
            <h2 className="username"> {reply.username}:</h2>
             <div className='text'> {reply.text}</div>
        </div>
     );
}
 
export default Reply;