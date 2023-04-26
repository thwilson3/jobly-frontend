
/**
 *
 * Renders a list of all jobs in Jobly. Makes call to backend API to
 * retrieve job listing data.
 *
 * Props:
 *  - none
 *
 * State:
 * - jobs - Array - List of all jobs to display (all by default)
 * - searchFilter - string - Current search term (null by default)
 * - isLoading - boolean - Toggles the loading screen (true by default)
 *
 * RoutesList -> JobList -> { JobCardList, SearchForm }
 *
 */
function JobList () {
  return (
  <div className="JobList">
    <h2>JobList</h2>
  </div>
  );
};

export default JobList;