import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RegPage from "../pages/RegPage";

const Main = () => {
  return <div>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<RegPage/>} />
        
      </Routes>
    </BrowserRouter>
    
  </div>;
};

export default Main;
