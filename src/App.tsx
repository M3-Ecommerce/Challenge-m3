import React, { useState } from "react";
import ModalConfirm from "./components/body/buys/ModalConfirm";
import Catalogo from "./components/body/Catalogo";
import Filters from "./components/body/Filters";
import Body from "./components/webparts/Body";
import Footer from "./components/webparts/Footer";
import Header from "./components/webparts/Header";

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
    {
      openModal ?
    <ModalConfirm setOpenModal={setOpenModal} openModal={openModal} />
    :
    <></>
    }
      <div className="wrapper">
        <div className="grid-container">
          <Header />
          <Body setOpenModal={setOpenModal} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
