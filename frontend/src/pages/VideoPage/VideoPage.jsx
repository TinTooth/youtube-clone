import { useParams } from "react-router-dom";

const VideoPage = () => {
    const {vid} = useParams();
    console.log(vid)

    return ( 
        <>
        <div>Video Page</div>
        <iframe 
        id="ytplayer"
         type="text/html"
         width="640" 
         height="360"
        src={`https://www.youtube.com/embed/${vid}`}
        frameborder="0">
        </iframe>
  </>
      );
}
 
export default VideoPage;