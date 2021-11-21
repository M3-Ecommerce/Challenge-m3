import React, { useEffect, useState } from "react";
 import {useColors} from '../hooks/useColors';
import { useSize } from "../hooks/useSize";

function Filters() {
    const {arrayColors} = useColors()
    const {arraySizes} = useSize()
    console.log(arraySizes)
  return (
    <div className="item2">
      <p className="titlem3">Blusas</p>
      <p className="title16px pt80">CORES</p>
      <ul className="listm3 pt20">
         {
             arrayColors && arrayColors?.map((color:string,index:number)=>{
                 return(
                     <li style={{padding:0}}  key={index}>
                         <input  type="checkbox" id={`cbox${index}`} value="first_checkbox"/>  
                         <label  className="listitem3 fs14  " htmlFor={`cbox${index}`}  > {color}</label>                    
                     </li>
                 )                 
             })
         }
      </ul>
      <p className="title16px pt50">TAMANHOS</p>
      


    </div>
  );
}

export default Filters;
