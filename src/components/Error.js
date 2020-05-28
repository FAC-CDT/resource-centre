import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return(
		<section>
			<h1>Error 404: Page not found</h1>
			<Link to='/' alt="Back to homepage"><button>Back to homepage</button></Link>
		</section>
	)
}

export default Error;
