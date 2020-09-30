import React, { useEffect, useState } from 'react';
import './App.css';
import LineGraph from './components/LineGraph';
import CovidSummary from './components/CovidSummary'
import axios from './utils/API';

function App() {

  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(false);
  const [covidSummary, setCovidSummary] = useState({});
  const [days, setDays] = useState(7);
  const [country, setCountry] = useState('');

  useEffect(() => {

    setLoading(true);
    axios.get('/summary')
      .then(res => {
        setLoading(false)

        if (res.status === 200) {

          setTotalConfirmed(res.data.Global.TotalConfirmed);
          setTotalRecovered(res.data.Global.NewRecovered);
          setTotalDeaths(res.data.Global.totalDeaths);
          setCovidSummary(res.data);

        }
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const countryHandler = (e) => {
    setCountry(e.target.value);
  }

  const daysHandler = (e) => {
    setDays(e.target.value);
  } 


  if (loading) {
    return <p>Fetching data from API</p>
  }

  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={'USA'}
      />


      <div>
        <select value={country} onChange={countryHandler}>
          {
            covidSummary.Countries && covidSummary.Countries.map(country =>
              <option key={country.Slug} value={country.Slug}>{country.Country}</option>
            )
          }
        </select>
        <select value={days} onChange={daysHandler}>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>


      </div>

      <LineGraph />
    </div>
  );
}

export default App;
