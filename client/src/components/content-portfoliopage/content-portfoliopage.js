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
import shop1 from '../../img/shop/sh1.png';
import shop2 from '../../img/shop/sh2.png';
import shop3 from '../../img/shop/sh3.png';

import todolist from '../../img/todolist/todolist.png';
import todolist1 from '../../img/todolist/todo1.png';
import todolist2 from '../../img/todolist/todo2.png';
import todolist3 from '../../img/todolist/todo3.png';

import eventBiz from '../../img/EventBizPro/eventBiz.png';
import eventBiz1 from '../../img/EventBizPro/ev1.png';
import eventBiz2 from '../../img/EventBizPro/ev2.png';
import eventBiz3 from '../../img/EventBizPro/ev3.png';

import counter from '../../img/red-box/counter.png';
import counter1 from '../../img/red-box/reb1.png';
import counter2 from '../../img/red-box/reb2.png';
import counter3 from '../../img/red-box/reb3.png';

import stardb from '../../img/stardb/stardb.png';
import stardb1 from '../../img/stardb/str1.png';
import stardb2 from '../../img/stardb/str2.png';
import stardb3 from '../../img/stardb/str3.png';

import portf from '../../img/myport/portf.png';
import portf1 from '../../img/myport/portf1.png';
import portf2 from '../../img/myport/portf2.png';
import portf3 from '../../img/myport/potrf3.png';


import './wrap-content-portfolio-page.scss';
import './wrap-content-portfolio.scss';
import './portfolio-project.scss';
import '../content-skillspage/animation.scss'

import {Cards} from './cards'





export const ContentPortfoli = () => {
    const cards = [
        {   id:1, 
            link: '#',
            logo: portf,
            img1: portf1,
            img2: portf2,
            img3: portf3,
            website: "#",
            stack: "HTML, SCSS, JS, React, Node.js, Express.js, MongoDB",
            git: "https://github.com/AlexeiFedya/front-port",
            namewebsite: "This website is in working progress",
            headtext: "My Portfolio",
            text: "This is single page application, where we have front and back. we can send data in db"
        },

        {   id:2, 
            link: '#',
            logo: bithoven,
            img1: bit1,
            img2: bit2,
            img3: bit3,
            git: "-",
            website: "#",
            stack: "HTML, CSS, JS, PHP",
            namewebsite: "This website is in working progress",
            headtext: "Financial Services ",
            text: "This is financial service i had done since september 2020, where you can buy and sell cryptocurrency. I created adaptive pages layout and multilanguage (where you change language)."
        },


        {   id:3, 
            link: 'https://luminocity.shop/',
            logo: luminocity,
            img1: lumino1,
            img2: lumino2,
            img3: lumino3,
            git: "-",
            stack: "HTML, CSS, JS, PHP",
            website: "https://luminocity.shop/",
            namewebsite: "Website",
            headtext: "E-commerce Project",
            text: "This is service when you can buy product. I had done since september 2019. I created only adaptive pages layout"
        } ,

        {   id:4, 
            link: 'https://AlexeiFedya.github.io/belh_task1',
            logo: eventBiz,
            img1: eventBiz1,
            img2: eventBiz2,
            img3: eventBiz3,
            stack: "HTML, CSS, Bootstrap, JS, React, Redux",
            git: "https://github.com/AlexeiFedya/belh_task1",
            website: "https://AlexeiFedya.github.io/belh_task1",
            namewebsite: "Website1",
            website1: "https://AlexeiFedya.github.io/belh_task2",
            namewebsite1: "Website2",
            headtext: "Test task",
            text: "Firs task for bel hard, i created desctop pages layout. And the second task: i created login emulation, where data save in local storage ( it's not safe but such a task was)"
        },    

        {   id:5, 
            link: 'https://AlexeiFedya.github.io/redux-store',
            logo: shop,
            img1: shop1,
            img2: shop2,
            img3: shop3,
            stack: "HTML, CSS, Bootstrap, JS, React, Redux",
            git: "https://github.com/AlexeiFedya/redux-store",
            website: "https://AlexeiFedya.github.io/redux-store",
            namewebsite: "Website",
            headtext: "Home Project",
            text: "This is single page application, where you can add,delete or change product in shopping basket"
        } ,

        {   id:6, 
            link: 'https://alexeifedya.github.io/todo-list/',
            logo: todolist,
            img1: todolist1,
            img2: todolist2,
            img3: todolist3,
            stack: "HTML, CSS, Bootstrap, JS, React",
            git: "https://github.com/AlexeiFedya/todo-list",
            website: "https://alexeifedya.github.io/todo-list/",
            namewebsite: "Website",
            headtext: "Home Project",
            text: "This is single page application, where you can add, delete, change, mark  your task."
        },

        {   id:7, 
            link: 'https://alexeifedya.github.io/redux-box',
            logo: counter,
            img1: counter1,
            img2: counter2,
            img3: counter3,
            stack: "HTML, CSS, Bootstrap, JS, React, Redux",
            git: "https://github.com/AlexeiFedya/redux-box",
            website: "https://alexeifedya.github.io/redux-box",
            namewebsite: "Website",
            headtext: "Home Project",
            text: "This is single page application that i learnt redux architecture"
        },

        {   id:8, 
            link: 'https://AlexeiFedya.github.io/api-rest-project',
            logo: stardb,
            img1: stardb1,
            img2: stardb2,
            img3: stardb3,
            stack: "HTML, CSS, Bootstrap, JS, React, The Star Wars API Service",
            git: "https://github.com/AlexeiFedya/api-rest-project",
            website: "https://AlexeiFedya.github.io/api-rest-project",
            namewebsite: "Website",
            headtext: "Home Project",
            text: "This is single page application, where we took data from api service"
        }
    ];

   

    return (
        <div className="wrap-content-content-portfolio-page">
            <div className="star star-1"></div>
            <div className="star star-2"></div>
            <div className="star star-3"></div>
            <div className="star star-4"></div>
            <div className="star star-5"></div>

            <div className="wrap-content-content-portfolio">
                <Cards cards={cards}/>
            </div>
        </div>
    )
}