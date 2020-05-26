import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {

	function showCart() {
        document.querySelector(".cart").classList.add("cart__is-visible");
        document.querySelector(".app").classList.add("app__is-visible");
	}

	function showSearch() {
        document.querySelector(".search").classList.add("search__is-visible");
        document.querySelector(".app").classList.add("app__is-visible");
	}

	
	return (
		<header className="header">
			<div className="header__container">
				<Link to="/" className="header__logo" >FASHIONISTA</Link>
				<div className="header__icons">
					<button onClick={showSearch}>
						<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
					</button>
					<button onClick={showCart}>
					<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
					</button>
				</div>
			</div>
		</header>
	)
};

export default Header;
