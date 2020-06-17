import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar/Navbar'

const Error = () => {
	return(
		<section>
			<Navbar />
			<h1>Error 404: Page not found</h1>
			<Link to='/landing' alt="Back to homepage"><button>Back to homepage</button></Link>
		</section>
	)
}

export default Error;
