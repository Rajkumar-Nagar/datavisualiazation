import React from 'react';
import BarChart from './BarChart';
import data from "./jsondata.json"

function App() {

  const countries = {};
  data.forEach((item) => {
    if (countries[item.country]) {
      countries[item.country].push(item);
    } else {
      countries[item.country] = [item];
    }
  });
  // console.log(countries)

  return (
    <div className="App">
      <h1>Data Visualization with D3.js in React</h1>
      <BarChart data={data} />
    </div>
  );
}

export default App;
