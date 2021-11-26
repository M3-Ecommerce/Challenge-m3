import React, { useState } from "react";
import ModalConfirm from "./components/body/buys/ModalConfirm";
import ModalSale from "./components/body/buys/ModalSale";
import { useArticles } from "./components/hooks/useArticles";
import Body from "./components/webparts/Body";
import Footer from "./components/webparts/Footer";
import Header from "./components/webparts/Header";

const App = () =>  {
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)
  
 
  return (
    <>
    {
      openModal ?
    <ModalConfirm setOpenModal={setOpenModal} openModal={openModal} setOpenModal2={setOpenModal2} />
    :
    <></>
    }
    {
      openModal2 ?
    <ModalSale setOpenModal2={setOpenModal2} openModal2={openModal2} />
    :
    <></>
    }
      <div className="wrapper">
        <div className="grid-container">
          <Header setOpenModal2={setOpenModal2} openModal2={openModal2} openModal={openModal} />
          <Body setOpenModal={setOpenModal} />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
