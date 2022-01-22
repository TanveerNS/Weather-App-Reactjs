import axios from 'axios'; 

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '3a641014e6013b3fcc356668a1486b59';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });
    return data;
}