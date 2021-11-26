import React, { useState } from 'react';
import AppBar from '../../layout/AppBar';
import { Content } from '../../layout/Content';
import { Footer } from '../../layout/Footer';

const App = () => {

    const [counter, setCounter] = useState(0);
    const handleBuyClick = () => {
        setCounter(counter + 1)
    };


    return (
        <div className="app">
            <AppBar counter={counter} />
            <Content handleBuyClick={handleBuyClick} />
            <Footer />
        </div>
    );
};

export default App;