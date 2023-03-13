import { ReactComponentElement, ReactElement, useState } from "react";
import "./App.scss";
import Intro from "./components/intro";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  const [introEle, setIntroEle] = useState<JSX.Element | null>(<Intro />);
  const [landPageStatus, setLandPageStatus] = useState<JSX.Element | null>(
    null
  );

  setTimeout(() => {
    setIntroEle(null);
    setLandPageStatus(<LandingPage />);
  }, 6250);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
