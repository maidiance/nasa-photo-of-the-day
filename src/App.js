import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Header from "./components/Header.js";
import TopContent from "./components/TopContent.js";
import MainBody from "./components/MainBody.js";

function App() {
  const [data, setData] = useState({});
  const [pictures, setPictures] = useState([]);

  // load NASA picture of the day data
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  }, []);

  // function for getting a random picture
  const getRandomPicture = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1')
      .then(res => {
        // console.log(res.data);
        return res.data[0];
      })
      .catch(err => {
        console.error(err);
      })
  }
  // load random pictures for main body
  useEffect(() => {
    for(let i = 0; i < 3; i++){
      const newPicture = getRandomPicture();
      console.log(newPicture);
      setPictures([...pictures, newPicture]);
    }
    // console.log(pictures);
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
        // render 3 random images
        // <MainBody images={pictures}/>
      }
    </div>
  );
}

export default App;
