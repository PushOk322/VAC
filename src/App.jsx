import Main from './pages/Main.jsx';

import React from "react";
import { Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <>
            {/* <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/artwork" element={<Artwork />} />
                <Route path="/creator" element={<Creator />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Profile />} />
                <Route path="*" element={<Error />} />
            </Routes> */}
            <Main></Main>
        </>
    );
};

export default App;
