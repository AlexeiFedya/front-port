import React from 'react';



import './skills.scss';
import './wrap-content-skills-page.scss';
import './wrap-content-skills.scss';
import './about-me.scss';

import './animation.scss'

export const ContentSkills = () => {
    return (
        <div className="wrap-content-skills-page">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>
            <div className="wrap-content-skills">
                <div className="skills">
                    <div className="skill-item">
                        <p className="skill-title">React</p>
                        <div className="progress">
                        <div className="progess-bar progess-react"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p className="skill-title">Redux</p>
                        <div className="progress">
                        <div className="progess-bar progess-redux"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p className="skill-title">JavaScript</p>
                        <div className="progress">
                        <div className="progess-bar progess-js"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p className="skill-title">HTML</p>
                        <div className="progress">
                        <div className="progess-bar progess-html"></div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <p className="skill-title">CSS/LESS/SASS</p>
                        <div className="progress">
                        <div className="progess-bar progess-css"></div>
                        </div>
                    </div>
                        <div className="skill-item">
                            <p className="skill-title">REST API</p>
                            <div className="progress">
                            <div className="progess-bar progess-api"></div>
                            </div>
                    </div>
                    <div className="skill-item">
                        <p className="skill-title">English</p>
                        <div className="progress">
                        <div className="progess-bar progess-en"></div>
                        </div>
                    </div>
                </div>
                <div className="skills about-me">
                    <p className="skill-title">
                            I has 6+ month of experience writing single page applications. I has good knowledge of JavaScript,
                        HTML5, CSS3/LESS/SASS, adaptive/responsive layout, version-control(git), npm, webpack and browsers
                        APIs as well as  experience with popular frameworks and libraries keen on React and Redux. There was 
                        experience in php. Pre-Intermediate level English (learning in Streamline school now)
                    </p>
                </div>
            </div>
        </div>
        // <main className="wrap-content-skills-page">
        //     <div className="wrap-content-skills">
        //         <div className="about-me">
        //         I has 6+ month of experience writing single page application. I has good knowledge of JavaScript,
        //         HTML5, CSS3/LESS/SASS, adaptive/responsive layout, version-control(git), npm, webpack and browsers
        //         APIs as well as  experience with popular frameworks and libraries keen on React and Redux. There was 
        //         experience in php. Pre-Intermediate level English (learning in Stream school now)
        //         </div>
        //         <div className="skills">
        //             <div className="skill-item">
        //                 <p className="skill-title">HTML</p>
        //                 <div className="progress">
        //                 <div className="progess-bar progess-html"></div>
        //                 </div>
        //             </div>
        //             <div className="skill-item">
        //                 <p className="skill-title">CSS</p>
        //                 <div className="progress">
        //                 <div className="progess-bar progess-css"></div>
        //                 </div>
        //             </div>
        //             <div className="skill-item">
        //                 <p className="skill-title">JS</p>
        //                 <div className="progress">
        //                 <div className="progess-bar progess-js"></div>
        //                 </div>
        //             </div>
        //             <div className="skill-item">
        //                 <p className="skill-title">JS</p>
        //                 <div className="progress">
        //                 <div className="progess-bar progess-js"></div>
        //                 </div>
        //             </div>
        //             <div className="skill-item">
        //                 <p className="skill-title">JS</p>
        //                 <div className="progress">
        //                 <div className="progess-bar progess-js"></div>
        //                 </div>
        //             </div>
        //             <div className="skill-item">
        //                 <p className="skill-title">JS</p>
        //                 <div className="progress">
        //                 <div className="progess-bar progess-js"></div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </main>
    );
};