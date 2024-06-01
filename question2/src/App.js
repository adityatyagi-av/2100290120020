import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/MainPage';
import ProductPage from './pages/ProductPage';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/categories/:categoryname/products/:productid" element={<ProductPage />} />
            </Routes>
        </Router>
    );
};

export default App;
