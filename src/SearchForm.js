/**
 *
 * Renders a search form with submit button.
 *
 * Props:
 *  - none
 *
 * State:
 * - none
 *
 * { CompanyList, JobList } -> SearchForm
 *
 */
//TODO: add functionality to handle input itself
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