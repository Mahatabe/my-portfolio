import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Research from "./components/Research";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Particles 
      className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 900,
              }
            },
            shape:{
              type: "Circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              }
            }
          },
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Education />
      <Services />
      <Portfolio />
      <Research />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
