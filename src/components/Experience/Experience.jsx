import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import './Experience.css';

import { experienceData } from '../../data/experienceData'
import ExperienceCard from './ExperienceCard';
import useIntersection from '../../hooks/useIntersection';


function Experience() {
    const { theme } = useContext(ThemeContext);
    const { isVisible, targetRef } = useIntersection()
    return (
        <div ref={targetRef} className="experience" style={{ backgroundColor: theme.secondary }}>
            <div className="experience-body">
                <div className="experience-image">
                    <img src={theme.expimg} alt="" />
                </div>
                <div className="experience-description">
                    <h1 style={{ color: theme.primary }}>Experience</h1>
                    {experienceData.map(exp => (
                        <ExperienceCard
                            isVisible={isVisible}
                            key={exp.id}
                            id={exp.id}
                            jobtitle={exp.jobtitle}
                            company={exp.company}
                            startYear={exp.startYear}
                            endYear={exp.endYear} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
