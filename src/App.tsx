import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

import Editing from "./components/Editing";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/editing" element={<Editing/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
