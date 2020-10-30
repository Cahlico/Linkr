import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import UserContext from '../contexts/UserContext';
import { AnimatedSwitch } from './AnimatedSwitch';

export default function App() {

    const [userInfo, setUserInfo] = useState({});
    const [refresh, setRefresh] = useState(false);

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, refresh, setRefresh }}>
            <Router>
                <AnimatedSwitch />
            </Router>
        </UserContext.Provider>
    );
}