import React from 'react'
import { usePrice } from "../../hooks/usePrice";

function PriceFilter() {
    const { arrayPrices } = usePrice();
  
  const rangos = [
    { min: 0, max: 50 },
    { min: 51, max: 150 },
    { min: 151, max: 300 },
    { min: 301, max: 500 },
    { min: 501, max: 1000000 },
  ];

    return (
        <section className="pt40">
        <p className="title16px ">FAIXA DE PREÇO</p>
        <br className="pt40"></br>
        <ul className="listm3">
          {rangos.map((rango: any, index: number) => {
            return (
              <li style={{ padding: 0 }} key={index}>
                {index < rangos.length - 1 ? (
                  <>
                    <input
                      type="checkbox"
                      id={`cbox${rango.max}`}
                      value="first_checkbox"
                    />
                    <label
                      className="listitem3 fs14 labelm3 "
                      htmlFor={`cbox${rango.max}`}
                    >
                      {" "}
                      de R${rango.min} até R${rango.max}
                    </label>
                  </>
                ) : (
                  <>
                    <input
                      type="checkbox"
                      id={`cbox${rango.max}`}
                      value="first_checkbox"
                    />
                    <label
                      className="listitem3 fs14 labelm3 "
                      htmlFor={`cbox${rango.max}`}
                    >
                      {" "}
                      a partir de R${rango.min}
                    </label>
                  </>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    )
}

export default PriceFilter
