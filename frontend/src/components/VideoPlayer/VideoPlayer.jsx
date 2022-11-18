import './VideoPlayer.css'
import RelatedVideos from '../RelatedVideos/RelatedVideos';


const VideoPlayer = ({vid, currentVideo}) => {
    
    return ( 
        <div className="video-player">
            <div className="videos-row">
                <iframe 
                id="ytplayer"
                type="text/html"
                width="854" 
                height="480"
                src={`https://www.youtube.com/embed/${vid}`}>
                </iframe>
                <RelatedVideos vid = {vid}/>
                </div>
            <div className="video-details">
                <h2> {currentVideo.title}</h2>
                <p>  {currentVideo.description}</p>
            </div>
        </div>

     );
}
 
export default VideoPlayer;