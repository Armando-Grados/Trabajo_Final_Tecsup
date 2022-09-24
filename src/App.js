import './App.css';
import { Route, Routes } from 'react-router-dom';
import PrimaryLayout from './layouts/PrimaryLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PrimaryLayout />}>
        <Route index element={<HomePage />} />
        <Route></Route>
        <Route></Route>
      </Route>
    </Routes>
  );
}

export default App;
