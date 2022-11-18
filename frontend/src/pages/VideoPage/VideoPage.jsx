import { useParams } from "react-router-dom";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import "./VideoPage.css"
import CommentSection from "../../components/CommentSection/CommentSection";
import axios from "axios";
import ApiKeys from "../../utils/ApiKeys";
import { useEffect, useState } from "react";

const VideoPage = () => {
    const {vid} = useParams();
    const [currentVideo,setCurrentVideo] = useState({})

    useEffect(()=> {
        getVideoDetails()
    },[vid])

    async function getVideoDetails() {
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${vid}&key=${ApiKeys.YOUTUBE_API_KEY}`)
        setCurrentVideo(response.data.items[0].snippet)
        console.log(response.data.items[0].snippet)
    }

    return ( 
        <div className="video-page">
            <div className="video-container-player">
                <div>
                    <VideoPlayer vid = {vid} currentVideo = {currentVideo} />
                </div>
            </div>
            <CommentSection vid = {vid}/>
         </div>
      );
}
 
export default VideoPage;