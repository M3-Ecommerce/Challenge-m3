import React, { useEffect, useState } from "react";
import { BsBagFill } from "react-icons/bs";

function Header(props: any) {
 
  const { setOpenModal2, openModal2, openModal} = props;
  const [badge, setBadge] = useState(0);
  useEffect(() => {
    if (window.localStorage.getItem("ShoppingCart") !== undefined) {
      if (window.localStorage.getItem("ShoppingCart") === null) {
        setBadge(0);
      } else {
        console.log(
          "---->",
          JSON.parse(window.localStorage.getItem("ShoppingCart") || "m3").length
        );
        setBadge(
          JSON.parse(window.localStorage.getItem("ShoppingCart") || "m3").length
        );
      }
    } else {
        setBadge(0);
    }
  }, [openModal]);
  return (
    <>
    <div className="item1 headerm3">
      <img className="headerlogom3" src={"img/logo-m3.png"} />
      <div onClick={()=>setOpenModal2(!openModal2)} style={{cursor:"pointer"}}>
        <BsBagFill className="headericonm3" onClick={()=>setOpenModal2(!openModal2)} />
      <span className="badge headericonm3 fs10">{badge}</span>
      </div>
      
      <div className="separator" />
    </div>
    </>
  );
}

export default Header;
