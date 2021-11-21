import React from 'react'
import {useColors} from '../../hooks/useColors';

function ColorFilter() {
    const {arrayColors} = useColors()

    return (
        <section className="pt80">
        <p className="title16px">CORES</p>
        <ul className="listm3 pt20">
          {arrayColors &&
            arrayColors?.map((color: string, index: number) => {
              return (
                <li style={{ padding: 0 }} key={index}>
                  <input
                    type="checkbox"
                    id={`cbox${index}`}
                    value="first_checkbox"
                  />
                  <label className="listitem3 fs14  " htmlFor={`cbox${index}`}>
                    {" "}
                    {color}
                  </label>
                </li>
              );
            })}
        </ul>
      </section>
    )
}

export default ColorFilter
