import React, { useContext, useState } from 'react';
import { Snackbar, IconButton, SnackbarContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import isEmail from 'validator/lib/isEmail';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiOutlineSend, AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';
import styled from '@emotion/styled'


function Contacts() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const { theme } = useContext(ThemeContext);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const socialIcon = {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '21px',
    backgroundColor: theme.primary,
    color: theme.secondary,
    transition: '250ms ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: theme.secondary,
      backgroundColor: theme.tertiary,
    },
  }
  const detailsIcon = {
    backgroundColor: theme.primary,
    color: theme.secondary,
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '23px',
    transition: '250ms ease-in-out',
    flexShrink: 0,
    '&:hover': {
      transform: 'scale(1.1)',
      color: theme.secondary,
      backgroundColor: theme.tertiary,
    },
  }

  let inputField = {
    border: `4px solid ${theme.primary80}`,
    backgroundColor: `${theme.secondary}`,
    color: theme.tertiary,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 500,
    transition: 'border 0.2s ease-in-out',
    '&:focus': {
      border: `4px solid ${theme.primary600}`,
    },
  }

  const messageStyle = {
    border: `4px solid ${theme.primary80}`,
    backgroundColor: `${theme.secondary}`,
    color: `${theme.tertiary}`,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 500,
    transition: 'border 0.2s ease-in-out',
    '&:focus': {
      border: `4px solid ${theme.primary600}`,
    },
  }

  const Label = styled.label({
    backgroundColor: `${theme.secondary}`,
    color: `${theme.tertiary}`,
    fontFamily: 'var(--primaryFont)',
    fontWeight: 600,
    fontSize: '0.9rem',
    padding: '0 5px',
    transform: 'translate(25px,50%)',
    display: 'inline-flex',
  })

  const SubmitBtn = styled.button({
    backgroundColor: theme.primary,
    color: theme.tertiary,
    transition: '250ms ease-in-out',
    '&:hover': {
      transform: 'scale(1.08)',
      color: theme.secondary,
      backgroundColor: theme.tertiary,
    },

  })


  const handleContactForm = (e) => {
    e.preventDefault();

    if (name && email && message) {
      if (isEmail(email)) {
        const responseData = {
          name: name,
          email: email,
          message: message,
        };

        axios.post(contactsData.sheetAPI, responseData).then((res) => {
          console.log('success');
          setSuccess(true);
          setErrMsg('');

          setName('');
          setEmail('');
          setMessage('');
          setOpen(false);
        });
      } else {
        setErrMsg('Invalid email');
        setOpen(true);
      }
    } else {
      setErrMsg('Enter all the fields');
      setOpen(true);
    }
  };

  return (
      <div
        className="contacts"
        id="contacts"
        style={{ backgroundColor: theme.secondary }}
      >
        <div className="contacts--container">
          <h1 style={{ color: theme.primary }}>Contacts</h1>
          <div className="contacts-body">
            <div className="contacts-form">
              <form onSubmit={handleContactForm}>
                <div className="input-container">
                  <Label htmlFor="Name">
                    Name
                  </Label>
                  <input
                    placeholder="name"
                    value={name}
                    onChange={(e) => {
                      e.preventDefault()
                      console.log(e.target.value)
                      setName(e.target.value)
                    }}
                    type="text"
                    name="Name"
                    className={`form-input`}
                    style={inputField}
                  />
                </div>
                <div className="input-container">
                  <Label htmlFor="Email">
                    Email
                  </Label>
                  <input
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="Email"
                    className={`form-input`}
                    style={inputField}
                  />
                </div>
                <div className="input-container">
                  <Label htmlFor="Message">
                    Message
                  </Label>
                  <textarea
                    placeholder="Type your message...."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    type="text"
                    name="Message"
                    className={`form-message`}
                    style={messageStyle}
                  />
                </div>

                <div className="submit-btn">
                  <SubmitBtn type="submit">
                    <p>{!success ? 'Send' : 'Sent'}</p>
                    <div className="submit-icon">
                      <AiOutlineSend
                        className="send-icon"
                        style={{
                          animation: !success
                            ? 'initial'
                            : 'fly 0.8s linear both',
                          position: success ? 'absolute' : 'initial',
                        }}
                      />
                      <AiOutlineCheckCircle
                        className="success-icon"
                        style={{
                          display: !success ? 'none' : 'inline-flex',
                          opacity: !success ? '0' : '1',
                        }}
                      />
                    </div>
                  </SubmitBtn>
                </div>
              </form>
              <Snackbar
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
              >
                <SnackbarContent
                  action={
                    <React.Fragment>
                      <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={handleClose}
                      >
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
                  style={{
                    backgroundColor: theme.primary,
                    color: theme.secondary,
                    fontFamily: 'var(--primaryFont)',
                  }}
                  message={errMsg}
                />
              </Snackbar>
            </div>

            <div className="contacts-details">
              <a
                href={`mailto:${contactsData.email}`}
                className="personal-details"
              >
                <div style={detailsIcon}>
                  <FiAtSign color='#fff'/>
                </div>
                <p style={{ color: theme.tertiary }}>{contactsData.email}</p>
              </a>
              <a href={`tel:${contactsData.phone}`} className="personal-details">
                <div style={detailsIcon}>
                  <FiPhone color='#fff'/>
                </div>
                <p style={{ color: theme.tertiary }}>{contactsData.phone}</p>
              </a>
              <div className="personal-details">
                <div style={detailsIcon}>
                  <HiOutlineLocationMarker color='#fff'/>
                </div>
                <p style={{ color: theme.tertiary }}>{contactsData.address}</p>
              </div>

              <div className="socialmedia-icons">
                {socialsData.github && (
                  <IconButton size="large" aria-label="twitter">
                    <a
                      href={socialsData.github}
                      target="_blank"
                      rel="noreferrer"
                      style={socialIcon}
                    >
                      <FaGithub color='#fff'/>
                    </a>
                  </IconButton>
                )}
                {socialsData.linkedIn && (
                  <a
                    href={socialsData.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    style={socialIcon}
                  >
                    <FaLinkedinIn color='#fff'/>
                  </a>
                )}
                {socialsData.instagram && (
                  <a
                    href={socialsData.instagram}
                    target="_blank"
                    rel="noreferrer"
                    style={socialIcon}
                  >
                    <FaInstagram color='#fff'/>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <img src={theme.contactsimg} alt="contacts" className="contacts--img" />
      </div>
  );
}

export default Contacts;
