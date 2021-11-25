import React, { useEffect, useState } from "react";
import { usePrice } from "../../hooks/usePrice";

function PriceFilter(props: any) {
  const { update, setUpdate } = props;
  //const { arrayPrices } = usePrice();
  const [priceSelected, setPriceSelected] = useState(false);
  const [seeMore] = useState(false);

  const rangos = [
    { min: 0, max: 50 },
    { min: 51, max: 150 },
    { min: 151, max: 300 },
    { min: 301, max: 500 },
    { min: 501, max: 1000000 },
  ];
  const handlerChange = (e: any) => {
    {
      priceSelected
        ? (window.localStorage.removeItem("PriceFilter"),
          setPriceSelected(false))
        : (window.localStorage.setItem("PriceFilter", e.target.value),
          setPriceSelected(true));
    }
    setUpdate(!update);
  };
  const removeSelected = () => {
    window.localStorage.removeItem("PriceFilter"), setPriceSelected(false);
    setUpdate(!update);
  };
  useEffect(() => {
    if (window.localStorage.getItem("PriceFilter")) {
      window.localStorage.removeItem("PriceFilter");
    }
  }, [seeMore]);
  return (
    <section className="pt40">
      <p className="title16px ">FAIXA DE PREÇO</p>
      <br className="pt40"></br>

      <ul className="listm3">
        {window.localStorage.getItem("PriceFilter") ? (
          <li style={{ padding: 0 }}>
          <input
            type="checkbox"
            id={`cboxp`}
            checked
            readOnly
            onClickCapture={handlerChange}
          />
          <label
            className="listitem3 fs14 labelm3 "
            htmlFor={`cboxp`}
          >
            Hello
            {/* {index < rangos.length - 1
              ? `de R$${rango.min} até R$${rango.max}`
              : `a partir de R$${rango.min}`} */}
          </label>
        </li>
        ) : (
          <>
            {rangos.map((rango: any, index: number) => {
              return (
                <li style={{ padding: 0 }} key={index}>
                  <input
                    type="checkbox"
                    id={`cboxp${rango.max}`}
                    value={JSON.stringify(rango)}
                    onClickCapture={handlerChange}
                  />
                  <label
                    className="listitem3 fs14 labelm3 "
                    htmlFor={`cboxp${rango.max}`}
                  >
                    {index < rangos.length - 1
                      ? `de R$${rango.min} até R$${rango.max}`
                      : `a partir de R$${rango.min}`}
                  </label>
                </li>
              );
            })}
          </>
        )}
      </ul>
      {priceSelected && (
        <p className="fs12" style={{ cursor: "pointer" }} onClick={removeSelected}>
          - Remover seleção
        </p>
      )}
    </section>
  );
}

export default PriceFilter;
