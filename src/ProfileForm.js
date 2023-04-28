import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';
import userContext from './userContext';

/**
 *
 * Renders form to update user profile information
 *
 * Props:
 *  - handleRequest(): submit request to backend
 *
 * State:
 * - formData
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail,
 *                      JobList, LoginForm, SignUpForm, ProfileForm }
 *
 */
function ProfileForm({handleRequest}) {
	const navigate = useNavigate();
  const {currentUser} = useContext(userContext);
  const [error, setError] = useState(null);
	const [formData, setFormData] = useState({
		username: currentUser?.username,
		firstName: currentUser?.firstName,
		lastName: currentUser?.lastName,
		email: currentUser?.email,
	});

    async function handleSubmit(evt) {
      evt.preventDefault();
      try{
        await handleRequest(formData);
        navigate('/');
      } catch(err) {
        setError(err[0])
      }
    }

	function handleChange(evt) {
		const { name, value } = evt.target;
		setFormData(fData => ({
			...fData,
			[name]: value,
		}));
	}

	return (
		<div className='SignUpForm'>
			<h1>Profile</h1>
      {error && <Alert error={error}/>}
			<div className='SignUpForm-card card'>
				<form
					id='SignUpForm-form'
					onSubmit={handleSubmit}>
					<div>
						<label htmlFor='username'>Username</label>
						<input
							id='username'
							name='username'
							onChange={handleChange}
              value={formData.username}
              disabled></input>
					</div>
					<div>
						<label htmlFor='firstName'>First Name</label>
						<input
							id='firstName'
							name='firstName'
							onChange={handleChange}
              value={formData.firstName}></input>
					</div>
					<div>
						<label htmlFor='lastName'>Last Name</label>
						<input
							id='lastName'
							name='lastName'
							onChange={handleChange}
              value={formData.lastName}></input>
					</div>
					<div>
						<label htmlFor='email'>Email</label>
						<input
							id='email'
							name='email'
							type='email'
							onChange={handleChange}
              value={formData.email}></input>
					</div>
					<div>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ProfileForm;