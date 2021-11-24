import React from 'react'
import { useSize } from "../../hooks/useSize";

function SizeFilter() {
    const { arraySizes } = useSize();
const tallas = [
    "p",
    "m",
    "g",
    "gg",
    "exg",
    "34",
    "36",
    "38",
    "40",
    "42",
    "44",
    "46",
  ];
    return (
        <section className="pt40">
        <p className="title16px ">TAMANHOS</p>
        <br className="pt50"></br>
        <div className="grid-sizes ">
          {tallas.map((talla: string, index: number) => {
            return (
              <div key={index} className={`size${talla} text-center content-center checker`}>
                <input  type="checkbox" name="" id={`checkb${index}`} />
                <label htmlFor={`checkb${index}`} className="fs16 labelsize">{talla.toUpperCase()} </label> 
              </div>
            );
          })}
        </div>
      </section>
    )
}

export default SizeFilter
