
import { Router } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";


function App() {

  return (
    <>
        <div className="app">
          <NavBar />
          <Home />
          <Skills />
          <Portfolio />
          <Contact />

        </div>
    </>
    
  );
}


export default App;
