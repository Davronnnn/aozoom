import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledNavUl } from './NavUl.style';

function Navigation({ showMenu }) {
	return (
		<StyledNavUl>
			<nav className='nav_response'>
				<div>
					<NavLink
						onClick={() => showMenu()}
						className='nav_link'
						to='/'>
						Главная
					</NavLink>
				</div>
				<div>
					<NavLink
						onClick={() => showMenu()}
						className='nav_link'
						to='/about'>
						О компании
					</NavLink>
				</div>

				<div>
					<NavLink
						onClick={() => showMenu()}
						className='nav_link'
						to='/products'>
						Товары
					</NavLink>
				</div>
			</nav>
		</StyledNavUl>
	);
}

export default Navigation;
