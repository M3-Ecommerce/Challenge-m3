import React from 'react'
import { useDataCard } from "../../hooks/useDataCard";
import Select from '../Select';

function Card() {
    const { arrayData } = useDataCard();
  console.log(arrayData);
    return (
      
        <div className="item3 ">
          
      <br className="pt300" />
      <Select/>
      <div className="grid-catalogo pt100">
        {arrayData?.map((item: any, index: number) => {
          return (
            <div className="data-card pb20 " key={index}>
              <img  src={`${item.image}`}  />
              <p className="fs16">{item.name.toUpperCase()}</p>
              <p className="fs16 bold pt10">R$ {item.price.toLocaleString('en-IN', {currency: 'INR', minimumFractionDigits: 2})}</p>
              <p className="fs16 pb10">até {item.parcelamento[0]}x de R${item.parcelamento[1]}</p>
              <button className="buy-button">COMPRAR</button>
            </div>
          );
        })}
      </div>
    </div>
    )
}

export default Card
