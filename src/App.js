import './App.css';
import Header from './components/section/Header';
import Hero from './pages/Hero';
import Commends from './pages/Commends';
import ClothingSeason from './pages/ClothingSeason';
import Sneakers from './pages/Sneakers';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClothingSeason/>
        <Sneakers/>
        <Commends />
      </main>
    </>
  );
}

export default App;
