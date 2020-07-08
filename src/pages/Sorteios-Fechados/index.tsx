import React from 'react';

import './styles.css';

import UserNav from '../User-Navigation';

const SorteiosFechados = () => {
  return(
    <div id="page-sorteios">
      <div className="content">
        <UserNav />
        <h1>Sorteios Fechados</h1>
      </div>
    </div> 
  );
}

export default SorteiosFechados;