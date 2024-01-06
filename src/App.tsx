import React, {useState} from 'react';
import './App.css';
import './CSS/webbbs.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

const App = () => {
    return (
        <div className="App">
            <h1>Router v6</h1>
            <ul>
                <li>
                    <a href={"/"}>Home</a>
                </li>
                <li>
                    <a href={"/about"}>About</a>
                </li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

const About = () => {
    return <h2>About</h2>;
}

export default App;
