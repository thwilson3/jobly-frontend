import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import ProfileForm from "./ProfileForm";
import { useContext } from "react";
import userContext from "./userContext";

/**
 * Renders route components
 *
 * Props:
 *  - register - function
 *  - login - function
 *  - profile - function
 *  - currentUser - object
 *
 * State:
 * - none
 *
 * Context:
 * - activeUser
 *
 * App -> RoutesList -> { Homepage, CompanyList, CompanyDetail, JobList }
 *
 */
function RoutesList({ register, login, profile, currentUser }) {
  const { activeUser } = useContext(userContext);
  console.log("actuser inside routes list", activeUser);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/companies"
        element={activeUser.username ? <CompanyList /> : <Navigate to={"/"} />}
      />
      <Route
        path="/companies/:handle"
        element={
          activeUser.username ? <CompanyDetail /> : <Navigate to={"/"} />
        }
      />
      <Route
        path="/jobs"
        element={activeUser.username ? <JobList /> : <Navigate to={"/"} />}
      />
      <Route path="/login" element={<LoginForm handleRequest={login} />} />
      <Route path="/signup" element={<SignUpForm handleRequest={register} />} />
      <Route
        path="/profile"
        element={
          activeUser.username ? (
            <ProfileForm handleRequest={profile} currentUser={currentUser} />
          ) : (
            <Navigate to={"/"} />
          )
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
