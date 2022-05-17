import React from 'react';
import { Link } from 'react-router-dom';
import About from '../../Pages/About/About';
import Appointment from '../../Pages/Appointment/Appointment';
import Contact from '../../Pages/Contact/Contact';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Reviews from '../../Pages/Reviews/Reviews';

const Navbar = () => {
	const items = <>
	
			<li>
				<Link to='/' element={<Home></Home>}> Home </Link>
			</li>
			<li>
				<Link to='/appointment' element={<Appointment></Appointment>}> Appointment  </Link>
			</li>
			<li>
				<Link to='/review' element={<Reviews></Reviews>}> Reviews  </Link>
			</li>
			<li>
				<Link to='/contact' element={<Contact></Contact>}> Contact  </Link>
				
			</li>
			<li>
				<Link to='/about' element={<About></About>}> About  </Link>
				
			</li>
			<li>
				<Link to='/login' element={<Login></Login>}> Login </Link>
				
			</li>
	
	</>
	return (
		<div class="navbar bg-base-100">
			<div class="navbar-start p-8">
				<div class="dropdown">
					<label tabindex="0" class="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
						{items}
					</ul>
				</div>
				<Link to = '/' class="btn btn-ghost normal-case text-xl">Doctors Portal </Link>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal p-0">
					{items}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;