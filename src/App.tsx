import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Apply from "./pages/apply";
import Header from "./components/header";
import Philosophy from './pages/philosophy';
import Login from './pages/login';
import { auth } from './pages/firebase';



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
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="apply" element={<Apply login={login}/>} />
                <Route path="philosophy" element={<Philosophy />} />
                <Route path="login" element={<Login login={login} setLogin={setLogin} />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
