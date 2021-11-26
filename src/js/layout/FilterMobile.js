import React from 'react';
import { SelectFilter } from './SelectFilter';

export const FilterMobile = ({ handleFilterMob, handleSortClick }) => {
    
    const onHandleClick = (keyWord) => {
        handleSortClick(keyWord);
        handleFilterMob(false);
    };
    
    return (
        <div className="mobile-filter">
            <div className="mobile-header">
                <p className="mobile-header_title">ORDENAR</p>
                <button 
                    className="mobile-close" 
                    onClick={() => {handleFilterMob(false)}}
                >
                    X
                </button>
            </div>
            <hr className="mobile-header-breakline"/>
            <div className="mobile-content">
                <div>
                    <button 
                        className="mobile-content__button"
                        onClick={() => onHandleClick("moreRecent")}
                    >
                        Mais recente
                    </button>
                </div>
                <div>
                    <button 
                        className="mobile-content__button"
                        onClick={() => onHandleClick("lessPrice")}
                    >
                        Menor preço
                    </button>
                </div>
                <div>
                    <button 
                        className="mobile-content__button"
                        onClick={() => onHandleClick("higherPrice")}
                    >
                        Maior preço
                    </button>
                </div>
            </div>
        </div>
    );
};