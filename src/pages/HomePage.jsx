import HomeCommends from "../components/home/HomeCommends";
import HomeHero from "../components/home/HomeHero";
// import HomeLastestSneakers from "../components/home/HomeLastestSneakers";
// import HomeStyleClothing from "../components/home/HomeStyleClothing";
import HomeSlider from '../components/home/HomeSlider';
import HomeZapatillas from "../components/home/HomeZapatillas";
import HomeCamisetas from './../components/home/HomeCamisetas';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      {/* <HomeStyleClothing />  */}
      {/* <HomeLastestSneakers /> */}
      <HomeSlider/>
      <HomeZapatillas/>
      <HomeCamisetas/>
    </>
  );
}

export default HomePage;