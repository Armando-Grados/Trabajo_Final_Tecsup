import "./App.css";
import { Route, Routes } from "react-router-dom";
import PrimaryLayout from "./layouts/PrimaryLayout";
import HomePage from "./pages/HomePage";
import WelcomePge from "./pages/WelcomePge";

function App() {
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
