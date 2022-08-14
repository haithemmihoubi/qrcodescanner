import {Navbar} from "./layouts/header/Navbar";
import {QrGeneratorPage} from "./QrGeneratorPage/QrGeneratorPage";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />

                <Routes>
                    <Route path="/" element={<QrGeneratorPage/>}/>
                    <Route path="/generate" element={<QrGeneratorPage></QrGeneratorPage>}/>

                </Routes>
            </Router>
        </div>
    );
}

export default App;
