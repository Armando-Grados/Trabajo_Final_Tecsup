import './App.css';
import { Route, Routes } from 'react-router-dom';
import PrimaryLayout from './layouts/PrimaryLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
// import { useState } from 'react';
// import PreLoader from './components/section/PreLoader';

function App() {
  // const [loader, setLoader] = useState(false);
  return (
    // loader ? (
    <Routes>
      <Route path='/' element={<PrimaryLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/product' element={<ProductPage />}></Route>
        <Route></Route>
      </Route>
    </Routes>
    // )
    // :
    // <PreLoader setLoader={setLoader} />

  )
}

export default App;
