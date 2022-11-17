import './VideoCard.css'

const SearchVideo = ({item}) => {
    return (
        <>
            <div>
                <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            </div>
            <div className='title'>{item.snippet.title.replace(/(&quot\;)/g,"\"")}</div>
        </>

    );
}
 
export default SearchVideo;