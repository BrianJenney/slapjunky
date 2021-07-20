import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import { SongUpload } from './Pages/SongUpload';
import { Music } from './Pages/Music';
import { FooterNav } from './components/FooterNav';

const App = () => {
    return (
        <Router>
            <div>
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
            </div>
            <FooterNav />
        </Router>
    );
};

export default App;
