import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import './SearchBar.css'

const SearchBar = ({setSearch}) => {
    const navigate = useNavigate()
    const submitSearch = (data) => {
        setSearch(data.search);
        navigate('/')
    }
    
    const [formData, handleInputChange, handleSubmit] = useCustomForm({search:''},submitSearch);


    return (
        <form onSubmit={handleSubmit}>
            <input className = 'search-input' type = 'text' name = 'search' value = {formData.search} onChange = {handleInputChange}></input>
            <button className="search-btn" type="submit">Search</button>
        </form>
     );
}
 
export default SearchBar;