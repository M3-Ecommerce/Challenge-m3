import React, { useEffect, useState } from "react";
import { useSize } from "../../hooks/useSize";

function SizeFilter(props: any) {
  const { update, setUpdate } = props;
  // const [SizeSelected, setSizeSelected] = useState()
  const { arraySizes } = useSize();

  interface Sizes {
    size: string;
  }

  const [sizes, setSizes] = useState<Sizes[]>([]);
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

  const handlerClick = async (talla: any) => {
    let ancla = null
    sizes.map((item: any, index: number) => {
      if (item.size == talla) {
        ancla = index
      }
    });
    if (ancla === null) {
      const newSizes: Sizes[] = [
        ...sizes,
        {
          size: talla,
        },
      ];
      window.localStorage.setItem("SizeFilter", JSON.stringify(newSizes));
      setSizes(newSizes);
    }else{
      await deleteSizes(ancla)
      window.localStorage.setItem("SizeFilter", JSON.stringify(sizes));
      if (JSON.stringify(window.localStorage.getItem("SizeFilter")) == '"[]"') {
        window.localStorage.removeItem("SizeFilter")
     }
    }

    setUpdate(!update);
  };
  const deleteSizes = async (i: any) => {
    sizes.splice(i, 1);
    const newSizes: Sizes[] = [...sizes];

    setSizes(newSizes);
  };
  return (
    <section className="pt40">
      <p className="title16px ">TAMANHOS</p>
      <br className="pt50"></br>
      <div className="grid-sizes ">
        {tallas.map((talla: string, index: number) => {
          return (
            <div
              key={index}
              className={`size${talla} text-center content-center checker`}
            >
              <input
                type="checkbox"
                name=""
                id={`checkb${index}`}
                value={talla}
                onClick={() => handlerClick(talla)}
              />
              <label htmlFor={`checkb${index}`} className="fs16 labelsize">
                {talla.toUpperCase()}{" "}
              </label>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SizeFilter;
