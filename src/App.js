import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import JoblyApi from './api';
import userContext from './userContext';

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

	async function handleRegisterRequest(userData) {
		const newUser = await JoblyApi.signUp(userData);
		console.log('newUser', newUser);
		setCurrentUser(newUser);
	}

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
