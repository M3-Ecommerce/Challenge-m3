import React from "react";
import { useArticleRequest } from "../../hooks/useArticleRequest";

function ModalConfirm(props: any) {
  const { setOpenModal, openModal } = props;
  const data = useArticleRequest(openModal);
  const { article } = data;
  console.log(article);
  return (
    <>
      {article != null ? (
        <div
          className="content-center fondo-modal"
          onClick={() => console.log("hello")}
        >
          <div className="modal-container">
            <p className="fs18">
              Você adicionou um produto ao seu carrinho de compras:
            </p>
            <hr className="modal-separator" />
            <div className="grid-modal">
              <img src={article?.image} />
              <div style={{textAlign:"left"}}>
                <p className="fs18 bold">{`${article?.name}`}</p>
                <p className="fs18 bold">{`Cor ${article?.color}`}</p>
                <p className="fs18 bold">{`Tamanho [${article?.size[0]}]`}</p>
                <p className="fs16 bold pt10">
                  R${" "}
                  {article?.price.toLocaleString("en-IN", {
                    currency: "INR",
                    minimumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>

            <hr className="modal-separator" />
            <button className="fs16 modal-button" title="Finalizar compra">
              Finalizar compra
            </button>
            <p
              onClick={() => setOpenModal(false)}
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

export default ModalConfirm;
