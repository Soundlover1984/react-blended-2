import axios from 'axios';

const API_KEY = 'iiBMMMUy3ai8Gt939EJY8ogtAWv4TqGQmRP5nCF29sr7V2fanjeGkESR';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};

export const getImages = async ({ value, page }) => {
  const response = await axios.get(`search?query=${value}&page=${page}`);
  return response;
};
