const VideoPlayer = ({id}) => {
    return ( 
        <iframe 
        id="ytplayer"
         type="text/html"
         width="854" 
         height="480"
        src={`https://www.youtube.com/embed/${id}`}>
        </iframe>

     );
}
 
export default VideoPlayer;