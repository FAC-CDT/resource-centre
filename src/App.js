import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './components/Login.js';
import Error from './components/Error.js';
import Landing from './components/Landing.js';
import Session from './components/Session.js';
import Resources from './components/Resources.js';
import Help from './components/Help.js';
import AddSession from './components/Add-session.js';
import SessionsList from './components/SessionsList.js';
import AddResource from './components/Add-resource.js';
import EditResource from './components/Edit-resource.js';
import Profile from './components/Profile.js';

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
