import React, { useContext } from 'react'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import './Landing.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import { socialsData } from '../../data/socialsData'
import { FaLinkedin, FaGithub, FaInstagram, FaBehanceSquare, FaFileDownload } from "react-icons/fa";


function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext)
    const muiTheme = useTheme();
    const smallScreen = useMediaQuery(muiTheme.breakpoints.up('sm'));

    const ResumeBtn = styled(Button)({
        color: theme.primary,
        borderRadius: '3rem',
        width: '47%',
        height: '3rem',
        fontWeight: "bold",
        fontFamily: 'var(--primaryFont)',
        border: `3px solid ${theme.primary}`,
        transition: '100ms ease-out',
        "&:hover": {
            backgroundColor: theme.tertiary,
            color: theme.secondary,
            border: `3px solid ${theme.tertiary}`,
        },
        "@media (max-width: 1100px)": {
            width: "100%",
        }
    })

    const ContactBtn = styled(Button)({
        backgroundColor: theme.primary,
        color: "#1b1b1b",
        borderRadius: '3rem',
        height: '3rem',
        width: '47%',
        fontWeight: "bold",
        fontFamily: 'var(--primaryFont)',
        border: `3px solid ${theme.primary}`,
        transition: '100ms ease-out',
        "&:hover": {
            backgroundColor: theme.secondary,
            color: theme.tertiary,
            border: `3px solid ${theme.tertiary}`,
        },
        "@media (max-width: 1100px)": {
            width: "100%",
        }
    }
    )

    return (
        <div className="landing" >
            <div className="landing--container">
                <div className="landing--container-left" style={{ backgroundColor: theme.primary }}>
                    <div className="lcl--content">
                        {socialsData.linkedIn && (
                            <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                                <FaLinkedin className="landing--social" style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.github && (
                            <a href={socialsData.github} target="_blank" rel="noreferrer">
                                <FaGithub className="landing--social" style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.behance && (
                            <a href={socialsData.behance} target="_blank" rel="noreferrer">
                                <FaBehanceSquare className="landing--social" style={{ color: theme.secondary }} />
                            </a>
                        )}
                        {socialsData.instagram && (
                            <a href={socialsData.instagram} target="_blank" rel="noreferrer">
                                <FaInstagram className="landing--social" style={{ color: theme.secondary }} />
                            </a>
                        )}
                    </div>
                </div>
                <img src="profile.jpg" alt="" className="landing--img" style={{ borderColor: theme.secondary }} />
                <div className="landing--container-right" style={{ backgroundColor: theme.secondary }}>
                    <div className="lcr--content" style={{ color: theme.tertiary }}>
                        <h6>{headerData.title}</h6>
                        <h1>{headerData.name}</h1>
                        <p style={{ textAlign: "justify" }}>{headerData.desciption}</p>

                        <div className="lcr-buttonContainer">
                            {headerData.resumePdf && (
                                <ResumeBtn onClick={() => window.open(headerData.resumePdf)} variant="outlined" startIcon={<FaFileDownload />}>
                                    Download CV
                                </ResumeBtn>
                            )}
                            <ContactBtn variant="outlined" onClick={()=>{
                                  const element = document.getElementById("contacts");
                                  element.scroll = element.scrollHeight;
                            }}>
                                <a href="/#contacts" style={{ all: "unset" }} smooth={true} spy="true" duration={2000}>
                                    Contact
                                </a>
                            </ContactBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing

