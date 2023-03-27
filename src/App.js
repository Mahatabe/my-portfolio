import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from './components/AboutMe';

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
    </>
  );
}

export default App;
