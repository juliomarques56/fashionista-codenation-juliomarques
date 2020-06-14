import React from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { toggleCartVisible } from "../../store/actions/cart";
import { toggleSearchVisible } from "../../store/actions/search";

import Counter from '../Counter'
import logo from '../../assets/img/Logo_mariamel--white.png';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import './style.scss';

function Header({ count }) {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClickLogo = () => {
		history.push("/");
	};

	const handleClickCart = () => {
		dispatch(toggleCartVisible());
	};

	const handleClickSearch = () => {
		dispatch(toggleSearchVisible());
	};

	return (
		<header className="header">
			<div className="header__container">
				<span className="header__logo" onClick={handleClickLogo}>
					<img src={logo} alt=""/>	
				</span>
				<div className="header__icons">
					<button className="header__icons--search" onClick={handleClickSearch}>
						<FaSearch alt="Search"/>
					</button>
					<button className="header__button--cart" onClick={handleClickCart}>
						<FaShoppingCart/>
						<Counter counter={count}/>
					</button>
				</div>
			</div>
		</header>
	)
};

const mapStateToProps = (state) => ({
	count: state.cart.count,
  });
  
  export default connect(mapStateToProps)(Header);
