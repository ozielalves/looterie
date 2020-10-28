import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import UserNav from '../components/User-Navigation';
import Sorteios from '../components/Sorteios';

import Avatar from "../../assets/user-avatar.svg";
import littleLogo from "../../assets/littleLogo.png";

import './styles.css';

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
        handleNavDisplay()
        
      }  
    }
      // inside click
      return;
  };

  const handleNavDisplay = () => {
    const nav = document.querySelector('#nav')
    console.log(nav)
    if (!navDisplay) {
      nav?.classList.add('visible','not-visible')
      /* nav?.classList.remove('not-visible') */
      setNavDisplay(!navDisplay);
    } else {
      nav?.classList.remove('visible')
      nav?.classList.add('nav-out')
      nav?.addEventListener('transitioned', () => {
        nav?.classList.remove('nav-out')
        nav?.classList.add('not-visible')
      })
      setNavDisplay(!navDisplay);
    }
    
  }

  return(
    <>
      <div ref={navComponent} id="nav" className='not-visible'>
        <UserNav />
      </div>
      <main ref={mainComponent} className={navDisplay ? 'blured' : ''}>
        <div id="home">
          <div className="home-header">
            <Link to="/home"><img src={Logo} alt="logo"/></Link>
            <p className="welcome"> Bem vindo(a), <strong>OZIEL</strong></p>
            <div className="burguer" onClick={handleNavDisplay}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
          <nav className="sidebar-desktop">     
            <div className="active">
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li className="sidebar-desktop-header">
                  <div className="user-profile">
                    <img src={Avatar} alt="Avatar" />
                    <p>Editar Perfil</p>
                  </div>
                  <ul>
                    <li>
                      <Link to="#"><strong>OZIEL</strong></Link>
                    </li>
                    <li>
                      <Link to="#">127 Fichas</Link>
                    </li>
                    <li>
                      <Link to="/">3 Sorteios</Link>
                    </li>
                    <li>
                      <Link to="/">Editar perfil</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <div className="wrapper-content-sorteios-menu">
            <div className="menu">
              <ul> 
                <li>
                  <Link to="home">PESQUISAR</Link>
                </li>
                <li>
                  <Link to="home">CRIAR SORTEIO</Link>
                </li>
                <li>
                  <Link to="home">RELATÓRIO</Link>
                </li>
                <li>
                  <Link to="home">COMPRAR FICHAS</Link>
                </li>
                <li>
                  <Link to="home">ADQUIRIR FICHAS</Link>
                </li>
                <li>
                  <Link to="/">Sair</Link>
                </li>
                <div className="mini-logo">
                  <Link to="/home">
                    <img src={littleLogo} alt="logo" />
                  </Link>
                </div>
                </ul> 
            </div>
            <Sorteios />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;