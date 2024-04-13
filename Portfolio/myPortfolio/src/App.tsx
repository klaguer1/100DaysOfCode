import { useState } from "react";

import "./App.css";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Experience />
    </>
  );
}

export default App;
