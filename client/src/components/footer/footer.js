import React from 'react';

import './footer-wrap.scss';
import './footer-social.scss';



import lnk from '../../img/linkedin-square-logo.svg';
import git from '../../img/github-logo-silhouette-in-a-square.svg';
import tel from '../../img/telegram.svg';


const Footer = () => {
return (
        <footer className="footer-wrap">
                <ul className="footer__ul-social">
                    <li className="footer__li">
                        <a href="https://linkedin.com/in/алексей-федько"
                            className="footer__li__a">
                            <img className="footer__li__image" src={lnk}  alt="lnk"/>
                        </a>
                    </li>
                    <li className="footer__li">
                        <a href="https://github.com/AlexeiFedya"
                            className="footer__li__a">
                            <img className="footer__li__image" src={tel}  alt="tel"/>
                        </a>
                    </li>
                    <li className="footer__li">
                        <a href="https://github.com/AlexeiFedya"
                            className="footer__li__a">
                            <img className="footer__li__image" src={git}  alt="git"/>
                        </a>
                    </li>
                </ul>
        
                <ul className="footer__ul-requisites">
                    <li className="footer__li-number">
                        <a href="tel:+375292197844" className="footer__text">+375(29) 219-78-44</a>
                    </li>
                    <li className="footer__li-reserved">
                        <p className="footer__text" >All rights reserved © 2020 Alexey Fedko</p>
                    </li>
                    <li className="footer__li-email">
                        <a href="mailto:fedya5711@icloud.com" className="footer__text">fedya5711@icloud.com</a>
                    </li>
                </ul>
        
        </footer>
    )
}
export {
    Footer
};