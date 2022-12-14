import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Live from "./components/Live";
import Video from "./components/Video";
import Photos from "./components/Photos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lyrics from "./components/Lyrics";
import Shop from "./components/Shop";
import Signup from "./components/Signup";
import Music from "./components/Music";
import Clothing from "./components/Clothing";
import Accessories from "./components/Accessories";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/live" element={<Live />} />
        <Route path="/video" element={<Video />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/lyrics" element={<Lyrics />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/music" element={<Music />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
