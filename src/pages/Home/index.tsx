import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BsList } from "react-icons/bs";

import Logo from '../../assets/Logo.png';
import littleLogo from '../../assets/littleLogo.png';
import UserNav from '../components/User-Navigation';
import Sorteios from '../components/Sorteios';

import './styles.css';

const Home = () => {

  const [navDisplay, setNavDisplay] = useState(false);

  const navComponent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (navComponent != null) {
      if (navComponent.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setNavDisplay(!navDisplay)
    } 
  };

  const navDisplayHandler = () => {
    setNavDisplay(!navDisplay)
  }

  return(
    <div id="home">
        <div ref={navComponent} id="nav" className={ navDisplay ? 'visible' : 'not-visible'}>
          <UserNav />
        </div>
        <main className={navDisplay ? 'darken' : ''}>
          <div className="home-header">
            <Link to="/home"><img src={Logo} alt="logo"/></Link>
            <p className="welcome"> Bem vindo(a), <strong>OZIEL</strong></p>
            <div className="burguer" onClick={navDisplayHandler}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
          <div className="sorteios">
            {/* <Sorteios /> */}
          </div>
        </main>
    </div>
  );
}

export default Home;