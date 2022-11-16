const SearchVideo = ({item}) => {
    return (
        <div>
            <div>{item.snippet.title}</div>
            <div>
                <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            </div>
        </div>

    );
}
 
export default SearchVideo;