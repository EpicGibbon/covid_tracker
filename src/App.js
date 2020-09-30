import React, { useEffect } from 'react';
import './App.css';
import LineGraph from './components/LineGraph';
import CovidSummary from './components/CovidSummary'
import axios from './utils/API';

function App() {

  useEffect(() => {

    axios.get('/summary')
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="App">
      <CovidSummary
        totalConfirmed={0}
        totalRecovered={0}
        totalDeaths={0}
        country={'USA'}
      />
      <LineGraph />
    </div>
  );
}

export default App;
