import Main from './pages/Main.jsx';
import CalculatorPage from './pages/Calculator-page.jsx';
import VideosPage from './pages/Videos-page.jsx';
import About from './pages/About.jsx';
import Loan from './pages/Loan.jsx';
import Terms from './pages/Terms.jsx';
import Conditions from './pages/Conditions.jsx';


import React from "react";
import { Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/calculator" element={<CalculatorPage />} />
                <Route path="/videos" element={<VideosPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/loan" element={<Loan />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/conditions" element={<Conditions />} />
                <Route path="*" element={<Error />} />
            </Routes>
            {/* <Conditions></Conditions> */}
        </>
    );
};

export default App;
