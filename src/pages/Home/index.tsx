import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsList } from "react-icons/bs";

import Logo from '../../assets/Logo.png';
import littleLogo from '../../assets/littleLogo.png';
import UserNav from '../components/User-Navigation';
import Sorteios from '../components/Sorteios';

import './styles.css';
import { CSSTransition } from 'react-transition-group';

const Home = () => {

  const [navDisplay, setNavDisplay] = useState(false);

  const mainComponent = useRef<HTMLDivElement>(null);
  const navComponent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // add when mounted
    if (navDisplay) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [navDisplay]);

  const handleClick = e => {
    const mainCurrentComponent = mainComponent.current;
    if (mainCurrentComponent) {
      if (mainCurrentComponent.contains(e.target)) {
        // outside click
        setNavDisplay(false)
      }  
    }
      // inside click
      return;
  };

  const navDisplayHandler = () => {
    setNavDisplay(!navDisplay)
  }

  return(
    <>
    <CSSTransition in={navDisplay} timeout={300} classNames="nav">
      <div ref={navComponent} id="nav" className={ navDisplay ? 'visible' : 'not-visible'}>
        <UserNav />
      </div>
    </CSSTransition>
      <main ref={mainComponent} className={navDisplay ? 'blured' : ''}>
        <div id="home">
          <div className="home-header">
            <Link to="/home"><img src={Logo} alt="logo"/></Link>
            <p className="welcome"> Bem vindo(a), <strong>OZIEL</strong></p>
            <div className="burguer" onClick={navDisplayHandler}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
          <Sorteios />
        </div>
      </main>
    </>
  );
}

export default Home;