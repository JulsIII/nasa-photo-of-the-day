import React, {useState, useEffect} from "react";
import Details from "./components/Details";
import Apod from "./components/Apod";
import Nav from "./components/Nav";
import axios from "axios";

import "./App.css";

const API_KEY = 'DEMO_KEY&date=2020-12-10';
const URL = 'https://api.nasa.gov/planetary';
// https://api.nasa.gov/planetary';

function App() {

const [apod, setApod] = useState({});
    
  useEffect(() => {
    
    const getApod = () => {
    axios.get(`${URL}/apod?api_key=${API_KEY}`)
    .then((res) => {
      setApod(res.data)
    })
    .catch((err) => {
      console.log(err)
    });
    }
    getApod();
  }, [])

  console.log(apod);

  return (
    <div className="App">
      <Nav />
      <Apod apodImg={apod.url} />
      <Details apodText={apod.explanation} apodTitle={apod.title} apodDate={apod.date} apodCopyright={apod.copyright}/>
    </div>
  
  );
}

// apodNavPrev={} apod NavNext={}

export default App;
