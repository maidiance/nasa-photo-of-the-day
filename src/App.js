import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./components/Header.js";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div className="App">
      {
        <Header />
      }
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
