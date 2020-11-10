import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';

import './header.scss';
import './header__ul.scss';
import  './header__li.scss';

import './header__burger.scss';


export const Header = () => {
    
    const[burger, setBurger] = useState(false);

    const showBurger =()=> {
        setBurger(!burger);
    }

    
        useEffect(() => {
        const onScroll = () => {
            setBurger(!burger);
        };

        if(burger) {
            window.addEventListener("scroll", onScroll);
        }

        return () => window.removeEventListener("scroll", onScroll);
    }, [burger]);


    return (
        <header className="page-header">
            <div className={`page-header__toggle-wrap${burger ? " page-header__toggle-wrap-open" : ""}`}>
                <button 
                    className="menu-button"
                    onClick={showBurger}>
                        <div className={`hamburger-menu${burger ? " animate" : ""}`}></div>
                </button>
            </div>
            <ul  className={`page-header__ul${burger ? " page-header__ul-open" : ""}`}>
                <li className="page-header__li">
                    <NavLink 
                        exact to="/" 
                        className="page-header__li__a"
                        activeStyle={{fontWeight: "500", opacity: "1"}} 
                        onClick={showBurger}>
                            Home
                    </NavLink>
                </li>
                <li className="page-header__li">
                    <NavLink 
                        to="/skills" 
                        className="page-header__li__a"
                        activeStyle={{fontWeight: "500", opacity: "1"}} 
                        onClick={showBurger}>
                            Skills
                    </NavLink>
                </li>
                <li className="page-header__li">
                    <NavLink 
                        to="/portfolio" 
                        className="page-header__li__a"
                        activeStyle={{fontWeight: "500", opacity: "1"}} 
                        onClick={showBurger}>
                            Portfolio
                    </NavLink>
                </li>
                <li className="page-header__li">
                    <NavLink 
                        to="/contacts" 
                        className="page-header__li__a"
                        activeStyle={{fontWeight: "500", opacity: "1"}} 
                        onClick={showBurger}>
                            Сontacts
                    </NavLink>
                </li>
                <li className="page-header__li page-header__li-cv">
                    <a className="page-header__li-cv__a" href="https://resume.io/r/5HdR3Fmvv">View CV</a>
                </li>
            </ul>
        </header>
    );
};
