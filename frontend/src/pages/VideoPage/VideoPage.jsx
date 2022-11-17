import { useParams } from "react-router-dom";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = () => {
    const {vid} = useParams();
    console.log(vid)

    return ( 
        <>
        <div>Video Page</div>
        <VideoPlayer id = {vid} />
        <RelatedVideos  vid = {vid}/>
         </>
      );
}
 
export default VideoPage;