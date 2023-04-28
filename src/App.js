import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import Navigation from "./Navigation";
import JoblyApi from "./api";
import userContext from "./userContext";
import jwt_decode from "jwt-decode";

/**
 *
 * Renders App
 *
 * Props:
 *  - none
 *
 * State:
 * - none
 *
 * App -> { Navigation, RoutesList }
 *
 */
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userToken, setUserToken] = useState(null);

  async function handleRegisterRequest(userData) {
    const token = await JoblyApi.signUp(userData);
    setUserToken(token);
  }

  async function handleLoginRequest(userData) {
    const token = await JoblyApi.login(userData);
    setUserToken(token);
  }

  async function handleProfileRequest(userData) {
    console.log("inside handleprof req app.js");
    const user = await JoblyApi.updateProfile(userData);
    setCurrentUser(user);
  }

	function handleLogout() {
		setCurrentUser(null);
		setUserToken(null);
}

  useEffect(
    function fetchCurrentUserDataOnChange() {
      async function fetchCurrentUserData() {
        const { username } = jwt_decode(userToken);
        console.log("username", username);
        setCurrentUser(await JoblyApi.getUser(username));
      }
      if (userToken) fetchCurrentUserData();
    },
    [userToken]
  );

  return (
    <div className="App">
      <userContext.Provider value={{ currentUser }}>
        <BrowserRouter>
          <Navigation
            currentUser={currentUser}
            handleLogout={handleLogout}
          />
          <RoutesList
            handleRegisterRequest={handleRegisterRequest}
            handleLoginRequest={handleLoginRequest}
            handleProfileRequest={handleProfileRequest}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
