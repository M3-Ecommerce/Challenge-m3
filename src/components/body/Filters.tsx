import React from "react";
import ColorFilter from "./filters/ColorFilter";
import PriceFilter from "./filters/PriceFilter";
import SizeFilter from "./filters/SizeFilter";

function Filters(props:any) {
  const { setUpdate, update } = props
  return (
    <div className="item2 ">
      <p className="titlem3 pt60">Blusas</p>
      <ColorFilter setUpdate={setUpdate} update={update}/>
      <SizeFilter/>
      <PriceFilter/>
    </div>
  );
}

export default Filters;
