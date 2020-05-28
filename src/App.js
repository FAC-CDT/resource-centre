import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Landing from './Landing.js';
import Error from './Error.js';
import Menu from './Menu.js';

function App() {

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact render={() => <Landing />} />
				<Route path='/menu' exact render={props => <Menu {...props} />} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
