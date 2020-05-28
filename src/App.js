import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './components/Login.js';
import Error from './components/Error.js';
import Landing from './components/Landing.js';
import Session from './components/Session.js';
import Resources from './components/Resources.js';
import Help from './components/Help.js';

import AddSession from './components/staff-options/AddSession.js';
import SessionsList from './components/staff-options/SessionsList.js';
import AddResource from './components/staff-options/AddResource.js';
import EditResource from './components/staff-options/EditResource.js';
import Profile from './components/staff-options/Profile.js';

function App() {

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact render={() => <Login />} />
				<Route path='/landing' exact render={props => <Landing {...props} />} />
				<Route path='/session' render={() => <Session />} />
				<Route path='/resources' render={() => <Resources />} />
				<Route path='/add-session' render={() => <AddSession />} />
				<Route path='/edit-session' render={() => <SessionsList />} />
				<Route path='/add-resource' render={() => <AddResource />} />
				<Route path='/edit-resource' render={() => <EditResource />} />
				<Route path='/profile' render={() => <Profile />} />
				<Route path='/help' render={() => <Help />} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
