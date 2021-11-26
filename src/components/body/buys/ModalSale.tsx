import React from "react";
import { useArticles } from "../../hooks/useArticles";

function ModalSale(props: any) {
  const { setOpenModal2, openModal2 } = props;
  const data:any =  useArticles(openModal2);
  const { article } = data;
  console.log(article)
  return (
    <>
      {article != null ? (
        <div
          className="content-center fondo-modal"
          onClick={() => console.log("hello")}
        >
          <div className="modal-container">
            <p className="fs18">
            Carrinho de compras
            </p>
            <hr className="modal-separator" />
            <div className="grid-modal2" style={{display:"flex"}}>
                <div style={{width:"30%"}}>
                    <img style={{width:"30%"}} src={article?.image} />
                </div>
              
              <div style={{width:"60%"}}>
                <p className="fs18 bold">{`${article?.name} | Cor ${article?.color} | Tamanho [${article?.size[0]}]`}</p>
              </div>
              <div style={{width:"10%"}}>
                  <p className="fs16">x</p>
              </div>
            </div>

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
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
}

export default ModalSale;