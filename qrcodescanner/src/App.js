import './App.css';
import React from 'react';
import {Navbar} from "./layouts/header/Navbar";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import {QrGeneratorPage} from "./pages/QrGeneratorPage/QrGeneratorPage";
import QrScanner from "./pages/QrScannerPage/QrScanner";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<QrGeneratorPage></QrGeneratorPage>}/>
                    <Route path="/scan" element={<QrScanner />}/>
                </Routes>
            </Router>


        </div>
    );
}

export default App;