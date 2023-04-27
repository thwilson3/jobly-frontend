import { useState } from 'react';

/**
 *
 * Renders login form and makes request to authenticate login
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
function LoginForm({handleRequest}) {
	const [formData, setFormData] = useState({
		username: '',
		password: '',
	});

	function handleSubmit(evt) {
    evt.preventDefault();
    handleRequest(formData);
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
			<h1>Log in</h1>
			<div className='SignUpForm-card card'>
				<form
					id='SignUpForm-form'
					onSubmit={handleSubmit}>
					<div>
						<label for='username'>Username</label>
						<input
							id='username'
							name='username'
							onChange={handleChange}></input>
					</div>

					<div>
						<label for='password'>Password</label>
						<input
							id='password'
							name='password'
							type='password'
							onChange={handleChange}></input>
					</div>
					<div>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;

