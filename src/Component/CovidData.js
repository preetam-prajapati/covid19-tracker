import React, { useState, useEffect } from "react";
import "./CovidData.css";

function CovidData() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todaycases, setTodayCases] = useState("");
  const [deathscases, setDeathsCases] = useState("");
  const [recoveredcases, setRecoveredCases] = useState("");
  const [userinput, setUserInput] = useState("");
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    todaycases,
    todayDeaths,
    todayRecovered,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todaycases);
    setDeathsCases(todayDeaths);
    setRecoveredCases(todayRecovered);
  };
  const handlerSearch = (event) => {
    setUserInput(event.target.value);
  };
  const handlerSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userinput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className="covidData">
      <h1>COVID-19 CASES WORLD WISE CONTRY WISE</h1>
      <div className="covidData__input">
        <form onSubmit={handlerSubmit}>
          <input
            type
            onChange={handlerSearch}
            placeholder="Enter Country Name"
          />
          <br />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="covidData__country__info">
        <p>Country Name :{country}</p>
        <p>Cases : {cases}</p>
        <p>Recovered : {recovered}</p>
        <p>Cases Today : {cases}</p>
        <p>Deaths Today : {deathscases}</p>
        <p>Recovered Today : {recoveredcases}</p>
      </div>
    </div>
  );
}
export default CovidData;
