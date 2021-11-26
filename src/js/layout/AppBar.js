import React, { useEffect, useState } from 'react';

export const AppBar = ({counter}) => {


    return (
        <div className="appbar">
            <div className="appbar-main">
                <img src="../../img/logo-m3.png" alt="logo"/>                
                <div>
                    <img className="appbar-main-icon" src="../../img/shopping.png" alt="icon-shopping"/>
                    <p className="appbar-badged">{counter}</p>
                </div>
            </div>
            <hr className="appbar-breakline" />           
        </div>
    );
};

export default AppBar;