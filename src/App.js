import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";
import "./App.css";
import Key from "./Key";

function App() {
  const [selectedOption, setselectedOption] = useState(Key.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Navbar setselectedOption={setselectedOption} />
      <Card selectedOption={selectedOption} />
      <Footer />
    </div>
  );
}

export default App;
