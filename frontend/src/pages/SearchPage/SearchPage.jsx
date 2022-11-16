import React, {useState, useEffect} from "react";
import axios from "axios";



const SearchPage = ({search}) => {
    const [searchResults,setSearchResults] = useState([]);

  useEffect( () =>{
    getSearchResults();
    },[]) 

  async function getSearchResults() {
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${search}}&key=AIzaSyCNMgoCmbDb7bKDwy_vmCfV6Vrty8E_0y4`)
    setSearchResults(response.data)
    }

    const handleTempClick = () => {console.log(searchResults)}

    return (
        <div className="thumbnail-container" onClick={handleTempClick}>Search Page

        </div>
    );
}
 
export default SearchPage;