import React from 'react';
import { Container, Col, Row, Nav } from 'react-bootstrap';

import './styles.css';

import Avatar from '../../assets/Avatar.png';
import UserNav from '../User-Navigation';

const SorteiosAbertos = () => {
  return(
    <div id="page-sorteios">
      <UserNav />
      <div className="content">
        <h1>Sorteios Abertos</h1>
      </div>
    </div>
  );
}

export default SorteiosAbertos;