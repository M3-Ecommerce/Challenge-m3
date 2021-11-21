import React from "react";
import Body from "./components/webparts/Body";
import Footer from "./components/webparts/Footer";
import Header from "./components/webparts/Header";

function App() {
  return (
    <div className="wrapper">
      <div className="grid-container">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
