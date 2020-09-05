import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsList } from "react-icons/bs";

import Logo from '../../assets/Logo.png';
import littleLogo from '../../assets/littleLogo.png';
import UserNav from '../components/User-Navigation';
import Sorteios from '../components/Sorteios';

import './styles.css';

const Home = () => {

  const [navDisplay, setNavDisplay] = useState(false);

  const navDisplayHandler = () => {
    setNavDisplay(!navDisplay)
  }

  return(
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
        <div id="nav" className={ navDisplay ? 'visible' : 'not-visible'}>
          <UserNav />
        </div>
        <main>
          <div className="sorteios">
            {/* <Sorteios /> */}
          </div>
        </main>
    </div>
  );
}

export default Home;