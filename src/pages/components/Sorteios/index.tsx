import React from 'react';

import Sorteio from '../Sorteio';

const data = [
  {status:1, title:'iPhone 11', description:'Marque 3 amigos na foto oficial do sorteio e confirme a participação.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoED92Dh5P1FLS-Q0j0_gqDcEDY089M3HXRY8LO_-MEohb7S-M09RAXnWgROFvrJNGvzsV57jz&usqp=CAc', socialMedia:'@jrsmartspanhones'},
  {status:1, title:'Um dia de Beleza', description:'Assista o vídeo da última resenha sobre os novos produtos da vult.', img:'https://http2.mlstatic.com/kit-maquiagem-pincel-completo-bella-femme-23-itens-promoco-D_NQ_NP_772442-MLB42635308566_072020-F.jpg', socialMedia:'Blog da Bianca'},
  {status:1, title:'3 Ingressos cinemark', description:'Siga a Jovem Pan no twitter e participe.', img:'https://lh3.googleusercontent.com/aUFu8HypIyG5_wAlL1smQNfrsNeLwCj2pDaOF4-OD4ogg3qXyrTtxCrAmGbEkiGSpbA', socialMedia:'@jovempan'},
  {status:1, title:'Ingresso Rock in Rio', description:'Confira a foto oficial para maiores informações.', img:'https://cdn.rockinrio.com/wp-content/themes/rir2/assets/images/logo_rio.png', socialMedia:'@rockinrio'}
]

const Sorteios = () => {
  const dataSorteios = data;

  /* function handleFilter (event: MouseEvent) {
    event.preventDefault();
    switch (event) {
      case event.currentTarget. == "sorteiosabertos":
          dataSorteio = data.filter(data.status == 1);
        break;
      case event.target.id == "sorteiosfechados":
        break;
      case event.target.id == "meussorteios":
        break;
      case event.target.id == "sorteiospremiados":
        break; 
    }
  } */

  return(
    <div className="folder-sorteios">
      <div className="buttons">
        <div id="sorteiosabertos" /* onClick={handleFilter} */>
          <a className="buttonSelected">Sorteios Abertos</a>
        </div> 
        <div id="sorteiosfechados" /* onClick={handleFilter} */>
          <a className="button">Sorteios Fechados</a>
        </div>
        <div id="meussorteios" /* onClick={handleFilter} */>
          <a className="button">Meus Sorteios</a>
        </div>
        
        <div id="sorteiospremiados" /* onClick={handleFilter} */>
          <a id="premio" className="button">Sorteios Premiados</a>
        </div>
      </div>
      <div className="sorteios">
        {/* {dataSorteios.map( sorteio => {
          <Sorteio title={sorteio.title} description={sorteio.description} img={sorteio.img} socialMedia={sorteio.socialMedia}/>
        })} */}
      </div>
    </div>
  );
}

export default Sorteios;