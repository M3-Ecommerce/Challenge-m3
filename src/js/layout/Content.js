import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { OrderMobile } from './OrderMobile';
import { FilterMobile } from './FilterMobile';
import { SelectFilter } from './SelectFilter';
import { AsideBar } from './AsideBar';

const pricesRange = [
    {id:1, min:0, max:50, isActive:false},
    {id:2, min:51, max:150, isActive:false},
    {id:3, min:151, max:300, isActive:false},
    {id:4, min:301, max:500,  isActive:false},
    {id:5, min:500, max:1000000, isActive:false},
];
const baseUrl = "http://localhost:5000/products"; 

export const Content = () => {
        
    const [products, setProducts] = useState({data: [], loading: true, error: null});
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [prices, setPrices] = useState(pricesRange);
    const [clearButton, setClearButton] = useState(false);
    const [order, setOrder] = useState('');

    // responsive buttons component
    const [filterMob, setFilterMob] = useState(false);
    const [orderMob, setOrderMob] = useState(false);
    
    const startGetData = async () => {    
        try {
            setProducts({ ...products, loading: true });
            const resp = await fetch(baseUrl);
            const productList = await resp.json();
            setProducts({ ...products, data: productList, loading: false });
            
            const priceList = [];
            productList.forEach(
                currentPrice => {
                    priceList.push(currentPrice.price)
                }
            );    
            
            const colorList = [];
            productList.forEach(
                currentProduct => {
                    colorList.push(currentProduct.color)}
            );
            setColors([...new Set(colorList)].map(i => ({ 
                slug: i, 
                isActive:false 
            })));

            const sizeList = [];
            productList.forEach(
                currentProduct => { 
                    currentProduct.size.forEach(
                        (currentSize) => {sizeList.push(currentSize)});}
            );
            setSizes([...new Set(sizeList)].map(i => ({ 
                slug: i, 
                isActive:false 
            })));            
        
        } catch(error) {
            setProducts({ ...products, loading: false, error });
        };
    };
    
    const handleColorClick = (currentColor) => {
        const newColors = colors.map(
            color => color.slug === currentColor.slug 
            ? {...color, isActive: !currentColor.isActive }
            : color
        );
        setColors(newColors);
        setClearButton(true);
    };
        
    const handleSizeClick = (selectedSize) => {  
        const activeSizes = sizes.map(
            size => size.slug === selectedSize.slug
            ? {...size, isActive: !selectedSize.isActive }
            : size
        );
        setSizes(activeSizes);
        setClearButton(true);  
    };

    const handlePriceClick = (selectedPrice) => {
        const activePrices = prices.map(
            price => price.id === selectedPrice.id
            ? {...price, isActive: !price.isActive}
            : price 
        );
        setPrices(activePrices);
        setClearButton(true);
    };
    
    const handleFilterReset = () => {
        const resetColors = colors.map(color => color.isActive === true ? {...color, isActive: false} : color);
        const resetSizes = sizes.map(size => size.isActive === true ? {...size, isActive: false} : size);
        const resetPrices = prices.map(price => price.isActive === true ? {...price, isActive: false} : price);
        setColors(resetColors);
        setSizes(resetSizes);        
        setPrices(resetPrices);
        setClearButton(false);        
    };
     
    const setPrices2Fetch = (minMaxPrices=[]) => {
        prices.map(price => {(price.isActive === true) ? (minMaxPrices.push(price.min, price.max)): 0})
        return minMaxPrices;
    };  
    
    const fetchAllFilterProducts = async () => {
        let colors2Fetch = [];
        let sizes2Fetch = [];
        
        colors.map(color => {if (color.isActive === true) colors2Fetch.push(color.slug)});
        sizes.map(size => {if (size.isActive === true) sizes2Fetch.push(size.slug)});
        
        const minMaxPrices = setPrices2Fetch();
        const minPrice = Math.min(...minMaxPrices);
        const maxPrice = Math.max(...minMaxPrices);
        
        const colorUrl = colors2Fetch.map(color => `color=${color}&`);
        const sizeUrl = sizes2Fetch.map(size => `size_like=${size}&`);
        const priceUrl = `price_gte=${minPrice}&price_lte=${maxPrice}&`; //BUG
        const bodyUrl = `${colorUrl}${sizeUrl}`;    
        
        try {
            const resp = await fetch(`${baseUrl}?${bodyUrl}`);
            const productsFiltered = await resp.json();
            setProducts({ data: productsFiltered, loading: false });

        } catch (error) {
            console.log('error:',error);    
        };
    };

    const fetchFilterSortProducts = async() => {
       
        let keyWord = {
            moreRecent: '_sort=date&_order=desc',
            lessPrice: '_sort=price',
            higherPrice: '_sort=price&_order=desc',
        };

       try {
            const resp = await fetch(`${baseUrl}?${keyWord[order]}`);
            const productsSorted = await resp.json();
            setProducts({ data: productsSorted, loading: false });

        } catch (error) {
            console.log(error);    
        };
    };

    const handleLoadMoreData = async() => {
        const url = 'http://localhost:5000/products?_limit=10'
        try {
            const resp = await fetch(url);
            const productsAdded = await resp.json();
            setProducts({...products, data: productsAdded, loading: false });
        } catch (error) {
            console.log(error);
        };
    };

    const handleSortClick = (value) => {
        setOrder(value);
    };

    useEffect(() => {
        (async () => {
            await startGetData();
        })();
    }, []);

    useEffect(() => {
        (async () => {
            await fetchAllFilterProducts();
        })();
    }, [colors, sizes, prices]);
    
    useEffect(() => {
        (async () => {
            await fetchFilterSortProducts();
        })();
    }, [order]);    

    const handleFilterMob = (newState) => {
        setFilterMob(newState);
    };

    const handleOrderFilterMob = (newState) => {
        setOrderMob(newState);
    };
    
    return (
        <div className="content">
            <div className="content-head">
                <p className="content-head-title"><i>Blusas</i></p>
                <div className="content-filtermobile">
                    <button 
                        className="content-filtermobile__button"
                        onClick={() => handleFilterMob(true)} 
                    >
                        Filtrar
                    </button>
                    <button 
                        className="content-filtermobile__button"
                        onClick={() => handleOrderFilterMob(true)}
                    >
                        Ordenar
                    </button>
                </div>
                <div>
                    <SelectFilter handleSortClick={handleSortClick} value={order}/>
                </div>
            </div>
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
            <div className="box-button">
                <button 
                    type="button" 
                    className="button-contained__carregar"
                    onClick={handleLoadMoreData}
                >
                    <b>CARREGAR MAIS</b>
                </button>
            </div>
            {(filterMob===true) && 
                <FilterMobile 
                    handleFilterMob={(newState) => handleFilterMob(newState)}
                    handleSortClick={(value) => handleSortClick(value)}
                />
            }
            {(orderMob===true) && 
                <OrderMobile 
                    handleOrderFilterMob={(newState) => handleOrderFilterMob(newState)}
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
            }           
        </div>
    );
};