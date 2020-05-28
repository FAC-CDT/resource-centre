import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './Login.js';
import Error from './Error.js';
import Landing from './Landing.js';

function App() {

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact render={() => <Login />} />
				<Route path='/landing' exact render={props => <Landing {...props} />} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
