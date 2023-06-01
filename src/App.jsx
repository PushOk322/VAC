import Main from './pages/Main.jsx';
import Artwork from './pages/Artwork.jsx';
import Creator from './pages/Creator.jsx';


import React from "react";

import { Routes, Route, Link } from 'react-router-dom';

const App = () => {
    
    return (
        <>
            {/* <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/artwork" element={<Artwork/>} />
            </Routes> */}
            <Creator/>
        </>
    );
};
export default App;