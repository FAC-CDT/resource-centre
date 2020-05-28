import React from 'react';
import { Link } from 'react-router-dom';

const StaffMenu = () => {
	return (
		<section>
			<h1>Welcome Staff Member!</h1>
			<button>Add a session</button>
			<button>Edit sessions</button>
			<button>Add a resource</button>
			<button>Edit resources</button>
			<button>Current Session</button>
			<button>Profile</button>
			<Link to='/'>Log out</Link>
		</section>
	)
}

export default StaffMenu;
