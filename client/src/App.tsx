import React from 'react';
import './App.css';

import Main from './components/layout/Main'
import Header from './components/layout/Header'

function App() {

  return (
    <>
      <div className="container">
      <Header />
      <Main />
      </div>
    </>
  );
}

export default App;
