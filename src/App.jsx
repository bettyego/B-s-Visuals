import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import MyWork from "./Component/Page/mywork";
import Contact from "./Component/Page/contact"; 




const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/mywork" element={<MyWork/>} />
      <Route path="/contact" element={<Contact/>} />
    
    
    </Routes>
    </>
  );
};

export default App;
