import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Solutions from '../pages/Solutions/Solutions';
import Portfolio from '../pages/Portfolio/Portfolio'


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='servicos' element={<Solutions />} />
                <Route path='portfolio' element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    )
}
