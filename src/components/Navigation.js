import React from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';

let activeStyle = {
	color: '#D81E5B',
};

const Navigation = () => {
	return (
		<div className='nav-body'>
			<ul className='nav'>
				<li>
					<NavLink to={'/home'} style={({isActive}) => isActive ? activeStyle : undefined}>Home</NavLink>
				</li>
				<li>
					<NavLink to={'/projects'} style={({isActive}) => isActive ? activeStyle : undefined}>Projects</NavLink>
				</li>
				<li>
					<div><a download={'cv.pdf'} target="_blank" href='./Resume-Bartłomiej-Batko.pdf'>CV</a></div>
				</li>
				<li>
					<NavLink to={'/contact'} style={({isActive}) => isActive ? activeStyle : undefined}>Contact</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
