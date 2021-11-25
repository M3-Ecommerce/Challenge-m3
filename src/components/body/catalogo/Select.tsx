import React, { ChangeEvent, useState } from "react";

function Select(props: any) {
  const { setSort } = props;
  const options = ["Mas recentes", "Menor preço", "Maior preço"];
  const [user, setUser] = useState<any>();
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setSort(e);
  };
  const handlerInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="select-right">
      <div style={{ width: 150 }} className=" custom-select content-right">
        <select className=" fs16" onChange={handlerInputChange} name="sort">
          <option value={0}>Ordenar por:</option>
          {options.map((option: string, index: number) => {
            return (
              <option key={index} value={index + 1}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Select;
