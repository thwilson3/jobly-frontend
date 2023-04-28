import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';
/**
 *
 * Renders a navbar.
 *
 * Props:
 *  - none
 *
 * State:
 * - none
 *
 * App -> Navigation
 *
 */
function Navigation({ currentUser }) {
	return (
		<Navbar className='Navigation'>
			<NavbarBrand href='/'>Jobly</NavbarBrand>

			{currentUser ? (
				<Nav>
					<NavLink
						to='/companies'
						className={'Navigation-item'}>
						Companies
					</NavLink>
					<NavLink
						to='/jobs'
						className={'Navigation-item'}>
						Jobs
					</NavLink>
					<NavLink
						to='/profile'
						className={'Navigation-item'}>
						Profile
					</NavLink>
					<NavLink
						to='/logout'
						className={'Navigation-item'}>
						Log out {currentUser.username}
					</NavLink>
				</Nav>
			) : (
				<Nav>
					<NavLink
						to='/login'
						className={'Navigation-item'}>
						Login
					</NavLink>
					<NavLink
						to='/signup'
						className={'Navigation-item'}>
						Sign Up
					</NavLink>
				</Nav>
			)}
		</Navbar>
	);
}

export default Navigation;
