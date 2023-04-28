import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import JoblyApi from './api';
import userContext from './userContext';
import jwt_decode from 'jwt-decode';

/**
 * Renders App
 *
 * Props:
 *  - none
 *
 * State:
 * - currentUser - object
 * - userToken - string
 *
 * App -> { Navigation, RoutesList }
 *
 */
function App() {
	const [currentUser, setCurrentUser] = useState(null);
	const [userToken, setUserToken] = useState(null);
	let activeUser = {
		username: currentUser?.username,
		firstName: currentUser?.firstName,
	};

	useEffect(
		function fetchCurrentUserDataOnChange() {
			async function fetchCurrentUserData() {
				const { username } = jwt_decode(userToken);
				console.log('username', username);
				const user = await JoblyApi.getUser(username);
				setCurrentUser(user);
			}
			if (userToken) fetchCurrentUserData();
		},
		[userToken]
	);

	/** Submit server request to register user. */
	async function register(userData) {
		const token = await JoblyApi.signUp(userData);
		setUserToken(token);
	}

	/** Submit server request to log in user. */
	async function login(userData) {
		const token = await JoblyApi.login(userData);
		setUserToken(token);
	}

	/** Submit server request to update user. */
	async function profile(userData) {
		console.log('inside handleprof req app.js');
		const user = await JoblyApi.updateProfile(userData);
		setCurrentUser(user);
	}

	function handleLogout() {
		setCurrentUser(null);
		setUserToken(null);
	}

	return (
		<div className='App'>
			<userContext.Provider value={{ activeUser }}>
				<BrowserRouter>
					<Navigation handleLogout={handleLogout} />
					<RoutesList
						register={register}
						login={login}
						profile={profile}
						currentUser={currentUser}
					/>
				</BrowserRouter>
			</userContext.Provider>
		</div>
	);
}

export default App;
