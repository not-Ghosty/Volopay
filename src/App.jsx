import React from "react";
import Navv from "./components/Navv";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Yourcards from "./components/Yourcards";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navv />

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/yourcards/:index" element={<Yourcards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
