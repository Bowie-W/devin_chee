import { ReactComponentElement, ReactElement, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Userpage from "./components/Userpage";
import AddTracks from "./components/AddTracks";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/editing" element={<Userpage/>}></Route>
          <Route path="/editing/addTracks" element={<AddTracks/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
