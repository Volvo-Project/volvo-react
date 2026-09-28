import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Features from "./components/Features.jsx";
import Trending from "./components/Trending.jsx";
import MostPlayed from "./components/MostPlayed.jsx";
import Categories from "./components/Categories.jsx";
import Cta from "./components/Cta.jsx";

function App() {
  return (
    <>
      {/*
    <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    </div>
    */}
      <Header />
      <main>
        <Banner />
        <Features />
        <Trending />
        <MostPlayed />
        <Categories />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

export default App;
