import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 *
 * Renders sign up form and makes request to register user and login
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
function SignUpForm({ handleRequest }) {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		email: '',
	});

	function handleSubmit(evt) {
    evt.preventDefault();
    handleRequest(formData);
		navigate('/');
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
			<h1>Sign up</h1>
			<div className='SignUpForm-card card'>
				<form
					id='SignUpForm-form'
					onSubmit={handleSubmit}>
					<div>
						<label htmlFor='username'>Username</label>
						<input
							id='username'
							name='username'
							onChange={handleChange}></input>
					</div>

					<div>
						<label htmlFor='password'>Password</label>
						<input
							id='password'
							name='password'
							type='password'
							onChange={handleChange}></input>
					</div>
					<div>
						<label htmlFor='firstName'>First Name</label>
						<input
							id='firstName'
							name='firstName'
							onChange={handleChange}></input>
					</div>
					<div>
						<label htmlFor='lastName'>Last Name</label>
						<input
							id='lastName'
							name='lastName'
							onChange={handleChange}></input>
					</div>
					<div>
						<label htmlFor='email'>Email</label>
						<input
							id='email'
							name='email'
							type='email'
							onChange={handleChange}></input>
					</div>
					<div>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SignUpForm;