import React from "react";
import Card from "./catalogo/Card";
import Select from "./catalogo/Select";

function Catalogo(props: any) {
  const { arrayData} = props

  return (
    <>
    <div className="item3 ">
        <Select />
       <Card arrayData={arrayData} />
    </div>
     
    </>
  );
}

export default Catalogo;
