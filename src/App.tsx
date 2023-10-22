import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Apply from "./pages/apply";
import Header from "./components/header";
import Philosophy from './pages/philosophy';
import Login from './pages/login';
import { auth } from './pages/firebase';
import Footer from "./components/footer";
import OneTimeInvestment from "./pages/one-time-investment";
import Success from "./pages/success";
import Statistics from "./pages/statistics";


function App() {
  var [login, setLogin] = React.useState(false);

  useEffect(() => {
    
    auth.onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, []);

  return (
    <>
        <BrowserRouter basename="/">
            <Header  login={login}/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="apply" element={<Apply login={login}/>} />
                <Route path="statistics" element = {<Statistics />} />
                <Route path="philosophy" element={<Philosophy />} />
                <Route path="success" element={<Success />} />
                <Route path="investment/one-time" element={<OneTimeInvestment login={login} />} />
                <Route path="login" element={<Login login={login} setLogin={setLogin} />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
