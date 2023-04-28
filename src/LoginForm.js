import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

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
	const navigate = useNavigate();
  const [error, setError] = useState(null);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
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
			<h1>Log in</h1>
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
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;

