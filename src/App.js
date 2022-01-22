import React, { useState } from 'react';

import { Container, City, SearchInput, CityTemp, CityName, CityIcon, Info } from './Styled'

import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
    const [wSearch, setWSearch] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            const data = await fetchWeather(wSearch);
            setWeather(data);
            setWSearch('');
        }
    }

    return (
        <Container> 
            <SearchInput type="text" placeholder="Search..."value={wSearch}onChange={(e) => setWSearch(e.target.value)}onKeyPress={search}/>
            {weather.main && (
                <City>
                    <CityName>
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </CityName>
                    <CityTemp>
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </CityTemp>
                    <Info>
                        <CityIcon src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                        <p><span>Longitude</span> {weather.coord['lon']}</p>
                        <p><span>Latitude</span> {weather.coord['lat']}</p>
                    </Info>
                </City>
            )}
        </Container>
    );
}

export default App;