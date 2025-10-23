import React, { useEffect } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import About from "./components/About";
import ViewPets from "./components/viewpets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./About.css";
import "./Header.css";
import "./content.css";
import "./pets.css";
import "./App.css";
import "./footer.css";

function App() {
  useEffect(() => {
    document.title = "Pawfect Shelter";
  }, []);

  return (
    <>
      <Header />
      <main>
        <Content />
        <About />
        <div className="App">
          <ViewPets />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
