import React from 'react';
import { AsideBar } from './AsideBar';

//apply filter by color, size and price 
export const OrderMobile = (props) => {
    
    const {
        handleOrderFilterMob,
        clearButton,
        colors,
        sizes,
        prices,
        products,
        handleColorClick,
        handleFilterReset,
        handleSizeClick,
        handlePriceClick,
    } = props



    return (
        <div className="mobile-filter">
            <div className="mobile-header">
                <p className="mobile-header_title">FILTRAR</p>
                <button 
                    className="mobile-close" 
                    onClick={() => {handleOrderFilterMob(false)}}
                >
                    X
                </button>
            </div>
            <hr className="mobile-header-breakline"/>
            <div>
                <AsideBar
                    clearButton={clearButton}
                    colors={colors}
                    sizes={sizes}
                    prices={prices}
                    products={products}
                    handleColorClick={(currentColor) => {handleColorClick(currentColor)}}
                    handleFilterReset={handleFilterReset}
                    handleSizeClick={(selectedSize) => {handleSizeClick(selectedSize)}}
                    handlePriceClick={(selectedPrice) => {handlePriceClick(selectedPrice)}}
                />
            </div>
        </div>
    );
};
