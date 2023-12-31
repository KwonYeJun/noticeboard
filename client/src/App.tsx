import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import MainPage from './components/page/mainPage'
import LoginCheckPage from './components/page/LoginCheckPage'
import CreateUserPage from './components/page/CreateUserPage'

function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const [LatLng, setLatLng] = useState<number[]>([]);
  const [currentBgColor, setCurrentBgColor] = useState("#ffffff");
  
  return (
    <>
      <div className="container">

        <Routes>
        <Route
          path="/"
          element={<MainPage currentBgColor={currentBgColor} setCurrentBgColor={setCurrentBgColor} />}
        />
        <Route path="/user/auth/login" element={<LoginCheckPage />} />
        <Route path="/user/auth/createUser" element={<CreateUserPage />} />
        </Routes>
        {[
          "/"
        ].includes(location.pathname) ? null : (
          <>
          </>
        )}
      </div>
    </>
  );
}

export default App;
