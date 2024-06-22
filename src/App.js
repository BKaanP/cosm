import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WhyUs from "./components/whyUs";
import Services from "./components/services";
import About from "./components/about";
import Face from "./components/face";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <div id="startseite">
        <Hero />
      </div>
      <div id="warum-wir">
        <WhyUs />
      </div>
      <div id="dienstleistungen">
        <Services />
      </div>
      <div id="über-uns">
        <About />
      </div>
      <div id="gesicht">
        <Face />
      </div>
      <Footer />
    </div>
  );
}

export default App;
