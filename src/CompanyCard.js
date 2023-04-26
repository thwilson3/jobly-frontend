import { Link } from 'react-router-dom';

/**
 *
 * Renders a high level company details in a card format.
 *
 * Props:
 *  - companyData - Object: { handle: "apple", name: "Apple, Inc.", ... }
 *
 * State:
 * - none
 *
 * CompanyList -> CompanyCard
 *
 */
function CompanyCard({ companyData }) {
	const { handle, name, description, logoUrl } = companyData;
  console.log('companyData', companyData);
	return (
		<div className='CompanyCard'>
			<Link key={handle} to={`/companies/${handle}`}>
				{logoUrl && <img
					src={`${logoUrl}`}
					style={{
						position: 'relative',
						top: '0px',
						right: '0px',
						height: '25px',
						with: '25px',
					}}
					alt={name}
				/>}
				<h3>{name}</h3>
				<p>{description}</p>
			</Link>
		</div>
	);
}

export default CompanyCard;