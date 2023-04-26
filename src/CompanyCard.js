import { Link } from 'react-router-dom';

function CompanyCard({ companyData }) {
	const { handle, name, description, logo_url } = companyData;
  console.log('companyData', companyData);
	return (
		<div className='CompanyCard'>
			<Link key={handle} to={`/companies/${handle}`}>
				<img
					src={logo_url}
					style={{
						position: 'relative',
						top: '0px',
						right: '0px',
						height: '25px',
						with: '25px',
					}}
					alt={name}
				/>
				<h3>{name}</h3>
				<p>{description}</p>
			</Link>
		</div>
	);
}

export default CompanyCard;
