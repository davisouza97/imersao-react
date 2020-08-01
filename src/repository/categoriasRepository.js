import config from '../config';

const URL_CATEGORIES = `${config.URL_BACK}categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const categoriasReponse = await response.json();
        return categoriasReponse;
      }
      throw new Error('Não foi possivel acessar o servidor :(');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const categoriasReponse = await response.json();
        return categoriasReponse;
      }
      throw new Error('Não foi possivel acessar o servidor :(');
    });
}


export default {
  getAllWithVideos,
  getAll,
};
