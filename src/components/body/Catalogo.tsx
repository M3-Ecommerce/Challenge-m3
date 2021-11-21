import React from "react";
import { useDataCard } from "../hooks/useDataCard";

function Catalogo() {
  const { arrayData } = useDataCard();
  console.log(arrayData);
  return (
    <div className="item3 ">
      <br className="pt200" />
      <div className="grid-catalogo pt150">
        {arrayData?.map((item: any, index: number) => {
          return (
            <div className="data-card " key={index}>
              <img  src={`${item.image}`} />
              <p className="fs16">{item.name.toUpperCase()}</p>
              <p className="fs16 bold">R$ {item.price.toLocaleString('en-IN', {currency: 'INR', minimumFractionDigits: 2})}</p>
              <p className="fs16">até {item.parcelamento[0]}x de R${item.parcelamento[1]}</p>
              <button>COMPRAR</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Catalogo;
