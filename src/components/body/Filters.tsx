import React, { useState } from "react";
import ColorFilter from "./filters/ColorFilter";
import PriceFilter from "./filters/PriceFilter";
import SizeFilter from "./filters/SizeFilter";

function Filters(props: any) {
  const { setUpdate, update } = props;
  const [stateFilter, setStateFilter] = useState(false)
  return (
    <div className="item2 ">
      <p className="titlem3 pt60">Blusas</p>

      <div className="oculto"  style={{ height: 50, width: "95%", border: "0px solid black", display:"flex" }}>
        <div className="content-center oculto" style={{height:50, width:"50%", border: "1px solid black", fontSize:24}} onClick={()=>setStateFilter(!stateFilter)} ><p>Filtrar</p></div>
        <div className="content-center oculto" style={{height:50, width:"50%", border: "1px solid black", fontSize:24}}><p>Ordenar</p></div>
      </div>
      {
        stateFilter ?
        <>
        <ColorFilter setUpdate={setUpdate} update={update} />
      <SizeFilter setUpdate={setUpdate} update={update} />
      <PriceFilter setUpdate={setUpdate} update={update} />
        </>
        :
        <>
        </>
      }
      <div className="hello">
        <ColorFilter setUpdate={setUpdate} update={update} />
      <SizeFilter setUpdate={setUpdate} update={update} />
      <PriceFilter setUpdate={setUpdate} update={update} />
      </div>
      
      
    </div>
  );
}

export default Filters;
