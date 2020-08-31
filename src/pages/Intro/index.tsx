import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './styles.css';

import Login from '../components/Login'
import Register from '../components/Register'

import logo from '../../assets/Logo.png';

const Intro = () => {

  const [loginDisplay, setLoginDisplay] = useState(false);
  const [registerDisplay, setRegisterDisplay] = useState(false);

  const toggleLoginFormDisplay = () =>{
    loginDisplay ? setLoginDisplay(false) : setLoginDisplay(true); setRegisterDisplay(false);
  }
  const toggleRegisterFormDisplay = () =>{
    registerDisplay ? setRegisterDisplay(false) : setRegisterDisplay(true); setLoginDisplay(false);
  }


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
      
      <CSSTransition>
          {loginDisplay ? <Login /> : null}
          {registerDisplay ? <Register /> : null}
      </CSSTransition>
    </div>
  );
}

export default Intro;
