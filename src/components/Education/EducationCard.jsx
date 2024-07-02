import React, { useContext } from 'react';
import styled from '@emotion/styled'


import { ThemeContext } from '../../contexts/ThemeContext';

import eduImgWhite from '../../assets/svg/education/eduImgWhite.svg';
import eduImgBlack from '../../assets/svg/education/eduImgBlack.svg';
import './Education.css';
import { Slide } from '@mui/material';

function EducationCard({ id, institution, course, startYear, endYear, isVisible }) {
  const { theme } = useContext(ThemeContext);

  const Container = styled.div({
    educationCard: {
      backgroundColor: theme.primary30,
      '&:hover': {
        backgroundColor: theme.primary50,
      },
    },
  });


  return (
    <Slide direction="right" timeout={1500} in={isVisible} mountOnEnter>
      <Container key={id} className={`education-card `}>
        <div className="educard-img" style={{ backgroundColor: theme.primary }}>
          <img
            src={theme.type === 'light' ? eduImgBlack : eduImgWhite}
            alt=""
          />
        </div>
        <div className="education-details">
          <h6 style={{ color: theme.primary }}>
            {startYear}-{endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{course}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{institution}</h5>
        </div>
      </Container>
      </Slide>
  );
}

export default EducationCard;
