import React, {useState, useEffect} from "react";
import axios from "axios";
import "./SearchPage.css";
import VideoCard from '../../components/VideoCard/VideoCard.jsx'



const SearchPage = ({search}) => {
    const [searchResults,setSearchResults] = useState([]);
   

  useEffect( () =>{
    getSearchResults();
    console.log('useeffect searchpage')
    },[search]) 

  
    
    

  async function getSearchResults() {
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${search}&type=Video&key=AIzaSyCNMgoCmbDb7bKDwy_vmCfV6Vrty8E_0y4`)
    setSearchResults(response.data.items)
    }

    const handleTempClick = () => {console.log(searchResults)}

    return (
      <div className="thumbnail-container" onClick={handleTempClick}>
          {searchResults.map((item,i)=> {
            return(
              <div className="video-container" key = {i}>
              <VideoCard item = {item}/>
              </div>
            
          )
        })}
      </div>
        );
}
 
export default SearchPage;