import { useParams } from "react-router-dom";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./VideoPage.css"

const VideoPage = () => {
    const {vid} = useParams();

    return ( 
        <>
        <div className="video-container-player">
            <div>
                <VideoPlayer id = {vid} />
            </div>
            <div>
                <RelatedVideos  vid = {vid}/>
            </div>
        </div>
         </>
      );
}
 
export default VideoPage;