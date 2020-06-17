import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Back} from './icons/back.svg';
import './Navbar.css';

const Navbar = () => {
	return (
		<>
		<section className="navbar">
		<Link to='/landing'><Back className="home"/></Link>
		
		</section>
		</>
	)
}

export default Navbar;
