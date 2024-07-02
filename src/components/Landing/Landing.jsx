import React, { useContext } from 'react'
import { Button } from '@mui/material'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import styled from '@emotion/styled'

import './Landing.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import { socialsData } from '../../data/socialsData'

import { FaTwitter, FaLinkedin, FaGithub, FaInstagram,} from "react-icons/fa";


function Landing() {
    const { theme, drawerOpen }  = useContext(ThemeContext)

    const Container = styled.div({
        resumeBtn : {
            color: theme.primary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            fontSize: '1rem',
            fontWeight: '500',
            height: '50px',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            "&:hover": {
                backgroundColor: theme.tertiary,
                color: theme.secondary,
                border: `3px solid ${theme.tertiary}`,
            },
        },
        contactBtn : {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '30px',
            textTransform: 'inherit',
            textDecoration: 'none',
            width: '150px',
            height: '50px',
            fontSize: '1rem',
            fontWeight: '500',
            fontFamily: 'var(--primaryFont)',
            border: `3px solid ${theme.primary}`,
            transition: '100ms ease-out',
            "&:hover": {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
            // [t.breakpoints.down('sm')]: {
            //     display: 'none',
            // },
        }
    })

    return (
        <Container>

        <div className="landing" >
            <div className="landing--container">
                <div className="landing--container-left" style={{backgroundColor: theme.primary}}>
                    <div className="lcl--content">
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                                <FaLinkedin className="landing--social" style={{color: theme.secondary}}/>
                            </a>
                        )}
                        {socialsData.github && (
                            <a href={socialsData.github} target="_blank" rel="noreferrer">
                                <FaGithub className="landing--social" style={{color: theme.secondary}}/>
                            </a>
                        )}
                        {socialsData.twitter && (
                            <a href={socialsData.twitter} target="_blank" rel="noreferrer">
                                <FaTwitter className="landing--social" style={{color: theme.secondary}}/>
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a href={socialsData.instagram} target="_blank" rel="noreferrer">
                                <FaInstagram className="landing--social" style={{color: theme.secondary}}/>
                            </a>
                        )}       
                    </div>
                </div>
                {/* <img src={process.env.PUBLIC_URL + "/pic.jpg"} alt="" className="landing--img" style={{ opacity: `${drawerOpen ? '0' : '1'}`, borderColor: theme.secondary}}/> */}
                <div className="landing--container-right" style={{backgroundColor: theme.secondary}}>
                    <div className="lcr--content" style={{color: theme.tertiary}}>
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p>{headerData.desciption}</p>

                        <div className="lcr-buttonContainer">
                            {headerData.resumePdf && (
                                <a href={headerData.resumePdf} download="resume" target="_blank" rel="noreferrer">
                                    <Button className={"resumeBtn"}>Download CV</Button>
                                </a>
                            )}
                            <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                                <Button className={"contactBtn"}>Contact</Button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                        </Container>
    )
}

export default Landing
