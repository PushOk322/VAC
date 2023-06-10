import Main from './pages/Main.jsx';
import Artwork from './pages/Artwork.jsx';
import Creator from './pages/Creator.jsx';
import Profile from './pages/Profile.jsx';
import Error from './pages/404.jsx';
import Search from './pages/Search.jsx';

import React from "react";
import { Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/artwork" element={<Artwork />} />
                <Route path="/creator" element={<Creator />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Profile />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
};

export default App;
