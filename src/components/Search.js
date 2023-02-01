
const Search = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit}>
                <label>Enter the city </label>
                <input
                type="text"
                placeholder="Enter city name"
                value={props.city}
                onChange={(e) => props.setCity(e)}
                />
                <button />
            </form>
        </>
    )
};

export default Search;