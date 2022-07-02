import styled from "styled-components";
import CityComponet from "./components/CityComponet";
import WeatherInfoComponet from "./components/WeatherInfoComponet";
import axios from "axios";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: 70px auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

// const WeatherComponet = styled.div`
// display:flex;
// flex-direction:column;`;
const AppLable = styled.span`
  colour: black;
  font-size: 18px;
  font-weight: bold;
`;
function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=19c39dca894570214697afe98758fd24`
    );
    // console.log(response);
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLable> React Weather Application </AppLable>

      {weather ? (
          <WeatherInfoComponet weather={weather}/>
      ) : (
        <CityComponet updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      <AppLable> Designe By :- Omkar Mane </AppLable>
    </Container>
  );
}

export default App;
