import React from "react";
import styled from "styled-components";
import icon from "../icons/perfect-day.svg";
const WeatherLogo = styled.img`
  width: 142px;
  height: 142px;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  colour: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

// omkar mane

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const CityComponet = (props) => {
  const { updateCity , fetchWeather } = props;
  return ( 
    <>
      <WeatherLogo src={icon} alt="Icon" />
      <ChooseCityLabel>Find Weather of Your City</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}> 
        <input
          placeholder="Enter City."
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};
//50 Sat
export default CityComponet;
