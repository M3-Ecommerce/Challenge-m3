import React, { useState } from "react";
import { useDataCard } from "../../hooks/useDataCard";
import Select from "./Select";

function Card(props:any) {
  const {arrayData, setOpenModal} = props

  interface Articles {
    id: any;
    name: string;
    color: string;
    image: string;
    price: any;
  }

  const [articles, setArticles] = useState<Articles[]>([]);

  const addShoppingCart = (item:any) =>{
    window.localStorage.setItem("LastAdd", `${item.id}`)
    const newArticle: Articles[] = [
      ...articles,
      {
        id: `${item.id}`,
        image: item.image,
        name: item.name,
        color: item.color,
        price: item.price,
      },
    ];

    window.localStorage.setItem("ShoppingCart", JSON.stringify(newArticle));
    setArticles(newArticle)
    setOpenModal(true)
  }

  return ( 
      <div className="grid-catalogo">
        {arrayData?.map((item: any, index: number) => {
          return (
            <div className="data-card pb20 " key={index}>
              <div className="img-contenedor">
                <img src={`${item.image}`} />
              </div>
              <p className="fs16">{item.name.toUpperCase()}</p>
              <p className="fs16 bold pt10">
                R${" "}
                {item.price.toLocaleString("en-IN", {
                  currency: "INR",
                  minimumFractionDigits: 2,
                })}
              </p>
              <p className="fs16 pb10">
                até {item.parcelamento[0]}x de R${item.parcelamento[1]}
              </p>
              <button className="buy-button" onClick={()=> addShoppingCart(item) }>COMPRAR</button>
            </div>
          );
        })}
      </div>
  );
}

export default Card;
