import React, { useContext } from 'react';
import styled from '@emotion/styled'

import { ThemeContext } from '../../contexts/ThemeContext';

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg';
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg';

import './Experience.css';
import { Slide } from '@mui/material';

function ExperienceCard({ id, company, jobtitle, startYear, endYear, isVisible }) {
  const { theme } = useContext(ThemeContext);


  const Container = styled.div({
    experienceCard: {
      backgroundColor: theme.primary30,
      '&:hover': {
        backgroundColor: theme.primary50,
      },
    },
  })

console.log(isVisible)
  return (
    <Slide direction="left" timeout={1500} in={isVisible} mountOnEnter>
      <Container key={id} className={`experience-card`}>
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === 'light' ? expImgBlack : expImgWhite}
            alt=""
          />
        </div>
        <div className="experience-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
        </div>
      </Container>
    </Slide>
  );
}

export default ExperienceCard;
