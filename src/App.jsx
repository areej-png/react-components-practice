import Header from "./components/Header";
import Content from "./components/Content";
import About from "./components/About";
import React from "react";
import ViewPets from "./components/viewpets" 
import './About.css';
import './Header.css';
import './content.css';
import './pets.css';


function App() {
  return (
    <>
      <Header />
      <Content />
      <About />
      <div className="App">
        <ViewPets />
      </div>
    </>
  );
}

export default App;
