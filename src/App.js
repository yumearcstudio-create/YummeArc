import React, { lazy } from "react";
import GlobalProvider from "./GlobalProvider/GlobalProvider";
import { Routes, Route } from 'react-router-dom';
import PageTransition from "./components/PageTransition";

// Route-level code splitting. This gives the transition loader a real chunk to
// wait for, instead of navigating synchronously from an already-loaded bundle.
const Home = lazy(() => import("./Pages/Home/Home"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfolio"));
const Comission = lazy(() => import("./Pages/ComissionPage/Comission"));
const Service = lazy(() => import("./Pages/Service/Service"));
const About = lazy(() => import("./Pages/About/About"));
const CommissionForm = lazy(() => import("./Common/ComissionForm"));

function App() {
  return (
    <GlobalProvider>
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/commission" element={<Comission/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/com" element={<CommissionForm/>}/>
        </Routes>
      </PageTransition>
    </GlobalProvider>
  );
}

export default App;