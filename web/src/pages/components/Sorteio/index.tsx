import React from 'react';

import './styles.css';

interface sorteioProps { // Para torar necessárias estas prorpiedades
  title: string,
  description: string;
  img: string;
  socialMedia: string;
}

const Sorteio: React.FC<sorteioProps> = ({title, description, img, socialMedia}) => {
  return (
        <div className="card-sorteio" id="aberto">
          <div className="card-image">
            <img src={img} alt="Sorteio1"/>
          </div>
          <div className="card-content">
          <ul className="sorteio-data">
              <li className="sorteio-title">
                <h3>{title}</h3>
              </li>
              <li>
                <span className="sorteio-link">{socialMedia}</span>
              </li>
              <li className="sorteio-diretriz">
                <p>{description}</p>
              </li>
            </ul>
          </div>
        </div>
  );
}  

export default Sorteio;