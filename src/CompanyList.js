import CompanyCard from './CompanyCard';

const COMPANIES = [
  {
    handle: "fakeApple",
    name: "Fake Apple, Inc.",
    num_employees: 22,
    description: "Fruit company",
    logo_url: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
  }

]

function CompanyList () {
  const companies = COMPANIES;
  return (
    <div className="CompanyList">
      <h2>CompanyList</h2>
      {companies.map(company => (
        <CompanyCard companyData={company} />
      ))}
    </div>
    );
};

export default CompanyList;