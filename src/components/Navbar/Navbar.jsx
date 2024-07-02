import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { MdPhone } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import styled from '@emotion/styled'
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';
import { headerData } from '../../data/headerData';
import { ThemeContext } from '../../contexts/ThemeContext';

function Navbar() {
  const { theme, setHandleDrawer } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
    setHandleDrawer();
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHandleDrawer();
  };

  const Container = styled.div({
    navMenu: {
      fontSize: '2.5rem',
      color: theme.tertiary,
      cursor: 'pointer',
      transform: 'translateY(-10px)',
      transition: 'color 0.3s',
      '&:hover': {
        color: theme.primary,
      },
      // [t.breakpoints.down('sm')]: {
      //   fontSize: '2.5rem',
      // },
      // [t.breakpoints.down('xs')]: {
      //   fontSize: '2rem',
      // },
    },
    MuiDrawer: {
      padding: '0em 1.8em',
      width: '14em',
      fontFamily: ' var(--primaryFont)',
      fontStyle: ' normal',
      fontWeight: ' normal',
      fontSize: ' 24px',
      background: theme.secondary,
      overflow: 'hidden',
      borderTopRightRadius: '40px',
      borderBottomRightRadius: '40px',
      // [t.breakpoints.down('sm')]: {
      //   width: '12em',
      // },
    },
    closebtnIcon: {
      fontSize: '2rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      color: theme.primary,
      position: 'absolute',
      right: 40,
      top: 40,
      transition: 'color 0.2s',
      '&:hover': {
        color: theme.tertiary,
      },
      // [t.breakpoints.down('sm')]: {
      //   right: 20,
      //   top: 20,
      // },
    },
    drawerItem: {
      margin: '2rem auto',
      borderRadius: '78.8418px',
      background: theme.secondary,
      color: theme.primary,
      width: '85%',
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      padding: '0 30px',
      boxSizing: 'border-box',
      border: '2px solid',
      borderColor: theme.primary,
      transition: 'background-color 0.2s, color 0.2s',
      '&:hover': {
        background: theme.primary,
        color: theme.secondary,
      },
      // [t.breakpoints.down('sm')]: {
      //   width: '100%',
      //   padding: '0 25px',
      //   height: '55px',
      // },
    },
    drawerLinks: {
      fontFamily: 'var(--primaryFont)',
      width: '50%',
      fontSize: '1.3rem',
      fontWeight: 600,
      // [t.breakpoints.down('sm')]: {
      //   fontSize: '1.125rem',
      // },
    },
    drawerIcon: {
      fontSize: '1.6rem',
      // [t.breakpoints.down('sm')]: {
      //   fontSize: '1.385rem',
      // },
    },
  })


  const shortname = (name) => {
    if (name.length > 12) {
      return name.split(' ')[0];
    } else {
      return name;
    }
  };
  return <></>

  return (
    <Container>

      <div className="navbar">
        <div className="navbar--container">
          <h1 style={{ color: theme.secondary }}>{shortname(headerData.name)}</h1>

          <IoMenuSharp className={"navMenu"} onClick={handleDrawerOpen} />
        </div>
        <Drawer
          variant="temporary"
          onClose={(event, reason) => {
            if (reason !== 'backdropClick') {
              handleDrawerClose();
            } else if (reason !== 'escapeKeyDown') {
              handleDrawerClose();
            }
          }}
          anchor="left"
          open={open}
          classes={{ paper: "MuiDrawer" }}
          className="drawer"
          disableScrollLock={true}
        >
          <div className="div-closebtn">
            <CloseIcon
              onClick={handleDrawerClose}
              className={"closebtnIcon"}
            />
          </div>
          <br />

          <div onClick={handleDrawerClose}>
            <div className="navLink--container">
              <>
                <NavLink to="/"  spy="true" duration={2000}>
                  <div className={"drawerItem"}>
                    <IoHomeSharp className={"drawerIcon"} />
                    <span className={"drawerLinks"}>Home</span>
                  </div>
                </NavLink>
              </>

              <>
                <NavLink to="/#about"  spy="true" duration={2000}>
                  <div className={"drawerItem"}>
                    <FaUser className={"drawerIcon"} />
                    <span className={"drawerLinks"}>About</span>
                  </div>
                </NavLink>
              </>

              <>
                <NavLink to="/#resume"  spy="true" duration={2000}>
                  <div className={"drawerItem"}>
                    <HiDocumentText className={"drawerIcon"} />
                    <span className={"drawerLinks"}>Resume</span>
                  </div>
                </NavLink>
              </>

              <>
                <NavLink to="/#contacts"  spy="true" duration={2000}>
                  <div className={"drawerItem"}>
                    <MdPhone className={"drawerIcon"} />
                    <span className={"drawerLinks"}>Contact</span>
                  </div>
                </NavLink>
              </>
            </div>
          </div>
        </Drawer>
      </div>
    </Container>
  );
}

export default Navbar;
