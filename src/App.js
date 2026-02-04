import React from "react";
import GlobalProvider from "./GlobalProvider/GlobalProvider";
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Comission from "./Pages/ComissionPage/Comission";
import Service from "./Pages/Service/Service";
import About from "./Pages/About/About";
import CommissionForm from "./Common/ComissionForm";

function App() {
  return (
    <GlobalProvider>
      <Routes>
        < >
        <Route path="/" element={<Home/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/commission" element={<Comission/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/com" element={<CommissionForm/>}/>


        </>
        


      </Routes>
    </GlobalProvider>
  );
}

export default App;