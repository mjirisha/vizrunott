import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <Link to='/' className='logo'>
          <img src={logo} alt='ვიზრუნოთ ლოგო' />
        </Link>
        <nav className='nav nav__main'>
          <NavLink
            exact
            to='/'
            activeClassName='active'
            className='link link__menu-item'
          >
            მთავარი გვერდი
          </NavLink>
          <NavLink
            to='/about'
            activeClassName='active'
            className='link link__menu-item'
          >
            ჩვენ შესახებ
          </NavLink>
          <NavLink
            to='/faq'
            activeClassName='active'
            className='link link__menu-item'
          >
            კითხვა-პასუხი
          </NavLink>
          <NavLink
            to='/contact'
            activeClassName='active'
            className='link link__menu-item'
          >
            კონტაქტი
          </NavLink>
          <NavLink
            to='/ads'
            activeClassName='active'
            className='link link__menu-item'
          >
            რეკლამა საიტზე
          </NavLink>
        </nav>

        <div className='btns'>
          <div className='btn btn-high btn-light lang'>
            <span>geo</span>
            {/* <a href="" className="lang_item">eng</a>
            <a href="" className="lang_item">rus</a> */}
          </div>

          <div className='btn btn-high btn-blue profile'>
            <span className='profile__item'>ჩემი ანგარიში</span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
