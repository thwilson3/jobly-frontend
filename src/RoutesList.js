import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import ProfileForm from './ProfileForm';

/**
 *
 * Renders route components
 *
 * Props:
 *  - none
 *
 * State:
 * - none
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList }
 *
 */
function RoutesList({ handleRegisterRequest, handleLoginRequest }) {
	return (
		<Routes>
			<Route
				path='/'
				element={<Homepage />}
			/>
			<Route
				path='/companies'
				element={<CompanyList />}
			/>
			<Route
				path='/companies/:handle'
				element={<CompanyDetail />}
			/>
			<Route
				path='/jobs'
				element={<JobList />}
			/>
			<Route
				path='/login'
				element={<LoginForm handleRequest={handleLoginRequest} />}
			/>
			<Route
				path='/signup'
				element={<SignUpForm handleRequest={handleRegisterRequest} />}
			/>
			<Route
				path='/profile'
				element={<ProfileForm />}
			/>
			<Route
				path='/logout'
				element={<ProfileForm />}
			/>
			<Route
				path='*'
				element={<Navigate to='/' />}
			/>
		</Routes>
	);
}

export default RoutesList;
