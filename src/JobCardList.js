import JobCard from './JobCard';

function JobCardList ({jobData, showCompany}) {
  
  return (
    <div className="JobCardList">
      {jobData.map(job => (
        <JobCard jobData={job} key={job.id} />
        ))}
    </div>
  )
}
export default JobCardList;