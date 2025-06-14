import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Body";
import MyWork from "./component/page/MyWork";
import Contact from "./component/page/Contact";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mywork" element={<MyWork />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
