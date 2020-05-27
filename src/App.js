import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Landing from './Landing.js';
import Error from './Error.js';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact render={() => <Landing />} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
