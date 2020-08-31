import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './styles.css';

import Login from '../components/Login'
import Register from '../components/Register'

import logo from '../../assets/Logo.png';

const Intro = () => {

  const [loginDisplay, setLoginDisplay] = useState(false);
  const [registerDisplay, setRegisterDisplay] = useState(false);

  const toggleLoginFormDisplay = () =>{
    console.log('toggled')
    loginDisplay ? setLoginDisplay(false) : setLoginDisplay(true); setRegisterDisplay(false);
    console.log(loginDisplay)
  }
  const toggleRegisterFormDisplay = () =>{
    console.log('toggled')
    registerDisplay ? setRegisterDisplay(false) : setRegisterDisplay(true); setLoginDisplay(false);
    console.log(registerDisplay)
  }

  useEffect (() => {

  });

  return(
    <div id="page-intro">
      <div id="nav">
        <ul className="navbar">
          <li onClick={toggleLoginFormDisplay}>ENTRAR</li>
          <li onClick={toggleRegisterFormDisplay}>CADASTRE-SE</li>
        </ul>
      </div>
      <div className={loginDisplay || registerDisplay ? 'intro-logo-container smaller' : 'intro-logo-container'}>
        <img src={logo} alt="Loterie"/>
      </div>
      <TransitionGroup>
      <CSSTransition in={loginDisplay} timeout={300} classNames="formTransition">
        <Login toggle={toggleLoginFormDisplay}/>
      </CSSTransition>
      <CSSTransition in={registerDisplay} timeout={300} classNames="formTransition">
        <Register toggle={toggleLoginFormDisplay}/>
      </CSSTransition> 
      </TransitionGroup>
    </div>
  );
}

export default Intro;
