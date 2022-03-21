import React from "react";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <SignUp />
      <Footer />
    </>
  );
}

export default App;
