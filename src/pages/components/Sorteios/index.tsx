import React, { useState } from 'react';

import Sorteio from '../Sorteio';

import './styles.css';

const data = [
  {id:1, id_user: 1, status:1, title:'iPhone 11', description:'Marque 3 amigos na foto oficial do sorteio e confirme a participação.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoED92Dh5P1FLS-Q0j0_gqDcEDY089M3HXRY8LO_-MEohb7S-M09RAXnWgROFvrJNGvzsV57jz&usqp=CAc', socialMedia:'@jrsmartspanhones'},
  {id:2, id_user: 1, status:1, title:'Um dia de Beleza', description:'Assista o vídeo da última resenha sobre os novos produtos da vult.', img:'https://http2.mlstatic.com/kit-maquiagem-pincel-completo-bella-femme-23-itens-promoco-D_NQ_NP_772442-MLB42635308566_072020-F.jpg', socialMedia:'Blog da Bianca'},
  {id:3, id_user: 2, status:1, title:'3 Ingressos cinemark', description:'Siga a Jovem Pan no twitter e participe.', img:'https://lh3.googleusercontent.com/aUFu8HypIyG5_wAlL1smQNfrsNeLwCj2pDaOF4-OD4ogg3qXyrTtxCrAmGbEkiGSpbA', socialMedia:'@jovempan'},
  {id:4, id_user: 2, status:1, title:'Ingresso Rock in Rio', description:'Confira a foto oficial para maiores informações.', img:'https://cdn.rockinrio.com/wp-content/themes/rir2/assets/images/logo_rio.png', socialMedia:'@rockinrio'}
]

const Sorteios = () => {
  const dataSorteios = data;

  const [selected, setSelected] = useState('b3');

  const handleFilter = e => {
    e.preventDefault();
    if (e.target.id === "sorteiosabertos") {
      setSelected('b1');
      e.target.style.zIndex = 4;
      e.target.nextElementSibling.style.zIndex = 3;
      e.target.nextElementSibling.nextElementSibling.style.zIndex = 2;
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.style.zIndex = 1;
    }
    if (e.target.id === "sorteiosfechados") {
      setSelected('b2');
      e.target.style.zIndex = 4;
      e.target.previousElementSibling.style.zIndex = 3;
      e.target.nextElementSibling.style.zIndex = 2;
      e.target.nextElementSibling.nextElementSibling.style.zIndex = 1;
    }
    if (e.target.id === "meussorteios") {
      setSelected('b3');
      e.target.style.zIndex = 4;
      e.target.previousElementSibling.style.zIndex = 3;
      e.target.previousElementSibling.previousElementSibling.style.zIndex = 2;
      e.target.nextElementSibling.style.zIndex = 1;
    }
    if (e.target.id === "sorteiospremiados") {
      setSelected('b4');
      e.target.style.zIndex = 4;
      e.target.previousElementSibling.style.zIndex = 3;
      e.target.previousElementSibling.previousElementSibling.style.zIndex = 2;
      e.target.previousElementSibling.previousElementSibling.previousElementSibling.style.zIndex = 1;
    }
  }

  return(
    <div className="folder-sorteios">
      <div className="buttons">
        <div id="sorteiosabertos" 
             className={ selected === 'b1' ? "b1 button buttonSelected" : "b1 button" }
             onClick={handleFilter}
        >
          <p>ABERTOS</p>
        </div> 
        <div id="sorteiosfechados" 
             className={ selected === 'b2' ? "b2 button buttonSelected" : "b2 button" } 
             onClick={handleFilter}
        >
          <p>FECHADOS</p>
        </div>
        <div id="meussorteios" 
             className={ selected === 'b3' ? "b3 button buttonSelected" : "b3 button" } 
             onClick={handleFilter}
        >
          <p>MEUS SORTEIOS</p>
        </div>
        
        <div id="sorteiospremiados" 
             className={ selected === 'b4' ? "b4 button buttonSelected" : "b4 button" } 
             onClick={handleFilter}
        >
          <p id="premio">GANHEI</p>
        </div>
      </div>
      <div className={ selected === "b4" ? "sorteiosPremiado" : "sorteios" }>
        { dataSorteios ? dataSorteios.map( sorteio => {
          return (
          <Sorteio 
            key = {sorteio.id}
            title={sorteio.title} 
            description={sorteio.description} 
            img={sorteio.img} 
            socialMedia={sorteio.socialMedia}/>
          )
        }) : null }
      </div>
    </div>
  );
}

export default Sorteios;