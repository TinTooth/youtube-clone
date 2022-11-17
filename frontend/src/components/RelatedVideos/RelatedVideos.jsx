import { useEffect, useState } from "react";
import VideoCard from "../VideoCard/VideoCard.jsx"
import axios from "axios";
import "./RelatedVideos.css"




const RelatedVideos = ({vid}) => {
    const [relatedVideos,setRelatedVideos] = useState([])
    
    useEffect( () => {
        getRelatedVideos()
    },[vid]
    )
    

    async function getRelatedVideos() {
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&relatedToVideoId=${vid}&type=video&key=AIzaSyCNMgoCmbDb7bKDwy_vmCfV6Vrty8E_0y4` )
        setRelatedVideos(response.data.items)
        }
    
    return ( 


        <div className="video-container-related">
            {relatedVideos.map((item,i)=> {
            return(
              <div className="video-container-related" key = {i}>
              <VideoCard item = {item} displayType = {2}/>
              </div>
          )
        })}


        </div>
     );
}
 
export default RelatedVideos;