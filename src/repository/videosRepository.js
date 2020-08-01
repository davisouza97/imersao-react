import config from '../config';

const URL_VIDEO = `${config.URL_BACK}videos`;

function create(video) {
  return fetch(`${URL_VIDEO}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const categoriasReponse = await response.json();
        return categoriasReponse;
      }
      throw new Error('Não foi possivel cadastrar o video :(');
    });
}

export default {
  create,
};
