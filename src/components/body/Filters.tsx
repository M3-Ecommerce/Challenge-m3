import React, { useEffect, useState } from "react";
 import {useColors} from '../hooks/useColors';
import usePrice from "../hooks/usePrice";
import { useSize } from "../hooks/useSize";

function Filters() {
  const {arrayColors} = useColors()
    const {arraySizes} = useSize()
    const {arrayPrices} = usePrice()
    const tallas = ["p", "m", "g", "gg", "exg", "34", "36", "38", "40", "42", "44", "46"]
    const rangos = [
      {min:0, max:50 },
      {min:51, max:150 },
      {min:151, max:300 },
      {min:301, max:500 },
      {min:501, max:1000000 },
    ]
    
    console.log(arrayPrices)
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
      <section className="pt40">
        <p className="title16px ">TAMANHOS</p>
      <br className="pt50"></br>
      <div className="grid-sizes ">
        {
          tallas.map((talla:string, index:number)=>{
            return(
              <div className={`size${talla} text-center content-center`} >
                <p className="fs16">{ talla.toUpperCase()}</p>
              </div>
              //<p style={{fontSize:16}} className={`size${talla}`} key={index}>{talla}</p>
            )
          })
        }

      </div>
      </section>
      <section className="pt40">
      <p className="title16px ">FAIXA DE PREÇO</p>
      <br className="pt40"></br>
      <ul className="listm3">
         {
             rangos.map((rango:any,index:number)=>{
                 return(
                   
                     <li style={{padding:0}}  key={index}>
                       {
                         (index < rangos.length-1) ?                         
                         <>
                         <input  type="checkbox" id={`cbox${rango.max}`} value="first_checkbox"/>  
                         <label  className="listitem3 fs14  " htmlFor={`cbox${rango.max}`}  > de R${rango.min} até R${rango.max}</label>
                         </>
                         :
                         <>
                         <input  type="checkbox" id={`cbox${rango.max}`} value="first_checkbox"/>  
                         <label  className="listitem3 fs14  " htmlFor={`cbox${rango.max}`}  > a partir de R${rango.min}</label>
                         </>

                       }
                                             
                     </li>
                 )                 
             })
         }
      </ul>

      </section>

    </div>
  );
}

export default Filters;
