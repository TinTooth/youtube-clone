import React, {useState, useEffect} from "react";
import axios from "axios";
import "./SearchPage.css";
import VideoCard from '../../components/VideoCard/VideoCard.jsx'
import ApiKeys from "../../utils/ApiKeys";



const SearchPage = ({search}) => {
    const [searchResults,setSearchResults] = useState([]);
  
  useEffect( () =>{
    getSearchResults();
    },[search]) 

  async function getSearchResults() {
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=${search}&type=Video&key=${ApiKeys.YOUTUBE_API_KEY}`)
    setSearchResults(response.data.items)
    }

    return (
      <div className="thumbnail-container">
          {searchResults.map((item,i)=> {
            return(
              <div className="video-container" key = {i}>
              <VideoCard item = {item} displayType = {1}/>
              </div>
          )
        })}
      </div>
        );
}
 
export default SearchPage;