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
    if( !loginDisplay ) {
      if( registerDisplay ){
        setRegisterDisplay(false);
        setTimeout(() => {setLoginDisplay(true)}, 500);
      }else {
        setLoginDisplay(true);
      }
    } else {
      setLoginDisplay(false);
    }
  }
  const toggleRegisterFormDisplay = () =>{
    if( !registerDisplay ){
      if( loginDisplay ){
        setLoginDisplay(false);
        setTimeout(() => {setRegisterDisplay(true)}, 500);
      }else {
        setRegisterDisplay(true);
      }
    }else {
      setRegisterDisplay(false);
    }
  }

  useEffect (() => {
  });

  return(
    <div id="page-intro" className={loginDisplay || registerDisplay ? "mobileBg" : "desktopBg"}>
      <div id="intro-nav">
        <ul className="intro-navbar">
          <li onClick={toggleLoginFormDisplay}>ENTRAR</li>
          <li onClick={toggleRegisterFormDisplay}>CADASTRE-SE</li>
        </ul>
      </div>
      <div className="intro-logo-container">
          {
            loginDisplay || registerDisplay ? 
              <img src={logo} alt="Loterie" className="smallLogo"/> : 
              <img src={logo} alt="Loterie"/>
          }
      </div>
      <div className="form">
        <TransitionGroup>
          {loginDisplay ? <CSSTransition in={loginDisplay} timeout={300} classNames="formTransition">
            <Login toggle={toggleLoginFormDisplay}/>
          </CSSTransition> : null}
          {registerDisplay ? <CSSTransition in={registerDisplay} timeout={300} classNames="formTransition">
            <Register toggle={toggleRegisterFormDisplay}/>
          </CSSTransition> : null}
        </TransitionGroup>
      </div>
    </div>
  );
}

export default Intro;
