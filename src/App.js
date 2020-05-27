import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import './App.css';
import Landing from './Landing.js';
import Error from './Error.js';
import Menu from './Menu.js';

function App() {
	const [user, setUser] = React.useState(null);

	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact render={() => <Landing setUser={setUser} />} />
				<Route path='/menu' exact render={() => <Menu user={user} setUser={setUser} />} />
				<Route component={Error} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
