import React from "react";
import './Nav.scss';
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className="topnav">
            <NavLink to='/' activeclassname='active' exact='true'>
                Home
            </NavLink>
            <NavLink to='/login' activeclassname='active'>
                Login
            </NavLink>
            <NavLink to='/signin' activeclassname='active'>
                SignIn WRD
            </NavLink>
            <NavLink to='/listredux' activeclassname='active'>
                DataRD
            </NavLink>
            {/* <Link to='/'>Home</Link> //Link not sp className
            <Link to='/login'>Login</Link>
            <Link to='/signin'>Sign In</Link>
            <a className="active" href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/signin">Sign In</a> */}
        </div>
    );
}

export default Nav;