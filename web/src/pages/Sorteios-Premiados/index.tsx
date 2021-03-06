import React from 'react';
import { Link } from 'react-router-dom';

import UserNav from '../components/User-Navigation';
import littleLogo from '../../assets/littleLogo.png';
import Sorteio1 from'../../assets/Sorteio1.png'
import Sorteio2 from'../../assets/Sorteio2.png'
import Sorteio3 from'../../assets/Sorteio3.png'
import Sorteio4 from'../../assets/Sorteio4.png'

const SorteiosPremiados = () => {
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
            <Link to="sorteiosabertos">
              <div className="button">Sorteios Abertos</div>
            </Link> 
            
            <Link to="sorteiosfechados">
              <div className="button">Sorteios Fechados</div>
            </Link>
            <Link to="meussorteios">
              <div className="button">Meus Sorteios</div>
            </Link>
            
            <Link to="sorteiospremiados">
              <div id="premio" className="buttonSelected">Sorteios Premiados</div>
            </Link>
          </div>
          <div className="sorteiosPremiado">
            <div className="card-sorteio" id="aberto">
              <div className="card-image">
                <img src={Sorteio1} alt="Sorteio1"/>
              </div>
              <div className="card-content">
              <ul className="sorteio-data">
                  <li className="sorteio-title">
                    <h3>iPhone 11</h3>
                  </li>
                  <li>
                    <span className="sorteio-link">@jrsmartspanhones</span>
                  </li>
                  <li className="sorteio-diretriz">
                    <p>Marque 3 amigos na foto oficial do sorteio e confirme a participação.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-sorteio" id="aberto">
              <div className="card-image">
                <img src={Sorteio2} alt="Sorteio2"/>
              </div>
              <div className="card-content">
              <ul className="sorteio-data">
                  <li className="sorteio-title">
                    <h3>Um dia de Beleza</h3>
                  </li>
                  <li>
                    <span className="sorteio-link">Blog da Bianca</span>
                  </li>
                  <li className="sorteio-diretriz">
                    <p>Assista o  vídeo da última resenha sobre os novos produtos da vult.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-sorteio" id="aberto">
              <div className="card-image">
                <img src={Sorteio3} alt="Sorteio3"/>
              </div>
              <div className="card-content">
              <ul className="sorteio-data">
                  <li className="sorteio-title">
                    <h3>3 Ingressos cinemark</h3>
                  </li>
                  <li>
                    <span className="sorteio-link">@jovempan</span>
                  </li>
                  <li className="sorteio-diretriz">
                    <p>Siga a Jovem Pan no twitter e participe.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-sorteio" id="aberto">
              <div className="card-image">
                <img src={Sorteio4} alt="Sorteio4"/>
              </div>
              <div className="card-content">
                <ul className="sorteio-data">
                  <li className="sorteio-title">
                    <h3>Ingresso Rock in Rio</h3>
                  </li>
                  <li>
                    <span className="sorteio-link">@rockinrio</span>
                  </li>
                  <li className="sorteio-diretriz">
                    <p>Confira a foto oficial para maiores informações.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SorteiosPremiados;