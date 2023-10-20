import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Apply from "./pages/apply";
import Header from "./components/header";
import Philosophy from './pages/philosophy';


function App() {
  return (
    <>
        <BrowserRouter basename="/">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="apply" element={<Apply />} />
                <Route path="philosophy" element={<Philosophy/>} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
