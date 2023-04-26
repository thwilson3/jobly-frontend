import JobCardList from './JobCardList';

const COMPANY = {
    handle: "fakeApple",
    name: "Fake Apple, Inc.",
    num_employees: 22,
    description: "Fruit company",
    logo_url: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
  }

const COMPANY_JOBS = [
  {
    "id": 1,
    "title": "Conservator, furniture",
    "salary": 110000,
    "equity": "0",
    "companyHandle": "watson-davis",
    "companyName": "Watson-Davis"
  },
  {
    "id": 2,
    "title": "Information officer",
    "salary": 200000,
    "equity": "0",
    "companyHandle": "hall-mills",
    "companyName": "Hall-Mills"
  },
  {
    "id": 3,
    "title": "Consulting civil engineer",
    "salary": 60000,
    "equity": "0",
    "companyHandle": "sellers-bryant",
    "companyName": "Sellers-Bryant"
  },
  {
    "id": 4,
    "title": "Early years teacher",
    "salary": 55000,
    "equity": "0",
    "companyHandle": "perez-miller",
    "companyName": "Perez-Miller"
  }]




function CompanyDetail () {
  const company = COMPANY;
  company.jobs = COMPANY_JOBS;

  return (
    <div className="CompanyDetail">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      <JobCardList jobData={company.jobs} showCompany={false} />
    </div>
  )
};

export default CompanyDetail;