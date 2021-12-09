import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./components/Header.js";
import TopContent from "./components/TopContent.js";
import MainBody from "./components/MainBody.js";
import { API_KEY } from "./constants/index.js";

function App() {
  const [data, setData] = useState({});
  const [randomPic, setRandomPic] = useState({});
  
  useEffect(() => {
    // load NASA picture of the day data
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then(res => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      })
    // load random picture
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`)
      .then(res => {
        console.log(res.data[0]);
        setRandomPic(res.data[0]);
        console.log(res.data[0].title);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  return (
    <div className="App">
      {
        // render header
        <Header />
      }
      {
        // render picture of the day
        <TopContent img={data.url} title={data.title} date={data.date} />
      }
      {
        // render random image(s)
        <MainBody randomPic={randomPic} />
      }
    </div>
  );
}

export default App;
