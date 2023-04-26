function SearchForm ({handleSearch}) {
  return (
    <div className="SearchForm">
      <form onSubmit={handleSearch}>
        <input placeholder="Enter search term" name="searchTerm"></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SearchForm;