import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./companents/Header";
import Hero from "./companents/main-page/Hero";
import Service from "./companents/main-page/Service";

function App() {
    const [dark, setDark] = useState<any>(false)
  return (

    <div id={"app"}
    style={{
        background: dark ? "white" : "black",
        color: dark ? "black" : "white",
    }}>
        <Header dark={dark} setDark={setDark}/>
        <Hero dark={dark} setDark={setDark}/>
        <Service/>
    </div>
  );
}

export default App;
