import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";
import littleLogo from "../../../assets/Mini-Logo.svg";
import Avatar from "../../../assets/user-avatar.svg";

const UserNav = () => {
  return (
    <Nav id="sidebar">     
        <div className="active">
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li className="sidebar-header">
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
              </ul>
            </li>
            <div className="menu">
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
            </div>
          </ul>
          <div className="nav-mini-logo">
            <Link to="/home">
              <img src={littleLogo} alt="logo" />
            </Link>
          </div>
        </div>
    </Nav>
  );
};

export default UserNav;
