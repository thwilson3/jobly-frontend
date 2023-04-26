import JobCard from './JobCard';

/**
 *
 * Renders a list of job cards.
 * If company name prop is passed, display cards with company name.
 *
 * Props:
 *  - jobData - Object: { title: "assistant", salary: "250,000", ... }
 *  - company(optional) - String: "Apple Inc."
 *
 * State:
 * - none
 *
 * { CompanyDetail, JobList } -> JobCardList -> JobCard
 *
 */
function JobCardList({ jobListData, showCompany = false }) {
	function cardsWithCompany() {
		return jobListData.map(job => (
			<JobCard
				jobData={job}
				key={job.id}
				companyName={job.companyName}
			/>
		));
	}

	function cardsWithoutCompany() {
		return jobListData.map(job => (
			<JobCard
				jobData={job}
				key={job.id}
			/>
		));
	}

	return (
		<div className='JobCardList'>
			{showCompany ? cardsWithCompany() : cardsWithoutCompany()}
		</div>
	);
}
export default JobCardList;
