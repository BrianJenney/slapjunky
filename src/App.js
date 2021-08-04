import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FooterNav } from './components/FooterNav';
import { SongContextProvider } from './contexts/SongContext';
import { UserContextProvider } from './contexts/UserContext';
import Routes from './routes';
const App = () => {
    return (
        <UserContextProvider>
            <SongContextProvider>
                <Router>
                    <Routes />
                    <FooterNav />
                </Router>
            </SongContextProvider>
        </UserContextProvider>
    );
};

export default App;
