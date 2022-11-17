import { useParams } from "react-router-dom";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./VideoPage.css"
import useAuth from "../../hooks/useAuth";
import CommentSection from "../../components/CommentSection/CommentSection";

const VideoPage = () => {
    const {vid} = useParams();
    const [user,token] = useAuth();
    console.log(user);
    console.log(token);

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
        <CommentSection vid = {vid}/>
         </>
      );
}
 
export default VideoPage;