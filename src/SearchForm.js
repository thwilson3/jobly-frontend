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
function SearchForm ({applyFilter}) {

	function handleSearch (evt) {
		evt.preventDefault();
		const searchTerm = evt.target.searchTerm.value;
    applyFilter(searchTerm)
	}

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