import React from "react";
import { Routes, Route } from "react-router-dom";
import MyWork from "./component/page/MyWork";
import Contact from "./component/page/Contact";
import Body from "./component/Body";
import ErrorBoundary from "./component/common/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
