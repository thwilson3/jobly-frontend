import { useState, useEffect } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";

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
  const [jobs, setJobs] = useState(null);
	const [searchFilter, setSearchFilter] = useState(null);
	const [isLoading, setIsLoading] = useState(true);


	/**
	 * Accept search term from user and query backend API for filtered list of
	 * jobs.
	 */
	function handleSearch (evt) {
		evt.preventDefault();
		const searchTerm = evt.target.searchTerm.value;
		async function fetchFilteredJobs() {
			setJobs(await JoblyApi.getJobs())
			setSearchFilter(searchTerm);
			setIsLoading(false);
		}
		fetchFilteredJobs();
		setIsLoading(true);
	};

  useEffect(function fetchJobsOnMount() {
		async function fetchJobs() {
			setJobs(await JoblyApi.getJobs());
			setIsLoading(false);
		}
		fetchJobs();
	}, []);

	if (isLoading) return <p>Loading...</p>

  return (
  <div className="JobList">
    <h2>JobList</h2>
    <SearchForm handleSearch={handleSearch} />
    {jobs.map(job => (
      <JobCard
      key={job.id}
      jobData={job}
      />
    ))}
  </div>
  );
};

export default JobList;