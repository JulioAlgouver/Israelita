import axios from 'axios';

const apiRadio = axios.create({
    baseURL: 'https://d36nr0u3xmc4mm.cloudfront.net/index.php/api/streaming/status/8308/3389c6f8106ae4ca57fa1289c92ed531/SV5BR',
});

export default apiRadio;