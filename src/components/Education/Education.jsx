import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Education.css'
import EducationCard from './EducationCard';
import useIntersection from '../../hooks/useIntersection';
import { educationData } from '../../data/educationData'

function Education() {
    const { theme } = useContext(ThemeContext);
    const {isVisible, targetRef}  = useIntersection()
    return (
        <div ref={targetRef} className="education" style={{backgroundColor: theme.secondary}}>
            <div className="education-body">
                <div className="education-description">
                <h1 style={{color:theme.primary}}>Education</h1>
                    {educationData.map(edu => (
                        <EducationCard 
                            key={edu.id}
                            id={edu.id}
                            institution={edu.institution}
                            course={edu.course}
                            startYear={edu.startYear}
                            endYear={edu.endYear}
                            isVisible={isVisible}
                        />
                    ))}
                </div>
                <div className="education-image">
                    <img src={theme.eduimg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Education
