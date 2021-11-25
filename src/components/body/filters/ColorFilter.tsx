import React, { useEffect, useState } from "react";
import { useColors } from "../../hooks/useColors";

function ColorFilter(props: any) {
  const {update, setUpdate} = props
  const [colorSelected, setColorSelected] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const { arrayColors } = useColors();

  const handlerChange = (e: any) => {
    {
      colorSelected
        ? (window.localStorage.removeItem("ColorFilter"),
          setColorSelected(false))
        : (window.localStorage.setItem("ColorFilter", e.target.value),
          setColorSelected(true))
          
    }
    setUpdate(!update)
  };
  const removeSelected = () => {
    window.localStorage.removeItem("ColorFilter"), setColorSelected(false)
    setUpdate(!update)
  };

  useEffect(() => {
    if (window.localStorage.getItem("ColorFilter")) {
      window.localStorage.removeItem("ColorFilter");
    }
  }, [seeMore]);
  return (
    <section className="pt80">
      <p className="title16px">CORES</p>
      <ul className="listm3 pt20">
        {window.localStorage.getItem("ColorFilter") ? ( 
          <>
            <li style={{ padding: 0 }}>
              <input
                name={"color"}
                type="checkbox"
                id={`cbox`}
                onClickCapture={handlerChange}
                
                checked
                readOnly
              />
              <label className="listitem3 fs14 labelm3 " htmlFor={`cbox`}>
                {" "}
                {window.localStorage.getItem("ColorFilter")}
              </label>
            </li>
          </>
        ) : (
          <>
            {arrayColors &&
              arrayColors?.map((color: string, index: number) => {
                return (
                  <div key={index}>
                    <>
                      {index <= 4 ? (
                        <li style={{ padding: 0 }}>
                          <input
                            name={"color"}
                            type="checkbox"
                            id={`cbox${index}`}
                            value={color}
                            onClickCapture={handlerChange}
                          />
                          <label
                            className="listitem3 fs14 labelm3 "
                            htmlFor={`cbox${index}`}
                          >
                            {" "}
                            {color}
                          </label>
                        </li>
                      ) : (
                        <>
                          {seeMore ? (
                            <li style={{ padding: 0 }} key={index}>
                              <input
                                name={"color"}
                                type="checkbox"
                                id={`cbox${index}`}
                                value={color}
                                onClickCapture={handlerChange}
                              />
                              <label
                                className="listitem3 fs14 labelm3"
                                htmlFor={`cbox${index}`}
                              >
                                {" "}
                                {color}
                              </label>
                            </li>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </>
                  </div>
                );
              })}
          </>
        )}
      </ul>
      {window.localStorage.getItem("ColorFilter") ? (
        <p
          className="fs12"
          style={{ cursor: "pointer" }}
          onClick={removeSelected}
        >
          {seeMore ? "- Remover seleção" : "- Remover seleção"}
        </p>
      ) : (
        <p
          className="fs12"
          style={{ cursor: "pointer" }}
          onClick={() => setSeeMore(!seeMore)}
        >
          {seeMore ? "" : "Ver todas as cores ˅"}
        </p>
      )}
    </section>
  );
}

export default ColorFilter;
