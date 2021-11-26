import React from 'react';

export const SelectFilter = ({handleSortClick, value}) => {
    
    return (
        <select 
            name="sortContent" 
            className="content-head-orderby"
            onChange={(event) => handleSortClick(event.target.value)}
            value={value}
        >
            <option 
                className="content-head-orderby__option" 
                value="" 
                defaultValue
            >
                Ordenar por
            </option>
            <option 
                className="content-head-orderby__option"
                value="moreRecent" 
            >
                Mas recentes
            </option>
            <option 
                className="content-head-orderby__option" 
                value="lessPrice"
            >
                Menor preço
            </option>
            <option 
                className="content-head-orderby__option" 
                value="higherPrice" 
            >
                Maior preço
            </option>
        </select>  
    );
};