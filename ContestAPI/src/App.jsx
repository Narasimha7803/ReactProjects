import React,{ useState } from 'react';
import Login from './Components/Login';
import Profile from './Components/Profile';
import './App.css';
import UserContextProvider from './Context/UserContextProvider';

function App() {
	

	return (
        // when ever we wrap this all components aware of that data
		<UserContextProvider>
			<Login />
			<Profile />
		</UserContextProvider>
       
	);
}

export default App;
