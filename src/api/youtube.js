import axios from 'axios';

const KEY = 'AIzaSyD0hXB4k2VfIyYhw6jhNUek_YHeFTPwk3c';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    key: KEY
  }
});
