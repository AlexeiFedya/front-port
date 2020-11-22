import React from 'react';


import './portfolio-project.scss';
import '../content-skillspage/animation.scss'



export const CardsItem = ({cards}) => {
    return (
        <div className="portfolio-project">
            <div className="portfolio-project__hover">
                <a href={cards.link}
                    className="portfolio-project__link">
                    <figure className="portfolio-project__link-figure">
                        <img  src={cards.logo} alt="cards"/>
                        <img  src={cards.img1} alt="cards"/>
                        <img  src={cards.img2} alt="cards"/>
                        <img  src={cards.img3} alt="cards"/>
                    </figure>
                </a>
                <div className="portfolio-project__text-wrap">
                    <div className="portfolio-project__text">
                        <h1 className="portfolio-project__text__h1">{cards.headtext}</h1>
                        <a href={cards.website} className="portfolio-project__text__a">{cards.namewebsite}</a>
                        {cards.namewebsite1 ? <a href={cards.website1} className="portfolio-project__text__a"> {cards.namewebsite1} </a> : null}
                        <a href={cards.git} className="portfolio-project__text__a">GitHub</a>
                        <p className="portfolio-project__text__p">Stack: {cards.stack}</p>
                        <p className="portfolio-project__text__p">{cards.text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}