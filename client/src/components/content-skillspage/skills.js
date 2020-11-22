import React from 'react';
import './skills.scss';

import { SkillsItem } from './sklls-item'

export const Skills = ({skills}) => {
    return (
        <div className="skills">
            {
                skills.map((skill) => {
                    return ( 
                        <SkillsItem skills={skill} key={skill.id}/>
                    )
                })
            }
        </div>
    )
}