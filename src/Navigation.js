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
function Navigation() {
	return (
		<Navbar className='Navigation'>
			<NavbarBrand href='/'>Jobly</NavbarBrand>
			<Nav>
				<NavLink to='/companies' className={'Navigation-item'}>Companies</NavLink>
				<NavLink to='/jobs' className={'Navigation-item'}>Jobs</NavLink>
			</Nav>
		</Navbar>
	);
}

export default Navigation;
