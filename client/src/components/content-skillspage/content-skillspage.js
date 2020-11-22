import React from 'react';

import { Skills } from './skills'

import './skills.scss';
import './wrap-content-skills-page.scss';
import './wrap-content-skills.scss';
import './about-me.scss';

import './animation.scss'

export const ContentSkills = () => {

    const skills = [
        {   id:1, 
            name: 'React/Redux',
            classN: "progess-react",
        },
        {   id:2, 
            name: 'Node.js/Express.js',
            classN: "progess-node",
        },
        {   id:3, 
            name: 'JavaScript',
            classN: "progess-js",
        },
        {   id:4, 
            name: 'HTML',
            classN: "progess-html",
        },
        {   id:5, 
            name: 'CSS/LESS/SASS',
            classN: "progess-css",
        },
        {   id:6, 
            name: 'REST API',
            classN: "progess-api",
        },
        {   id:7, 
            name: 'English',
            classN: "progess-en",
        }
    ]


    return (
        <div className="wrap-content-skills-page">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
            <div className="wrap-content-skills">
                <Skills skills={skills}/>
                <div className="skills about-me">
                    <p className="skill-title">
                        I has 8+ month of experience writing single page applications. Good knowledge and experience with modern Front-end frameworks React, functional programming. Good understanding Flux architecture.
                        Understanding and experience of asynchronous request handling, partial page updates, and AJAX.  Experience with front-end build systems webpack. I has good knowledge of version-control ( Git ).
                    </p>
                    <p className="skill-title">
                        I can read designs in Figma/Sketch and implement as code in React. I has good knowledge of adaptive/responsive layout and basic understanding of methodology BEM.
                    </p>
                    <p className="skill-title">
                    There was experience in php.
                    </p>
                </div>
            </div>
        </div>
    );
};