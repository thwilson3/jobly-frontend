import { useState, useEffect } from 'react';
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';
import JoblyApi from './api';

const COMPANIES = [
	{
		handle: 'fakeApple',
		name: 'Fake Apple, Inc.',
		num_employees: 22,
		description: 'Fruit company',
		logo_url: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
	},
	{
		handle: 'fakeApple',
		name: 'Fake Apple, Inc.',
		num_employees: 22,
		description: 'Fruit company',
		logo_url: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
	},
	{
		handle: 'fakeApple',
		name: 'Fake Apple, Inc.',
		num_employees: 22,
		description: 'Fruit company',
		logo_url: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png',
	},
];

/**
 *
 * Renders a list of all companies in Jobly. Makes call to backend API to
 * retrieve company listing data.
 *
 * Props:
 *  - none
 *
 * State:
 * - companies - Array - List of all companies to display (all by default)
 * - searchFilter - string - Current search term (null by default)
 * - isLoading - boolean - Toggles the loading screen (true by default)
 *
 * CompanyList -> { CompanyCard, SearchForm }
 *
 */

function CompanyList() {
	const [companies, setCompanies] = useState(null);
	const [searchFilter, setSearchFilter] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	/**
	 * Accept search term from user and query backend API for filtered list of
	 * companies.
	 */
	function handleSearch (evt) {
		evt.preventDefault();
		const searchTerm = evt.target.searchTerm.value;
		async function fetchFilterdCompanies() {
			setCompanies(await JoblyApi.getCompanies({nameLike: searchTerm}))
			setSearchFilter(searchTerm);
			setIsLoading(false);
		}
		fetchFilterdCompanies();
		setIsLoading(true);
	}

	useEffect(function fetchCompaniesOnMount() {
		async function fetchCompanies() {
			setCompanies(await JoblyApi.getCompanies());
			setIsLoading(false);
		}
		fetchCompanies();
	}, []);

	if (isLoading) return <p>Loading...</p>


	return (
		<div className='CompanyList'>
			<h2>CompanyList</h2>
			<SearchForm handleSearch={handleSearch} />
			{companies.map(company => (
				<CompanyCard
					key={company.handle}
					companyData={company}
				/>
			))}
		</div>
	);
}

export default CompanyList;
