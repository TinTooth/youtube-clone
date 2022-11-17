import './VideoCard.css'
import { useNavigate } from "react-router-dom";

const SearchVideo = ({item}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/video/${item.id.videoId}`)
    }


    return (
        <div onClick={handleClick}>
            <div>
                <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            </div>
            <div className='title'>{item.snippet.title.replace(/(&quot\;)/g,"\"")}</div>
            <h3> Channel: {item.snippet.channelTitle}</h3>
        </div>

    );
}
 
export default SearchVideo;