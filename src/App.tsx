import { ReactComponentElement, ReactElement, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Userpage from "./components/Userpage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/editing" element={<Userpage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
