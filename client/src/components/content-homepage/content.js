import React, {useLayoutEffect, useRef, useState } from 'react';
import prog from '../../img/Artboard.svg';


import './wrapp-home-content.scss';
import './wrapp-home-answer.scss';
import './home-quest-for-me.scss';
import './home-animation-block.scss';
import './home-img.scss'


export  const ContentHomePage = () => {
    
    const [show, doShow] = useState({
        itemOne: false
        // itemTwo: false,
        // itemThree: false
      });
      const ourRef = useRef(null)
        // anotherRef = useRef(null),
        // refThree = useRef(null);
    
        useLayoutEffect(() => {
            const topPos = element => element.getBoundingClientRect().top;
           //added to reduce redundancy
            const div1Pos = topPos(ourRef.current);
                // div2Pos = topPos(anotherRef.current),
                // div3Pos = topPos(refThree.current);
        
            const onScroll = () => {
                const scrollPos = window.scrollY + window.innerHeight;
                if (div1Pos < scrollPos) {
                    doShow(state => ({ ...state, itemOne: true }));
                } 
                // else if (div2Pos < scrollPos) {
                //     doShow(state => ({ ...state, itemTwo: true }));
                // } else if (div3Pos < scrollPos) {
                //     doShow(state => ({ ...state, itemThree: true }));
                // }
            };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <>
                <div className="wrapp-home-content">
                    <div className="wrap-home-answer">
                        <div ref={ourRef} className={`home-first-div-defolt${show.itemOne ? " home-div-anim" : ""}`}>
                            <div className="home-quest-for-me">
                                <p>What is me ?</p>
                            </div> 
                            <div className="home-for-me">
                                <p>I am the capable young man living in Minsk who is ready to work. As you may 
                                    have already guessed I frontend devoloper.</p>
                                <p>I am an approachable chap you can coax out with work, ale or sporting activity.</p>
                            </div> 
                        </div>
                        {/* <div ref={ourRef} className={`home-second-div-defolt${show.itemOne ? " home-div-anim" : ""}`} >
                            <div className="home-quest-for-me">
                                <p>What i do ?</p>
                            </div> 
                            <div className="home-for-me">
                                <p>Front-end development</p>
                                <p>Bear hugs</p>
                            </div> 
                        </div> */}
                        <div className="home-img">
                            <img  src={prog} alt="logo"/>
                        </div>
                    </div>
                </div>
        </>
      )
}