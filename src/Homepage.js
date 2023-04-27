import { useContext } from 'react';
import './Homepage.css';
import userContext from './userContext';
/** Renders homepage
 *
 *  props:
 *  -none
 *
 *  state:
 *  -none
 *
 *  Routes -> Homepage
*/
function Homepage() {
  const { currentUser } = useContext(userContext);

  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <h2>Your job. Simplified.</h2>
      {currentUser?.firstName && <h2>Welcome back, {currentUser.firstName}.</h2>}
    </div>
  )
};

export default Homepage