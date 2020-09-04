import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./styles.css";
import littleLogo from "../../../assets/littleLogo.png";
import Avatar from "../../../assets/Avatar.png";

const UserNav = () => {
  return (
    <Nav id="sidebar">     
        <div className="active">
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li className="sidebar-header">
              <div className="user-profile">
                <img src={Avatar} alt="Avatar" />
                <h3>OZIEL</h3>
              </div>
              <ul>
                <li>
                  <Link to="#">127 Fichas</Link>
                </li>
                <li>
                  <Link to="#">Editar Perfil</Link>
                </li>
                <li>
                  <Link to="/">Sair</Link>
                </li>
              </ul>
            </li>
            <div className="menu">
              <li>
                <Link to="login">PESQUISAR</Link>
              </li>
              <li>
                <Link to="cadastro">CRIAR SORTEIO</Link>
              </li>
              <li>
                <Link to="cadastro">RELATÓRIO</Link>
              </li>
              <li>
                <Link to="cadastro">COMPRAR FICHAS</Link>
              </li>
              <li>
                <Link to="cadastro">ADQUIRIR FICHAS</Link>
              </li>
            </div>
            <li>
              <Link to="/home">
                <img src={littleLogo} alt="logo" />
              </Link>
            </li>
          </ul>
        </div>
    </Nav>
  );
};

export default UserNav;
