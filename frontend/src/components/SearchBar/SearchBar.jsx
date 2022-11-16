import useCustomForm from "../../hooks/useCustomForm";

const SearchBar = ({setSearch}) => {
    const submitSearch = (data) => {
        setSearch(data.search);
    }
    const defaultV = {search:''}
    const [formData, handleInputChange, handleSubmit] = useCustomForm(defaultV,submitSearch);


    return (
        <form onSubmit={handleSubmit}>
            <input type = 'text' name = 'search' value = {formData.search} onChange = {handleInputChange}></input>
            <button type="submit">Search</button>
        </form>


     );
}
 
export default SearchBar;