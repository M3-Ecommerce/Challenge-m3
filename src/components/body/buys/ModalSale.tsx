import React from "react";
import { useArticles } from "../../hooks/useArticles";

function ModalSale(props: any) {
  const { setOpenModal2, openModal2 } = props;
  // const data:any =  useArticles(openModal2)
  // const { article } = data;
  // console.log(data)

  const sales = JSON.parse(window.localStorage.getItem("ShoppingCart") || "")

  console.log(sales)
  return (
    <>
        <div
          className="content-center fondo-modal"
          onClick={() => console.log("hello")}
        >
          <div className="modal-container">
            <p className="fs18">
            Carrinho de compras
            </p>
            <hr className="modal-separator" />
            {
              sales?.map((article:any, i:number )=>{
                  console.log(article)
                return(
                <div key={i} className="grid-modal2" style={{display:"flex"}}>
                <div style={{width:"30%"}}>
                    <img style={{width:"30%"}} src={article?.image} />
                </div>
              
              <div style={{width:"60%"}}>
                <p className="fs18 bold">{`${article?.name} | Cor ${article?.color} `}</p>
                <p className="fs16 bold pt10">
                  R${" "}
                  {article?.price.toLocaleString("en-IN", {
                    currency: "INR",
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
              <div style={{width:"10%"}}>
                  <p className="fs16">x</p>
              </div>
            </div>)
              })
            }
            

            <hr className="modal-separator" />
            <button className="fs16 modal-button" title="Confirmar compra">
            Confirmar compra
            </button>
            <p
              onClick={() => setOpenModal2(false)}
              className="fs14"
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Continuar comprando
            </p>
          </div>
        </div>
    </>
  );
}

export default ModalSale;