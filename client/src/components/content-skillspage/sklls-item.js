import React from 'react';
import './skills.scss';

export const SkillsItem = ({skills}) => {
    return (
        <div className="skill-item">
            <p className="skill-item__text">{skills.name}</p>
            <div className="progress">
                <div className={`progess-bar ${skills.classN}`}></div>
            </div>
        </div>
    )
}