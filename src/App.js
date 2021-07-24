import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import { SongUpload } from './Pages/SongUpload';
import { Music } from './Pages/Music';
import { FooterNav } from './components/FooterNav';
import { SongContextProvider } from './contexts/SongContext';
const App = () => {
    return (
        <SongContextProvider>
            <Router>
                <Switch>
                    <Route path="/music">
                        <Music />
                    </Route>
                    <Route path="/artist/upload">
                        <SongUpload />
                    </Route>
                    <Route path="/">
                        <SignIn />
                    </Route>
                </Switch>
                <FooterNav />
            </Router>
        </SongContextProvider>
    );
};

export default App;
