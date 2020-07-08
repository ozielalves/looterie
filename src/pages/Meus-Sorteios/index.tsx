import React from 'react';

import './styles.css';

import UserNav from '../User-Navigation';

const MeusSorteios = () => {
  return(
    <div id="page-sorteios">
      <div className="content">
        <UserNav />
        <h1>Meus Sorteios</h1>
      </div> 
    </div>
  );
}

export default MeusSorteios;