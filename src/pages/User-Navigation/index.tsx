import React from "react";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';
//import Logo from '../../assets/littleLogo.png';
import Avatar from '../../assets/Avatar.png';

/*
function toggle () {
    var element = document.getElementById('sidebar');
    element.classList.toggle("mySidebar");
    var a = document.getElementsByTagName('hideThis');
    a.classList.toggle("hidden");
  }
*/

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
        </ul>
      </Nav>
  );
}

export default UserNav;