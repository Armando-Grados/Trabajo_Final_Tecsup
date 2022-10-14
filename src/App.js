import "./App.css";
import { useEffect } from "react";
import { Route, Routes, Navigate , useNavigate } from "react-router-dom";
import PrimaryLayout from "./layouts/PrimaryLayout";
import HomePage from "./pages/HomePage";
import WelcomePge from "./pages/WelcomePge";

function App() { 
  const navigate = useNavigate() ; 

  useEffect(() => { 
    console.log('navigated') ; 
      navigate('/welcome') ; 
  } , []);

  return (
    <Routes>
      <Route path="/" element={<PrimaryLayout />}>
        <Route index element={<HomePage />} />
        <Route></Route>
        <Route></Route>
      </Route>
      <Route path="/welcome">
        <Route index element={<WelcomePge />} />
      </Route>
    </Routes>
  );
}

export default App;
