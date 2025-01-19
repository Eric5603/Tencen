import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Features from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LogoGrid from "./components/LogoGrid";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
   <>
    <Navbar/>
    <Hero/>
    <LogoGrid/>
    <Features/>
    <Stats/>
    <CTA/>
    <Footer/>
   </>
  );
}
