import { useState } from 'react';

import { Header } from './Header';
import { AirPollution } from './AirPollution';
import { Temperature } from './Temperature';
import { SunsetSunrise } from './SunsetSunrise';
import { ZipNotFound } from './ZipNotFound';
import { Loading } from './Loading';

export const WeatherData = () => {
    const [locationCity, setLocationCity] = useState('');
    const [inputData, setInputData] = useState('');
    const [zip, setZip] = useState(null);
    const [sunData, setSunData] = useState({});
    const [airQuality, setAirQuality] = useState([]);
    const [temperature, setTemperature] = useState([]);
    const [zipNotFound, setZipNotFound] = useState({ zip: '', notFound: false })
    const [locationState, setLocationState] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const clearAll = () => {
        setLocationCity(null)
        setSunData(null);
        setAirQuality(null)
        setTemperature(null)
        setZip(null)
        setLocationState(null)
    }

    const fetchWeatherData = (zip) => {
        console.log({ zip })
        const latiudeAndLongitudeURL = `https://api.openweathermap.org/geo/1.0/zip?zip=${zip}&appid=df1ad6d37d106029c2cec1eeeb6c13a1`
        fetch(latiudeAndLongitudeURL).then(resp => resp.json()).then(data => {
            if (data.cod) {
                if (data.cod === '404') setZipNotFound({ zip, notFound: true })
                clearAll();
            } else {

                const stateURL = `https://zip-api.eu/api/v1/info/US-${zip}?fields=state`;
                fetch(stateURL).then(resp => resp.json()).then(state => setLocationState(state.error ? '' : state))

                setZipNotFound({ zip, notFound: false })
                setLocationCity(data);
                const { lat, lon } = data;
                const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=df1ad6d37d106029c2cec1eeeb6c13a1`
                fetch(weatherURL).then(resp => resp.json()).then(data => {
                    const { sunset, sunrise } = data.sys;
                    setSunData({ sunset, sunrise })
                    const { temp, feels_like, temp_max, temp_min } = data.main
                    setTemperature([temp, feels_like, temp_max, temp_min])
                    setIsLoading(false)
                })

                const polutionURL = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=df1ad6d37d106029c2cec1eeeb6c13a1`;
                fetch(polutionURL).then(resp => resp.json()).then(data => {
                    const { components } = data.list[0];
                    const airQualityComponents = []
                    Object.entries(components).forEach((k, index) => {
                        const value = { id: index + 1, label: k[0], qty: k[1] }
                        airQualityComponents.push(value)
                    })

                    setAirQuality(airQualityComponents)
                })
            }

        }).catch(err => console.log(err));
    }

    const setInput = e => setInputData(e.target.value);
    const setSearch = () => submit();
    const handleEnter = e => {
        if (e.keyCode === 13) submit()
    }

    const submit = () => {
        if (inputData !== zip) {
            setZipNotFound(false)
            setZip(inputData)
            setIsLoading(true)
        }
        fetchWeatherData(inputData)
    }

    return (
        <div>
            <input type="text" onChange={setInput} value={inputData} onKeyDown={handleEnter} placeholder="Enter a Zipcode" />
            <button onClick={setSearch}>{inputData === zip ? <img src='reload-icon-16900.png' alt='refresh' /> : 'Search'}</button>

            {isLoading && <Loading />}
            {zip && !isLoading &&
                <div>
                    {locationCity && <Header city={locationCity} state={locationState} />}
                    {temperature && <Temperature temp={temperature} />}
                    {sunData && <SunsetSunrise sun={sunData} />}
                    {airQuality && <AirPollution air={airQuality} />}
                </div>
            }

            {zipNotFound.notFound && <ZipNotFound zipCode={zipNotFound.zip} />}
        </div>
    )
}