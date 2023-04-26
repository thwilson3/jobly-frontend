import { Link } from 'react-router-dom';
import './CompanyCard.css';

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
			<Link
				key={handle}
				to={`/companies/${handle}`}>
				{logoUrl && (
					<img
						src={logoUrl}
						alt={name}
					/>
				)}
				<h3>{name}</h3>
				<p>{description}</p>
			</Link>
		</div>
	);
}

export default CompanyCard;
