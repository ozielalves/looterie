import Knex from 'knex';

//`http://192.168.0.21:3333/uploads/${item.image}`

export async function seed(knex: Knex) {
  await knex('sorteios').insert([
    { id_user: '1', rede_social: '@jrsmartphones', data_sorteio: '10-07-2020', image: 'u1_s1.png', title: 'iPhone 11', description: 'Marque 3 amigos na foto do sorteio e confirme a participação.'},
    { id_user: '1', rede_social: 'Blog da bianca', data_sorteio: '30-06-2020', image: 'u1_s2.png', title: 'Um dia de beleza', description: 'Assista um vídeo da ultima resenha sobre os novos produtos da Vult.'},
    { id_user: '1', rede_social: '@jovempam', data_sorteio: '05-07-2020', image: 'u1_s3.png', title: '3 ingrerssos Cinemark', description: 'Siga a Jovem Pam no twitter e participe.'},
    { id_user: '1', rede_social: '@rockinrio', data_sorteio: '15-07-2020', image: 'u1_s4.png', title: 'Ingresso Rock in Rio', description: 'Confira a foto oficial do sorteio para maiores informações.'},
  ]);
}