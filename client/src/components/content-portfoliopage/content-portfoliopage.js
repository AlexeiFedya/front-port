import React from 'react';

import bithoven from '../../img/bith/bithoven.png';
import bit1 from '../../img/bith/bith1.png';
import bit2 from '../../img/bith/bith2.png';
import bit3 from '../../img/bith/bith3.png';


import luminocity from '../../img/lumino/luminocity.png';
import lumino1 from '../../img/lumino/lumino1.png';
import lumino2 from '../../img/lumino/lumino2.png';
import lumino3 from '../../img/lumino/lumino3.png';

import shop from '../../img/shop/shop.png';
import todolist from '../../img/todolist/todolist.png';



import './wrap-content-portfolio-page.scss';
import './wrap-content-portfolio.scss';
import './portfolio-project.scss';
import '../content-skillspage/animation.scss'


export const ContentPortfoli = () => {
    return (
        <div className="wrap-content-content-portfolio-page">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
            <div className="wrap-content-content-portfolio">
                <div className="portfolio-project">
                    <div className="portfolio-project__hover">
                        <a href="https://linkedin.com/in/алексей-федько"
                            className="portfolio-project__link">
                            <figure className="portfolio-project__link-figure">
                                <img  src={bithoven} alt="bihoven-payment"/>
                                <img  src={bit1} alt="bihoven-payment"/>
                                <img  src={bit2} alt="bihoven-payment"/>
                                <img  src={bit3} alt="bihoven-payment"/>
                            </figure>
                        </a>
                        <div className="portfolio-project__text-wrap">
                            <div className="portfolio-project__text">
                                <h1>укаука</h1>
                                <p>укаукаовариримравм</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="portfolio-project__hover">
                        <a href="https://linkedin.com/in/алексей-федько"
                            className="portfolio-project__link">
                            <figure className="portfolio-project__link-figure">
                                <img  src={luminocity} alt="luminocity"/>
                                <img  src={lumino1} alt="luminocity"/>
                                <img  src={lumino2} alt="luminocity"/>
                                <img  src={lumino3} alt="luminocity"/>
                            </figure>
                        </a>
                        <div className="portfolio-project__text-wrap">
                            <div className="portfolio-project__text">
                                <h1>укаука</h1>
                                <p>укаукаовариримравм</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="portfolio-project__hover">
                        <a href="https://linkedin.com/in/алексей-федько"
                            className="portfolio-project__link">
                            <figure className="portfolio-project__link-figure">
                                <img  src={shop} alt="luminocity"/>
                                <img  src={lumino1} alt="luminocity"/>
                                <img  src={lumino2} alt="luminocity"/>
                                <img  src={lumino3} alt="luminocity"/>
                            </figure>
                        </a>
                        <div className="portfolio-project__text-wrap">
                            <div className="portfolio-project__text">
                                <h1>укаука</h1>
                                <p>укаукаовариримравм</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="portfolio-project__hover">
                        <a href="https://linkedin.com/in/алексей-федько"
                            className="portfolio-project__link">
                            <figure className="portfolio-project__link-figure">
                                <img  src={todolist} alt="luminocity"/>
                                <img  src={lumino1} alt="luminocity"/>
                                <img  src={lumino2} alt="luminocity"/>
                                <img  src={lumino3} alt="luminocity"/>
                            </figure>
                        </a>
                        <div className="portfolio-project__text-wrap">
                            <div className="portfolio-project__text">
                                <h1>укаука</h1>
                                <p>укаукаовариримравм</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}