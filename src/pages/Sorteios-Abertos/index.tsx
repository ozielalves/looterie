import React from 'react';
import { Container, Col, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';

import littleLogo from '../../assets/littleLogo.png';
import UserNav from '../User-Navigation';

const SorteiosAbertos = () => {
  return(
    <div id="page-sorteios">
      <div className="bloco">
        <UserNav />
        <div className="content">
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
          <div className="buttons">
            <div className="buttonSelected">
              <Link to="sorteiosabertos">Sorteios Abertos</Link>
            </div>
            <div className="buttton">
              <Link to="sorteiosfechados">Sorteios Fechados</Link>
            </div>
            <div className="buttton">
              <Link to="meussorteios">Meus Sorteios</Link>
            </div>
            <div id="premio" className="buttton">
              <Link to="sorteiospremiados">Sorteios Premiados</Link>
            </div>
          </div>
          <div className="sorteios">

          </div>
        </div>
      </div>
    </div>
  );
}

export default SorteiosAbertos;