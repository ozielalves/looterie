import React from 'react';

import './styles.css';

import UserNav from '../User-Navigation';

const SorteiosAbertos = () => {
  return(
    <div id="page-sorteios">
      <div className="content">
        <UserNav />
        <h1>Sorteios Abertos</h1>
      </div>
    </div>
  );
}

export default SorteiosAbertos;