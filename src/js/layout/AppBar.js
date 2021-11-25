import React from 'react';

const AppBar = () => {
    return (
        <div className="appbar">
            <div className="appbar-main">
                <img src="../../img/logo-m3.png" alt="logo"/>                
                <div>
                    <img  className="appbar-main-icon" src="../../img/shopping.png" alt="icon-shopping"/>
                    <p className="appbar-badged">2</p>
                </div>
            </div>
            <hr className="appbar-breakline" />
        </div>
    );
};

export default AppBar;