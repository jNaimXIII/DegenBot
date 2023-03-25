import "./Home.scss";
import Header from "../components/global/Header";
import Roadmap from "../components/roadmap/Roadmap";
import Security from "../components/security/Security";
import Tokenomics from "../components/tokenomics/Tokenomics";
import Hero from "../components/hero/Hero";
import Features from "../components/features/Features";
import WhitePaper from "../components/whitepaper/WhitePaper";
import Footer from "../components/footer/Footer";
import Apps from "../components/app/Apps";
import AppBanner from "../components/app/AppBanner";
import SiteMap from "../components/sitemap/SiteMap";
import DegensCarousel from "../components/global/DegensCarousel";

// import VantaBackground from "./components/global/VantaBackground";

function App() {
  return (
    <>
      {/*<VantaBackground />*/}
      <Header />

      <main>
        <Hero />

        <DegensCarousel rotation={-3.5} />

        <Features />
        <Security />

        <DegensCarousel rotation={2.4} direction="right" />

        <Tokenomics />
        <WhitePaper />
        <Roadmap />

        <AppBanner />
        <Apps />

        <DegensCarousel rotation={-3.8} />

        <SiteMap />
      </main>

      <Footer />
    </>
  );
}

export default App;
