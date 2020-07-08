import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import SorteiosA from './pages/Sorteios-Abertos';
import SorteiosF from './pages/Sorteios-Fechados';
import UserMS from './pages/Meus-Sorteios';
import UserSP from './pages/Sorteios-Premiados';

const Routes = () => {
  return(
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
      <Route component={Cadastro} path="/cadastro"/>
      <Route component={Login} path="/login"/>
      <Route component={SorteiosA} path="/sorteiosabertos"/>
      <Route component={SorteiosF} path="/sorteiosfechados"/>
      <Route component={UserMS} path="/meussorteios"/>
      <Route component={UserSP} path="/sorteiospremiados"/>
    </BrowserRouter>
  );
}

export default Routes;