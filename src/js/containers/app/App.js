import React from 'react';
import AppBar from '../../layout/AppBar';
import { Content } from '../../layout/Content';
import { Footer } from '../../layout/Footer';

const App = () => {
    return (
        <div className="app">
            <AppBar />
            <Content />
            <Footer />
        </div>
    );
};

export default App;