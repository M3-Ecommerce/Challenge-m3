import React, { useState, useEffect } from "react";
import clsx from "clsx";

export const AsideBar = (props) => {
    
    const { 
        clearButton,
        colors,
        sizes,
        prices,
        products,
        handleColorClick,
        handleFilterReset,
        handleSizeClick,
        handlePriceClick,
        handleBuyClick
    } = props; 
    
    return (
        <div className="content-body">
            <aside className="content-filter">
                <div>
                    {clearButton && 
                        <button 
                            type="reset" 
                            onClick={handleFilterReset}
                            className="content-filter-reset"
                        >
                            Clear changes X
                        </button>
                    }
                </div>
                <p className="content-filter--color_title">CORES</p>
                <form className="content-filter--color">
                    {colors.map( color =>  
                        <div 
                            className="content-filter-space"
                            key={color.slug}
                            >
                            <input 
                                type="checkbox" 
                                onChange={() => handleColorClick(color)} // {}
                                checked={color.isActive}
                            />    
                                <label className="content-filter--color__name">
                                    {color.slug}
                                </label><br/>  
                        </div>
                    )}
                </form>
                <div className="content-filter--size">
                    <p className="content-filter--size_title">TAMANHOS</p>
                    <div className="content-filter--size_items">
                        {sizes.map(size => 
                            <div className="content-filter-size_item" key={size.slug}>
                                <button 
                                className={clsx('content-filter-size_button', { 'content-filter-size_button__active': size.isActive })}
                                    onClick={() => handleSizeClick(size)}
                                    type="text"
                                >
                                  {size.slug}
                                </button>
                            </div>                               
                        )}
                    </div>
                </div>
                <p className="content-filter--price_title">FAIXA DE PREÇO</p>
                <form className="content-filter--price">
                    {prices.map(price => 
                        <div className="content-filter-space" key={price.id}>
                            <input 
                                type="checkbox" 
                                onChange={() => handlePriceClick(price)}
                                checked={price.isActive}
                            />    
                            <label className="content-filter--color__name">
                                {(prices.length === price.id)? `a partir de R$${price.min}`:`de R$${price.min} até R$${price.max}`}
                            </label><br/>  
                        </div>  
                    )}
                </form>
            </aside>
            <div className="content-filter-cards">
                {products.data.map(product => (
                    <div className="content-filter-card" key={product.id}>
                        <img 
                            className="content-filter-img" 
                            src={product.image} 
                            alt="image" width="auto" height="auto"
                        />  
                        <p className="content-filter-card__itemname">{product.name.toUpperCase()}</p>
                        <p className="content-filter-card__price">R$ {product.price}</p>
                        <p className="content-filter-card__promo">
                            até ${product.parcelamento[0]}x de R ${product.parcelamento[1]}
                        </p>
                        <button 
                            className="content-filter-card__button"
                            onClick={handleBuyClick}
                        >
                            <b>COMPRAR</b>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
