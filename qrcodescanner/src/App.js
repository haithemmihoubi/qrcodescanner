import React from 'react';
import { Navbar } from "./layouts/header/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { QrGeneratorPage } from "./pages/QrGeneratorPage/QrGeneratorPage";
import QrScanner from "./pages/QrScannerPage/QrScanner";

function App() {
  return (
    <div className="App">
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <Routes>
            <Route path="/" element={<QrGeneratorPage></QrGeneratorPage>} />
            <Route path="/scan" element={<QrScanner />} />
          </Routes>
          <div></div>
        </div>
      </Router>
    </div>
  );
}

export default App;