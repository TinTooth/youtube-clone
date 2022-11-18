import './VideoCard.css'
import { useNavigate } from "react-router-dom";

const SearchVideo = ({item, displayType}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/video/${item.id.videoId}`)
    }


    return displayType === 1? (
        <div onClick={handleClick} className = 'search'>
            <div>
                <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            </div>
            <h2> {item.snippet.channelTitle}</h2>
            <div className='title'>{item.snippet.title.replace(/(&quot\;)/g,"\"")}</div>
        </div>

    ): displayType === 2? (
        <div onClick={handleClick}>
            <div className="related">
                <div>
                    <img src={item.snippet.thumbnails.default.url} alt="thumbnail" />
                </div>
                <div className="info">
                    <h4>{item.snippet.channelTitle}</h4>
                    <div className='title'>{item.snippet.title.replace(/(&quot\;)/g,"\"")}</div>
                </div>
            </div>
        </div>
    ): null ;
}
 
export default SearchVideo;