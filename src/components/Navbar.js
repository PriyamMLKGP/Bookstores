import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
export default function Navbar() {
    return (
        <div>
            <Router>
                <header className="header">

                    <div className="header-1">

                        <Link to="#" className="logo"> <i className="fas fa-book"></i> bookly </Link>

                        <form action="" className="search-form">
                            <input type="search" name="" placeholder="search here..." id="search-box" />
                            <label htmlFor="search-box" className="fas fa-search"></label>
                        </form>

                        <div className="icons">
                            <div id="search-btn" className="fas fa-search"></div>
                            <Link to="/" className="fas fa-heart"></Link>
                            <Link to="/" className="fas fa-shopping-cart"></Link>
                            <div id="login-btn" className="fas fa-user"></div>
                        </div>

                    </div>

                    <div className="header-2">
                        <nav className="navbar">
                            <Link to="/">home</Link>
                            <Link to="/">featured</Link>
                            <Link to="/">arrivals</Link>
                            <Link to="/">reviews</Link>
                            <Link to="/">blogs</Link>
                        </nav>
                    </div>

                </header></Router>
        </div>
    )
}