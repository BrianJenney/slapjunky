import React, { useContext } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { SignIn } from './Pages/SignIn';
import { SongUpload } from './Pages/SongUpload';
import { Music } from './Pages/Music';
import { Register } from './Pages/Register';
import { UserContext } from './contexts/UserContext';

const Routes = () => {
    const history = useHistory();
    const { user } = useContext(UserContext);

    if (window.location.pathname !== '/' && !user?.email) {
        history.push('/');
    }

    return (
        <Switch>
            <Route path="/music">
                <Music user={user} />
            </Route>
            <Route path="/artist/upload">
                <SongUpload user={user} />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/">
                <SignIn />
            </Route>
        </Switch>
    );
};

export default Routes;
