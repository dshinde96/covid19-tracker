import React from "react";
import { useState,useEffect } from "react";


import "./Home.css";

const Home = () => {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
  const [todayCases, setTodayCases] = useState("");
  const [deathCases, setDeathCases] = useState("");
  const [recoveredCases, setRecoveredCases] = useState("");
  const [active, setActive] = useState("");
  const [userInput, setUserInput] = useState("");

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
    todayCases,
    todayDeaths,
    todayRecovered,
    active,
  }) => {
    setCountry(country);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setTodayCases(todayCases);
    setDeathCases(todayDeaths);
    setRecoveredCases(todayRecovered);
    setActive(active);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className="covid">
      <h2 id="heading__two">🔴Live Covid-19 Tracker</h2>
      <h2 id="heading__one">Search Country to see all cases of Covid-19</h2>
      <div className="input-taker">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Country Name"
            onChange={handleSearch}
            className="input__taker"
          />
          <button type="submit" className="search__button">Search</button>
        </form>
      </div>
      <div class="row">
        <div class="col-sm-6" id="first">
          <div class="card" id="cc1">
            <div class="card-body">
              <h5 class="card-title">Country Name</h5>
              <p class="card-text">{country}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6" id="second">
          <div class="card" id="cc2">
            <div class="card-body">
              <h5 class="card-title">Total Cases</h5>
              <p class="card-text">{cases}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6" id="fifth">
          <div class="card" id="cc5">
            <div class="card-body">
              <h5 class="card-title">Total Deaths</h5>
              <p class="card-text">{deaths}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6" id="fourth">
          <div class="card" id="cc4">
            <div class="card-body">
              <h5 class="card-title">Recovered Cases</h5>
              <p class="card-text">{recovered}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6" id="third">
          <div class="card" id="cc3">
            <div class="card-body">
              <h5 class="card-title">Todays Cases</h5>
              <p class="card-text">{todayCases}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6" id="sixth">
          <div class="card" id="cc6">
            <div class="card-body">
              <h5 class="card-title">Todays Deaths</h5>
              <p class="card-text">{deathCases}</p>
            </div>
          </div>
        </div>

        <div class="col-sm-6" id="seventh">
          <div class="card" id="cc7">
            <div class="card-body">
              <h5 class="card-title">Todays Recovered Cases</h5>
              <p class="card-text">{recoveredCases}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6" id="sixth">
          <div class="card" id="cc6">
            <div class="card-body">
              <h5 class="card-title">Active Cases</h5>
              <p class="card-text">{active}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Home;
