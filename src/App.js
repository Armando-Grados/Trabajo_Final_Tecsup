import './App.css';
import { useEffect } from "react";
import { Route, Routes, Navigate , useNavigate } from "react-router-dom";
import PrimaryLayout from './layouts/PrimaryLayout';
import HomePage from './pages/HomePage';
import WelcomePge from "./pages/WelcomePge";

// import { useState } from 'react';
// import PreLoader from './components/section/PreLoader';

function App() {

  // const [loader, setLoader] = useState(false);
  return (
    // loader ? (
    <Routes>
      <Route path='/store' element={<PrimaryLayout />}>
        <Route index element={<HomePage />} />
        <Route></Route>
        <Route></Route>
      </Route>
      <Route path="/">
        <Route index element={<WelcomePge />} />
      </Route>
    </Routes>
    // )
    // :
    // <PreLoader setLoader={setLoader} />

  )
}

export default App;

//Creacion de nuevanueva