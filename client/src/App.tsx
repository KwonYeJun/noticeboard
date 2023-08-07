import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import MainPage from './components/page/mainPage'
import LoginCheckPage from './components/page/LoginCheckPage'

function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");
  const [LatLng, setLatLng] = useState<number[]>([]);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageTitle("");
        break;
      case "/main":
        setPageTitle("홈");
        break;
      case "/user/auth/login":
        setPageTitle("login");
      default:
        setPageTitle("홈");
        break;
    }
  }, [location.pathname]);

  return (
    <>
      <div className="container">
        {/* <Routes>
        // 추후 인트로 페이지겸 로딩 페이지 구상 계획
          <Route path="/" element={<IntroPage />} />
        </Routes> */}
        <Routes>
          <Route path="/main" element={<MainPage />} />
          <Route path="/user/auth/login" element={<LoginCheckPage />} />
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
