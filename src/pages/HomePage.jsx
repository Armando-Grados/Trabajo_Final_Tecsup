import HomeCommends from "../components/home/HomeCommends";
import HomeHero from "../components/home/HomeHero";
// import HomeLastestSneakers from "../components/home/HomeLastestSneakers";
// import HomeStyleClothing from "../components/home/HomeStyleClothing";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      {/* <HomeStyleClothing /> */}
      {/* <HomeLastestSneakers /> */}
      <HomeCommends style={{maxHeight: '53rem'}} />
    </>
  );
}

export default HomePage;