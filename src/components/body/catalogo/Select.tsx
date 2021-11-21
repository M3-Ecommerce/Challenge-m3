import React from "react";

function Select() {
  const options = ["Mas recentes", "Menor preço", "Maior preço"]
  return (
    <div style={{width:150}} className=" custom-select content-right" >
      <select className=" fs16">
        <option value="0">Ordenar por:</option>
        {
          options.map((option:string, index:number)=>{
            return(
              <option  value={index+1}>{option}</option>
            )
          })
        }
      </select>
    </div>
  );
}

export default Select;
