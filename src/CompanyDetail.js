import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobCardList from './JobCardList';
import JoblyApi from './api';

/**
 *
 * Renders a page to display all company details and jobs associated with
 * that company.
 *
 * Props:
 *  - none
 *
 * State:
 * - companyData - Object: { handle: "apple", name: "Apple, Inc.", ... } //TODO: complete example obj
 * - isLoading - boolean - Toggles the loading screen (true by default)
 *
 * Routes -> CompanyDetail -> JobCardList
 *
 */
function CompanyDetail () {
  const [companyData, setCompanyData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { handle } = useParams();
  console.log("handle", handle);

  useEffect(function fetchCompanyOnMount() {
		async function fetchCompany() {
			setCompanyData(await JoblyApi.getCompany(handle));
			setIsLoading(false);
		}
		fetchCompany();
	}, []);
  //TODO: look into missing 'handle' dependency

  console.log("companyDataDetail", companyData);
  if(isLoading) return <p>Loading...</p>

  const { name, description, jobs } = companyData;

  return (
    <div className="CompanyDetail">
      <h1>{name}</h1>
      <p>{description}</p>
      <JobCardList jobData={jobs} showCompany={false} />
    </div>
  )
};

export default CompanyDetail;