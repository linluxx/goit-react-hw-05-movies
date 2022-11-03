import axios from 'axios';
const KEY = '7cc6d6f36e893764d456caf842646015';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.headers.common['api_key'] = KEY;

async function getMovies(endPoint, options) {
  try {
    const response = await axios.get(`${endPoint}?api_key=${KEY}&${options}`);

    return response;
  } catch (error) {
    console.error(error);
  }
}

export default getMovies;
