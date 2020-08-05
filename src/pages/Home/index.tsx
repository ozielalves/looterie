import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/Logo.png';

const Home = () => {
  return(
    <div id="page-home">
      <div className="content">
        <div id="nav">
          <ul className="navbar">
            <li><Link to="login">ENTRAR</Link></li>
            <li><Link to="cadastro">CADASTRE-SE</Link></li>
          </ul>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Loterie"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
