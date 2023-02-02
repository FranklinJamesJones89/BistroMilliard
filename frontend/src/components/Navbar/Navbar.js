import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import './Navbar.css';

const Navbar = () => {
	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<h1>Bistro Milliard</h1>
			</div>
			<ul className='app__navbar-links'>
				<li className='p__opensans'><a href='#home'>Home</a></li>
				<li className='p__opensans'><a href='#about'>About</a></li>
				<li className='p__opensans'><a href='#menu'>Menu</a></li>
				<li className='p__opensans'><a href='#awards'>Awards</a></li>
				<li className='p__opensans'><a href='#contact'>Contact</a></li>
			</ul>
		</nav>
	)
}


export default Navbar;
