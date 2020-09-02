import React from 'react';
import { Link } from 'react-router-dom';
import { BsList } from "react-icons/bs";

import littleLogo from '../../assets/littleLogo.png';
import UserNav from '../components/User-Navigation';
import Sorteios from '../components/Sorteios';

import './styles.css';

const Home = () => {
  return(
    <div id="home">
      <UserNav />
        <div className="home-header">
          <Link to="sorteiosabertos"><img src={littleLogo} alt="logo"/></Link>
          <h2 className="welcome"> Bem vindo(a), <strong>OZIEL</strong></h2>
          <div className="burguer">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
        <div id="nav">
          <ul className="user-navbar">
            <div className="menu">
              <li><Link to="login">PESQUISAR</Link></li>
              <li><Link to="cadastro">CRIAR SORTEIO</Link></li>
              <li><Link to="cadastro">RELATÓRIO</Link></li>
              <li><Link to="cadastro">COMPRAR FICHAS</Link></li>
              <li><Link to="cadastro">ADQUIRIR FICHAS</Link></li>
            </div>
            <li><Link to="sorteiosabertos"><img src={littleLogo} alt="logo"/></Link></li>
          </ul>
        </div>
        
        {/* <div className="mySidebar">
          <div className="avatar"></div>
          <div className="menu-list">
            <Link to="login">PESQUISAR</Link>
            <Link to="cadastro">CRIAR SORTEIO</Link>
            <Link to="cadastro">RELATÓRIO</Link>
            <Link to="cadastro">COMPRAR FICHAS</Link>
            <Link to="cadastro">ADQUIRIR FICHAS</Link>
          </div>
        </div> */}
        <main>
          <div className="sorteios">
            <Sorteios />
          </div>
        </main>
    </div>
  );
}

export default Home;