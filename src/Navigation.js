import { NavLink } from "react-router-dom";


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
//TODO: classname in outer div needed
function Navigation() {
  return(
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/companies'>Companies</NavLink>
      <NavLink to='/jobs'>Jobs</NavLink>
    </div>
  )
}


export default Navigation;