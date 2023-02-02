
const Search = (props) => {
    return (
        <>
        <input
          type="text"
          placeholder="Enter city name"
          value={props.city}
          onChange={(e) => props.handleChange(e)}
        />
        </>
    )
};

export default Search;