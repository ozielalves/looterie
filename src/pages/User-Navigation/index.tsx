import React from "react";
import { Container, Col, Row, Nav } from 'react-bootstrap'

import './styles.css';
import Logo from '../../assets/littleLogo.png';
import Avatar from '../../assets/Avatar.png';


const UserNav = () =>{
  return(
    <Nav id="sidebar">
        <div className="sidebar-header">
          <img src={Avatar} alt="Avatar"/>
        </div>

        <ul className="list-unstyled components">
            <h3>Oziel Alves</h3>
            <li className="active">
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">127 Fichas</a>
                    </li>
                    <li>
                        <a href="#">Editar Perfil</a>
                    </li>
                    <li>
                        <a href="#">Sair</a>
                    </li>
                </ul>
            </li>
        </ul>
      </Nav>
  );
}

export default UserNav;