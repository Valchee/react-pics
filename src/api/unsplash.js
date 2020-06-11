import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:  'Client-ID pOUmASFXyCCNPcZt8DY3TLze4Pjz5J8c6GlDlyUZ0HQ'
  }
});
