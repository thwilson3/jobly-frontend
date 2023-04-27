import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import JoblyApi from './api';
import userContext from './userContext';
import jwt_decode from 'jwt-decode';

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
		setUserToken(token)
	}

	useEffect(
    function fetchCurrentUserDataOnChange() {
      async function fetchCurrentUserData() {
        try {
					const { username } = jwt_decode(userToken)
					console.log("username", username);
          setCurrentUser(await JoblyApi.getUser({ username: username }));

        } catch (error) {

        }
      }
      fetchCurrentUserData();
    },
    [userToken]
  );



	return (
		<div className='App'>
			<userContext.Provider value={{ currentUser }}>
				<BrowserRouter>
					<Navigation />
					<RoutesList handleRegisterRequest={handleRegisterRequest} />
				</BrowserRouter>
			</userContext.Provider>
		</div>
	);
}

export default App;
